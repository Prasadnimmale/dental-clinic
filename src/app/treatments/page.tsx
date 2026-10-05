import Image from "next/image";
import { ArrowRight, CalendarCheck, Check, Timer } from "lucide-react";
import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ActionLink } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { FaqAccordion } from "@/components/common/FaqAccordion";
import { treatments } from "@/data/treatments";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Dental Treatments",
  description:
    "Dental implants, root canal treatment, braces and aligners, smile makeovers, teeth whitening and crowns & bridges — explained with timings, benefits and what to expect.",
  alternates: { canonical: "/treatments" },
  openGraph: {
    title: `Dental Treatments | ${siteConfig.titleBrandName}`,
    description:
      "Signature treatments performed by our specialists — with honest timings, costs explained upfront and results you can preview.",
    url: `${siteConfig.url}/treatments`,
  },
};

const treatmentFaqs = [
  {
    question: "How long will my treatment take from start to finish?",
    answer:
      "It depends entirely on the treatment — whitening can be a single hour, root canal treatment one or two visits, aligners around 12 to 18 months. Every plan we give you includes a realistic timeline up front.",
  },
  {
    question: "Will I feel pain during or after treatment?",
    answer:
      "Effective local anaesthetic means you should feel pressure rather than pain during treatment. Mild soreness for one to three days afterwards is normal and easily managed with ordinary pain relief.",
  },
  {
    question: "How much will my treatment cost?",
    answer:
      "You receive an itemised written plan with costs before anything begins. We explain which items are essential, which are optional and what happens to the price if you choose to wait or stage the work.",
  },
  {
    question: "Can you show me the result before I commit?",
    answer:
      "For cosmetic and restorative work, yes. Digital smile planning lets you preview the proposed outcome on a screen before a single tooth is prepared.",
  },
];

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Treatments"
        title={
          <>
            Specialized dental treatments,{" "}
            <span className="text-gradient-brand">planned properly</span>
          </>
        }
        description="The procedures our patients ask about most — what they involve, how long they take and the benefits you can expect."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Treatments", href: "/treatments" },
        ]}
        highlights={[
          "Digital planning",
          "Specialist-led",
          "Written cost plans",
          "Structured aftercare",
        ]}
      >
        <ActionLink href="/appointment" size="lg">
          <CalendarCheck aria-hidden className="size-4.5" />
          Book a Consultation
        </ActionLink>
      </PageHero>

      {/* --- Treatment list --- */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="What We Offer"
              title={
                <>
                  Six treatments, explained{" "}
                  <span className="text-gradient-brand">without jargon</span>
                </>
              }
              description="Every treatment below is planned digitally, carried out by a specialist and reviewed afterwards."
            />
          </Reveal>

          <div className="mt-16 space-y-20 lg:space-y-28">
            {treatments.map((treatment, index) => {
              const flipped = index % 2 === 1;

              return (
                <article
                  key={treatment.slug}
                  className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
                >
                  <Reveal className={flipped ? "lg:order-2" : undefined}>
                    <div className="group relative">
                      <div className="relative overflow-hidden rounded-[1.75rem] border border-ink-100 bg-white shadow-card">
                        <div className="relative aspect-4/3 w-full">
                          <Image
                            src={treatment.image.src}
                            alt={treatment.image.alt}
                            fill
                            sizes="(max-width: 1024px) 100vw, 46vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                          />
                        </div>
                      </div>

                      <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/92 px-3.5 py-2 text-xs font-semibold text-ink-800 shadow-card backdrop-blur-sm">
                        <Timer aria-hidden className="size-3.5 text-mint-600" />
                        {treatment.duration}
                      </span>
                    </div>
                  </Reveal>

                  <Reveal className={flipped ? "lg:order-1" : undefined} delay={0.1}>
                    <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-mint-600 uppercase">
                      Treatment {String(index + 1).padStart(2, "0")}
                    </p>

                    <h2 className="mt-3 text-2xl leading-tight font-bold tracking-tight text-ink-900 sm:text-3xl">
                      {treatment.title}
                    </h2>

                    <p className="mt-4 text-base leading-relaxed text-ink-600">
                      {treatment.description}
                    </p>

                    <h3 className="mt-7 text-sm font-bold tracking-[0.1em] text-ink-800 uppercase">
                      Key benefits
                    </h3>

                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {treatment.benefits.map((benefit) => (
                        <li key={benefit} className="flex gap-2.5">
                          <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-brand-soft text-mint-700 ring-1 ring-mint-100">
                            <Check aria-hidden className="size-2.5" strokeWidth={3} />
                          </span>
                          <span className="text-sm leading-relaxed text-ink-700">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* --- FAQ --- */}
      <section className="bg-ink-50 py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <Reveal>
                <SectionHeading
                  align="left"
                  eyebrow="FAQ"
                  title={
                    <>
                      About your{" "}
                      <span className="text-gradient-brand">treatment plan</span>
                    </>
                  }
                />
              </Reveal>
            </div>

            <Reveal className="lg:col-span-8" delay={0.08}>
              <div className="rounded-3xl border border-ink-100 bg-white px-6 py-2 sm:px-8">
                <FaqAccordion items={treatmentFaqs} />
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-14 flex justify-center">
            <ActionLink href="/services" variant="solid" size="lg">
              View All Services
              <ArrowRight aria-hidden className="size-4.5" />
            </ActionLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}