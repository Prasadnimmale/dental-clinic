import Link from "next/link";
import {
  ArrowUpRight,
  Camera,
  Clock,
  Mail,
  MapPin,
  Phone,
  Play,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { ClinicBrand } from "@/components/common/ClinicBrand";
import {
  footerQuickLinks,
  fullAddress,
  siteConfig,
  workingHours,
} from "@/data/site";
import { navigationServices } from "@/data/services";

const socialLinks = [
  {
    label: "Facebook",
    href: siteConfig.social.facebook,
    icon: <FacebookMark className="size-4.5" />,
  },
  {
    label: "Instagram",
    href: siteConfig.social.instagram,
    icon: <Camera aria-hidden className="size-4.5" />,
  },
  {
    label: "YouTube",
    href: siteConfig.social.youtube,
    icon: <Play aria-hidden className="size-4.5" />,
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: <LinkedInMark className="size-4.5" />,
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/${siteConfig.contact.whatsapp}`,
    icon: <WhatsAppMark className="size-4.5" />,
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden bg-ink-900 text-ink-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-brand"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 size-[28rem] rounded-full bg-gradient-brand opacity-[0.07] blur-3xl"
      />

      <Container className="relative">
        <div className="grid gap-12 py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">
          {/* Brand + about */}
          <div className="lg:col-span-4 lg:pr-8">
            <ClinicBrand tone="light" />

            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-200/85">
              {siteConfig.logoName} is a multispeciality dental clinic in{" "}
              {siteConfig.address.city}, {siteConfig.address.state} — offering
              general, cosmetic, surgical and paediatric dentistry under one
              roof, with transparent plans and careful, unhurried care.
            </p>

            <ul className="mt-7 flex items-center gap-2.5">
              {socialLinks.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${siteConfig.brandName} on ${label}`}
                    className="flex size-10 items-center justify-center rounded-xl border border-white/12 text-ink-100/80 transition-[color,background-color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-white hover:text-ink-900"
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <nav aria-label="Quick links" className="lg:col-span-2">
            <h2 className="text-sm font-bold tracking-[0.12em] text-white uppercase">
              Quick Links
            </h2>
            <ul className="mt-5 space-y-3">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Services" className="lg:col-span-3">
            <h2 className="text-sm font-bold tracking-[0.12em] text-white uppercase">
              Our Services
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {navigationServices.map((service) => (
                <li key={service.href}>
                  <FooterLink href={service.href}>{service.label}</FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact + hours */}
          <div className="lg:col-span-3">
            <h2 className="text-sm font-bold tracking-[0.12em] text-white uppercase">
              Contact
            </h2>

            <address className="mt-5 space-y-4 text-sm not-italic">
              <a
                href={siteConfig.maps.directionsHref}
                target="_blank"
                rel="noreferrer noopener"
                className="flex gap-3 text-ink-200/85 transition-colors duration-200 hover:text-white"
              >
                <MapPin aria-hidden className="mt-0.5 size-4.5 shrink-0 text-mint-400" />
                <span>
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.district},{" "}
                  {siteConfig.address.state} –{" "}
                  {siteConfig.address.postalCode}
                </span>
              </a>

              <a
                href={siteConfig.contact.phoneHref}
                className="flex items-center gap-3 text-ink-200/85 transition-colors duration-200 hover:text-white"
              >
                <Phone aria-hidden className="size-4.5 shrink-0 text-mint-400" />
                {siteConfig.contact.phone}
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 break-all text-ink-200/85 transition-colors duration-200 hover:text-white"
              >
                <Mail aria-hidden className="size-4.5 shrink-0 text-mint-400" />
                {siteConfig.contact.email}
              </a>
            </address>

            <h3 className="mt-7 flex items-center gap-2 text-sm font-bold tracking-[0.12em] text-white uppercase">
              <Clock aria-hidden className="size-4 text-mint-400" />
              Working Hours
            </h3>
            <dl className="mt-4 space-y-2 text-sm">
              {workingHours.map((entry) => (
                <div
                  key={entry.day}
                  className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5"
                >
                  <dt className="text-ink-200/85">{entry.day}</dt>
                  <dd className="font-semibold text-white">{entry.hours}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-sm text-ink-300/80 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.legalName}. All rights reserved.
          </p>

          <p className="inline-flex items-center gap-1.5">
            <MapPin aria-hidden className="size-4 text-mint-400" />
            <span>{fullAddress}</span>
          </p>

          <Link
            href="/appointment"
            className="group inline-flex items-center gap-1.5 self-start font-semibold text-white transition-colors duration-200 hover:text-mint-300 sm:self-auto"
          >
            Book an appointment
            <ArrowUpRight
              aria-hidden
              className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </Container>
    </footer>
  );
}

function FacebookMark({ className }: { className: string }) {
  return (
    <svg aria-hidden className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 21v-7h2.35l.35-2.75h-2.7V9.5c0-.8.22-1.35 1.38-1.35h1.45V5.7c-.25-.03-1.1-.1-2.1-.1-2.1 0-3.55 1.28-3.55 3.65v2H8.3V14h2.38v7h2.82Z" />
    </svg>
  );
}

function LinkedInMark({ className }: { className: string }) {
  return (
    <svg aria-hidden className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.78C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function WhatsAppMark({ className }: { className: string }) {
  return (
    <svg aria-hidden className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .16 5.34.16 11.91c0 2.1.55 4.15 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.7 1.45h.01c6.57 0 11.91-5.34 11.91-11.91 0-3.18-1.24-6.17-3.46-8.41Zm-8.45 18.3h-.01a9.9 9.9 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.88 9.88 0 0 1-1.51-5.23c0-5.46 4.44-9.9 9.9-9.9 2.64 0 5.12 1.03 6.99 2.9a9.84 9.84 0 0 1 2.89 7c0 5.45-4.44 9.87-9.89 9.87Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.23-.64.08-.3-.15-1.26-.47-2.4-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 text-sm text-ink-200/85 transition-colors duration-200 hover:text-white"
    >
      <span
        aria-hidden
        className="h-px w-0 bg-mint-400 transition-all duration-300 group-hover:w-3.5"
      />
      {children}
    </Link>
  );
}