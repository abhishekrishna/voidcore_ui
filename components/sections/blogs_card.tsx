import React, { useState } from "react";
import Link from "next/link";
import BlogModal from "./blogmodal";
import Image from "next/image";
import { blogs } from "@/data/blogs";
// import BlogModal from "./BlogModal";



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