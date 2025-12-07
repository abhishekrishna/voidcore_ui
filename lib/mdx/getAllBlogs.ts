// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";

// const BLOG_DIR = path.join(process.cwd(), "content/blogs");

// export function getAllBlogs() {
//   const files = fs.readdirSync(BLOG_DIR);

//   return files.map((file) => {
//     const filePath = path.join(BLOG_DIR, file);
//     const mdxContent = fs.readFileSync(filePath, "utf-8");

//     const { data } = matter(mdxContent);

//     return {
//       ...data,
//       slug: file.replace(".mdx", "")
//     };
//   });
// }

// export function getBlogBySlug(slug: string) {
//   const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
//   const mdxContent = fs.readFileSync(filePath, "utf-8");

//   const { content, data } = matter(mdxContent);

//   return { metadata: data, content };
// }