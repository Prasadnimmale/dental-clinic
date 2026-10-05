import Image from "next/image";
import { CalendarCheck, Check, HeartPulse, Target, Users } from "lucide-react";
import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ActionLink } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { StarRating } from "@/components/common/StarRating";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";
import { doctors } from "@/data/doctors";
import { technology } from "@/data/technology";
import { testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "About Our Dental Clinic",
  description:
    "Learn how Yendada You Care Multispeciality Dental Clinic has cared for families in Yendada and Visakhapatnam for over 15 years — our specialists, our technology and our approach to patient comfort.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About ${siteConfig.titleBrandName} | Multispeciality Dental Clinic`,
    description:
      "Our story, our dental specialists, our technology and the principles behind comfortable, clearly explained dental care in Yendada.",
    url: `${siteConfig.url}/about`,
  },
};

/** The three things the clinic was built on. */
const principles = [
  {
    Icon: Target,
    title: "Explain before treating",
    description:
      "No treatment begins until you understand what is wrong, what is proposed, what it costs and what happens if you wait. That conversation is the foundation of everything here.",
  },
  {
    Icon: HeartPulse,
    title: "Comfort is clinical, not cosmetic",
    description:
      "Longer appointments, gentle techniques and the freedom to stop at any moment are not extras — they are part of doing dentistry properly on a nervous patient.",
  },
  {
    Icon: Users,
    title: "Specialists under one roof",
    description:
      "Implants, endodontics, orthodontics, surgery and cosmetic care are all available here, coordinated by one team on one treatment plan — so nothing gets lost between specialists.",
  },
];

/** Timeline of the clinic's growth. */
const milestones = [
  {
    year: "2011",
    title: "A single treatment room in Yendada",
    description:
      "The clinic opened as a two-chair practice with a general dentist and a simple promise: never rush an appointment, and always explain the cost first.",
  },
  {
    year: "2015",
    title: "Implant and surgical care added",
    description:
      "As demand grew we brought in a prosthodontist and an oral surgeon, so implants and wisdom-tooth surgery could be done in-house instead of being referred away.",
  },
  {
    year: "2019",
    title: "Digital diagnostics introduced",
    description:
      "Digital X-ray and intraoral scanning replaced film and messy impressions — cutting radiation, removing gagging and making treatment plans far more precise.",
  },
  {
    year: "2023",
    title: "A full multispeciality clinic",
    description:
      "Six treatment rooms, hospital-grade sterilisation and a dedicated paediatric suite — with twelve specialists working from a single shared record.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Clinic"
        title={
          <>
            A dental clinic built around{" "}
            <span className="text-gradient-brand">how patients feel</span>
          </>
        }
        description="Yendada You Care Multispeciality Dental Clinic has served Yendada and the wider Visakhapatnam area for over 15 years. We combine specialist dentistry with clear explanations and genuinely unhurried appointments."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
        highlights={[
          `${siteConfig.stats.yearsOfCare} years of care`,
          `${siteConfig.stats.dentalSpecialists} specialists`,
          `${siteConfig.stats.treatmentChairs} treatment rooms`,
          "Hospital-grade sterilisation",
        ]}
      >
        <div className="flex flex-col gap-3.5 sm:flex-row">
          <ActionLink href="/appointment" size="lg" className="w-full sm:w-auto">
            <CalendarCheck aria-hidden className="size-4.5" />
            Book an Appointment
          </ActionLink>
          <ActionLink
            href="/doctors"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            Meet Our Specialists
          </ActionLink>
        </div>
      </PageHero>

      {/* --- Story --- */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Our Story"
                title={
                  <>
                    From two chairs to a{" "}
                    <span className="text-gradient-brand">
                      multispeciality centre
                    </span>
                  </>
                }
              />

              <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-600">
                <p>
                  We opened in {siteConfig.address.city} with two treatment
                  chairs, one dentist and a waiting area just large enough for
                  four people. What kept patients coming back was not
                  equipment — it was that we refused to hurry. Every patient
                  got an explanation they understood and a written plan with
                  costs before a single instrument was picked up.
                </p>
                <p>
                  That approach has not changed; the scale has. Today
                  {siteConfig.brandName} runs {siteConfig.stats.treatmentChairs}{" "}
                  treatment rooms across six specialities, and has treated more
                  than {siteConfig.stats.happyPatients} patients from across
                  Visakhapatnam. The clinic still keeps emergency slots open
                  every day, because a patient in pain should never be told to
                  come back tomorrow.
                </p>
              </div>

              <ul className="mt-9 grid gap-4 sm:grid-cols-2">
                {principles.map(({ Icon, title, description }) => (
                  <li
                    key={title}
                    className="rounded-2xl border border-ink-100 bg-ink-50/70 p-5"
                  >
                    <span className="flex size-10 items-center justify-center rounded-xl bg-gradient-brand-soft text-mint-700 ring-1 ring-mint-100">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <h3 className="mt-4 text-[0.95rem] font-bold text-ink-900">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">
                      {description}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1} className="relative">
              <div className="relative">
                <div className="relative overflow-hidden rounded-[1.75rem] border border-ink-100 bg-white shadow-card">
                  <div className="relative aspect-4/3 w-full">
                    <Image
                      src={images.about.team.src}
                      alt={images.about.team.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 46vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="absolute -bottom-8 -left-4 hidden w-48 overflow-hidden rounded-2xl border-4 border-white bg-white shadow-lift sm:block lg:-left-10 lg:w-56">
                  <div className="relative aspect-4/3 w-full">
                    <Image
                      src={images.about.consultation.src}
                      alt={images.about.consultation.alt}
                      fill
                      sizes="(max-width: 1024px) 192px, 224px"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div
                  aria-hidden
                  className="absolute -top-5 -right-4 -z-10 size-28 rounded-3xl bg-gradient-brand opacity-20 lg:-right-8"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* --- Timeline --- */}
      <section className="relative overflow-hidden bg-ink-50 py-20 sm:py-24 lg:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 -right-28 size-[26rem] rounded-full bg-gradient-brand opacity-[0.07] blur-3xl"
        />

        <Container className="relative">
          <Reveal>
            <SectionHeading
              eyebrow="Our Journey"
              title={
                <>
                  Growing carefully,{" "}
                  <span className="text-gradient-brand">never quickly</span>
                </>
              }
              description="We have added a speciality at a time, only when the right specialist and the right equipment were both in place."
            />
          </Reveal>

          <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((milestone, index) => (
              <Reveal key={milestone.year} delay={index * 0.08}>
                <li className="relative h-full rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
                  <span className="inline-flex items-center rounded-full bg-gradient-brand-soft px-3 py-1 text-sm font-bold text-mint-700 ring-1 ring-mint-100">
                    {milestone.year}
                  </span>
                  <h3 className="mt-4 text-base font-bold text-ink-900">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {milestone.description}
                  </p>
                  {index < milestones.length - 1 ? (
                    <span
                      aria-hidden
                      className="absolute top-1/2 -right-3 hidden h-px w-6 bg-gradient-brand/50 lg:block"
                    />
                  ) : null}
                </li>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      {/* --- Team --- */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="The Team"
              title={
                <>
                  Specialists who do their{" "}
                  <span className="text-gradient-brand">own work every day</span>
                </>
              }
              description="No dentist here rotates away from their speciality. The orthodontist treats braces, the endodontist treats root canals, and the surgeon does the surgery."
            />
          </Reveal>

          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor) => (
              <Reveal key={doctor.slug}>
                <li className="flex h-full items-start gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card">
                  <span className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-ink-100">
                    <Image
                      src={doctor.image.src}
                      alt={doctor.image.alt}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-base font-bold text-ink-900">
                      {doctor.name}
                    </span>
                    <span className="mt-1 block text-sm font-medium text-mint-700">
                      {doctor.specialization}
                    </span>
                    <span className="mt-1 block text-xs text-ink-500">
                      {doctor.qualification} · {doctor.experience}
                    </span>
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-12 flex justify-center">
            <ActionLink href="/doctors" variant="solid" size="lg">
              See full doctor profiles
            </ActionLink>
          </Reveal>
        </Container>
      </section>

      {/* --- Technology --- */}
      <section className="bg-ink-50 py-20 sm:py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Technology & Hygiene"
              title={
                <>
                  Equipment that improves{" "}
                  <span className="text-gradient-brand">the outcome</span>
                </>
              }
              description="Every addition to the clinic had to earn its place by making treatment more accurate, more comfortable or safer."
            />
          </Reveal>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {technology.map((item) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title}>
                  <li className="flex h-full gap-4 rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand-soft text-mint-700 ring-1 ring-mint-100">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <span>
                      <span className="block text-base font-bold text-ink-900">
                        {item.title}
                      </span>
                      <span className="mt-2 block text-sm leading-relaxed text-ink-600">
                        {item.description}
                      </span>
                    </span>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* --- Patient feedback --- */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Patient Feedback"
              title={
                <>
                  Trusted by families across{" "}
                  <span className="text-gradient-brand">Visakhapatnam</span>
                </>
              }
              action={
                <div className="flex items-center gap-3 rounded-full border border-ink-100 bg-ink-50 px-5 py-3">
                  <StarRating value={4.9} size={18} label="4.9 out of 5 stars" />
                  <span className="text-sm text-ink-600">
                    from {siteConfig.stats.happyPatients}+ patients
                  </span>
                </div>
              }
            />
          </Reveal>

          <ul className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 0.08}>
                <li className="flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-7 shadow-soft">
                  <StarRating
                    value={testimonial.rating}
                    label={`${testimonial.rating} out of 5 stars`}
                  />
                  <blockquote className="mt-4 flex-1">
                    <p className="text-[0.9375rem] leading-relaxed text-ink-700">
                      “{testimonial.quote}”
                    </p>
                  </blockquote>
                  <p className="mt-5 border-t border-ink-100 pt-4 text-sm text-ink-600">
                    <span className="font-semibold text-ink-900">
                      {testimonial.name}
                    </span>{" "}
                    · {testimonial.location}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-12 flex flex-wrap justify-center gap-4">
            <ActionLink href="/appointment" size="lg">
              <CalendarCheck aria-hidden className="size-4.5" />
              Book an Appointment
            </ActionLink>
            <ActionLink href="/gallery" variant="outline" size="lg">
              <Check aria-hidden className="size-4.5" />
              See the clinic
            </ActionLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}