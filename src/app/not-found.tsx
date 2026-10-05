import Link from "next/link";
import { ArrowRight, Home, PhoneCall } from "lucide-react";
import { Container } from "@/components/common/Container";
import { ActionLink } from "@/components/common/Button";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-white py-28 sm:py-32 lg:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-brand-soft"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 size-[28rem] rounded-full bg-gradient-brand opacity-10 blur-3xl"
      />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-feature-settings-grud bg-gradient-brand bg-clip-text text-7xl font-bold text-transparent sm:text-8xl">
            404
          </p>

          <h1 className="mt-6 text-3xl leading-tight font-bold tracking-tight text-ink-900 sm:text-4xl">
            We could not find that page
          </h1>

          <p className="mt-5 text-base leading-relaxed text-ink-600 sm:text-lg">
            The link may be outdated, or the page may have moved. Here are the
            quickest ways back to what you were looking for.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3.5 sm:flex-row">
            <ActionLink href="/" size="lg" className="w-full sm:w-auto">
              <Home aria-hidden className="size-4.5" />
              Back to Home
            </ActionLink>
            <ActionLink
              href="/appointment"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <PhoneCall aria-hidden className="size-4.5" />
              Book an Appointment
            </ActionLink>
          </div>

          <div className="mt-12 rounded-3xl border border-ink-100 bg-white/85 p-7 text-left shadow-soft backdrop-blur-sm">
            <h2 className="text-sm font-bold tracking-[0.12em] text-ink-800 uppercase">
              Popular pages
            </h2>

            <ul className="mt-5 grid gap-1 sm:grid-cols-2">
              {[
                { label: "About the clinic", href: "/about" },
                { label: "All dental services", href: "/services" },
                { label: "Our specialists", href: "/doctors" },
                { label: "Treatments", href: "/treatments" },
                { label: "Clinic gallery", href: "/gallery" },
                { label: "Contact us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink-700 transition-colors duration-200 hover:bg-mint-50 hover:text-mint-700"
                  >
                    {link.label}
                    <ArrowRight
                      aria-hidden
                      className="size-4 -translate-x-1 text-mint-500 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 border-t border-ink-100 pt-5">
              <p className="text-sm text-ink-600">
                Still stuck? Call{" "}
                <a
                  href={siteConfig.contact.phoneHref}
                  className="font-semibold text-mint-700 underline underline-offset-4"
                >
                  {siteConfig.contact.phone}
                </a>{" "}
                and we will point you to the right page.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-xs tracking-[0.12em] text-ink-400 uppercase">
              Browse services
            </p>
            <ul className="mt-3 flex flex-wrap justify-center gap-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-block rounded-full border border-ink-200 bg-white px-3.5 py-2 text-xs font-medium text-ink-600 transition-colors duration-200 hover:border-mint-300 hover:text-mint-700"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}