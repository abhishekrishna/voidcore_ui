"use client";

import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism.css";      // light theme
import "prismjs/themes/prism-okaidia.css"; // dark theme
import { Code } from "react-notion-x/build/third-party/code";
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
    <div className={`notion ${darkMode ? "dark:notion-dark" : ""}`}>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={false}
        darkMode={darkMode}
        components={{
          Collection: () => null,
          Code: Code, // THIS IS THE KEY: properly render code blocks
        }}
      />
    </div>
  );
}