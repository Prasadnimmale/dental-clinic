import type { BrandAsset } from "@/types";
import { siteConfig } from "@/data/site";

/**
 * Brand artwork.
 *
 * `logo-lockup.png` and `logo-mark.png` are generated from
 * `assets/dental-logo-source.jpg` by `scripts/build-logo-assets.cjs`, which keys
 * the flat background plate out to transparency, de-fringes the soft JPEG edges
 * and trims to tight margins - so the logo sits on any surface without a grey
 * box behind it.
 *
 * The artwork carries the emblem and the "You Care" wordmark. The descriptor
 * "Multispeciality Dental Clinic" is set as live text underneath it, because
 * baked-in fine print turns to mush at header size; as text it stays crisp and
 * is readable by search engines.
 *
 * Intrinsic dimensions are declared so `next/image` reserves space without a
 * layout shift - update them if the artwork is re-cut.
 */
export const logo = {
  /** Emblem + wordmark: the clinic's own lockup, shown in the header and footer. */
  lockup: {
    src: "/images/brand/dental-logo.png",
    alt: `${siteConfig.logoName} ${siteConfig.descriptor}`,
    width: 916,
    height: 147,
  } satisfies BrandAsset,

  /** Emblem on its own, used for the app icon and other square crops. */
  mark: {
    src: "/images/brand/logo-mark.png",
    alt: `${siteConfig.logoName} emblem`,
    width: 336,
    height: 115,
  } satisfies BrandAsset,
};