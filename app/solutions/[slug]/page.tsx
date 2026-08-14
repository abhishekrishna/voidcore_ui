

Page · TSX
// app/solutions/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, CheckCircle2, MoveRight } from "lucide-react";
import SolutionContactForm from "@/components/solutions_contact";
import { solutions, getSolutionBySlug } from "@/lib/solution";
 
// shared easing — smooth, decelerated "expo-out" feel used across all hover/transition states
const EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]";
 
export async function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}
 
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getSolutionBySlug(slug);
  if (!s) return {};
  return {
    title: `${s.title} | Voidcore`,
    description: s.description,
    alternates: { canonical: `https://voidcore.in/solutions/${s.slug}` },
    openGraph: {
      title: s.title,
      description: s.description,
      url: `https://voidcore.in/solutions/${s.slug}`,
    },
  };
}
 
export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();
 
  const related = solutions.filter((s) => s.slug !== solution.slug).slice(0, 3);
 
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.title,
    description: solution.description,
    provider: { "@type": "Organization", name: "Voidcore", url: "https://voidcore.in" },
    areaServed: "IN",
    serviceType: solution.service,
  };
 
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: solution.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
 
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
 
      <main className={`min-h-screen bg-white dark:bg-[#0B0B0F] text-black dark:text-white transition-colors duration-300 ${EASE} overflow-hidden`}>
 
        {/* ── Ambient background ── */}
        <div className="pointer-events-none fixed inset-0 
                        bg-[radial-gradient(ellipse_70%_40%_at_60%_0%,rgba(0,0,0,0.04),transparent)]
                        dark:bg-[radial-gradient(ellipse_70%_40%_at_60%_0%,rgba(255,255,255,0.055),transparent)]" />
        <div className="pointer-events-none fixed inset-0 
                        bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)]
                        dark:bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
                        bg-[size:64px_64px] opacity-50" />
 
        {/* ── Hero ── */}
        <section className="relative mx-auto max-w-7xl px-6 pt-36 pb-28">
 
          {/* Back link */}
          <Link
            href="/#services"
            className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em]
                       text-black/35 dark:text-white/35 hover:text-black dark:hover:text-white
                       transition-colors duration-300 ${EASE} mb-16`}
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            ALL SOLUTIONS
          </Link>
 
          {/* Large background tag — decorative */}
          <div className="pointer-events-none absolute top-32 right-6 text-[11rem] font-semibold
                          text-black/[0.025] dark:text-white/[0.03] leading-none select-none hidden lg:block
                          tracking-tighter">
            {solution.tag.split(" / ")[0]}
          </div>
 
          <div className="grid lg:grid-cols-[1fr_420px] gap-16 items-start">
            {/* Left — headline */}
            <div>
              <div className="flex items-center gap-3 mb-7">
                <span className="text-[10px] uppercase tracking-[0.22em] font-medium
                                 text-black/40 dark:text-white/40
                                 border border-color: var(--vc-border)
                                 bg-black/[0.03] dark:bg-white/[0.03]
                                 px-3 py-1.5 rounded-full">
                  {solution.tag}
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-black/30 dark:text-white/30">
                  {solution.industry}
                </span>
              </div>
 
              <h1 className="text-5xl md:text-[4rem] font-semibold leading-[1.05] tracking-tight mb-8 max-w-2xl">
                {solution.title}
              </h1>
 
              <p className="color: var(--vc-ink2 text-lg leading-relaxed max-w-xl mb-10">
                {solution.longDescription}
              </p>
 
              <div className="flex items-center gap-4">
                <Link
                  href="#contact-form"
                  className={`inline-flex items-center gap-2
                             bg-black text-white dark:bg-white dark:text-black
                             font-semibold text-sm px-6 py-3.5 rounded-xl
                             transition-all duration-300 ${EASE} transform-gpu
                             hover:opacity-85 hover:-translate-y-0.5
                             shadow-lg shadow-black/10 dark:shadow-black/30`}
                >
                  Start a project
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="https://calendly.com/krishna_abhishek/30min"
                  target="_blank"
                  className={`inline-flex items-center gap-2 text-sm font-medium
                             text-black/50 dark:text-white/50
                             hover:text-black dark:hover:text-white
                             transition-colors duration-300 ${EASE}`}
                >
                  Book a call
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
 
            {/* Right — outcomes card */}
            <div className="relative">
              {/* Glow behind card */}
              <div className="absolute -inset-4 bg-black/[0.02] dark:bg-white/[0.04] rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl border border-color: var(--vc-border)
                              bg-white/80 dark:bg-[#0B0B0F]/80 backdrop-blur-xl p-8
                              shadow-2xl shadow-black/8 dark:shadow-black/40">
                <p className="text-[10px] uppercase tracking-[0.22em] text-black/35 dark:text-white/35 mb-7">
                  What you get
                </p>
                <ul className="space-y-5">
                  {solution.outcomes.map((outcome, i) => (
                    <li key={outcome} className="flex items-start gap-4">
                      <span className="text-xs font-semibold text-black/20 dark:text-white/20 mt-0.5 w-4 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm leading-relaxed text-black/75 dark:text-white/75">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
 
                {/* Stack pills inside card */}
                <div className="mt-8 pt-6 border-t border-black/8 dark:border-white/8">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-black/30 dark:text-white/30 mb-3">
                    Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {solution.stack.map((tech) => (
                      <span key={tech}
                        className="text-xs px-2.5 py-1 rounded-lg
                                   border border-black/8 dark:border-white/8
                                   bg-black/[0.03] dark:bg-white/[0.03]
                                   color: var(--vc-ink2">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
 
        {/* ── Process — horizontal timeline ── */}
        <section className="relative mx-auto max-w-7xl px-6 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-black/35 dark:text-white/35 mb-2">
                How it works
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold">Our process</h2>
            </div>
          </div>
 
          <div className="relative grid md:grid-cols-3 gap-6">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-8 left-[17%] right-[17%] h-px
                            bg-gradient-to-r from-transparent via-black/15 dark:via-white/15 to-transparent" />
 
            {solution.process.map((p, i) => (
              <div key={p.step} className="relative group">
                <div className={`rounded-2xl border border-color: var(--vc-border)
                                bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-sm
                                p-7 h-full transform-gpu
                                hover:border-black/20 dark:hover:border-white/20
                                hover:bg-black/[0.05] dark:hover:bg-white/[0.05]
                                hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20
                                hover:-translate-y-1
                                transition-all duration-500 ${EASE}`}>
                  {/* Step number with circle */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-full border border-black/15 dark:border-white/15
                                    bg-black/[0.04] dark:bg-white/[0.04]
                                    flex items-center justify-center
                                    text-xs font-semibold text-black/50 dark:text-white/50">
                      {p.step}
                    </div>
                    {i < solution.process.length - 1 && (
                      <MoveRight className="h-4 w-4 text-black/15 dark:text-white/15 hidden md:block" />
                    )}
                  </div>
                  <h3 className="text-base font-semibold mb-3">{p.title}</h3>
                  <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
 
        {/* ── Problems + Who it's for — side by side ── */}
        <section className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid lg:grid-cols-2 gap-6">
 
            {/* Problems */}
            <div className="rounded-2xl border border-color: var(--vc-border)
                            bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-xl p-8">
              <p className="text-[10px] uppercase tracking-[0.22em] text-black/35 dark:text-white/35 mb-2">
                Challenges
              </p>
              <h2 className="text-xl font-semibold mb-8">Problems we solve</h2>
              <div className="space-y-6">
                {solution.problems.map((item, i) => (
                  <div key={i} className="grid grid-cols-[1fr_auto_1fr] gap-4 items-start">
                    <div className="rounded-xl bg-black/[0.04] dark:bg-white/[0.04]
                                    border border-black/8 dark:border-white/8 p-4">
                      <p className="text-xs text-black/50 dark:text-white/50 leading-relaxed">
                        {item.problem}
                      </p>
                    </div>
                    <div className="flex items-center justify-center pt-4">
                      <ArrowUpRight className="h-3.5 w-3.5 text-black/20 dark:text-white/20 rotate-45" />
                    </div>
                    <div className="rounded-xl bg-black/[0.04] dark:bg-white/[0.04]
                                    border border-black/15 dark:border-white/15 p-4">
                      <p className="text-xs text-black/75 dark:text-white/75 leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
 
            {/* Who it's for */}
            <div className="rounded-2xl border border-color: var(--vc-border)
                            bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-xl p-8">
              <p className="text-[10px] uppercase tracking-[0.22em] text-black/35 dark:text-white/35 mb-2">
                Best fit
              </p>
              <h2 className="text-xl font-semibold mb-3">Who this is for</h2>
              <p className="text-sm text-black/45 dark:text-white/45 leading-relaxed mb-8">
                We work best with teams that have a clear problem and want a focused, production-grade solution — not a proof of concept.
              </p>
              <ul className="space-y-3">
                {solution.idealFor.map((item, i) => (
                  <li key={i}
                    className={`flex items-start gap-4 rounded-xl transform-gpu
                               border border-black/8 dark:border-white/8
                               bg-black/[0.02] dark:bg-white/[0.02]
                               px-5 py-4 group
                               hover:border-black/15 dark:hover:border-white/15
                               hover:bg-black/[0.05] dark:hover:bg-white/[0.05]
                               hover:translate-x-0.5
                               transition-all duration-300 ${EASE}`}>
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-black/30 dark:text-white/30" />
                    <span className="text-sm text-black/70 dark:text-white/70 leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
 
        {/* ── FAQ — accordion style layout ── */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid lg:grid-cols-[280px_1fr] gap-16 items-start">
            <div className="lg:sticky lg:top-32">
              <p className="text-[10px] uppercase tracking-[0.22em] text-black/35 dark:text-white/35 mb-2">
                FAQ
              </p>
              <h2 className="text-2xl font-semibold mb-4">Common questions</h2>
              <p className="text-sm text-black/45 dark:text-white/45 leading-relaxed">
                Everything you need to know before starting a project with us.
              </p>
            </div>
            <div className="space-y-3">
              {solution.faqs.map((faq, i) => (
                <div key={i}
                  className={`rounded-2xl border border-color: var(--vc-border)
                             bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-xl
                             p-7 hover:border-black/20 dark:hover:border-white/20
                             hover:bg-black/[0.05] dark:hover:bg-white/[0.05]
                             transition-all duration-300 ${EASE}`}>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-sm font-semibold leading-snug">{faq.question}</h3>
                    <span className="text-xs font-medium text-black/25 dark:text-white/25 shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
 
        {/* ── Related solutions ── */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <p className="text-[10px] uppercase tracking-[0.22em] text-black/35 dark:text-white/35 mb-8">
            Explore more
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className={`group relative rounded-2xl border border-color: var(--vc-border)
                           bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-xl p-7 overflow-hidden
                           transform-gpu
                           hover:border-black/20 dark:hover:border-white/20
                           hover:bg-black/[0.06] dark:hover:bg-white/[0.06]
                           hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20
                           hover:-translate-y-1
                           transition-all duration-500 ${EASE}`}
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100
                                transition-opacity duration-700 ${EASE}
                                bg-gradient-to-br from-white/5 to-transparent pointer-events-none`} />
                <div className="flex items-start justify-between mb-5">
                  <span className="text-[10px] uppercase tracking-[0.18em] font-medium
                                   text-black/35 dark:text-white/35
                                   border border-color: var(--vc-border)
                                   px-2.5 py-1 rounded-full">
                    {s.tag}
                  </span>
                  <ArrowUpRight className={`h-4 w-4 text-black/15 dark:text-white/15
                                           group-hover:text-black/55 dark:group-hover:text-white/55
                                           group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                                           transition-all duration-300 ${EASE}`} />
                </div>
                <h3 className="text-base font-semibold mb-2 leading-snug">{s.title}</h3>
                <p className="text-black/45 dark:text-white/45 text-xs leading-relaxed">{s.description}</p>
              </Link>
            ))}
          </div>
        </section>
 
        {/* ── CTA + Form ── */}
        <section id="contact-form" className="mx-auto max-w-7xl px-6 py-24">
          <div className="relative rounded-3xl border border-color: var(--vc-border) overflow-hidden">
            {/* Background texture */}
            <div className="absolute inset-0 bg-black/[0.025] dark:bg-white/[0.025]" />
            <div className="absolute inset-0 
                            bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(0,0,0,0.04),transparent)]
                            dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(255,255,255,0.05),transparent)]" />
 
            <div className="relative grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x
                            divide-black/10 dark:divide-white/10">
              {/* Left */}
              <div className="px-10 py-14">
                <p className="text-[10px] uppercase tracking-[0.22em] text-black/35 dark:text-white/35 mb-4">
                  Ready to build?
                </p>
                <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-5">
                  Let's talk about<br />your project.
                </h2>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed max-w-sm">
                  Tell us what you're building. We'll respond within 24 hours with a clear next step — no sales deck, no fluff.
                </p>
 
                <div className="mt-10 space-y-3">
                  {["Respond within 24 hours", "No long-term commitment required", "Fixed-scope, transparent pricing"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-black/30 dark:bg-white/30 shrink-0" />
                      <span className="text-xs text-black/50 dark:text-white/50">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
 
              {/* Right — form */}
              <div className="px-10 py-14">
                <SolutionContactForm service={solution.service} />
              </div>
            </div>
          </div>
        </section>
 
      </main>
    </>
  );
}
 
