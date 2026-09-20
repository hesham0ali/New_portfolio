import Link from "next/link";
import type { MouseEventHandler } from "react";

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
      className="inline-flex shrink-0 items-center text-cream"
      aria-label="هشام علي، الصفحة الرئيسية"
      onClick={onClick}
    >
      <span
        className={
          size === "footer"
            ? "text-2xl font-extrabold leading-none"
            : "text-xl font-extrabold leading-none sm:text-2xl"
        }
      >
        هشام علي
      </span>
    </Link>
  );
}
