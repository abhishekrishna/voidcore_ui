import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";

const geistSans = Geist_Mono({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Voidcore",
  "url": "https://voidcore.in",
  "logo": "https://voidcore.in/logo.png",
  "description": "AI systems engineering studio building production-grade RAG platforms, SaaS architecture, and workflow automation.",
  "address": { "@type": "PostalAddress", "addressCountry": "IN" },
  "sameAs": [
    "https://www.linkedin.com/company/voidcore-technologies",
    "https://github.com/abhishekrishna"
  ]
};

export const metadata: Metadata = {
  title: " ○● Voidcore Technologies — AI Systems Engineering Studio | RAG & Document Intelligence",
  description:
    "Voidcore builds production-grade AI systems for growing companies — custom RAG pipelines, document intelligence platforms, and scalable SaaS backends using NestJS, FastAPI, LangChain, pgvector, and AWS. Based in India. Full IP ownership guaranteed.",
  metadataBase: new URL("https://voidcore.in"),
  alternates: {
    canonical: "https://voidcore.in/",
  },
  keywords: [
    "RAG platform development",
    "document intelligence AI",
    "AI systems engineering studio",
    "LangChain production deployment",
    "pgvector NeonDB",
    "NestJS FastAPI backend",
    "custom AI development India",
    "SaaS architecture consulting",
    "vector database integration",
    "enterprise AI pipelines",
  ],
  openGraph: {
    title: "Voidcore Technologies — AI Systems Engineering Studio",
    description:
      "Production-grade RAG pipelines, document intelligence, and SaaS architecture for growing companies. Full IP ownership. Built in India.",
    url: "https://voidcore.in",
    siteName: "Voidcore Technologies",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://voidcore.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Voidcore Technologies — AI Systems Engineering Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Voidcore Technologies — AI Systems Engineering Studio",
    description:
      "Production-grade RAG pipelines, document intelligence, and SaaS architecture. Full IP ownership.",
    images: ["https://voidcore.in/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
  icon: [
    { url: "favicon.svg", media: "(prefers-color-scheme: light)" },
    { url: "favicon-outline.svg", media: "(prefers-color-scheme: dark)" },
  ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}