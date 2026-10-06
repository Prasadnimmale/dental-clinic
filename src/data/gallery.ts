import { image } from "./images";
import type { GalleryCategory, GalleryImage } from "@/types";

export const galleryCategories: GalleryCategory[] = [
  "All",
  "Clinic",
  "Doctors",
  "Treatment",
  "Technology",
  "Patient Care",
];

export const galleryImages: GalleryImage[] = [
  {
    ...image(
      "gallery",
      "gallery-clinic-interior.jpg",
      "Bright, modern dental treatment room at You Care",
      "Modern treatment room",
    ),
    category: "Clinic",
  },
  {
    ...image(
      "gallery",
      "gallery-consultation.jpg",
      "Patient having her teeth examined during a dental consultation",
      "Consultation chair",
    ),
    category: "Patient Care",
  },
  {
    ...image(
      "gallery",
      "gallery-team-care.jpg",
      "Dental team consulting together during a procedure",
      "Our team in action",
    ),
    category: "Doctors",
  },
  {
    ...image(
      "gallery",
      "gallery-pediatric-care.jpg",
      "Young boy having his teeth checked by a dentist",
      "Gentle paediatric care",
    ),
    category: "Patient Care",
  },
  {
    ...image(
      "gallery",
      "gallery-digital-imaging.jpg",
      "Dentist reviewing a 3D digital dental scan",
      "Digital smile planning",
    ),
    category: "Technology",
  },
  {
    ...image(
      "gallery",
      "gallery-treatment.jpg",
      "Dentist examining a patient with a dental mirror during treatment",
      "Chairside examination",
    ),
    category: "Treatment",
  },
  {
    ...image(
      "gallery",
      "gallery-dental-instruments.jpg",
      "Sterile dental instruments arranged on a clinical tray",
      "Sterile instruments",
    ),
    category: "Clinic",
  },
  {
    ...image(
      "gallery",
      "gallery-orthodontic-care.jpg",
      "Close-up of a tooth fitted with orthodontic braces",
      "Braces fitted by our orthodontist",
    ),
    category: "Treatment",
  },
  {
    ...image(
      "gallery",
      "gallery-xray-diagnosis.jpg",
      "Dental X-ray showing teeth and jawbone for diagnosis",
      "Digital X-ray diagnosis",
    ),
    category: "Technology",
  },
  {
    ...image(
      "gallery",
      "gallery-hygiene-checkup.jpg",
      "Gloved hand pointing at a dental scan on a tablet during a check-up",
      "Hygiene and check-up",
    ),
    category: "Patient Care",
  },
  {
    ...image(
      "gallery",
      "gallery-oral-care.jpg",
      "Patient receiving routine oral care in the dental chair",
      "Routine oral care",
    ),
    category: "Treatment",
  },
  {
    ...image(
      "gallery",
      "gallery-smile-result.jpg",
      "Patient smiling brightly to show a healthy treated smile",
      "Healthy smiles",
    ),
    category: "Patient Care",
  },
];