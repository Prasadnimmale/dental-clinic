import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Briefcase, Stethoscope } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { featuredDoctors } from "@/data/doctors";

/** Homepage preview of the specialist team — links through to the full list. */
export function DoctorsPreview() {
  return (
    <section className="relative bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Our Specialists"
            title={
              <>
                Meet Our <span className="text-gradient-brand">Dental Specialists</span>
              </>
            }
            description="Twelve specialists across six disciplines, each focused on a specific area of dentistry so you always see the right person."
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredDoctors.map((doctor, index) => (
            <Reveal key={doctor.slug} delay={index * 0.08}>
              <li className="h-full">
                <Link
                  href="/doctors"
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-soft transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1.5 hover:border-mint-200 hover:shadow-lift"
                >
                  <div className="relative aspect-4/5 w-full overflow-hidden bg-ink-100">
                    <Image
                      src={doctor.image.src}
                      alt={doctor.image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                    <span className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-950/55 to-transparent" />

                    <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-1 text-[0.6875rem] font-semibold text-ink-700 backdrop-blur-sm">
                      <Award aria-hidden className="size-3 text-mint-600" />
                      {doctor.experience}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-bold text-ink-900">
                      {doctor.name}
                    </h3>
                    <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm font-medium text-mint-700">
                      <Stethoscope aria-hidden className="size-3.5" />
                      {doctor.specialization}
                    </p>
                    <p className="mt-2 text-[0.8125rem] text-ink-500">
                      {doctor.qualification}
                    </p>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">
                      {doctor.bio}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-1.5 border-t border-ink-100 pt-4 text-sm font-semibold text-mint-700">
                      View Profile
                      <ArrowRight
                        aria-hidden
                        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 flex flex-wrap justify-center gap-3">
          <Link
            href="/doctors"
            className="group inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-5 py-2.5 text-sm font-semibold text-ink-800 transition-colors duration-300 hover:border-mint-300 hover:text-mint-700"
          >
            <Briefcase aria-hidden className="size-4" />
            View the full team
            <ArrowRight
              aria-hidden
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}