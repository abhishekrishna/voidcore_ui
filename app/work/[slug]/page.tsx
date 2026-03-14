import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/work_data";
import Image from "next/image";


// ── Static params ────────────────────────────────────────────────────────────

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <main className="min-h-screen bg-white dark:bg-[#0D0D12] text-black dark:text-white">

      {/* ── Breadcrumb ── */}
      <nav className="mx-auto max-w-4xl px-6 pt-10">
        <Link
          href="/#work"
          className="inline-flex items-center gap-1.5 text-xs
                     text-black/35 dark:text-white/35
                     hover:text-black dark:hover:text-white transition-colors"
        >
          <ArrowLeft className="h-3 w-3" />
          Selected Work
        </Link>
      </nav>

      {/* ── Hero ── */}
      <section className="mx-auto max-w-4xl px-6 pt-12 pb-16">

        {/* Tag + year */}
        <div className="flex items-center gap-3 mb-7">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium
                           border border-black/10 dark:border-white/10
                           text-black/50 dark:text-white/50
                           rounded-full px-3 py-1">
            {project.tag}
          </span>
          <span className="text-[10px] uppercase tracking-[0.16em] text-black/30 dark:text-white/30">
            {project.year}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1]
                       tracking-[-0.03em] max-w-2xl mb-8">
          {project.title}
        </h1>

        {/* Description */}
        <p className="text-base text-black/55 dark:text-white/50 leading-relaxed max-w-xl mb-10">
          {project.description}
        </p>

        {/* Context strip */}
        <div className="flex flex-wrap gap-x-10 gap-y-4 pb-10
                        border-b border-black/[0.07] dark:border-white/[0.07]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.14em]
                           text-black/30 dark:text-white/30 mb-1">Year</p>
            <p className="text-sm font-medium">{project.year}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.14em]
                           text-black/30 dark:text-white/30 mb-1">Category</p>
            <p className="text-sm font-medium">{project.tag}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.14em]
                           text-black/30 dark:text-white/30 mb-1">Stack</p>
            <p className="text-sm font-medium">{project.techStack.slice(0, 3).join(", ")}</p>
          </div>
        </div>
      </section>

      {/* ── Cover image ── */}
      <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden
                    border border-black/[0.07] dark:border-white/[0.07]">
      <Image
        src={project.image}
        alt={project.title}
        fill
        className="object-cover"
      />
</div>

      {/* ── Metrics ── */}
      <section className="mx-auto max-w-4xl px-6 mb-20">
        <p className="text-[10px] uppercase tracking-[0.2em]
                       text-black/30 dark:text-white/30 mb-8">
          Key Results
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {project.metrics.map((m) => (
            <div
              key={m.label}
              className="p-5 rounded-2xl border border-black/[0.07] dark:border-white/[0.07]
                         bg-black/[0.02] dark:bg-white/[0.02]
                         hover:border-black/[0.13] dark:hover:border-white/[0.13]
                         transition-colors duration-200"
            >
              <p className="text-[2rem] font-semibold tracking-tight leading-none mb-1.5">
                {m.value}
              </p>
              <p className="text-xs font-medium text-black/65 dark:text-white/60 mb-0.5">
                {m.label}
              </p>
              {m.sub && (
                <p className="text-[11px] text-black/30 dark:text-white/30">{m.sub}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="mx-auto max-w-4xl px-6 mb-20">
        <div className="h-px bg-black/[0.07] dark:bg-white/[0.07]" />
      </div>

      {/* ── Challenge / Built / Results ── */}
      <section className="mx-auto max-w-4xl px-6 mb-20 space-y-16">
        {[project.challenge, project.built, project.results].map((section, i) => (
          <div key={i} className="grid md:grid-cols-[200px_1fr] gap-6 md:gap-16">
            <div className="pt-0.5">
              <p className="text-[10px] uppercase tracking-[0.18em]
                             text-black/30 dark:text-white/30 mb-2">
                0{i + 1}
              </p>
              <h2 className="text-base font-semibold text-black dark:text-white">
                {section.heading}
              </h2>
            </div>
            <p className="text-[0.95rem] text-black/60 dark:text-white/55 leading-[1.8]">
              {section.body}
            </p>
          </div>
        ))}
      </section>

      {/* ── Divider ── */}
      <div className="mx-auto max-w-4xl px-6 mb-20">
        <div className="h-px bg-black/[0.07] dark:bg-white/[0.07]" />
      </div>

      {/* ── Tech stack ── */}
      <section className="mx-auto max-w-4xl px-6 mb-20">
        <p className="text-[10px] uppercase tracking-[0.2em]
                       text-black/30 dark:text-white/30 mb-6">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-3 py-1.5 rounded-lg
                         border border-black/[0.08] dark:border-white/[0.08]
                         bg-black/[0.03] dark:bg-white/[0.03]
                         text-black/60 dark:text-white/55"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="mx-auto max-w-4xl px-6 mb-20">
        <div className="h-px bg-black/[0.07] dark:bg-white/[0.07]" />
      </div>

      {/* ── More work ── */}
      {others.length > 0 && (
        <section className="mx-auto max-w-4xl px-6 mb-20">
          <p className="text-[10px] uppercase tracking-[0.2em]
                         text-black/30 dark:text-white/30 mb-8">
            More Work
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {others.map((p) => (
              <Link
                key={p.id}
                href={`/work/${p.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden
                           border border-black/[0.07] dark:border-white/[0.07]
                           hover:border-black/[0.15] dark:hover:border-white/[0.15]
                           bg-black/[0.02] dark:bg-white/[0.02]
                           hover:bg-black/[0.05] dark:hover:bg-white/[0.05]
                           transition-all duration-300"
              >
                <div className="w-full h-36 overflow-hidden">
                  <img
                    src={`${p.image}`}
                    alt={p.title}
                    className="w-full h-full object-cover
                               group-hover:scale-[1.03] transition-transform duration-500"
                  />
                </div>
                <div className="p-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.14em]
                                   text-black/30 dark:text-white/30 mb-1.5">
                      {p.tag}
                    </p>
                    <h3 className="text-sm font-semibold leading-snug
                                   text-black dark:text-white line-clamp-2">
                      {p.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="h-4 w-4 flex-shrink-0 mt-0.5
                                           text-black/25 dark:text-white/25
                                           group-hover:text-black dark:group-hover:text-white
                                           transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── Divider ── */}
      <div className="mx-auto max-w-4xl px-6 mb-20">
        <div className="h-px bg-black/[0.07] dark:bg-white/[0.07]" />
      </div>

      {/* ── CTA ── */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.2em]
                           text-black/30 dark:text-white/30 mb-4">
              Start a project
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight max-w-sm">
              Have something similar in mind?
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 md:flex-shrink-0">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2
                         px-5 py-2.5 rounded-xl
                         bg-black dark:bg-white
                         text-white dark:text-black
                         text-sm font-medium
                         hover:opacity-80 transition-opacity"
            >
              Get in touch
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/#work"
              className="inline-flex items-center justify-center
                         px-5 py-2.5 rounded-xl
                         border border-black/10 dark:border-white/10
                         text-sm font-medium text-black/55 dark:text-white/55
                         hover:border-black/20 dark:hover:border-white/20
                         hover:text-black dark:hover:text-white
                         transition-all"
            >
              All work
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
