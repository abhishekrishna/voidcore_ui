import React, { useEffect, useRef } from "react";
import { X, Calendar, ArrowUpRight } from "lucide-react";

interface BlogModalProps {
  open: boolean;
  onClose: () => void;
  blog: {
    title: string;
    date: string;
    image?: string;
    cover?: string; // alias used by BlogsSection
    content?: React.ReactNode;
    description?: string;
  } | null;
}

export default function BlogModal({ open, onClose, blog }: BlogModalProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const heroImage = blog?.image || blog?.cover;
  const bodyContent = blog?.content ?? (
    blog?.description ? <p>{blog.description}</p> : null
  );

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      // Reset scroll on open
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open || !blog) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center
                 bg-black/40 dark:bg-black/60 backdrop-blur-md
                 animate-in fade-in duration-200"
      style={{ animationFillMode: "both" }}
      onClick={onClose}
    >
      {/* Modal Panel */}
      <div
        ref={scrollRef}
        className="relative w-full sm:max-w-2xl lg:max-w-3xl max-h-[92vh] sm:max-h-[88vh]
                   overflow-y-auto overscroll-contain
                   sm:rounded-2xl rounded-t-2xl
                   bg-white dark:bg-[#0D0D12]
                   border border-black/[0.06] dark:border-white/[0.07]
                   shadow-[0_32px_80px_-12px_rgba(0,0,0,0.35)]
                   dark:shadow-[0_32px_80px_-12px_rgba(0,0,0,0.7)]
                   animate-in slide-in-from-bottom-4 sm:slide-in-from-bottom-2
                   duration-300 ease-out"
        style={{ animationFillMode: "both" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag handle (mobile) */}
        <div className="sm:hidden flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-black/15 dark:bg-white/15" />
        </div>

        {/* Hero image */}
        {heroImage && (
          <div className="relative w-full h-52 sm:h-64 overflow-hidden sm:rounded-t-2xl">
            <img
              src={heroImage}
              alt={blog.title}
              className="w-full h-full object-cover scale-[1.01]"
            />
            {/* Gradient overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

            {/* Close button — floated on image */}
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 z-10
                         flex items-center justify-center
                         w-8 h-8 rounded-xl
                         bg-black/30 hover:bg-black/50
                         border border-white/20
                         text-white/80 hover:text-white
                         backdrop-blur-md
                         transition-all duration-150 ease-out
                         hover:scale-105 active:scale-95"
            >
              <X className="h-3.5 w-3.5" strokeWidth={2.5} />
            </button>
          </div>
        )}

        {/* Close button — no image case */}
        {!heroImage && (
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 z-10
                       flex items-center justify-center
                       w-8 h-8 rounded-xl
                       bg-black/[0.06] hover:bg-black/[0.1]
                       dark:bg-white/[0.06] dark:hover:bg-white/[0.1]
                       border border-black/[0.08] dark:border-white/[0.08]
                       text-black/50 dark:text-white/50
                       hover:text-black dark:hover:text-white
                       transition-all duration-150 ease-out
                       hover:scale-105 active:scale-95"
          >
            <X className="h-3.5 w-3.5" strokeWidth={2.5} />
          </button>
        )}

        {/* Content body */}
        <div className="px-6 pt-6 pb-8 sm:px-9 sm:pt-7 sm:pb-10">
          {/* Meta row */}
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="h-3 w-3 text-black/35 dark:text-white/35 flex-shrink-0" />
            <span className="text-[11px] font-medium tracking-[0.12em] uppercase
                             text-black/40 dark:text-white/40">
              {blog.date}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[1.45rem] sm:text-[1.75rem] font-semibold
                         leading-[1.25] tracking-[-0.02em]
                         text-black dark:text-white
                         mb-6">
            {blog.title}
          </h2>

          {/* Thin rule */}
          <div className="w-12 h-px bg-black/15 dark:bg-white/15 mb-7" />

          {/* Article content */}
          <div className="
            text-[0.9rem] leading-[1.75]
            text-black/70 dark:text-white/65

            [&_p]:mb-5
            [&_h2]:text-[1.05rem] [&_h2]:font-semibold [&_h2]:tracking-tight
            [&_h2]:text-black [&_h2]:dark:text-white [&_h2]:mt-8 [&_h2]:mb-3
            [&_h3]:text-[0.95rem] [&_h3]:font-medium
            [&_h3]:text-black [&_h3]:dark:text-white [&_h3]:mt-6 [&_h3]:mb-2
            [&_ul]:mb-5 [&_ul]:pl-4 [&_ul]:space-y-1.5
            [&_ol]:mb-5 [&_ol]:pl-4 [&_ol]:space-y-1.5
            [&_li]:text-black/70 [&_li]:dark:text-white/65
            [&_li]:marker:text-black/30 [&_li]:dark:marker:text-white/30
            [&_a]:text-black [&_a]:dark:text-white
            [&_a]:underline [&_a]:underline-offset-2
            [&_a]:decoration-black/30 [&_a]:dark:decoration-white/30
            [&_a:hover]:decoration-black [&_a:hover]:dark:decoration-white
            [&_strong]:font-semibold [&_strong]:text-black [&_strong]:dark:text-white
            [&_blockquote]:border-l-2 [&_blockquote]:border-black/20
            [&_blockquote]:dark:border-white/20 [&_blockquote]:pl-4
            [&_blockquote]:italic [&_blockquote]:text-black/50
            [&_blockquote]:dark:text-white/50 [&_blockquote]:my-5
            [&_code]:text-[0.82rem] [&_code]:bg-black/[0.06]
            [&_code]:dark:bg-white/[0.07] [&_code]:rounded-md
            [&_code]:px-1.5 [&_code]:py-0.5
            [&_code]:text-black/80 [&_code]:dark:text-white/75
            [&_hr]:border-black/10 [&_hr]:dark:border-white/10 [&_hr]:my-7
          ">
            {bodyContent}
          </div>
        </div>

        {/* Sticky footer fade */}
        <div className="sticky bottom-0 h-8
                        bg-gradient-to-t from-white dark:from-[#0D0D12] to-transparent
                        pointer-events-none" />
      </div>
    </div>
  );
}