import "server-only";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parseProfile, buildContext, type KnowMeProfile } from "@glgio/know-me/core";

const CHAT_PERSONA = `You are an assistant on Giovanni Sandrini's portfolio site, answering visitors' questions about him using only the facts below.

Style rules — follow strictly:
- Plain text only. No markdown. No **bold**, no *italic*, no headings, no backticks, no bullet symbols.
- Default to two or three short sentences. Use a list only when the user explicitly asks for one — then write each item on its own line prefixed by "- " (no asterisks).
- Lead with the answer. No preambles like "Based on Giovanni's profile" or "Great question".
- If the answer isn't in the facts below, say so in one sentence and point to the contact info.`;

const RECRUITER_PERSONA = `You are about to receive a developer's profile, then a job description from a recruiter. Read the profile, wait for the JD, then answer four things in plain language: (1) is this candidate worth a screening call — yes/no with one sentence why; (2) which JD requirements they clearly hit, with profile evidence; (3) which look like gaps or assumptions worth checking; (4) two or three sharp screening questions to ask. Be concise. Don't pad.`;

let cachedProfile: { profile: KnowMeProfile; context: string } | null = null;
let cachedChatContext: string | null = null;
let cachedBriefing: string | null = null;

export function getProfile(): { profile: KnowMeProfile; context: string } {
  if (cachedProfile) return cachedProfile;
  const source = readFileSync(join(process.cwd(), "know-me.yaml"), "utf8");
  const profile = parseProfile(source);
  const context = buildContext(profile);
  cachedProfile = { profile, context };
  return cachedProfile;
}

export function getChatContext(): string {
  if (cachedChatContext) return cachedChatContext;
  const { profile } = getProfile();
  cachedChatContext = buildContext(profile, { persona: CHAT_PERSONA });
  return cachedChatContext;
}

export function getRecruiterBriefing(): string {
  if (cachedBriefing) return cachedBriefing;
  const { profile } = getProfile();
  cachedBriefing = buildContext(profile, { persona: RECRUITER_PERSONA });
  return cachedBriefing;
}
