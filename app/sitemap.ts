import { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/notion/getAllPosts";
import { solutions } from "@/lib/solution";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: "https://voidcore.in",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `https://voidcore.in/blog/${post.slug}`,
    lastModified: new Date(post.date), // ✅ REAL last edit time from Notion
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const solutionPages: MetadataRoute.Sitemap = solutions.map((s) => ({
    url: `https://voidcore.in/solutions/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages];
}