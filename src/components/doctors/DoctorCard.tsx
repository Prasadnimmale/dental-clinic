import Image from "next/image";
import { Award, GraduationCap, Stethoscope } from "lucide-react";
import type { Doctor } from "@/types";
import { cn } from "@/lib/utils";

type DoctorCardProps = {
  doctor: Doctor;
  /** `plain` is used on the homepage preview, `full` on the doctors page. */
  variant?: "full" | "plain";
};

/**
 * Doctor card used on the homepage and the doctors page. The whole card is a
 * link on the homepage; on the doctors page focus areas are shown as chips.
 */
export function DoctorCard({ doctor, variant = "full" }: DoctorCardProps) {
  const plain = variant === "plain";

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-soft transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-mint-200 hover:shadow-lift",
      )}
    >
      <div className="relative aspect-4/5 w-full overflow-hidden bg-ink-100">
        <Image
          src={doctor.image.src}
          alt={doctor.image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-950/55 to-transparent"
        />

        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[0.6875rem] font-semibold text-ink-700 backdrop-blur-sm">
          <Award aria-hidden className="size-3 text-mint-600" />
          {doctor.experience}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-ink-900">{doctor.name}</h3>

        <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-medium text-mint-700">
          <Stethoscope aria-hidden className="size-3.5" />
          {doctor.specialization}
        </p>

        <p className="mt-2 inline-flex items-start gap-1.5 text-[0.8125rem] text-ink-500">
          <GraduationCap aria-hidden className="mt-0.5 size-3.5 shrink-0" />
          {doctor.qualification}
        </p>

        {plain ? null : (
          <p className="mt-4 text-sm leading-relaxed text-ink-600">{doctor.bio}</p>
        )}

        <ul className="mt-5 flex flex-wrap gap-2">
          {doctor.focusAreas.map((area) => (
            <li
              key={area}
              className="rounded-full bg-mint-50 px-3 py-1.5 text-xs font-medium text-mint-700 ring-1 ring-mint-100"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}