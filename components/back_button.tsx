"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/#blog")}
      className="mb-6 inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition"
    >
      ← Back
    </button>
  );
}