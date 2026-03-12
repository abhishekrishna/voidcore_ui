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
    title: "AI-powered internal systems for growing companies.",
    subtitle:
      "We design and build production-grade document intelligence, RAG platforms, and scalable backend architecture.",
  },
  {
    key: "document-intelligence",
    eyebrow: "Document Intelligence",
    title: "Turn complex documents into usable decisions.",
    subtitle:
      "Contracts, compliance files, reports, knowledge bases — processed, indexed, and transformed into structured insights with secure AI pipelines.",
  },
  {
    key: "saas-architecture",
    eyebrow: "SaaS & Platform Builds",
    title: "From MVP to scalable architecture.",
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

export default function HeroModern() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % variants.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const v = variants[active];

  return (
    <div className="relative min-h-screen w-full bg-white dark:bg-[#0B0B0F] text-black dark:text-white overflow-hidden transition-colors duration-300">
      <Navbar />

      {/* ── Ambient background ── */}
      {/* Radial glow — centre */}
      <div className="pointer-events-none absolute inset-0 
                      bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(0,0,0,0.06),transparent)]
                      dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(255,255,255,0.07),transparent)]" />
      {/* Fine grid */}
      <div className="pointer-events-none absolute inset-0 
                      bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)]
                      dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
                      bg-[size:48px_48px] opacity-60" />
      {/* Soft top-left orb */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] 
                      rounded-full bg-black/[0.03] dark:bg-white/[0.04] blur-3xl" />
      {/* Soft bottom-right orb */}
      <div className="pointer-events-none absolute bottom-0 right-0 h-[500px] w-[500px] 
                      rounded-full bg-black/[0.03] dark:bg-white/[0.03] blur-3xl" />

      {/* ── Hero Content ── */}
      <section className="relative mx-auto max-w-6xl px-6 pt-44 pb-32">

        {/* Eyebrow */}
        <motion.div
          key={v.key + "-eyebrow"}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mb-5"
        >
          <span className="inline-block text-[10px] uppercase tracking-[0.22em] font-medium
                           text-black/40 dark:text-white/40
                           border border-black/10 dark:border-white/10
                           bg-black/[0.03] dark:bg-white/[0.03]
                           px-3 py-1.5 rounded-full backdrop-blur-sm">
            {v.eyebrow}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          key={v.key + "-title"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-5xl md:text-[4.5rem] font-semibold leading-[1.08] tracking-tight max-w-4xl"
        >
          {v.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          key={v.key + "-subtitle"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
          className="mt-6 text-lg md:text-xl text-black/55 dark:text-white/55 max-w-2xl leading-relaxed"
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
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl 
                       bg-black dark:bg-white text-white dark:text-black 
                       text-sm font-semibold hover:opacity-80 transition-opacity
                       shadow-lg shadow-black/10 dark:shadow-black/40"
          >
            Start a project
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/abhishekrishna"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl 
                       border border-black/15 dark:border-white/15 
                       bg-black/[0.02] dark:bg-white/[0.02]
                       text-black/75 dark:text-white/75 text-sm font-medium 
                       hover:border-black/30 dark:hover:border-white/30 
                       hover:text-black dark:hover:text-white 
                       backdrop-blur-sm transition-all"
          >
            GitHub
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </motion.div>

        {/* ── Tech proof pills ── */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
          className="mt-20 flex flex-wrap gap-2.5"
        >
          {techPills.map((pill) => (
            <span
              key={pill}
              className="text-xs font-medium px-3.5 py-2 rounded-xl
                         border border-black/10 dark:border-white/10
                         bg-black/[0.03] dark:bg-white/[0.03]
                         text-black/50 dark:text-white/50
                         backdrop-blur-sm"
            >
              {pill}
            </span>
          ))}
        </motion.div>

        {/* ── Rotating indicator dots ── */}
        <div className="mt-12 flex items-center gap-2">
          {variants.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 bg-black dark:bg-white"
                  : "w-1.5 bg-black/20 dark:bg-white/20"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ── Sections ── */}
      <Work />
      <BlogsSection />
      <Services />
      <CareersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
