import {
  BadgeCheck,
  Clock3,
  HandHeart,
  ShieldCheck,
  Sparkles,
  Wallet,
} from "lucide-react";
import type { FaqItem, FeatureItem } from "@/types";

/** Why patients choose Yendada You Care — six cards, homepage + about page. */
export const whyChooseUs: FeatureItem[] = [
  {
    title: "Specialists, Not Generalists",
    description:
      "Implants, root canals, braces, surgery and cosmetic care are each handled by a dentist who does that work every single day — never rotated away from their speciality.",
    icon: BadgeCheck,
  },
  {
    title: "Transparent, Written Treatment Plans",
    description:
      "You receive an itemised plan with costs, options and timelines before any treatment begins. Nothing is ever added to your bill without your approval.",
    icon: Wallet,
  },
  {
    title: "Hospital-Grade Hygiene",
    description:
      "Class-B autoclave sterilisation, single-use disposables and documented infection-control protocols on every single chair, for every single patient.",
    icon: ShieldCheck,
  },
  {
    title: "Painless, Unhurried Care",
    description:
      "We never rush a patient. Appointments are scheduled so there is time to explain, to reassure and to stop whenever you need a break.",
    icon: HandHeart,
  },
  {
    title: "Modern Technology",
    description:
      "Digital X-ray, intraoral scanning and digital smile planning give more accurate diagnoses and results you can actually preview.",
    icon: Sparkles,
  },
  {
    title: "Appointments That Run On Time",
    description:
      "Efficient clinical teams and in-house diagnostics mean short waiting times and same-day treatment in most cases — including emergencies.",
    icon: Clock3,
  },
];

/** Clinic-wide questions answered in the homepage FAQ accordion. */
export const generalFaqs: FaqItem[] = [
  {
    question: "What dental treatments do you offer at Yendada You Care?",
    answer:
      "We are a multispeciality clinic and provide general dentistry, dental implants, root canal treatment, orthodontics, cosmetic dentistry, teeth whitening, paediatric dentistry and oral surgery. Many patients need more than one service, and we combine them into a single coordinated plan.",
  },
  {
    question: "Do you accept new patients and walk-ins?",
    answer:
      "Yes. Walk-ins are welcome for urgent problems such as pain, swelling or a broken tooth, and we always keep slots free for emergencies. For planned treatment we recommend booking an appointment so you are not kept waiting.",
  },
  {
    question: "How much does a dental consultation cost?",
    answer:
      "Your first visit includes a full oral examination and digital X-rays where clinically needed. We explain every finding, give you a written treatment plan with costs, and you only proceed once you are comfortable with it.",
  },
  {
    question: "I am nervous about dentists. Can you help?",
    answer:
      "Absolutely — and you are in good company. Nervous patients are given longer appointments, we explain and show you every step before we start, and we can arrange extra time or sedation with our anaesthetic colleague when clinically appropriate.",
  },
  {
    question: "Is the clinic open on Sundays and late in the evening?",
    answer:
      "We are open Monday to Saturday from 9:00 AM to 8:00 PM and Sundays from 10:00 AM to 2:00 PM, so weekend and evening appointments are available. Call our emergency line outside these hours for urgent problems.",
  },
  {
    question: "Do you provide emergency dental treatment?",
    answer:
      "Yes. We keep same-day slots reserved for dental emergencies including severe pain, swelling, bleeding, trauma and broken teeth. Call us as early as you can and we will fit you in.",
  },
  {
    question: "How often should I visit for a check-up?",
    answer:
      "Most adults benefit from a check-up and professional cleaning every six months. If you have gum disease, a history of decay or are wearing braces, we may ask you to come in more often.",
  },
  {
    question: "Is whitening safe for my teeth?",
    answer:
      "Yes, when it is carried out by a dentist. We use a tested peroxide gel applied only to your teeth, with barriers protecting your gums, and we check the health of your enamel before starting.",
  },
];