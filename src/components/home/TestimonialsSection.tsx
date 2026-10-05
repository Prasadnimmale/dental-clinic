import { Quote } from "lucide-react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { StarRating } from "@/components/common/StarRating";
import { Reveal } from "@/components/common/Reveal";
import { featuredTestimonials } from "@/data/testimonials";

/**
 * Testimonials as a static three-card grid — no carousel, so the content is
 * readable, indexable and always visible without interaction.
 */
export function TestimonialsSection() {
  return (
    <section className="relative bg-white py-20 sm:py-24 lg:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Patient Stories"
            title={
              <>
                What Our Patients{" "}
                <span className="text-gradient-brand">Say</span>
              </>
            }
            description="Unedited feedback from patients across Yendada, Kakinada and Rajahmundry."
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {featuredTestimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={index * 0.08}>
              <li className="h-full">
                <figure className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-ink-100 bg-white p-7 shadow-soft transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-mint-200 hover:shadow-card">
                {/* Accent */}
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-brand opacity-70"
                />

                <span
                  aria-hidden
                  className="absolute top-6 right-6 text-ink-100 transition-colors duration-300 group-hover:text-mint-100"
                >
                  <Quote className="size-8" />
                </span>

                <StarRating
                  value={testimonial.rating}
                  size={16}
                  label={`${testimonial.rating} out of 5 stars`}
                />

                <blockquote className="mt-5 flex-1">
                  <p className="text-[0.9375rem] leading-relaxed text-ink-700">
                    “{testimonial.quote}”
                  </p>
                </blockquote>

                  <figcaption className="mt-6 flex items-center gap-3.5 border-t border-ink-100 pt-5">
                  <span
                    aria-hidden
                    className="font-feature-settings-grud flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-brand-soft text-sm font-bold text-mint-700 ring-1 ring-mint-100"
                  >
                    {testimonial.name.charAt(0)}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold text-ink-900">
                      {testimonial.name}
                    </span>
                    <span className="block text-xs text-ink-500">
                      {testimonial.treatment} · {testimonial.location}
                    </span>
                  </span>
                  </figcaption>
                </figure>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}