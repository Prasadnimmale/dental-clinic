"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "lucide-react";
import type { FaqItem } from "@/types";
import { cn } from "@/lib/utils";

type FaqAccordionProps = {
  items: FaqItem[];
  /** Index opened on first render. */
  defaultOpen?: number | null;
  /** Light text for dark section backgrounds. */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * Single-open accordion. Exactly one panel animates at a time and the whole
 * component renders statically when reduced motion is requested.
 */
export function FaqAccordion({
  items,
  defaultOpen = 0,
  tone = "light",
  className,
}: FaqAccordionProps) {
  const prefersReducedMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

  const dark = tone === "dark";

  return (
    <div className={cn("divide-y", dark ? "divide-white/12" : "divide-ink-100", className)}>
      {items.map((item, index) => {
        const open = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;

        return (
          <div key={item.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : index)}
                className={cn(
                  "flex w-full items-start justify-between gap-5 py-5 text-left transition-colors duration-200 sm:py-6",
                  dark ? "hover:text-white" : "hover:text-mint-700",
                  open && !dark && "text-mint-700",
                )}
              >
                <span className="text-[1.0625rem] leading-snug font-semibold sm:text-lg">
                  {item.question}
                </span>

                <span
                  aria-hidden
                  className={cn(
                    "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full transition-[transform,background-color,color] duration-300",
                    open
                      ? "rotate-45 bg-gradient-brand text-white"
                      : dark
                        ? "bg-white/10 text-white"
                        : "bg-mint-50 text-mint-700",
                  )}
                >
                  <Plus className="size-4" strokeWidth={2.5} />
                </span>
              </button>
            </h3>

            <AnimatePresence initial={false}>
              {open ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={
                    prefersReducedMotion
                      ? { opacity: 0 }
                      : { height: 0, opacity: 0 }
                  }
                  animate={
                    prefersReducedMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }
                  }
                  exit={
                    prefersReducedMotion
                      ? { opacity: 0 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p
                    className={cn(
                      "max-w-2xl pb-6 text-[0.9375rem] leading-relaxed",
                      dark ? "text-ink-200/85" : "text-ink-600",
                    )}
                  >
                    {item.answer}
                  </p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}