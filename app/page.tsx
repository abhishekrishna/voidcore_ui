'use client';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import BlogsSection from "@/components/sections/blogs_card";
import ContactSection from "@/components/sections/contact";
// import Pricing from "@/components/sections/pricing";
import Services from "@/components/sections/services";
import Work from "@/components/sections/work";
import CareersSection from "@/components/careers";


// Vercel‑style minimal rotating variants
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
    <div className="relative min-h-screen w-full bg-white dark:bg-black text-black dark:text-white overflow-hidden transition-colors duration-300">
      <Navbar />

      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.08)_dark:rgba(255,255,255,0.08),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)] opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_0,rgba(0,0,0,0.03)_dark:rgba(255,255,255,0.03)_1px),linear-gradient(90deg,transparent_0,rgba(0,0,0,0.03)_dark:rgba(255,255,255,0.03)_1px)] dark:bg-[linear-gradient(transparent_0,rgba(255,255,255,0.03)_1px),linear-gradient(90deg,transparent_0,rgba(255,255,255,0.03)_1px)] bg-[size:48px_48px] opacity-20" />

      {/* Content */}
      <section className="relative mx-auto max-w-6xl px-6 pt-40 pb-32">
        {/* Eyebrow */}
        <motion.p
          key={v.key + "-eyebrow"}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="text-sm uppercase tracking-[0.2em] text-black/50 dark:text-white/50 mb-4"
        >
          {v.eyebrow}
        </motion.p>

        {/* Title */}
        <motion.h1
          key={v.key + "-title"}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-semibold leading-[1.1] max-w-4xl"
        >
          {v.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          key={v.key + "-subtitle"}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
          className="mt-6 text-xl md:text-2xl text-black/60 dark:text-white/60 max-w-3xl"
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
            className="px-6 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:opacity-90 dark:hover:opacity-90 transition"
          >
            Start a project
          </a>
          <a
            href="https://github.com/abhishekrishna"
            target="_blank"
            className="px-6 py-3 rounded-xl border border-black/20 dark:border-white/20 text-black/80 dark:text-white/80 text-sm hover:border-black/40 dark:hover:border-white/40 hover:text-black dark:hover:text-white transition"
          >
            GitHub
          </a>
        </motion.div>

        {/* Minimal social proof */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-black/40 dark:text-white/40 text-sm">
      <div>RAG & LangChain production deployments</div>
      <div>Microservices architecture (gRPC · RabbitMQ · AWS · Docker)</div>
      <div>Vector DBs (pgvector · NeonDB)</div>
      <div>Full IP & code ownership</div>
      </div>
      </section>
      <Work/>
      <BlogsSection/>
      <Services/>
      <CareersSection/>
      {/* <Pricing/> */}
      <ContactSection/>
      <Footer/>
    </div>
  );
}
