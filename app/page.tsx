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


// Vercel‑style minimal rotating variants
const variants = [
  {
    key: "build-ship-scale",
    eyebrow: "Void Core Technologies",
    title: "Build. Ship. Scale.",
    subtitle:
      "Developer-led studio for SaaS, AI agents, and enterprise-grade web apps.",
  },
  {
    key: "ai-native",
    eyebrow: "AI-native builds",
    title: "RAG + Agents that move metrics.",
    subtitle:
      "Eval-driven, secure-by-design automations — not demo‑ware.",
  },
  {
    key: "founder-packages",
    eyebrow: "For founders",
    title: "Your on-demand engineering team.",
    subtitle:
      "Fixed-scope packs · Landing Page in 10 days · AI MVP in 30.",
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
    <div className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      <Navbar />

      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)] opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_0,rgba(255,255,255,0.03)_1px),linear-gradient(90deg,transparent_0,rgba(255,255,255,0.03)_1px)] bg-[size:48px_48px] opacity-20" />

      {/* Content */}
      <section className="relative mx-auto max-w-6xl px-6 pt-40 pb-32">
        {/* Eyebrow */}
        <motion.p
          key={v.key + "-eyebrow"}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="text-sm uppercase tracking-[0.2em] text-white/50 mb-4"
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
          className="mt-6 text-xl md:text-2xl text-white/60 max-w-3xl"
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
            className="px-6 py-3 rounded-xl bg-white text-black text-sm font-medium hover:bg-white/90 transition"
          >
            Start a project
          </a>
          <a
            href="https://github.com/abhishekrishna"
            target="_blank"
            className="px-6 py-3 rounded-xl border border-white/20 text-white/80 text-sm hover:border-white/40 hover:text-white transition"
          >
            GitHub
          </a>
        </motion.div>

        {/* Minimal social proof */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-white/40 text-sm">
          <div>Trusted by founders in BOM · DEL · SF</div>
          <div>MVPs delivered in 2–4 weeks</div>
          <div>Full code ownership</div>
          <div>Secure & observable by design</div>
        </div>
      </section>
      <Work/>
      <BlogsSection/>
      <Services/>
      {/* <Pricing/> */}
      <ContactSection/>
      <Footer/>
    </div>
  );
}
