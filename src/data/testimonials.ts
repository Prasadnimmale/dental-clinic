import type { Testimonial } from "@/types";

export const testimonials: Testimonial[] = [
  {
    name: "Lakshmi Prasanna",
    location: "Yendada",
    treatment: "Dental Implants",
    rating: 5,
    quote:
      "I had two missing teeth and was putting off treatment for two years. Dr. Mehta explained every stage clearly and the whole implant process was far more comfortable than I expected. I can eat properly again.",
  },
  {
    name: "Sandeep Kumar",
    location: "Kakinada",
    treatment: "Root Canal Treatment",
    rating: 5,
    quote:
      "I came in on a Sunday with severe pain and was treated the same day. No pain during the procedure at all. Honest advice, reasonable cost and no unnecessary treatment.",
  },
  {
    name: "Anjali Reddy",
    location: "Palakollu",
    treatment: "Smile Makeover",
    rating: 5,
    quote:
      "I saw a digital preview of my new smile before starting, which gave me real confidence. The veneers look completely natural — nobody can tell they are not my own teeth.",
  },
  {
    name: "Ravi Teja",
    location: "Yendada",
    treatment: "Clear Aligners",
    rating: 5,
    quote:
      "My teenager was apprehensive about braces but the aligners were so discreet that school went smoothly. Follow-up appointments were short and the clinic is spotlessly clean.",
  },
  {
    name: "Sowmya Devi",
    location: "Rajahmundry",
    treatment: "Paediatric Dentistry",
    rating: 5,
    quote:
      "My daughter actually asks when we are going back. Dr. Iyer was patient and gentle, and the first-visit experience was excellent for a nervous five-year-old.",
  },
  {
    name: "Mahesh Babu",
    location: "Gowthavaram",
    treatment: "Wisdom Tooth Surgery",
    rating: 5,
    quote:
      "Surgery was scheduled quickly and I received a call the same evening to check on me. Aftercare instructions were clear and I was back to normal in three days.",
  },
];

/** Highlighted for the homepage testimonials section. */
export const featuredTestimonials = testimonials.slice(0, 3);