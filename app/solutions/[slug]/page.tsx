// app/solutions/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, CheckCircle2, XCircle } from "lucide-react";
import { getSolutionBySlug, solutions } from "@/lib/solution";
import SolutionContactForm from "@/components/solutions_contact";


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
    provider: {
      "@type": "Organization",
      name: "Voidcore",
      url: "https://voidcore.in",
    },
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

      <main className="min-h-screen bg-white dark:bg-[#0B0B0F] text-black dark:text-white transition-colors duration-200">

        {/* ── Hero ── */}
        <section className="mx-auto max-w-7xl px-6 pt-36 pb-24">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em]
                       text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white
                       transition-colors mb-12"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All services
          </Link>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-medium
                               text-black/40 dark:text-white/40
                               border border-black/10 dark:border-white/10
                               px-3 py-1.5 rounded-full mb-6">
                {solution.tag}
              </span>
              <h1 className="text-4xl md:text-[3.25rem] font-semibold leading-[1.1] tracking-tight mb-6">
                {solution.title}
              </h1>
              <p className="text-black/60 dark:text-white/60 text-lg leading-relaxed mb-10 max-w-lg">
                {solution.longDescription}
              </p>
              <Link
                href="https://calendly.com/krishna_abhishek/30min"
                target="_blank"
                className="inline-flex items-center gap-2
                           bg-black text-white dark:bg-white dark:text-black
                           font-semibold text-sm px-6 py-3.5 rounded-xl
                           hover:opacity-80 transition-opacity shadow-lg"
              >
                Book a call
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Outcomes */}
            <div className="rounded-2xl border border-black/10 dark:border-white/10
                            bg-black/[0.03] dark:bg-white/[0.03] backdrop-blur-xl p-8
                            shadow-xl shadow-black/5 dark:shadow-black/30">
              <p className="text-xs uppercase tracking-[0.18em] text-black/40 dark:text-white/40 mb-6">
                What you get
              </p>
              <ul className="space-y-4">
                {solution.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-black/40 dark:text-white/40" />
                    <span className="text-sm leading-relaxed text-black/80 dark:text-white/80">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── How we work ── */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.18em] text-black/40 dark:text-white/40 mb-3">
            How it works
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-12">Our process</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {solution.process.map((p) => (
              <div
                key={p.step}
                className="rounded-2xl border border-black/10 dark:border-white/10
                           bg-black/[0.03] dark:bg-white/[0.03] backdrop-blur-xl p-7"
              >
                <p className="text-3xl font-semibold text-black/10 dark:text-white/10 mb-4 leading-none">
                  {p.step}
                </p>
                <h3 className="text-base font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-black/55 dark:text-white/55 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── Problems we solve ── */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.18em] text-black/40 dark:text-white/40 mb-3">
            Common challenges
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-12">Problems we solve</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {solution.problems.map((item) => (
              <div
                key={item.problem}
                className="rounded-2xl border border-black/10 dark:border-white/10
                           bg-black/[0.03] dark:bg-white/[0.03] backdrop-blur-xl p-7 space-y-4"
              >
                <div className="flex items-start gap-3">
                  <XCircle className="h-4 w-4 mt-0.5 shrink-0 text-black/25 dark:text-white/25" />
                  <p className="text-sm font-medium text-black/60 dark:text-white/60 leading-snug">
                    {item.problem}
                  </p>
                </div>
                <div className="border-t border-black/10 dark:border-white/10 pt-4 flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-black/40 dark:text-white/40" />
                  <p className="text-sm text-black/75 dark:text-white/75 leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── Ideal for ── */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-black/40 dark:text-white/40 mb-3">
                Best fit
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">Who this is for</h2>
              <p className="text-black/55 dark:text-white/55 text-sm leading-relaxed">
                We work best with teams that have a clear problem and want a focused, production-grade solution — not a proof of concept.
              </p>
            </div>
            <ul className="space-y-3">
              {solution.idealFor.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-black/10 dark:border-white/10
                             bg-black/[0.03] dark:bg-white/[0.03] px-5 py-3.5 text-sm
                             text-black/75 dark:text-white/75"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-black/30 dark:bg-white/30 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Divider />

        {/* ── Stack ── */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.18em] text-black/40 dark:text-white/40 mb-6">
            Tech stack
          </p>
          <div className="flex flex-wrap gap-3">
            {solution.stack.map((tech) => (
              <span
                key={tech}
                className="text-sm font-medium px-4 py-2 rounded-xl
                           border border-black/10 dark:border-white/10
                           bg-black/[0.03] dark:bg-white/[0.03]
                           text-black/70 dark:text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── FAQ ── */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.18em] text-black/40 dark:text-white/40 mb-3">
            FAQ
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold mb-12">Common questions</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {solution.faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-black/10 dark:border-white/10
                           bg-black/[0.03] dark:bg-white/[0.03] backdrop-blur-xl p-7"
              >
                <h3 className="text-sm font-semibold mb-3 leading-snug">{faq.question}</h3>
                <p className="text-sm text-black/55 dark:text-white/55 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* ── Related ── */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.18em] text-black/40 dark:text-white/40 mb-8">
            Other solutions
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="group rounded-2xl border border-black/10 dark:border-white/10
                           bg-black/[0.03] dark:bg-white/[0.03] backdrop-blur-xl p-6
                           hover:bg-black/[0.07] dark:hover:bg-white/[0.07]
                           hover:border-black/20 dark:hover:border-white/20
                           hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20
                           transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-[0.18em] font-medium
                                   text-black/40 dark:text-white/40
                                   border border-black/10 dark:border-white/10
                                   px-2.5 py-1 rounded-full">
                    {s.tag}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-black/20 dark:text-white/20
                                           group-hover:text-black/60 dark:group-hover:text-white/60
                                           transition-colors" />
                </div>
                <h3 className="text-base font-medium mb-2 leading-snug">{s.title}</h3>
                <p className="text-black/50 dark:text-white/50 text-xs leading-relaxed">{s.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="rounded-2xl border border-black/10 dark:border-white/10
                          bg-black/[0.03] dark:bg-white/[0.03] backdrop-blur-xl
                          px-10 py-14 shadow-xl shadow-black/5 dark:shadow-black/30">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-black/40 dark:text-white/40 mb-3">
                  Ready to build?
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                  Let's talk about your project.
                </h2>
                <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed">
                  Tell us what you're building. We'll respond within 24 hours with a clear next step — no sales calls, no fluff.
                </p>
              </div>
              <SolutionContactForm service={solution.service} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function Divider() {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="border-t border-black/10 dark:border-white/10" />
    </div>
  );
}
