import type { LucideIcon } from "lucide-react";

/** A resolved image descriptor used everywhere instead of raw URLs. */
export interface ClinicImage {
  src: string;
  alt: string;
  /** Optional caption used in galleries / lightboxes. */
  caption?: string;
}

/** A brand asset with known intrinsic dimensions (logos, icons). */
export interface BrandAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  icon: LucideIcon;
  image: ClinicImage;
  highlights: string[];
  faq: { question: string; answer: string }[];
}

export interface Doctor {
  slug: string;
  name: string;
  qualification: string;
  specialization: string;
  experience: string;
  bio: string;
  image: ClinicImage;
  focusAreas: string[];
}

export interface Treatment {
  slug: string;
  title: string;
  description: string;
  duration: string;
  image: ClinicImage;
  benefits: string[];
}

export interface Testimonial {
  name: string;
  location: string;
  treatment: string;
  rating: number;
  quote: string;
}

export type GalleryCategory =
  | "All"
  | "Clinic"
  | "Doctors"
  | "Treatment"
  | "Technology"
  | "Patient Care";

export interface GalleryImage extends ClinicImage {
  category: Exclude<GalleryCategory, "All">;
}

export interface TechnologyItem {
  title: string;
  description: string;
  icon: LucideIcon;
  image: ClinicImage;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

export type AppointmentFormErrors = Partial<
  Record<keyof AppointmentFormData, string>
>;

export interface WorkingHours {
  day: string;
  hours: string;
}