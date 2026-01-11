import { Client } from "@notionhq/client";

console.log("NOTION TOKEN =", process.env.NOTION_TOKEN);

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});