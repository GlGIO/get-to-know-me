import { getRecruiterBriefing } from "@/lib/profile";

export const runtime = "nodejs";

export function GET(): Response {
  return new Response(getRecruiterBriefing(), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=300",
    },
  });
}
