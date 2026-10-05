import Link from "next/link";
import { ArrowRight, CalendarCheck, PhoneCall } from "lucide-react";
import { Container } from "@/components/common/Container";
import { ActionLink } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { appointmentReassurance } from "@/data/trust";
import { siteConfig } from "@/data/site";

/**
 * Closing call to action. Deliberately the only dark-gradient band outside the
 * technology section, so the gradient accent stays an accent.
 */
export function AppointmentCta() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-brand-dark px-6 py-14 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
            {/* Decorative texture */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-dot-grid opacity-20"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 -left-20 size-[26rem] rounded-full bg-white/10 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -right-24 -bottom-32 size-[26rem] rounded-full bg-white/10 blur-3xl"
            />

            <div className="relative mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-[0.14em] text-white uppercase ring-1 ring-white/25 backdrop-blur-sm">
                <span aria-hidden className="size-1.5 rounded-full bg-white" />
                Book Your Visit
              </span>

              <h2 className="mt-6 text-3xl leading-[1.15] font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                Ready for a healthier, more confident smile?
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
                Request an appointment online, or call us directly. Either way,
                you will speak to a real person — and we will only recommend
                treatment you genuinely need.
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3.5 sm:flex-row sm:items-center">
                <ActionLink
                  href="/appointment"
                  variant="white"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <CalendarCheck aria-hidden className="size-4.5" />
                  Book an Appointment
                </ActionLink>

                <a
                  href={siteConfig.contact.phoneHref}
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-white/35 bg-white/10 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:bg-white/20 sm:w-auto"
                >
                  <PhoneCall aria-hidden className="size-4.5" />
                  {siteConfig.contact.phone}
                </a>
              </div>

              <ul className="mt-12 grid gap-6 border-t border-white/20 pt-10 text-left sm:grid-cols-3 sm:gap-5">
                {appointmentReassurance.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li key={item.title}>
                      <span className="flex size-10 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-white/25">
                        <Icon aria-hidden className="size-4.5" />
                      </span>
                      <h3 className="mt-4 text-[0.9375rem] font-bold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/75">
                        {item.description}
                      </p>
                    </li>
                  );
                })}
              </ul>

              <p className="mt-10 text-sm text-white/70">
                Prefer email?{" "}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="font-semibold text-white underline underline-offset-4 transition-colors hover:text-white/90"
                >
                  {siteConfig.contact.email}
                </a>{" "}
                <span className="hidden sm:inline">
                  — we reply within one working day.
                </span>
              </p>

              <Link
                href="/services"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/85 transition-colors hover:text-white"
              >
                Browse our services first
                <ArrowRight
                  aria-hidden
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}