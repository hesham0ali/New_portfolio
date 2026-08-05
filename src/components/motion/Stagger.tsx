"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  trigger?: "mount" | "viewport";
  as?: "div" | "ol";
};

export function Stagger({
  children,
  className,
  delay = 0,
  trigger = "viewport",
  as = "div",
}: StaggerProps) {
  const reduceMotion = useReducedMotion();
  const Component = as === "ol" ? motion.ol : motion.div;
  const animationProps =
    trigger === "mount"
      ? { animate: "visible" }
      : {
          whileInView: "visible",
          viewport: { once: true, amount: 0.15 },
        };

  return (
    <Component
      initial={false}
      variants={{
        visible: {
          transition: {
            delayChildren: reduceMotion ? 0 : delay,
            staggerChildren: reduceMotion ? 0 : 0.06,
          },
        },
      }}
      {...animationProps}
      className={className}
    >
      {children}
    </Component>
  );
}
