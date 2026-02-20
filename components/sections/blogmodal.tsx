import React from "react";

interface BlogModalProps {
  open: boolean;
  onClose: () => void;
  blog: {
    title: string;
    date: string;
    image: string;
    content: React.ReactNode; // rendered content (Notion / HTML / JSX)
  } | null;
}

export default function BlogModal({ open, onClose, blog }: BlogModalProps) {
  if (!open || !blog) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="bg-[#18181c] rounded-2xl shadow-2xl max-w-3xl w-full p-6 md:p-8 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white text-xl"
          aria-label="Close"
        >
          ×
        </button>

        {blog.image && (
          <img
            src={blog.image}
            alt={blog.title}
            className="rounded-xl mb-6 w-full h-56 object-cover bg-black/10"
          />
        )}

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          {blog.title}
        </h2>

        <div className="text-xs text-black/60 dark:text-white/60 mb-6">{blog.date}</div>

        {/* Content */}
        <div className="max-w-none text-black dark:text-white">
          {blog.content}
        </div>
      </div>
    </div>
  );
}