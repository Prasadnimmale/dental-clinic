import {
  Coffee,
  HandHeart,
  Leaf,
  MessageCircle,
  PhoneCall,
  Timer,
} from "lucide-react";
import type { FeatureItem } from "@/types";

/**
 * "Your Comfort Matters" section — the emotional differentiator for patients
 * who feel anxious about dental treatment.
 */
export const patientExperience: FeatureItem[] = [
  {
    title: "Time to Ask Every Question",
    description:
      "Longer appointments mean nothing is rushed. We explain with pictures and models, and repeat anything you want to hear again.",
    icon: MessageCircle,
  },
  {
    title: "Gentle, Step-by-Step Care",
    description:
      "We tell you what we are doing before we do it and pause whenever you raise your hand. Nothing happens while you are uncomfortable.",
    icon: HandHeart,
  },
  {
    title: "A Calm, Bright Environment",
    description:
      "Natural light, clean lines and soft seating — a space designed to lower your pulse the moment you walk in.",
    icon: Leaf,
  },
  {
    title: "Warm Welcome, Warm Beverages",
    description:
      "Tea or water while you wait, and never more than a few minutes of it. Respecting your time is part of respecting you.",
    icon: Coffee,
  },
  {
    title: "Same-Day Emergency Care",
    description:
      "In pain? Call us. We keep slots open every day so you are treated as soon as you reach us.",
    icon: PhoneCall,
  },
  {
    title: "Aftercare That Calls You",
    description:
      "After a procedure we check in by phone, answer any question and review your healing — you are never left wondering.",
    icon: Timer,
  },
];