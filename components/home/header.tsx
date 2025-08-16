'use client'

import Link from "next/link"
import Image from "next/image"
// import { FaWhatsapp } from "react-icons/fa"

export default function Header() {
  return (
  <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/10 shadow-md">
  <div className="max-w-7xl mx-auto py-1 flex items-center justify-between">
        
        {/* Logo and Brand */}
        <Link href="/" className="flex items-center">
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
          <Link href="#projects" className="transition rounded-xl px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-800 dark:hover:text-white">voidcore-cli</Link>
          <Link href="#projects" className="transition rounded-xl px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-800 dark:hover:text-white">Docs</Link>
          <Link href="#tech" className="transition rounded-xl px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-800 dark:hover:text-white">CreatorLY[Upcoming]</Link>
          <Link href="#tech" className="transition rounded-xl px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-800 dark:hover:text-white">Templates</Link>
          <Link href="#contact" className="transition rounded-xl px-4 py-2 hover:bg-gray-200 hover:text-black dark:hover:bg-gray-800 dark:hover:text-white">Contact</Link>
        </nav>

        {/* WhatsApp Contact - right */}
        <div className="hidden md:flex items-center gap-2 text-sm">
         <a>
            +91 9572200808
          </a>
        </div>
      </div>
    </header>
  )
}