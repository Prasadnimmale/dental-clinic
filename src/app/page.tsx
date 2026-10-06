import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { DentalJourneySection } from "@/components/home/DentalJourneySection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { TreatmentsSection } from "@/components/home/TreatmentsSection";
import { DoctorsPreview } from "@/components/home/DoctorsPreview";
import { TechnologySection } from "@/components/home/TechnologySection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PatientExperience } from "@/components/home/PatientExperience";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { AppointmentCta } from "@/components/home/AppointmentCta";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <DentalJourneySection />
      <ServicesPreview />
      <TreatmentsSection />
      <DoctorsPreview />
      <TechnologySection />
      <WhyChooseUs />
      <PatientExperience />
      <TestimonialsSection />
      <FaqSection />
      <AppointmentCta />
    </>
  );
}