import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  /** Eagerly load the header logo so it never flashes in. */
  priority?: boolean;
  className?: string;
};

/**
 * Brand logo: the complete "You Care Multispeciality Dental Clinic" logo
 * (emblem + wordmark + descriptor) on a transparent background, shown in
 * the header and footer.
 */
export function Logo({ priority = false, className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.logoName} ${siteConfig.descriptor} — home`}
      className={cn(
        "group inline-flex w-fit items-center transition-transform duration-300 group-hover:scale-[1.02]",
        className,
      )}
    >
      {/* Intrinsic size is the artwork's true 1849x851; CSS scales it and
          `h-auto` follows the ratio, so neither axis is independently pinned.
          `sizes` matches the widths below so the optimiser stays accurate. */}
      <Image
        src={siteConfig.logo}
        alt={`${siteConfig.logoName} ${siteConfig.descriptor}`}
        width={1849}
        height={851}
        priority={priority}
        sizes="(max-width: 639px) 100px, (max-width: 1023px) 120px, 140px"
        className="h-auto w-[100px] object-contain sm:w-[120px] lg:w-[140px]"
      />
    </Link>
  );
}
