"use client";

import * as motion from "motion/react-client";
import type { ReactNode } from "react";
import { motionEase } from "./motion-config";

export function AnimatedProjectCard({ children }: { children: ReactNode }) {
  return (
    <motion.article
      whileHover={{ y: -2 }}
      transition={{ duration: 0.28, ease: motionEase }}
      className="animated-project-card group flex h-full flex-col overflow-hidden rounded-[1.1rem] border border-navy/10 bg-white shadow-[0_16px_42px_rgba(11,27,48,0.055)]"
    >
      {children}
    </motion.article>
  );
}
