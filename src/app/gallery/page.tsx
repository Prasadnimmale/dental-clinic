import { Camera, CalendarCheck } from "lucide-react";
import type { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { PageHero } from "@/components/common/PageHero";
import { ActionLink } from "@/components/common/Button";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { galleryImages } from "@/data/gallery";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Clinic Gallery",
  description:
    "Photographs of the Yendada You Care dental clinic — treatment rooms, our specialists, dental technology, treatments and patient care in Yendada, Andhra Pradesh.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: `Clinic Gallery | ${siteConfig.titleBrandName}`,
    description:
      "Step inside the clinic — treatment rooms, specialists, technology and patient care, photographed.",
    url: `${siteConfig.url}/gallery`,
    images: galleryImages
      .slice(0, 5)
      .map((image) => ({
        url: `${siteConfig.url}${image.src}`,
        width: 1200,
        height: 900,
        alt: image.alt,
      })),
  },
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            Step inside{" "}
            <span className="text-gradient-brand">our clinic</span>
          </>
        }
        description="Treatment rooms, equipment, specialists and patient care — photographed across our six treatment rooms. Select any image to view it larger."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery", href: "/gallery" },
        ]}
        highlights={[
          `${galleryImages.length} clinic photographs`,
          "Real treatment rooms",
          "Our specialists at work",
          "Modern technology",
        ]}
      >
        <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center">
          <ActionLink href="/appointment" size="lg" className="w-full sm:w-auto">
            <CalendarCheck aria-hidden className="size-4.5" />
            Book a Visit
          </ActionLink>
          <span className="inline-flex items-center gap-2 text-sm text-ink-600">
            <Camera aria-hidden className="size-4 text-mint-600" />
            Treatment rooms are open to view before your appointment
          </span>
        </div>
      </PageHero>

      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <Container>
          <GalleryGrid />
        </Container>
      </section>

      <section className="bg-ink-50 py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-ink-100 bg-white p-8 text-center shadow-soft sm:flex-row sm:text-left sm:p-10">
            <div>
              <h2 className="text-xl font-bold text-ink-900 sm:text-2xl">
                Would you like a guided tour?
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                Ask at reception and we will walk you through every treatment
                room before your appointment.
              </p>
            </div>
            <ActionLink href="/contact" variant="solid" size="lg">
              Contact the Clinic
            </ActionLink>
          </div>
        </Container>
      </section>
    </>
  );
}