export type Metric = {
  value: string;
  label: string;
  sub?: string;
};

export type Section = {
  heading: string;
  body: string;
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  year: string;
  techStack: string[];
  metrics: Metric[];
  challenge: Section;
  built: Section;
  results: Section;
};

export const projects: Project[] = [
  {
    id: 1,
    slug: "ai-document-intelligence",
    title: "AI Document Intelligence Platform",
    description:
      "Built a production-grade RAG system to process large PDF datasets, extract structured insights, and generate strategic summaries using FastAPI, LangChain, and pgvector.",
    image: "https://res.cloudinary.com/dqzte0i12/image/upload/v1773421447/original-b1834271e042a940a4da9edc316725d1_dmzkd0.webp",
    tag: "AI / RAG",
    year: "2024",
    techStack: ["FastAPI", "LangChain", "pgvector", "PostgreSQL", "OpenAI", "Docker", "AWS S3"],
    metrics: [
      { value: "96%", label: "Query Accuracy", sub: "on benchmark set" },
      { value: "8 min", label: "Report Time", sub: "down from 3–4 hrs" },
      { value: "500+", label: "Daily Queries", sub: "at sub-2s latency" },
      { value: "3×", label: "Team Expansion", sub: "within 2 months" },
    ],
    challenge: {
      heading: "The Challenge",
      body: "A fast-growing edtech company had over 40,000 PDF documents spread across shared drives with zero searchability. Analysts were spending 3–4 hours per report manually reading and extracting data. Leadership needed a system that could handle high document volumes and return structured, citable answers — without hallucinating.",
    },
    built: {
      heading: "What We Built",
      body: "We architected a full RAG pipeline using FastAPI for the backend API layer, LangChain for orchestration, and pgvector on PostgreSQL for vector storage. Documents are chunked, embedded, and indexed on upload. At query time, the system retrieves the top-k relevant chunks and passes them to the LLM with a structured prompt that enforces source citation and confidence scoring.",
    },
    results: {
      heading: "Results",
      body: "Report generation time dropped from 3–4 hours to under 8 minutes. The system now handles 500+ document queries per day with sub-2s average response times. The client's team expanded the platform to three additional departments within two months of launch, eliminating an estimated 1,200 analyst hours per quarter.",
    },
  },
  {
    id: 2,
    slug: "enterprise-gpt-knowledge-assistant",
    title: "Enterprise GPT Knowledge Assistant",
    description:
      "Designed and deployed a secure document-aware chatbot with vector search, embeddings, and context-aware responses for internal knowledge workflows.",
    image: "https://res.cloudinary.com/dqzte0i12/image/upload/v1773421568/original-b0ec13fb0afa679de04d7b57b352ade1_vdxhuc.webp",
    tag: "LLM / Search",
    year: "2024",
    techStack: ["OpenAI", "Pinecone", "Next.js", "Node.js", "TypeScript", "Vercel", "Auth0"],
    metrics: [
      { value: "41%", label: "Fewer Support Tickets", sub: "in first month" },
      { value: "60%", label: "Faster Onboarding", sub: "for new hires" },
      { value: "1,200+", label: "Weekly Queries", sub: "handled automatically" },
      { value: "94%", label: "Staff Satisfaction", sub: "from internal survey" },
    ],
    challenge: {
      heading: "The Challenge",
      body: "A 200-person professional services firm needed a way for employees to query internal knowledge — HR policies, project templates, client SOPs — without bothering senior staff or digging through SharePoint. Knowledge was siloed across departments, new hires took weeks to get up to speed, and senior staff fielded the same questions repeatedly.",
    },
    built: {
      heading: "What We Built",
      body: "We built a secure internal chatbot with role-based document access, meaning employees only see answers derived from documents they're authorized to view. The system uses OpenAI embeddings stored in Pinecone, with a custom context-injection layer and hallucination guardrails. Auth0 handles SSO, and the frontend was built in Next.js for fast, server-rendered responses.",
    },
    results: {
      heading: "Results",
      body: "Internal support tickets dropped by 41% in the first month. Onboarding time for new hires shortened by an estimated 60%. The assistant now handles over 1,200 queries per week with a 94% satisfaction rate from staff surveys. The firm rolled out the assistant to two partner offices within the first quarter.",
    },
  },
  {
    id: 3,
    slug: "subscription-streaming-platform",
    title: "Subscription Streaming Platform",
    description:
      "Architected a scalable mobile streaming system with secure content delivery, JWT authentication, and microservices deployed on AWS.",
    image: "https://res.cloudinary.com/dqzte0i12/image/upload/v1773421442/original-87d43556d4fe0ac75f6c1f16636e69c0_tdsgit.webp",
    tag: "SaaS / AWS",
    year: "2023",
    techStack: ["React Native", "AWS ECS", "CloudFront", "S3", "Stripe", "Node.js", "PostgreSQL"],
    metrics: [
      { value: "8K", label: "Subscribers", sub: "in first quarter" },
      { value: "99.97%", label: "Uptime", sub: "over launch period" },
      { value: "0", label: "Critical Bugs", sub: "in first 30 days" },
      { value: "10 wks", label: "Time to Launch", sub: "from kickoff" },
    ],
    challenge: {
      heading: "The Challenge",
      body: "A media startup needed to launch a subscription streaming product for mobile audiences in Southeast Asia — on a tight timeline and with infrastructure that could scale from day one. They had the content library but no platform, no billing system, and no mobile app.",
    },
    built: {
      heading: "What We Built",
      body: "We designed a microservices architecture on AWS using ECS for containerised services, CloudFront for CDN delivery, and S3 for content storage. Stripe powers subscription billing with three tiers and automatic proration. JWT with refresh token rotation handles secure session management. The mobile app was built in React Native with offline-capable downloads for low-connectivity environments.",
    },
    results: {
      heading: "Results",
      body: "Launched on schedule with 0 critical bugs in the first 30 days. The platform scaled to 8,000 active subscribers in the first quarter with 99.97% uptime. Stripe integration enabled automatic dunning management that recovered 18% of failed payments. The client expanded to two additional markets within six months.",
    },
  },
  {
    id: 4,
    slug: "automated-report-generation",
    title: "Automated Report Generation System",
    description:
      "Developed a backend-driven analytics and automated report generation platform with structured outputs and real-time data processing.",
    image: "https://res.cloudinary.com/dqzte0i12/image/upload/v1773468894/5bc97eda6298f13bab8ab5434ce148ff_v7y77s.webp",
    tag: "Automation",
    year: "2023",
    techStack: ["Python", "Celery", "Redis", "PostgreSQL", "React", "FastAPI", "WeasyPrint"],
    metrics: [
      { value: "4 min", label: "Per Report", sub: "down from 6–8 hrs" },
      { value: "3×", label: "Report Volume", sub: "no added headcount" },
      { value: "180+", label: "Monthly Reports", sub: "fully automated" },
      { value: "0", label: "Format Errors", sub: "since launch" },
    ],
    challenge: {
      heading: "The Challenge",
      body: "A healthcare consultancy was producing 50+ client reports per month entirely by hand — pulling data from three incompatible systems, formatting in Word, and emailing PDFs. Each report took 6–8 hours of analyst time. Formatting inconsistencies caused rework. The team couldn't take on new clients without hiring, but hiring wasn't in the budget.",
    },
    built: {
      heading: "What We Built",
      body: "We built an automated pipeline that ingests data from all three source systems via scheduled ETL jobs, normalises it into a shared schema, runs predefined analytics, and generates pixel-perfect PDF reports using WeasyPrint against HTML templates. A lightweight React dashboard lets account managers trigger ad-hoc reports, monitor job status, and configure delivery schedules without touching code.",
    },
    results: {
      heading: "Results",
      body: "Report generation time dropped from 6–8 hours to 4 minutes per report. The consultancy increased its monthly report volume by 3× without adding headcount. Formatting error rates fell to zero. The system now generates over 180 reports per month automatically, and the client has since expanded the platform to cover two additional reporting workflows.",
    },
  },
];