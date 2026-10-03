import Link from "next/link";
import type { MouseEventHandler } from "react";
import { HaMonogram } from "@/components/branding/ha-monogram";

export function SiteLogo({
  size = "header",
  onClick,
}: {
  priority?: boolean;
  size?: "header" | "footer";
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <Link
      href="/"
      className="group inline-flex shrink-0 items-center gap-3 text-cream"
      aria-label="هشام علي، الصفحة الرئيسية"
      onClick={onClick}
    >
      <span className="flex size-10 items-center justify-center rounded-[0.65rem] border border-cyan/35 bg-cyan/8 transition-colors duration-200 group-hover:border-cyan/70 group-hover:bg-cyan/12">
        <HaMonogram size={30} decorative />
      </span>
      <span className="flex flex-col leading-none" dir="ltr">
        <span
          className={
            size === "footer"
              ? "text-lg font-semibold tracking-[-0.015em]"
              : "text-base font-semibold tracking-[-0.015em] sm:text-lg"
          }
        >
          Hesham Ali
        </span>
        <span className="mt-1.5 text-[0.64rem] font-medium uppercase tracking-[0.12em] text-slate-400">
          Salla Developer
        </span>
      </span>
    </Link>
  );
}
