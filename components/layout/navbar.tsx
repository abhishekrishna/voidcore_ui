"use client";

import { useState } from "react";
import { SplinePointer, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-4 
                        backdrop-blur-xl bg-[#0B0B0F]/30 
                        border border-white/10 rounded-2xl mt-4 shadow-lg">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2 pl-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-white/10 flex items-center justify-center">
                <SplinePointer className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold tracking-tight text-white">voidcore</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-white/70 text-sm pr-10">
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#blog" className="hover:text-white transition">Blog</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <Link
              href="https://calendly.com/krishna_abhishek/30min"
              target="_blank"
              className="w-32 h-10 flex items-center justify-center bg-white text-black font-semibold text-base rounded-lg ml-2 shadow"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden pr-4 text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-2 px-6 py-4 rounded-2xl bg-[#0B0B0F]/90 border border-white/10 shadow-lg flex flex-col gap-4 text-white/80">
            <a href="#work" onClick={() => setOpen(false)}>Work</a>
            <a href="#blog" onClick={() => setOpen(false)}>Blog</a>
            <a href="#services" onClick={() => setOpen(false)}>Services</a>
            <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            <Link
              href="https://calendly.com/krishna_abhishek/30min"
              target="_blank"
              onClick={() => setOpen(false)}
              className="w-full text-center bg-white text-black font-semibold py-2 rounded-lg shadow"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}