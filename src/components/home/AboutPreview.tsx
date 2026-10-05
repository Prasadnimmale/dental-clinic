import Image from "next/image";
import { ArrowRight, Award, HandHeart, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ActionLink } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";

/** Four short reasons that pair with the About preview narrative. */
const reasons = [
  {
    title: "A team, not a rota",
    description:
      "Every speciality is handled by a dentist who practises it daily — including implants, endodontics, orthodontics and surgery.",
    Icon: Award,
  },
  {
    title: "Hygiene you can inspect",
    description:
      "Class-B autoclave sterilisation, single-use disposables and documented infection control on every chair, for every patient.",
    Icon: ShieldCheck,
  },
  {
    title: "Comfort as standard",
    description:
      "Appointments are booked long enough to explain, reassure and pause whenever you need it. Nervous patients are never rushed.",
    Icon: HandHeart,
  },
  {
    title: "Results you can preview",
    description:
      "Digital scans and digital smile planning let you see the proposed outcome and approve it before treatment begins.",
    Icon: Sparkles,
  },
];

export function AboutPreview() {
  return (
    <section className="relative overflow-hidden bg-ink-50 py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-28 size-[26rem] rounded-full bg-gradient-brand opacity-[0.07] blur-3xl"
      />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* --- Imagery --- */}
          <Reveal className="relative order-2 lg:order-1">
            <div className="mx-auto w-full max-w-[32rem] overflow-hidden rounded-[1.75rem] border border-ink-100 bg-white shadow-card">
              <div className="relative aspect-[7/10] w-full">
                <Image
                  src={images.about.clinicSign.src}
                  alt={images.about.clinicSign.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 32rem"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Stat chip */}
            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl border border-ink-100 bg-white px-5 py-4 shadow-lift sm:left-8">
              <span className="font-feature-settings-grud bg-gradient-brand bg-clip-text text-3xl font-bold text-transparent">
                {siteConfig.stats.yearsOfCare}
              </span>
              <span className="text-sm leading-tight text-ink-600">
                Years caring for
                <br />
                <span className="font-semibold text-ink-900">
                  {siteConfig.address.district}
                </span>
              </span>
            </div>
          </Reveal>

          {/* --- Narrative --- */}
          <div className="order-1 lg:order-2">
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="About the Clinic"
                title={
                  <>
                    Why Choose{" "}
                    <span className="text-gradient-brand">
                      {siteConfig.logoName}
                    </span>
                    ?
                  </>
                }
              />

              <p className="mt-6 text-base leading-relaxed text-ink-600">
                {siteConfig.logoName} began with a simple belief: good dentistry
                should feel unhurried, be clearly explained and never leave a
                patient guessing about what comes next. Over{" "}
                {siteConfig.stats.yearsOfCare.replace("+", "")} years we have
                grown into a multispeciality clinic where{" "}
                {siteConfig.stats.dentalSpecialists} specialists work together
                on a single, shared treatment plan — so complex cases are
                handled in one place, by the right person.
              </p>

              <p className="mt-4 text-base leading-relaxed text-ink-600">
                From a routine cleaning to full-mouth implants, every
                appointment begins with a careful examination and a written
                plan you fully understand. No surprises in the bill, no
                unnecessary treatment, and no pressure to decide on the spot.
              </p>
            </Reveal>

            <ul className="mt-9 grid gap-5 sm:grid-cols-2">
              {reasons.map(({ title, description, Icon }, index) => (
                <Reveal key={title} delay={0.08 + index * 0.07}>
                  <li className="group rounded-2xl border border-ink-100 bg-white p-5 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-mint-200 hover:shadow-card">
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
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.1}>
              <div className="mt-9 flex flex-wrap gap-3">
                <ActionLink href="/about" variant="solid" size="lg">
                  More About Us
                  <ArrowRight aria-hidden className="size-4.5" />
                </ActionLink>
                <ActionLink href="/doctors" variant="outline" size="lg">
                  Meet Our Specialists
                </ActionLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}