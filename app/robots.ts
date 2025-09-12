import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/", // allow Google to crawl everything
      },
    ],
    sitemap: "https://voidcore.in/sitemap.xml",
  };
}