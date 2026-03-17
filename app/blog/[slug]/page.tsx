import BackButton from "@/components/back_button";
import NotionPageRenderer from "@/components/notion/notion_renderer";
import { getPostBySlug } from "@/lib/notion/getPostBySlug";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "" };

  const title = post.page.properties.Title.title[0]?.plain_text || "Untitled";
  const description = post.page.properties.Description?.rich_text?.[0]?.plain_text || "No description available";
  const cover = post.page.cover?.external?.url || post.page.cover?.file?.url || "";

  return {
    title: `${title} | Voidcore`,
    description,
    openGraph: { title, description, images: [cover], type: "article" },
    twitter: { card: "summary_large_image", title, description, images: [cover] },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await getPostBySlug((await params).slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0B0B0F] flex items-center justify-center">
        <p className="text-black/40 dark:text-white/40 text-sm">Post not found.</p>
      </div>
    );
  }

  const title = post.page.properties.Title.title[0]?.plain_text || "Untitled";
  const date = post.page.properties.Date?.date?.start || "";
  const description = post.page.properties.Description?.rich_text?.[0]?.plain_text || "";
  const cover = post.page.cover?.external?.url || post.page.cover?.file?.url || "";

  return (
    <main className="min-h-screen bg-white dark:bg-[#0B0B0F] text-black dark:text-white transition-colors duration-200 overflow-hidden">

      {/* ── Ambient background ── */}
      <div className="pointer-events-none fixed inset-0
                      bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(0,0,0,0.04),transparent)]
                      dark:bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(255,255,255,0.05),transparent)]" />
      <div className="pointer-events-none fixed inset-0
                      bg-[linear-gradient(rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)]
                      dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]
                      bg-[size:64px_64px] opacity-50" />

      {/* ── Cover image ── */}
      {cover && (
        <div className="relative w-full h-64 md:h-[420px] overflow-hidden">
          <img src={cover} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-[#0B0B0F]" />
        </div>
      )}

      <div className="relative mx-auto max-w-7xl px-6">
        <div className={`max-w-3xl mx-auto ${cover ? "-mt-16 relative z-10" : "pt-36"}`}>

          {/* Back button */}
          <div className="mb-10">
            <BackButton />
          </div>

          {/* Meta */}
          {date && (
            <p className="text-[10px] uppercase tracking-[0.22em] text-black/35 dark:text-white/35 mb-5">
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          )}

          <h1 className="text-4xl md:text-[3.25rem] font-semibold leading-[1.08] tracking-tight mb-6">
            {title}
          </h1>

          {description && (
            <p className="text-lg color: var(--vc-ink2 leading-relaxed mb-10 max-w-2xl">
              {description}
            </p>
          )}

          <div className="border-t border-color: var(--vc-border) mb-14" />
        </div>

        {/* ── Article body ── */}
        <div className="max-w-3xl mx-auto pb-32">
          <div className="rounded-2xl border border-color: var(--vc-border)
                          bg-white dark:bg-[#111113]
                          p-8 md:p-12
                          shadow-xl shadow-black/5 dark:shadow-black/30
                          [&_*]:text-black dark:[&_*]:text-white
                          [&_p]:text-black/80 dark:[&_p]:text-white/80
                          [&_p]:text-sm [&_p]:leading-[1.9] [&_p]:mb-5
                          [&_h1]:text-2xl [&_h1]:font-semibold [&_h1]:mt-10 [&_h1]:mb-4 [&_h1]:tracking-tight
                          [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:tracking-tight
                          [&_h3]:text-base [&_h3]:font-semibold [&_h3]:mt-8 [&_h3]:mb-3
                          [&_ul]:space-y-2 [&_ul]:mb-5 [&_li]:text-sm
                          [&_li]:text-black/75 dark:[&_li]:text-white/75
                          [&_ol]:space-y-2 [&_ol]:mb-5
                          [&_blockquote]:border-l-2 [&_blockquote]:border-black/15 dark:[&_blockquote]:border-white/15
                          [&_blockquote]:pl-5 [&_blockquote]:italic
                          [&_blockquote]:text-black/50 dark:[&_blockquote]:text-white/50
                          [&_blockquote]:my-8
                          [&_code]:text-xs [&_code]:font-mono
                          [&_code]:bg-black/[0.06] dark:[&_code]:bg-white/[0.07]
                          [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded-md
                          [&_code]:text-black/80 dark:[&_code]:text-white/80
                          [&_pre]:bg-black/[0.05] dark:[&_pre]:bg-white/[0.05]
                          [&_pre]:border [&_pre]:border-black/8 dark:[&_pre]:border-white/8
                          [&_pre]:rounded-xl [&_pre]:p-6 [&_pre]:mb-6 [&_pre]:overflow-x-auto
                          [&_a]:text-black/65 dark:[&_a]:text-white/65
                          [&_a]:underline [&_a]:underline-offset-2 [&_a]:decoration-black/20 dark:[&_a]:decoration-white/20
                          [&_a:hover]:text-black dark:[&_a:hover]:text-white
                          [&_img]:rounded-xl [&_img]:my-8 [&_img]:w-full [&_img]:object-cover
                          [&_hr]:border-black/10 dark:[&_hr]:border-white/10 [&_hr]:my-10
                          [&_strong]:font-semibold [&_strong]:text-black dark:[&_strong]:text-white">
            <NotionPageRenderer recordMap={post.recordMap} />
          </div>
        </div>
      </div>
    </main>
  );
}
