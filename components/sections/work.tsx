"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/work_data";


export default function WorkSection() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mb-3">
            Case studies
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold">Selected Work</h2>
        </div>
        <p className="text-black/55 dark:text-white/55 max-w-sm text-sm leading-relaxed">
          Projects built with clarity, speed, and reliability for startups and teams worldwide.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 items-start">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={`/work/${project.slug}`}
            className="group flex flex-row h-[200px] rounded-2xl overflow-hidden
                       border border-black/10 dark:border-white/10
                       bg-black/[0.03] dark:bg-white/[0.03]
                       hover:border-black/20 dark:hover:border-white/20
                       hover:bg-black/[0.06] dark:hover:bg-white/[0.06]
                       hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20
                       transition-all duration-300"
          >
            {/* Image — fixed width, clips portrait images naturally */}
            <div className="relative w-[42%] flex-shrink-0 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover object-top
                           group-hover:scale-[1.05] transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 dark:to-black/30" />
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-5 justify-between min-w-0 overflow-hidden">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] uppercase tracking-[0.16em] font-medium
                                   text-black/40 dark:text-white/40">
                    {project.tag}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-black/20 dark:bg-white/20 flex-shrink-0" />
                  <span className="text-[10px] uppercase tracking-[0.16em]
                                   text-black/30 dark:text-white/30">
                    {project.year}
                  </span>
                </div>

                <h3 className="text-sm font-semibold leading-snug mb-2
                               text-black dark:text-white line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-xs text-black/50 dark:text-white/45 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4
                              border-t border-black/[0.06] dark:border-white/[0.06]">
                <span className="text-[11px] font-medium text-black/35 dark:text-white/35
                                 group-hover:text-black/70 dark:group-hover:text-white/70
                                 transition-colors duration-200">
                  View case study
                </span>
                <ArrowUpRight
                  className="h-3.5 w-3.5 flex-shrink-0
                             text-black/20 dark:text-white/20
                             group-hover:text-black dark:group-hover:text-white
                             transition-colors duration-200"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
