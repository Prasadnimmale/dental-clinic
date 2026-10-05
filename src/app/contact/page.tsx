import { CalendarCheck, Mail, MessageCircle, PhoneCall, Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ActionLink } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { ContactCards } from "@/components/contact/ContactCards";
import { ContactMap } from "@/components/contact/ContactMap";
import { FaqAccordion } from "@/components/common/FaqAccordion";
import { siteConfig } from "@/data/site";
import { images } from "@/data/images";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    `Contact ${siteConfig.fullName} — address, phone, WhatsApp and email in Yendada, Visakhapatnam, Andhra Pradesh. Open Monday to Saturday 9 AM to 8 PM and Sunday 10 AM to 2 PM.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact ${siteConfig.titleBrandName}`,
    description:
      "Call, WhatsApp or visit us in Yendada, Visakhapatnam. Same-day appointments for dental emergencies.",
    url: `${siteConfig.url}/contact`,
  },
};

const visitFaqs = [
  {
    question: "Do I need an appointment, or can I walk in?",
    answer:
      "Walk-ins are always welcome for urgent problems. For planned treatment we recommend booking so you are not kept waiting — our appointment form, phone and WhatsApp are all listed on this page.",
  },
  {
    question: "Is parking available at the clinic?",
    answer:
      "Yes, there is on-site parking directly in front of the clinic, with additional street parking nearby. We are in KP Icon, opposite MK Gold Coast in Yendada, and easy to reach by auto or bus.",
  },
  {
    question: "Do you treat children?",
    answer:
      "Yes. Paediatric dentistry is one of our specialities, with a dedicated approach for nervous or very young children. We recommend a first visit by age one to three.",
  },
  {
    question: "Which languages do you speak?",
    answer:
      "Our team speaks English, Telugu and Hindi, so you can discuss your treatment in the language you are most comfortable with.",
  },
];

const firstVisit = [
  {
    title: "Arrive and settle in",
    description:
      "Our reception is on the third floor with lift access. Take a seat, fill one short form and your dentist will call you in.",
  },
  {
    title: "Examine and explain",
    description:
      "We look, take any scans we need, and explain what we found in plain language before suggesting anything.",
  },
  {
    title: "Decide together",
    description:
      "You get a written estimate with options. There is no pressure to start treatment on the same visit.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Contact{" "}
            <span className="text-gradient-brand">Yendada You Care</span>
          </>
        }
        description="Call, WhatsApp, email or simply walk in. We answer every message ourselves — there is no call centre between you and the dentist."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
        highlights={[
          "Mon – Sat: 9:00 AM – 8:00 PM",
          "Sunday: 10:00 AM – 2:00 PM",
          "Same-day emergency slots",
          "Free parking on site",
        ]}
      >
        <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center">
          <ActionLink href="/appointment" size="lg" className="w-full sm:w-auto">
            <CalendarCheck aria-hidden className="size-4.5" />
            Book an Appointment
          </ActionLink>
          <a
            href={siteConfig.contact.phoneHref}
            aria-label={`Call the clinic at ${siteConfig.contact.phone}`}
            className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-ink-200 bg-white px-7 py-3.5 text-base font-semibold text-ink-800 transition-colors duration-300 hover:border-mint-300 hover:text-mint-700 sm:w-auto"
          >
            <PhoneCall aria-hidden className="size-4.5" />
            Call us: {siteConfig.contact.phone}
          </a>
        </div>
      </PageHero>

      {/* --- Details + map --- */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <SectionHeading
                align="left"
                eyebrow="Reach Us"
                title={
                  <>
                    Find us in{" "}
                    <span className="text-gradient-brand">
                      {siteConfig.address.city}
                    </span>
                  </>
                }
                description="We are located on the main road in Yendada, a few minutes from the bus stop and easy to reach by auto or car."
              />

              <div className="mt-9">
                <ContactCards />
              </div>
            </Reveal>

            <Reveal className="lg:col-span-7" delay={0.1}>
              <ContactMap />

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {[
                  {
                    Icon: PhoneCall,
                    label: "Call now",
                    value: siteConfig.contact.phone,
                    href: siteConfig.contact.phoneHref,
                  },
                  {
                    Icon: MessageCircle,
                    label: "WhatsApp",
                    value: "Chat with the clinic",
                    href: `https://wa.me/${siteConfig.contact.whatsapp}`,
                  },
                  {
                    Icon: Mail,
                    label: "Email",
                    value: siteConfig.contact.email,
                    href: `mailto:${siteConfig.contact.email}`,
                  },
                ].map(({ Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={
                      label === "Call now"
                        ? `Call the clinic at ${value}`
                        : undefined
                    }
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer noopener" : undefined}
                    className="group rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-mint-200 hover:shadow-card"
                  >
                    <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-brand-soft text-mint-700 ring-1 ring-mint-100">
                      <Icon aria-hidden className="size-4.5" />
                    </span>
                    <span className="mt-4 block text-xs font-semibold tracking-[0.12em] text-ink-400 uppercase">
                      {label}
                    </span>
                    <span className="mt-1 block text-sm font-semibold break-words text-ink-900">
                      {value}
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* --- Clinic / first visit --- */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal className="order-2 lg:order-1">
              <SectionHeading
                align="left"
                eyebrow="Your First Visit"
                title={
                  <>
                    Know what to expect{" "}
                    <span className="text-gradient-brand">before you arrive</span>
                  </>
                }
                description="Most first visits are consultation only. Here is how the hour usually goes."
              />

              <ul className="mt-8 space-y-4">
                {firstVisit.map(({ title, description }) => (
                  <li
                    key={title}
                    className="flex gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gradient-brand-soft text-mint-700 ring-1 ring-mint-100">
                      <Sparkles aria-hidden className="size-4.5" />
                    </span>
                    <div>
                      <h3 className="text-[0.95rem] font-bold text-ink-900">
                        {title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                        {description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1} className="order-1 lg:order-2">
              <div className="relative">
                <div className="relative overflow-hidden rounded-[1.75rem] border border-ink-100 bg-white shadow-card">
                  <div className="relative aspect-4/3 w-full">
                    <Image
                      src={images.clinic.reception.src}
                      alt={images.clinic.reception.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 46vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div
                  aria-hidden
                  className="absolute -top-5 -left-5 -z-10 size-28 rounded-3xl bg-gradient-brand opacity-20 lg:-left-8"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* --- Visiting --- */}
      <section className="bg-ink-50 py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionHeading
                  align="left"
                  eyebrow="Visiting"
                  title={
                    <>
                      Before you{" "}
                      <span className="text-gradient-brand">come in</span>
                    </>
                  }
                  description="A few practical answers that save time on your first visit."
                />
              </Reveal>
            </div>

            <Reveal className="lg:col-span-8" delay={0.08}>
              <div className="rounded-3xl border border-ink-100 bg-white px-6 py-2 sm:px-8">
                <FaqAccordion items={visitFaqs} />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}