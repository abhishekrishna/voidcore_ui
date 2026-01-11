"use client";

import { NotionRenderer } from "react-notion-x";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

export default function NotionPageRenderer({ recordMap }: { recordMap: any }) {
  return <NotionRenderer recordMap={recordMap} fullPage={false} darkMode />;
}