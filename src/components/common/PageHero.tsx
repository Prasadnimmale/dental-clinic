import { Container } from "./Container";
import { Breadcrumb, type Crumb } from "./Breadcrumb";

type PageHeroProps = {
  eyebrow: string;
  title: React.ReactNode;
  description: React.ReactNode;
  crumbs: Crumb[];
  /** Optional supporting line rendered as small trust chips. */
  highlights?: string[];
  children?: React.ReactNode;
};

/**
 * Shared header band for every inner page. Keeps page titles, breadcrumbs and
 * the brand gradient decoration identical across the whole site.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  crumbs,
  highlights,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-ink-100 bg-gradient-brand-soft pt-28 pb-16 sm:pt-32 sm:pb-20">
      {/* Decorative gradient wash + dot texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-dot-grid opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 size-[26rem] rounded-full bg-gradient-brand opacity-10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-24 size-[22rem] rounded-full bg-gradient-brand opacity-10 blur-3xl"
      />

      <Container className="relative">
        <Breadcrumb items={crumbs} tone="dark" className="text-ink-600" />

        <div className="mt-6 max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-[0.14em] text-mint-700 uppercase ring-1 ring-mint-200/80 backdrop-blur-sm">
            <span
              aria-hidden
              className="size-1.5 rounded-full bg-gradient-brand"
            />
            {eyebrow}
          </p>

          <h1 className="mt-5 text-4xl leading-[1.1] font-bold tracking-tight text-ink-900 sm:text-5xl">
            {title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg">
            {description}
          </p>

          {children ? <div className="mt-8">{children}</div> : null}
        </div>

        {highlights?.length ? (
          <ul className="mt-10 flex flex-wrap gap-2.5">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-full bg-white/85 px-4 py-2 text-sm font-medium text-ink-700 ring-1 ring-ink-200/70 backdrop-blur-sm"
              >
                {highlight}
              </li>
            ))}
          </ul>
        ) : null}
      </Container>
    </section>
  );
}