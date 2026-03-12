"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

type Errors = {
  name?: string;
  email?: string;
  role?: string;
  resume?: string;
  server?: string;
};

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const inputClass = `w-full rounded-xl px-4 py-3.5 text-sm
  bg-black/[0.03] dark:bg-white/[0.03]
  border border-black/10 dark:border-white/10
  text-black dark:text-white
  placeholder:text-black/35 dark:placeholder:text-white/35
  focus:outline-none focus:border-black/30 dark:focus:border-white/30
  focus:bg-black/[0.05] dark:focus:bg-white/[0.05]
  backdrop-blur-sm transition-all`;

export default function CareersSection() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  function validate(formData: FormData) {
    const e: Errors = {};
    const name = formData.get("name");
    const email = formData.get("email");
    const role = formData.get("role");
    const resume = formData.get("resume") as File | null;
    if (!name) e.name = "Name is required";
    if (!email) e.email = "Email is required";
    if (!role) e.role = "Please select a role";
    if (!resume || resume.size === 0) e.resume = "Resume is required";
    else if (resume.size > MAX_FILE_SIZE) e.resume = "Resume must be under 5MB";
    else if (resume.type !== "application/pdf") e.resume = "Only PDF files are allowed";
    return e;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setErrors({});
    setLoading(true);
    try {
      const res = await fetch("/api/careers", { method: "POST", body: formData });
      if (!res.ok) throw new Error("Server error");
      setSubmitted(true);
      form.reset();
    } catch {
      setErrors({ server: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="careers" className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-black/40 dark:text-white/40 mb-3">
            We're hiring
          </p>
          <h2 className="text-3xl md:text-5xl font-semibold">Join as an Early Builder</h2>
        </div>
        <p className="text-black/55 dark:text-white/55 max-w-sm text-sm leading-relaxed">
          We value ownership, technical clarity, and shipping real products.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 items-start">

        {/* ── Left: form ── */}
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-black/10 dark:border-white/10
                         bg-black/[0.03] dark:bg-white/[0.03] backdrop-blur-xl
                         p-10 flex flex-col items-center justify-center text-center gap-4
                         shadow-xl shadow-black/5 dark:shadow-black/20 min-h-[320px]"
            >
              <CheckCircle2 className="h-8 w-8 text-black/30 dark:text-white/30" />
              <h3 className="text-xl font-semibold">Application submitted</h3>
              <p className="text-sm text-black/50 dark:text-white/50 max-w-xs leading-relaxed">
                We'll review and respond if there's alignment. Thanks for reaching out.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-2xl border border-black/10 dark:border-white/10
                         bg-black/[0.02] dark:bg-white/[0.02] backdrop-blur-xl
                         p-7 space-y-4 shadow-xl shadow-black/5 dark:shadow-black/20"
            >
              <Field label="Name" error={errors.name}>
                <input name="name" placeholder="Your full name" className={inputClass} />
              </Field>

              <Field label="Email" error={errors.email}>
                <input name="email" type="email" placeholder="you@domain.com" className={inputClass} />
              </Field>

              <Field label="Role" error={errors.role}>
                <div className="relative">
                  <select name="role" className={inputClass + " appearance-none cursor-pointer"}>
                    <option value="">Select a role</option>
                    <option>AI / ML Engineer</option>
                    <option>Full Stack Engineer</option>
                    <option>Business Development</option>
                  </select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs text-black/30 dark:text-white/30">▼</span>
                </div>
              </Field>

              <Field label="Resume — PDF only, max 5MB" error={errors.resume}>
                <input
                  type="file"
                  name="resume"
                  accept="application/pdf"
                  className={`w-full rounded-xl px-4 py-3 text-sm cursor-pointer
                    bg-black/[0.03] dark:bg-white/[0.03]
                    border border-black/10 dark:border-white/10
                    text-black/60 dark:text-white/60
                    file:mr-4 file:rounded-lg file:border-0
                    file:bg-black/10 dark:file:bg-white/10
                    file:text-black dark:file:text-white
                    file:text-xs file:font-medium file:px-3 file:py-1.5
                    hover:border-black/20 dark:hover:border-white/20
                    transition-all`}
                />
              </Field>

              <Field label="Note — optional">
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Short intro or context"
                  className={inputClass + " resize-none"}
                />
              </Field>

              {errors.server && (
                <p className="text-xs text-red-500/80">{errors.server}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 w-full
                           rounded-xl bg-black dark:bg-white text-white dark:text-black
                           font-semibold text-sm px-6 py-3.5
                           hover:opacity-80 disabled:opacity-40
                           transition-opacity shadow-lg shadow-black/10 dark:shadow-black/30"
              >
                {loading ? "Submitting…" : "Apply now"}
                {!loading && <ArrowUpRight className="h-4 w-4" />}
              </button>
            </motion.form>
          )}
        </AnimatePresence>

        {/* ── Right: open roles ── */}
        <div className="flex flex-col gap-4">
          {[
            { role: "AI / ML Engineer", type: "Full-time · Remote", desc: "Build and ship production RAG pipelines, LLM integrations, and agentic systems." },
            { role: "Full Stack Engineer", type: "Full-time · Remote", desc: "Own features end-to-end — NestJS, Next.js, cloud infra, and everything in between." },
            { role: "Business Development", type: "Part-time · Remote", desc: "Help us find the right clients and shape how Voidcore grows." },
          ].map((item) => (
            <div
              key={item.role}
              className="rounded-2xl border border-black/10 dark:border-white/10
                         bg-black/[0.03] dark:bg-white/[0.03] backdrop-blur-xl
                         p-6 hover:bg-black/[0.06] dark:hover:bg-white/[0.06]
                         hover:border-black/20 dark:hover:border-white/20
                         hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20
                         transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-base font-semibold">{item.role}</h3>
                <span className="text-[10px] uppercase tracking-[0.15em] font-medium
                                 text-black/40 dark:text-white/40
                                 border border-black/10 dark:border-white/10
                                 px-2.5 py-1 rounded-full shrink-0 ml-3">
                  Open
                </span>
              </div>
              <p className="text-[10px] uppercase tracking-[0.15em] text-black/35 dark:text-white/35 mb-2">
                {item.type}
              </p>
              <p className="text-sm text-black/55 dark:text-white/55 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="text-xs uppercase tracking-[0.15em] text-black/40 dark:text-white/40">
        {label}
      </label>
      {children}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-red-500/80"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
