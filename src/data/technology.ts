import { Scan, Monitor, Armchair, Wind, Microscope } from "lucide-react";
import { images } from "./images";
import type { TechnologyItem } from "@/types";

/**
 * Equipment and technology that differentiates the clinic. Rendered on the
 * homepage and echoed on the About page.
 */
export const technology: TechnologyItem[] = [
  {
    title: "Digital X-Ray",
    description:
      "High-definition digital sensors replace traditional film, cutting radiation by up to 80% and giving an instant, precise image of your teeth and jawbone.",
    icon: Scan,
    image: images.technology.digitalXray,
  },
  {
    title: "Intraoral Scanner",
    description:
      "Comfortable wand scanning replaces messy impressions. Accurate digital models are ready in minutes, without gagging or waiting for a lab pickup.",
    icon: Microscope,
    image: images.technology.intraoralScanner,
  },
  {
    title: "Digital Smile Planning",
    description:
      "Your proposed treatment is simulated and shown to you before anything begins — so you can see the result and approve the plan with confidence.",
    icon: Monitor,
    image: images.technology.smilePlanning,
  },
  {
    title: "Advanced Dental Chairs",
    description:
      "Ergonomic, motorised chairs with integrated lighting, air and water delivery keep every appointment comfortable, unhurried and precise.",
    icon: Armchair,
    image: images.technology.chair,
  },
  {
    title: "Hospital-Grade Sterilisation",
    description:
      "Class-B vacuum autoclaves, single-use disposables and strict barrier protocols mean instruments are reprocessed to hospital standards after every patient.",
    icon: Wind,
    image: images.technology.sterilization,
  },
];