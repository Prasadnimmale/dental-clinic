import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type StarRatingProps = {
  /** Number of filled stars, 0–5. */
  value: number;
  className?: string;
  size?: number;
  /** Hide the icons from assistive tech when a text rating is already visible. */
  label?: string;
};

/** Read-only five-star rating with a fractional fill for the last star. */
export function StarRating({ value, className, size = 16, label }: StarRatingProps) {
  const rounded = Math.min(5, Math.max(0, value));

  return (
    <span
      style={{ fontSize: size }}
      className={cn("inline-flex items-center gap-0.5", className)}
      role="img"
      aria-label={label ?? `${value} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => {
        const fill = Math.min(1, Math.max(0, rounded - index));

        return (
          <span key={index} className="relative inline-flex">
            <Star aria-hidden className="size-[1em] text-ink-200" />
            <span
              aria-hidden
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${fill * 100}%` }}
            >
              <Star
                className="size-[1em] text-mint-500"
                fill="currentColor"
                strokeWidth={0}
              />
            </span>
          </span>
        );
      })}
      <span className="sr-only">{label ?? `${value} out of 5 stars`}</span>
      <span aria-hidden className="ml-1 text-xs text-ink-500">
        {rounded.toFixed(1)}
      </span>
    </span>
  );
}