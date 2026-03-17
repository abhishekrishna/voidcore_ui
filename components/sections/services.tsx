import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { solutions } from "@/lib/solution";


export default function ServicesSection() {
  return (
    <section id="solutions" className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mb-3">
            What we build
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold">Solutions</h2>
        </div>
        <p className="text-black/60 dark:text-white/60 max-w-sm text-sm leading-relaxed">
          From MVPs to AI-native platforms — tailored packs designed for founders and teams.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {solutions.map((srv) => (
          <Link
            key={srv.slug}
            href={`/solutions/${srv.slug}`}
            className="group relative rounded-2xl border border-color: var(--vc-border)
                       bg-black/[0.03] dark:bg-white/[0.03] backdrop-blur-xl p-7
                       hover:bg-black/[0.07] dark:hover:bg-white/[0.07]
                       hover:border-black/20 dark:hover:border-white/20
                       hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/30
                       transition-all duration-300 cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                            bg-gradient-to-br from-white/5 to-transparent rounded-2xl pointer-events-none" />

            <div className="flex items-start justify-between mb-5">
              <span className="text-[10px] uppercase tracking-[0.18em] font-medium
                               text-black/40 dark:text-white/40
                               border border-color: var(--vc-border)
                               px-2.5 py-1 rounded-full">
                {srv.tag}
              </span>
              <ArrowUpRight className="h-4 w-4 text-black/20 dark:text-white/20
                                       group-hover:text-black/60 dark:group-hover:text-white/60
                                       group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                                       transition-all duration-200" />
            </div>

            <h3 className="text-lg font-medium mb-3 leading-snug">{srv.title}</h3>
            <p className="text-black/60 dark:text-white/60 text-sm leading-relaxed">
              {srv.description}
            </p>

            <div className="mt-6 flex items-center gap-1.5 text-xs font-medium
                            text-black/40 dark:text-white/40
                            group-hover:text-black/70 dark:group-hover:text-white/70
                            transition-colors duration-200">
              <span>View solution</span>
              <ArrowUpRight className="h-3 w-3" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}