"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import type { NavigationItem, PortfolioData } from "@/types/portfolio";
import { SiteLogo } from "./site-logo";

type MobileNavigationProps = {
  items: NavigationItem[];
  whatsapp: PortfolioData["person"]["whatsapp"];
};

const focusableSelector =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileNavigation({ items, whatsapp }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  const updateOpenState = useCallback((open: boolean) => {
    document.body.toggleAttribute("data-mobile-navigation-open", open);
    setIsOpen(open);
  }, []);

  useEffect(() => {
    return () => document.body.removeAttribute("data-mobile-navigation-open");
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        updateOpenState(false);
        requestAnimationFrame(() => toggleRef.current?.focus());
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      );
      const first = focusable[0];
      const last = focusable.at(-1);
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, updateOpenState]);

  const closeAndReturnFocus = () => {
    updateOpenState(false);
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
        aria-label={isOpen ? "إغلاق قائمة التنقل" : "فتح قائمة التنقل"}
        onClick={() => updateOpenState(!isOpen)}
      >
        <span aria-hidden="true" className="menu-button-lines">
          <span />
          <span />
        </span>
        <span>القائمة</span>
      </button>

      {isOpen ? (
        <div
          ref={dialogRef}
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="قائمة التنقل"
          className="fixed inset-0 z-[70] flex flex-col bg-navy px-5 py-5 text-cream"
        >
          <div className="flex items-center justify-between border-b border-white/15 pb-5">
            <SiteLogo onClick={() => updateOpenState(false)} />
            <button
              type="button"
              className="inline-flex min-h-11 items-center rounded-[0.7rem] border border-white/25 px-4 text-sm font-semibold transition-colors hover:border-cyan hover:text-cyan"
              onClick={closeAndReturnFocus}
            >
              إغلاق
            </button>
          </div>

          <nav aria-label="التنقل على الجوال" className="flex flex-1 flex-col justify-center">
            <ul className="divide-y divide-white/10">
              {items.map((item, index) => (
                <li key={item.href}>
                  <a
                    ref={index === 0 ? firstLinkRef : undefined}
                    href={item.href}
                    className="flex min-h-16 items-center justify-between text-2xl font-medium transition-colors hover:text-cyan"
                    onClick={() => updateOpenState(false)}
                  >
                    {item.label}
                    <span aria-hidden="true" className="font-mono text-sm text-cyan" dir="ltr">
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
            onClick={() => updateOpenState(false)}
          >
            {whatsapp.label}
          </a>
        </div>
      ) : null}
    </div>
  );
}
