import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/data/site";
import { googleSans } from "@/lib/fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFab } from "@/components/layout/WhatsAppFab";
import "./globals.css";

const title = `${siteConfig.titleBrandName} | Multispeciality Dental Clinic`;
const description =
  "Yendada You Care is a multispeciality dental clinic offering advanced dental treatments, dental implants, cosmetic dentistry, orthodontics and paediatric care from experienced dental specialists in a modern, sterilised environment.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${siteConfig.titleBrandName}`,
  },
  description,
  applicationName: siteConfig.brandName,
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  publisher: siteConfig.fullName,
  category: "Health",
  keywords: [
    "Yendada",
    "Yendada dental clinic",
    "dental clinic",
    "multispeciality dental care",
    "dental treatments",
    "dental specialists",
    "dentist in Yendada",
    "dental implants",
    "cosmetic dentistry",
    "orthodontics",
    "root canal treatment",
    "teeth whitening",
    "paediatric dentistry",
  ],
  // Canonical URLs and robots directives are declared per page so the
  // auto-injected `noindex` on the 404 page is never contradicted by an
  // inherited `index, follow` or a canonical pointing at the homepage.
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.fullName,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  formatDetection: { telephone: true, address: true, email: true },
};

export const viewport: Viewport = {
  themeColor: "#1f8c59",
  width: "device-width",
  initialScale: 1,
};

const clinicSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": `${siteConfig.url}/#clinic`,
  name: siteConfig.fullName,
  alternateName: siteConfig.brandName,
  description,
  url: siteConfig.url,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  image: `${siteConfig.url}/images/hero/hero-main-treatment.jpg`,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: `${siteConfig.address.line1}, ${siteConfig.address.line2}`,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.postalCode,
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "14:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "480",
    bestRating: "5",
  },
  sameAs: [siteConfig.social.facebook, siteConfig.social.instagram],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.fullName,
  inLanguage: "en-IN",
  publisher: { "@id": `${siteConfig.url}/#clinic` },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      data-scroll-behavior="smooth"
      className={`${googleSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-100 focus:rounded-lg focus:bg-mint-700 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
        <WhatsAppFab />

        <script
          type="application/ld+json"
          // Structured data for search engines — content is fully static.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([clinicSchema, websiteSchema]),
          }}
        />
      </body>
    </html>
  );
}