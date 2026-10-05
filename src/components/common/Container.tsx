import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const sizes = {
  narrow: "max-w-3xl",
  default: "max-w-7xl",
  wide: "max-w-[88rem]",
} as const;

export type ContainerSize = keyof typeof sizes;

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  /** `narrow` for long-form copy, `default` for most sections, `wide` for galleries. */
  size?: ContainerSize;
};

/** Consistent horizontal rhythm and max-width for every section on the site. */
export function Container({
  size = "default",
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", sizes[size], className)}
      {...props}
    />
  );
}