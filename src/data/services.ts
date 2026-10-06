import {
  Activity,
  Anchor,
  Baby,
  Braces,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";
import { image } from "./images";
import type { Service } from "@/types";

/**
 * Every service rendered on the site comes from this single list.
 * Cards, navbar dropdown, service pages and the sitemap all read from here.
 */
export const services: Service[] = [
  {
    slug: "general-dentistry",
    title: "General Dentistry",
    shortTitle: "General Dentistry",
    summary:
      "Routine check-ups, digital diagnostics and preventive care to keep your teeth and gums healthy for life.",
    description:
      "General dentistry is the foundation of good oral health. At You Care our dentists combine digital examination with X-ray imaging to catch problems early — when treatment is simplest and most affordable. From a routine cleaning to fillings, gum care and night guards, every visit is planned around your comfort and your long-term oral health.",
    icon: Stethoscope,
    image: image(
      "services",
      "service-general-dentistry.jpg",
      "Dentist carrying out a routine oral examination with dental instruments",
      "Routine check-ups and digital diagnosis",
    ),
    highlights: [
      "Digital examination and digital X-ray diagnosis",
      "Scaling, polishing and professional cleaning",
      "Tooth-coloured fillings for decayed teeth",
      "Gum disease treatment and bleeding-gum care",
      "Night guards, mouth guards and habit counselling",
    ],
    faq: [
      {
        question: "How often should I visit a dentist for a general check-up?",
        answer:
          "Most adults benefit from a check-up and cleaning every six months. If you have gum disease, a history of decay or are undergoing orthodontic treatment, we may ask you to visit more often.",
      },
      {
        question: "Is a routine dental X-ray safe?",
        answer:
          "Yes. We use digital sensors which need up to 80% less radiation than traditional film X-rays, and we only take images when they are clinically necessary.",
      },
    ],
  },
  {
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    shortTitle: "Cosmetic Dentistry",
    summary:
      "Smile design with veneers, bonding and reshaping that looks natural and suits your face.",
    description:
      "A confident smile changes how you are perceived. Our cosmetic dentistry service includes porcelain and composite veneers, tooth-coloured bonding, reshaping of uneven or chipped teeth and complete smile design. Every plan is previewed digitally before treatment begins, so you can see your new smile and approve it first.",
    icon: Sparkles,
    image: image(
      "services",
      "service-cosmetic-dentistry.jpg",
      "Close-up of a bright, healthy, naturally aligned smile",
      "Natural-looking smile design",
    ),
    highlights: [
      "Porcelain and composite veneers",
      "Tooth-coloured bonding for chipped edges",
      "Enamel reshaping and contouring",
      "Gum reshaping for a balanced smile line",
      "Digital smile preview before treatment",
    ],
    faq: [
      {
        question: "Are dental veneers permanent?",
        answer:
          "Porcelain veneers typically last 10 to 15 years. They are bonded to your natural tooth, so replacing them later is straightforward and the tooth is usually only minimally prepared.",
      },
      {
        question: "Will veneers change the colour of my teeth?",
        answer:
          "No — we match the shade of your veneers to your natural teeth under natural light, so the result looks like your own healthy teeth.",
      },
    ],
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    shortTitle: "Dental Implants",
    summary:
      "A permanent, natural-looking replacement for missing teeth that protects your jawbone.",
    description:
      "A dental implant is the closest replacement for a natural tooth. A titanium post is placed into the jawbone, and a custom-made crown is fitted on top — restoring both the appearance and the function of the missing tooth. Implants also prevent the bone loss that follows tooth loss. We plan every implant case with 3D imaging and place them with guided surgery for accuracy.",
    icon: Anchor,
    image: image(
      "services",
      "service-dental-implants.jpg",
      "Dental implant being examined with a dental mirror before implant placement",
      "Permanent tooth replacement",
    ),
    highlights: [
      "Single, multiple and full-arch implant solutions",
      "3D imaging and guided implant placement",
      "Bone grafting for patients with lost bone",
      "Custom-matched zirconia or ceramic crowns",
      "Long-term maintenance and aftercare programme",
    ],
    faq: [
      {
        question: "Am I a good candidate for dental implants?",
        answer:
          "Most adults with a full set of adult teeth who are in good general health are suitable. You need enough healthy jawbone — we assess this with a 3D scan, and bone grafting can help where bone has been lost.",
      },
      {
        question: "How long does an implant last?",
        answer:
          "With proper care, a well-placed implant can last 25 years or more. Implants do not decay, but the surrounding gum and bone still need regular maintenance.",
      },
    ],
  },
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    shortTitle: "Root Canal",
    summary:
      "Pain relief and tooth-saving treatment for deeply infected or damaged teeth, usually in one or two visits.",
    description:
      "When infection reaches the nerve inside a tooth, root canal treatment removes the infection, disinfects the canals carefully and seals the tooth, so it can stay in your mouth for many more years. With modern rotary instruments and effective local anaesthetic, the treatment is far more comfortable than its reputation suggests — most patients report that the relief afterwards is immediate.",
    icon: Syringe,
    image: image(
      "services",
      "service-root-canal.jpg",
      "Dental mirror in focus with the treatment chair softly blurred behind it",
      "Single-visit endodontic care",
    ),
    highlights: [
      "Single-visit treatment using rotary instruments",
      "Digital apex locators for accurate working length",
      "Effective local anaesthetic for anxious patients",
      "Post-treatment restoration with crowns where needed",
    ],
    faq: [
      {
        question: "Is root canal treatment painful?",
        answer:
          "The procedure itself is not painful because the tooth is fully numbed. Most patients feel pressure but not pain, and any soreness afterwards usually settles within 24 to 48 hours with a simple painkiller.",
      },
      {
        question: "Is it better to extract a tooth or have a root canal?",
        answer:
          "Whenever a tooth can be saved safely, saving it is preferable — it keeps your natural bite and avoids the cost and complexity of replacing a missing tooth later.",
      },
    ],
  },
  {
    slug: "orthodontics",
    title: "Orthodontics",
    shortTitle: "Orthodontics",
    summary:
      "Braces and clear aligners that straighten crowded or misaligned teeth for adults and teenagers.",
    description:
      "Straighter teeth are easier to clean and far less likely to decay or loosen. Our orthodontists treat children, teenagers and adults with metal and ceramic braces as well as removable clear aligners. Using digital scans and planning, we can show you the expected result before treatment begins and keep appointments efficient — many aligner cases are completed with very few visits.",
    icon: Braces,
    image: image(
      "services",
      "service-orthodontics.jpg",
      "Smiling patient showing metal braces during orthodontic treatment",
      "Braces and clear aligners",
    ),
    highlights: [
      "Metal and ceramic braces for all ages",
      "Removable clear aligner therapy",
      "Digital treatment planning and progress tracking",
      "Retainers to hold your new smile",
      "Growth monitoring for children and teenagers",
    ],
    faq: [
      {
        question: "How long do braces or aligners take?",
        answer:
          "Most cases take 12 to 18 months, though the exact duration depends on how far the teeth need to move and how well you wear aligners or follow hygiene instructions.",
      },
      {
        question: "Can adults get orthodontic treatment?",
        answer:
          "Yes. Adults of any age can straighten their teeth as long as the gums and jawbone are healthy. Clear aligners are especially popular because they are barely visible.",
      },
    ],
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    shortTitle: "Teeth Whitening",
    summary:
      "Professional in-clinic whitening that lifts years of staining safely and evenly.",
    description:
      "Coffee, tea, tobacco and age-related changes dull the natural brightness of teeth. Our in-clinic whitening uses a controlled peroxide gel activated under a special light, lifting shade noticeably in a single visit. We protect your gums, check your enamel first and provide custom top-up trays so your result lasts much longer.",
    icon: Sparkles,
    image: image(
      "services",
      "service-teeth-whitening.jpg",
      "Close-up of noticeably whiter teeth after professional whitening",
      "Brighter smile in a single visit",
    ),
    highlights: [
      "Clinically proven, enamel-safe whitening gel",
      "Custom-made top-up trays for home maintenance",
      "Gum protection and sensitivity management",
      "Shade matched to your natural tooth colour",
    ],
    faq: [
      {
        question: "How white can my teeth become with whitening?",
        answer:
          "Most patients achieve a change of three to six shades. The result depends on the natural colour of your teeth — crowns, veneers and fillings cannot be whitened and will stay as they are.",
      },
      {
        question: "Will whitening damage my enamel?",
        answer:
          "No. We use a tested peroxide gel applied only to your teeth, with barriers protecting the gums, and we check enamel health before starting.",
      },
    ],
  },
  {
    slug: "paediatric-dentistry",
    title: "Pediatric Dentistry",
    shortTitle: "Paediatric Dentistry",
    summary:
      "Gentle, friendly dental care for children that builds lifelong confidence with dentists.",
    description:
      "A child's early dental experiences decide how they feel about dentists for life. Our paediatric dentists make visits calm, positive and completely unhurried — using child-sized instruments, a gentle approach and lots of encouragement. We focus on prevention: fluoride applications, pit-and-fissure sealants, diet advice and parental guidance on brushing and thumb-sucking habits.",
    icon: Baby,
    image: image(
      "services",
      "service-pediatric-dentistry.jpg",
      "Paediatric dentist gently examining a young child's teeth",
      "Happy first dental visits",
    ),
    highlights: [
      "First dental visit recommended by age one to three",
      "Fluoride varnish and pit-and-fissure sealants",
      "Space maintainers and habit-breaking appliances",
      "Child-friendly, unhurried appointments",
      "Parent guidance on brushing and diet",
    ],
    faq: [
      {
        question: "When should my child visit a dentist for the first time?",
        answer:
          "By the first birthday, or within six months of the first tooth appearing. Early visits are short and friendly, so a dental check-up never becomes a frightening experience.",
      },
      {
        question: "Do you treat nervous children?",
        answer:
          "Yes. Our paediatric team is trained in desensitisation techniques and works at your child's pace. We never rush and we always explain each step in simple language first.",
      },
    ],
  },
  {
    slug: "oral-surgery",
    title: "Oral Surgery",
    shortTitle: "Oral Surgery",
    summary:
      "Wisdom tooth removal, bone grafting and other surgical procedures performed with care.",
    description:
      "Our oral and maxillofacial surgery team handles wisdom tooth removals, impacted teeth, cyst and lesion removal, bone grafting and pre-implant surgery. We assess every case with digital imaging, plan the surgery beforehand and use effective local anaesthetic so the procedure itself is comfortable. Post-operative support and review are always included.",
    icon: Activity,
    image: image(
      "services",
      "service-oral-surgery.jpg",
      "Dental room prepared and sterilised for a surgical procedure",
      "Surgical care in a sterile setting",
    ),
    highlights: [
      "Wisdom tooth and impacted tooth removal",
      "Bone grafting for implant planning",
      "Cyst, lesion and soft-tissue surgery",
      "Digital surgical imaging and planning",
      "Structured post-operative review",
    ],
    faq: [
      {
        question: "Do wisdom tooth extractions hurt?",
        answer:
          "The extraction itself is not painful because of effective local anaesthetic. Expect some soreness and swelling for two to three days afterwards, which we manage with pain relief and clear instructions.",
      },
      {
        question: "Do you treat patients who are anxious about surgery?",
        answer:
          "Yes. We explain every step beforehand, allow extra time for the appointment and arrange sedation with our anaesthetic colleague when clinically appropriate.",
      },
    ],
  },
];

export const serviceSlugs = services.map((service) => service.slug);

export function getService(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

/** Services shown in the navbar dropdown and footer list. */
export const navigationServices = services.map(({ slug, title }) => ({
  label: title,
  href: `/services/${slug}`,
}));