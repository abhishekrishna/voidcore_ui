import React from "react";

const services = [
  {
    name: "MVP Development",
    description: "Rapid prototyping and launch of your Minimum Viable Product using modern stacks and best practices.",
  },
  {
    name: "AI Agents & RAG",
    description: "Custom AI agents and Retrieval-Augmented Generation workflows for automation and intelligent data handling.",
  },
  {
    name: "Web & SaaS Apps",
    description: "Full-stack web and SaaS application development with scalable architecture and secure authentication.",
  },
  {
    name: "Mobile Apps",
    description: "Cross-platform mobile app development for iOS and Android with seamless user experience.",
  },
  {
    name: "DevOps & Infra",
    description: "Cloud infrastructure setup, CI/CD pipelines, and DevOps automation for reliable deployments.",
  },
  {
    name: "Design Systems",
    description: "Design system creation for consistent UI/UX, reusable components, and brand alignment.",
  },
];

/* Services Section */

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="text-3xl md:text-5xl font-semibold mb-6">Services</h2>
      <p className="text-white/70 max-w-2xl mb-12">
        From MVPs to AI-native platforms — tailored packs designed for founders and teams.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((srv) => (
          <div key={srv.name} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition">
            <h3 className="text-xl font-medium mb-2">{srv.name}</h3>
            <p className="text-white/70 text-sm">{srv.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}