"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", projectType: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.projectType.trim() || !form.message.trim()) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", projectType: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = `w-full rounded-xl px-4 py-3.5 text-sm
    bg-black/[0.03] dark:bg-white/[0.03]
    border border-color: var(--vc-border)
    text-black dark:text-white
    placeholder:text-black/35 dark:placeholder:text-white/35
    focus:outline-none focus:border-black/30 dark:focus:border-white/30
    focus:bg-black/[0.05] dark:focus:bg-white/[0.05]
    backdrop-blur-sm transition-all`;

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">

      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mb-3">
            Get in touch
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold">Book an Architecture Call</h2>
        </div>
        <p className="color: var(--vc-ink2 max-w-sm text-sm leading-relaxed">
          We work with founders and teams building AI-powered systems and scalable SaaS platforms.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">

        {/* ── Form ── */}
        <div className="rounded-2xl border border-color: var(--vc-border)
                        bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-xl
                        p-7 shadow-xl shadow-black/5 dark:shadow-black/20">
          <form onSubmit={handleSubmit} className="grid gap-4">
            <input name="name" value={form.name} onChange={handleChange}
              placeholder="Full Name" className={inputClass} />

            <input name="email" type="email" value={form.email} onChange={handleChange}
              placeholder="Work Email" className={inputClass} />

            <select name="projectType" value={form.projectType} onChange={handleChange}
              className={inputClass + " appearance-none cursor-pointer"}>
              <option value="" disabled>Select Project Type</option>
              <option value="ai-document-system">AI Document Intelligence System</option>
              <option value="saas-platform">SaaS Platform Architecture</option>
              <option value="internal-automation">Internal Workflow Automation</option>
              <option value="other">Other</option>
            </select>

            <textarea name="message" value={form.message} onChange={handleChange}
              placeholder="Describe your current system, problem, timeline, and expected outcome."
              rows={5} className={inputClass + " resize-none"} />

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center justify-center gap-2 w-full
                         rounded-xl bg-black dark:bg-white text-white dark:text-black
                         font-semibold text-sm px-6 py-3.5
                         hover:opacity-80 disabled:opacity-40
                         transition-opacity shadow-lg shadow-black/10 dark:shadow-black/30"
            >
              {status === "submitting" ? "Sending…" : "Request Consultation"}
              {status !== "submitting" && <ArrowUpRight className="h-4 w-4" />}
            </button>

            {status === "success" && (
              <p className="text-xs text-black/60 dark:text-white/60 text-center pt-1">
                Message received. We'll respond within 24 hours.
              </p>
            )}
            {status === "error" && (
              <p className="text-xs text-red-500/80 text-center pt-1">
                Please complete all fields and try again.
              </p>
            )}
          </form>
        </div>

        {/* ── Right panel ── */}
        <div className="flex flex-col gap-4">
          {/* Contact links */}
          {[
            {
              href: "mailto:krishna@voidcore.in",
              label: "krishna@voidcore.in",
              sublabel: "Email",
              icon: (
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              ),
            },
            {
              href: "https://wa.me/919572200808",
              label: "+91 95722 00808",
              sublabel: "WhatsApp",
              icon: (
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.98.52 3.92 1.51 5.62L2 22l4.61-1.61c1.64.89 3.48 1.36 5.38 1.36h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.78 13.52c-.24.68-1.41 1.3-1.93 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.15-4.93-4.34-.14-.19-1.18-1.57-1.18-2.99 0-1.42.75-2.12 1.01-2.41.27-.29.59-.36.79-.36.2 0 .4 0 .57.01.18.01.42-.07.66.5.24.57.82 1.98.89 2.12.07.14.12.31.02.5-.1.19-.15.31-.3.48-.15.17-.32.38-.46.51-.15.15-.3.32-.13.62.17.3.75 1.23 1.61 1.99 1.11.99 2.04 1.3 2.34 1.44.3.14.47.12.65-.07.18-.19.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.34.07.12.07.7-.17 1.38z" />
                </svg>
              ),
            },
            {
              href: "https://www.linkedin.com/company/voidcore-technologies",
              label: "voidcore-technologies",
              sublabel: "LinkedIn",
              icon: (
                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.345V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.368-1.85 3.6 0 4.266 2.37 4.266 5.455v6.286zM5.337 7.433a1.986 1.986 0 1 1 0-3.972 1.986 1.986 0 0 1 0 3.972zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
                </svg>
              ),
            },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-5 rounded-2xl
                         border border-color: var(--vc-border)
                         bg-black/[0.03] dark:bg-white/[0.03] backdrop-blur-xl
                         hover:bg-black/[0.07] dark:hover:bg-white/[0.07]
                         hover:border-black/20 dark:hover:border-white/20
                         hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20
                         transition-all duration-300"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-xl
                              border border-color: var(--vc-border)
                              bg-black/[0.05] dark:bg-white/[0.05]
                              text-black/60 dark:text-white/60">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] uppercase tracking-[0.15em] text-black/40 dark:text-white/40 mb-0.5">
                  {item.sublabel}
                </p>
                <p className="text-sm font-medium text-black/80 dark:text-white/80 truncate">
                  {item.label}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-black/20 dark:text-white/20
                                       group-hover:text-black/50 dark:group-hover:text-white/50
                                       transition-colors shrink-0" />
            </a>
          ))}

          {/* Calendly CTA */}
          <a
            href="https://calendly.com/abhishekrishna/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 mt-2
                       w-full rounded-xl border border-color: var(--vc-border)
                       bg-black/[0.03] dark:bg-white/[0.03]
                       text-black/70 dark:text-white/70 text-sm font-medium
                       px-6 py-3.5
                       hover:bg-black/[0.07] dark:hover:bg-white/[0.07]
                       hover:border-black/20 dark:hover:border-white/20
                       transition-all"
          >
            Or book directly on Calendly
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
