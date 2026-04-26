import Anthropic from "@anthropic-ai/sdk";
import { getChatContext } from "@/lib/profile";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// ---------------------------------------------------------------------------
// Origin allowlist
// ---------------------------------------------------------------------------
const ALLOWED_ORIGINS = new Set(
  [
    process.env.NEXT_PUBLIC_SITE_URL,
    "https://sandrinidev.com.br",
    "https://www.sandrinidev.com.br",
    "https://get-to-know-me-woad.vercel.app",
    process.env.NODE_ENV === "development" ? "http://localhost:3000" : null,
  ].filter(Boolean) as string[],
);

function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  return ALLOWED_ORIGINS.has(origin);
}

// ---------------------------------------------------------------------------
// In-memory rate limiter — sliding window per IP
// ---------------------------------------------------------------------------
const MAX_PER_MINUTE = 3;
const MAX_PER_HOUR = 20;

type RateEntry = { minute: number[]; hour: number[] };
const rateMap = new Map<string, RateEntry>();

function getIp(request: Request): string {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ?? "unknown"
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const minuteAgo = now - 60_000;
  const hourAgo = now - 3_600_000;

  const entry = rateMap.get(ip) ?? { minute: [], hour: [] };

  entry.minute = entry.minute.filter((t) => t > minuteAgo);
  entry.hour = entry.hour.filter((t) => t > hourAgo);

  if (entry.minute.length >= MAX_PER_MINUTE || entry.hour.length >= MAX_PER_HOUR) {
    rateMap.set(ip, entry);
    return true;
  }

  entry.minute.push(now);
  entry.hour.push(now);
  rateMap.set(ip, entry);
  return false;
}

// ---------------------------------------------------------------------------
// Message validation
// ---------------------------------------------------------------------------
const MAX_TURNS = 8;
const MAX_MSG_CHARS = 400;
const MAX_BODY_BYTES = 10_240; // 10 KB

type ChatMessage = { role: "user" | "assistant"; content: string };

function sanitize(text: string): string {
  // strip control characters except newline and tab
  return text.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "").trim();
}

// ---------------------------------------------------------------------------
// Handler
// ---------------------------------------------------------------------------
export async function POST(request: Request): Promise<Response> {
  if (!isAllowedOrigin(request)) {
    return new Response("Forbidden", { status: 403 });
  }

  const ip = getIp(request);
  if (isRateLimited(ip)) {
    return new Response("Too many requests", { status: 429 });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return new Response("Server misconfiguration", { status: 500 });
  }

  // body size guard
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return new Response("Payload too large", { status: 413 });
  }

  let body: { messages?: ChatMessage[] };
  try {
    const text = await request.text();
    if (text.length > MAX_BODY_BYTES) return new Response("Payload too large", { status: 413 });
    body = JSON.parse(text);
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const messages: ChatMessage[] = (body.messages ?? [])
    .filter(
      (m): m is ChatMessage =>
        m != null &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string",
    )
    .slice(-MAX_TURNS)
    .map((m) => ({ role: m.role, content: sanitize(m.content).slice(0, MAX_MSG_CHARS) }))
    .filter((m) => m.content.length > 0);

  if (messages.length === 0) {
    return new Response("messages[] is required", { status: 400 });
  }

  const system = getChatContext();
  const client = new Anthropic({ apiKey });
  const stream = await client.messages.stream({
    model: "claude-haiku-4-5-20251001",
    max_tokens: 384,
    system,
    messages,
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const event of stream) {
          if (
            event.type === "content_block_delta" &&
            event.delta.type === "text_delta"
          ) {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
      } catch (err) {
        const msg = err instanceof Error ? err.message : "stream error";
        controller.enqueue(encoder.encode(`\n\n[error: ${msg}]`));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
    },
  });
}
