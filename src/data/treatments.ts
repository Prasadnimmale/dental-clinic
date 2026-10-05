import { image } from "./images";
import type { Treatment } from "@/types";

/** Signature treatments presented in the alternating image/text section. */
export const treatments: Treatment[] = [
  {
    slug: "dental-implants",
    title: "Dental Implants",
    description:
      "Replace a single missing tooth or an entire arch with titanium implants that look, feel and function like natural teeth — while protecting the jawbone from bone loss.",
    duration: "3–6 months",
    benefits: [
      "Looks and functions like your own tooth",
      "Protects jawbone and keeps facial structure",
      "No impact on neighbouring healthy teeth",
      "Can last 25 years with good care",
    ],
    image: image(
      "treatments",
      "treatment-dental-implants.jpg",
      "Gloved hand holding a titanium dental implant and matching crown",
      "Titanium implant and crown",
    ),
  },
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    description:
      "Remove infection from inside the tooth and keep your natural tooth for decades. Performed with rotary instruments and effective anaesthetic, most cases are completed in a single visit.",
    duration: "1–2 visits",
    benefits: [
      "Keeps your own tooth rather than extracting it",
      "Immediate relief from severe tooth pain",
      "No visible change to your smile",
      "Usually completed in one appointment",
    ],
    image: image(
      "treatments",
      "treatment-root-canal.jpg",
      "Dentist using a model to explain the stages of root canal treatment",
      "Explaining your treatment",
    ),
  },
  {
    slug: "braces-and-aligners",
    title: "Braces & Aligners",
    description:
      "Straighten crowded, gapped or misaligned teeth with metal and ceramic braces or discreet clear aligners — planned digitally so you can preview the end result first.",
    duration: "12–18 months",
    benefits: [
      "Much easier to brush and floss afterwards",
      "Lower risk of decay and gum disease",
      "Improved bite comfort and jaw function",
      "Discreet clear aligner option available",
    ],
    image: image(
      "treatments",
      "treatment-braces-aligners.jpg",
      "A clear plastic aligner being fitted over a patient's teeth",
      "Clear aligner therapy",
    ),
  },
  {
    slug: "smile-makeover",
    title: "Smile Makeover",
    description:
      "A complete plan combining whitening, reshaping, veneers and sometimes orthodontics — designed digitally so you approve the result before a single tooth is touched.",
    duration: "2–4 weeks",
    benefits: [
      "Designed digitally and approved before treatment",
      "Combines several treatments into one plan",
      "Conservative — healthy structure is preserved",
      "Long-lasting, natural-looking result",
    ],
    image: image(
      "treatments",
      "treatment-smile-makeover.jpg",
      "Woman smiling confidently following a dental smile makeover",
      "A confident new smile",
    ),
  },
  {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    description:
      "Lift years of coffee, tea and tobacco staining with clinically controlled whitening, protected for your gums and supported with custom trays to keep the result bright.",
    duration: "1 hour",
    benefits: [
      "Noticeably brighter in a single appointment",
      "Enamel-safe, dentist-controlled gels",
      "Custom trays to maintain results at home",
      "Sensitivity managed during treatment",
    ],
    image: image(
      "treatments",
      "treatment-teeth-whitening.jpg",
      "Close-up of whiter teeth after professional whitening treatment",
      "Professional whitening",
    ),
  },
  {
    slug: "crowns-and-bridges",
    title: "Crowns & Bridges",
    description:
      "Custom-made ceramic crowns and multi-unit bridges that restore broken or missing teeth with a fit and finish that blends naturally into your smile.",
    duration: "2–3 appointments",
    benefits: [
      "Protects heavily damaged teeth",
      "Natural look with shade-matched ceramic",
      "Restores comfortable chewing function",
      "Long-lasting, easy to maintain",
    ],
    image: image(
      "treatments",
      "treatment-crowns-bridges.jpg",
      "Shade-matched ceramic crowns and bridge models on a dental workbench",
      "Ceramic crowns & bridges",
    ),
  },
];