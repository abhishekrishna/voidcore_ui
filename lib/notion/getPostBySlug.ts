import { notion } from "./client";

export async function getPostBySlug(slug: string) {
    console.log("Fetching post for blogid:", process.env.BLOG_INDEX_ID);
  const databaseId = process.env.BLOG_INDEX_ID!;

  const response = await notion.search({
    filter: {
      property: "object",
      value: "page",
    },
  });

  // Find matching page manually
  const page: any = response.results.find((page: any) => {
  const props = page.properties;
  if (!props?.Slug || !props?.Published) return false;

  const pageSlug = props.Slug.rich_text?.[0]?.plain_text;
  const published = props.Published.checkbox;

  console.log("Checking page:", page.id, pageSlug);

  return pageSlug === slug && published === true;
});

  if (!page) return null;

  const blocks = await notion.blocks.children.list({
    block_id: page.id,
    page_size: 100,
  });

  return {
    page,
    blocks: blocks.results,
  };
}