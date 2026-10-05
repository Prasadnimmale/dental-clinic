import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types";

type ServiceCardProps = {
  service: Service;
  /** `stacked` shows the photograph above the copy (services index). */
  variant?: "stacked" | "plain";
};

/** Service card — photograph, icon, title, summary and a Learn More link. */
export function ServiceCard({ service, variant = "stacked" }: ServiceCardProps) {
  const Icon = service.icon;
  const plain = variant === "plain";

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-soft transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-mint-200 hover:shadow-lift">
      {plain ? null : (
        <div className="relative aspect-3/2 w-full overflow-hidden bg-ink-100">
          <Image
            src={service.image.src}
            alt={service.image.alt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          />
          <span
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink-950/70 to-transparent"
          />

          <span className="absolute bottom-4 left-4 flex size-11 items-center justify-center rounded-2xl bg-white/92 text-mint-700 shadow-card backdrop-blur-sm">
            <Icon aria-hidden className="size-5" />
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        {plain ? (
          <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-brand-soft text-mint-700 ring-1 ring-mint-100 transition-transform duration-300 group-hover:scale-105">
            <Icon aria-hidden className="size-5.5" />
          </span>
        ) : null}

        <h3 className={plain ? "mt-5 text-lg font-bold" : "text-lg font-bold"}>
          <Link
            href={`/services/${service.slug}`}
            className="text-ink-900 transition-colors duration-300 after:absolute after:inset-0 hover:text-mint-700"
          >
            {service.title}
          </Link>
        </h3>

        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-600">
          {service.summary}
        </p>

        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-mint-700">
          Learn More
          <ArrowRight
            aria-hidden
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </div>
    </article>
  );
}