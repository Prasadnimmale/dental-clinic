import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";

export type Crumb = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: Crumb[];
  className?: string;
  tone?: "light" | "dark";
};

/**
 * Visible breadcrumb trail plus the matching `BreadcrumbList` JSON-LD so search
 * engines can understand the page hierarchy. The final item has no `href`.
 */
export function Breadcrumb({ items, className, tone = "light" }: BreadcrumbProps) {
  const dark = tone === "dark";

  return (
    <>
      <nav aria-label="Breadcrumb" className={className}>
        <ol className="flex flex-wrap items-center gap-x-1 gap-y-1 text-sm">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={item.label} className="flex items-center gap-1">
                {item.href && !isLast ? (
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded transition-colors duration-200",
                      dark
                        ? "text-mint-100/80 hover:text-white"
                        : "text-ink-500 hover:text-mint-700",
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span
                    aria-current={isLast ? "page" : undefined}
                    className={cn(
                      "font-medium",
                      dark ? "text-white" : "text-ink-800",
                    )}
                  >
                    {item.label}
                  </span>
                )}
                {!isLast ? (
                  <ChevronRight
                    aria-hidden
                    className={cn(
                      "size-3.5 shrink-0",
                      dark ? "text-mint-100/45" : "text-ink-400",
                    )}
                  />
                ) : null}
              </li>
            );
          })}
        </ol>
      </nav>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: items.map((item, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: item.label,
              item: `${siteConfig.url}${item.href ?? ""}`,
            })),
          }),
        }}
      />
    </>
  );
}