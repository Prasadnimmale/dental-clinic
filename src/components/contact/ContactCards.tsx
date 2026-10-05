import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ActionLink } from "@/components/common/Button";
import {
  emergencyNote,
  fullAddress,
  siteConfig,
  workingHours,
} from "@/data/site";

/**
 * Contact detail cards. Two are links (phone, email), one is a maps link and
 * one is a WhatsApp shortcut, so every tile has a useful tap target.
 */
export function ContactCards() {
  const cards = [
    {
      Icon: MapPin,
      title: "Visit the Clinic",
      lines: [
        siteConfig.address.line1,
        siteConfig.address.line2,
        `${siteConfig.address.city}, ${siteConfig.address.district}, ${siteConfig.address.state} – ${siteConfig.address.postalCode}`,
      ],
      action: {
        label: "Get directions",
        href: siteConfig.maps.directionsHref,
      },
    },
    {
      Icon: Phone,
      title: "Call Us",
      lines: [siteConfig.contact.phone, "Mon – Sat: 9:00 AM – 8:00 PM"],
      action: {
        label: `Call ${siteConfig.contact.phone}`,
        href: siteConfig.contact.phoneHref,
      },
    },
    {
      Icon: Mail,
      title: "Email Us",
      lines: [siteConfig.contact.email, "We reply within one working day."],
      action: {
        label: "Send an email",
        href: `mailto:${siteConfig.contact.email}`,
      },
    },
    {
      Icon: MessageCircle,
      title: "WhatsApp",
      lines: [
        "Quick questions, reminders and",
        "appointment confirmations.",
      ],
      action: {
        label: "Chat on WhatsApp",
        href: `https://wa.me/${siteConfig.contact.whatsapp}`,
      },
      highlight: true,
    },
  ];

  return (
    <div>
      <ul className="grid gap-5 sm:grid-cols-2">
        {cards.map(({ Icon, title, lines, action, highlight }) => (
          <li
            key={title}
            className={
              highlight
                ? "group relative flex flex-col overflow-hidden rounded-2xl border border-mint-200 bg-mint-50/70 p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card"
                : "group relative flex flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white p-6 shadow-soft transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-card"
            }
          >
            <span className="flex size-11 items-center justify-center rounded-2xl bg-gradient-brand-soft text-mint-700 ring-1 ring-mint-100">
              <Icon aria-hidden className="size-5" />
            </span>

            <h3 className="mt-4 text-base font-bold text-ink-900">{title}</h3>

            <div className="mt-2 flex-1 space-y-0.5 text-sm leading-relaxed text-ink-600">
              {lines.map((line) => (
                <p key={line} className="break-words">
                  {line}
                </p>
              ))}
            </div>

            <ActionLink
              href={action.href}
              variant="soft"
              size="sm"
              className="mt-5 self-start"
            >
              {action.label}
            </ActionLink>
          </li>
        ))}
      </ul>

      {/* Working hours */}
      <div className="mt-6 rounded-2xl border border-ink-100 bg-white p-6 shadow-soft">
        <h3 className="flex items-center gap-2.5 text-base font-bold text-ink-900">
          <Clock aria-hidden className="size-5 text-mint-600" />
          Working Hours
        </h3>

        <dl className="mt-4 divide-y divide-ink-100">
          {workingHours.map((entry) => (
            <div
              key={entry.day}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 py-3 first:pt-0 last:pb-0"
            >
              <dt className="text-sm text-ink-600">{entry.day}</dt>
              <dd className="text-sm font-semibold text-ink-900">{entry.hours}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-4 rounded-xl bg-mint-50/70 p-3.5 text-xs leading-relaxed text-ink-600">
          {emergencyNote}
        </p>
      </div>

      <p className="sr-only">{fullAddress}</p>
    </div>
  );
}