import React from "react";

const projects = [
  {
    id: 1,
    title: "AI Document Intelligence Platform",
    description:
      "Built a production-grade RAG system to process large PDF datasets, extract structured insights, and generate strategic summaries using FastAPI, LangChain, and pgvector.",
    image: "edu_proj.webp",
  },
  {
    id: 2,
    title: "Enterprise GPT Knowledge Assistant",
    description:
      "Designed and deployed a secure document-aware chatbot with vector search, embeddings, and context-aware responses for internal knowledge workflows.",
    image: "aichat_proj.webp",
  },
  {
    id: 3,
    title: "Subscription Streaming Platform",
    description:
      "Architected a scalable mobile streaming system with secure content delivery, JWT authentication, and microservices deployed on AWS.",
    image: "apan_theater.png",
  },
  {
    id: 4,
    title: "Automated Report Generation System",
    description:
      "Developed a backend-driven analytics and automated report generation platform with structured outputs and real-time data processing.",
    image: "care_con.webp",
  },
];

export default function WorkSection() {
	return (
		<section id="work" className="mx-auto max-w-7xl px-6 py-24">
			<h2 className="text-3xl md:text-5xl font-semibold mb-6">
				Selected Work
			</h2>
			<p className="text-black/70 dark:text-white/70 max-w-2xl mb-12">
				Projects we’ve built with clarity, speed, and reliability for startups
				and teams worldwide.
			</p>
			<div className="grid gap-6 md:grid-cols-2">
				{projects.map((project) => (
					<div
						key={project.id}
						className="rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-xl p-6 hover:bg-black/10 dark:hover:bg-white/10 transition flex flex-col"
					>
						<img
							src={project.image}
							alt={project.title}
							className="rounded-xl mb-4 w-full h-48 object-cover bg-black/10"
						/>
						<h3 className="text-xl font-medium mb-2">{project.title}</h3>
					<p className="text-black/70 dark:text-white/70 mb-4">{project.description}</p>
					<a
						href="#"
						className="text-sm text-black/80 dark:text-white/80 underline hover:text-black dark:hover:text-white"
						>
							View case study →
						</a>
					</div>
				))}
			</div>
		</section>
	);
}