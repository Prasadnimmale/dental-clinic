import { Clock3, ShieldCheck, Users } from "lucide-react";
import type { FeatureItem } from "@/types";

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