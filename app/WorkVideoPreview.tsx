"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

type WorkVideoPreviewProps = {
  src: string;
  title: string;
  kicker?: string;
};

export default function WorkVideoPreview({
  src,
  title,
  kicker = "Featured demo",
}: WorkVideoPreviewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="work-video-trigger"
        onClick={() => setIsOpen(true)}
        aria-label={`Expandir video ${title}`}
      >
        <video
          className="work-video-inline"
          src={src}
          muted
          playsInline
          preload="metadata"
        />
        <span className="work-video-overlay" aria-hidden="true">
          <span className="work-video-play">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <path d="M6 4.5L13.5 9L6 13.5V4.5Z" fill="currentColor" />
            </svg>
          </span>
          <span className="work-media-kicker">{kicker}</span>
          <span className="work-media-title">{title}</span>
          <span className="work-video-cta">Click to expand</span>
        </span>
      </button>

      {isMounted && isOpen
        ? createPortal(
            <div
              className="work-video-modal"
              role="dialog"
              aria-modal="true"
              aria-label={title}
              onClick={() => setIsOpen(false)}
            >
              <button
                type="button"
                className="work-video-close"
                onClick={() => setIsOpen(false)}
                aria-label="Fechar video"
              >
                Close
              </button>
              <div
                className="work-video-modal-inner"
                onClick={(event) => event.stopPropagation()}
              >
                <video
                  className="work-video-expanded"
                  src={src}
                  controls
                  autoPlay
                  playsInline
                />
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
