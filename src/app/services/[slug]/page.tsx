import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRight, Check, Clock, PhoneCall } from "lucide-react";
import { Container } from "@/components/common/Container";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ActionLink } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { FaqAccordion } from "@/components/common/FaqAccordion";
import { getService, services } from "@/data/services";
import { siteConfig } from "@/data/site";

type ServicePageProps = {
  /** Route params are async in Next.js 15+ — await before reading `slug`. */
  params: Promise<{ slug: string }>;
};

/** Prerender every service page at build time. */
export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} in ${siteConfig.address.city} | ${siteConfig.titleBrandName}`,
      description: service.summary,
      url: `${siteConfig.url}/services/${service.slug}`,
      images: [
        {
          url: `${siteConfig.url}${service.image.src}`,
          width: 1200,
          height: 800,
          alt: service.image.alt,
        },
      ],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  const Icon = service.icon;

  const otherServices = services
    .filter((candidate) => candidate.slug !== service.slug)
    .slice(0, 4);

  return (
    <>
      {/* --- Page header --- */}
      <section className="relative overflow-hidden border-b border-ink-100 bg-gradient-brand-soft pt-28 pb-16 sm:pt-32 sm:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-28 right-0 size-[24rem] rounded-full bg-gradient-brand opacity-10 blur-3xl"
        />

        <Container className="relative">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title, href: `/services/${service.slug}` },
            ]}
          />

          <div className="mt-6 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-14">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2.5 rounded-full bg-white/85 px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-[0.14em] text-mint-700 uppercase ring-1 ring-mint-200/80 backdrop-blur-sm">
                <Icon aria-hidden className="size-3.5" />
                {service.shortTitle}
              </span>

              <h1 className="mt-5 text-4xl leading-[1.1] font-bold tracking-tight text-ink-900 sm:text-5xl">
                {service.title}
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg">
                {service.summary}
              </p>

              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
                <ActionLink
                  href="/appointment"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Book an Appointment
                </ActionLink>
                <a
                  href={siteConfig.contact.phoneHref}
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-full border border-ink-200 bg-white px-7 py-3.5 text-base font-semibold text-ink-800 transition-colors duration-300 hover:border-mint-300 hover:text-mint-700 sm:w-auto"
                >
                  <PhoneCall aria-hidden className="size-4.5" />
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative">
                <div className="relative overflow-hidden rounded-[1.75rem] border border-ink-100 bg-white shadow-lift">
                  <div className="relative aspect-3/2 w-full">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div
                  aria-hidden
                  className="absolute -top-4 -right-4 -z-10 size-24 rounded-3xl bg-gradient-brand opacity-20"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* --- Detail --- */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <p className="text-base leading-relaxed text-ink-600 sm:text-[1.0625rem]">
                {service.description}
              </p>

              <h2 className="mt-12 text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
                What is included
              </h2>

              <ul className="mt-6 space-y-3.5">
                {service.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3.5">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-gradient-brand-soft text-mint-700 ring-1 ring-mint-100">
                      <Check aria-hidden className="size-3.5" strokeWidth={3} />
                    </span>
                    <span className="text-[0.9375rem] leading-relaxed text-ink-700">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-12 flex items-start gap-4 rounded-2xl border border-mint-200 bg-mint-50/70 p-6">
                <Clock aria-hidden className="mt-0.5 size-5 shrink-0 text-mint-600" />
                <p className="text-sm leading-relaxed text-ink-600">
                  <span className="block font-semibold text-ink-900">
                    Before your appointment
                  </span>
                  Please eat beforehand if you are having a long procedure, and
                  let us know about any medication, allergies or medical
                  conditions — including anything that affects your gums.
                </p>
              </div>
            </Reveal>

            {/* Sidebar */}
            <aside className="lg:col-span-5">
              <Reveal delay={0.1}>
                <div className="sticky top-28 rounded-3xl border border-ink-100 bg-white p-7 shadow-card">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-brand-soft text-mint-700 ring-1 ring-mint-100">
                    <Icon aria-hidden className="size-5.5" />
                  </span>

                  <h2 className="mt-5 text-xl font-bold text-ink-900">
                    Talk to a specialist
                  </h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
                    Get a clear answer about{" "}
                    <span className="font-semibold text-ink-900">
                      {service.title.toLowerCase()}
                    </span>{" "}
                    — including whether you need it at all.
                  </p>

                  <div className="mt-6 flex flex-col gap-2.5">
                    <ActionLink href="/appointment" size="md">
                      Book an Appointment
                    </ActionLink>
                    <ActionLink href="/doctors" variant="outline" size="md">
                      Meet Our Specialists
                    </ActionLink>
                  </div>

                  <div className="mt-7 border-t border-ink-100 pt-6">
                    <p className="text-xs font-semibold tracking-[0.12em] text-ink-400 uppercase">
                      Other services
                    </p>
                    <ul className="mt-4 space-y-1">
                      {otherServices.map((other) => (
                        <li key={other.slug}>
                          <Link
                            href={`/services/${other.slug}`}
                            className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink-700 transition-colors duration-200 hover:bg-mint-50 hover:text-mint-700"
                          >
                            {other.shortTitle}
                            <ArrowRight
                              aria-hidden
                              className="size-4 -translate-x-1 text-mint-500 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
                            />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </section>

      {/* --- Service FAQ --- */}
      {service.faq.length ? (
        <section className="bg-ink-50 py-20 sm:py-24 lg:py-28">
          <Container>
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-4">
                <Reveal>
                  <SectionHeading
                    align="left"
                    eyebrow="FAQ"
                    title={
                      <>
                        {service.title}{" "}
                        <span className="text-gradient-brand">questions</span>
                      </>
                    }
                  />
                </Reveal>
              </div>

              <Reveal className="lg:col-span-8" delay={0.08}>
                <div className="rounded-3xl border border-ink-100 bg-white px-6 py-2 sm:px-8">
                  <FaqAccordion items={service.faq} />
                </div>
              </Reveal>
            </div>
          </Container>
        </section>
      ) : null}

      {/* --- Related --- */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Keep Exploring"
              title={
                <>
                  Related{" "}
                  <span className="text-gradient-brand">treatments</span>
                </>
              }
              description="Many patients need more than one service. These are commonly combined with the treatment above."
            />
          </Reveal>

          <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.map((other, index) => (
              <Reveal key={other.slug} delay={index * 0.06}>
                <li className="h-full">
                  <RelatedServiceCard service={other} />
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}

/** Compact card used in the related-services grid. */
function RelatedServiceCard({ service }: { service: (typeof services)[number] }) {
  const Icon = service.icon;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white p-6 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1.5 hover:border-mint-200 hover:shadow-lift"
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-brand transition-transform duration-300 group-hover:scale-x-100"
      />

      <span className="flex size-11 items-center justify-center rounded-2xl bg-gradient-brand-soft text-mint-700 ring-1 ring-mint-100">
        <Icon aria-hidden className="size-5" />
      </span>

      <h3 className="mt-5 text-base font-bold text-ink-900">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-600">
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
  );
}