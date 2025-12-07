/** next.config.ts — minimal safe config */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "/\.mdx?$/"], // remove mdx here for now
};

export default nextConfig;