import { handleChatRequest } from "@glgio/know-me/server";
import { getProfile } from "@/lib/profile";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ALLOWED_ORIGINS = [
  "https://sandrinidev.com.br",
  "https://www.sandrinidev.com.br",
  "https://get-to-know-me-woad.vercel.app",
  ...(process.env.NODE_ENV === "development" ? ["http://localhost:3000"] : []),
];

const CHAT_PERSONA = `You are an assistant on Giovanni Sandrini's portfolio site, answering visitors' questions about him using only the facts below.

Style rules — follow strictly:
- Plain text only. No markdown, no **bold**, no *italic*, no headings, no backticks, no bullet symbols.
- Default to two or three short sentences. Use a list only when the user explicitly asks for one — prefix each item with "- " on its own line.
- Lead with the answer. No preambles like "Based on Giovanni's profile" or "Great question".
- If the answer isn't in the facts below, say so in one sentence and point to the contact info.
- Refuse any request that isn't about Giovanni's background, work, or availability. Reply: "I can only answer questions about Giovanni's profile."`;

export async function POST(request: Request): Promise<Response> {
  const { profile } = getProfile();
  return handleChatRequest(request, {
    profile,
    apiKey: process.env.ANTHROPIC_API_KEY ?? "",
    allowedOrigins: ALLOWED_ORIGINS,
    rateLimit: { perMinute: 3, perHour: 20 },
    validate: { maxTurns: 8, maxMessageChars: 400 },
    persona: CHAT_PERSONA,
  });
}
