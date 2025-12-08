import fs from "fs";
import path from "path";
import { serialize } from "next-mdx-remote/serialize";
import MDXClientWrapper from "@/components/mdx-client";
import { blogs } from "@/data/blogs";

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params; // required

  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return <div>Blog not found</div>;

  const filePath = path.join(process.cwd(), "app/content/blogs", blog.file);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const mdxSource = await serialize(fileContent);

  return (
    <div className="prose-invert max-w-3xl mx-auto py-24 px-6">
      <h1>{blog.title}</h1>
      <p className="opacity-60">{blog.date}</p>

      <MDXClientWrapper source={mdxSource} />
    </div>
  );
}