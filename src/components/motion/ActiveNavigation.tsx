"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type { NavigationItem } from "@/types/portfolio";
import { AnimatedUnderline } from "./AnimatedUnderline";

export function ActiveNavigation({ items }: { items: NavigationItem[] }) {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("#home");
  const activeHref =
    pathname === "/"
      ? activeHash
      : pathname.startsWith("/projects")
        ? "/#projects"
        : undefined;

  useEffect(() => {
    if (pathname !== "/") return;

    const sectionLinks = items.filter((item) => item.href.startsWith("#"));
    const sections = sectionLinks
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveHash(`#${visible.target.id}`);
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: [0, 0.15, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items, pathname]);

  return (
    <nav aria-label="Primary navigation" className="hidden lg:block">
      <ul className="flex items-center gap-1">
        {items.map((item) => {
          const active = activeHref === item.href;
          return (
            <li key={item.href}>
              <a
                href={item.href}
                aria-current={active ? "location" : undefined}
                className="relative inline-flex min-h-11 items-center rounded-full px-3 text-sm text-slate-300 transition-colors hover:bg-white/8 hover:text-white lg:px-4"
              >
                {item.label}
                <AnimatedUnderline active={active} />
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
