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

      <p className="text-white/70 max-w-2xl mb-12">
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
          className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40"
        />

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Work Email"
          className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40"
        />

        <select
          name="projectType"
          value={form.projectType}
          onChange={handleChange}
          className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white"
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
          className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40"
        />

        <button
          type="submit"
          className="rounded-xl bg-white text-black font-medium px-6 py-3 hover:opacity-90"
        >
          Request Consultation
        </button>

        {status && <p className="text-white/70">{status}</p>}
      </form>
    </section>
  );
}