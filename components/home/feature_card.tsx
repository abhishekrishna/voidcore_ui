"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  title: string
  desc: string
  delay: number
  imgSrc: string
}

export function FeatureCard({ title, desc, delay, imgSrc }: FeatureCardProps) {
  return (
    <motion.div
      className="backdrop-blur-md bg-cardGlass p-6 rounded-2xl shadow-xl border border-white/10 flex flex-col items-center pt-10 pb-10 text-center"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
         {imgSrc && (
        <img
          src={imgSrc}
          alt={`${title} icon`}
          className="w-12 h-12 mb-4 object-contain"
        />
      )}
    <h3 className="text-xl font-semibold mb-2 pt-5">{title}</h3>
    <p className="text-white/70 text-sm">{desc}</p>
    </motion.div>
  )
}