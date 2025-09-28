import React, { useState } from "react";
import Link from "next/link";
import BlogModal from "./blogmodal";
import Image from "next/image";
// import BlogModal from "./BlogModal";

const blogs = [
	{
		id: 1,
		title: "Building AI Agents with FastAPI & LangChain",
		date: "2025-08-15",
		image: "/blog/fastapi_langchain.png",
		stack: ["Next.js", "LangChain", "OpenAI"],
		content: `
      <p>Discover how to build powerful AI agents using FastAPI and LangChain. This guide covers architecture, deployment, and integration with OpenAI for real-world automation.</p>
      <ul>
        <li>Setting up FastAPI for scalable APIs</li>
        <li>Integrating LangChain for agent workflows</li>
        <li>Connecting to OpenAI for advanced reasoning</li>
      </ul>
    `,
		slug: "ai-agents-fastapi-langchain",
	},
	{
		id: 2,
		title: "Scaling SaaS Apps with Postgres & Docker",
		date: "2025-07-28",
		image: "/blog/saas-postgres-docker.png",
		stack: ["Postgres", "Docker", "Nest.js"],
		content: `
      <p>Learn best practices for scaling SaaS applications using Postgres and Docker. We discuss containerization, database optimization, and deployment strategies.</p>
      <ul>
        <li>Optimizing Postgres for multi-tenant SaaS</li>
        <li>Using Docker Compose for local dev</li>
        <li>CI/CD pipelines for rapid releases</li>
      </ul>
    `,
		slug: "scaling-saas-apps-postgres-docker",
	},
	{
		id: 3,
		title: "Design Systems for Fast Product Teams",
		date: "2025-06-10",
		image: "/blog/design-systems.png",
		stack: ["Figma", "Tailwind", "React"],
		content: `
      <p>How to create and maintain design systems that empower product teams to ship faster. Covers Figma workflows, Tailwind integration, and reusable React components.</p>
      <ul>
        <li>Atomic design principles</li>
        <li>Figma libraries for collaboration</li>
        <li>Tailwind for rapid prototyping</li>
      </ul>
    `,
		slug: "design-systems-fast-product-teams",
	},
	{
		id: 4,
		slug: "my-new-blog-post",
		title: "My New Blog Post",
		date: "2025-09-05",
		image: "/blog/my-new-blog.png",
		stack: ["React", "Next.js"],
		content: `
    <p>This is my new blog post. You can write content in HTML here.</p>
    <ul>
      <li>Point one</li>
      <li>Point two</li>
    </ul>
  `,
	},
];

export default function BlogsSection() {
	const [selectedBlog, setSelectedBlog] = useState<typeof blogs[0] | null>(null);

	return (
		<section id="blog" className="mx-auto max-w-7xl px-6 py-24">
			<h2 className="text-3xl md:text-5xl font-semibold mb-6">Blog</h2>
			<p className="text-white/70 max-w-2xl mb-12">
				Insights, guides, and engineering stories from the voidcore team.
			</p>
			<div className="grid gap-8 md:grid-cols-3">
				{blogs.map((blog) => (
					<div
						key={blog.id}
						className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition flex flex-col"
					>
									<div className="relative w-full h-40 mb-4">
										<Image
											src={blog.image}
											alt={blog.title}
											layout="fill"
											objectFit="cover"
											className="rounded-xl bg-black/10"
										/>
									</div>
						<h3 className="text-xl font-semibold mb-2 text-white">
							{blog.title}
						</h3>
						<div className="text-xs text-white/60 mb-3">{blog.date}</div>
						<div className="flex flex-wrap gap-2 mb-4">
							{blog.stack.map((tech) => (
								<span
									key={tech}
									className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium"
								>
									{tech}
								</span>
							))}
						</div>
						<div className="flex gap-3">
							<button
								onClick={() => setSelectedBlog(blog)}
								className="text-sm text-white/80 underline hover:text-white text-left"
							>
								Quick Preview
							</button>
							<Link
								href={`/blog/${blog.slug}`}
								className="text-sm text-blue-400 underline hover:text-blue-600"
							>
								Read Full →
							</Link>
						</div>
					</div>
				))}
			</div>
			<BlogModal
				open={!!selectedBlog}
				onClose={() => setSelectedBlog(null)}
				blog={selectedBlog}
			/>
		</section>
	);
}