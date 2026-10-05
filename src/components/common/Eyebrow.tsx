import { cn } from "@/lib/utils";

type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
  /** Use on dark backgrounds. */
  tone?: "light" | "dark";
};

/**
 * Small pill label that sits above section headings. The gradient dot is the
 * only place the brand gradient appears at this size, so the accent stays
 * restrained across a long scrolling page.
 */
export function Eyebrow({ children, className, tone = "light" }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[0.7rem] font-semibold tracking-[0.14em] uppercase",
        tone === "light"
          ? "bg-mint-50 text-mint-700 ring-1 ring-mint-200/80"
          : "bg-white/12 text-mint-100 ring-1 ring-white/20 backdrop-blur-sm",
        className,
      )}
    >
      <span
        aria-hidden
        className="size-1.5 shrink-0 rounded-full bg-gradient-brand"
      />
      {children}
    </span>
  );
}