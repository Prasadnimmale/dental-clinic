import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { services } from "@/data/services";

/**
 * Homepage services grid. Reuses the shared service icon and shows all eight
 * specialities — links route to the dedicated service pages.
 */
export function ServicesPreview() {
  return (
    <section className="relative bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Services"
            title={
              <>
                Comprehensive Dental Care{" "}
                <span className="text-gradient-brand">Under One Roof</span>
              </>
            }
            description="From preventive check-ups to implants and oral surgery, every speciality is available in-house — coordinated by one team and one clear plan."
            action={
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-5 py-2.5 text-sm font-semibold text-ink-800 transition-colors duration-300 hover:border-mint-300 hover:text-mint-700"
              >
                View all services
                <ArrowRight
                  aria-hidden
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            }
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.slug} delay={(index % 4) * 0.06}>
                <li className="h-full">
                  <Link
                    href={`/services/${service.slug}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white p-6 shadow-soft transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-mint-200 hover:shadow-lift"
                  >
                    {/* Accent bar on hover */}
                    <span
                      aria-hidden
                      className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-brand transition-transform duration-400 ease-out group-hover:scale-x-100"
                    />

                    <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-brand-soft text-mint-700 ring-1 ring-mint-100 transition-transform duration-300 group-hover:scale-105">
                      <Icon aria-hidden className="size-5.5" />
                    </span>

                    <h3 className="mt-5 text-lg font-bold text-ink-900">
                      {service.title}
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
                  </Link>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}