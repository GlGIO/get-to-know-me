import { handleMcpRequest } from "@glgio/know-me/mcp";
import { getProfile } from "@/lib/profile";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request): Promise<Response> {
  const { profile } = getProfile();
  return handleMcpRequest(request, { profile });
}

export function GET(): Response {
  return new Response("Method Not Allowed — POST JSON-RPC to this endpoint", {
    status: 405,
  });
}
