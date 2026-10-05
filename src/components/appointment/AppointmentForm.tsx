"use client";

import { useState } from "react";
import {
  AlertCircle,
  CalendarCheck,
  CheckCircle2,
  Loader2,
  MessageSquare,
  Send,
} from "lucide-react";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { cn, formatDate, todayISO } from "@/lib/utils";
import type {
  AppointmentFormData,
  AppointmentFormErrors,
} from "@/types";

const timeSlots = [
  "Morning (9:00 AM – 12:00 PM)",
  "Afternoon (12:00 PM – 4:00 PM)",
  "Evening (4:00 PM – 8:00 PM)",
];

const emptyForm: AppointmentFormData = {
  fullName: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  time: "",
  message: "",
};

/** Front-end validation only — connect `submit()` to an API route or CRM. */
function validate(form: AppointmentFormData): AppointmentFormErrors {
  const errors: AppointmentFormErrors = {};

  if (!form.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  } else if (form.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }

  const digits = form.phone.replace(/\D/g, "");
  if (!form.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (digits.length < 10 || digits.length > 13) {
    errors.phone = "Enter a valid phone number (10 digits).";
  }

  if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
    errors.email = "Enter a valid email address or leave it blank.";
  }

  if (!form.service) errors.service = "Please choose the service you need.";
  if (!form.date) errors.date = "Please choose a preferred date.";
  if (!form.time) errors.time = "Please choose a preferred time slot.";

  return errors;
}

export function AppointmentForm() {
  const [form, setForm] = useState<AppointmentFormData>(emptyForm);
  const [errors, setErrors] = useState<AppointmentFormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const update =
    (field: keyof AppointmentFormData) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((current) => ({ ...current, [field]: event.target.value }));
      // Clear the field error as soon as the visitor starts correcting it.
      setErrors((current) => {
        if (!current[field]) return current;
        const next = { ...current };
        delete next[field];
        return next;
      });
    };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      // Move focus to the first invalid control for keyboard and screen readers.
      const firstField = Object.keys(nextErrors)[0];
      document.getElementById(`appointment-${firstField}`)?.focus();
      return;
    }

    setStatus("submitting");

    // TODO: POST `form` to the clinic booking API / WhatsApp integration.
    // Kept as a short simulated delay so the loading state is real, not decorative.
    await new Promise((resolve) => setTimeout(resolve, 900));

    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-3xl border border-mint-200 bg-mint-50/70 p-8 text-center shadow-soft sm:p-10">
        <span className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-brand-glow">
          <CheckCircle2 aria-hidden className="size-8" />
        </span>

        <h3 className="mt-6 text-2xl font-bold text-ink-900">
          Request received, thank you
        </h3>

        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-ink-600">
          We have your request for{" "}
          <span className="font-semibold text-ink-900">{form.service}</span> on{" "}
          <span className="font-semibold text-ink-900">
            {form.date ? formatDate(form.date) : "your preferred date"}
          </span>
          . Our front desk will call or WhatsApp you on{" "}
          <span className="font-semibold text-ink-900">{form.phone}</span> to
          confirm the exact time.
        </p>

        <p className="mt-4 text-sm text-ink-500">
          Need it sooner? Call{" "}
          <a
            href={siteConfig.contact.phoneHref}
            className="font-semibold text-mint-700 underline underline-offset-4"
          >
            {siteConfig.contact.phone}
          </a>{" "}
          — we keep emergency slots open every day.
        </p>

        <button
          type="button"
          onClick={() => {
            setForm(emptyForm);
            setErrors({});
            setStatus("idle");
          }}
          className="mt-8 text-sm font-semibold text-mint-700 underline underline-offset-4 transition-colors hover:text-mint-800"
        >
          Book another appointment
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-ink-100 bg-white p-6 shadow-card sm:p-8 lg:p-10"
    >
      <div className="flex items-start gap-4">
        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand-soft text-mint-700 ring-1 ring-mint-100">
          <CalendarCheck aria-hidden className="size-6" />
        </span>
        <div>
          <h2 className="text-xl font-bold text-ink-900 sm:text-2xl">
            Request an Appointment
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
            Fields marked <span className="text-mint-700">*</span> are required.
            We confirm every request personally.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field
          id="appointment-fullName"
          label="Full Name"
          required
          error={errors.fullName}
          className="sm:col-span-2"
        >
          <input
            id="appointment-fullName"
            name="fullName"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            value={form.fullName}
            onChange={update("fullName")}
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={
              errors.fullName ? "appointment-fullName-error" : undefined
            }
            className={inputClasses(Boolean(errors.fullName))}
          />
        </Field>

        <Field id="appointment-phone" label="Phone" required error={errors.phone}>
          <input
            id="appointment-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+91 98765 43210"
            value={form.phone}
            onChange={update("phone")}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={
              errors.phone ? "appointment-phone-error" : undefined
            }
            className={inputClasses(Boolean(errors.phone))}
          />
        </Field>

        <Field id="appointment-email" label="Email" error={errors.email}>
          <input
            id="appointment-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={update("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={
              errors.email ? "appointment-email-error" : undefined
            }
            className={inputClasses(Boolean(errors.email))}
          />
        </Field>

        <Field
          id="appointment-service"
          label="Select Service"
          required
          error={errors.service}
          className="sm:col-span-2"
        >
          <select
            id="appointment-service"
            name="service"
            value={form.service}
            onChange={update("service")}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={
              errors.service ? "appointment-service-error" : undefined
            }
            className={inputClasses(Boolean(errors.service))}
          >
            <option value="">Choose a service…</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>
                {service.title}
              </option>
            ))}
            <option value="Not sure — please advise">
              Not sure — please advise
            </option>
          </select>
        </Field>

        <Field
          id="appointment-date"
          label="Preferred Date"
          required
          error={errors.date}
        >
          <input
            id="appointment-date"
            name="date"
            type="date"
            min={todayISO()}
            value={form.date}
            onChange={update("date")}
            aria-invalid={Boolean(errors.date)}
            aria-describedby={
              errors.date ? "appointment-date-error" : undefined
            }
            className={inputClasses(Boolean(errors.date))}
          />
        </Field>

        <Field
          id="appointment-time"
          label="Preferred Time"
          required
          error={errors.time}
        >
          <select
            id="appointment-time"
            name="time"
            value={form.time}
            onChange={update("time")}
            aria-invalid={Boolean(errors.time)}
            aria-describedby={
              errors.time ? "appointment-time-error" : undefined
            }
            className={inputClasses(Boolean(errors.time))}
          >
            <option value="">Choose a time slot…</option>
            {timeSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </Field>

        <Field
          id="appointment-message"
          label="Message"
          hint="Optional — symptoms, concerns or anything we should know"
          error={errors.message}
          className="sm:col-span-2"
        >
          <textarea
            id="appointment-message"
            name="message"
            rows={5}
            placeholder="Tell us briefly what you need help with…"
            value={form.message}
            onChange={update("message")}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={
              errors.message ? "appointment-message-error" : undefined
            }
            className={cn(inputClasses(Boolean(errors.message)), "resize-y")}
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gradient-brand px-7 py-3.5 text-base font-semibold text-white shadow-brand-glow transition-[filter,box-shadow] duration-300 hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 aria-hidden className="size-4.5 animate-spin" />
            Sending your request…
          </>
        ) : (
          <>
            <Send aria-hidden className="size-4.5" />
            Request Appointment
          </>
        )}
      </button>

      <p className="mt-4 flex items-start gap-2.5 text-xs leading-relaxed text-ink-500">
        <MessageSquare aria-hidden className="mt-0.5 size-4 shrink-0 text-ink-400" />
        Your details are used only to arrange this appointment. For urgent
        problems, call{" "}
        <a
          href={siteConfig.contact.phoneHref}
          className="font-semibold text-mint-700 underline underline-offset-2"
        >
          {siteConfig.contact.phone}
        </a>{" "}
        instead of using this form.
      </p>
    </form>
  );
}

/* ------------------------------------------------------------------ */

function inputClasses(hasError: boolean): string {
  return cn(
    "w-full rounded-2xl border bg-white px-4 py-3 text-[0.9375rem] text-ink-800 transition-[border-color,box-shadow] duration-200 outline-none placeholder:text-ink-400 focus:border-mint-400 focus:ring-4 focus:ring-mint-100",
    hasError
      ? "border-red-400 focus:border-red-500 focus:ring-red-100"
      : "border-ink-200",
  );
}

type FieldProps = {
  id: string;
  label: string;
  children: React.ReactNode;
  error?: string;
  required?: boolean;
  hint?: string;
  className?: string;
};

function Field({
  id,
  label,
  children,
  error,
  required,
  hint,
  className,
}: FieldProps) {
  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold text-ink-800"
      >
        {label}
        {required ? (
          <span className="ml-1 text-mint-700" aria-hidden>
            *
          </span>
        ) : null}
      </label>

      {children}

      {hint && !error ? (
        <p className="mt-2 text-xs text-ink-500">{hint}</p>
      ) : null}

      {error ? (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-2 flex items-center gap-1.5 text-xs font-medium text-red-600"
        >
          <AlertCircle aria-hidden className="size-3.5 shrink-0" />
          {error}
        </p>
      ) : null}
    </div>
  );
}