"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

const whatsappHref = `https://wa.me/${siteConfig.contact.whatsapp}`;

/**
 * Floating WhatsApp action. Appears after a short scroll so it never competes
 * with the hero, and is hidden on the appointment page where it would sit on
 * top of the full-width submit button (that page links the number in text).
 */
export function WhatsAppFab() {
  const prefersReducedMotion = useReducedMotion();
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (pathname === "/appointment") return;
    const onScroll = () => setVisible(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  if (pathname === "/appointment") return null;

  return (
    <AnimatePresence>
      {visible ? (
        <motion.a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Chat with us on WhatsApp"
          initial={
            prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.85, y: 12 }
          }
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={
            prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.9, y: 8 }
          }
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="group fixed right-4 bottom-4 z-40 inline-flex items-center gap-2.5 rounded-full bg-[#25D366] py-3.5 pr-4 pl-4 font-semibold text-white shadow-[0_12px_32px_-10px_rgb(37_211_102/0.7)] transition-transform duration-300 ease-out hover:scale-[1.04] focus-visible:scale-[1.04] sm:right-6 sm:bottom-6 sm:pr-5"
        >
          <MessageCircle aria-hidden className="size-5 shrink-0" />
          <span className="max-w-0 overflow-hidden text-sm whitespace-nowrap opacity-0 transition-all duration-300 ease-out group-hover:max-w-[10rem] group-hover:opacity-100 group-focus-visible:max-w-[10rem] group-focus-visible:opacity-100">
            Chat with us
          </span>
        </motion.a>
      ) : null}
    </AnimatePresence>
  );
}