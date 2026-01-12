import NotionPageRenderer from "@/components/notion/notion_renderer";
import { getPostBySlug } from "@/lib/notion/getPostBySlug";


export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await getPostBySlug((await params).slug);

  if (!post) {
    return <div className="text-center py-24">Blog not found</div>;
  }

  const title =
    post.page.properties.Title.title[0]?.plain_text || "Untitled";

  const date =
    post.page.properties.Date?.date?.start || "";

  return (
    <div className="max-w-3xl mx-auto py-24 px-6">
      <h1 className="text-4xl font-bold mb-2 text-black dark:text-white">
        {title}
      </h1>

      {date && (
        <p className="opacity-60 mb-8 text-black dark:text-white">
          {date}
        </p>
      )}

      {/* Notion content */}
      <div className="mb-8 bg-white dark:bg-[#22] p-6 rounded-lg shadow">
        <NotionPageRenderer recordMap={post.recordMap} />
      </div>
    </div>
  );
}