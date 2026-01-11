"use client";

import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import type { ExtendedRecordMap } from "notion-types";

interface NotionPageRendererProps {
  recordMap: ExtendedRecordMap;
}

export default function NotionPageRenderer({ recordMap }: NotionPageRendererProps) {
  if (!recordMap) return null; // avoid SSR crash
  return <NotionRenderer recordMap={recordMap} fullPage={false} darkMode />;
}