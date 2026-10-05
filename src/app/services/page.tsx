import Image from "next/image";
import { ArrowRight, PhoneCall } from "lucide-react";
import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ActionLink } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { ServiceCard } from "@/components/services/ServiceCard";
import { FaqAccordion } from "@/components/common/FaqAccordion";
import { images } from "@/data/images";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Dental Services",
  description:
    "General dentistry, dental implants, root canal treatment, orthodontics, cosmetic dentistry, teeth whitening, paediatric dentistry and oral surgery — all available at Yendada You Care, Yendada.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: `Dental Services | ${siteConfig.titleBrandName}`,
    description:
      "Eight dental specialities under one roof — from routine check-ups and root canals to implants, braces and oral surgery.",
    url: `${siteConfig.url}/services`,
  },
};

/** Closing questions that apply to every service. */
const commonFaqs = [
  {
    question: "How do I know which treatment I need?",
    answer:
      "You do not have to decide before you visit. We examine your mouth, take digital X-rays where needed, explain what we found and present the options with costs and timelines. You choose after you understand — never before.",
  },
  {
    question: "Can several treatments be combined into one plan?",
    answer:
      "Yes, and we recommend it when it makes sense. A single coordinated plan across general, restorative and cosmetic work is usually faster, cheaper and more comfortable than treating each problem separately.",
  },
  {
    question: "Do you treat nervous patients?",
    answer:
      "Very often. We book longer appointments for anxious patients, explain and demonstrate each step before we begin, and pause whenever you need. Sedation can be arranged with our anaesthetic colleague when clinically appropriate.",
  },
  {
    question: "What if I have a dental emergency?",
    answer:
      "Call us immediately. We keep same-day slots open every day for severe pain, swelling, bleeding, trauma and broken teeth, and we will treat you as soon as you reach us.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Dental Services"
        title={
          <>
            Comprehensive dental care{" "}
            <span className="text-gradient-brand">under one roof</span>
          </>
        }
        description="Eight specialities, one team and one treatment plan. Whether you need a routine cleaning or a full smile reconstruction, everything is coordinated in the same clinic."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
        highlights={[
          "General & preventive care",
          "Implants & oral surgery",
          "Cosmetic & orthodontic",
          "Child-friendly dentistry",
        ]}
      >
        <ActionLink href="/appointment" size="lg">
          Book an Appointment
          <ArrowRight aria-hidden className="size-4.5" />
        </ActionLink>
      </PageHero>

      {/* --- Service grid --- */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What We Treat"
              title={
                <>
                  Every speciality,{" "}
                  <span className="text-gradient-brand">explained clearly</span>
                </>
              }
              description="Select any service to see what it involves, what it costs you in time, and the questions patients ask most often."
            />
          </Reveal>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={(index % 3) * 0.07}>
                <li className="h-full">
                  <ServiceCard service={service} />
                </li>
              </Reveal>
            ))}

            {/* Booking tile keeps the grid balanced */}
            <Reveal delay={0.14}>
              <li className="flex h-full flex-col justify-center rounded-3xl border border-mint-200 bg-gradient-brand-soft p-8 ring-1 ring-mint-100">
                <h3 className="text-lg font-bold text-ink-900">
                  Not sure what you need?
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
                  That is completely normal. Book a consultation and we will
                  examine, explain and give you a written plan — with no
                  pressure to proceed on the day.
                </p>
                <div className="mt-6 flex flex-col gap-2.5">
                  <ActionLink href="/appointment" size="sm">
                    Book a Consultation
                  </ActionLink>
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-mint-700 transition-colors hover:text-mint-800"
                  >
                    <PhoneCall aria-hidden className="size-4" />
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </li>
            </Reveal>
          </ul>
        </Container>
      </section>

      {/* --- Clinic strip --- */}
      <section className="bg-ink-50 py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="One Clinic, One Team"
                title={
                  <>
                    Everything happens{" "}
                    <span className="text-gradient-brand">in the same place</span>
                  </>
                }
              />
              <p className="mt-6 text-base leading-relaxed text-ink-600">
                There is no need to be referred elsewhere for an X-ray, a
                scan, a surgical procedure or a second opinion. Diagnosis,
                treatment and aftercare all happen in one building, with one
                shared record — so nothing is repeated and nothing is missed.
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  "Same-day imaging and diagnosis",
                  "Same-day emergency slots",
                  "Digital treatment planning",
                  "Written, itemised cost plans",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-brand-soft text-mint-700 ring-1 ring-mint-100">
                      <ArrowRight aria-hidden className="size-2.5" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium text-ink-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9">
                <ActionLink href="/treatments" variant="solid" size="lg">
                  Explore Signature Treatments
                  <ArrowRight aria-hidden className="size-4.5" />
                </ActionLink>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { image: images.clinic.treatmentRoom, className: "col-span-2" },
                  { image: images.clinic.equipment, className: "col-span-1" },
                  { image: images.clinic.waitingArea, className: "col-span-1" },
                ].map(({ image, className }) => (
                  <div
                    key={image.src}
                    className={`relative overflow-hidden rounded-2xl border border-ink-100 bg-white shadow-soft ${className}`}
                  >
                    <div className="relative aspect-4/3 w-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 1024px) 50vw, 24vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* --- FAQ --- */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionHeading
                  align="left"
                  eyebrow="FAQ"
                  title={
                    <>
                      Before you{" "}
                      <span className="text-gradient-brand">book</span>
                    </>
                  }
                  description="The questions we are asked most often about treatment, cost and timing."
                />
              </Reveal>
            </div>

            <Reveal className="lg:col-span-8" delay={0.08}>
              <div className="rounded-3xl border border-ink-100 bg-ink-50/70 px-6 py-2 sm:px-8">
                <FaqAccordion items={commonFaqs} />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}