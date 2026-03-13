"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import BlogModal from "./blogmodal";

type Blog = {
  id: string;
  title: string;
  slug: string;
  date: string;
  description: string;
  cover: string;
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

export default function BlogsSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseUrl}/api/blogs`)
      .then((res) => res.json())
      .then((data) => { setBlogs(data); setLoading(false); })
      .catch((err) => { console.error("Failed to load blogs", err); setLoading(false); });
  }, []);

  return (
    <section id="blog" className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mb-3">
            Writing
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold">Blog</h2>
        </div>
        <p className="text-black/55 dark:text-white/55 max-w-sm text-sm leading-relaxed">
          Technical deep dives on AI systems, scalable architecture, and production engineering.
        </p>
      </div>

      {loading ? (
        <div className="grid gap-4 md:grid-cols-3">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-black/10 dark:border-white/10
                         bg-black/[0.03] dark:bg-white/[0.03] h-80 animate-pulse"
            />
          ))}
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group rounded-2xl border border-black/10 dark:border-white/10
                         bg-black/[0.03] dark:bg-white/[0.03] backdrop-blur-xl
                         hover:bg-black/[0.07] dark:hover:bg-white/[0.07]
                         hover:border-black/20 dark:hover:border-white/20
                         hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20
                         transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Cover */}
              <div className="relative w-full h-44 overflow-hidden">
                <Image
                  src={blog.cover}
                  alt={blog.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-[10px] uppercase tracking-[0.18em] text-black/40 dark:text-white/40 mb-3">
                  {blog.date}
                </p>

                <h3 className="text-base font-semibold leading-snug mb-3
                               text-black dark:text-white line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-sm text-black/55 dark:text-white/55 leading-relaxed line-clamp-3 mb-6">
                  {blog.description}
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <button
                    onClick={() => setSelectedBlog(blog)}
                    className="text-xs font-medium text-black/40 dark:text-white/40
                               hover:text-black dark:hover:text-white
                               border border-black/10 dark:border-white/10
                               px-3 py-1.5 rounded-lg
                               hover:border-black/20 dark:hover:border-white/20
                               transition-all"
                  >
                    Quick preview
                  </button>
                  <Link
                    href={`/blog/${blog.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-medium
                               text-black/70 dark:text-white/70
                               hover:text-black dark:hover:text-white
                               transition-colors ml-auto"
                  >
                    Read full
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <BlogModal
        open={!!selectedBlog}
        onClose={() => setSelectedBlog(null)}
        blog={selectedBlog ? {
          title: selectedBlog.title,
          date: selectedBlog.date,
          cover: selectedBlog.cover,
          description: selectedBlog.description,
        } : null}
      />
    </section>
  );
}