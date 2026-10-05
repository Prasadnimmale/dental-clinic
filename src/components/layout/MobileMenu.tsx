"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { buttonClasses } from "@/components/common/Button";
import { mainNav, siteConfig } from "@/data/site";
import { navigationServices } from "@/data/services";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  pathname: string;
};

/**
 * Spacious mobile navigation sheet. Rendered inside the header so it inherits
 * the sticky stacking context, and scroll-locked while open.
 */
export function MobileMenu({ open, onClose, pathname }: MobileMenuProps) {
  const prefersReducedMotion = useReducedMotion();
  const [servicesExpanded, setServicesExpanded] = useState(false);

  // Lock body scroll while the sheet is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="mobile-navigation"
          key="mobile-nav"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="lg:hidden"
        >
          {/* Tap-away backdrop — anchored below the header bar so the close
              button stays reachable. */}
          <button
            type="button"
            tabIndex={-1}
            aria-hidden
            onClick={onClose}
            className="absolute inset-x-0 top-full z-40 h-[100dvh] w-full cursor-default bg-ink-950/25 backdrop-blur-[2px]"
          />

          <motion.div
            initial={
              prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -12 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={
              prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -10 }
            }
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full z-50 max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-b border-ink-100 bg-white shadow-lift"
          >
            <nav aria-label="Mobile" className="px-5 pt-2 pb-8 sm:px-6">
              <ul className="flex flex-col">
                {mainNav.map((link) => {
                  const active = isActive(link.href);

                  if (link.label === "Services") {
                    return (
                      <li key={link.href} className="border-b border-ink-100">
                        <button
                          type="button"
                          onClick={() =>
                            setServicesExpanded((expanded) => !expanded)
                          }
                          aria-expanded={servicesExpanded}
                          className={cn(
                            "flex w-full items-center justify-between gap-3 py-4 text-left text-base font-semibold transition-colors",
                            active || servicesExpanded
                              ? "text-mint-700"
                              : "text-ink-800",
                          )}
                        >
                          Services
                          <ChevronDown
                            aria-hidden
                            className={cn(
                              "size-5 text-ink-400 transition-transform duration-300",
                              servicesExpanded && "rotate-180 text-mint-600",
                            )}
                          />
                        </button>

                        <AnimatePresence initial={false}>
                          {servicesExpanded ? (
                            <motion.ul
                              initial={
                                prefersReducedMotion
                                  ? { opacity: 0 }
                                  : { height: 0, opacity: 0 }
                              }
                              animate={
                                prefersReducedMotion
                                  ? { opacity: 1 }
                                  : { height: "auto", opacity: 1 }
                              }
                              exit={
                                prefersReducedMotion
                                  ? { opacity: 0 }
                                  : { height: 0, opacity: 0 }
                              }
                              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              <li className="pb-4">
                                <ul className="space-y-1 rounded-2xl bg-mint-50/70 p-2 ring-1 ring-mint-100">
                                  <li>
                                    <Link
                                      href="/services"
                                      className="flex items-center justify-between gap-2 rounded-xl px-3 py-3 text-sm font-semibold text-mint-800"
                                    >
                                      All services
                                      <ArrowRight aria-hidden className="size-4" />
                                    </Link>
                                  </li>
                                  {navigationServices.map((service) => (
                                    <li key={service.href}>
                                      <Link
                                        href={service.href}
                                        className="block rounded-xl px-3 py-2.5 text-sm text-ink-700 transition-colors hover:bg-white hover:text-mint-700"
                                      >
                                        {service.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </li>
                            </motion.ul>
                          ) : null}
                        </AnimatePresence>
                      </li>
                    );
                  }

                  return (
                    <li key={link.href} className="border-b border-ink-100">
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        className={cn(
                          "block py-4 text-base font-semibold transition-colors",
                          active ? "text-mint-700" : "text-ink-800",
                        )}
                      >
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/appointment"
                  onClick={onClose}
                  className={buttonClasses({ size: "lg" })}
                >
                  Book Appointment
                  <ArrowRight aria-hidden className="size-4" />
                </Link>

                <a
                  href={siteConfig.contact.phoneHref}
                  className={buttonClasses({ variant: "outline", size: "lg" })}
                >
                  <Phone aria-hidden className="size-4" />
                  {siteConfig.contact.phone}
                </a>
              </div>

              {/* Contact details */}
              <dl className="mt-7 space-y-3.5 border-t border-ink-100 pt-6 text-sm">
                <div className="flex gap-3">
                  <dt className="shrink-0">
                    <MapPin
                      aria-hidden
                      className="mt-0.5 size-4 text-mint-600"
                    />
                    <span className="sr-only">Address</span>
                  </dt>
                  <dd className="text-ink-600">
                    {siteConfig.address.line1}, {siteConfig.address.line2},{" "}
                    {siteConfig.address.city}, {siteConfig.address.district} –{" "}
                    {siteConfig.address.postalCode}
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="shrink-0">
                    <Clock aria-hidden className="mt-0.5 size-4 text-mint-600" />
                    <span className="sr-only">Working hours</span>
                  </dt>
                  <dd className="text-ink-600">
                    Mon – Sat: 9:00 AM – 8:00 PM
                    <br />
                    Sunday: 10:00 AM – 2:00 PM
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="shrink-0">
                    <Mail aria-hidden className="mt-0.5 size-4 text-mint-600" />
                    <span className="sr-only">Email</span>
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="break-all text-ink-600"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </dd>
                </div>
              </dl>
            </nav>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}