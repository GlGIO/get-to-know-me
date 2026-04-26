import "server-only";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parseProfile, buildContext, type KnowMeProfile } from "@glgio/know-me/core";

let cachedProfile: { profile: KnowMeProfile; context: string } | null = null;
let cachedRecruiterPrompt: string | null = null;
let cachedProfileText: string | null = null;

export function getProfile(): { profile: KnowMeProfile; context: string } {
  if (cachedProfile) return cachedProfile;
  const source = readFileSync(join(process.cwd(), "know-me.yaml"), "utf8");
  const profile = parseProfile(source);
  const context = buildContext(profile);
  cachedProfile = { profile, context };
  return cachedProfile;
}

export function getProfileText(): string {
  if (cachedProfileText) return cachedProfileText;
  cachedProfileText = getProfile().context;
  return cachedProfileText;
}

export function getRecruiterPrompt(): string {
  if (cachedRecruiterPrompt) return cachedRecruiterPrompt;
  const { profile } = getProfile();
  const siteUrl = profile.siteUrl?.replace(/\/$/, "");
  if (!siteUrl) throw new Error("know-me.yaml must include a `siteUrl` field.");

  const name = profile.identity.name;
  cachedRecruiterPrompt = `This is the developer profile of ${name}.

Use whichever approach your environment supports:

**Option A — MCP (preferred, if you can make HTTP POST requests):**
Endpoint: POST ${siteUrl}/api/mcp

Available tools:
- get_profile — full structured profile (identity, experience, skills, projects, links)
- get_skills — skills grouped by primary, secondary, and currently-learning
- match_role — pass a job description, returns match score + gap analysis

Start by listing tools:
{"jsonrpc":"2.0","method":"tools/list","params":{},"id":1}

**Option B — Simple fetch (fallback):**
GET ${siteUrl}/api/profile.md

Once you have the profile, I'll share a job description for fit assessment.`;

  return cachedRecruiterPrompt;
}
