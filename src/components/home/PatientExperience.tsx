import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { IconCard } from "@/components/common/IconCard";
import { Reveal } from "@/components/common/Reveal";
import Image from "next/image";
import { images } from "@/data/images";
import { patientExperience } from "@/data/patientExperience";

/**
 * "Your Comfort Matters" — the emotional section aimed at nervous patients,
 * pairing six promises with the clinic experience to reduce anxiety.
 */
export function PatientExperience() {
  return (
    <section className="relative overflow-hidden bg-gradient-brand-soft py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-50"
      />

      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* --- Copy + feature list --- */}
          <div>
            <Reveal>
              <SectionHeading
                align="left"
                eyebrow="Patient Experience"
                title={
                  <>
                    Your Comfort{" "}
                    <span className="text-gradient-brand">Matters</span>
                  </>
                }
              />

              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-600">
                Many people put off dental care because they are anxious — and
                that anxiety grows every year they wait. We designed the whole
                clinic around removing it: longer appointments, clear
                explanations before anything begins, and the simple promise that
                you can stop us at any moment.
              </p>
            </Reveal>

            <ul className="mt-10 grid gap-5 sm:grid-cols-2">
              {patientExperience.map((item, index) => (
                <Reveal key={item.title} delay={(index % 2) * 0.07}>
                  <li className="h-full">
                    <IconCard
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                      className="h-full bg-white/85 backdrop-blur-sm"
                    />
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <Reveal delay={0.1} className="relative">
            <div className="relative space-y-5">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/70 bg-white shadow-lift">
                <div className="relative aspect-[6/5] w-full">
                  <Image
                    src={images.experience.patient.src}
                    alt={images.experience.patient.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                {[images.experience.followup, images.experience.care].map(
                  (image) => (
                    <div
                      key={image.src}
                      className="relative overflow-hidden rounded-2xl border-4 border-white bg-white shadow-lift"
                    >
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          sizes="(max-width: 1024px) 45vw, 22vw"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}