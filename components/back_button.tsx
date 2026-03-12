"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em]
                 text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white
                 transition-colors"
    >
      <ArrowLeft className="h-3.5 w-3.5" />
      Back
    </button>
  );
}
