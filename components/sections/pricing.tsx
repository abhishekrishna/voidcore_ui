import { ArrowUpRight } from "lucide-react";

const packs = [
  {
    name: "Landing Page",
    price: "$1.5k",
    desc: "Pixel-perfect site delivered in 10 days.",
    features: ["Next.js + Tailwind", "Mobile responsive", "SEO ready", "10-day delivery"],
  },
  {
    name: "AI MVP",
    price: "$6k",
    desc: "From idea → AI-enabled product in 30 days.",
    features: ["RAG / LLM integration", "Auth + API backend", "Admin dashboard", "30-day delivery"],
    featured: true,
  },
  {
    name: "Full SaaS Build",
    price: "$12k",
    desc: "Production-ready SaaS with auth, billing, and dashboards.",
    features: ["Multi-tenant architecture", "Stripe billing", "Observability + CI/CD", "Full IP ownership"],
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mb-3">
            Fixed scope
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold">Pricing</h2>
        </div>
        <p className="color: var(--vc-ink2 max-w-sm text-sm leading-relaxed">
          Transparent, fixed-scope packs designed to match founder speed.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {packs.map((pack) => (
          <div
            key={pack.name}
            className={`group relative rounded-2xl border backdrop-blur-xl p-7 flex flex-col
              transition-all duration-300
              hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30
              ${pack.featured
                ? "border-black/20 dark:border-white/20 bg-black/[0.06] dark:bg-white/[0.06] hover:bg-black/[0.09] dark:hover:bg-white/[0.09]"
                : "border-color: var(--vc-border) bg-black/[0.03] dark:bg-white/[0.03] hover:bg-black/[0.07] dark:hover:bg-white/[0.07] hover:border-black/20 dark:hover:border-white/20"
              }`}
          >
            {pack.featured && (
              <span className="absolute -top-3 left-6 text-[10px] uppercase tracking-[0.18em] font-medium
                               bg-black dark:bg-white text-white dark:text-black
                               px-3 py-1 rounded-full">
                Most popular
              </span>
            )}

            <div className="mb-6">
              <p className="text-[10px] uppercase tracking-[0.18em] text-black/40 dark:text-white/40 mb-3">
                {pack.name}
              </p>
              <p className="text-4xl font-semibold tracking-tight mb-2">{pack.price}</p>
              <p className="text-sm color: var(--vc-ink2 leading-relaxed">{pack.desc}</p>
            </div>

            <ul className="space-y-2.5 mb-8 flex-1">
              {pack.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 text-sm text-black/70 dark:text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-black/30 dark:bg-white/30 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`inline-flex items-center justify-center gap-2 w-full
                         rounded-xl text-sm font-semibold px-5 py-3.5
                         transition-opacity hover:opacity-80
                         ${pack.featured
                           ? "bg-black dark:bg-white text-white dark:text-black shadow-lg shadow-black/10 dark:shadow-black/30"
                           : "border border-color: var(--vc-border) text-black/75 dark:text-white/75 hover:border-black/25 dark:hover:border-white/25"
                         }`}
            >
              Start with {pack.name}
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
