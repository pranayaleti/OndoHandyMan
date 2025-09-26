import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  CheckCircle2,
  Hammer,
  MapPin,
  PaintRoller,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Sprout,
  SunMedium,
  ThermometerSnowflake,
  Wrench,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import ContactForm from "@/components/forms/contact-form";

const emergencyPhone = "801-851-0176";

type Stat = {
  label: string;
  value: string;
};

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  bulletPoints: string[];
};

type Differentiator = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type Testimonial = {
  quote: string;
  author: string;
  location: string;
  project: string;
};

type FAQ = {
  question: string;
  answer: string;
};

const stats: Stat[] = [
  { label: "Projects delivered across Utah County", value: "2,400+" },
  { label: "Average response time for urgent calls", value: "1 hr 32 min" },
  { label: "Certified pros on the Ondo roster", value: "18" },
];

const neighborhoods = [
  "Traverse Mountain",
  "Thanksgiving Point",
  "Jordan Willows",
  "Canyon Hills",
  "Ivory Ridge",
  "Pilgrim's Landing",
  "Saratoga Springs",
  "American Fork",
];

const services: Service[] = [
  {
    title: "Kitchen & Bath Repairs",
    description:
      "Leaky faucets, clogged disposals, loose cabinets, and tile refreshes handled with licensed precision.",
    icon: Wrench,
    bulletPoints: [
      "Plumbing fixture installs",
      "Custom backsplashes",
      "Soft-close cabinet upgrades",
    ],
  },
  {
    title: "Electrical & Lighting",
    description:
      "From smart dimmers to landscape lighting, we keep your home bright, safe, and code compliant.",
    icon: Zap,
    bulletPoints: [
      "EV charger-ready circuits",
      "Fixture & fan installs",
      "Panel & GFCI diagnostics",
    ],
  },
  {
    title: "Carpentry & Finish Work",
    description:
      "Custom carpentry crafted for Alpine-style homes, modern townhomes, and everything between.",
    icon: Hammer,
    bulletPoints: [
      "Built-ins & mudrooms",
      "Door & trim repair",
      "Deck and railing refits",
    ],
  },
  {
    title: "Exterior & Seasonal",
    description:
      "Weather-ready maintenance plans tailored to Utah’s hot summers and snowy inversions.",
    icon: ThermometerSnowflake,
    bulletPoints: [
      "Snow melt system checks",
      "Seasonal caulking & sealing",
      "Outdoor living tune-ups",
    ],
  },
  {
    title: "Painting & Surfaces",
    description:
      "Color consultations and flawless finishes from accent walls to whole-home repaints.",
    icon: PaintRoller,
    bulletPoints: [
      "Interior & exterior painting",
      "Drywall repair & textures",
      "Garage epoxy floors",
    ],
  },
  {
    title: "Smart Home & Comfort",
    description:
      "Integrate smart security, climate control, and leak monitoring built for growing Utah households.",
    icon: Sparkles,
    bulletPoints: [
      "Smart thermostat setup",
      "Water leak sensors",
      "Ring & Nest installations",
    ],
  },
];

const differentiators: Differentiator[] = [
  {
    title: "Lehi-first Scheduling",
    description:
      "Local crew dispatch centered near Pioneer Crossing keeps routes tight and arrival windows reliable.",
    icon: CalendarClock,
  },
  {
    title: "Licensed & Insured",
    description:
      "General liability, worker’s comp, and specialty licenses mean every task is code-ready and documented.",
    icon: ShieldCheck,
  },
  {
    title: "Transparent Pricing",
    description:
      "Flat-rate service tiers and digital approvals keep you in control before the first tool comes out.",
    icon: BadgeCheck,
  },
  {
    title: "Sustainable Choices",
    description:
      "We source low-VOC paints, smart irrigation, and energy-aware fixtures suited for Utah’s climate goals.",
    icon: Sprout,
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "Ondo transformed our Traverse Mountain basement into a vibrant family suite ahead of schedule and under budget.",
    author: "Megan R.",
    location: "Traverse Mountain, Lehi",
    project: "Basement refresh & custom built-ins",
  },
  {
    quote:
      "They handled our short-notice Thanksgiving Point rental repairs without disturbing guests—flawless execution.",
    author: "Gabe & Linnea H.",
    location: "Thanksgiving Point, Lehi",
    project: "Vacation rental punch list",
  },
  {
    quote:
      "The team weather-proofed our patio and added smart lighting that makes evening entertaining effortless.",
    author: "Darnell W.",
    location: "Saratoga Springs",
    project: "Outdoor living upgrade",
  },
];

const faqs: FAQ[] = [
  {
    question: "Do you service both residential and light commercial properties?",
    answer:
      "Yes. Ondo Handyman is licensed and insured for residential homes, multifamily units, vacation rentals, and storefronts throughout northern Utah County.",
  },
  {
    question: "How quickly can you respond to emergency repairs?",
    answer:
      "Our Lehi-based dispatch monitors calls 6:00am–10:00pm with on-call technicians available 24/7. Most urgent visits happen inside 90 minutes.",
  },
  {
    question: "Do you provide written estimates and warranties?",
    answer:
      "Every project receives a line-item proposal and a workmanship guarantee ranging from 12 to 36 months depending on scope.",
  },
  {
    question: "Can you help with design decisions?",
    answer:
      "Absolutely. Our project consultant can advise on materials, paint, fixtures, and spatial planning to match Lehi HOA guidelines and regional style trends.",
  },
];

export default function Home() {
  return (
    <main className="flex w-full max-w-none flex-col gap-24 px-6 pb-24 pt-12 sm:pt-20 lg:px-12">
      <Hero />
      <TrustIndicators />
      <ServicesSection />
      <ValueStack />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <FinalCTA />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden rounded-[32px] bg-slate-950 text-slate-100 shadow-soft">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(65,168,214,0.35),_transparent)]"
      />
      <div
        aria-hidden
        className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,_rgba(245,158,11,0.35),_transparent)] blur-3xl"
      />
      <div className="relative grid gap-12 px-8 py-16 sm:px-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 ring-1 ring-white/15">
            <MapPin className="h-4 w-4 text-amber-300" aria-hidden />
            Lehi, Utah • Northern Utah County
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ondo Handyman keeps Lehi homes tuned, safe, and ready for what&rsquo;s next.
          </h1>
          <p className="text-pretty text-lg text-slate-200 sm:text-xl">
            Partner with a locally owned, fully insured team trusted by Traverse Mountain families, commercial suites at Thanksgiving Point, and legacy homes across American Fork.
          </p>
          <dl className="grid gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <dt className="text-sm text-slate-300">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-amber-500/30 transition hover:translate-y-0.5 hover:bg-amber-300"
            >
              Book a walkthrough
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a
              href={`tel:${emergencyPhone}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              <PhoneCall className="h-5 w-5" aria-hidden />
              Emergency: {formatPhone(emergencyPhone)}
            </a>
          </div>
          <p className="text-sm text-slate-300">
            Same-day service windows open weekdays before 10:00am • Licensed • Insured • Background checked pros
          </p>
        </div>
        <div className="relative h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-lg">
          <div aria-hidden className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative flex h-full flex-col justify-between gap-6 rounded-2xl bg-white/10 p-6 ring-1 ring-white/20">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                Recent project snapshot
              </p>
              <div className="space-y-3 text-sm text-slate-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" aria-hidden />
                  Drywall repair & designer paint – Jordan Willows
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" aria-hidden />
                  Smart thermostat & humidifier install – Ivory Ridge
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" aria-hidden />
                  Deck rebuild for HOA compliance – Traverse Mountain
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10">
              <Image
                src="https://images.unsplash.com/photo-1611659934315-20e48ccd0d5a?auto=format&fit=crop&w=960&q=80"
                alt="Ondo Handyman technician installing modern lighting in a Lehi home."
                width={960}
                height={640}
                className="h-64 w-full object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-slate-950/70 p-4 text-sm text-slate-100">
                <p className="font-medium">Modern loft lighting • Downtown Lehi</p>
                <p className="text-xs text-slate-300">
                  Installed vaulted ceiling fixtures and accent wall sconces in a 1910s craftsman renovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustIndicators() {
  return (
    <section className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-10 shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <ShieldCheck className="h-8 w-8 text-emerald-500" aria-hidden />
          <div>
            <p className="text-base font-semibold text-slate-900">Trusted all across Lehi</p>
            <p className="text-sm text-slate-600">
              Rated 4.9/5 from 600+ homeowners and property managers
            </p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="rounded-full border border-amber-400/60 bg-amber-100 px-4 py-2 text-sm font-medium text-amber-900">
            Utah DOPL Licensed Handyman #9892217-5501
          </div>
          <div className="rounded-full border border-emerald-400/60 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-800">
            Better Business Bureau A Rating
          </div>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-4">
        {neighborhoods.map((neighborhood) => (
          <div
            key={neighborhood}
            className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-5 text-center text-sm font-semibold text-slate-700"
          >
            {neighborhood}
          </div>
        ))}
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section className="space-y-12">
      <header className="max-w-3xl space-y-4">
        <span className="inline-flex rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-600">
          Services tuned for Wasatch Front living
        </span>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Maintenance plans and project expertise for every room—inside and out.
        </h2>
        <p className="text-lg text-slate-600">
          From quick fixes to large-scale remodel support, our technicians bring specialized know-how to match Lehi’s mix of modern builds, historic homes, and short-term rentals.
        </p>
      </header>
      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <article
            key={service.title}
            className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-medium"
          >
            <div className="space-y-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/5 text-slate-900">
                <service.icon className="h-6 w-6" aria-hidden />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-slate-900">{service.title}</h3>
                <p className="text-slate-600">{service.description}</p>
              </div>
              <ul className="space-y-2 text-sm text-slate-600">
                {service.bulletPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-500" aria-hidden />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm font-semibold text-slate-700 transition group-hover:text-slate-900">
              Explore project photos
              <ArrowRight className="h-4 w-4" aria-hidden />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ValueStack() {
  return (
    <section className="grid gap-10 rounded-3xl border border-slate-200 bg-slate-900/95 p-10 text-slate-100 shadow-soft lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6">
        <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
          Why Lehi chooses Ondo
        </span>
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Engineered for Utah’s climate, HOA guidelines, and fast growth.
        </h2>
        <p className="text-lg text-slate-200">
          Ondo Handyman was built to support Lehi&rsquo;s rapid expansion. Our proactive maintenance programs keep rentals market-ready, protect long-term investments, and help new builds avoid warranty voids.
        </p>
        <Link
          href="#contact"
          className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-200"
        >
          Request a maintenance roadmap
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>
      <div className="grid gap-4">
        {differentiators.map((item) => (
          <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <item.icon className="h-6 w-6 text-amber-300" aria-hidden />
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            </div>
            <p className="mt-3 text-sm text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      title: "Site assessment & estimate",
      description:
        "A project consultant meets on-site (or virtually) to capture measurements, material preferences, and HOA considerations. You get a same-day digital estimate.",
      icon: Sparkles,
    },
    {
      title: "Scheduled service window",
      description:
        "Choose a morning or afternoon block. You’ll receive technician bios, certifications, and live GPS updates when we’re en route.",
      icon: CalendarClock,
    },
    {
      title: "Precise workmanship",
      description:
        "Our cleanroom-style prep protects finishes. We photograph before/after, haul debris, and leave a maintenance recap for future planning.",
      icon: SunMedium,
    },
    {
      title: "Follow-through & warranty",
      description:
        "Expect a post-service check-in and optional seasonal tune-ups. All workmanship is backed by a written guarantee.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section className="space-y-10">
      <header className="space-y-4">
        <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-emerald-700">
          Proven process
        </span>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          A guided journey from first call to final walk-through.
        </h2>
        <p className="text-lg text-slate-600">
          We blend digital convenience with the craftsmanship you&rsquo;d expect from a trusted neighbor. You&rsquo;ll always know who is on-site, what&rsquo;s happening next, and how we&rsquo;re protecting your investment.
        </p>
      </header>
      <div className="grid gap-6 lg:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step.title} className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900/5 text-slate-900">
              <step.icon className="h-6 w-6" aria-hidden />
            </div>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">
              Step {index + 1}
            </p>
            <h3 className="mt-3 text-xl font-semibold text-slate-900">{step.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="space-y-10">
      <header className="space-y-4">
        <span className="inline-flex rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-600">
          Community voices
        </span>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Lehi families, founders, and property managers rely on Ondo Handyman.
        </h2>
        <p className="text-lg text-slate-600">
          4.9/5 average across Google, Nextdoor, and Thumbtack with repeat bookings from Alpine to Eagle Mountain.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <blockquote
            key={testimonial.author}
            className="group flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 shadow-soft"
          >
            <div className="space-y-4">
              <StarsBadge />
              <p className="text-sm text-slate-500">{testimonial.project}</p>
              <p className="text-lg font-medium text-slate-700">
                “{testimonial.quote}”
              </p>
            </div>
            <footer className="mt-6 border-t border-slate-200 pt-4 text-sm text-slate-600">
              <p className="font-semibold text-slate-900">{testimonial.author}</p>
              <p>{testimonial.location}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}

function StarsBadge() {
  return (
    <div className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
      <StarIcon />
      5.0 rating
    </div>
  );
}

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      className="h-4 w-4"
    >
      <path d="M12 4.5l1.89 3.83 4.23.61-3.06 2.98.72 4.22L12 14.77l-3.78 1.99.72-4.22-3.06-2.98 4.23-.61L12 4.5z" />
    </svg>
  );
}

function FAQSection() {
  return (
    <section className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-10 shadow-soft lg:grid-cols-[1fr_1.2fr]">
      <div className="space-y-4">
        <span className="inline-flex rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-slate-600">
          FAQs
        </span>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Answers to the questions Lehi homeowners ask most.
        </h2>
        <p className="text-lg text-slate-600">
          Need something unique? Chat with our coordinator at
          {" "}
          <a className="font-medium text-slate-900" href="mailto:hello@ondo-handyman.com">
            hello@ondo-handyman.com
          </a>
          {" "}
          or call {formatPhone(emergencyPhone)}.
        </p>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
          <p className="font-semibold text-slate-900">Service window reminders</p>
          <p className="mt-2">
            Expect a text and email the evening before, a &ldquo;departing soon&rdquo; alert, and digital job notes you can share with family members or tenants.
          </p>
        </div>
      </div>
      <div className="space-y-4">
        {faqs.map((faq) => (
          <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <summary className="flex cursor-pointer items-center justify-between gap-4 text-left text-base font-semibold text-slate-900">
              {faq.question}
              <span className="text-sm text-slate-500 transition group-open:rotate-180">⌄</span>
            </summary>
            <p className="mt-4 text-sm text-slate-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="grid gap-12 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-amber-50 p-10 shadow-soft lg:grid-cols-[1fr_1.1fr]"
    >
      <div className="space-y-6">
        <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
          Let&rsquo;s get started
        </span>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Share a few project details and our Lehi coordinator will confirm within one business hour.
        </h2>
        <p className="text-lg text-slate-600">
          We service Lehi, Alpine, Highland, American Fork, Saratoga Springs, and Eagle Mountain. Looking for recurring maintenance? Ask about our bi-annual service bundles.
        </p>
        <div className="space-y-4 rounded-2xl border border-amber-200 bg-white p-6 text-sm text-slate-700">
          <div className="flex items-center gap-3">
            <PhoneCall className="h-5 w-5 text-amber-500" aria-hidden />
            <a href={`tel:${emergencyPhone}`} className="font-semibold text-slate-900">
              Call {formatPhone(emergencyPhone)}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-amber-500" aria-hidden />
            <span>
              Headquartered near Ashton Blvd &amp; Pioneer Crossing • On-site Monday&ndash;Saturday • 6:00am&ndash;10:00pm support
            </span>
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="rounded-[32px] border border-slate-900 bg-slate-950 p-10 text-slate-100 shadow-soft">
      <div className="flex flex-col gap-6 text-center sm:text-left md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">
            Ready when you are
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Schedule your Lehi handyman today and stay ahead of home maintenance season.
          </h2>
          <p className="text-sm text-slate-300">
            Proudly serving Silicon Slopes founders, growing families, and property partners since 2010.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-amber-300"
          >
            Plan a visit
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <a
            href="mailto:hello@ondo-handyman.com"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
          >
            hello@ondo-handyman.com
          </a>
        </div>
      </div>
    </section>
  );
}

function formatPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  const normalized = digits.length === 11 && digits.startsWith("1") ? digits.slice(1) : digits;
  if (normalized.length !== 10) return phone;
  const area = normalized.slice(0, 3);
  const prefix = normalized.slice(3, 6);
  const line = normalized.slice(6);
  return `(${area}) ${prefix}-${line}`;
}
