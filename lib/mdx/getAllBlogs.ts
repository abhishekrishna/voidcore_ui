// import fs from "fs";
// import path from "path";
// import matter from "gray-matter";

// const BLOG_DIR = path.join(process.cwd(), "content/blogs");

// export function getAllBlogs() {
//   return fs
//     .readdirSync(BLOG_DIR)
//     .filter((file) => file.endsWith(".mdx"))
//     .map((file) => {
//       const content = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
//       const { data } = matter(content);

//       return {
//         ...data,
//         slug: file.replace(".mdx", ""),
//       };
//     })
//     .sort((a: any, b: any) => +new Date(b.date) - +new Date(a.date));
// }