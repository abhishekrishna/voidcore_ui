// app/solutions/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

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
      "Production-grade RAG platforms that process contracts, reports, and knowledge bases using secure vector pipelines.",
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
      "End-to-end backend and full-stack engineering for scalable SaaS products.",
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
      "Custom internal tools and AI-powered dashboards that eliminate manual processes.",
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
      "We help early-stage startups automate operations with AI agents — cutting costs, shipping faster.",
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
      "Deploy autonomous AI agents that handle support, inventory, and personalisation for your store.",
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
];

function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug);
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const s = getSolutionBySlug(params.slug);
  if (!s) return {};
  return {
    title: `${s.title} | Voidcore`,
    description: s.description,
    alternates: { canonical: `https://voidcore.in/solutions/${s.slug}` },
    openGraph: {
      title: s.title,
      description: s.description,
      url: `https://voidcore.in/solutions/${s.slug}`,
    },
  };
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SolutionPage({
  params,
}: {
  params: { slug: string };
}) {
  const solution = getSolutionBySlug(params.slug);
  if (!solution) notFound();

  const related = solutions.filter((s) => s.slug !== solution.slug).slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.title,
    description: solution.description,
    provider: {
      "@type": "Organization",
      name: "Voidcore",
      url: "https://voidcore.in",
    },
    areaServed: "IN",
    serviceType: solution.service,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main className="min-h-screen bg-white dark:bg-[#0B0B0F] text-black dark:text-white transition-colors duration-200">

        {/* ── Hero ── */}
        <section className="mx-auto max-w-7xl px-6 pt-36 pb-24">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em]
                       text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white
                       transition-colors mb-12"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All services
          </Link>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-medium
                               text-black/40 dark:text-white/40
                               border border-black/10 dark:border-white/10
                               px-3 py-1.5 rounded-full mb-6">
                {solution.tag}
              </span>

              <h1 className="text-4xl md:text-[3.25rem] font-semibold leading-[1.1] tracking-tight mb-6">
                {solution.title}
              </h1>

              <p className="text-black/60 dark:text-white/60 text-lg leading-relaxed mb-10 max-w-lg">
                {solution.longDescription}
              </p>

              <Link
                href="https://calendly.com/krishna_abhishek/30min"
                target="_blank"
                className="inline-flex items-center gap-2
                           bg-black text-white dark:bg-white dark:text-black
                           font-semibold text-sm px-6 py-3.5 rounded-xl
                           hover:opacity-80 transition-opacity shadow-lg"
              >
                Book a call
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Right — Outcomes */}
            <div className="rounded-2xl border border-black/10 dark:border-white/10
                            bg-black/[0.03] dark:bg-white/[0.03] backdrop-blur-xl p-8
                            shadow-xl shadow-black/5 dark:shadow-black/30">
              <p className="text-xs uppercase tracking-[0.18em] text-black/40 dark:text-white/40 mb-6">
                What you get
              </p>
              <ul className="space-y-4">
                {solution.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0 text-black/40 dark:text-white/40" />
                    <span className="text-sm leading-relaxed text-black/80 dark:text-white/80">
                      {outcome}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="border-t border-black/10 dark:border-white/10" />
        </div>

        {/* ── Stack ── */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-xs uppercase tracking-[0.18em] text-black/40 dark:text-white/40 mb-6">
            Tech stack
          </p>
          <div className="flex flex-wrap gap-3">
            {solution.stack.map((tech) => (
              <span
                key={tech}
                className="text-sm font-medium px-4 py-2 rounded-xl
                           border border-black/10 dark:border-white/10
                           bg-black/[0.03] dark:bg-white/[0.03]
                           text-black/70 dark:text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* ── Divider ── */}
        <div className="mx-auto max-w-7xl px-6">
          <div className="border-t border-black/10 dark:border-white/10" />
        </div>

        {/* ── Related Solutions ── */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <p className="text-xs uppercase tracking-[0.18em] text-black/40 dark:text-white/40 mb-8">
            Other solutions
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/solutions/${s.slug}`}
                className="group rounded-2xl border border-black/10 dark:border-white/10
                           bg-black/[0.03] dark:bg-white/[0.03] backdrop-blur-xl p-6
                           hover:bg-black/[0.07] dark:hover:bg-white/[0.07]
                           hover:border-black/20 dark:hover:border-white/20
                           hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20
                           transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-[0.18em] font-medium
                                   text-black/40 dark:text-white/40
                                   border border-black/10 dark:border-white/10
                                   px-2.5 py-1 rounded-full">
                    {s.tag}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-black/20 dark:text-white/20
                                           group-hover:text-black/60 dark:group-hover:text-white/60
                                           transition-colors" />
                </div>
                <h3 className="text-base font-medium mb-2 leading-snug">{s.title}</h3>
                <p className="text-black/50 dark:text-white/50 text-xs leading-relaxed">
                  {s.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA Strip ── */}
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="rounded-2xl border border-black/10 dark:border-white/10
                          bg-black/[0.03] dark:bg-white/[0.03] backdrop-blur-xl
                          px-10 py-14 flex flex-col md:flex-row items-center justify-between gap-8
                          shadow-xl shadow-black/5 dark:shadow-black/30">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-black/40 dark:text-white/40 mb-3">
                Ready to build?
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Let's talk about your project.
              </h2>
            </div>
            <Link
              href="https://calendly.com/krishna_abhishek/30min"
              target="_blank"
              className="shrink-0 inline-flex items-center gap-2
                         bg-black text-white dark:bg-white dark:text-black
                         font-semibold text-sm px-7 py-4 rounded-xl
                         hover:opacity-80 transition-opacity shadow-lg"
            >
              Book a free call
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
