"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/lib/actions/contact-form";

export default function ContactForm() {
  const initialState: ContactFormState = { status: "idle", errors: {}, message: "" };
  const [state, action] = useActionState(submitContactForm, initialState);

  return (
    <form action={action} className="space-y-6" noValidate>
      {state.status === "success" && (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
          Thank you for reaching out! Our Lehi coordinator will get back to you shortly.
        </div>
      )}
      {state.status === "error" && state.message && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
          {state.message}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        <FieldGroup
          label="Full name*"
          id="name"
          error={state.errors.name}
        >
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
            placeholder="Jordan Smith"
          />
        </FieldGroup>
        <FieldGroup
          label="Email address*"
          id="email"
          error={state.errors.email}
        >
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
            placeholder="you@example.com"
          />
        </FieldGroup>
        <FieldGroup label="Phone" id="phone" error={state.errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
            placeholder="(801) 555-1234"
          />
        </FieldGroup>
        <FieldGroup
          label="Service focus"
          id="service"
          error={state.errors.service}
        >
          <select
            id="service"
            name="service"
            className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
            defaultValue=""
          >
            <option value="" disabled>
              Choose the primary service
            </option>
            <option value="kitchen-bath">Kitchen & Bath</option>
            <option value="electrical">Electrical & Lighting</option>
            <option value="carpentry">Carpentry & Finish Work</option>
            <option value="exterior">Exterior & Seasonal</option>
            <option value="painting">Painting & Surfaces</option>
            <option value="smart-home">Smart Home & Comfort</option>
            <option value="maintenance">Recurring maintenance plan</option>
          </select>
        </FieldGroup>
      </div>

      <FieldGroup label="Ideal timeline" id="timeline" error={state.errors.timeline}>
        <select
          id="timeline"
          name="timeline"
          className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
          defaultValue=""
        >
          <option value="" disabled>
            How soon are you looking to start?
          </option>
          <option value="asap">Urgent (same day / next day)</option>
          <option value="two-weeks">Within 2 weeks</option>
          <option value="thirty-days">Within 30 days</option>
          <option value="flexible">Flexible timeline</option>
        </select>
      </FieldGroup>

      <FieldGroup
        label="Project details*"
        id="message"
        error={state.errors.message}
      >
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
          placeholder="Share what you’re envisioning, key measurements, or any access notes."
        />
      </FieldGroup>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-amber-300"
      >
        Send my project brief
      </button>
    </form>
  );
}

function FieldGroup({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-2 text-sm font-medium text-slate-700" htmlFor={id}>
      <span className="flex items-center justify-between">
        {label}
        {error && <span className="text-xs font-semibold text-red-500">{error}</span>}
      </span>
      {children}
    </label>
  );
}
