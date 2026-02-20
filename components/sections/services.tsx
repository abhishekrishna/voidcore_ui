import React from "react";

const services = [
  {
    name: "AI Document Intelligence Systems",
    description:
      "Design and deployment of production-grade RAG platforms that process contracts, reports, compliance documents, and internal knowledge bases using secure vector pipelines.",
  },
  {
    name: "SaaS Platform Architecture",
    description:
      "End-to-end backend and full-stack engineering for scalable SaaS products using NestJS, FastAPI, microservices, and cloud-native infrastructure.",
  },
  {
    name: "Internal Workflow Automation",
    description:
      "Custom internal tools and AI-powered dashboards that reduce manual processes, centralize data, and improve operational visibility.",
  },
];
/* Services Section */

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="text-3xl md:text-5xl font-semibold mb-6">Services</h2>
      <p className="text-black/70 dark:text-white/70 max-w-2xl mb-12">
        From MVPs to AI-native platforms — tailored packs designed for founders and teams.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((srv) => (
          <div key={srv.name} className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-xl p-6 hover:bg-black/10 dark:hover:bg-white/10 transition">
            <h3 className="text-xl font-medium mb-2">{srv.name}</h3>
            <p className="text-black/70 dark:text-white/70 text-sm">{srv.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}