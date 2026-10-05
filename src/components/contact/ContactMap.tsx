import { ExternalLink, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

/**
 * Google Maps embed for the clinic address, with a plain-text address fallback
 * link so the location is always reachable even if the embed fails to load.
 */
export function ContactMap() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-ink-100 bg-ink-50 shadow-card">
      <div className="relative aspect-16/11 w-full sm:aspect-16/10">
        <iframe
          src={siteConfig.maps.embedSrc}
          title={`Map showing ${siteConfig.fullName}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          className="absolute inset-0 size-full border-0"
        />
      </div>

      <div className="flex flex-col gap-3 border-t border-ink-100 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex gap-3">
          <MapPin aria-hidden className="mt-0.5 size-5 shrink-0 text-mint-600" />
          <p className="text-sm leading-relaxed text-ink-600">
            <span className="block font-semibold text-ink-900">
              {siteConfig.address.line1}, {siteConfig.address.line2}
            </span>
            {siteConfig.address.city}, {siteConfig.address.district},{" "}
            {siteConfig.address.state} – {siteConfig.address.postalCode}
          </p>
        </div>

        <a
          href={siteConfig.maps.directionsHref}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-semibold text-ink-800 transition-colors duration-300 hover:border-mint-300 hover:text-mint-700 sm:self-auto"
        >
          Open in Google Maps
          <ExternalLink aria-hidden className="size-3.5" />
        </a>
      </div>
    </div>
  );
}