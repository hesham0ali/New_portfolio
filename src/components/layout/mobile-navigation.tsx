"use client";

import { useEffect, useRef, useState } from "react";
import type { NavigationItem, PortfolioData } from "@/types/portfolio";
import { SiteLogo } from "./site-logo";

type MobileNavigationProps = {
  items: NavigationItem[];
  whatsapp: PortfolioData["person"]["whatsapp"];
};

export function MobileNavigation({ items, whatsapp }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        requestAnimationFrame(() => toggleRef.current?.focus());
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeAndReturnFocus = () => {
    setIsOpen(false);
    requestAnimationFrame(() => toggleRef.current?.focus());
  };

  return (
    <div className="lg:hidden">
      <button
        ref={toggleRef}
        type="button"
        className="menu-button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span aria-hidden="true" className="menu-button-lines">
          <span />
          <span />
        </span>
        <span>Menu</span>
      </button>

      {isOpen ? (
        <div
          id="mobile-navigation"
          className="fixed inset-0 z-[70] flex flex-col bg-navy px-5 py-5 text-cream"
        >
          <div className="flex items-center justify-between border-b border-white/15 pb-5">
            <SiteLogo onClick={() => setIsOpen(false)} />
            <button
              type="button"
              className="inline-flex min-h-11 items-center rounded-full border border-white/25 px-4 text-sm font-semibold"
              onClick={closeAndReturnFocus}
            >
              Close
            </button>
          </div>

          <nav aria-label="Mobile navigation" className="flex flex-1 flex-col justify-center">
            <ul className="divide-y divide-white/10">
              {items.map((item, index) => (
                <li key={item.href}>
                  <a
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    className="flex min-h-16 items-center justify-between text-2xl font-semibold tracking-tight"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                    <span aria-hidden="true" className="font-mono text-sm text-cyan">
                      0{index + 1}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={whatsapp.ariaLabel}
            className="button-primary w-full"
            onClick={() => setIsOpen(false)}
          >
            {whatsapp.label}
          </a>
        </div>
      ) : null}
    </div>
  );
}
