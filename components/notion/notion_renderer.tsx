export function NotionRenderer({ blocks }: { blocks: any[] }) {
  return (
    <div className="prose prose-invert max-w-none">
      {blocks.map((block) => {
        if (block.type === "paragraph") {
          return (
            <p key={block.id}>
              {block.paragraph.rich_text.map((t: any) => t.plain_text).join("")}
            </p>
          );
        }

        if (block.type === "heading_1") {
          return <h1 key={block.id}>{block.heading_1.rich_text[0]?.plain_text}</h1>;
        }

        if (block.type === "heading_2") {
          return <h2 key={block.id}>{block.heading_2.rich_text[0]?.plain_text}</h2>;
        }

        if (block.type === "heading_3") {
          return <h3 key={block.id}>{block.heading_3.rich_text[0]?.plain_text}</h3>;
        }

        if (block.type === "code") {
          return (
            <pre key={block.id}>
              <code>{block.code.rich_text[0]?.plain_text}</code>
            </pre>
          );
        }

        return null;
      })}
    </div>
  );
}