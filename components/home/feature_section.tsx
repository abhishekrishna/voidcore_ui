import { FeatureCard } from "./feature_card"

const features = [
  {
    title: "AI Model Integrations",
    desc: "Embed LLMs into your app with custom pipelines.",
    image: "ai.png"
  },
  {
    title: "Analytics Dashboards",
    desc: "Track KPIs, visualize trends, and report insights.",
    image: "analytics.png"
  },
  {
    title: "Infra & DevOps Tools",
    desc: "One-click deployment, env config, CI/CD automation.",
    image: "infra.png"
  },
  {
    title: "Cross-Platform Apps",
    desc: "Web + mobile apps with seamless backend APIs.",
    image: "cross-platform.png"
  },
  {
    title: "Secure Auth Systems",
    desc: "Phone, email, SSO, role-based access & more.",
    image: "auth.png"
  },
  {
    title: "Custom API Workflows",
    desc: "Stripe, Slack, email triggers & automation.",
    image: "/api.png"
  }
]

export function FeaturesSection() {
  return (
    <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto pb-24">
      {features.map((feature, i) => (
        <FeatureCard
          key={i}
          title={feature.title}
          desc={feature.desc}
          delay={i * 0.1}
          imgSrc={feature.image}
        />
      ))}
    </section>
  )
}