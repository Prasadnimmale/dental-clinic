"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Clock, Mail, MapPin, Phone } from "lucide-react";
import { ClinicBrand } from "@/components/common/ClinicBrand";
import { MobileMenu } from "./MobileMenu";
import { buttonClasses } from "@/components/common/Button";
import { mainNav, siteConfig } from "@/data/site";
import { navigationServices } from "@/data/services";
import { cn } from "@/lib/utils";

/**
 * Sticky site header: contact strip, wordmark, primary navigation with a
 * services dropdown, and the gradient appointment call to action.
 */
export function Navbar() {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Shadow only once the page has moved — keeps the header from looking heavy.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Any navigation closes both menus. Adjusted during render (rather than in an
  // effect) so the menus never flash open on the destination page.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setMobileOpen(false);
    setServicesOpen(false);
  }

  // Escape closes the dropdown for keyboard users.
  useEffect(() => {
    if (!servicesOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setServicesOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [servicesOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const servicesActive = pathname.startsWith("/services");

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-white/92 backdrop-blur-xl transition-shadow duration-300",
        scrolled ? "border-ink-100 shadow-nav" : "border-transparent",
      )}
    >
      {/* --- Contact strip (desktop only) --- */}
      <div className="hidden border-b border-ink-100 bg-gradient-brand-soft lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-8 py-2 text-[0.8125rem] text-ink-600">
          <p className="inline-flex items-center gap-2">
            <MapPin aria-hidden className="size-4 text-mint-600" />
            {siteConfig.address.line1}, {siteConfig.address.city},{" "}
            {siteConfig.address.district}, {siteConfig.address.postalCode}
          </p>

          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <Clock aria-hidden className="size-4 text-mint-600" />
              Mon – Sat: 9:00 AM – 8:00 PM
            </span>
            <a
              href={siteConfig.contact.phoneHref}
              className="inline-flex items-center gap-2 rounded transition-colors hover:text-mint-700"
            >
              <Phone aria-hidden className="size-4 text-mint-600" />
              {siteConfig.contact.phone}
            </a>
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="inline-flex items-center gap-2 rounded transition-colors hover:text-mint-700"
            >
              <Mail aria-hidden className="size-4 text-mint-600" />
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </div>

      {/* --- Main bar --- */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3 sm:gap-4 sm:px-6 lg:px-6 lg:py-4 xl:px-8">
        <ClinicBrand />

        {/* Desktop navigation. Padding and gaps stay compact at `lg` and open up
            at `xl` so the bar never collides with the wordmark or CTA. */}
        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center xl:gap-1">
            {mainNav.map((link) => {
              if (link.label === "Services") {
                return (
                  <li
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={link.href}
                      aria-expanded={servicesOpen}
                      onFocus={() => setServicesOpen(true)}
                      className={cn(
                        "relative inline-flex items-center gap-1.5 rounded-lg px-2 py-2 text-sm font-semibold xl:text-[0.9375rem] transition-colors duration-200 hover:text-mint-700 xl:px-3.5",
                        servicesActive && "text-mint-700",
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        aria-hidden
                        className={cn(
                          "size-4 transition-transform duration-300",
                          servicesOpen && "rotate-180",
                        )}
                      />
                      <NavIndicator active={servicesActive} />
                    </Link>

                    <AnimatePresence>
                      {servicesOpen ? (
                        <motion.div
                          initial={
                            prefersReducedMotion
                              ? { opacity: 0 }
                              : { opacity: 0, y: 10 }
                          }
                          animate={{ opacity: 1, y: 0 }}
                          exit={
                            prefersReducedMotion
                              ? { opacity: 0 }
                              : { opacity: 0, y: 6 }
                          }
                          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-full left-1/2 w-[27rem] -translate-x-1/2 pt-3"
                        >
                          <div className="overflow-hidden rounded-2xl border border-ink-100 bg-white p-2 shadow-lift">
                            <p className="px-3 pt-2 pb-2 text-[0.6875rem] font-semibold tracking-[0.12em] text-ink-400 uppercase">
                              Our Services
                            </p>
                            <ul className="grid gap-0.5 sm:grid-cols-2">
                              {navigationServices.map((service) => (
                                <li key={service.href}>
                                  <Link
                                    href={service.href}
                                    className="group flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-ink-700 transition-colors duration-200 hover:bg-mint-50 hover:text-mint-700"
                                  >
                                    {service.label}
                                    <ArrowRight
                                      aria-hidden
                                      className="size-4 -translate-x-1 text-mint-500 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                                    />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            <Link
                              href="/services"
                              className="mt-1 flex items-center justify-between rounded-xl bg-gradient-brand-soft px-3 py-2.5 text-sm font-semibold text-mint-700 transition-colors duration-200 hover:text-mint-800"
                            >
                              View all services
                              <ArrowRight aria-hidden className="size-4" />
                            </Link>
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </li>
                );
              }

              const active = isActive(link.href);

              return (
                <li key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative inline-flex items-center rounded-lg px-2 py-2 text-sm font-semibold xl:text-[0.9375rem] transition-colors duration-200 hover:text-mint-700 xl:px-3.5",
                      active && "text-mint-700",
                    )}
                  >
                    {link.label}
                    <NavIndicator active={active} />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={siteConfig.contact.phoneHref}
            aria-label={`Call ${siteConfig.brandName} on ${siteConfig.contact.phone}`}
            className="hidden size-10 items-center justify-center rounded-full border border-ink-200 text-ink-700 transition-colors duration-200 hover:border-mint-300 hover:bg-mint-50 hover:text-mint-700 xl:inline-flex"
          >
            <Phone aria-hidden className="size-4" />
          </a>

          {/* Below `sm` the sheet carries the appointment CTA, so the bar keeps
              just the wordmark and the menu button. `max-sm:` (rather than
              `hidden sm:`) avoids a display conflict with the button base. */}
          <Link
            href="/appointment"
            className={buttonClasses({
              size: "sm",
              className: "max-sm:hidden",
            })}
          >
            Book Appointment
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="inline-flex size-10 items-center justify-center rounded-xl border border-ink-200 bg-white text-ink-800 transition-colors duration-200 hover:border-mint-300 hover:text-mint-700 lg:hidden"
          >
            <span aria-hidden className="relative flex size-5 items-center justify-center">
              <span
                className={cn(
                  "absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-200",
                  mobileOpen ? "rotate-45" : "-translate-y-1.5",
                )}
              />
              <span
                className={cn(
                  "absolute h-0.5 w-5 rounded-full bg-current transition-opacity duration-200",
                  mobileOpen ? "opacity-0" : "opacity-100",
                )}
              />
              <span
                className={cn(
                  "absolute h-0.5 w-5 rounded-full bg-current transition-transform duration-200",
                  mobileOpen ? "-rotate-45" : "translate-y-1.5",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </header>
  );
}

/** Gradient underline that grows from the centre on hover / active. */
function NavIndicator({ active }: { active: boolean }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-x-3 -bottom-0.5 h-0.5 origin-center scale-x-0 rounded-full bg-gradient-brand transition-transform duration-300 ease-out group-hover:scale-x-100",
        active && "scale-x-100",
      )}
    />
  );
}