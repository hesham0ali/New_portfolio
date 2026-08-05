import { ImageResponse } from "next/og";
import { HaMonogram } from "@/components/branding/ha-monogram";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a192f",
        }}
      >
        <HaMonogram size={142} />
      </div>
    ),
    size,
  );
}
