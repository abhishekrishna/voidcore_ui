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
  process: { step: string; title: string; description: string }[];
  idealFor: string[];
  problems: { problem: string; solution: string }[];
  faqs: { question: string; answer: string }[];
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
    process: [
      {
        step: "01",
        title: "Document Audit",
        description: "We map your existing document infrastructure — formats, volumes, access patterns — and identify the highest-value extraction targets.",
      },
      {
        step: "02",
        title: "Pipeline Architecture",
        description: "We design a secure ingestion and embedding pipeline tailored to your stack, with chunking strategies optimised for your document types.",
      },
      {
        step: "03",
        title: "Deploy & Iterate",
        description: "We deploy to your environment, run retrieval quality benchmarks, and iterate until accuracy meets production standards.",
      },
    ],
    idealFor: [
      "Legal teams reviewing high volumes of contracts",
      "Compliance teams needing instant policy lookups",
      "Enterprises with knowledge locked in PDFs and internal wikis",
      "Finance teams processing reports across multiple data sources",
    ],
    problems: [
      {
        problem: "Your team spends hours manually searching through documents",
        solution: "Semantic search surfaces the right clause, paragraph, or data point in seconds — across thousands of files simultaneously.",
      },
      {
        problem: "Critical knowledge is siloed in formats no tool can read well",
        solution: "Our pipelines ingest PDFs, Word docs, spreadsheets, Notion pages, and Confluence spaces into a unified, queryable knowledge base.",
      },
      {
        problem: "You can't send sensitive documents to third-party AI tools",
        solution: "We deploy entirely within your infrastructure. No data leaves your perimeter. Full audit logs and access controls included.",
      },
    ],
    faqs: [
      {
        question: "What is an AI Document Intelligence System?",
        answer: "An AI Document Intelligence System uses retrieval-augmented generation (RAG) to let you search, summarise, and extract insights from large collections of unstructured documents using natural language — without manual review.",
      },
      {
        question: "How long does it take to build and deploy?",
        answer: "A production-ready RAG system typically takes 4–6 weeks from discovery to deployment, depending on document volume and integration complexity.",
      },
      {
        question: "Is my data secure?",
        answer: "Yes. We build on-premise or private-cloud deployments by default. Your documents are never sent to third-party services unless you explicitly choose a hosted model provider.",
      },
      {
        question: "What document formats do you support?",
        answer: "PDF, Word, Excel, PowerPoint, Markdown, Notion, Confluence, SharePoint, and plain text. Custom parsers can be built for proprietary formats.",
      },
    ],
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
    process: [
      {
        step: "01",
        title: "Architecture Review",
        description: "We audit your current system or requirements, identify scaling bottlenecks, and propose the right architecture pattern for your stage.",
      },
      {
        step: "02",
        title: "Foundation Build",
        description: "We lay the infrastructure — auth, multi-tenancy, database schema, API contracts, CI/CD — before building features on top.",
      },
      {
        step: "03",
        title: "Scale & Handoff",
        description: "We deliver with full documentation, observability dashboards, and optionally train your internal team to own and extend the system.",
      },
    ],
    idealFor: [
      "Founders building their first B2B SaaS product",
      "Teams whose codebase has outgrown its original architecture",
      "Companies preparing for enterprise customers requiring compliance",
      "Startups needing a technical co-founder equivalent",
    ],
    problems: [
      {
        problem: "Your MVP works but can't handle more than a handful of customers",
        solution: "We rebuild the foundation for horizontal scale — connection pooling, caching layers, queue-based processing — without rewriting your business logic.",
      },
      {
        problem: "Every new feature takes weeks because of technical debt",
        solution: "We introduce modular architecture patterns that make new features additive, not disruptive — reducing time-to-ship significantly.",
      },
      {
        problem: "Enterprise customers are asking for SSO, audit logs, and data isolation",
        solution: "We build multi-tenant infrastructure with per-tenant data isolation, RBAC, SSO support, and full audit trails from the start.",
      },
    ],
    faqs: [
      {
        question: "What is SaaS Platform Architecture?",
        answer: "SaaS Platform Architecture is the design and engineering of the technical foundation for a software-as-a-service product — covering multi-tenancy, authentication, billing, APIs, and infrastructure — built to scale reliably as your customer base grows.",
      },
      {
        question: "NestJS or FastAPI — which do you recommend?",
        answer: "NestJS is our default for TypeScript-first teams building complex B2B products. FastAPI is preferred for AI-heavy backends or when the team is Python-native. We choose based on your stack, not preference.",
      },
      {
        question: "How long does a full SaaS build take?",
        answer: "A production-ready SaaS platform with auth, multi-tenancy, billing, and core features typically takes 8–14 weeks. Scope dictates timeline.",
      },
      {
        question: "Do you work with existing codebases?",
        answer: "Yes. We frequently take over existing products, refactor architecture, and extend functionality without restarting from scratch.",
      },
    ],
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
    process: [
      {
        step: "01",
        title: "Process Mapping",
        description: "We sit with your team, map every manual step in your highest-friction workflows, and identify what can be fully automated vs. assisted.",
      },
      {
        step: "02",
        title: "Tool & Integration Design",
        description: "We design the automation architecture — triggers, conditions, actions — and connect your existing tools without replacing what's working.",
      },
      {
        step: "03",
        title: "Deploy & Monitor",
        description: "We deploy, test edge cases, and set up monitoring so you can see every automation run, catch failures, and iterate quickly.",
      },
    ],
    idealFor: [
      "Ops teams drowning in manual data entry and approvals",
      "Finance teams building reports from multiple spreadsheets",
      "HR teams managing onboarding and offboarding manually",
      "Any team spending more than 5 hours a week on repetitive tasks",
    ],
    problems: [
      {
        problem: "Your team copies data between tools manually every day",
        solution: "We build automated pipelines that sync data across your tools in real time — no manual exports, no copy-paste errors.",
      },
      {
        problem: "Approval workflows live in email chains and Slack threads",
        solution: "We build structured approval flows with automatic routing, reminders, and audit trails — fully integrated with your existing communication tools.",
      },
      {
        problem: "You have no visibility into what's happening across your operations",
        solution: "We build centralised dashboards that pull live data from all your sources, with AI-generated summaries and anomaly alerts.",
      },
    ],
    faqs: [
      {
        question: "What is internal workflow automation?",
        answer: "Internal workflow automation uses software to replace manual, repetitive tasks inside your organisation — data entry, approvals, notifications, report generation — freeing your team to focus on higher-value work.",
      },
      {
        question: "Do you use no-code tools like n8n or Zapier?",
        answer: "We use n8n for straightforward automation workflows and build custom code when complexity demands it. We choose the right tool for the job, not the easiest one.",
      },
      {
        question: "Will this work with our existing tools?",
        answer: "Yes. We integrate with Slack, Notion, Airtable, Google Workspace, HubSpot, Salesforce, and any tool with an API. Custom connectors can be built for proprietary systems.",
      },
      {
        question: "How quickly can we see results?",
        answer: "Simple automation workflows can be deployed in 1–2 weeks. Complex multi-system pipelines typically take 4–6 weeks.",
      },
    ],
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
    process: [
      {
        step: "01",
        title: "Identify High-Value Tasks",
        description: "We audit your current operations and identify the top 3–5 tasks consuming the most time that don't require human judgment.",
      },
      {
        step: "02",
        title: "Build Focused Agents",
        description: "We build targeted AI agents for each task — scoped tightly so they're reliable, fast, and easy to monitor in production.",
      },
      {
        step: "03",
        title: "Ship & Scale",
        description: "We deploy, monitor accuracy, and iterate. As your startup grows, the automation grows with it — new triggers, new agents, zero rearchitecting.",
      },
    ],
    idealFor: [
      "Pre-seed to Series A startups with small teams",
      "Founders doing tasks that could be delegated to AI",
      "Startups scaling faster than they can hire",
      "Technical teams who want AI automation without building it in-house",
    ],
    problems: [
      {
        problem: "You're spending founder time on tasks that shouldn't need a human",
        solution: "We identify and automate your highest-friction manual tasks — lead qualification, onboarding emails, data entry — so you focus on what moves the needle.",
      },
      {
        problem: "Enterprise AI tools are too expensive and too complex for your stage",
        solution: "We build lean, focused automation pipelines sized for startups — fast to deploy, cheap to run, and easy to hand off to your team.",
      },
      {
        problem: "You tried no-code automation but it breaks constantly",
        solution: "We build on solid engineering foundations with proper error handling, monitoring, and fallbacks — so automations run reliably, not just in demos.",
      },
    ],
    faqs: [
      {
        question: "What is AI automation for startups?",
        answer: "AI automation for startups means using AI agents and automated pipelines to handle repetitive operational tasks — customer onboarding, lead qualification, reporting — so small teams can operate at the speed of larger ones.",
      },
      {
        question: "How is this different from tools like Zapier or Make?",
        answer: "Zapier connects existing tools. We build AI agents that can reason, make decisions, and handle unstructured inputs — tasks that rule-based automation can't handle reliably.",
      },
      {
        question: "What's the minimum engagement size?",
        answer: "We work with startups from pre-seed onwards. Engagements start from focused 2-week automation sprints through to ongoing AI infrastructure partnerships.",
      },
      {
        question: "Do we need a technical team to maintain it?",
        answer: "No. We build with maintainability in mind and provide documentation. For complex systems, we offer ongoing support retainers.",
      },
    ],
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
    process: [
      {
        step: "01",
        title: "Store Audit",
        description: "We analyse your support ticket volume, inventory patterns, and customer behaviour data to identify where AI agents will have the highest impact.",
      },
      {
        step: "02",
        title: "Agent Development",
        description: "We build and train agents on your product catalogue, policies, and historical data — so they respond accurately and on-brand from day one.",
      },
      {
        step: "03",
        title: "Integration & Handoff",
        description: "We integrate agents into your storefront and ops tools, set up human escalation paths, and monitor performance metrics post-launch.",
      },
    ],
    idealFor: [
      "D2C brands handling 100+ support tickets per day",
      "Ecommerce stores with large catalogues needing smart search",
      "Brands wanting personalised shopping experiences at scale",
      "Operations teams managing multi-warehouse inventory manually",
    ],
    problems: [
      {
        problem: "Your support team is overwhelmed with repetitive order and returns questions",
        solution: "Our AI support agent resolves order status, return requests, and product questions autonomously — escalating only complex cases to your team.",
      },
      {
        problem: "You're losing sales because customers can't find the right product",
        solution: "We build AI-powered search and recommendation systems that understand intent, not just keywords — increasing conversion and average order value.",
      },
      {
        problem: "You find out about stockouts after they've already cost you sales",
        solution: "Real-time inventory monitoring with predictive restock alerts means you act before stockouts happen, not after.",
      },
    ],
    faqs: [
      {
        question: "What is agentic AI for ecommerce?",
        answer: "Agentic AI for ecommerce refers to autonomous AI systems that can take actions on behalf of your store — answering customer queries, managing inventory alerts, personalising recommendations — without human intervention for routine tasks.",
      },
      {
        question: "Which platforms do you support?",
        answer: "Shopify and WooCommerce natively. We also build for custom ecommerce stacks via API integration.",
      },
      {
        question: "How accurate is the AI support agent?",
        answer: "Trained on your product catalogue and policies, our agents typically resolve 75–85% of tier-1 tickets without human escalation within the first month.",
      },
      {
        question: "What happens when the AI can't answer a question?",
        answer: "The agent escalates to a human with full conversation context — no customer has to repeat themselves. Escalation thresholds are configurable.",
      },
    ],
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
    process: [
      {
        step: "01",
        title: "CRM Audit",
        description: "We audit your current CRM setup, data quality, and sales workflow to identify where AI will create the most immediate leverage.",
      },
      {
        step: "02",
        title: "Model & Integration",
        description: "We build lead scoring models, draft generation prompts, and churn prediction logic — integrated directly into your existing CRM interface.",
      },
      {
        step: "03",
        title: "Train & Optimise",
        description: "We run the system alongside your team, collect feedback, and continuously improve model accuracy based on real outcomes.",
      },
    ],
    idealFor: [
      "B2B sales teams managing large pipelines manually",
      "SaaS companies wanting to reduce churn proactively",
      "Revenue teams spending too much time on CRM data entry",
      "Founders who need sales infrastructure without a full RevOps team",
    ],
    problems: [
      {
        problem: "Your sales team doesn't know which leads to prioritise",
        solution: "AI lead scoring ranks every contact by conversion likelihood based on behaviour, firmographics, and engagement signals — so reps focus on the right deals.",
      },
      {
        problem: "Writing follow-up emails takes hours every week",
        solution: "AI drafts personalised follow-ups based on call notes, deal stage, and contact history — your reps review and send in seconds.",
      },
      {
        problem: "You only find out a customer is churning when they cancel",
        solution: "Churn prediction models flag at-risk accounts 30–60 days before they churn, giving your team time to intervene.",
      },
    ],
    faqs: [
      {
        question: "What is an AI-powered CRM solution?",
        answer: "An AI-powered CRM solution adds intelligence to your existing customer relationship management system — automating lead scoring, drafting communications, predicting churn, and surfacing insights that help your sales and success teams act faster.",
      },
      {
        question: "Do we need to switch CRMs?",
        answer: "No. We build on top of your existing CRM — HubSpot, Salesforce, Pipedrive, or custom. No migration required.",
      },
      {
        question: "How accurate is the lead scoring?",
        answer: "Accuracy improves over time as the model trains on your closed deals. Most clients see meaningful signal within the first 4–6 weeks of live data.",
      },
      {
        question: "Can you build a custom CRM with AI built in from the start?",
        answer: "Yes. If your needs outgrow off-the-shelf CRMs, we design and build custom CRM systems with AI-native features from day one.",
      },
    ],
  },
];

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}