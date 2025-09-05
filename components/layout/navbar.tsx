// "use client"

// import { motion } from "framer-motion"
// import { Space } from "lucide-react"
// import Link from "next/link"

// export default function Navbar() {
//   return (
//     <>
//       <motion.header className="fixed top-0 left-0 right-0 z-50">
//         <div className="mx-auto max-w-7xl px-6">
//           <div className="flex items-center justify-between py-4 
//                     bg-[#0B0B0F]/80 backdrop-blur-xl
//                     border border-white/10 rounded-2xl mt-4 shadow-lg
//                     transition-colors duration-300">
//             {/* Logo / Brand */}
//             <div className="flex items-center gap-2 pl-10">
//               <Link href="/" className="flex items-center gap-2">
//                 <div className="h-8 w-8 rounded-xl bg-white/10 flex items-center justify-center">
//                   <Space className="h-4 w-4 text-white" />
//                 </div>
//                 <span className="font-semibold tracking-tight text-white">voidcore</span>
//               </Link>
//             </div>

//             {/* Links */}
//             <nav className="hidden md:flex items-center gap-6 text-white/70 text-sm pr-10">
//               <Link href="#work" className="hover:text-white transition">Work</Link>
//               <Link href="#services" className="hover:text-white transition">Services</Link>
//               <Link href="#pricing" className="hover:text-white transition">Pricing</Link>
//               <Link href="#contact" className="hover:text-white transition">Contact</Link>
//               <div className="flex flex-wrap items-center gap-2 md:flex-row">
//                 <Link
//                   href="https://calendly.com/krishna_abhishek/30min"
//                   className="rounded-xl bg-white text-black font-semibold px-5 py-2 ml-2 hover:bg-white/80 transition"
//                 >
//                   Get Started
//                 </Link>
//               </div>
//             </nav>
//           </div>
//         </div>
//       </motion.header>

//       {/* Add this button where you want users to set up a meeting (e.g., in your contact section) */}
     
//     </>
//   )
// }

"use client"

import { Link, Sparkles, SplinePointer } from "lucide-react"

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
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
            <div className="flex flex-wrap items-center gap-2 md:flex-row">
              <Link
                href="https://calendly.com/krishna_abhishek/30min"
                target="_blank"
                className="w-32 h-10 flex items-center justify-center bg-white text-black font-semibold text-base rounded-lg ml-2 shadow"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )}