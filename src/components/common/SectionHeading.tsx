import { cn } from "@/lib/utils";
import { Eyebrow } from "./Eyebrow";

type SectionHeadingProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  /** `center` for most sections, `left` when the heading sits beside content. */
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  /** Optional element rendered under the description (usually a link). */
  action?: React.ReactNode;
};

/** The single heading pattern used by every section across the site. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
  action,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col",
        centered ? "mx-auto max-w-2xl items-center text-center" : "items-start",
        className,
      )}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}

      <h2
        className={cn(
          "mt-5 text-3xl leading-[1.15] font-bold tracking-tight sm:text-4xl lg:text-[2.6rem]",
          tone === "dark" ? "text-white" : "text-ink-900",
        )}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-[1.0625rem]",
            tone === "dark" ? "text-mint-50/80" : "text-ink-600",
          )}
        >
          {description}
        </p>
      ) : null}

      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}