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
      {/* Original logo image — unchanged */}
      <Image
        src={siteConfig.logo}
        alt="You Care Multispeciality Dental Clinic"
        width={110}
        height={110}
        priority
        className="object-contain"
      />


    </Link>
  );
}
