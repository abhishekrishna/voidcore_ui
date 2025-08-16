"use client"

import { motion } from "framer-motion"

export function BackgroundCode() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none ">
      {[...Array(10)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-xs text-white/15 font-mono select-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 0}deg)`
          }}
        >
          {`<voidcore-${i} />`}
          {/* {`<voidcore-${i} />`} */}
        </motion.span>
      ))}
    </div>
  )
}