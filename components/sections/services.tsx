      {/* Services Section */}
     
     export default function ServicesSection() {
       return (
     <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">Services</h2>
        <p className="text-white/70 max-w-2xl mb-12">From MVPs to AI-native platforms — tailored packs designed for founders and teams.</p>
        <div className="grid gap-6 md:grid-cols-3">
          {["MVP Development", "AI Agents & RAG", "Web & SaaS Apps", "Mobile Apps", "DevOps & Infra", "Design Systems"].map((srv) => (
            <div key={srv} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition">
              <h3 className="text-xl font-medium mb-2">{srv}</h3>
              <p className="text-white/70 text-sm">Concise description of how we deliver {srv.toLowerCase()} with speed and reliability.</p>
            </div>
          ))}
        </div>
      </section>)}