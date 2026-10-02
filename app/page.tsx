'use client';
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import BlogsSection from "@/components/sections/blogs_card";
import ContactSection from "@/components/sections/contact";
import Services from "@/components/sections/services";
import Work from "@/components/sections/work";
import CareersSection from "@/components/careers";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Manrope } from "next/font/google";

// Headline + number font. Swap Manrope for any other next/font/google family.
const display = Manrope({ subsets: ["latin"], weight: ["600", "700"] });

const CALENDLY = "https://calendly.com/abhishekrishna/15min";

const STUDIO_URL = "https://app.voidcore.in/";

// TODO: add your photo link here (e.g. "/abhishek.jpg" in /public, or a full URL).
// Leave empty to show the "A" initial instead.
const PHOTO_URL = "";

// TODO: PLACEHOLDER quotes. Replace with real, approved client quotes
// (anonymised attribution is fine) or delete this array before publishing.
const quotes = [
  {
    text: "Field updates now land in the CRM before the rep is home.",
    by: "Head of Sales, distribution company",
  },
  {
    text: "Contract renewals used to surprise us. They don't anymore.",
    by: "Operations lead, logistics firm",
  },
];

// Demo examples: messy input in, clean record out.
const examples = [
  {
    key: "messages",
    tab: "Messages",
    source: "WhatsApp · Amit (field team)",
    meta: "6:42 pm",
    text: "met raj at sharma traders today. wants 40 cartons of the large pack by thursday. payment next week not now. also asking if the new pack comes in blue",
    status: "Saved to CRM",
    rows: [
      { label: "Account", value: "Sharma Traders" },
      { label: "Contact", value: "Raj" },
      { label: "Order", value: "40 cartons, large pack" },
      { label: "Needed by", value: "Thursday" },
      { label: "Payment", value: "Next week" },
      { label: "Follow up", value: "New pack in blue?" },
    ],
  },
  {
    key: "calls",
    tab: "Calls",
    source: "Sales call · Neha",
    meta: "4 min",
    text: "Spoke to Kabir at Apex Logistics. They're rolling out to the Pune team first, about 25 seats. Budget sits with Meera, who's back on the 12th. He wants pricing before then.",
    status: "Saved to CRM",
    rows: [
      { label: "Account", value: "Apex Logistics" },
      { label: "Contact", value: "Kabir" },
      { label: "Deal size", value: "25 seats, Pune team" },
      { label: "Decision maker", value: "Meera" },
      { label: "Available", value: "From the 12th" },
      { label: "Next step", value: "Send pricing before then" },
    ],
  },
  {
    key: "documents",
    tab: "Documents",
    source: "Vendor agreement",
    meta: "Page 14 of 40",
    text: "Either party may terminate on 60 days' written notice. This agreement renews automatically for successive one-year terms unless notice is given 90 days before expiry. Fees may be increased by up to 10% on renewal.",
    status: "Flagged for review",
    rows: [
      { label: "Document", value: "Vendor agreement" },
      { label: "Term", value: "1 year, auto-renews" },
      { label: "Exit notice", value: "60 days" },
      { label: "Renewal notice", value: "90 days before expiry" },
      { label: "Price rise", value: "Up to 10%" },
      { label: "Flag", value: "Cancel window is easy to miss" },
    ],
  },
];

const proof = [
  { num: "35+", label: "Systems running in production" },
  { num: "100%", label: "Of the code is yours" },
  { num: "1 day", label: "Typical reply time" },
];

export default function HeroModern() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const ex = examples[active];

  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-[#0B0B0F] text-black dark:text-white overflow-hidden transition-colors duration-300">
      <Navbar />

      <section className="mx-auto max-w-6xl px-6 pt-28 md:pt-40 pb-20 grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 items-center">
        {/* Left */}
        <div>
          <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
            AI Systems Studio
          </p>

          <h1 className={`${display.className} mt-4 text-4xl md:text-[3.5rem] font-semibold leading-[1.08] tracking-[-0.02em] max-w-xl text-balance`}>
            Your business runs on information. Almost none of it is structured.
          </h1>

          <p className="mt-6 text-lg text-black/65 dark:text-white/65 max-w-md leading-relaxed">
            Emails, calls, documents. We turn them into something your team can
            search and use.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              See it on your own data
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href="#work"
              className="text-sm font-medium text-black/65 dark:text-white/65 underline underline-offset-4 decoration-black/20 dark:decoration-white/20 hover:text-black dark:hover:text-white"
            >
              See what we've built
            </a>
          </div>

          <p className="mt-5 text-sm text-black/60 dark:text-white/60">
            Not ready for a call?{" "}
            <a href="#contact" className="underline underline-offset-4 decoration-black/25 dark:decoration-white/25 hover:text-black dark:hover:text-white">
              Send us a messy one.
            </a>
          </p>

          {/* Founder note */}
          <div className="mt-12 flex items-center gap-3 max-w-md">
            {PHOTO_URL ? (
              // TODO: set PHOTO_URL at the top of this file
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={PHOTO_URL}
                alt="Abhishek, founder of Voidcore"
                className="h-10 w-10 shrink-0 rounded-full object-cover"
              />
            ) : (
              <div
                className="h-10 w-10 shrink-0 rounded-full grid place-items-center text-sm font-semibold bg-black/10 text-black dark:bg-white/15 dark:text-white"
                aria-hidden
              >
                A
              </div>
            )}
            {/* <p className="text-sm text-black/60 dark:text-white/60 leading-snug">
              I'm Krishna, Your message comes to me, not the sales team.
            </p> */}
          </div>
        </div>

        {/* Right: the demo */}
        <div
          className="w-full max-w-md lg:ml-auto"
          aria-label="Example: a messy input turned into a structured record"
        >
          {/* Tabs */}
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div role="tablist" className="inline-flex rounded-full border border-black/10 dark:border-white/10 p-1 text-sm">
            {examples.map((e, i) => (
              <button
                key={e.key}
                role="tab"
                aria-selected={i === active}
                onClick={() => setActive(i)}
                className={
                  "px-4 py-1.5 rounded-full font-medium transition-colors " +
                  (i === active
                    ? "bg-black/[0.06] dark:bg-white/10 text-black dark:text-white"
                    : "text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white")
                }
              >
                {e.tab}
              </button>
            ))}
          </div>
          <span className="text-xs text-black/60 dark:text-white/60">Example</span>
          </div>

          {/* Input */}
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.04] p-5">
            <div className="flex items-center justify-between text-xs text-black/60 dark:text-white/60">
              <span>{ex.source}</span>
              <span>{ex.meta}</span>
            </div>
            <p className="mt-3 min-h-[7.5rem] text-[15px] leading-relaxed text-black/80 dark:text-white/80">
              {ex.text}
            </p>
          </div>

          {/* Connector */}
          <div className="flex justify-center py-2.5" aria-hidden>
            <span className="h-8 w-8 rounded-full grid place-items-center border border-black/10 dark:border-white/15 text-black/60 dark:text-white/60 bg-white dark:bg-[#0B0B0F]">
              <ArrowDown className="h-4 w-4" />
            </span>
          </div>

          {/* Output */}
          <div className="rounded-2xl border border-black/10 dark:border-white/15 bg-white dark:bg-[#15151C] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
            <div className="flex items-center justify-between">
              <p className="text-xs font-medium text-black/65 dark:text-white/65">
                What your team sees
              </p>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-600 dark:text-indigo-400">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
                {ex.status}
              </span>
            </div>
            <dl className="mt-4 space-y-2.5">
              {ex.rows.map((r, i) => (
                <motion.div
                  key={ex.key + r.label}
                  initial={reduce ? false : { opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 + i * 0.12 }}
                  className="flex items-baseline justify-between gap-4 border-b border-black/5 dark:border-white/10 pb-2.5 last:border-0 last:pb-0"
                >
                  <dt className="text-sm text-black/60 dark:text-white/60">{r.label}</dt>
                  <dd className="text-sm font-medium text-right">{r.value}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Proof */}
      <div className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-black/10 dark:border-white/10 pt-8">
          {proof.map((s) => (
            <div key={s.label}>
              <div className={`${display.className} text-2xl font-semibold tracking-tight`}>{s.num}</div>
              <div className="mt-1 text-sm text-black/65 dark:text-white/65">{s.label}</div>
            </div>
          ))}
        </div>

        {/* TODO: placeholder quotes, see top of file */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 border-t border-black/10 dark:border-white/10 pt-8">
          {quotes.map((q) => (
            <figure key={q.by}>
              <blockquote className="text-lg leading-snug text-black/85 dark:text-white/85">
                {q.text}
              </blockquote>
              <figcaption className="mt-3 text-sm text-black/60 dark:text-white/60">
                {q.by}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Sections */}
      <Work />
      <BlogsSection />
      <Services />
      {/* <CareersSection /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}