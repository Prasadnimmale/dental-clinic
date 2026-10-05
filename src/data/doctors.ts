import { image } from "./images";
import type { Doctor } from "@/types";

/**
 * Dental specialists shown on the Doctors page and homepage preview.
 * Replace the placeholder photography with real clinic portraits before launch.
 */
export const doctors: Doctor[] = [
  {
    slug: "dr-arjun-mehta",
    name: "Dr. Arjun Mehta",
    qualification: "BDS, MDS (Prosthodontics)",
    specialization: "Prosthodontist & Implantologist",
    experience: "16 years",
    bio: "Dr. Mehta leads the implant and prosthetic team at Yendada You Care. He has restored over two thousand implants and complex full-mouth rehabilitations, with a special interest in predictable long-term implant planning.",
    focusAreas: [
      "Dental implants",
      "Full-mouth rehabilitation",
      "Crowns and bridges",
    ],
    image: image(
      "doctors",
      "dr-arjun-mehta.jpg",
      "Portrait of Dr. Arjun Mehta, prosthodontist and implantologist at Yendada You Care",
      "Dr. Arjun Mehta",
    ),
  },
  {
    slug: "dr-priya-sharma",
    name: "Dr. Priya Sharma",
    qualification: "BDS, MDS (Endodontics)",
    specialization: "Endodontist",
    experience: "12 years",
    bio: "Dr. Sharma is known for making root canal treatment genuinely comfortable. She works with rotary endodontics and microscope-assisted techniques that allow most infected teeth to be treated in a single visit.",
    focusAreas: ["Root canal treatment", "Tooth-coloured restorations", "Endodontic retreatment"],
    image: image(
      "doctors",
      "dr-priya-sharma.jpg",
      "Portrait of Dr. Priya Sharma, endodontist at Yendada You Care",
      "Dr. Priya Sharma",
    ),
  },
  {
    slug: "dr-rohit-verma",
    name: "Dr. Rohit Verma",
    qualification: "BDS, MDS (Orthodontics)",
    specialization: "Orthodontist",
    experience: "14 years",
    bio: "Dr. Verma plans both braces and clear aligner therapy using digital setup. He treats children, teenagers and adults, and is especially attentive to patients who are anxious about orthodontic appointments.",
    focusAreas: ["Braces", "Clear aligners", "Bite correction"],
    image: image(
      "doctors",
      "dr-rohit-verma.jpg",
      "Portrait of Dr. Rohit Verma, orthodontist at Yendada You Care",
      "Dr. Rohit Verma",
    ),
  },
  {
    slug: "dr-ananya-iyer",
    name: "Dr. Ananya Iyer",
    qualification: "BDS, MDS (Pediatric Dentistry)",
    specialization: "Pediatric Dentist",
    experience: "10 years",
    bio: "Dr. Iyer has built a gentle paediatric practice where first visits are fun rather than frightening. She guides parents on prevention, diet and brushing from the very first tooth.",
    focusAreas: ["Children's dentistry", "Fluoride and sealants", "Habit correction"],
    image: image(
      "doctors",
      "dr-ananya-iyer.jpg",
      "Portrait of Dr. Ananya Iyer, pediatric dentist at Yendada You Care",
      "Dr. Ananya Iyer",
    ),
  },
  {
    slug: "dr-vikram-reddy",
    name: "Dr. Vikram Reddy",
    qualification: "BDS, MDS (Oral & Maxillofacial Surgery)",
    specialization: "Oral Surgeon",
    experience: "18 years",
    bio: "Dr. Reddy handles the surgical side of the clinic — wisdom teeth, bone grafting and pre-implant surgery — with a calm, unhurried manner and thorough post-operative follow-up.",
    focusAreas: ["Wisdom teeth surgery", "Bone grafting", "Impacted teeth"],
    image: image(
      "doctors",
      "dr-vikram-reddy.jpg",
      "Portrait of Dr. Vikram Reddy, oral and maxillofacial surgeon at Yendada You Care",
      "Dr. Vikram Reddy",
    ),
  },
  {
    slug: "dr-kavya-nair",
    name: "Dr. Kavya Nair",
    qualification: "BDS, MDS (Cosmetic & Esthetic Dentistry)",
    specialization: "Cosmetic Dentist",
    experience: "11 years",
    bio: "Dr. Nair designs smiles conservatively — always keeping healthy tooth structure intact. Her work ranges from subtle whitening to complete porcelain smile makeovers planned on a digital setup.",
    focusAreas: ["Smile design", "Porcelain veneers", "Teeth whitening"],
    image: image(
      "doctors",
      "dr-kavya-nair.jpg",
      "Portrait of Dr. Kavya Nair, cosmetic dentist at Yendada You Care",
      "Dr. Kavya Nair",
    ),
  },
];

export const featuredDoctors = doctors.slice(0, 3);

export function getDoctor(slug: string): Doctor | undefined {
  return doctors.find((doctor) => doctor.slug === slug);
}