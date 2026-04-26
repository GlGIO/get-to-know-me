"use client";

import { useState } from "react";

interface Props {
  briefing: string;
}

export default function RecruiterTools({ briefing }: Props) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(briefing);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // older browsers / blocked clipboard
      const ta = document.createElement("textarea");
      ta.value = briefing;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  }

  const encoded = encodeURIComponent(briefing);
  const chatgptUrl = `https://chatgpt.com/?q=${encoded}`;
  const claudeUrl = `https://claude.ai/new?q=${encoded}`;

  return (
    <div className="rt-actions">
      <button type="button" className="rt-btn rt-btn--primary" onClick={onCopy}>
        {copied ? "Copied ✓" : "Copy briefing"}
      </button>
      <a
        href={chatgptUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rt-btn"
      >
        Open in ChatGPT ↗
      </a>
      <a
        href={claudeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="rt-btn"
      >
        Open in Claude ↗
      </a>
    </div>
  );
}
