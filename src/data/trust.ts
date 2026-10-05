import { Clock3, ShieldCheck, Star, Users } from "lucide-react";
import type { FeatureItem } from "@/types";
import { siteConfig } from "./site";

/**
 * Trust strip shown directly beneath the hero — the four promises patients
 * look for before choosing a dental clinic.
 */
export const trustHighlights: FeatureItem[] = [
  {
    title: `${siteConfig.stats.yearsOfCare} Years of Care`,
    description: `Serving families across Yendada and ${siteConfig.address.district} for over ${siteConfig.stats.yearsOfCare.replace("+", "")} years.`,
    icon: Clock3,
  },
  {
    title: `${siteConfig.stats.happyPatients} Happy Patients`,
    description: "A reputation built one satisfied patient at a time.",
    icon: Users,
  },
  {
    title: `${siteConfig.stats.dentalSpecialists} Dental Specialists`,
    description: "Every speciality handled by a dentist who practises it daily.",
    icon: ShieldCheck,
  },
  {
    title: "4.9 Rated by Patients",
    description: "Consistently rated highly for care, clarity and hygiene.",
    icon: Star,
  },
];

/** Short reassurance points used beside the appointment call-to-action. */
export const appointmentReassurance: FeatureItem[] = [
  {
    title: "Confirmed within working hours",
    description:
      "Our front desk confirms your preferred date and time by phone or WhatsApp.",
    icon: Clock3,
  },
  {
    title: "No obligation",
    description:
      "An appointment request is not a commitment. We always explain your options first.",
    icon: ShieldCheck,
  },
  {
    title: "Emergency slots kept daily",
    description:
      "We hold back appointments each day for patients in pain.",
    icon: Users,
  },
];