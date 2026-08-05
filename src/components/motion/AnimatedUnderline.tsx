"use client";

import { motion, useReducedMotion } from "motion/react";

export function AnimatedUnderline({ active }: { active: boolean }) {
  const reduceMotion = useReducedMotion();
  if (!active) return null;

  return (
    <motion.span
      layoutId={reduceMotion ? undefined : "active-navigation-indicator"}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.35 }}
      className="absolute inset-x-3 bottom-1 h-px rounded-full bg-cyan lg:inset-x-4"
      aria-hidden="true"
    />
  );
}
