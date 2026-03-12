import React from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Document Intelligence Platform",
    description:
      "Built a production-grade RAG system to process large PDF datasets, extract structured insights, and generate strategic summaries using FastAPI, LangChain, and pgvector.",
    image: "edu_proj.webp",
    tag: "AI / RAG",
  },
  {
    id: 2,
    title: "Enterprise GPT Knowledge Assistant",
    description:
      "Designed and deployed a secure document-aware chatbot with vector search, embeddings, and context-aware responses for internal knowledge workflows.",
    image: "aichat_proj.webp",
    tag: "LLM / Search",
  },
  {
    id: 3,
    title: "Subscription Streaming Platform",
    description:
      "Architected a scalable mobile streaming system with secure content delivery, JWT authentication, and microservices deployed on AWS.",
    image: "apan_theater.png",
    tag: "SaaS / AWS",
  },
  {
    id: 4,
    title: "Automated Report Generation System",
    description:
      "Developed a backend-driven analytics and automated report generation platform with structured outputs and real-time data processing.",
    image: "care_con.webp",
    tag: "Automation",
  },
];

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

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative rounded-2xl border border-black/10 dark:border-white/10
                       bg-black/[0.03] dark:bg-white/[0.03] backdrop-blur-xl
                       hover:bg-black/[0.07] dark:hover:bg-white/[0.07]
                       hover:border-black/20 dark:hover:border-white/20
                       hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20
                       transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
              <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.18em] font-medium
                               text-white/80 border border-white/20 bg-black/30
                               px-2.5 py-1 rounded-full backdrop-blur-sm">
                {project.tag}
              </span>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-lg font-semibold mb-2 leading-snug">{project.title}</h3>
              <p className="text-sm text-black/55 dark:text-white/55 leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-1.5 text-xs font-medium
                           text-black/40 dark:text-white/40
                           group-hover:text-black/70 dark:group-hover:text-white/70
                           transition-colors duration-200"
              >
                View case study
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
