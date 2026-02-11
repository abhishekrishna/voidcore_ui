"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion"; 



type Errors = {
  name?: string;
  email?: string;
  role?: string;
  resume?: string;
};

export default function CareersSection() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  function validate(formData: FormData) {
    const e: Errors = {};
    if (!formData.get("name")) e.name = "Name is required";
    if (!formData.get("email")) e.email = "Email is required";
    if (!formData.get("role")) e.role = "Please select a role";
    if (!formData.get("resume")) e.resume = "Resume is required";
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

    await fetch("/api/careers", {
      method: "POST",
      body: formData,
    });

    setLoading(false);
    setSubmitted(true);
    form.reset();
  }

  return (
    <section id="careers" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 py-24">
     <h2 className="text-3xl md:text-5xl font-semibold mb-6">
  Careers
</h2>

<p className="text-white/70 max-w-2xl mb-12">
  We’re building AI-first systems and real products.  
  Join us if you value ownership, clean engineering, and long-term impact.
</p>
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="rounded-2xl border bg-background/60 p-10 text-center backdrop-blur"
            >
              <h3 className="text-xl font-medium">Application submitted</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We’ll review it and get back to you.
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
              {/* Name */}
              <Field label="Name" error={errors.name}>
                <AnimatedInput name="name" placeholder="Your full name" />
              </Field>

              {/* Email */}
              <Field label="Email" error={errors.email}>
                <AnimatedInput
                  name="email"
                  type="email"
                  placeholder="you@domain.com"
                />
              </Field>

              {/* Role */}
              <Field label="Role" error={errors.role}>
                <div className="relative">
                  <motion.select
                    whileFocus={{ scale: 1.01 }}
                    name="role"
                    className="w-full appearance-none rounded-xl border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select a role</option>
                    <option>AI / ML Engineer</option>
                    <option>Full Stack Engineer</option>
                    <option>Business Development</option>
                  </motion.select>

                  {/* CSS dropdown arrow */}
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-xs opacity-60">
                    ▼
                  </span>
                </div>
              </Field>

              {/* Resume */}
              <Field label="Resume" error={errors.resume}>
                <input
                  type="file"
                  name="resume"
                  accept=".pdf,.doc,.docx"
                  className="w-full rounded-xl border px-4 py-2 text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-accent file:px-4 file:py-2 file:text-sm"
                />
              </Field>

              {/* Message */}
              <Field label="Note (optional)">
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  name="message"
                  rows={3}
                  placeholder="Short note or intro"
                  className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </Field>

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

/* ---------- Helpers ---------- */

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



function AnimatedInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
    
  return (
   <motion.div
//   whileFocusWithin={{ scale: 1.01 }}
  transition={{ duration: 0.15 }}
>
  <input
    {...props}
    className="w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
  />
</motion.div>
  );
}


