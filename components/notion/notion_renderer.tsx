"use client";

import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism.css"; // light theme for code
import type { ExtendedRecordMap } from "notion-types";

interface NotionPageRendererProps {
  recordMap: ExtendedRecordMap;
  darkMode?: boolean;
}

export default function NotionPageRenderer({
  recordMap,
  darkMode = false,
}: NotionPageRendererProps) {
  if (!recordMap) return null;

  return (
    <NotionRenderer
      recordMap={recordMap}
      fullPage={false}
      darkMode={darkMode}
    />
  );
}