import { Google_Sans } from "next/font/google";

/**
 * Global typography.
 *
 * Google Sans is self-hosted by `next/font` (no runtime requests to Google).
 * The variable font exposes the `GRAD` and `opsz` axes, so the whole site
 * renders with true Google Sans typography — including the optical settings
 * requested in the brand guidelines.
 */
export const googleSans = Google_Sans({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: "variable",
  style: ["normal"],
  axes: ["GRAD"],
  variable: "--font-google-sans",
  fallback: [
    "system-ui",
    "-apple-system",
    "Segoe UI",
    "Roboto",
    "Helvetica Neue",
    "Arial",
    "sans-serif",
  ],
  adjustFontFallback: true,
});