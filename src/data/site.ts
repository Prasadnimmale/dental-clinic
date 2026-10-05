import type { NavLink, WorkingHours } from "@/types";

/**
 * Single source of truth for clinic identity, contact details and navigation.
 * Update the values here and the whole site reflects them.
 */
export const siteConfig = {
  /** Full clinic name, used in metadata and page copy. */
  fullName: " You Care Multispeciality Dental Clinic",
  /** Short name used in page titles and headings. */
  brandName: " You Care",
  /** Short name used specifically in browser and social-share titles. */
  titleBrandName: "You Care",
  /**
   * Name shown in the header and footer lockup, matching the clinic artwork:
   * "You Care" over the descriptor.
   */
  logoName: "You Care",
  /** Descriptor shown under the lockup name, as it appears in the clinic logo. */
  descriptor: "Multispeciality Dental Clinic",
  /** Path to the complete logo image used in header and footer. */
  logo: "/images/logo/you-care-multispeciality-dental-clinic.png",
  legalName: " You Care Multispeciality Dental Clinic",
  tagline: "Healthy Smile. Confident You.",
  description:
    " You Care is a multispeciality dental clinic offering advanced dental treatments, dental implants, cosmetic dentistry, orthodontics and paediatric care delivered by experienced dental specialists in a modern, sterilised environment.",

  /** Public base URL — used for canonical links, sitemap and Open Graph. */
  url: "https://www.yendadayoucare.com",

  address: {
    line1: "3rd Floor, KP Icon, No. 406",
    line2: "Opp. MK Gold Coast, Yendada",
    city: "Yendada",
    district: "Visakhapatnam",
    state: "Andhra Pradesh",
    postalCode: "530045",
    country: "India",
  },

  contact: {
    phone: "+91 7989067029",
    phoneHref: "tel:+917989067029",
    whatsapp: "917989067029",
    email: "Youcaredentalclinc@gmail.com",
    emergencyPhone: "+91 7989067029",
    emergencyPhoneHref: "tel:+917989067029",
  },

  maps: {
    /** Embed-friendly Google Maps query URL. */
    embedSrc:
      "https://www.google.com/maps?q=3rd+Floor,+KP+Icon,+No.+406,+Opp.+MK+Gold+Coast,+Yendada,+Visakhapatnam,+Andhra+Pradesh+530045&output=embed",
    directionsHref:
      "https://www.google.com/maps/search/?api=1&query=3rd%20Floor%2C%20KP%20Icon%2C%20No.%20406%2C%20Opp.%20MK%20Gold%20Coast%2C%20Yendada%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530045",
  },

  social: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    linkedin: "https://linkedin.com/",
  },

  stats: {
    yearsOfCare: "15+",
    happyPatients: "25,000+",
    dentalSpecialists: "12",
    treatmentChairs: "6",
  },
} as const;

export const workingHours: WorkingHours[] = [
  { day: "Monday – Saturday", hours: "9:00 AM – 8:00 PM" },
];

/** Emergency / holiday note shown on the contact page. */
export const emergencyNote =
  "For dental emergencies outside clinic hours, call our emergency line and our team will guide you immediately.";

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Doctors", href: "/doctors" },
  { label: "Treatments", href: "/treatments" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const footerQuickLinks: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Our Doctors", href: "/doctors" },
  { label: "Treatments", href: "/treatments" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
  { label: "Book Appointment", href: "/appointment" },
];

/** Full address as one line, used for schema.org and meta. */
export const fullAddress = [
  siteConfig.address.line1,
  siteConfig.address.line2,
  `${siteConfig.address.city}, ${siteConfig.address.district}`,
  siteConfig.address.state,
  siteConfig.address.postalCode,
].join(", ");