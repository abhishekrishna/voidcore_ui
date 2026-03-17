"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const inputClass = `w-full rounded-xl px-4 py-3 text-sm
  bg-black/[0.03] dark:bg-white/[0.03]
  border border-color: var(--vc-border)
  text-black dark:text-white
  placeholder:text-black/35 dark:placeholder:text-white/35
  focus:outline-none focus:border-black/30 dark:focus:border-white/30
  focus:bg-black/[0.05] dark:focus:bg-white/[0.05]
  backdrop-blur-sm transition-all`;

export default function SolutionContactForm({ service }: { service: string }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, projectType: service }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-8 gap-3">
        <p className="text-sm font-medium text-black dark:text-white">Message received.</p>
        <p className="text-xs text-black/50 dark:text-white/50">We'll respond within 24 hours.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 w-full">
      <div className="grid grid-cols-2 gap-3">
        <input name="name" value={form.name} onChange={handleChange}
          placeholder="Your name" className={inputClass} />
        <input name="email" type="email" value={form.email} onChange={handleChange}
          placeholder="Work email" className={inputClass} />
      </div>
      <textarea name="message" value={form.message} onChange={handleChange}
        placeholder="Tell us about your project — current stack, problem, timeline."
        rows={3} className={inputClass + " resize-none"} />

      {status === "error" && (
        <p className="text-xs text-red-500/80">Please fill in all fields.</p>
      )}

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2
                     bg-black dark:bg-white text-white dark:text-black
                     font-semibold text-sm px-6 py-3 rounded-xl
                     hover:opacity-80 disabled:opacity-40
                     transition-opacity shadow-lg shadow-black/10 dark:shadow-black/30"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
          {status !== "submitting" && <ArrowUpRight className="h-4 w-4" />}
        </button>
        <a
          href="https://calendly.com/krishna_abhishek/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-black/40 dark:text-white/40
                     hover:text-black dark:hover:text-white
                     transition-colors underline underline-offset-2"
        >
          Or book a call directly
        </a>
      </div>
    </form>
  );
}