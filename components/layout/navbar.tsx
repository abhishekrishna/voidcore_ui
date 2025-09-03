import { Sparkles } from "lucide-react";

      export default function Navbar() {
        return ( <nav className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
            <Sparkles className="h-4 w-4" />
          </div>
          <span className="font-semibold tracking-tight">Void Core</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-white/70">
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>)}