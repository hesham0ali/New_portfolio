"use client";

import { useEffect, useState } from "react";

type FloatingControlsProps = {
  whatsappUrl: string;
};

const scrollThreshold = 600;

export function FloatingControls({ whatsappUrl }: FloatingControlsProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setShowBackToTop(window.scrollY >= scrollThreshold);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  const safeAreaPosition = {
    bottom: "calc(1rem + env(safe-area-inset-bottom))",
  };

  return (
    <>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل مع هشام عبر واتساب — يفتح في نافذة جديدة"
        title="تواصل عبر واتساب"
        style={safeAreaPosition}
        className="fixed right-4 z-[60] inline-flex size-12 items-center justify-center rounded-[0.9rem] border border-cyan bg-cyan text-navy shadow-[0_10px_30px_rgba(11,27,48,0.18)] transition-[transform,background-color,border-color] duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white focus-visible:outline-[3px] focus-visible:outline-cyan focus-visible:outline-offset-4 motion-reduce:transform-none motion-reduce:transition-none sm:right-6 lg:right-8"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 11.5a8 8 0 0 1-11.6 7.1L4 20l1.4-4.2A8 8 0 1 1 20 11.5Z" />
          <path d="M8.7 8.3c.2-.4.4-.4.7-.4h.4c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.6.7c-.2.2-.1.5 0 .7.6 1 1.4 1.8 2.4 2.3.2.1.5.2.7 0l.8-1c.2-.2.4-.3.7-.2l1.8.8c.3.1.4.3.4.5 0 .4-.2 1.3-.8 1.8-.6.5-1.4.7-2.3.5-1.3-.3-3-1.2-4.5-2.7-1.2-1.2-2.1-2.7-2.4-3.8-.3-.8 0-1.5.3-2Z" />
        </svg>
      </a>

      {showBackToTop ? (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="العودة إلى أعلى الصفحة"
          title="العودة للأعلى"
          style={safeAreaPosition}
          className="fixed left-4 z-[60] inline-flex size-12 items-center justify-center rounded-[0.9rem] border border-navy/15 bg-white text-navy shadow-[0_10px_30px_rgba(11,27,48,0.12)] transition-[transform,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-blue hover:text-blue focus-visible:outline-[3px] focus-visible:outline-cyan focus-visible:outline-offset-4 motion-reduce:transform-none motion-reduce:transition-none sm:left-6 lg:left-8"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="size-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 15 6-6 6 6" />
          </svg>
        </button>
      ) : null}
    </>
  );
}
