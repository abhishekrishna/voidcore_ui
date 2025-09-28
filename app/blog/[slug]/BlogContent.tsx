import React from "react";

export default function BlogContent({ html }: { html: string }) {
  // Replace h2/h3 with extra emojis for fun
  let enhanced = html
    .replace(/<h2>/g, '<h2>✨ ')
    .replace(/<h3>/g, '<h3>📚 ')
    .replace(/<ul>/g, '<ul>')
    .replace(/<li>/g, '<li>👉 ');

  // Make code blocks scrollable
  enhanced = enhanced.replace(
    /<pre><code class="([^"]*)">([\s\S]*?)<\/code><\/pre>/g,
    (match, lang, code) =>
      `<div style="overflow-x:auto;max-width:100%;margin-bottom:1em;"><pre class="scrollable"><code class="${lang}">${code}</code></pre></div>`
  );

  return <div dangerouslySetInnerHTML={{ __html: enhanced }} />;
}