import Image from "next/image";
import Link from "next/link";
import type { MouseEventHandler } from "react";

export function SiteLogo({
  priority = false,
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
      className="inline-flex shrink-0"
      aria-label="Hesham Ali, home"
      onClick={onClick}
    >
      <span
        className={`relative block overflow-hidden ${
          size === "footer" ? "h-12 w-44" : "h-10 w-40"
        }`}
      >
        <Image
          src="/logo.png"
          alt="Hesham Ali"
          width={1536}
          height={1024}
          priority={priority}
          sizes={size === "footer" ? "176px" : "160px"}
          className="absolute top-1/2 left-1/2 h-auto w-[18rem] max-w-none -translate-x-1/2 -translate-y-1/2 brightness-0 invert"
        />
      </span>
    </Link>
  );
}
