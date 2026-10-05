import Image from "next/image";
import { Award, CalendarCheck, ShieldCheck, Users } from "lucide-react";
import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ActionLink } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { DoctorCard } from "@/components/doctors/DoctorCard";
import { images } from "@/data/images";
import { doctors } from "@/data/doctors";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Dental Specialists",
  description:
    "Meet the dental specialists at Yendada You Care — prosthodontist, endodontist, orthodontist, paediatric dentist, oral surgeon and cosmetic dentist serving Yendada and Visakhapatnam.",
  alternates: { canonical: "/doctors" },
  openGraph: {
    title: `Our Dental Specialists | ${siteConfig.titleBrandName}`,
    description:
      "Twelve specialists across six dental disciplines — each focused on the work they do every day.",
    url: `${siteConfig.url}/doctors`,
  },
};

const credentials = [
  {
    Icon: Award,
    title: "Postgraduate specialists",
    description:
      "Every doctor holds an MDS in their own discipline, supported by continuing education and case reviews.",
  },
  {
    Icon: Users,
    title: "A coordinated team",
    description:
      "Complex cases are discussed across specialities, so implant, root canal and cosmetic work fit together.",
  },
  {
    Icon: ShieldCheck,
    title: "Strict sterilisation",
    description:
      "Doctors operate inside documented infection-control protocols with hospital-grade instrument reprocessing.",
  },
];

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Specialists"
        title={
          <>
            Meet Our{" "}
            <span className="text-gradient-brand">Dental Specialists</span>
          </>
        }
        description="Implantology, endodontics, orthodontics, paediatric care, oral surgery and cosmetic dentistry — each handled by a dentist who practises only that."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Doctors", href: "/doctors" },
        ]}
        highlights={[
          `${doctors.length} specialist profiles`,
          "BDS, MDS qualified",
          "15–18 years of experience",
          "English, Telugu & Hindi",
        ]}
      >
        <ActionLink href="/appointment" size="lg">
          <CalendarCheck aria-hidden className="size-4.5" />
          Book an Appointment
        </ActionLink>
      </PageHero>

      {/* --- Team grid --- */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="The Team"
              title={
                <>
                  Specialists in{" "}
                  <span className="text-gradient-brand">every discipline</span>
                </>
              }
              description="Select any doctor to read their background, focus areas and approach to treatment."
            />
          </Reveal>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {doctors.map((doctor, index) => (
              <Reveal key={doctor.slug} delay={(index % 3) * 0.07}>
                <li className="h-full">
                  <DoctorCard doctor={doctor} />
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* --- Credentials --- */}
      <section className="bg-ink-50 py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <div className="relative">
                <div className="relative overflow-hidden rounded-[1.75rem] border border-ink-100 bg-white shadow-card">
                  <div className="relative aspect-4/3 w-full">
                    <Image
                      src={images.clinic.modernChair.src}
                      alt={images.clinic.modernChair.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 46vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div
                  aria-hidden
                  className="absolute -top-5 -right-4 -z-10 size-24 rounded-3xl bg-gradient-brand opacity-20"
                />
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <SectionHeading
                align="left"
                eyebrow="Credentials"
                title={
                  <>
                    Qualified, registered and{" "}
                    <span className="text-gradient-brand">continuously trained</span>
                  </>
                }
              />

              <ul className="mt-9 space-y-5">
                {credentials.map(({ Icon, title, description }) => (
                  <li
                    key={title}
                    className="flex gap-4 rounded-2xl border border-ink-100 bg-white p-5 shadow-soft"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand-soft text-mint-700 ring-1 ring-mint-100">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <span>
                      <span className="block text-base font-bold text-ink-900">
                        {title}
                      </span>
                      <span className="mt-1.5 block text-sm leading-relaxed text-ink-600">
                        {description}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
                <ActionLink href="/services" variant="solid" size="lg">
                  View All Services
                </ActionLink>
                <ActionLink href="/contact" variant="outline" size="lg">
                  Contact the Clinic
                </ActionLink>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}