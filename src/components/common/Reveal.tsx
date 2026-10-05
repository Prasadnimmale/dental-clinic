"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** Seconds to wait before revealing — use to stagger sibling cards. */
  delay?: number;
  /** Vertical offset in pixels before the element settles. */
  y?: number;
  /** Set `false` for above-the-fold content that should animate immediately. */
  inView?: boolean;
};

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Lightweight scroll-reveal wrapper.
 *
 * Animates a single property change (opacity + small translate) exactly once,
 * and renders statically when the visitor prefers reduced motion — so the page
 * never looks like an animation demo.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  inView = true,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const transition = {
    duration: 0.6,
    delay,
    ease: EASE,
  } as const;

  if (!inView) {
    return (
      <motion.div
        className={className}
        initial={{ opacity: 0, y }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px 0px -80px 0px" }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}