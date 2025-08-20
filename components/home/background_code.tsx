"use client"

import { motion } from "framer-motion"

// Glowing animated circuit lines background
export function BackgroundCode() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      <svg width="100%" height="100%" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
        {/* Horizontal glowing lines */}
        {[0, 1, 2, 3, 4].map((row) => (
          <motion.line
            key={row}
            x1={0}
            y1={150 + row * 150}
            x2={1440}
            y2={150 + row * 150}
            stroke="url(#glow)"
            strokeWidth="3"
            initial={{ x: -100 }}
            animate={{ x: [0, 40, 0] }}
            transition={{ duration: 6 + row, repeat: Infinity, ease: "easeInOut" }}
            style={{ filter: "blur(1.5px)" }}
          />
        ))}
        {/* Vertical glowing lines */}
        {[0, 1, 2, 3, 4].map((col) => (
          <motion.line
            key={col + 10}
            x1={200 + col * 250}
            y1={0}
            x2={200 + col * 250}
            y2={900}
            stroke="url(#glow)"
            strokeWidth="2"
            initial={{ y: 100 }}
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 7 + col, repeat: Infinity, ease: "easeInOut" }}
            style={{ filter: "blur(1.5px)" }}
          />
        ))}
        {/* Circuit nodes */}
        {[...Array(12)].map((_, i) => (
          <motion.circle
            key={i + 20}
            cx={120 + (i % 6) * 220}
            cy={180 + Math.floor(i / 6) * 400}
            r={10}
            fill="url(#glow)"
            initial={{ opacity: 0.7, scale: 1 }}
            animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.3, 1] }}
            transition={{ duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut" }}
            style={{ filter: "blur(2.5px)" }}
          />
        ))}
        <defs>
          <linearGradient id="glow" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#00fff7" stopOpacity="0.7" />
            <stop offset="1" stopColor="#00ff88" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}