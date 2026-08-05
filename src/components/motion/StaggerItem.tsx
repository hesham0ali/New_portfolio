"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { motionEase } from "./motion-config";

export function StaggerItem({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li" | "article";
}) {
  const reduceMotion = useReducedMotion();
  const Component =
    as === "li" ? motion.li : as === "article" ? motion.article : motion.div;

  return (
    <Component
      variants={{
        visible: reduceMotion
          ? {
              opacity: [0.96, 1],
              transition: { duration: 0.12 },
            }
          : {
              opacity: [0, 1],
              y: [18, 0],
              transition: { duration: 0.44, ease: motionEase },
            },
      }}
      className={className}
    >
      {children}
    </Component>
  );
}
