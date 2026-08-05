"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { motionEase } from "./motion-config";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  distance?: number;
  trigger?: "mount" | "viewport";
};

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 18,
  trigger = "viewport",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion
    ? { opacity: [0.96, 1] }
    : { opacity: [0, 1], y: [Math.min(distance, 24), 0] };
  const animationProps =
    trigger === "mount"
      ? { animate: reveal }
      : { whileInView: reveal, viewport: { once: true, amount: 0.15 } };

  return (
    <motion.div
      initial={false}
      {...animationProps}
      transition={{
        duration: reduceMotion ? 0.12 : 0.44,
        delay: reduceMotion ? 0 : delay,
        ease: motionEase,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
