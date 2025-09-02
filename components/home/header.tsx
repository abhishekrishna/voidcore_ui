'use client'


import Link from "next/link"
import Image from "next/image"
import ThemeToggle from "@/components/ui/theme-toggle"

export default function Header() {
  return (
  <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10 shadow-md">
  <div className="max-w-7xl mx-auto py-1 flex items-center justify-between">
        
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center dark:invert">
          <div className="w-16 h-16 relative mr-2 scale-40">
            <Image
              src="/logo.png"
              alt="voidcore logo"
              fill
              className="object-contain"
            />
          </div>
          <h1 className="text-3xl font-bold">voidcore</h1>
        </Link>

        {/* Navigation - centered */}
        <nav className="hidden md:flex gap-5 text-sm flex-grow justify-center items-center mx-8">
          {[
            { href: "/company_page", label: "voidcore-cli" },
            { href: "#projects", label: "Docs" },
            { href: "#tech", label: "CreatorLY[Upcoming]" },
            { href: "#tech", label: "Templates" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-xl px-4 py-2 transition-colors duration-300 bg-transparent text-black dark:text-gray-200 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-800 dark:hover:text-white"
              style={{ transitionProperty: 'background, color' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* WhatsApp Contact & Theme Toggle - right */}
        <div className="hidden md:flex items-center gap-2 text-sm dark:invert">
          <a>
            +91 9572200808
          </a>
          {/* <ThemeToggle /> */}
        </div>
      </div>
    </header>
  )
}