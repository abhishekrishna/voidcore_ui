// // lib/rehypeShiki.ts
// import { visit } from "unist-util-visit";
// import { codeToHtml } from "shiki";

// export default function rehypeShiki() {
//   return async (tree: any) => {
//     const promises: Promise<void>[] = [];

//     visit(tree, "element", (node: any) => {
//       if (node.tagName === "code" && node.properties?.className) {
//         const langClass = node.properties.className.find((c: string) =>
//           c.startsWith("language-")
//         );

//         if (!langClass) return;

//         const lang = langClass.replace("language-", "");
//         const content = node.children[0]?.value || "";

//         const promise = codeToHtml(content, {
//           lang,
//           theme: "vitesse-dark",
//         }).then((html) => {
//           node.type = "raw";
//           node.value = html;
//           node.children = [];
//           node.tagName = undefined;
//         });

//         promises.push(promise);
//       }
//     });

//     await Promise.all(promises);
//   };
// }