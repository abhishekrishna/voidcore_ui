"use client";

import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/components/theme-provider";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Blog", href: "#blog" },
  // { label: "Services", href: "#services" },
  { label: "Solutions", href: "#services" },
  { label: "Careers", href: "#careers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">

        {/* ── Main bar ── */}
        <div className="flex items-center justify-between py-3.5
                        backdrop-blur-xl bg-white/60 dark:bg-[#0B0B0F]/50
                        border border-black/10 dark:border-white/10
                        rounded-2xl mt-4 shadow-lg shadow-black/5 dark:shadow-black/20
                        transition-colors duration-200">

          {/* Logo */}
          <div className="pl-5">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="font-semibold tracking-tight text-black dark:text-white text-sm">
                ○● voidcore
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 text-sm pr-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-3 py-2 rounded-lg text-black/55 dark:text-white/55
                           hover:text-black dark:hover:text-white
                           hover:bg-black/[0.05] dark:hover:bg-white/[0.05]
                           transition-all duration-150"
              >
                {link.label}
              </Link>
            ))}

            <span className="mx-1 text-black/15 dark:text-white/15 text-xs select-none">|</span>

            {/* Studio pill */}
            <span className="px-3 py-2 text-black/30 dark:text-white/30 text-xs
                             border border-black/10 dark:border-white/10
                             rounded-lg cursor-default select-none">
              Studio — soon
            </span>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="ml-1 p-2 rounded-lg
                         bg-black/[0.05] dark:bg-white/[0.05]
                         border border-black/10 dark:border-white/10
                         hover:bg-black/10 dark:hover:bg-white/10
                         text-black/60 dark:text-white/60
                         hover:text-black dark:hover:text-white
                         transition-all"
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light"
                ? <Moon className="h-3.5 w-3.5" />
                : <Sun className="h-3.5 w-3.5" />}
            </button>

            {/* CTA */}
            <Link
              href="https://calendly.com/krishna_abhishek/30min"
              target="_blank"
              className="ml-2 px-5 h-9 flex items-center justify-center
                         bg-black dark:bg-white text-white dark:text-black
                         font-semibold text-sm rounded-xl
                         hover:opacity-80 transition-opacity
                         shadow-md shadow-black/10 dark:shadow-black/30"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2 pr-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-black/[0.05] dark:bg-white/[0.05]
                         border border-black/10 dark:border-white/10
                         text-black/60 dark:text-white/60 transition-all"
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg bg-black/[0.05] dark:bg-white/[0.05]
                         border border-black/10 dark:border-white/10
                         text-black dark:text-white transition-all"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden mt-2 px-5 py-5 rounded-2xl
                          bg-white/90 dark:bg-[#0B0B0F]/95
                          border border-black/10 dark:border-white/10
                          shadow-xl shadow-black/10 dark:shadow-black/30
                          backdrop-blur-xl
                          flex flex-col gap-1 transition-colors duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-xl text-sm
                           text-black/70 dark:text-white/70
                           hover:text-black dark:hover:text-white
                           hover:bg-black/[0.05] dark:hover:bg-white/[0.05]
                           transition-all"
              >
                {link.label}
              </Link>
            ))}

            <div className="border-t border-black/10 dark:border-white/10 my-2" />

            <Link
              href="https://calendly.com/krishna_abhishek/30min"
              target="_blank"
              onClick={() => setOpen(false)}
              className="w-full text-center bg-black dark:bg-white
                         text-white dark:text-black
                         font-semibold text-sm py-3 rounded-xl
                         hover:opacity-80 transition-opacity shadow-md"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
