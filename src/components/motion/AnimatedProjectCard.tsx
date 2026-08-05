"use client";

import * as motion from "motion/react-client";
import type { ReactNode } from "react";
import { motionEase } from "./motion-config";

export function AnimatedProjectCard({ children }: { children: ReactNode }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: motionEase }}
      className="animated-project-card group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-navy/10 bg-white shadow-[0_22px_60px_rgba(10,25,47,0.07)]"
    >
      {children}
    </motion.article>
  );
}
