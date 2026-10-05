import Image from "next/image";
import { Clock, Mail, MessageCircle, PhoneCall, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/common/Reveal";
import { AppointmentForm } from "@/components/appointment/AppointmentForm";
import { images } from "@/data/images";
import { siteConfig, workingHours } from "@/data/site";

export const metadata: Metadata = {
  title: "Book an Appointment",
  description:
    `Request a dental appointment at ${siteConfig.fullName}. Choose your service, preferred date and time, and our front desk will confirm by phone or WhatsApp.`,
  alternates: { canonical: "/appointment" },
  openGraph: {
    title: `Book an Appointment | ${siteConfig.titleBrandName}`,
    description:
      "Request your appointment online — we confirm every request personally within working hours.",
    url: `${siteConfig.url}/appointment`,
  },
};

export default function AppointmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Appointments"
        title={
          <>
            Book your appointment{" "}
            <span className="text-gradient-brand">in a minute</span>
          </>
        }
        description="Tell us what you need and when suits you. Our front desk confirms every request by phone or WhatsApp — usually within a couple of working hours."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Book Appointment", href: "/appointment" },
        ]}
        highlights={[
          "No payment required",
          "Confirmed personally",
          "Emergency slots daily",
          "Evening & weekend appointments",
        ]}
      />

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            {/* --- Form --- */}
            <div className="lg:col-span-7">
              <Reveal>
                <AppointmentForm />
              </Reveal>
            </div>

            {/* --- Practical info --- */}
            <aside className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card">
                  <div className="relative aspect-3/2 w-full bg-ink-100">
                    <Image
                      src={images.clinic.reception.src}
                      alt={images.clinic.reception.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="p-7">
                    <h2 className="text-lg font-bold text-ink-900">
                      Prefer to talk to us?
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">
                      For anything urgent, or if you would like to confirm an
                      appointment quickly, reach us directly.
                    </p>

                    <div className="mt-6 space-y-3">
                      <a
                        href={siteConfig.contact.phoneHref}
                        className="flex items-center gap-3.5 rounded-2xl border border-ink-100 bg-white px-4 py-3.5 transition-colors duration-300 hover:border-mint-300 hover:bg-mint-50/60"
                      >
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand-soft text-mint-700 ring-1 ring-mint-100">
                          <PhoneCall aria-hidden className="size-4.5" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xs font-semibold tracking-[0.1em] text-ink-400 uppercase">
                            Call
                          </span>
                          <span className="block text-sm font-semibold text-ink-900">
                            {siteConfig.contact.phone}
                          </span>
                        </span>
                      </a>

                      <a
                        href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center gap-3.5 rounded-2xl border border-ink-100 bg-white px-4 py-3.5 transition-colors duration-300 hover:border-mint-300 hover:bg-mint-50/60"
                      >
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand-soft text-mint-700 ring-1 ring-mint-100">
                          <MessageCircle aria-hidden className="size-4.5" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xs font-semibold tracking-[0.1em] text-ink-400 uppercase">
                            WhatsApp
                          </span>
                          <span className="block text-sm font-semibold text-ink-900">
                            Message the clinic
                          </span>
                        </span>
                      </a>

                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="flex items-center gap-3.5 rounded-2xl border border-ink-100 bg-white px-4 py-3.5 transition-colors duration-300 hover:border-mint-300 hover:bg-mint-50/60"
                      >
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand-soft text-mint-700 ring-1 ring-mint-100">
                          <Mail aria-hidden className="size-4.5" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-xs font-semibold tracking-[0.1em] text-ink-400 uppercase">
                            Email
                          </span>
                          <span className="block text-sm font-semibold break-all text-ink-900">
                            {siteConfig.contact.email}
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Hours */}
              <Reveal delay={0.16}>
                <div className="mt-6 rounded-3xl border border-ink-100 bg-white p-7 shadow-soft">
                  <h2 className="flex items-center gap-2.5 text-base font-bold text-ink-900">
                    <Clock aria-hidden className="size-5 text-mint-600" />
                    Clinic Hours
                  </h2>

                  <dl className="mt-4 divide-y divide-ink-100">
                    {workingHours.map((entry) => (
                      <div
                        key={entry.day}
                        className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 py-3 first:pt-0 last:pb-0"
                      >
                        <dt className="text-sm text-ink-600">{entry.day}</dt>
                        <dd className="text-sm font-semibold text-ink-900">
                          {entry.hours}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <p className="mt-5 flex items-start gap-3 rounded-xl bg-mint-50/70 p-4 text-xs leading-relaxed text-ink-600">
                    <ShieldCheck
                      aria-hidden
                      className="mt-0.5 size-4 shrink-0 text-mint-600"
                    />
                    Sterilised treatment rooms, fresh equipment and a full
                    infection-control reset between every patient.
                  </p>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}