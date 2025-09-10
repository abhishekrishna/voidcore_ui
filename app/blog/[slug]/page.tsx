"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";

const blogs = [
  {
    slug: "ai-agents-fastapi-langchain",
    title: "Building AI Agents with FastAPI & LangChain",
    date: "2025-08-15",
    image: "/blog/ai-agents-nextjs.png",
    stack: ["Next.js", "LangChain", "OpenAI"],
    content: `
      <p>Discover how to build powerful AI agents using FastAPI and LangChain. This guide covers architecture, deployment, and integration with OpenAI for real-world automation.</p>
      <ul>
        <li>Setting up FastAPI for scalable APIs</li>
        <li>Integrating LangChain for agent workflows</li>
        <li>Connecting to OpenAI for advanced reasoning</li>
      </ul>
    `,
  },
  {
    slug: "design-systems-fast-product-teams",
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

export default function BlogPage() {
  const { slug } = useParams(); // ✅ replaces router.query
  const router = useRouter();

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-24 text-white">
        <h1 className="text-2xl font-bold mb-4">Article not found</h1>
        <button
          onClick={() => router.back()}
          className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          ← Back
        </button>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        ← Back
      </button>
      <img
        src={blog.image}
        alt={blog.title}
        className="rounded-xl mb-6 w-full h-64 object-cover bg-black/10"
      />
      <h1 className="text-4xl font-bold text-white mb-2">{blog.title}</h1>
      <div className="text-xs text-white/60 mb-4">{blog.date}</div>
      <div className="flex flex-wrap gap-2 mb-6">
        {blog.stack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium"
          >
            {tech}
          </span>
        ))}
      </div>
      <div
        className="prose prose-invert text-white max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </main>
  );
}