'use client';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import BlogsSection from "@/components/sections/blogs_card";
import ContactSection from "@/components/sections/contact";
import Services from "@/components/sections/services";
import Work from "@/components/sections/work";
import CareersSection from "@/components/careers";
import { ArrowUpRight } from "lucide-react";

const variants = [
  {
    key: "ai-systems",
    eyebrow: "AI Systems Engineering Studio",
    title: "AI-powered internal systems for",
    titleAccent: "growing companies.",
    subtitle:
      "We design and build production-grade document intelligence, RAG platforms, and scalable backend architecture.",
  },
  {
    key: "document-intelligence",
    eyebrow: "Document Intelligence",
    title: "Turn complex documents into",
    titleAccent: "usable decisions.",
    subtitle:
      "Contracts, compliance files, reports, knowledge bases — processed, indexed, and transformed into structured insights with secure AI pipelines.",
  },
  {
    key: "saas-architecture",
    eyebrow: "SaaS & Platform Builds",
    title: "From MVP to",
    titleAccent: "scalable architecture.",
    subtitle:
      "NestJS, FastAPI, microservices, vector databases, AWS — built for long-term scale, observability, and ownership.",
  },
];

const techPills = [
  "RAG & LangChain production deployments",
  "Microservices · gRPC · RabbitMQ · AWS · Docker",
  "Vector DBs · pgvector · NeonDB",
  "Full IP & code ownership",
];

const stats = [
  { num: "12+", label: "Production deployments" },
  { num: "RAG", label: "Core specialisation" },
  { num: "100%", label: "IP ownership, always" },
];

export default function HeroModern() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleSwitch((active + 1) % variants.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [active]);

  const handleSwitch = (i: number) => {
    if (i === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(i);
      setFading(false);
    }, 280);
  };

  const v = variants[active];

  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-[#0B0B0F] text-black dark:text-white overflow-hidden transition-colors duration-300">
      <Navbar />

      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,0,0,0.06),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(255,255,255,0.07),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-60" />
      <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-black/[0.03] dark:bg-white/[0.04] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-black/[0.03] dark:bg-white/[0.03] blur-3xl" />
      {/* Violet glow top-right */}
      <div
        className="pointer-events-none absolute -top-20 -right-20 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse at center, var(--vc-accent-glow), transparent)", }}
      />

      {/* Hero Content */}
      <section className="relative mx-auto max-w-6xl px-6 pt-44 pb-32">

        {/* Eyebrow */}
        {/* <motion.div
          key={v.key + "-eyebrow"}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mb-5"
        >
          <span
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] font-medium px-3 py-1.5 rounded-full backdrop-blur-sm border"
            style={{
              color: "rgba(124,111,205,0.9)",
              borderColor: "rgba(124,111,205,0.25)",
              background: "var(--vc-accent-bg)",
              transition: "opacity 0.28s",
              opacity: fading ? 0 : 1,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "var(--vc-accent)" }}
            />
            {v.eyebrow}
          </span>
        </motion.div> */}

        {/* Title */}
        <motion.h1
          key={v.key + "-title"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-5xl md:text-[4.5rem] font-semibold leading-[1.08] tracking-tight max-w-4xl"
          style={{
            transition: "opacity 0.28s ease, transform 0.28s ease",
            opacity: fading ? 0 : 1,
            transform: fading ? "translateY(8px)" : "translateY(0)",
          }}
        >
          {v.title}{" "}
          <span style={{ color: "#var(--vc-accent)" }}>{v.titleAccent}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          key={v.key + "-subtitle"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
          className="mt-6 text-lg md:text-xl color: var(--vc-ink2 max-w-2xl leading-relaxed"
          style={{
            transition: "opacity 0.28s ease",
            opacity: fading ? 0 : 1,
          }}
        >
          {v.subtitle}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.1 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity border border-color: var(--vc-border) bg-"
            style={{
              background: "#var(--vc-accent)",
              // boxShadow: "var(--vc-accent-sh)",
            }}
          >
            Start a project
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/abhishekrishna"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-black/15 dark:border-white/15 bg-black/[0.02] dark:bg-white/[0.02] text-black/75 dark:text-white/75 text-sm font-medium hover:border-black/30 dark:hover:border-white/30 hover:text-black dark:hover:text-white backdrop-blur-sm transition-all"
          >
            GitHub
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>

        {/* Tech proof pills */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          className="mt-20 flex flex-wrap gap-2.5"
        >
          {techPills.map((pill) => (
            <span
              key={pill}
              className="text-xs font-medium px-3.5 py-2 rounded-xl border border-color: var(--vc-border) bg-black/[0.03] dark:bg-white/[0.03] text-black/50 dark:text-white/50 backdrop-blur-sm"
            >
              {pill}
            </span>
          ))}
        </motion.div>

        {/* Rotating indicator dots */}
        <div className="mt-12 flex items-center gap-2">
          {variants.map((_, i) => (
            <button
              key={i}
              onClick={() => handleSwitch(i)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === active ? "24px" : "6px",
                background:
                  i === active
                    ? "#7C6FCD"
                    : "rgba(0,0,0,0.15)",
              }}
            />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div
        className="h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(124,111,205,0.15) 30%, rgba(124,111,205,0.35) 50%, rgba(124,111,205,0.15) 70%, transparent 100%)",
        }}
      />

      {/* Stats row — same max-w-6xl px-6 as hero so left edges align */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex border-b border-color: var(--vc-border)">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex-1 py-8"
              style={{
                paddingLeft: i === 0 ? "0" : "2.5rem",
                paddingRight: i === stats.length - 1 ? "0" : "2.5rem",
                borderRight:
                  i < stats.length - 1
                    ? "0.5px solid rgba(152, 163, 84, 0.15)"
                    : "none",
              }}
            >
              <div
                className="text-[28px] font-semibold tracking-tight"
                style={{ color: "#var(--vc-accent)" }}
              >
                {s.num}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.06em] text-black/40 dark:text-white/40">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sections */}
      <Work />
      <BlogsSection />
      <Services />
      <CareersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
