      {/* Contact Section */}
      export default function ContactSection() {
    return ( <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">Contact</h2>
        <p className="text-white/70 max-w-2xl mb-12">Tell us about your idea — we’ll get back within 24h with next steps.</p>
        <form className="grid gap-6 max-w-2xl">
          <input type="text" placeholder="Your Name" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40" />
          <input type="email" placeholder="Email" className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40" />
          <textarea placeholder="Tell us about your project..." rows={5} className="rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-white/40" />
          <button type="submit" className="rounded-xl bg-white text-black font-medium px-6 py-3 hover:opacity-90">Send Message</button>
        </form>
      </section>)}