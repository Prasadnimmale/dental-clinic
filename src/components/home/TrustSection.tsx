import {
  HeartHandshake,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { Container } from "@/components/common/Container";
import { IconCard } from "@/components/common/IconCard";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeading } from "@/components/common/SectionHeading";

const careBenefits = [
  {
    title: "Comprehensive Dental Care",
    description:
      "Complete dental care for routine check-ups, preventive treatments, restorative procedures and advanced dental needs.",
    icon: Stethoscope,
  },
  {
    title: "Personalized Treatment",
    description:
      "Every treatment plan is designed around the patient's individual dental needs, comfort and long-term oral health.",
    icon: HeartPulse,
  },
  {
    title: "Modern & Hygienic Care",
    description:
      "A clean, comfortable clinical environment with modern dental equipment and strong hygiene practices.",
    icon: ShieldCheck,
  },
  {
    title: "Compassionate Patient Care",
    description:
      "Friendly guidance, clear communication and a comfortable experience at every stage of your dental journey.",
    icon: HeartHandshake,
  },
];

/**
 * Benefits section directly below the hero, focused on patient care instead
 * of unverified clinic statistics.
 */
export function TrustSection() {
  return (
    <section
      aria-labelledby="care-benefits-heading"
      className="relative border-y border-ink-100 bg-white py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <Reveal className="mb-10 sm:mb-12">
          <SectionHeading
            title={
              <span id="care-benefits-heading">
                Complete Care for a Healthier Smile
              </span>
            }
            description="From preventive dentistry to specialized treatments, our focus is on providing comfortable, personalized and quality dental care."
          />
        </Reveal>

        <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {careBenefits.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.07} className="h-full">
              <IconCard
                icon={item.icon}
                title={item.title}
                description={item.description}
                variant="card"
                className="h-full"
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}