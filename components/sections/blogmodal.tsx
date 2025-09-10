import React from "react";

interface BlogModalProps {
  open: boolean;
  onClose: () => void;
  blog: {
    title: string;
    date: string;
    image: string;
    stack: string[];
    content: string;
  } | null;
}

export default function BlogModal({ open, onClose, blog }: BlogModalProps) {
  if (!open || !blog) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-[#18181c] rounded-2xl shadow-2xl max-w-xl w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white text-xl"
          aria-label="Close"
        >
          ×
        </button>
        <img
          src={blog.image}
          alt={blog.title}
          className="rounded-xl mb-6 w-full h-48 object-cover bg-black/10"
        />
        <h2 className="text-2xl font-bold text-white mb-2">{blog.title}</h2>
        <div className="text-xs text-white/60 mb-4">{blog.date}</div>
        <div className="flex flex-wrap gap-2 mb-6">
          {blog.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="prose prose-invert text-white max-w-none">
          {blog.content}
        </div>
      </div>
    </div>
  );
}