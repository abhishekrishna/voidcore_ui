import { blogs } from "@/data/blogs";

export async function generateStaticParams() {
  return blogs.map((b) => ({
    slug: b.slug,
  }));
}