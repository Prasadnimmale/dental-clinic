"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { galleryCategories, galleryImages } from "@/data/gallery";
import type { GalleryCategory, GalleryImage } from "@/types";
import { cn } from "@/lib/utils";

type GalleryGridProps = {
  items?: GalleryImage[];
  categories?: GalleryCategory[];
  /** Columns at the largest breakpoint. */
  columns?: 3 | 4;
};

/**
 * Filterable responsive gallery with a keyboard-accessible lightbox.
 *
 * Filtering is derived from props rather than duplicated per category, and the
 * lightbox traps focus / restores it on close so it behaves like a real modal.
 */
export function GalleryGrid({
  items = galleryImages,
  categories = galleryCategories,
  columns = 4,
}: GalleryGridProps) {
  const prefersReducedMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === "All"
        ? items
        : items.filter((item) => item.category === activeCategory),
    [items, activeCategory],
  );

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    triggerRef.current?.focus();
  }, []);

  const showPrevious = useCallback(() => {
    setLightboxIndex((index) =>
      index === null ? index : (index - 1 + filtered.length) % filtered.length,
    );
  }, [filtered.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((index) =>
      index === null ? index : (index + 1) % filtered.length,
    );
  }, [filtered.length]);

  // Arrow keys / Escape while the lightbox is open, plus a Tab loop so focus
  // never escapes the overlay while it covers the page.
  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();

      if (event.key !== "Tab") return;

      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, closeLightbox, showPrevious, showNext]);

  const active = lightboxIndex === null ? null : filtered[lightboxIndex];

  return (
    <div>
      {/* --- Filters --- */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {categories.map((category) => {
          const selected = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveCategory(category);
                setLightboxIndex(null);
              }}
              aria-pressed={selected}
              className={cn(
                "rounded-full px-4.5 py-2.5 text-sm font-semibold transition-[color,background-color,box-shadow,border-color] duration-300",
                selected
                  ? "bg-gradient-brand text-white shadow-brand-glow"
                  : "border border-ink-200 bg-white text-ink-700 hover:border-mint-300 hover:text-mint-700",
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* --- Grid --- */}
      <ul
        className={cn(
          "mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:gap-5",
          columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3",
        )}
      >
        {filtered.map((item, index) => (
          <li key={item.src}>
            <button
              type="button"
              onClick={(event) => {
                triggerRef.current = event.currentTarget;
                setLightboxIndex(index);
              }}
              className="group relative block w-full overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 text-left shadow-soft transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="relative block aspect-4/3 w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </span>

              {/* Overlay */}
              <span
                aria-hidden
                className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink-950/85 via-ink-950/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
              >
                <span className="inline-flex size-9 items-center justify-center rounded-full bg-white/90 text-ink-900">
                  <Maximize2 aria-hidden className="size-4" />
                </span>
                <span className="mt-3 text-sm font-semibold text-white">
                  {item.caption ?? item.alt}
                </span>
                <span className="mt-0.5 text-xs text-white/70">
                  {item.category}
                </span>
              </span>

              {/* Always-visible caption on small screens */}
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/80 to-transparent p-3 transition-opacity duration-300 group-hover:opacity-0 sm:hidden">
                <span className="block text-xs font-semibold text-white">
                  {item.caption ?? item.alt}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {filtered.length === 0 ? (
        <p className="mt-10 text-center text-sm text-ink-500">
          No images in this category yet.
        </p>
      ) : null}

      {/* --- Lightbox --- */}
      <AnimatePresence>
        {active ? (
          <motion.div
            key="lightbox"
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={active.caption ?? active.alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-ink-950/92 p-4 backdrop-blur-sm sm:p-8"
            onClick={closeLightbox}
          >
            <motion.figure
              initial={
                prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }
              }
              animate={{ opacity: 1, scale: 1 }}
              exit={
                prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }
              }
              transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="relative flex max-h-full w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-ink-900 shadow-lift"
            >
              <div className="relative aspect-4/3 w-full bg-ink-950">
                <Image
                  src={active.src}
                  alt={active.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 56rem"
                  className="object-contain"
                />
              </div>

              <figcaption className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
                <span className="text-sm font-semibold text-white">
                  {active.caption ?? active.alt}
                </span>
                <span className="text-xs text-ink-300">
                  {active.category} · {String((lightboxIndex ?? 0) + 1).padStart(2, "0")} /{" "}
                  {String(filtered.length).padStart(2, "0")}
                </span>
              </figcaption>

              {/* Close */}
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeLightbox}
                aria-label="Close image viewer"
                className="absolute top-3 right-3 flex size-10 items-center justify-center rounded-full bg-white/12 text-white ring-1 ring-white/25 backdrop-blur-md transition-colors duration-300 hover:bg-white/25"
              >
                <X aria-hidden className="size-5" />
              </button>

              {/* Previous / next */}
              {filtered.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      showPrevious();
                    }}
                    aria-label="Previous image"
                    className="absolute top-1/2 left-3 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-white ring-1 ring-white/25 backdrop-blur-md transition-colors duration-300 hover:bg-white/25"
                  >
                    <ChevronLeft aria-hidden className="size-5" />
                  </button>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      showNext();
                    }}
                    aria-label="Next image"
                    className="absolute top-1/2 right-3 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/12 text-white ring-1 ring-white/25 backdrop-blur-md transition-colors duration-300 hover:bg-white/25"
                  >
                    <ChevronRight aria-hidden className="size-5" />
                  </button>
                </>
              ) : null}
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}