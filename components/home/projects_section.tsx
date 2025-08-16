import { TechStackCard } from "././tech_stack_card"

const stacks = [
  {
    name: "Next.js + Tailwind",
    description: "Frontend stack for blazing-fast UI.",
    img:"nextjs.png"
  },
  {
    name: "FastAPI + LangChain",
    description: "LLM backend with agent workflows.",
    img:"fastapi.png"
  },
  {
    name: "Flutter + Firebase",
    description: "Mobile apps with auth & realtime DB.",
    img:"flutter.png"
  },
  {
    name: "NestJS + PostgreSQL",
    description: "Robust API services & data models.",
    img:"nestjs.png"
  },
  {
    name: "Docker + GitHub Actions",
    description: "Infra automation for CI/CD.",
    img:"docker.svg"
  },
  {
    name: "Stripe + Webhooks",
    description: "Secure payments & async triggers.",
    img:"stripe.png"
  }
]

export function ProjectsSection() {
  return (
    <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto py-12">
      {stacks.map((stack, i) => (
        <TechStackCard
          key={i}
          name={""}
          imgSrc={stack.img}
          description={stack.description}
          delay={i * 0.1}
        />
      ))}
    </section>
  )
}