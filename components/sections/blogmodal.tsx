import React, { useEffect } from "react";
import { X } from "lucide-react";

interface BlogModalProps {
  open: boolean;
  onClose: () => void;
  blog: {
    title: string;
    date: string;
    image: string;
    content: React.ReactNode;
  } | null;
}

export default function BlogModal({ open, onClose, blog }: BlogModalProps) {
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open || !blog) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4
                 bg-black/50 dark:bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto
                   rounded-2xl border border-black/10 dark:border-white/10
                   bg-white dark:bg-[#0B0B0F]
                   shadow-2xl shadow-black/20 dark:shadow-black/60"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 p-2 rounded-xl
                     bg-black/5 dark:bg-white/5
                     border border-black/10 dark:border-white/10
                     text-black/50 dark:text-white/50
                     hover:text-black dark:hover:text-white
                     hover:bg-black/10 dark:hover:bg-white/10
                     transition-all"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Cover image */}
        {blog.image && (
          <div className="w-full h-56 overflow-hidden rounded-t-2xl">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Body */}
        <div className="p-7 md:p-10">
          <p className="text-[10px] uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mb-3">
            {blog.date}
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight
                         text-black dark:text-white mb-8">
            {blog.title}
          </h2>

          <div className="text-black/75 dark:text-white/75 text-sm leading-relaxed
                          prose-headings:font-semibold prose-headings:text-black
                          dark:prose-headings:text-white">
            {blog.content}
          </div>
        </div>
      </div>
    </div>
  );
}
