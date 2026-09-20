import { ImageResponse } from "next/og";
import { SocialCard } from "@/components/branding/social-card";

export const alt =
  "هشام علي، مطور سلة متخصص في تصميم وتطوير متاجر سلة";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<SocialCard />, size);
}
