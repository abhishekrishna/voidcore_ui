import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.projectType.trim() ||
      !form.message.trim()
    ) {
      setStatus("Please complete all required fields.");
      return;
    }

    setStatus("Submitting...");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message received. We will respond within 24 hours.");
        setForm({
          name: "",
          email: "",
          projectType: "",
          message: "",
        });
      } else {
        setStatus("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
      <h2 className="text-3xl md:text-5xl font-semibold mb-6">
        Book an Architecture Call
      </h2>

      <p className="text-black/70 dark:text-white/70 max-w-2xl mb-12">
        We work with founders and teams building AI-powered systems and scalable
        SaaS platforms. Share a brief overview of your use case, current stage,
        and expected outcome.
      </p>

      <form onSubmit={handleSubmit} className="grid gap-6 max-w-2xl">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-4 py-3 text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40"
        />

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Work Email"
          className="rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-4 py-3 text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40"
        />

        <select
          name="projectType"
          value={form.projectType}
          onChange={handleChange}
          className="rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-4 py-3 text-black dark:text-white"
        >
          <option value="">Select Project Type</option>
          <option value="ai-document-system">AI Document Intelligence System</option>
          <option value="saas-platform">SaaS Platform Architecture</option>
          <option value="internal-automation">Internal Workflow Automation</option>
          <option value="other">Other</option>
        </select>

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Describe your current system, problem, timeline, and expected outcome."
          rows={5}
          className="rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 px-4 py-3 text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40"
        />

        <button
          type="submit"
          className="rounded-xl bg-black dark:bg-white text-white dark:text-black font-medium px-6 py-3 hover:opacity-90"
        >
          Request Consultation
        </button>

        {status && <p className="text-black/70 dark:text-white/70">{status}</p>}
      </form>

      {/* Contact Buttons */}
      <div className="mt-8 flex items-center gap-4">
        {/* Email */}
        <a
          href="mailto:krishna@voidcore.in"
          title="Email us"
          className="group flex items-center justify-center w-12 h-12 rounded-xl bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 border border-black/10 dark:border-white/10 transition-transform duration-200 hover:scale-110"
        >
          <svg
            className="w-5 h-5 text-black dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919572200808"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp us"
          className="group flex items-center justify-center w-12 h-12 rounded-xl bg-green-500/20 hover:bg-green-500/30 border border-green-500/30 transition-transform duration-200 hover:scale-110"
        >
          <svg
            className="w-5 h-5 text-green-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.98.52 3.92 1.51 5.62L2 22l4.61-1.61c1.64.89 3.48 1.36 5.38 1.36h.01c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.78 13.52c-.24.68-1.41 1.3-1.93 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.61-2.9-1.25-4.79-4.15-4.93-4.34-.14-.19-1.18-1.57-1.18-2.99 0-1.42.75-2.12 1.01-2.41.27-.29.59-.36.79-.36.2 0 .4 0 .57.01.18.01.42-.07.66.5.24.57.82 1.98.89 2.12.07.14.12.31.02.5-.1.19-.15.31-.3.48-.15.17-.32.38-.46.51-.15.15-.3.32-.13.62.17.3.75 1.23 1.61 1.99 1.11.99 2.04 1.3 2.34 1.44.3.14.47.12.65-.07.18-.19.75-.87.95-1.17.2-.3.4-.25.67-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.34.07.12.07.7-.17 1.38z" />
          </svg>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/company/voidcore-technologies"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
          className="group flex items-center justify-center w-12 h-12 rounded-xl bg-[#0A66C2]/20 hover:bg-[#0A66C2]/30 border border-[#0A66C2]/30 transition-transform duration-200 hover:scale-110"
        >
          <svg
            className="w-5 h-5 text-[#0A66C2]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.345V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.368-1.85 3.6 0 4.266 2.37 4.266 5.455v6.286zM5.337 7.433a1.986 1.986 0 1 1 0-3.972 1.986 1.986 0 0 1 0 3.972zM6.814 20.452H3.861V9h2.953v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
          </svg>
        </a>
      </div>
    </section>
  );
}