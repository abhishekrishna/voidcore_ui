import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compile } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import rehypeShiki from "../rehypeShiki";
import { BlogMeta } from "../types";

const BLOG_DIR = path.join(process.cwd(), "content/blogs");

export async function getBlogBySlug(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const file = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(file);

  const mdxCompiled = await compile(content, {
    outputFormat: "function-body",
    development: false,
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeShiki,
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
    ],
  });

  const Component =
    new Function(String(mdxCompiled))(runtime).default;

  return {
    meta: { ...(data as BlogMeta), slug },
    Component,
  };
}