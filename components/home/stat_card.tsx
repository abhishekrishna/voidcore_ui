"use client";


import React, { useEffect, useRef, useState } from 'react';

interface StatProps {
  label: string;
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}

const AnimatedNumber: React.FC<StatProps> = ({ end, prefix = '', suffix = '', duration = 1500 }) => {
  const [value, setValue] = useState(0);
  const startTimestamp = useRef<number | null>(null);

  useEffect(() => {
    let animationFrame: number;
    const animate = (timestamp: number) => {
      if (!startTimestamp.current) startTimestamp.current = timestamp;
      const progress = Math.min((timestamp - startTimestamp.current) / duration, 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setValue(end);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return (
    <span className="font-extrabold text-5xl md:text-6xl text-primary">
      {prefix}{value}{suffix}
    </span>
  );
};

const StatCard: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 justify-center items-center py-12">
  <div className="bg-white/30 dark:bg-black/30 rounded-xl shadow-lg p-8 flex flex-col items-center min-w-[200px] backdrop-blur-md border border-white/30 dark:border-white/10">
        <AnimatedNumber end={20} label="Finished Projects" />
        <span className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">Finished Projects</span>
      </div>
  <div className="bg-white/30 dark:bg-black/30 rounded-xl shadow-lg p-8 flex flex-col items-center min-w-[200px] backdrop-blur-md border border-white/30 dark:border-white/10">
        <AnimatedNumber end={6} label="Years of Experience" />
        <span className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">Years of Experience</span>
      </div>
  <div className="bg-white/30 dark:bg-black/30 rounded-xl shadow-lg p-8 flex flex-col items-center min-w-[200px] backdrop-blur-md border border-white/30 dark:border-white/10">
        <AnimatedNumber end={30} suffix="+" label="Clients" />
        <span className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">Clients</span>
      </div>
    </div>
  );
};

export default StatCard;
