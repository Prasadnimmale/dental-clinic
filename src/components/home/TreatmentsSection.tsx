import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Timer } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ActionLink } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { treatments } from "@/data/treatments";

/**
 * "Specialized Treatments" — six signature treatments in an alternating
 * image/text layout so the page keeps a steady, editorial rhythm.
 */
export function TreatmentsSection() {
  return (
    <section className="relative overflow-hidden bg-ink-50 py-20 sm:py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/4 -left-40 size-[28rem] rounded-full bg-gradient-brand opacity-[0.06] blur-3xl"
      />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Specialized Treatments"
            title={
              <>
                Treatments Delivered with{" "}
                <span className="text-gradient-brand">Precision</span>
              </>
            }
            description="Our most requested procedures, each planned digitally and performed by a specialist who does that work every day."
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
                {/* --- Image --- */}
                <Reveal
                  className={flipped ? "lg:order-2" : undefined}
                  delay={0.05}
                >
                  <div className="group relative">
                    <div
                      aria-hidden
                      className="absolute -inset-2.5 -z-10 rounded-[2rem] bg-gradient-brand opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-15"
                    />
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

                {/* --- Copy --- */}
                <Reveal
                  className={flipped ? "lg:order-1" : undefined}
                  delay={0.12}
                >
                  <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-mint-600 uppercase">
                    Treatment {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-3 text-2xl leading-tight font-bold tracking-tight text-ink-900 sm:text-3xl">
                    {treatment.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-ink-600">
                    {treatment.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {treatment.benefits.map((benefit) => (
                      <li key={benefit} className="flex gap-3">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gradient-brand-soft text-mint-700 ring-1 ring-mint-100">
                          <Check aria-hidden className="size-3" strokeWidth={3} />
                        </span>
                        <span className="text-sm leading-relaxed text-ink-700">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <ActionLink href="/treatments" variant="solid" size="md">
                      Explore Treatments
                      <ArrowRight aria-hidden className="size-4" />
                    </ActionLink>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>

        <Reveal className="mt-16 flex justify-center">
          <p className="text-center text-sm text-ink-500">
            Not sure which treatment suits you?{" "}
            <Link
              href="/appointment"
              className="font-semibold text-mint-700 underline underline-offset-4 transition-colors hover:text-mint-800"
            >
              Book a consultation
            </Link>{" "}
            and we will talk it through with you.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}