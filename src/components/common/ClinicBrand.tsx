import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { googleSans } from "@/lib/fonts";

type ClinicBrandProps = {
  /** `light` for dark backgrounds (footer), `dark` for light backgrounds (navbar). */
  tone?: "dark" | "light";
  className?: string;
};

/**
 * Reusable brand lockup: the original logo image on the left with
 * "YOU CARE" and "MULTISPECIALITY DENTAL CLINIC" as real HTML text
 * immediately to the right. Used in both Navbar and Footer.
 */
export function ClinicBrand({ tone = "dark", className }: ClinicBrandProps) {
  const light = tone === "light";

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.logoName} ${siteConfig.descriptor} — home`}
      className={cn(
        "group inline-flex items-center gap-3 transition-transform duration-300 group-hover:scale-[1.02] ml-2 sm:ml-3 lg:ml-4",
        className,
      )}
    >
      {/* Original logo image — untouched on disk. `width`/`height` declare the
          artwork's true intrinsic size (1849x851) so the browser can reserve the
          correct box and derive the aspect ratio; CSS below owns the rendered
          size. `h-auto` lets height follow that ratio instead of being pinned to
          a second number, which is what keeps Next.js from reporting a
          width/height mismatch. `sizes` is pinned to the rendered width so the
          optimiser never ships a larger candidate than a logo needs. */}
      <Image
        src={siteConfig.logo}
        alt="You Care Multispeciality Dental Clinic"
        width={1849}
        height={851}
        sizes="110px"
        priority
        className="h-auto w-[110px] object-contain"
      />
    </Link>
  );
}
