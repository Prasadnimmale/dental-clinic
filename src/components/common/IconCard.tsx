import { cn } from "@/lib/utils";

type IconCardProps = {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;
  title: string;
  description: string;
  className?: string;
  /** `plain` for dense lists (trust strip), `card` for standalone grids. */
  variant?: "plain" | "card";
  iconClassName?: string;
};

/**
 * The feature-card pattern used by Trust, Why Choose Us and Patient
 * Experience so all three sections feel like one design system.
 */
export function IconCard({
  icon: Icon,
  title,
  description,
  className,
  variant = "card",
  iconClassName,
}: IconCardProps) {
  return (
    <div
      className={cn(
        variant === "card" &&
          "group relative overflow-hidden rounded-3xl border border-ink-100 bg-white p-6 shadow-soft transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-mint-200 hover:shadow-lift sm:p-7",
        variant === "plain" && "flex items-start gap-3.5",
        className,
      )}
    >
      {variant === "card" ? (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-brand opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      ) : null}

      <span
        className={cn(
          "flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand-soft text-mint-700 ring-1 ring-mint-100",
          variant === "card" &&
            "transition-transform duration-300 group-hover:scale-105",
          iconClassName,
        )}
      >
        <Icon aria-hidden className="size-5.5" />
      </span>

      <div className={cn(variant === "card" ? "mt-5" : "min-w-0 pt-0.5")}>
        <h3
          className={cn(
            "text-base font-bold text-ink-900",
            variant === "plain" && "text-[0.95rem]",
          )}
        >
          {title}
        </h3>
        <p
          className={cn(
            "mt-2 text-sm leading-relaxed text-ink-600",
            variant === "plain" && "text-[0.8125rem] leading-relaxed",
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}