import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/theme-provider";

const geistSans = Geist({
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
  title: " ○● Voidcore Technologies | AI Infrastructure & Custom RAG Solutions",
  description: "Custom software, websites, mobile, and web apps — VoidCore Technologies helps startups and enterprises build secure, scalable software fast.",
  metadataBase: new URL("https://voidcore.in"),
  alternates: {
    canonical: "https://voidcore.in/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
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
