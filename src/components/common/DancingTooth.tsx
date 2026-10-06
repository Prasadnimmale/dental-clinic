"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Intrinsic size of `public/images/hero/hero-mascot.png`. Declaring the real
 * numbers lets the browser reserve the correct box before the bitmap arrives,
 * which is what keeps the tooth from reflowing as it dances.
 */
const TOOTH_WIDTH = 695;
const TOOTH_HEIGHT = 577;

/**
 * Master frequency of the routine. Every term below is an integer multiple of
 * this, so the dance closes on itself seamlessly every 8 seconds instead of
 * snapping back to the top of the loop.
 */
const OMEGA = (Math.PI * 2) / 8;

/** How much faster and livelier the dance is once hovered. */
const ENERGY_SPEED = 0.34;
const ENERGY_AMP = 0.18;
/** Seconds for the dance to ease itself in after mount, instead of snapping on. */
const INTRO_SECONDS = 1.6;

const RESTING_ROTATE = 0;
const RESTING_SCALE = 1;

type DancingToothProps = {
  className?: string;
  alt?: string;
};

/**
 * The clinic tooth mascot, dancing.
 *
 * The artwork is a transparent 695x577 PNG cut out from the original opaque
 * export (the pastel green/white wash that used to reach the edge of the
 * canvas has been removed), so nothing has to be masked away at the border -
 * the character simply sits on whatever the section behind it paints.
 *
 * The dance itself is computed by hand every frame from an accumulated phase
 * and pushed into Framer Motion values, which is what buys the three things
 * this needs:
 *
 * - **Seamless looping.** Motion is `sin`/`cos` of integer multiples of
 *   `OMEGA`, so the pose at `t` and at `t + 8s` are identical. There is no
 *   jump at the loop boundary.
 * - **Organic timing.** Real music phrasing drifts; the harmonics at `2*OMEGA`
 *   and `3*OMEGA`, each with its own phase offset, keep it from reading as one
 *   mechanical sine wave.
 * - **A hover "kick" that doesn't stutter.** Frame speed is applied to the
 *   phase increment rather than to the transform, so leaning into a hover
 *   changes tempo smoothly. Re-deriving this from `transition.duration` would
 *   restart the cycle and visibly jump.
 *
 * Only `rotate`, `x`, `y` and `scale` are touched - all transforms - so the work
 * stays on the compositor and never triggers layout. `scale` is uniform, so the
 * tooth's aspect ratio is preserved exactly at every point in the loop.
 */
export function DancingTooth({
  className,
  alt = "Happy tooth mascot representing You Care Multispeciality Dental Clinic",
}: DancingToothProps) {
  const prefersReducedMotion = useReducedMotion();

  const rotate = useMotionValue(RESTING_ROTATE);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const scale = useMotionValue(RESTING_SCALE);

  // The contact shadow tightens and fades as the tooth lifts off the floor,
  // which is what sells it as weight rather than a sticker.
  const shadowScaleX = useMotionValue(1);
  const shadowScaleY = useMotionValue(1);
  const shadowOpacity = useMotionValue(0);

  /** Accumulated time in seconds. Refs, not state: nothing here re-renders. */
  const phase = useRef(0);
  const intro = useRef(0);
  const energy = useRef(0);
  const hovered = useRef(false);

  // Settle back to a neutral pose if someone flips reduced-motion on mid-loop.
  useEffect(() => {
    if (!prefersReducedMotion) return;
    rotate.set(RESTING_ROTATE);
    x.set(0);
    y.set(0);
    scale.set(RESTING_SCALE);
    shadowScaleX.set(1);
    shadowScaleY.set(1);
    shadowOpacity.set(0);
  }, [prefersReducedMotion, rotate, x, y, scale, shadowScaleX, shadowScaleY, shadowOpacity]);

  useAnimationFrame((_, delta) => {
    if (prefersReducedMotion) return;

    // Clamp dt so returning to a backgrounded tab resumes mid-stride instead
    // of teleporting the tooth across the screen.
    const dt = Math.min(delta / 1000, 0.05);

    intro.current = Math.min(intro.current + dt / INTRO_SECONDS, 1);
    // Ease in rather than ramp linearly, so the start reads as a settle.
    const easeIn = intro.current * intro.current * (3 - 2 * intro.current);

    const target = hovered.current ? 1 : 0;
    energy.current += (target - energy.current) * Math.min(dt * 6, 1);
    const amp = (1 + ENERGY_AMP * energy.current) * easeIn;

    phase.current += dt * (1 + ENERGY_SPEED * energy.current);
    const t = phase.current;

    const sway = Math.sin(OMEGA * t); // slow left/right lean
    const swayShift = Math.sin(OMEGA * t + 0.35); // leads the lean slightly
    const beat = Math.sin(2 * OMEGA * t); // two-beat body bounce
    const rock = Math.sin(2 * OMEGA * t + 0.9); // off-beat shoulder flick
    const flick = Math.sin(3 * OMEGA * t + 2.1); // jaunty third-beat wink

    rotate.set((4.6 * sway + 1.5 * rock + 0.9 * flick) * amp);
    x.set((5.2 * swayShift + 1.8 * rock) * amp);
    y.set((-9 * beat - 2 * sway) * amp);
    // Uniform scale only. It squashes nothing and stretches nothing.
    scale.set(1 - 0.015 * (0.5 + 0.5 * Math.cos(2 * OMEGA * t)) * amp);

    // beat === -1 is the top of the hop.
    const lift = (0.5 - 0.5 * beat) * easeIn;
    shadowScaleX.set(1 - 0.18 * lift);
    shadowScaleY.set(1 - 0.3 * lift);
    shadowOpacity.set((0.32 - 0.17 * lift) * easeIn);
  });

  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-[22rem] select-none sm:max-w-[26rem] lg:max-w-[30rem] xl:max-w-[36rem]",
        className,
      )}
    >
      {/* Contact shadow. Sits on the baseline, so it reads as the tooth's own
          shadow rather than a drop shadow filter stuck to the artwork. */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute bottom-3 left-1/2 h-3 w-[58%] -translate-x-1/2 rounded-[50%] bg-ink-900/20 blur-md"
        style={{
          scaleX: shadowScaleX,
          scaleY: shadowScaleY,
          opacity: shadowOpacity,
        }}
      />

      <motion.div
        className="relative w-full"
        style={{ rotate, x, y, scale }}
        onHoverStart={() => {
          hovered.current = true;
        }}
        onHoverEnd={() => {
          hovered.current = false;
        }}
      >
        <Image
          src="/images/hero/hero-mascot.png"
          alt={alt}
          width={TOOTH_WIDTH}
          height={TOOTH_HEIGHT}
          preload
          draggable={false}
          sizes="(max-width: 639px) 90vw, (max-width: 1023px) 80vw, (max-width: 1279px) 42vw, 544px"
          className="h-auto w-full object-contain drop-shadow-[0_18px_30px_rgba(22,163,74,0.16)]"
        />
      </motion.div>
    </div>
  );
}