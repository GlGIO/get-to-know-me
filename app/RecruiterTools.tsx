"use client";

import { useState } from "react";

interface Props {
  prompt: string;
}

export default function RecruiterTools({ prompt }: Props) {
  const [copied, setCopied] = useState(false);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = prompt;
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

  const encoded = encodeURIComponent(prompt);
  const chatgptUrl = `https://chatgpt.com/?q=${encoded}`;
  const claudeUrl = `https://claude.ai/new?q=${encoded}`;

  return (
    <div className="rt-actions">
      <button type="button" className="rt-btn rt-btn--primary" onClick={onCopy}>
        {copied ? "Copied ✓" : "Copy prompt"}
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
