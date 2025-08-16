"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

interface TechStackCardProps {
  name: string;
  imgSrc?: string; // optional icon
  description?: string;
  delay: number;
}
export function TechStackCard({ name, imgSrc, delay = 0 }: TechStackCardProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-pink-500/30 to-blue-500/30 backdrop-blur-md bg-cardGlass p-4 rounded-2xl shadow-xl border border-white/10 flex flex-col items-center"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
    >
      <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
        {imgSrc ? (
          <img
            src={imgSrc}
            alt={name}
            className="w-10 h-10 object-contain"
          />
        ) : (
          <span className="text-white text-sm">{name[0]}</span>
        )}
      </div>
      <p className="mt-3 text-sm text-white/80">{name}</p>
    </motion.div>
  );
}