import Link from "next/link";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "solid"
  | "outline"
  | "soft"
  | "white"
  | "dark";

export type ButtonSize = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-[transform,box-shadow,background-color,border-color,color] duration-300 ease-out select-none active:translate-y-px disabled:pointer-events-none disabled:opacity-60";

const variants: Record<ButtonVariant, string> = {
  /** Brand gradient — reserved for the primary action in each view. */
  primary: cn(
    "bg-gradient-brand text-white shadow-brand-glow",
    "hover:brightness-[1.06] hover:shadow-[0_14px_38px_-12px_rgb(22_163_74/0.55),0_14px_38px_-12px_rgb(139_92_246/0.45)]",
  ),
  solid: "bg-mint-700 text-white hover:bg-mint-800",
  outline:
    "border border-ink-200 bg-white text-ink-800 hover:border-mint-300 hover:text-mint-700 hover:bg-mint-50",
  soft: "bg-mint-50 text-mint-700 hover:bg-mint-100",
  white:
    "bg-white text-ink-900 shadow-card hover:bg-mint-50 hover:text-mint-700",
  dark: "bg-ink-900 text-white hover:bg-ink-800",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-[0.9375rem]",
  lg: "px-7 py-3.5 text-base",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}): string {
  return cn(base, variants[variant], sizes[size], className);
}

type ActionLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  /** Set for links that leave the site (phone, WhatsApp, maps, mail). */
  external?: boolean;
  "aria-label"?: string;
};

/**
 * One button component for every call to action.
 *
 * Internal routes render through `next/link` for client-side navigation;
 * external destinations render a plain anchor so no prefetching is attempted.
 */
export function ActionLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external,
  ...rest
}: ActionLinkProps) {
  const classes = buttonClasses({ variant, size, className });
  const isExternal = external ?? /^(https?:|mailto:|tel:)/.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target={/^https?:/.test(href) ? "_blank" : undefined}
        rel={/^https?:/.test(href) ? "noreferrer noopener" : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}