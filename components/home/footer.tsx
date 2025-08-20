import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 px-4 mt-16 dark:invert">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg">voidcore</span>
          <span className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} All rights reserved.</span>
        </div>
        <nav className="flex gap-6 text-sm">
          <Link href="/library" className="hover:text-purple-300 transition">voidcore-cli</Link>
          <Link href="/backend-scaffold" className="hover:text-purple-300 transition">Docs</Link>
          <a href="#projects" className="hover:text-purple-300 transition">CreatorLY</a>
          <a href="#tech" className="hover:text-purple-300 transition">Templates</a>
          <a href="#contact" className="hover:text-purple-300 transition">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
