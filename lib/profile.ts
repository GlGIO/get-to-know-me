import "server-only";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { parseProfile, buildContext, type KnowMeProfile } from "@glgio/know-me/core";

let cached: { profile: KnowMeProfile; context: string } | null = null;

export function getProfile(): { profile: KnowMeProfile; context: string } {
  if (cached) return cached;
  const source = readFileSync(join(process.cwd(), "know-me.yaml"), "utf8");
  const profile = parseProfile(source);
  const context = buildContext(profile);
  cached = { profile, context };
  return cached;
}
