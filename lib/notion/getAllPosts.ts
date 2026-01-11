import { notion } from "./client";

export async function getAllPosts() {
  const response = await notion.search({
    filter: {
      property: "object",
      value: "page",
    },
  });

  const pages = response.results.filter((page: any) => {
    const props = page.properties;
    if (!props?.Published) return false;
    return props.Published.checkbox === true;
  });

  return pages.map((page: any) => {
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