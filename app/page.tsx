'use client'
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitBranch} from "lucide-react";
import Pricing from "@/components/sections/pricing";
import Services from "@/components/sections/services";
import Work from "@/components/sections/work";
import ContactSection from '../components/sections/contact';
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import BlogsSection from "@/components/sections/blogs";



const variants = [
  {
    key: "build-ship-scale",
    eyebrow: "Void Core Technologies",
    title: (
      <>
        Build. Ship. <span className="text-white/90">Scale.</span>
      </>
    ),
    subtitle:
      "Developer-led studio for SaaS, AI agents, and web apps. Clean code, fast delivery, zero fluff.",
    bullets: ["MVPs in weeks", "AI-native workflows", "Production from day one"],ctas: [
      {
        label: "Get Started",
        href: "#contact",
        variant: "ghost",
        icon: "",
      },
    ],
  },
  {
    key: "clarity-velocity",
    eyebrow: "Developer-first studio",
    title: (
      <>
        Engineering clarity. <span className="text-white/90">Shipping velocity.</span>
      </>
    ),
    subtitle:
      "Next.js · Nest.js · FastAPI · Postgres · Docker — opinionated stack, boringly reliable.",
    bullets: ["Scalable architecture", "Transparent sprints", "No vendor lock-in"],ctas: [
      {
        label: "Try voidcore-cli",
        href: "https://github.com/abhishekrishna/voidcore_cli",
        variant: "ghost",
        icon: GitBranch,
      },
    ],
  },
  {
    key: "yaml-to-api",
    eyebrow: "Automation inside",
    title: (
      <>
        From <span className="text-white/90">YAML</span> to live APIs.
      </>
    ),
    subtitle:
      "Define your data once → get CRUD, auth, and docs auto-generated across stacks.",
    bullets: ["Any DB", "Any framework", "Typed SDKs"],ctas: [
      {
        label: "Try voidcore-cli",
        href: "https://github.com/abhishekrishna/voidcore_cli",
        variant: "ghost",
        icon: GitBranch,
      },
    ],
  },
  {
    key: "ai-native",
    eyebrow: "RAG + Agents",
    title: (
      <>
        AI‑native builds for <span className="text-white/90">real users.</span>
      </>
    ),
    subtitle:
      "RAG workflows, evaluators, and automations that move product metrics — not demos.",
    bullets: ["Eval‑driven", "Secure by design", "Analytics included"],
    ctas: [
      // {
      //   label: "Try voidcore-cli",
      //   href: "https://github.com/abhishekrishna/voidcore_cli",
      //   variant: "ghost",
      //   icon: GitBranch,
      // },
    ],
  },
  // {
  //   key: "minimal-maximal",
  //   eyebrow: "Design x Engineering",
  //   title: (
  //     <>
  //       Minimal design. <span className="text-white/90">Maximal impact.</span>
  //     </>
  //   ),
  //   subtitle:
  //     "Glassmorphic, gradient-rich UI with a performance budget and lighthouse >95.",
  //   bullets: ["Next.js + Tailwind", "Motion polish", "CDN + edge cache"],
  // },
  {
    key: "on-demand-team",
    eyebrow: "For founders",
    title: (
      <>
        Your startup’s <span className="text-white/90">on‑demand dev team.</span>
      </>
    ),
    subtitle:
      "Fixed-scope packs: Landing Page in 10 days, AI MVP in 30 — clear pricing, weekly demos.",
    bullets: ["Fixed scope", "Code ownership", "Post‑launch support"],ctas: [
      // {
      //   label: "Try voidcore-cli",
      //   href: "https://github.com/abhishekrishna/voidcore_cli",
      //   variant: "ghost",
      //   icon: GitBranch,
      // },
    ],
  },
  
];

export default function HeroShowcase() {
  const [active, setActive] = useState(variants[0].key);
  // const v = variants.find((x) => x.key === active)!;

  useEffect(() => {
    const idx = variants.findIndex((x) => x.key === active);
    const interval = setInterval(() => {
      const nextIdx = (idx + 1) % variants.length;
      setActive(variants[nextIdx].key);
    }, 6000);
    return () => clearInterval(interval);
  }, [active]);

  const v = variants.find((x) => x.key === active)!;

  return (
    <div className="min-h-screen w-full bg-[#0B0B0F] text-white relative overflow-hidden pt-[96px]">
      {/* Gradient / noise background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-fuchsia-500 via-cyan-400 to-indigo-500" />
        <div className="absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-25 bg-gradient-to-br from-emerald-400 via-sky-400 to-violet-500" />
        <div className="absolute inset-0 mix-blend-soft-light" style={{ backgroundImage: "radial-gradient(transparent 0, rgba(255,255,255,0.05) 1px)", backgroundSize: "24px 24px" }} />
      </div>

      {/* Top nav stub */}
      <Navbar/>
     

      {/* Variant switcher */}
      <div className="mx-auto max-w-7xl px-6 pt-10">
        <div className="mb-6 flex flex-wrap gap-2">
          {variants.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setActive(opt.key)}
              className={`rounded-2xl px-3 py-1.5 text-sm transition border ${
                active === opt.key
                  ? "bg-white/10 border-white/20"
                  : "bg-white/5 border-white/10 hover:bg-white/10"
              }`}
            >
              {opt.eyebrow}
            </button>
          ))}
        </div>
      </div>

      {/* Hero card */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-6">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12 shadow-2xl"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-white/70 mb-3">{v.eyebrow}</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-4">
            {v.title}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mb-8">{v.subtitle}</p>

          {/* Bullets */}
          <ul className="flex flex-wrap gap-3 mb-8">
            {v.bullets.map((b) => (
              <li key={b} className="text-sm text-white/80 rounded-full border border-white/15 bg-white/5 px-3 py-1.5">
                {b}
              </li>
            ))}
          </ul>

       {/* CTAs */}
        <div className="flex flex-wrap items-center gap-3">
          {v.ctas.map(({ label, href, variant, icon: Icon }) => {
            let styles = "";
            if (variant === "primary") {
              styles =
                "bg-white text-black font-medium shadow hover:opacity-90";
            } else if (variant === "secondary") {
              styles =
                "bg-white/10 border border-white/15 text-white hover:bg-white/15";
            } else if (variant === "ghost") {
              styles =
                "bg-transparent border border-white/15 text-white/80 hover:text-white hover:border-white/25";
            }

            return (
              <a
                key={label}
                href={href}
                className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 ${styles}`}
              >
                {label} {Icon && <Icon className="h-4 w-4" />}
              </a>
            );
          })}
        </div>
          {/* Social proof */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-white/60 text-xs">
            <div className="rounded-xl border border-white/10 p-3 text-center">Trusted by founders in BOM · DEL · SF</div>
            <div className="rounded-xl border border-white/10 p-3 text-center">MVPs in 2–4 weeks</div>
            <div className="rounded-xl border border-white/10 p-3 text-center">Ownership-friendly contracts</div>
            <div className="rounded-xl border border-white/10 p-3 text-center">Security & observability built‑in</div>
          </div>
        </motion.div>
      </section>
      <Work/>
      <BlogsSection/>
      <Services/>
      <Pricing/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
