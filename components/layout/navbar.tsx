"use client";

import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "@/components/theme-provider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-4 
                        backdrop-blur-xl bg-white/50 dark:bg-[#0B0B0F]/30
                        border border-black/10 dark:border-white/10 rounded-2xl mt-4 shadow-lg
                        transition-colors duration-200">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2 pl-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl flex items-center justify-center">
                {/* <SplinePointer className="h-4 w-4 text-white" /> */}
              </div>
              <span className="font-semibold tracking-tight text-black dark:text-white"> ○● voidcore</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-black/70 dark:text-white/70 text-sm pr-10">
            <a href="#work" className="hover:text-black dark:hover:text-white transition">Work</a>
            <a href="#blog" className="hover:text-black dark:hover:text-white transition">Blog</a>
            <a href="#services" className="hover:text-black dark:hover:text-white transition">Services</a>
            <Link href="#careers" className="hover:text-black dark:hover:text-white transition">Careers</Link>
            <a href="#pricing" className="hover:text-black dark:hover:text-white transition">Pricing</a>
            <a href="#contact" className="hover:text-black dark:hover:text-white transition">Contact</a>
            <a href="#" className="hover:text-black dark:hover:text-white transition">Studio[Coming Soon]</a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4 text-black dark:text-white" />
              ) : (
                <Sun className="h-4 w-4 text-black dark:text-white" />
              )}
            </button>

            <Link
              href="https://calendly.com/krishna_abhishek/30min"
              target="_blank"
              className="w-32 h-10 flex items-center justify-center bg-black text-white dark:bg-white dark:text-black font-semibold text-base rounded-lg ml-2 shadow hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Toggle + Theme Toggle */}
          <div className="md:hidden flex items-center gap-2 pr-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition-colors text-black dark:text-white"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>
            <button
              className="text-black dark:text-white"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-2 px-6 py-4 rounded-2xl bg-white dark:bg-[#0B0B0F]/90 border border-black/10 dark:border-white/10 shadow-lg flex flex-col gap-4 text-black/80 dark:text-white/80 transition-colors duration-200">
            <a href="#work" onClick={() => setOpen(false)}>Work</a>
            <a href="#blog" onClick={() => setOpen(false)}>Blog</a>
            <a href="#services" onClick={() => setOpen(false)}>Services</a>
            <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
            <Link href="#careers" className="hover:text-black dark:hover:text-white transition">Careers</Link>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            <a href="#" onClick={() => setOpen(false)}>Studio[Beta]</a>
            <Link
              href="https://calendly.com/krishna_abhishek/30min"
              target="_blank"
              onClick={() => setOpen(false)}
              className="w-full text-center bg-black dark:bg-white text-white dark:text-black font-semibold py-2 rounded-lg shadow hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}