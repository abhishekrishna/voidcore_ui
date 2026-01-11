"use client";

import { notion } from "./client";

interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  description: string;
  cover?: string;
}

// Helper type for Notion properties
interface NotionProperty {
  title?: { plain_text: string }[];
  rich_text?: { plain_text: string }[];
  date?: { start: string };
  checkbox?: boolean;
  url?: string;
}

interface NotionPage {
  id: string;
  properties: {
    Title?: NotionProperty;
    Slug?: NotionProperty;
    Date?: NotionProperty;
    Description?: NotionProperty;
    Cover?: NotionProperty;
    Published?: NotionProperty;
    [key: string]: any;
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const response = await notion.search({
    filter: {
      property: "object",
      value: "page",
    },
  });

  const pages = (response.results as NotionPage[]).filter((page) => {
    const props = page.properties;
    return props?.Published?.checkbox === true;
  });

  return pages.map((page) => {
    const props = page.properties;

    return {
      id: page.id,
      title: props.Title?.title?.[0]?.plain_text || "Untitled",
      slug: props.Slug?.rich_text?.[0]?.plain_text || "",
      date: props.Date?.date?.start || "",
      description: props.Description?.rich_text?.[0]?.plain_text || "",
      cover: props.Cover?.url || "",
    };
  });
}