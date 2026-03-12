export type Solution = {
  slug: string;
  tag: string;
  title: string;
  description: string;
  longDescription: string;
  industry: string;
  service: string;
  outcomes: string[];
  stack: string[];
};

export const solutions: Solution[] = [
  {
    slug: "ai-document-intelligence-systems",
    tag: "AI / RAG",
    title: "AI Document Intelligence Systems",
    description:
      "Design and deployment of production-grade RAG platforms that process contracts, reports, compliance documents, and internal knowledge bases using secure vector pipelines.",
    longDescription:
      "Most companies sit on mountains of unstructured documents — contracts, compliance reports, internal wikis — and can't surface what they need fast enough. We design and deploy retrieval-augmented generation (RAG) systems that plug directly into your document infrastructure, enabling semantic search, automated summarisation, and Q&A over your private data. Built with enterprise-grade security: no data leaves your perimeter.",
    industry: "Enterprise / Legal / Finance",
    service: "AI Document Intelligence",
    outcomes: [
      "Semantic search across thousands of internal documents",
      "Automated contract review and clause extraction",
      "Secure, on-premise or private-cloud vector pipelines",
      "Integration with existing tools: Notion, Confluence, SharePoint",
    ],
    stack: ["LangChain", "Pinecone", "OpenAI", "FastAPI", "Next.js"],
  },
  {
    slug: "saas-platform-architecture",
    tag: "Engineering",
    title: "SaaS Platform Architecture",
    description:
      "End-to-end backend and full-stack engineering for scalable SaaS products using NestJS, FastAPI, microservices, and cloud-native infrastructure.",
    longDescription:
      "Building a SaaS product that needs to scale is a fundamentally different problem than building an MVP. We architect multi-tenant platforms using NestJS, FastAPI, and cloud-native infrastructure — designed from day one for reliability, observability, and horizontal scale. Whether you're launching or rebuilding a product that's outgrown its foundations, we engineer it right.",
    industry: "B2B SaaS / Startups",
    service: "SaaS Engineering",
    outcomes: [
      "Multi-tenant architecture with role-based access control",
      "Microservices or modular monolith — chosen for your scale",
      "CI/CD pipelines, observability, and zero-downtime deployments",
      "API-first design for third-party integrations",
    ],
    stack: ["NestJS", "FastAPI", "PostgreSQL", "Redis", "AWS / GCP"],
  },
  {
    slug: "internal-workflow-automation",
    tag: "Automation",
    title: "Internal Workflow Automation",
    description:
      "Custom internal tools and AI-powered dashboards that reduce manual processes, centralize data, and improve operational visibility.",
    longDescription:
      "Repetitive internal processes are silent productivity killers. We build custom workflow automation systems and internal dashboards that reduce manual work, centralise your data, and give your team real operational visibility. From approval flows to data pipelines to AI-powered reporting — we automate the work that slows you down.",
    industry: "Ops / Finance / HR",
    service: "Workflow Automation",
    outcomes: [
      "Automated approval and notification workflows",
      "Centralised dashboards pulling from multiple data sources",
      "AI-generated reports and anomaly alerts",
      "Integration with Slack, Notion, Airtable, and custom APIs",
    ],
    stack: ["Next.js", "Python", "n8n", "Postgres", "Vercel"],
  },
  {
    slug: "ai-automation-for-startups",
    tag: "AI / Startups",
    title: "AI Automation for Startups",
    description:
      "We help early-stage startups automate operations with AI agents — cutting costs and shipping faster without enterprise pricing or bloat.",
    longDescription:
      "Startups move fast but get bogged down by repetitive tasks that don't need a human. We build AI automation pipelines tailored to your stack — from customer onboarding flows to internal ops. No bloat, no enterprise pricing. Just focused automation that buys your team back hours every week.",
    industry: "Startups",
    service: "AI Automation",
    outcomes: [
      "Onboarding and lead qualification automation",
      "AI agents for repetitive back-office tasks",
      "Rapid deployment — production-ready in weeks, not months",
      "Built to scale as your team grows",
    ],
    stack: ["LangGraph", "OpenAI", "FastAPI", "Postgres", "Vercel"],
  },
  {
    slug: "agentic-ai-for-ecommerce",
    tag: "Agentic AI",
    title: "Agentic AI for Ecommerce",
    description:
      "Deploy autonomous AI agents that handle customer support, inventory alerts, and personalisation for your ecommerce store.",
    longDescription:
      "Ecommerce teams are stretched thin across support, inventory, and personalisation. Our agentic AI systems handle the repetitive work autonomously — answering support tickets, flagging low stock, personalising product recommendations — so your team can focus on growth instead of firefighting.",
    industry: "Ecommerce / D2C",
    service: "Agentic AI",
    outcomes: [
      "AI support agent handling 80%+ of tier-1 tickets",
      "Real-time inventory monitoring and restock alerts",
      "Personalised product recommendations per user",
      "Seamless integration with Shopify, WooCommerce, and custom stacks",
    ],
    stack: ["LangGraph", "OpenAI", "Shopify API", "Redis", "Next.js"],
  },
  {
    slug: "ai-powered-crm-solutions",
    tag: "CRM / AI",
    title: "AI-Powered CRM Solutions",
    description:
      "Supercharge your CRM with AI that scores leads, drafts follow-ups, and flags churn risk — automatically.",
    longDescription:
      "Generic CRMs store data but don't think. Voidcore layers AI onto your existing CRM to prioritise leads automatically, auto-draft personalised outreach, and alert you before deals go cold. Whether you're on HubSpot, Salesforce, or a custom stack, we make your CRM work for you instead of the other way around.",
    industry: "B2B SaaS / Sales",
    service: "CRM AI",
    outcomes: [
      "Automated lead scoring based on behaviour and fit",
      "AI-drafted follow-up emails and call summaries",
      "Churn prediction and at-risk account alerts",
      "Works with HubSpot, Salesforce, or custom CRMs",
    ],
    stack: ["OpenAI", "HubSpot API", "Salesforce API", "FastAPI", "Postgres"],
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}