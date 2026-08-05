import { ImageResponse } from "next/og";
import { SocialCard } from "@/components/branding/social-card";

export const alt =
  "Hesham Ali, Software Engineer — Backend, Integrations, WordPress, and E-commerce";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<SocialCard />, size);
}
