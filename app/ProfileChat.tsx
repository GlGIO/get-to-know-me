"use client";

import { ChatWidget } from "@glgio/know-me/widget";

export default function ProfileChat() {
  return (
    <ChatWidget
      title="Ask my profile"
      placeholder="Ask about projects, stack, availability…"
      greeting="Hi — I'm an AI trained on Giovanni's portfolio. Ask anything."
      suggestions={[
        "What is Giovanni working on now?",
        "Is he open to new roles?",
        "What is his strongest stack?",
      ]}
      theme={{
        accent: "#b8ff3c",
        onAccent: "#0f0f0f",
        background: "#0f0f0f",
        foreground: "#ededed",
        border: "#1c1c1c",
      }}
    />
  );
}
