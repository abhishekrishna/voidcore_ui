import { notion } from "./client";
import { NotionAPI } from "notion-client";

const notionX = new NotionAPI({
  apiBaseUrl: "https://app.notion.com/api/v3"
});

export async function getPostBySlug(slug: string) {
  // const databaseId = process.env.BLOG_INDEX_ID!;

  const response = await notion.search({
    filter: {
      property: "object",
      value: "page",
    },
  });

  const page: any = response.results.find((page: any) => {
    const props = page.properties;
    if (!props?.Slug || !props?.Published) return false;

    const pageSlug = props.Slug.rich_text[0]?.plain_text;
    const published = props.Published.checkbox;

    return pageSlug === slug && published === true;
  });

  if (!page) return null;

  const recordMap = await notionX.getPage(page.id);

  return {
    page,
    recordMap,
  };
}