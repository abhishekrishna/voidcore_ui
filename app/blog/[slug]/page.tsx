"use client";

import React from "react";
import BlogContent from "./BlogContent";
import { useParams, useRouter } from "next/navigation";

const blogs = [
{
  slug: "ai-agents-fastapi-langchain",
  title: "Building AI Agents with FastAPI & LangChain",
  date: "2025-09-18",
  image: "/blog/ai-agents-nextjs.png",
  stack: ["FastAPI", "LangChain", "OpenAI", "Python"],
  content: `
    <p>Artificial Intelligence agents are becoming essential for automating workflows and building smarter applications. In this tutorial, we’ll show you how to build an <strong>AI Agent with FastAPI and LangChain</strong>, expose it as an API, and scale it for real-world use cases.</p>

    <h2>⚡ Why FastAPI + LangChain?</h2>
    <p><strong>FastAPI</strong> is a modern Python framework for building high-performance APIs, while <strong>LangChain</strong> provides the building blocks for creating AI agents that connect LLMs to external tools and data sources. Combined, they let you create <em>production-ready AI agents</em> that can plug directly into apps, dashboards, and workflows.</p>

    <h2>🛠️ Prerequisites</h2>
    <ul>
      <li>Python 3.9+</li>
      <li>FastAPI, Uvicorn, LangChain, and OpenAI SDK installed</li>
      <li>Basic knowledge of APIs and Python</li>
    </ul>

    <pre><code class="language-bash">pip install fastapi uvicorn langchain openai</code></pre>

    <h2>🚀 Step 1: Set Up FastAPI</h2>
    <pre><code class="language-python">from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "AI Agent API is running!"}
</code></pre>

    <p>Run the server:</p>
    <pre><code class="language-bash">uvicorn main:app --reload</code></pre>

    <h2>🤖 Step 2: Create a LangChain Agent</h2>
    <pre><code class="language-python">from langchain_openai import ChatOpenAI
from langchain.agents import initialize_agent, Tool

def calculator_tool(expression: str) -> str:
    try:
        return str(eval(expression))
    except Exception as e:
        return f"Error: {str(e)}"

tools = [Tool(name="Calculator", func=calculator_tool, description="Useful for math")]

llm = ChatOpenAI(model="gpt-4o-mini")
agent = initialize_agent(tools, llm, agent="chat-zero-shot-react-description", verbose=True)
</code></pre>

    <h2>🌐 Step 3: Expose the Agent via FastAPI</h2>
    <pre><code class="language-python">from pydantic import BaseModel

class Query(BaseModel):
    question: str

@app.post("/ask")
async def ask_agent(query: Query):
    response = agent.run(query.question)
    return {"answer": response}
</code></pre>

    <p>Send a POST request:</p>
    <pre><code class="language-bash">curl -X POST "http://127.0.0.1:8000/ask" \
    -H "Content-Type: application/json" \
    -d '{"question": "What is 15 * 12?"}'</code></pre>

    <h2>📊 Architecture Overview</h2>
    <p>Here’s a simple flow diagram of how requests move through the system:</p>
    <pre>
    [Client Request] → [FastAPI Endpoint] → [LangChain Agent] → [LLM / Tools] → [Response]
    </pre>

    <h2>🔒 Step 4: Secure & Scale Your Agent</h2>
    <ul>
      <li><strong>Rate limiting:</strong> Prevent abuse with request throttling.</li>
      <li><strong>Authentication:</strong> Use API keys or OAuth for protection.</li>
      <li><strong>Monitoring:</strong> Log inputs/outputs for debugging.</li>
      <li><strong>Streaming:</strong> Enable async streaming for real-time results.</li>
      <li><strong>Deployment:</strong> Use Docker/Kubernetes for scaling in production.</li>
    </ul>

    <h2>🚀 Step 5: Extend Your Agent</h2>
    <ul>
      <li>Integrate vector databases (Pinecone, Weaviate, MongoDB Atlas) for RAG.</li>
      <li>Add domain-specific tools (APIs, file readers, custom logic).</li>
      <li>Deploy as SaaS or integrate into Slack/Discord for real-time usage.</li>
    </ul>

    <h2>✅ Conclusion</h2>
    <p>By combining <strong>FastAPI</strong> and <strong>LangChain</strong>, developers can create scalable, secure, and intelligent AI agents. Whether it’s for customer support, document automation, or data analysis, this stack gives you the flexibility to go from prototype to production quickly.</p>

    <p>If you’re looking to build or scale AI-powered products, our team at <strong>Void Core Technologies</strong> can help you design, develop, and deploy AI agents tailored to your business needs.</p>

    <h3>📈 SEO Keywords</h3>
    <ul>
      <li>FastAPI LangChain AI Agent Tutorial</li>
      <li>Build AI Agent with FastAPI and LangChain</li>
      <li>Secure AI Agent with FastAPI LangChain</li>
      <li>Deploy LangChain Agent using FastAPI</li>
    </ul>
  `,
},
  {
    slug: "ai-agents-fastapi-langchain",
    title: "Building AI Agents with FastAPI & LangChain",
    date: "2025-08-15",
    image: "/blog/ai-agents-nextjs.png",
    stack: ["Next.js", "LangChain", "OpenAI"],
    content: `
      <p>Discover how to build powerful AI agents using FastAPI and LangChain. This guide covers architecture, deployment, and integration with OpenAI for real-world automation.</p>
      <ul>
        <li>Setting up FastAPI for scalable APIs</li>
        <li>Integrating LangChain for agent workflows</li>
        <li>Connecting to OpenAI for advanced reasoning</li>
      </ul>
    `,
  },
  {
    slug: "design-systems-fast-product-teams",
    title: "My New Blog Post",
    date: "2025-09-05",
    image: "/blog/my-new-blog.png",
    stack: ["React", "Next.js"],
    content: `
      <p>This is my new blog post. You can write content in HTML here.</p>
      <ul>
        <li>Point one</li>
        <li>Point two</li>
      </ul>
    `,
  },
];

export default function BlogPage() {
  const { slug } = useParams(); // ✅ replaces router.query
  const router = useRouter();

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-32 text-white flex flex-col items-center justify-center min-h-[80vh]">
        <h1 className="text-3xl font-bold mb-6">Article not found</h1>
        <button
          onClick={() => router.back()}
          className="mt-4 px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition shadow"
        >
          ← Back
        </button>
      </main>
    );
  }

  return (
  <main className="mx-auto max-w-7xl px-8 py-32">
      <div className="mb-10 flex items-center gap-4">
        <button
          onClick={() => router.back()}
          className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition shadow"
        >
          ← Back
        </button>
        <span className="text-white/60 text-sm">Back to all blogs</span>
      </div>
  <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl p-12">
        <div className="relative w-full h-64 mb-8">
          <img
            src={blog.image}
            alt={blog.title}
            className="rounded-xl w-full h-64 object-cover bg-black/10 shadow-lg"
          />
        </div>
        <h1 className="text-5xl font-bold text-white mb-4 leading-tight">{blog.title}</h1>
        <div className="flex items-center gap-4 mb-6">
          <div className="text-xs text-white/60">{blog.date}</div>
          <div className="flex flex-wrap gap-2">
            {blog.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <hr className="border-white/10 mb-8" />
        <div
          className="prose prose-invert text-white max-w-none text-lg"
          style={{
            '--tw-prose-li-margin': '1.2em',
            '--tw-prose-li-padding': '0.7em 0',
            '--tw-prose-ul-margin': '1.5em',
          } as React.CSSProperties}
        >
          {/* Render HTML with scrollable code blocks and extra emojis */}
          <BlogContent html={blog.content} />
        </div>
      </div>
    </main>
  );
}