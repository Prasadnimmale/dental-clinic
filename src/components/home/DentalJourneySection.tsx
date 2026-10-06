"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { AtSign, HandHeart, Sparkles, Volume2, VolumeX, Wallet } from "lucide-react";
import { ActionLink } from "@/components/common/Button";
import { Container } from "@/components/common/Container";
import { Eyebrow } from "@/components/common/Eyebrow";
import { Reveal } from "@/components/common/Reveal";
import { services } from "@/data/services";

/** The clinic's public Instagram profile (external, opens in a new tab). */
const INSTAGRAM_URL =
  "https://www.instagram.com/youcare__dental?stkn=MXV4dmdiZnA5d3FpOQ==";

/**
 * Story strip directly after the About preview: a short looped clinic video
 * on the left (portrait, so it reads like a phone story) and an invitation
 * to follow the clinic on Instagram on the right.
 */
export function DentalJourneySection() {
  const prefersReducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  /** Flips the clip between silent autoplay and audible playback. */
  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    if (!nextMuted) {
      // A user gesture is required to start audible playback in most browsers.
      video.play().catch(() => {});
    }
    setMuted(nextMuted);
  };

  return (
    <section
      aria-labelledby="dental-journey-heading"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Very subtle mint wash so the section stays bright but separated. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-mint-50/70 via-white to-white"
      />

      <Container className="relative">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-10 lg:gap-20">
          {/* --- Video --- */}
          <Reveal className="relative mx-auto w-full max-w-[22rem] sm:max-w-[24rem]">
            <div className="relative overflow-hidden rounded-[2rem] border border-ink-100 bg-white shadow-card ring-1 ring-ink-100/60">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="Short clinic tour showing You Care Multispeciality Dental Clinic in action"
                title="Clinic moments at You Care Multispeciality Dental Clinic"
                className="aspect-[9/16] w-full object-cover"
              >
                <source src="/videos/clinic-journey.mp4" type="video/mp4" />
                Your browser does not support embedded video.
              </video>

              {/* Sound toggle — the only control the clip needs. */}
              <button
                type="button"
                onClick={toggleSound}
                aria-label={muted ? "Turn video sound on" : "Turn video sound off"}
                aria-pressed={muted}
                title={muted ? "Turn sound on" : "Turn sound off"}
                className="absolute right-3 bottom-3 z-10 flex size-10 items-center justify-center rounded-full bg-ink-900/55 text-white shadow-card backdrop-blur-sm transition-[transform,background-color] duration-300 hover:scale-105 hover:bg-ink-900/75 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint-400"
              >
                {muted ? (
                  <VolumeX aria-hidden className="size-4.5" />
                ) : (
                  <Volume2 aria-hidden className="size-4.5" />
                )}
              </button>
            </div>
          </Reveal>

          {/* --- Content --- */}
          <div className="text-center md:text-left">
            <Reveal delay={0.08}>
              <div className="flex justify-center md:justify-start">
                <Eyebrow>Follow Our Dental Journey</Eyebrow>
              </div>

              <h2
                id="dental-journey-heading"
                className="mt-5 text-3xl leading-[1.15] font-bold tracking-tight text-ink-900 sm:text-4xl lg:text-[2.6rem]"
              >
                Healthy Smiles.{" "}
                <span className="text-gradient-brand">Caring Moments.</span>
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-600 sm:text-[1.0625rem] md:mx-0">
                Stay connected with You Care Multispeciality Dental Clinic and
                discover our dental care, treatments, clinic moments and smile
                transformations.
              </p>

              {/* What makes care here feel different — short value points. */}
              <ul className="mt-7 space-y-4 text-left">
                {[
                  {
                    icon: HandHeart,
                    title: "Painless, unhurried care",
                    text: "Time to explain, reassure and pause whenever you need a break.",
                  },
                  {
                    icon: Sparkles,
                    title: "Modern, precise technology",
                    text: "Digital X-rays, intraoral scans and smile planning you can preview first.",
                  },
                  {
                    icon: Wallet,
                    title: "Written plans, transparent costs",
                    text: "An itemised plan with options and pricing before any treatment begins.",
                  },
                ].map(({ icon: Icon, title, text }) => (
                  <li key={title} className="flex items-start gap-3">
                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-mint-50 text-mint-700 ring-1 ring-mint-200/70">
                      <Icon aria-hidden className="size-4.5" />
                    </span>
                    <span>
                      <span className="block text-[0.95rem] font-semibold text-ink-900">
                        {title}
                      </span>
                      <span className="mt-0.5 block text-sm leading-relaxed text-ink-500">
                        {text}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              {/* Services at a glance — the clinic's full treatment list. */}
              <ul
                aria-label="Treatments available at You Care Multispeciality Dental Clinic"
                className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start"
              >
                {services.map(({ slug, title }) => (
                  <li key={slug}>
                    <Link
                      href={`/services/${slug}`}
                      className="inline-flex items-center rounded-full bg-mint-50 px-3.5 py-1.5 text-[0.8rem] font-semibold text-mint-800 ring-1 ring-mint-200/80 transition-[background-color,color,transform] duration-300 hover:-translate-y-0.5 hover:bg-mint-100 hover:text-mint-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint-400"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-8 flex justify-center md:justify-start">
                <motion.div
                  whileHover={prefersReducedMotion ? undefined : { scale: 1.035 }}
                  whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 420, damping: 22 }}
                >
                  <ActionLink
                    href={INSTAGRAM_URL}
                    variant="white"
                    size="lg"
                    className="shadow-card hover:shadow-brand-glow"
                  >
                    <AtSign aria-hidden className="size-4.5" />
                    Follow Us on Instagram
                  </ActionLink>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}