"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Errors = {
  name?: string;
  email?: string;
  role?: string;
  resume?: string;
  server?: string;
};

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

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

    if (!resume || resume.size === 0) {
      e.resume = "Resume is required";
    } else {
      if (resume.size > MAX_FILE_SIZE) {
        e.resume = "Resume must be under 5MB";
      }
      if (resume.type !== "application/pdf") {
        e.resume = "Only PDF files are allowed";
      }
    }

    return e;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error("Server error");
      }

      setSubmitted(true);
      form.reset();
    } catch (err) {
      setErrors({ server: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="careers" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">
          Join as an Early Builder
        </h2>

        <p className="text-white/70 max-w-2xl mb-12">
          We’re building focused AI-first systems. If you value ownership,
          technical clarity, and shipping real products, apply below.
        </p>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border bg-background/60 p-10 text-center backdrop-blur"
            >
              <h3 className="text-xl font-medium">Application submitted</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We’ll review and respond if there’s alignment.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl border bg-background/60 p-8 backdrop-blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <Field label="Name" error={errors.name}>
                <AnimatedInput name="name" placeholder="Your full name" />
              </Field>

              <Field label="Email" error={errors.email}>
                <AnimatedInput
                  name="email"
                  type="email"
                  placeholder="you@domain.com"
                />
              </Field>

              <Field label="Role" error={errors.role}>
                <div className="relative">
                  <motion.select
                    name="role"
                    whileFocus={{ scale: 1.01 }}
                    className="w-full appearance-none rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select a role</option>
                    <option>AI / ML Engineer</option>
                    <option>Full Stack Engineer</option>
                    <option>Business Development</option>
                  </motion.select>
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs opacity-60">
                    ▼
                  </span>
                </div>
              </Field>

              <Field label="Resume (PDF only, max 5MB)" error={errors.resume}>
                <input
                  type="file"
                  name="resume"
                  accept="application/pdf"
                  className="w-full rounded-xl border px-4 py-2 text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-accent file:px-4 file:py-2 file:text-sm"
                />
              </Field>

              <Field label="Note (optional)">
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  name="message"
                  rows={3}
                  placeholder="Short intro or context"
                  className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </Field>

              {errors.server && (
                <p className="text-sm text-red-500">{errors.server}</p>
              )}

              <button
                disabled={loading}
                className="w-full rounded-xl border px-4 py-3 text-sm font-medium transition hover:bg-accent disabled:opacity-50"
              >
                {loading ? "Submitting…" : "Apply"}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <label className="text-sm text-muted-foreground">{label}</label>
      {children}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs text-red-500"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

function AnimatedInput(
  props: React.InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <motion.div transition={{ duration: 0.15 }}>
      <input
        {...props}
        className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
      />
    </motion.div>
  );
}