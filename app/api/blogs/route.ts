import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/notion/getAllPosts";

export async function GET() {
  const posts = await getAllPosts();
  // console.log(posts);
  return NextResponse.json(posts);
}