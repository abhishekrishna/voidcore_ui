export type Solution = {
  slug: string
  title: string
  description: string
  industry: string
  service: string
  hero: string
  problem: string
  solution: string
  benefits: string[]
  useCases: string[]
  body: string
}

export const solutions: Solution[] = [
  {
    slug: "ai-automation-for-startups",
    title: "AI Automation for Startups",
    description:
      "AI automation systems that help startups eliminate repetitive operational work and scale faster.",
    industry: "Startups",
    service: "AI Automation",

    hero:
      "Voidcore builds AI automation systems that remove repetitive operations so startups can focus on product and growth.",

    problem:
      "Early-stage startups often spend engineering time on manual operations such as onboarding flows, reporting pipelines, internal dashboards, and support triage.",

    solution:
      "We design AI-powered automation pipelines that integrate directly with your stack and execute operational tasks automatically.",

    benefits: [
      "Reduce operational overhead",
      "Automate internal workflows",
      "Ship faster with smaller teams",
      "AI-driven operational insights",
    ],

    useCases: [
      "Automated onboarding workflows",
      "AI support triage",
      "Internal reporting automation",
      "Operational analytics agents",
    ],

    body:
      "Our systems integrate with your existing infrastructure and build automated pipelines that trigger actions, generate insights, and remove manual processes.",
  },

  {
    slug: "agentic-ai-for-ecommerce",
    title: "Agentic AI for Ecommerce",
    description:
      "Deploy autonomous AI agents that handle customer support, inventory alerts, and personalization for ecommerce platforms.",
    industry: "Ecommerce",
    service: "Agentic AI",

    hero:
      "Autonomous AI agents that operate inside your ecommerce stack and handle repetitive operations automatically.",

    problem:
      "Ecommerce teams spend significant time responding to support queries, monitoring inventory, and optimizing product discovery.",

    solution:
      "Voidcore deploys AI agents that monitor events across your ecommerce platform and take action automatically.",

    benefits: [
      "Reduce support workload",
      "Improve customer experience",
      "Automate inventory monitoring",
      "Increase conversion rates",
    ],

    useCases: [
      "AI customer support agents",
      "Inventory monitoring agents",
      "Product recommendation engines",
      "Automated marketing triggers",
    ],

    body:
      "Our agentic systems operate continuously inside your ecommerce stack and automate operational tasks across support, inventory, and personalization.",
  },

  {
    slug: "ai-powered-crm-solutions",
    title: "AI-Powered CRM Solutions",
    description:
      "Enhance your CRM with AI systems that score leads, generate follow-ups, and detect churn risks automatically.",
    industry: "B2B SaaS",
    service: "CRM AI",

    hero:
      "AI systems that transform static CRMs into intelligent sales platforms.",

    problem:
      "Most CRM systems store data but fail to help teams act on it effectively.",

    solution:
      "Voidcore integrates AI models with your CRM to analyze activity, prioritize leads, and generate sales actions.",

    benefits: [
      "Automated lead scoring",
      "AI-generated follow-ups",
      "Early churn detection",
      "Improved sales productivity",
    ],

    useCases: [
      "Lead scoring automation",
      "Sales email drafting",
      "Churn prediction models",
      "Deal prioritization agents",
    ],

    body:
      "Our AI CRM systems analyze behavioral and engagement data to surface actionable insights for sales teams.",
  },

  {
    slug: "ai-solutions-for-logistics",
    title: "AI Solutions for Logistics",
    description:
      "AI systems for routing optimization, delivery prediction, and dispatch automation.",
    industry: "Logistics",
    service: "AI Optimization",

    hero:
      "Operational AI systems that optimize routing, dispatching, and delivery forecasting.",

    problem:
      "Logistics operations rely heavily on manual decision-making and fragmented data systems.",

    solution:
      "Voidcore builds AI optimization systems that analyze operational data and recommend or execute better routing decisions.",

    benefits: [
      "Lower operational costs",
      "Improved route efficiency",
      "Delay prediction systems",
      "Automated dispatch workflows",
    ],

    useCases: [
      "Dynamic routing optimization",
      "Delivery ETA prediction",
      "Fleet utilization analysis",
      "Dispatch automation",
    ],

    body:
      "Our systems analyze operational data streams and optimize logistics decisions in real time.",
  },

  {
    slug: "generative-ai-for-agencies",
    title: "Generative AI for Agencies",
    description:
      "Generative AI tools embedded directly into creative and marketing agency workflows.",
    industry: "Agencies",
    service: "Generative AI",

    hero:
      "AI tools that help agencies produce more creative output without increasing headcount.",

    problem:
      "Agencies face increasing pressure to produce more content and campaigns with limited teams.",

    solution:
      "Voidcore integrates generative AI models into agency workflows to accelerate content creation and campaign production.",

    benefits: [
      "Faster content production",
      "Automated campaign ideation",
      "Improved team productivity",
      "AI-assisted design workflows",
    ],

    useCases: [
      "AI copywriting systems",
      "Campaign idea generation",
      "Automated content pipelines",
      "Creative assistance tools",
    ],

    body:
      "We embed generative AI tools into existing agency processes so teams can produce more work with less manual effort.",
  },
]

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug)
}