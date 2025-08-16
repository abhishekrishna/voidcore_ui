// components/home/animated_stats.tsx
"use client";
import { useEffect, useState } from "react";

const stats = [
  { label: "Clients", value: 20 },
  { label: "Projects Delivered", value: 20 },
  { label: "Industries Served", value: 8 },
];

export function AnimatedStatsSection() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const timers = stats.map((stat, index) => {
      let start = 0;
      const step = Math.ceil(stat.value / 50);
      return setInterval(() => {
        start += step;
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = Math.min(start, stat.value);
          return updated;
        });
      }, 50);
    });

    return () => timers.forEach(clearInterval);
  }, []);

  return (
    <section className="py-16 flex justify-center gap-10 backdrop-blur-md bg-white/10 rounded-2xl mx-10">
      {stats.map((stat, index) => (
        <div key={stat.label} className="text-center">
          <div className="text-4xl font-bold">{counts[index]}</div>
          <div className="text-lg opacity-80">{stat.label}</div>
        </div>
      ))}
    </section>
  );
}