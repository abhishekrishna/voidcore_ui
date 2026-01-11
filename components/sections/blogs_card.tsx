"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import BlogModal from "./blogmodal";
import Image from "next/image";

type Blog = {
  id: string;
  title: string;
  slug: string;
  date: string;
  description: string;
  cover: string;
};

export default function BlogsSection() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load blogs", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section id="blog" className="mx-auto max-w-7xl px-6 py-24">
        <p className="text-white/60">Loading blogs...</p>
      </section>
    );
  }

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
                src={blog.cover}
                alt={blog.title}
                fill
                className="rounded-xl bg-black/10 object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold mb-2 text-white">
              {blog.title}
            </h3>

            <div className="text-xs text-white/60 mb-3">{blog.date}</div>

            <p className="text-sm text-white/70 mb-4 line-clamp-3">
              {blog.description}
            </p>

            <div className="flex gap-3 mt-auto">
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
        blog={selectedBlog as any}
      />
    </section>
  );
}