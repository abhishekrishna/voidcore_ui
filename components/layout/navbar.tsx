"use client"

import { Sparkles, SplinePointer } from "lucide-react"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-20 right-20 z-50">
      <div className="mx-auto max-w-7xl px-6 pl-10 pr-10">
        <div className="flex items-center justify-between py-4 
                        backdrop-blur-xl bg-[#0B0B0F]/30 
                        border border-white/10 rounded-2xl mt-4 shadow-lg">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2 pl-10">
            <a href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-white/10 flex items-center justify-center">
                <SplinePointer className="h-4 w-4 text-white" />
              </div>
              <span className="font-semibold tracking-tight text-white">voidcore</span>
            </a>
          </div>

          {/* Links */}
          <nav className="hidden md:flex items-center gap-6 text-white/70 text-sm pr-10">
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  )}