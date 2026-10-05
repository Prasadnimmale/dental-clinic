"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CalendarCheck, Sparkles, Star } from "lucide-react";
import { Container } from "@/components/common/Container";
import { ActionLink } from "@/components/common/Button";
import { Eyebrow } from "@/components/common/Eyebrow";
import { images } from "@/data/images";
import { siteConfig } from "@/data/site";

/**
 * Homepage hero. Left: the brand statement and two clear actions.
 * Right: the original clinic mascot with restrained gradient decoration.
 */
export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-mint-50 via-white to-white"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-45"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 size-[34rem] rounded-full bg-gradient-brand opacity-[0.09] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -right-48 size-[32rem] rounded-full bg-gradient-brand opacity-[0.08] blur-3xl"
      />

      <Container className="relative">
        <div className="grid items-center gap-8 py-10 sm:py-14 lg:min-h-[38rem] lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-12">
          <motion.div
            className="lg:col-span-6"
            initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <Eyebrow>
              {siteConfig.address.city}, {siteConfig.address.state}
            </Eyebrow>

            <p className="mt-6 text-xs font-bold tracking-[0.28em] text-ink-500 uppercase sm:text-sm">
              You Care
            </p>

            <p className="mt-2 text-[0.9375rem] font-bold tracking-[0.14em] text-mint-700 uppercase sm:text-base">
              Multispeciality Dental Clinic
            </p>

            <h1 className="mt-5 text-4xl leading-[1.08] font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-[3.4rem] xl:text-[3.6rem]">
              Healthy Smile.{" "}
              <span className="text-gradient-brand">Confident You.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg">
              Advanced dental care with compassion, technology and expertise.
              General, cosmetic, surgical and paediatric dentistry delivered by
              specialists who explain every step before they begin.
            </p>

            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
              <ActionLink
                href="/appointment"
                size="lg"
                className="w-full sm:w-auto"
              >
                <CalendarCheck aria-hidden className="size-4.5" />
                Book an Appointment
              </ActionLink>

              <ActionLink
                href="/services"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Explore Our Services
                <ArrowRight
                  aria-hidden
                  className="size-4.5 transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </ActionLink>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-ink-100 pt-7">
              <div className="flex items-center gap-2.5">
                <span className="flex -space-x-2.5">
                  {[
                    images.hero.teamCare,
                    images.about.team,
                    images.experience.consult,
                  ].map((portrait, index) => (
                    <span
                      key={portrait.src}
                      className="relative size-9 overflow-hidden rounded-full ring-2 ring-white"
                      style={{ zIndex: 3 - index }}
                    >
                      <Image
                        src={portrait.src}
                        alt=""
                        fill
                        sizes="36px"
                        className="object-cover"
                      />
                    </span>
                  ))}
                </span>
                <span className="text-sm text-ink-600">
                  <span className="block font-semibold text-ink-900">
                    {siteConfig.stats.happyPatients} patients
                  </span>
                  treated with care
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="flex text-mint-500">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      aria-hidden
                      className="size-4"
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </span>
                <span className="text-sm text-ink-600">
                  <span className="block font-semibold text-ink-900">
                    4.9 rating
                  </span>
                  from our patients
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="flex size-9 items-center justify-center rounded-full bg-gradient-brand-soft text-mint-700 ring-1 ring-mint-100">
                  <Sparkles aria-hidden className="size-4" />
                </span>
                <span className="text-sm text-ink-600">
                  <span className="block font-semibold text-ink-900">
                    {siteConfig.stats.dentalSpecialists} specialists
                  </span>
                  across every speciality
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative mx-auto flex w-full max-w-[36rem] items-center justify-center lg:col-span-6"
            initial={prefersReducedMotion ? false : { opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: prefersReducedMotion ? 0 : 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-[12%] rounded-full bg-gradient-brand-soft blur-3xl"
            />
            <motion.div
              className="relative w-full max-w-[22rem] sm:max-w-[26rem] lg:max-w-[30rem] xl:max-w-[36rem]"
              animate={prefersReducedMotion ? undefined : { y: [0, -7, 0] }}
              transition={
                prefersReducedMotion
                  ? undefined
                  : {
                      duration: 6,
                      ease: "easeInOut",
                      repeat: Infinity,
                    }
              }
            >
              <Image
                src="/images/hero/hero-tooth.png"
                alt="Happy tooth mascot representing You Care Multispeciality Dental Clinic"
                width={850}
                height={768}
                preload
                sizes="(max-width: 639px) 90vw, (max-width: 1023px) 80vw, (max-width: 1279px) 42vw, 544px"
                className="h-auto w-full object-contain drop-shadow-[0_18px_30px_rgba(22,163,74,0.08)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
