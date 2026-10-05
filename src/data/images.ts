import type { ClinicImage } from "@/types";

/**
 * Centralised image configuration.
 *
 * Every photograph used by the site lives in `/public/images/<folder>` and is
 * referenced from here, so paths, alt text and captions are never duplicated
 * across components. Gallery images are declared inline in `src/data/gallery.ts`
 * because they also need a category.
 */
const img = (
  folder: string,
  file: string,
  alt: string,
  caption?: string,
): ClinicImage => ({
  src: `/images/${folder}/${file}`,
  alt,
  caption,
});

export const images = {
  hero: {
    main: img(
      "hero",
      "hero-main-treatment.jpg",
      "Dental specialist examining a patient in a bright modern treatment room at Yendada You Care",
      "Every consultation begins with a careful look",
    ),
    consultation: img(
      "hero",
      "hero-consultation.jpg",
      "Dentist discussing a treatment plan with a patient at the clinic",
      "Clear conversations before every procedure",
    ),
    teamCare: img(
      "hero",
      "hero-team-care.jpg",
      "Friendly dental team caring for a patient during an appointment",
      "A calm space for nervous patients",
    ),
  },

  about: {
    clinicSign: img(
      "about",
      "about.webp",
      "You Care Dental clinic sign with the message Your Smile Partner",
    ),
    team: img(
      "about",
      "about-clinic-team.jpg",
      "Multispeciality dental team reviewing a patient case together",
      "Specialists working together",
    ),
    consultation: img(
      "about",
      "about-consultation.jpg",
      "Dental specialist explaining a treatment plan to a patient",
      "Consultation room",
    ),
    patient: img(
      "about",
      "about-patient-experience.jpg",
      "Comfortable dental consultation with a friendly clinical team",
      "A calm, unhurried visit",
    ),
  },

  clinic: {
    reception: img(
      "clinic",
      "clinic-reception.jpg",
      "Welcoming reception and waiting area of a multispeciality dental clinic",
      "Reception & waiting area",
    ),
    treatmentRoom: img(
      "clinic",
      "clinic-treatment-room.jpg",
      "Modern sterilised dental treatment room with contemporary equipment",
      "Sterilised treatment room",
    ),
    chair: img(
      "clinic",
      "clinic-dental-chair.jpg",
      "Ergonomic dental chair prepared for a patient",
      "Ergonomic dental chair",
    ),
    modernChair: img(
      "clinic",
      "clinic-modern-chair.jpg",
      "Modern dental chair with attached delivery unit",
      "Modern dental chair",
    ),
    equipment: img(
      "clinic",
      "clinic-equipment.jpg",
      "Advanced dental equipment arranged in a clinical operatory",
      "Advanced equipment",
    ),
    operatory: img(
      "clinic",
      "clinic-dental-operatory.jpg",
      "Dental operatory prepared and ready for a procedure",
      "Prepared operatory",
    ),
    waitingArea: img(
      "clinic",
      "clinic-waiting-area.jpg",
      "Comfortable clinic waiting area with natural light",
      "Comfortable waiting area",
    ),
    sterilization: img(
      "technology",
      "tech-sterilization.jpg",
      "Class-B vacuum autoclave used for dental instrument reprocessing",
      "Hospital-grade sterilisation",
    ),
  },

  technology: {
    digitalXray: img(
      "technology",
      "tech-digital-xray.jpg",
      "Digital dental X-ray sensor producing high-definition images",
      "Digital X-Ray",
    ),
    intraoralScanner: img(
      "technology",
      "tech-intraoral-scanner.jpg",
      "Intraoral scanner capturing accurate digital impressions",
      "Intraoral scanner",
    ),
    smilePlanning: img(
      "technology",
      "tech-smile-planning.jpg",
      "Digital smile planning reviewed on a clinic monitor",
      "Digital smile planning",
    ),
    chair: img(
      "technology",
      "tech-dental-chair.jpg",
      "Advanced dental chair with integrated delivery units",
      "Advanced dental chair",
    ),
    sterilization: img(
      "technology",
      "tech-sterilization.jpg",
      "Class-B vacuum autoclave for dental sterilisation",
      "Class-B sterilisation",
    ),
  },

  /** Imagery for the "Patient Experience" section. */
  experience: {
    patient: img(
      "about",
      "experice-3.webp",
      "Patient experience at You Care Dental",
      "A welcoming patient experience at You Care Dental",
    ),
    followup: img(
      "about",
      "experience.webp",
      "Patient care at You Care Dental",
      "Patient care",
    ),
    consult: img(
      "about",
      "about-consultation.jpg",
      "Dentist sitting with a patient and explaining a diagnosis",
      "We explain before we treat",
    ),
    care: img(
      "about",
      "experience-2.webp",
      "Patient comfort at You Care Dental",
      "Patient comfort at You Care Dental",
    ),
  },
} as const;

/** Helper for building an image descriptor inline inside data files. */
export function image(
  folder: string,
  file: string,
  alt: string,
  caption?: string,
): ClinicImage {
  return img(folder, file, alt, caption);
}