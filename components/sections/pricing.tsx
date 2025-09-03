
export default function PricingSection() {
return(      <section id="pricing" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="text-3xl md:text-5xl font-semibold mb-6">Pricing</h2>
        <p className="text-white/70 max-w-2xl mb-12">Transparent, fixed-scope packs designed to match founder speed.</p>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Landing Page", price: "$1.5k", desc: "Pixel-perfect site delivered in 10 days." },
            { name: "AI MVP", price: "$6k", desc: "From idea → AI-enabled product in 30 days." },
            { name: "Full SaaS Build", price: "$12k", desc: "Production-ready SaaS with auth, billing, and dashboards." },
          ].map((pack) => (
            <div key={pack.name} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 hover:bg-white/10 transition">
              <h3 className="text-xl font-medium mb-2">{pack.name}</h3>
              <p className="text-3xl font-semibold mb-3">{pack.price}</p>
              <p className="text-white/70 text-sm mb-4">{pack.desc}</p>
              <a href="#contact" className="text-sm text-white/80 underline hover:text-white">Start with {pack.name} →</a>
            </div>
          ))}
        </div>
      </section>)}