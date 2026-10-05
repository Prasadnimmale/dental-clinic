import Image from "next/image";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { technology } from "@/data/technology";

/**
 * Equipment showcase — the first card is wide to break the grid rhythm, and
 * every card pairs a photograph with a short technical explanation.
 */
export function TechnologySection() {
  return (
    <section className="relative overflow-hidden bg-ink-900 py-20 text-white sm:py-24 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-[0.14]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 size-[30rem] rounded-full bg-gradient-brand opacity-[0.12] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/4 size-[26rem] rounded-full bg-gradient-brand opacity-[0.1] blur-3xl"
      />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            tone="dark"
            eyebrow="Dental Technology"
            title={
              <>
                Technology That Makes Care{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  More Accurate
                </span>
              </>
            }
            description="Better diagnosis, more predictable results and fewer appointments — thanks to equipment most clinics in the region do not have."
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {technology.map((item, index) => {
            const Icon = item.icon;
            const wide = index === 0;

            return (
              <Reveal
                key={item.title}
                delay={(index % 3) * 0.08}
                className={wide ? "sm:col-span-2 lg:col-span-1" : undefined}
              >
                <li className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-sm transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-white/[0.07]">
                  <div className="relative aspect-4/3 w-full overflow-hidden">
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/25 to-transparent"
                    />

                    <span className="absolute bottom-4 left-4 flex size-11 items-center justify-center rounded-2xl bg-white/12 text-white ring-1 ring-white/20 backdrop-blur-md">
                      <Icon aria-hidden className="size-5" />
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-ink-200/85">
                      {item.description}
                    </p>
                  </div>
                </li>
              </Reveal>
            );
          })}

          {/* Closing prompt keeps the grid balanced at three columns */}
          <Reveal delay={0.16} className="sm:col-span-2 lg:col-span-1">
            <li className="flex h-full flex-col justify-center rounded-3xl border border-white/10 bg-gradient-brand/[0.08] p-7 ring-1 ring-white/10 backdrop-blur-sm">
              <p className="text-base font-bold text-white">
                See it for yourself
              </p>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-200/85">
                Our treatment rooms are open to view before your appointment.
                Ask at reception and we will show you around.
              </p>
            </li>
          </Reveal>
        </ul>
      </Container>
    </section>
  );
}