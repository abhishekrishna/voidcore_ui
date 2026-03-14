"use client";

import React, { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft, ArrowUpRight, AlertCircle,
  Target, Clock, Zap, TrendingUp, Users,
  BarChart2, CheckCircle, XCircle, ChevronDown,
} from "lucide-react";
import { projects } from "@/lib/work_data/work_data";


// ── Icon map ──────────────────────────────────────────────────────────────────

const ICONS: Record<string, React.ReactNode> = {
  Target:     <Target className="h-5 w-5" />,
  Clock:      <Clock className="h-5 w-5" />,
  Zap:        <Zap className="h-5 w-5" />,
  TrendingUp: <TrendingUp className="h-5 w-5" />,
  Users:      <Users className="h-5 w-5" />,
  BarChart2:  <BarChart2 className="h-5 w-5" />,
};

// ── Collapsible code block ────────────────────────────────────────────────────

function CollapsibleCode({ title, file, language, description, code }: {
  title: string; file: string; language: string; description: string; code: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl overflow-hidden border border-black/[0.07] dark:border-white/[0.07]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4
                   bg-black/[0.02] dark:bg-white/[0.02]
                   hover:bg-black/[0.04] dark:hover:bg-white/[0.04]
                   transition-colors duration-150 text-left"
      >
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-black/10 dark:bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-black/10 dark:bg-white/10" />
            <div className="w-2.5 h-2.5 rounded-full bg-black/10 dark:bg-white/10" />
          </div>
          <span className="text-xs font-medium text-black/60 dark:text-white/55">{title}</span>
          <span className="text-[10px] font-mono text-black/30 dark:text-white/30">{file}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.12em] text-black/25 dark:text-white/25">
            {language}
          </span>
          <ChevronDown
            className={`h-3.5 w-3.5 text-black/30 dark:text-white/30 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </div>
      </button>
      {open && (
        <>
          {description && (
            <p className="px-5 py-3 text-xs text-black/45 dark:text-white/40 leading-relaxed
                          border-b border-black/[0.05] dark:border-white/[0.05]
                          bg-black/[0.01] dark:bg-white/[0.01]">
              {description}
            </p>
          )}
          <div className="overflow-x-auto">
            <pre className="p-5 text-[12.5px] leading-[1.7] font-mono
                            text-black/75 dark:text-white/70
                            bg-black/[0.015] dark:bg-white/[0.015]">
              <code>{code}</code>
            </pre>
          </div>
        </>
      )}
    </div>
  );
}

// ── Section wrapper ───────────────────────────────────────────────────────────

function Section({ index, heading, children }: {
  index: string; heading: string; children: React.ReactNode;
}) {
  return (
    <div className="py-16 border-t border-black/[0.07] dark:border-white/[0.07]">
      <div className="grid md:grid-cols-[220px_1fr] gap-8 md:gap-16">
        <div className="pt-0.5">
          <p className="text-[10px] uppercase tracking-[0.18em] text-black/25 dark:text-white/25 mb-2">
            {index}
          </p>
          <h2 className="text-base font-semibold text-black dark:text-white leading-snug">
            {heading}
          </h2>
        </div>
        <div className="space-y-6">{children}</div>
      </div>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.id !== project.id).slice(0, 2);
  const dd = project.deepDive;

  return (
    <main className="min-h-screen bg-white dark:bg-[#0D0D12] text-black dark:text-white">

      {/* ── Breadcrumb ── */}
      <nav className="mx-auto max-w-4xl px-6 pt-10">
        <Link href="/#work"
          className="inline-flex items-center gap-1.5 text-xs
                     text-black/35 dark:text-white/35
                     hover:text-black dark:hover:text-white transition-colors">
          <ArrowLeft className="h-3 w-3" />
          Selected Work
        </Link>
      </nav>

      {/* ── Hero ── */}
      <section className="mx-auto max-w-4xl px-6 pt-12 pb-16">
        <div className="flex items-center gap-3 mb-7">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium
                           border border-black/10 dark:border-white/10
                           text-black/50 dark:text-white/50 rounded-full px-3 py-1">
            {project.tag}
          </span>
          <span className="text-[10px] uppercase tracking-[0.16em] text-black/30 dark:text-white/30">
            {project.year}
          </span>
        </div>
        <h1 className="text-[2.2rem] md:text-[3rem] font-semibold leading-[1.1]
                       tracking-[-0.03em] max-w-2xl mb-8">
          {project.title}
        </h1>
        <p className="text-base text-black/55 dark:text-white/50 leading-relaxed max-w-xl mb-10">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-x-10 gap-y-4 pb-10
                        border-b border-black/[0.07] dark:border-white/[0.07]">
          {[
            { label: "Year", value: project.year },
            { label: "Category", value: project.tag },
            { label: "Stack", value: project.techStack.slice(0, 3).join(", ") },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[10px] uppercase tracking-[0.14em]
                             text-black/30 dark:text-white/30 mb-1">{item.label}</p>
              <p className="text-sm font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Cover image ── */}
      <div className="mx-auto max-w-4xl px-6 mb-4">
        <div className="w-full h-64 md:h-[420px] rounded-2xl overflow-hidden
                        border border-black/[0.07] dark:border-white/[0.07]">
          <img src={project.image} alt={project.title}
            className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6">

        {/* ── Metrics with icons ── */}
        <div className="py-16 border-t border-black/[0.07] dark:border-white/[0.07]">
          <p className="text-[10px] uppercase tracking-[0.2em]
                         text-black/30 dark:text-white/30 mb-8">Key Results</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {project.metrics.map((m) => (
              <div key={m.label}
                className="p-5 rounded-2xl border border-black/[0.07] dark:border-white/[0.07]
                           bg-black/[0.02] dark:bg-white/[0.02]
                           hover:border-black/[0.13] dark:hover:border-white/[0.13]
                           transition-colors duration-200">
                {m.icon && (
                  <div className="text-black/25 dark:text-white/25 mb-3">
                    {ICONS[m.icon]}
                  </div>
                )}
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
        </div>

        {/* ── Challenge / Built / Results ── */}
        {[project.challenge, project.built, project.results].map((s, i) => (
          <Section key={i} index={`0${i + 1}`} heading={s.heading}>
            <p className="text-[0.95rem] text-black/60 dark:text-white/55 leading-[1.8]">
              {s.body}
            </p>
          </Section>
        ))}

        {dd && (
          <>
            {/* ── Before & After ── */}
            <Section index="04" heading={dd.beforeAfter.heading}>
              <div className="grid md:grid-cols-2 gap-3">
                {/* Before column */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-3">
                    <XCircle className="h-3.5 w-3.5 text-black/25 dark:text-white/25" />
                    <p className="text-[10px] uppercase tracking-[0.14em]
                                   text-black/35 dark:text-white/35 font-medium">Before</p>
                  </div>
                  {dd.beforeAfter.items.map((item, i) => (
                    <div key={i}
                      className="p-4 rounded-xl border border-black/[0.06] dark:border-white/[0.06]
                                 bg-black/[0.02] dark:bg-white/[0.02]">
                      <p className="text-xs text-black/50 dark:text-white/45 leading-relaxed">
                        {item.before}
                      </p>
                    </div>
                  ))}
                </div>
                {/* After column */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="h-3.5 w-3.5 text-black/50 dark:text-white/50" />
                    <p className="text-[10px] uppercase tracking-[0.14em]
                                   text-black/60 dark:text-white/60 font-medium">After</p>
                  </div>
                  {dd.beforeAfter.items.map((item, i) => (
                    <div key={i}
                      className="p-4 rounded-xl border border-black/[0.1] dark:border-white/[0.1]
                                 bg-black/[0.03] dark:bg-white/[0.03]">
                      <p className="text-xs text-black/65 dark:text-white/60 leading-relaxed">
                        {item.after}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Section>

            {/* ── Process Steps ── */}
            <Section index="05" heading={dd.processSteps.heading}>
              <p className="text-[0.95rem] text-black/60 dark:text-white/55 leading-[1.8]">
                {dd.processSteps.body}
              </p>
              <div className="space-y-0">
                {dd.processSteps.steps.map((step, i) => (
                  <div key={i} className="flex gap-5">
                    {/* Spine */}
                    <div className="flex flex-col items-center">
                      <div className="flex items-center justify-center
                                      w-7 h-7 rounded-full flex-shrink-0
                                      border border-black/[0.1] dark:border-white/[0.1]
                                      bg-white dark:bg-[#0D0D12]
                                      text-[11px] font-mono text-black/40 dark:text-white/40">
                        {i + 1}
                      </div>
                      {i < dd.processSteps.steps.length - 1 && (
                        <div className="w-px flex-1 bg-black/[0.07] dark:bg-white/[0.07] my-1" />
                      )}
                    </div>
                    {/* Content */}
                    <div className={`pb-8 ${i === dd.processSteps.steps.length - 1 ? "pb-0" : ""}`}>
                      <p className="text-sm font-semibold text-black dark:text-white mb-1.5 mt-1">
                        {step.title}
                      </p>
                      <p className="text-sm text-black/50 dark:text-white/45 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* ── Architecture ── */}
            <Section index="06" heading={dd.architecture.heading}>
              <p className="text-[0.95rem] text-black/60 dark:text-white/55 leading-[1.8]">
                {dd.architecture.body}
              </p>
              {/* Visual layer diagram */}
              <div className="space-y-2 pt-2">
                {dd.architecture.layers.map((layer, i) => (
                  <div key={layer.name}
                    className="relative flex gap-0 rounded-xl overflow-hidden
                               border border-black/[0.06] dark:border-white/[0.06]
                               hover:border-black/[0.12] dark:hover:border-white/[0.12]
                               transition-colors duration-200">
                    {/* Index bar */}
                    <div className="flex items-center justify-center w-10 flex-shrink-0
                                    bg-black/[0.03] dark:bg-white/[0.03]
                                    border-r border-black/[0.05] dark:border-white/[0.05]">
                      <span className="text-[10px] font-mono text-black/25 dark:text-white/25
                                       rotate-0">{i + 1}</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-start gap-1 p-4 flex-1">
                      <div className="md:w-48 flex-shrink-0">
                        <p className="text-xs font-semibold text-black dark:text-white mb-0.5">
                          {layer.name}
                        </p>
                        <p className="text-[11px] font-mono text-black/35 dark:text-white/30">
                          {layer.tech}
                        </p>
                      </div>
                      <p className="text-xs text-black/50 dark:text-white/45 leading-relaxed
                                    md:pl-4 md:border-l md:border-black/[0.05] md:dark:border-white/[0.05]">
                        {layer.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* ── Tech Stack Visual ── */}
            <Section index="07" heading="Tech Stack">
              <div className="space-y-5">
                {dd.techCategories.map((cat) => (
                  <div key={cat.category}>
                    <p className="text-[10px] uppercase tracking-[0.14em]
                                   text-black/30 dark:text-white/30 mb-2.5">
                      {cat.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <span key={item}
                          className="text-xs font-medium px-3 py-1.5 rounded-lg
                                     border border-black/[0.08] dark:border-white/[0.08]
                                     bg-black/[0.03] dark:bg-white/[0.03]
                                     text-black/60 dark:text-white/55">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* ── Approach ── */}
            <Section index="08" heading={dd.approach.heading}>
              <p className="text-[0.95rem] text-black/60 dark:text-white/55 leading-[1.8]">
                {dd.approach.body}
              </p>
              <div className="space-y-2 pt-1">
                <p className="text-[10px] uppercase tracking-[0.14em]
                               text-black/30 dark:text-white/30">
                  Alternatives considered & rejected
                </p>
                {dd.approach.rejected.map((r) => (
                  <div key={r.option}
                    className="flex gap-3 p-4 rounded-xl
                               border border-black/[0.06] dark:border-white/[0.06]
                               bg-black/[0.02] dark:bg-white/[0.02]">
                    <AlertCircle className="h-3.5 w-3.5 flex-shrink-0 mt-0.5
                                           text-black/20 dark:text-white/20" />
                    <div>
                      <p className="text-xs font-semibold text-black/70 dark:text-white/65 mb-1">
                        {r.option}
                      </p>
                      <p className="text-xs text-black/45 dark:text-white/40 leading-relaxed">
                        {r.reason}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* ── Code: Data Model ── */}
            <Section index="09" heading={dd.dataModel.heading}>
              <p className="text-[0.95rem] text-black/60 dark:text-white/55 leading-[1.8]">
                {dd.dataModel.body}
              </p>
              <CollapsibleCode {...dd.dataModel.code} />
            </Section>

            {/* ── Code: API Layer ── */}
            <Section index="10" heading={dd.apiLayer.heading}>
              <p className="text-[0.95rem] text-black/60 dark:text-white/55 leading-[1.8]">
                {dd.apiLayer.body}
              </p>
              <CollapsibleCode {...dd.apiLayer.code} />
            </Section>

            {/* ── Code: DB Functions ── */}
            <Section index="11" heading={dd.dbFunctions.heading}>
              <p className="text-[0.95rem] text-black/60 dark:text-white/55 leading-[1.8]">
                {dd.dbFunctions.body}
              </p>
              <CollapsibleCode {...dd.dbFunctions.code} />
            </Section>

            {/* ── Code: Frontend ── */}
            <Section index="12" heading={dd.frontendConnection.heading}>
              <p className="text-[0.95rem] text-black/60 dark:text-white/55 leading-[1.8]">
                {dd.frontendConnection.body}
              </p>
              <CollapsibleCode {...dd.frontendConnection.code} />
            </Section>

            {/* ── Lessons ── */}
            <Section index="13" heading={dd.lessons.heading}>
              <div className="grid sm:grid-cols-2 gap-3">
                {dd.lessons.items.map((item, i) => (
                  <div key={i}
                    className="p-5 rounded-xl border border-black/[0.06] dark:border-white/[0.06]
                               bg-black/[0.02] dark:bg-white/[0.02]">
                    <p className="text-xs font-semibold text-black dark:text-white mb-2">
                      {item.title}
                    </p>
                    <p className="text-xs text-black/55 dark:text-white/50 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </Section>
          </>
        )}

        {/* ── More work ── */}
        {others.length > 0 && (
          <div className="py-16 border-t border-black/[0.07] dark:border-white/[0.07]">
            <p className="text-[10px] uppercase tracking-[0.2em]
                           text-black/30 dark:text-white/30 mb-8">More Work</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {others.map((p) => (
                <Link key={p.id} href={`/work/${p.slug}`}
                  className="group flex flex-row h-[160px] rounded-2xl overflow-hidden
                             border border-black/[0.07] dark:border-white/[0.07]
                             hover:border-black/[0.15] dark:hover:border-white/[0.15]
                             transition-all duration-300">
                  <div className="relative w-[40%] flex-shrink-0 overflow-hidden">
                    <img src={p.image} alt={p.title}
                      className="absolute inset-0 w-full h-full object-cover object-top
                                 group-hover:scale-[1.05] transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col justify-between p-4 flex-1">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.14em]
                                     text-black/30 dark:text-white/30 mb-1.5">{p.tag}</p>
                      <h3 className="text-xs font-semibold leading-snug
                                     text-black dark:text-white line-clamp-2">{p.title}</h3>
                    </div>
                    <ArrowUpRight className="h-3.5 w-3.5 text-black/25 dark:text-white/25
                                            group-hover:text-black dark:group-hover:text-white
                                            transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ── CTA ── */}
        <div className="py-16 border-t border-black/[0.07] dark:border-white/[0.07]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em]
                             text-black/30 dark:text-white/30 mb-4">Start a project</p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight max-w-sm">
                Have something similar in mind?
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:flex-shrink-0">
              <Link href="/#contact"
                className="inline-flex items-center justify-center gap-2
                           px-5 py-2.5 rounded-xl bg-black dark:bg-white
                           text-white dark:text-black text-sm font-medium
                           hover:opacity-80 transition-opacity">
                Get in touch
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <Link href="/#work"
                className="inline-flex items-center justify-center
                           px-5 py-2.5 rounded-xl
                           border border-black/10 dark:border-white/10
                           text-sm font-medium text-black/55 dark:text-white/55
                           hover:border-black/20 dark:hover:border-white/20
                           hover:text-black dark:hover:text-white transition-all">
                All work
              </Link>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}