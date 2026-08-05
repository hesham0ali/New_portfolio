"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";
import { motionEase } from "./motion-config";

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.44, ease: motionEase }}
    >
      {children}
    </MotionConfig>
  );
}
