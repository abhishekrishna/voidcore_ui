/** next.config.ts — minimal safe config */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "/\.mdx?$/"], // remove mdx here for now
    images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // google drive direct images
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
  return [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'www.voidcore.in' }],
      destination: 'https://voidcore.in/:path*',
      permanent: true,
    },
  ];
}
};

export default nextConfig;