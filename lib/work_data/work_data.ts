export type Metric = {
  value: string;
  label: string;
  sub?: string;
  icon?: string;
};

export type Section = {
  heading: string;
  body: string;
};

export type CodeExample = {
  title: string;
  file: string;
  language: string;
  description: string;
  code: string;
};

export type ArchLayer = {
  name: string;
  tech: string;
  description: string;
};

export type BeforeAfterItem = {
  before: string;
  after: string;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type TechCategory = {
  category: string;
  items: string[];
};

export type DeepDive = {
  beforeAfter: { heading: string; items: BeforeAfterItem[] };
  processSteps: { heading: string; body: string; steps: ProcessStep[] };
  architecture: { heading: string; body: string; layers: ArchLayer[] };
  techCategories: TechCategory[];
  approach: { heading: string; body: string; rejected: { option: string; reason: string }[] };
  dataModel: { heading: string; body: string; code: CodeExample };
  apiLayer: { heading: string; body: string; code: CodeExample };
  dbFunctions: { heading: string; body: string; code: CodeExample };
  frontendConnection: { heading: string; body: string; code: CodeExample };
  lessons: { heading: string; items: { title: string; body: string }[] };
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
  deepDive?: DeepDive;
};

export const projects: Project[] = [
  // ─── PROJECT 1 ───────────────────────────────────────────────────────────────
  {
    id: 1,
    slug: "ai-document-intelligence",
    title: "AI Document Intelligence Platform",
    description: "Built a production-grade RAG system to process large PDF datasets, extract structured insights, and generate strategic summaries using FastAPI, LangChain, and pgvector.",
    image: "https://res.cloudinary.com/dqzte0i12/image/upload/v1773421447/original-b1834271e042a940a4da9edc316725d1_dmzkd0.webp",
    tag: "AI / RAG",
    year: "2024",
    techStack: ["FastAPI", "LangChain", "pgvector", "PostgreSQL", "OpenAI", "Docker", "AWS S3"],
    metrics: [
      { value: "96%", label: "Query Accuracy", sub: "on benchmark set", icon: "Target" },
      { value: "8 min", label: "Report Time", sub: "down from 3–4 hrs", icon: "Clock" },
      { value: "500+", label: "Daily Queries", sub: "at sub-2s latency", icon: "Zap" },
      { value: "3×", label: "Team Expansion", sub: "within 2 months", icon: "TrendingUp" },
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
      body: "Report generation time dropped from 3–4 hours to under 8 minutes. The system now handles 500+ document queries per day with sub-2s average response times. The client expanded the platform to three additional departments within two months, eliminating an estimated 1,200 analyst hours per quarter.",
    },
    deepDive: {
      beforeAfter: {
        heading: "Before & After",
        items: [
          { before: "Analysts spent 3-4 hours manually reading PDFs to produce a single report", after: "Reports generated in under 8 minutes with cited, structured output" },
          { before: "40,000+ documents were unsearchable across shared drives", after: "Every document instantly queryable with sub-2s response times" },
          { before: "Answers required senior analysts — a bottleneck on every project", after: "Any team member can query the system independently, 24/7" },
          { before: "No audit trail — impossible to verify where answers came from", after: "Every answer includes source citations with page-level references" },
        ],
      },
      processSteps: {
        heading: "How We Built It",
        body: "We broke the build into four sequential phases, each with a clear deliverable before moving to the next.",
        steps: [
          { title: "Data audit & pipeline design", description: "Mapped all 40k documents, assessed quality, and designed the chunking and embedding strategy. Validated pgvector latency targets before committing to the stack." },
          { title: "Ingestion pipeline", description: "Built the S3 upload flow, PyMuPDF text extraction, 512-token chunking with overlap, and the Celery worker that manages embedding jobs asynchronously." },
          { title: "Query API & LLM integration", description: "Implemented FastAPI query endpoints, LangChain LCEL pipeline, similarity search via PostgreSQL functions, and structured prompt with citation enforcement." },
          { title: "Flutter frontend & streaming UI", description: "Built the Flutter Web interface with SSE token streaming, inline citation chips, document upload flow, and query history with exportable report generation." },
        ],
      },
      architecture: {
        heading: "System Architecture",
        body: "The system splits into two flows: an async ingestion pipeline and a synchronous query pipeline. Ingestion moves through S3, a Celery worker, and pgvector. Queries are synchronous FastAPI endpoints that hit pgvector, assemble context, and call OpenAI.",
        layers: [
          { name: "Ingestion Layer", tech: "S3 + Celery + PyMuPDF", description: "PDFs land in S3. A Celery worker extracts text with PyMuPDF, chunks into 512-token segments with 64-token overlap, and dispatches embedding jobs." },
          { name: "Embedding Service", tech: "OpenAI text-embedding-3-small", description: "Each chunk is embedded via the OpenAI embeddings API. Embeddings are 1536-dimensional vectors stored with chunk metadata in pgvector." },
          { name: "Vector Store", tech: "PostgreSQL + pgvector", description: "HNSW index on the embedding column enables approximate nearest-neighbour search at sub-50ms latency across 2M+ vectors." },
          { name: "Query API", tech: "FastAPI + LangChain LCEL", description: "Receives a user query, embeds it, runs similarity search, assembles top-k chunks into a prompt, and streams the LLM response back to the client." },
          { name: "LLM Layer", tech: "OpenAI GPT-4o", description: "Receives a structured prompt with retrieved context, a system instruction enforcing citation, and a JSON output schema for structured responses." },
          { name: "Frontend", tech: "Flutter Web", description: "Streams the response token-by-token using SSE. Renders citations as inline source chips that expand to show the original document chunk." },
        ],
      },
      techCategories: [
        { category: "Backend", items: ["FastAPI", "Python", "LangChain", "Celery"] },
        { category: "AI / ML", items: ["OpenAI GPT-4o", "text-embedding-3-small", "pgvector"] },
        { category: "Database", items: ["PostgreSQL", "Redis"] },
        { category: "Infrastructure", items: ["AWS S3", "Docker", "AWS ECS"] },
        { category: "Frontend", items: ["Flutter Web", "Dart"] },
      ],
      approach: {
        heading: "How We Approached the Problem",
        body: "Before writing code we mapped the full data lifecycle: parse, chunk, embed, store, retrieve. Each stage had its own failure modes. We ran a two-day spike to validate pgvector latency targets before committing — it passed, saving infrastructure cost and operational complexity.",
        rejected: [
          { option: "Pinecone as vector store", reason: "Added an external dependency and egress cost. pgvector on the existing Postgres instance met p95 latency targets at a fraction of the price." },
          { option: "LlamaIndex instead of LangChain", reason: "LlamaIndex had better document loaders but weaker chain composition. LangChain LCEL made it easier to build testable, swappable pipeline steps." },
          { option: "Async queue for every query", reason: "Queries needed to feel synchronous in the UI. We reserved the queue only for ingestion, keeping query paths as fast synchronous endpoints." },
        ],
      },
      dataModel: {
        heading: "Data Modelling",
        body: "Two core tables: documents (metadata and processing status) and document_chunks (text segments with vector embeddings). Keeping them separate means we can re-embed all chunks for a document if the embedding model changes without touching metadata.",
        code: {
          title: "Database Schema",
          file: "schema.sql",
          language: "sql",
          description: "Core tables with pgvector extension. The HNSW index on the embedding column is the performance-critical piece — without it, similarity search degrades to a full table scan.",
          code: `CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE documents (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  filename    TEXT NOT NULL,
  s3_key      TEXT NOT NULL UNIQUE,
  status      TEXT NOT NULL DEFAULT 'pending',
  page_count  INT,
  org_id      UUID NOT NULL REFERENCES organisations(id),
  uploaded_by UUID NOT NULL REFERENCES users(id),
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  indexed_at  TIMESTAMPTZ
);

CREATE TABLE document_chunks (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  document_id UUID NOT NULL REFERENCES documents(id) ON DELETE CASCADE,
  chunk_index INT NOT NULL,
  content     TEXT NOT NULL,
  embedding   vector(1536),
  token_count INT,
  page_number INT,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_chunks_embedding
  ON document_chunks
  USING hnsw (embedding vector_cosine_ops)
  WITH (m = 16, ef_construction = 64);

CREATE INDEX idx_documents_org ON documents (org_id, status);`,
        },
      },
      apiLayer: {
        heading: "API Layer",
        body: "FastAPI handles document upload (async) and query (synchronous streaming). LangChain LCEL composes the query pipeline as typed, testable steps — embed → retrieve → prompt → stream.",
        code: {
          title: "Query Pipeline",
          file: "query_service.py",
          language: "python",
          description: "The full query pipeline as a LangChain LCEL chain. Each step is a Runnable — easily swappable and independently testable.",
          code: `from langchain_core.runnables import RunnablePassthrough, RunnableLambda
from langchain_core.output_parsers import JsonOutputParser
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_postgres import PGVector
from pydantic import BaseModel
from typing import List

class QueryResponse(BaseModel):
    answer: str
    citations: List[dict]
    confidence: float

embeddings = OpenAIEmbeddings(model="text-embedding-3-small")
vector_store = PGVector(
    embeddings=embeddings,
    collection_name="document_chunks",
    connection=settings.DATABASE_URL,
)
retriever = vector_store.as_retriever(
    search_type="similarity",
    search_kwargs={"k": 6},
)

SYSTEM_PROMPT = """You are a precise document analyst.
Answer using ONLY the provided context.
Always cite sources as [doc_id:page].
Return valid JSON matching the schema."""

def build_prompt(inputs: dict) -> str:
    context = "\n\n".join(
        f"[{d.metadata['doc_id']}:p{d.metadata['page']}] {d.page_content}"
        for d in inputs["context"]
    )
    return f"{SYSTEM_PROMPT}\n\nContext:\n{context}\n\nQuestion: {inputs['question']}"

query_chain = (
    {"context": retriever, "question": RunnablePassthrough()}
    | RunnableLambda(build_prompt)
    | ChatOpenAI(model="gpt-4o", temperature=0)
    | JsonOutputParser(pydantic_object=QueryResponse)
)

@router.post("/query")
async def query_documents(body: QueryRequest):
    return StreamingResponse(
        query_chain.astream(body.question),
        media_type="text/event-stream",
    )`,
        },
      },
      dbFunctions: {
        heading: "Database Functions",
        body: "Similarity search and chunk retrieval moved into PostgreSQL functions rather than application code. This keeps heavy lifting close to the data and makes org-level filtering easy without touching application logic.",
        code: {
          title: "Similarity Search Function",
          file: "functions.sql",
          language: "sql",
          description: "A single PostgreSQL function wraps vector similarity search, org-level filtering, and chunk hydration in one call.",
          code: `CREATE OR REPLACE FUNCTION match_chunks(
  query_embedding  vector(1536),
  org_id           UUID,
  match_count      INT     DEFAULT 6,
  similarity_floor FLOAT   DEFAULT 0.70
)
RETURNS TABLE (
  chunk_id    UUID,
  document_id UUID,
  content     TEXT,
  page_number INT,
  similarity  FLOAT
)
LANGUAGE plpgsql AS $$
BEGIN
  RETURN QUERY
  SELECT
    c.id,
    c.document_id,
    c.content,
    c.page_number,
    1 - (c.embedding <=> query_embedding) AS similarity
  FROM document_chunks c
  JOIN documents d ON d.id = c.document_id
  WHERE
    d.org_id = match_chunks.org_id
    AND d.status = 'indexed'
    AND 1 - (c.embedding <=> query_embedding) >= similarity_floor
  ORDER BY c.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;`,
        },
      },
      frontendConnection: {
        heading: "Frontend Connection",
        body: "All network logic lives in a DocumentRepository class injected via Riverpod. The streamQuery method returns a Stream<String> — the widget listens and appends tokens as they arrive.",
        code: {
          title: "Document Repository + Streaming Query",
          file: "document_repository.dart",
          language: "dart",
          description: "The repository pattern keeps all API knowledge in one place. Stream<String> from streamQuery lets the widget render tokens progressively.",
          code: `import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:riverpod_annotation/riverpod_annotation.dart';

part 'document_repository.g.dart';

class DocumentRepository {
  DocumentRepository({required this.baseUrl, required this.authToken});
  final String baseUrl;
  final String authToken;

  Future<String> uploadDocument(List<int> bytes, String filename) async {
    final request = http.MultipartRequest('POST', Uri.parse('$baseUrl/documents/upload'));
    request.headers['Authorization'] = 'Bearer $authToken';
    request.files.add(http.MultipartFile.fromBytes('file', bytes, filename: filename));
    final response = await request.send();
    final body = jsonDecode(await response.stream.bytesToString());
    return body['job_id'] as String;
  }

  Stream<String> streamQuery(String question) async* {
    final request = http.Request('POST', Uri.parse('$baseUrl/query'))
      ..headers['Authorization'] = 'Bearer $authToken'
      ..headers['Content-Type'] = 'application/json'
      ..body = jsonEncode({'question': question});

    final response = await http.Client().send(request);
    await for (final chunk in response.stream.transform(utf8.decoder)) {
      for (final line in chunk.split('\n')) {
        if (line.startsWith('data: ')) yield line.substring(6);
      }
    }
  }
}

@riverpod
DocumentRepository documentRepository(DocumentRepositoryRef ref) {
  return DocumentRepository(
    baseUrl: AppConfig.apiBaseUrl,
    authToken: ref.watch(authTokenProvider),
  );
}`,
        },
      },
      lessons: {
        heading: "Lessons Learned",
        items: [
          { title: "Chunk overlap matters more than chunk size", body: "512 tokens with no overlap left answers that spanned chunk boundaries incomplete. Adding 64-token overlap improved completeness measurably with negligible storage cost." },
          { title: "Validate the embedding model before you build", body: "Switching from ada-002 to text-embedding-3-small mid-project required re-embedding 2M+ chunks. A model evaluation spike upfront would have saved two days." },
          { title: "PostgreSQL functions beat ORM for vector ops", body: "Moving similarity search into a SQL function was significantly faster than composing through SQLAlchemy, which generated suboptimal query plans that bypassed the HNSW index." },
          { title: "Stream everything LLM-related to the client", body: "A 4-second blank screen waiting for the full response felt like an error. SSE streaming with a typing indicator transformed perceived responsiveness even though total latency was identical." },
        ],
      },
    },
  },
  // ─── PROJECT 2 ───────────────────────────────────────────────────────────────
  {
    id: 2,
    slug: "enterprise-gpt-knowledge-assistant",
    title: "Enterprise GPT Knowledge Assistant",
    description: "Designed and deployed a secure document-aware chatbot with vector search, embeddings, and context-aware responses for internal knowledge workflows.",
    image: "https://res.cloudinary.com/dqzte0i12/image/upload/v1773421568/original-b0ec13fb0afa679de04d7b57b352ade1_vdxhuc.webp",
    tag: "LLM / Search",
    year: "2024",
    techStack: ["Django", "OpenAI", "Pinecone", "Next.js", "TypeScript", "Auth0", "PostgreSQL"],
    metrics: [
      { value: "41%", label: "Fewer Support Tickets", sub: "in first month", icon: "TrendingUp" },
      { value: "60%", label: "Faster Onboarding", sub: "for new hires", icon: "Zap" },
      { value: "1,200+", label: "Weekly Queries", sub: "handled automatically", icon: "BarChart2" },
      { value: "94%", label: "Staff Satisfaction", sub: "from internal survey", icon: "Users" },
    ],
    challenge: {
      heading: "The Challenge",
      body: "A 200-person professional services firm needed employees to query internal knowledge — HR policies, project templates, client SOPs — without bothering senior staff or digging through SharePoint. Knowledge was siloed, new hires took weeks to ramp up, and senior staff fielded the same questions repeatedly.",
    },
    built: {
      heading: "What We Built",
      body: "A secure internal chatbot with role-based document access. Django powers the API and auth layer, Pinecone handles vector storage with one namespace per permission role, and Auth0 provides SSO. The Next.js frontend streams responses token-by-token and surfaces citations inline.",
    },
    results: {
      heading: "Results",
      body: "Internal support tickets dropped 41% in the first month. Onboarding shortened by an estimated 60%. The assistant handles over 1,200 queries per week with a 94% satisfaction rate. The firm rolled out to two partner offices within the first quarter.",
    },
    deepDive: {
      beforeAfter: {
        heading: "Before & After",
        items: [
          { before: "Employees emailed HR or senior staff for every policy question — answers took hours or days", after: "Any employee gets an instant cited answer from the assistant in seconds" },
          { before: "New hires spent weeks shadowing colleagues just to learn where information lived", after: "Onboarding cut by 60% — new hires query the assistant independently from day one" },
          { before: "Knowledge was siloed by department — no cross-team visibility into SOPs or templates", after: "A single interface surfaces relevant knowledge across all permitted departments" },
          { before: "No audit trail — impossible to know if employees were getting accurate answers", after: "Every response is grounded in source documents with traceable citations" },
        ],
      },
      processSteps: {
        heading: "How We Built It",
        body: "We designed the permission model before touching AI. Getting access control right first meant we never had to retrofit security onto a working system.",
        steps: [
          { title: "Permission model & Auth0 setup", description: "Designed the role-to-namespace mapping, configured Auth0 SSO, extended Django's user model, and validated that JWT claims could drive Pinecone namespace resolution end-to-end." },
          { title: "Document ingestion pipeline", description: "Built Celery workers for chunking, OpenAI embedding, and role-scoped Pinecone upserts. Established the convention that Auth0 role names mirror Pinecone namespaces exactly." },
          { title: "Django query API with SSE streaming", description: "Implemented the DRF query view, QueryService with multi-namespace retrieval and re-ranking, and the StreamingHttpResponse SSE pipeline." },
          { title: "Next.js chat interface", description: "Built the useChatStream hook, streaming chat UI, citation chip rendering, and server-component conversation history loading. Deployed to Vercel." },
        ],
      },
      architecture: {
        heading: "System Architecture",
        body: "A three-tier architecture with an AI retrieval layer between the API and LLM. Django owns business logic and permission enforcement. Pinecone owns vector search. Next.js owns the UI.",
        layers: [
          { name: "Auth Layer", tech: "Auth0 + Django", description: "Auth0 handles SSO and issues JWTs. Django validates the token on every request and resolves the user's role and Pinecone namespaces before any query reaches Pinecone." },
          { name: "Document Ingestion", tech: "Django + Celery + OpenAI", description: "Uploaded documents are queued in Celery, chunked into 400-token segments, embedded via OpenAI, and upserted into the role-scoped Pinecone namespace." },
          { name: "Vector Store", tech: "Pinecone", description: "One namespace per permission role. Metadata on each vector stores document_id, chunk_index, and page. Queries filter by namespace before similarity scoring." },
          { name: "Query API", tech: "Django REST Framework", description: "Receives a question, resolves the user's namespaces, queries Pinecone for top-k chunks, assembles the prompt, and streams the OpenAI response as SSE." },
          { name: "LLM Layer", tech: "OpenAI GPT-4o", description: "Structured system prompt instructs the model to answer only from provided context and cite sources. Temperature 0 for deterministic responses." },
          { name: "Frontend", tech: "Next.js + TypeScript", description: "Server components fetch conversation history. A client component connects to the Django SSE endpoint and renders tokens as they stream, with citation chips inline." },
        ],
      },
      techCategories: [
        { category: "Backend", items: ["Django", "Django REST Framework", "Python", "Celery"] },
        { category: "AI / ML", items: ["OpenAI GPT-4o", "text-embedding-3-small"] },
        { category: "Vector Store", items: ["Pinecone"] },
        { category: "Database", items: ["PostgreSQL", "Redis"] },
        { category: "Auth", items: ["Auth0"] },
        { category: "Frontend", items: ["Next.js", "TypeScript", "Vercel"] },
      ],
      approach: {
        heading: "How We Approached the Problem",
        body: "The core constraint was access control — employees in different roles could not see each other's documents. We designed the permission model first. Every Pinecone vector carries metadata with the document's permission scope, and every query filters on that scope server-side.",
        rejected: [
          { option: "Single shared vector namespace", reason: "A single namespace makes per-user filtering possible but expensive at scale. Namespace-per-role gave hard isolation and faster retrieval." },
          { option: "FastAPI instead of Django", reason: "The firm's user and permission tables were already in a Django app. DRF let us reuse ORM models, permission classes, and admin panel without rebuilding auth." },
          { option: "Vercel AI SDK for streaming", reason: "The Vercel AI SDK assumes a Next.js API route as the streaming origin. Our backend was Django, so we implemented SSE directly with StreamingHttpResponse." },
        ],
      },
      dataModel: {
        heading: "Data Modelling",
        body: "Django models own the relational side: users, roles, documents, conversations. Pinecone owns the vector side. The document model stores Pinecone vector IDs so we can delete or re-embed without a full index rebuild.",
        code: {
          title: "Django Models",
          file: "models.py",
          language: "python",
          description: "Core Django models. The Document model stores the Pinecone namespace for permission-scoped retrieval as a simple field lookup.",
          code: `from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid

class Role(models.Model):
    id          = models.UUIDField(primary_key=True, default=uuid.uuid4)
    name        = models.CharField(max_length=100, unique=True)
    pinecone_ns = models.CharField(max_length=100, unique=True)
    created_at  = models.DateTimeField(auto_now_add=True)

class User(AbstractUser):
    id       = models.UUIDField(primary_key=True, default=uuid.uuid4)
    roles    = models.ManyToManyField(Role, related_name="users", blank=True)
    auth0_id = models.CharField(max_length=128, unique=True, null=True)

class Document(models.Model):
    class Status(models.TextChoices):
        PENDING    = "pending"
        PROCESSING = "processing"
        INDEXED    = "indexed"
        FAILED     = "failed"

    id          = models.UUIDField(primary_key=True, default=uuid.uuid4)
    filename    = models.CharField(max_length=255)
    role        = models.ForeignKey(Role, on_delete=models.CASCADE)
    status      = models.CharField(max_length=20, choices=Status.choices, default=Status.PENDING)
    vector_ids  = models.JSONField(default=list)
    uploaded_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    created_at  = models.DateTimeField(auto_now_add=True)
    indexed_at  = models.DateTimeField(null=True, blank=True)

class Conversation(models.Model):
    id         = models.UUIDField(primary_key=True, default=uuid.uuid4)
    user       = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

class Message(models.Model):
    class Role(models.TextChoices):
        USER      = "user"
        ASSISTANT = "assistant"

    id           = models.UUIDField(primary_key=True, default=uuid.uuid4)
    conversation = models.ForeignKey(Conversation, on_delete=models.CASCADE, related_name="messages")
    role         = models.CharField(max_length=20, choices=Role.choices)
    content      = models.TextField()
    citations    = models.JSONField(default=list)
    created_at   = models.DateTimeField(auto_now_add=True)`,
        },
      },
      apiLayer: {
        heading: "API Layer",
        body: "Django REST Framework handles the query endpoint. The view resolves namespaces from the user's roles, delegates to QueryService which retrieves from Pinecone, and streams the OpenAI response via StreamingHttpResponse.",
        code: {
          title: "Query View + Service",
          file: "views.py",
          language: "python",
          description: "The query view is thin — it delegates to QueryService which owns retrieval and LLM logic. Keeping the view clean means QueryService is independently testable.",
          code: `import json
from django.http import StreamingHttpResponse
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from .services import QueryService
from .auth import Auth0JWTAuthentication

class QueryView(APIView):
    authentication_classes = [Auth0JWTAuthentication]
    permission_classes     = [IsAuthenticated]

    def post(self, request):
        question   = request.data.get("question", "").strip()
        namespaces = list(request.user.roles.values_list("pinecone_ns", flat=True))
        service    = QueryService(namespaces=namespaces)
        return StreamingHttpResponse(service.stream(question), content_type="text/event-stream")

from openai import OpenAI
from pinecone import Pinecone
from django.conf import settings

class QueryService:
    def __init__(self, namespaces: list[str]):
        self.namespaces = namespaces
        self.pc    = Pinecone(api_key=settings.PINECONE_API_KEY)
        self.index = self.pc.Index(settings.PINECONE_INDEX)
        self.oai   = OpenAI(api_key=settings.OPENAI_API_KEY)

    def _embed(self, text: str) -> list[float]:
        return self.oai.embeddings.create(input=text, model="text-embedding-3-small").data[0].embedding

    def _retrieve(self, embedding: list[float]) -> list:
        results = []
        for ns in self.namespaces:
            hits = self.index.query(vector=embedding, top_k=6, namespace=ns, include_metadata=True)
            results.extend(hits.matches)
        results.sort(key=lambda x: x.score, reverse=True)
        return results[:6]

    def stream(self, question: str):
        chunks  = self._retrieve(self._embed(question))
        context = "\n\n".join(f"[{c.metadata['doc_id']}] {c.metadata['text']}" for c in chunks)
        stream  = self.oai.chat.completions.create(
            model="gpt-4o", temperature=0, stream=True,
            messages=[
                {"role": "system", "content": "Answer using ONLY the provided context. Cite as [doc_id]."},
                {"role": "user",   "content": f"Context:\n{context}\n\nQuestion: {question}"},
            ],
        )
        for chunk in stream:
            yield f"data: {json.dumps({'token': chunk.choices[0].delta.content or ''})}\n\n"`,
        },
      },
      dbFunctions: {
        heading: "Database Functions",
        body: "PostgreSQL functions handle conversation context fetching and bulk document status updates after ingestion.",
        code: {
          title: "Conversation & Ingestion Functions",
          file: "functions.sql",
          language: "sql",
          description: "Fetching conversation history for context window management and atomically marking batches of documents as indexed.",
          code: `CREATE OR REPLACE FUNCTION get_conversation_context(
  p_conversation_id UUID,
  p_limit           INT DEFAULT 10
)
RETURNS TABLE (role TEXT, content TEXT, created_at TIMESTAMPTZ)
LANGUAGE sql STABLE AS $$
  SELECT role, content, created_at
  FROM   assistant_message
  WHERE  conversation_id = p_conversation_id
  ORDER  BY created_at DESC
  LIMIT  p_limit;
$$;

CREATE OR REPLACE FUNCTION mark_documents_indexed(doc_ids UUID[])
RETURNS INT
LANGUAGE plpgsql AS $$
DECLARE updated_count INT;
BEGIN
  UPDATE assistant_document
  SET status = 'indexed', indexed_at = now()
  WHERE id = ANY(doc_ids) AND status = 'processing';
  GET DIAGNOSTICS updated_count = ROW_COUNT;
  RETURN updated_count;
END;
$$;`,
        },
      },
      frontendConnection: {
        heading: "Frontend Connection",
        body: "A useChatStream hook manages the full lifecycle — sending a message, reading the SSE stream, appending tokens to the buffer, and handling errors. The component never touches fetch directly.",
        code: {
          title: "useChatStream Hook",
          file: "useChatStream.ts",
          language: "typescript",
          description: "Typed React hook that manages the chat lifecycle. The component just calls sendMessage and reads back streaming state.",
          code: `import { useState, useCallback, useRef } from "react";

type Message = { id: string; role: "user" | "assistant"; content: string };

export function useChatStream(conversationId: string, token: string) {
  const [messages, setMessages]   = useState<Message[]>([]);
  const [isStreaming, setStreaming] = useState(false);
  const [error, setError]          = useState<string | null>(null);
  const abortRef                   = useRef<AbortController | null>(null);

  const sendMessage = useCallback(async (question: string) => {
    setMessages((p) => [...p, { id: crypto.randomUUID(), role: "user", content: question }]);
    setStreaming(true);
    setError(null);

    const assistantId = crypto.randomUUID();
    setMessages((p) => [...p, { id: assistantId, role: "assistant", content: "" }]);
    abortRef.current = new AbortController();

    try {
      const res = await fetch(\`\${process.env.NEXT_PUBLIC_API_URL}/api/query/\`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: \`Bearer \${token}\` },
        body: JSON.stringify({ question, conversation_id: conversationId }),
        signal: abortRef.current.signal,
      });
      const reader  = res.body!.getReader();
      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        for (const line of decoder.decode(value).split("\n")) {
          if (!line.startsWith("data: ")) continue;
          const { token: t } = JSON.parse(line.slice(6));
          setMessages((p) => p.map((m) => m.id === assistantId ? { ...m, content: m.content + t } : m));
        }
      }
    } catch (err: any) {
      if (err.name !== "AbortError") setError("Something went wrong. Please try again.");
    } finally { setStreaming(false); }
  }, [conversationId, token]);

  return { messages, isStreaming, error, sendMessage };
}`,
        },
      },
      lessons: {
        heading: "Lessons Learned",
        items: [
          { title: "Namespace-per-role beats metadata filtering at scale", body: "A single namespace with role metadata became the bottleneck at 500k+ vectors. Per-role namespaces dropped p95 query latency by 60% since each query scanned a fraction of the index." },
          { title: "Django ORM is a liability for bulk vector operations", body: "Upserting thousands of embeddings through the ORM was slow — one INSERT per object. We bypassed it using psycopg2 execute_values and batched Pinecone upserts of 100 vectors." },
          { title: "Auth0 roles should mirror Pinecone namespaces exactly", body: "A custom role-to-namespace mapping table was a bug source when roles were renamed. Enforcing the convention that Auth0 role name IS the namespace eliminated the mapping layer entirely." },
          { title: "Multi-turn context needs a hard token budget", body: "Full conversation history hit the context window unexpectedly on long sessions. We cap at the last 10 messages and summarise older turns into a single system message." },
        ],
      },
    },
  },
  // ─── PROJECT 3 ───────────────────────────────────────────────────────────────
  {
    id: 3,
    slug: "subscription-streaming-platform",
    title: "Subscription Streaming Platform",
    description: "Architected a scalable mobile streaming system with secure content delivery, JWT authentication, and microservices deployed on AWS.",
    image: "https://res.cloudinary.com/dqzte0i12/image/upload/v1773421442/original-87d43556d4fe0ac75f6c1f16636e69c0_tdsgit.webp",
    tag: "SaaS / AWS",
    year: "2023",
    techStack: ["NestJS", "Flutter", "PostgreSQL", "AWS S3", "CloudFront", "Stripe", "Redis"],
    metrics: [
      { value: "8K", label: "Subscribers", sub: "in first quarter", icon: "Users" },
      { value: "99.97%", label: "Uptime", sub: "over launch period", icon: "Zap" },
      { value: "0", label: "Critical Bugs", sub: "in first 30 days", icon: "Target" },
      { value: "10 wks", label: "Time to Launch", sub: "from kickoff", icon: "Clock" },
    ],
    challenge: {
      heading: "The Challenge",
      body: "A media startup needed to launch a subscription streaming product for mobile audiences in Southeast Asia on a tight timeline. They had the content library but no platform, no billing system, and no mobile app.",
    },
    built: {
      heading: "What We Built",
      body: "A NestJS microservices backend on AWS with CloudFront for CDN delivery and S3 for content storage. Stripe powers subscription billing with three tiers. JWT with refresh token rotation handles secure sessions. The Flutter app supports offline downloads for low-connectivity environments.",
    },
    results: {
      heading: "Results",
      body: "Launched on schedule with 0 critical bugs in the first 30 days. The platform scaled to 8,000 subscribers in Q1 with 99.97% uptime. Stripe dunning recovered 18% of failed payments. The client expanded to two additional markets within six months.",
    },
    deepDive: {
      beforeAfter: {
        heading: "Before & After",
        items: [
          { before: "Content existed only as raw files on a shared drive with no delivery infrastructure", after: "Every title delivered globally via CloudFront CDN with adaptive bitrate streaming" },
          { before: "No billing system — the team manually invoiced a handful of early users", after: "Three-tier Stripe subscription with automatic proration, trials, and dunning management" },
          { before: "No mobile app — users had no way to access content on their phones", after: "Flutter app on iOS and Android with offline downloads for low-connectivity regions" },
          { before: "Zero visibility into usage — no analytics on what content was being watched", after: "Real-time watch events streamed to a dashboard showing performance per title" },
        ],
      },
      processSteps: {
        heading: "How We Built It",
        body: "Ten weeks from kickoff to App Store. Infrastructure and app development ran in parallel after agreeing on the API contract in week one.",
        steps: [
        { title: "API contract & infrastructure setup", description: "Defined the full REST and gRPC API contracts in week one — REST for Flutter-to-NestJS, gRPC for all service-to-service calls. Provisioned AWS ECS, S3, CloudFront, RDS, and the RabbitMQ cluster so both teams could work independently against mocked endpoints." },
        { title: "gRPC service mesh & NestJS microservices", description: "Wrote .proto files defining all inter-service contracts. Built auth, content, and billing services as separate NestJS modules communicating via gRPC. This eliminated the chattiness of REST between services and caught schema mismatches at compile time." },
        { title: "RabbitMQ async media pipeline", description: "Designed exchanges and queues for all async operations: download_requested, download_completed, sync_device, subscription_changed, and watch_progress. Built the download service as a dedicated NestJS RabbitMQ consumer with retry logic and dead-letter queues for failed jobs." },
        { title: "Flutter app — streaming, downloads & cross-device sync", description: "Built the Flutter app with video_player for streaming, background_downloader for offline content, and a WebSocket subscription to RabbitMQ-driven events for real-time download progress and cross-device state sync." },
        { title: "Load testing & App Store submission", description: "Ran k6 load tests simulating 10k concurrent users and chaos tests against RabbitMQ with simulated broker failures. Tuned CloudFront cache policies and ECS autoscaling. Submitted to App Store and Play Store in week nine." },
      ],
      },
      architecture: {
        heading: "System Architecture",
        body: "Three independent NestJS services behind an API Gateway. Each owns its own DB schema and scales independently. CloudFront sits in front of S3 for all media delivery — the app never touches S3 directly.",
        layers: [
          { name: "API Gateway", tech: "AWS API Gateway", description: "Single entry point for all Flutter client requests. Routes to auth, content, or billing service. Handles rate limiting before traffic hits NestJS." },
          { name: "gRPC Layer", tech: "gRPC + Protocol Buffers", description: "All service-to-service communication uses gRPC — auth to content for subscription validation, content to download service for media requests. Strongly typed contracts via .proto files mean no runtime schema mismatches between services." },
          { name: "Auth Service", tech: "NestJS + JWT + Redis", description: "Issues short-lived access tokens (15 min) and long-lived refresh tokens in Redis. Exposes gRPC endpoints consumed by content and billing services for token validation without HTTP round-trips." },
          { name: "Content Service", tech: "NestJS + S3 + CloudFront", description: "Manages the content catalogue, generates signed CloudFront URLs for streaming, and publishes download_requested events to RabbitMQ when a user queues offline content." },
          { name: "Message Broker", tech: "RabbitMQ", description: "All async media operations flow through RabbitMQ — download jobs, cross-device sync events, watch progress propagation, and playback state changes. Each operation type has its own exchange and queue with dead-letter handling for failed jobs." },
          { name: "Download Service", tech: "NestJS + RabbitMQ consumer", description: "Dedicated NestJS worker that consumes download_requested messages from RabbitMQ. Fetches HLS segments from S3, packages them for offline use, and publishes download_completed events back so all user devices sync state in real time — exactly like Spotify's offline sync model." },
          { name: "Billing Service", tech: "NestJS + Stripe", description: "Handles Stripe webhook events and updates access tier in PostgreSQL. Publishes subscription_changed events to RabbitMQ so the content and download services update tier enforcement without polling." },
          { name: "Media Storage", tech: "AWS S3 + CloudFront", description: "HLS-encoded video files in S3, served via CloudFront with signed cookies. Multi-region edge caching gives Southeast Asian users sub-100ms time-to-first-byte." },
          { name: "Mobile App", tech: "Flutter + Riverpod", description: "Single codebase for iOS and Android. Subscribes to RabbitMQ-driven push events via WebSocket for real-time download progress and cross-device playback state sync." },
        ],
      },
        techCategories: [
          { category: "Backend", items: ["NestJS", "TypeScript", "Node.js", "gRPC", "RabbitMQ"] },
          { category: "Mobile", items: ["Flutter", "Dart", "Riverpod"] },
          { category: "Infrastructure", items: ["AWS ECS", "AWS S3", "CloudFront", "API Gateway"] },
          { category: "Database", items: ["PostgreSQL", "Redis"] },
          { category: "Payments", items: ["Stripe"] },
        ],
      approach: {
        heading: "How We Approached the Problem",
        body: "The biggest architectural decision was how services talk to each other. With five independent NestJS services, we needed a communication model that was fast, type-safe, and wouldn't collapse under load. gRPC for synchronous calls and RabbitMQ for all async media operations gave us the Netflix/Spotify-style architecture the client wanted — services are completely decoupled, failures in one don't cascade, and cross-device sync just works.",
        rejected: [
        { option: "Single monolithic NestJS app", reason: "Content delivery and billing have very different scaling profiles. Separating them with gRPC service-to-service calls meant we could scale the content and download services independently during peak hours." },
        { option: "Kafka instead of RabbitMQ", reason: "Kafka is the right choice for high-throughput event streaming at Spotify scale. At our volume, RabbitMQ's per-queue routing, dead-letter handling, and simpler ops story were a better fit. We can migrate to Kafka if the client hits 100k+ concurrent users." },
        { option: "REST for inter-service communication", reason: "With 5 services calling each other, REST would have meant HTTP overhead on every internal call and no compile-time contract enforcement. gRPC with .proto files gave us typed contracts, bidirectional streaming for media ops, and ~7x faster serialisation than JSON." },
        { option: "React Native instead of Flutter", reason: "The client had an existing Flutter codebase for a separate product. Reusing the same framework and Dart developers was faster than switching ecosystems." },
      ],
      },
      dataModel: {
        heading: "Data Modelling",
        body: "Each NestJS service owns its schema. Auth owns users and sessions. Content owns titles, episodes, and watch history. Billing owns subscriptions and invoices. Cross-service queries go through API calls — never direct DB access.",
        code: {
          title: "Content & Subscription Schema",
          file: "schema.sql",
          language: "sql",
          description: "Core tables for the content catalogue and subscription state. user_subscriptions is the source of truth for access control — checked on every signed URL request.",
          code: `CREATE TABLE titles (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title        TEXT NOT NULL,
  description  TEXT,
  thumbnail_s3 TEXT NOT NULL,
  tier_required TEXT NOT NULL DEFAULT 'basic',
  published_at TIMESTAMPTZ,
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE episodes (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title_id    UUID NOT NULL REFERENCES titles(id) ON DELETE CASCADE,
  episode_num INT NOT NULL,
  duration_s  INT NOT NULL,
  hls_key     TEXT NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (title_id, episode_num)
);

CREATE TABLE watch_events (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    UUID NOT NULL,
  episode_id UUID NOT NULL REFERENCES episodes(id),
  position_s INT NOT NULL DEFAULT 0,
  completed  BOOLEAN NOT NULL DEFAULT false,
  watched_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX idx_watch_events_user ON watch_events (user_id, watched_at DESC);

CREATE TABLE user_subscriptions (
  id                 UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id            UUID NOT NULL UNIQUE,
  stripe_customer_id TEXT NOT NULL,
  stripe_sub_id      TEXT NOT NULL,
  tier               TEXT NOT NULL DEFAULT 'basic',
  status             TEXT NOT NULL DEFAULT 'active',
  current_period_end TIMESTAMPTZ NOT NULL,
  updated_at         TIMESTAMPTZ NOT NULL DEFAULT now()
);`,
        },
      },
      apiLayer: {
        heading: "API Layer",
        body: "NestJS modules map to services. The content module validates the user's subscription tier before generating a signed CloudFront URL — the Flutter client never receives raw S3 paths.",
        code: {
          title: "Content Service — Signed URL Generation",
          file: "content.service.ts",
          language: "typescript",
          description: "Validates subscription tier then generates a signed CloudFront URL expiring in 6 hours. Sharing the URL with another device won't work.",
          code: `import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { getSignedUrl } from '@aws-sdk/cloudfront-signer';
import { Episode } from './entities/episode.entity';
import { UserSubscription } from '../billing/entities/subscription.entity';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(Episode) private readonly episodes: Repository<Episode>,
    @InjectRepository(UserSubscription) private readonly subscriptions: Repository<UserSubscription>,
    private readonly config: ConfigService,
  ) {}

  async getSignedStreamUrl(episodeId: string, userId: string) {
    const episode = await this.episodes.findOneOrFail({
      where: { id: episodeId }, relations: ['title'],
    });

    const sub = await this.subscriptions.findOne({ where: { userId } });
    if (!sub || sub.status !== 'active') throw new ForbiddenException('Active subscription required');

    const tierRank = { basic: 1, standard: 2, premium: 3 };
    if (tierRank[sub.tier] < tierRank[episode.title.tierRequired]) {
      throw new ForbiddenException('Upgrade your plan to watch this title');
    }

    const expiresAt = new Date(Date.now() + 6 * 60 * 60 * 1000);
    const url = getSignedUrl({
      url: \`\${this.config.get('CLOUDFRONT_DOMAIN')}/\${episode.hlsKey}\`,
      keyPairId: this.config.get('CLOUDFRONT_KEY_PAIR_ID'),
      privateKey: this.config.get('CLOUDFRONT_PRIVATE_KEY'),
      dateLessThan: expiresAt.toISOString(),
    });

    return { url, expiresAt };
  }
}`,
        },
      },
      dbFunctions: {
        heading: "Database Functions",
        body: "Two PostgreSQL functions handle the most frequent read patterns: continue-watching list on app open, and upsert watch position called every 10 seconds during playback.",
        code: {
          title: "Watch Progress Functions",
          file: "functions.sql",
          language: "sql",
          description: "Continue-watching and watch position upsert. Both are called on the hot path — keeping them in functions lets us optimise independently of the NestJS layer.",
          code: `CREATE OR REPLACE FUNCTION get_continue_watching(p_user_id UUID, p_limit INT DEFAULT 10)
RETURNS TABLE (
  title_id UUID, title_name TEXT, thumbnail_s3 TEXT,
  episode_id UUID, episode_num INT, position_s INT,
  duration_s INT, progress_pct NUMERIC
)
LANGUAGE sql STABLE AS $$
  SELECT t.id, t.title, t.thumbnail_s3, e.id, e.episode_num,
         we.position_s, e.duration_s,
         ROUND((we.position_s::NUMERIC / NULLIF(e.duration_s, 0)) * 100, 1)
  FROM watch_events we
  JOIN episodes e ON e.id = we.episode_id
  JOIN titles   t ON t.id = e.title_id
  WHERE we.user_id = p_user_id
    AND we.completed = false
    AND we.watched_at = (
      SELECT MAX(we2.watched_at) FROM watch_events we2
      WHERE we2.user_id = p_user_id AND we2.episode_id = we.episode_id
    )
  ORDER BY we.watched_at DESC
  LIMIT p_limit;
$$;

CREATE OR REPLACE FUNCTION upsert_watch_position(
  p_user_id UUID, p_episode_id UUID, p_position_s INT, p_completed BOOLEAN DEFAULT false
)
RETURNS VOID LANGUAGE plpgsql AS $$
BEGIN
  INSERT INTO watch_events (user_id, episode_id, position_s, completed, watched_at)
  VALUES (p_user_id, p_episode_id, p_position_s, p_completed, now())
  ON CONFLICT (user_id, episode_id) DO UPDATE SET
    position_s = EXCLUDED.position_s,
    completed  = EXCLUDED.completed,
    watched_at = now();
END;
$$;`,
        },
      },
      frontendConnection: {
        heading: "Frontend Connection",
        body: "The Flutter app uses Riverpod with a VideoRepository layer. The PlaybackController fetches signed URLs from NestJS and passes them to video_player. Watch position syncs every 10 seconds via a background timer.",
        code: {
          title: "Video Repository + Playback Provider",
          file: "video_repository.dart",
          language: "dart",
          description: "VideoRepository fetches signed stream URLs and syncs watch progress. PlaybackController is a Riverpod AsyncNotifier managing the full playback lifecycle.",
          code: `import 'dart:async';
import 'package:riverpod_annotation/riverpod_annotation.dart';
import 'package:video_player/video_player.dart';
import '../api/api_client.dart';

part 'video_repository.g.dart';

class VideoRepository {
  VideoRepository({required this.apiClient});
  final ApiClient apiClient;

  Future<String> getSignedUrl(String episodeId) async {
    final res = await apiClient.get('/content/episodes/$episodeId/stream');
    return res.data['url'] as String;
  }

  Future<void> syncProgress(String episodeId, int positionSeconds) async {
    await apiClient.post('/content/watch-events', data: {
      'episode_id': episodeId,
      'position_s': positionSeconds,
    });
  }
}

@riverpod
class PlaybackController extends _\$PlaybackController {
  VideoPlayerController? _controller;
  Timer? _progressTimer;

  @override
  Future<VideoPlayerController> build(String episodeId) async {
    final repo = ref.read(videoRepositoryProvider);
    final url  = await repo.getSignedUrl(episodeId);

    _controller = VideoPlayerController.networkUrl(Uri.parse(url));
    await _controller!.initialize();
    _controller!.play();

    _progressTimer = Timer.periodic(const Duration(seconds: 10), (_) {
      final pos = _controller!.value.position.inSeconds;
      repo.syncProgress(episodeId, pos);
    });

    ref.onDispose(() { _progressTimer?.cancel(); _controller?.dispose(); });
    return _controller!;
  }

  void seek(Duration position) => _controller?.seekTo(position);
  void togglePlay() {
    _controller?.value.isPlaying == true ? _controller?.pause() : _controller?.play();
  }
}

@riverpod
VideoRepository videoRepository(VideoRepositoryRef ref) =>
    VideoRepository(apiClient: ref.watch(apiClientProvider));`,
        },
      },
      lessons: {
        heading: "Lessons Learned",
        items: [
          { title: "Sign URLs server-side, always", body: "An early prototype generated signed URLs client-side using temporary AWS credentials, exposing key material in the app bundle. Moving signing to NestJS meant credentials never leave the server." },
          { title: "Stripe webhooks need idempotency checks", body: "Stripe can deliver the same event more than once. Our first handler processed duplicate payment_succeeded events and granted double subscription extensions. Idempotency checks on the Stripe event ID fixed it." },
          { title: "Pre-initialise video_player before the user taps play", body: "Cold-start latency was 2-3 seconds. Pre-initialising the controller when the user navigates to the title detail page — before they tap play — reduced perceived latency to under 500ms." },
          { title: "HLS segment size affects offline storage significantly", body: "Default 10-second segments wasted storage by downloading a full segment before pausing. Switching to 2-second segments reduced wasted storage by ~40%." },
        ],
      },
    },
  },
  // ─── PROJECT 4 ───────────────────────────────────────────────────────────────
  {
    id: 4,
    slug: "automated-report-generation",
    title: "Automated Report Generation System",
    description: "Developed a backend-driven analytics and automated report generation platform with structured outputs and real-time data processing.",
    image: "https://res.cloudinary.com/dqzte0i12/image/upload/v1773468894/5bc97eda6298f13bab8ab5434ce148ff_v7y77s.webp",
    tag: "Automation",
    year: "2023",
    techStack: ["NestJS", "Flutter", "PostgreSQL", "Redis", "BullMQ", "WeasyPrint", "AWS S3"],
    metrics: [
      { value: "4 min", label: "Per Report", sub: "down from 6–8 hrs", icon: "Clock" },
      { value: "3×", label: "Report Volume", sub: "no added headcount", icon: "TrendingUp" },
      { value: "180+", label: "Monthly Reports", sub: "fully automated", icon: "BarChart2" },
      { value: "0", label: "Format Errors", sub: "since launch", icon: "Target" },
    ],
    challenge: {
      heading: "The Challenge",
      body: "A healthcare consultancy was producing 50+ client reports per month entirely by hand — pulling data from three incompatible systems, formatting in Word, and emailing PDFs. Each report took 6–8 hours. The team couldn't take on new clients without hiring, but hiring wasn't in the budget.",
    },
    built: {
      heading: "What We Built",
      body: "A NestJS backend with BullMQ job queues for async report generation, a PostgreSQL warehouse normalising inputs from all three source systems, and a WeasyPrint PDF renderer driven by HTML templates. A Flutter app lets account managers trigger and track reports from their phones.",
    },
    results: {
      heading: "Results",
      body: "Report generation time dropped from 6–8 hours to 4 minutes. Monthly report volume tripled without adding headcount. Formatting errors fell to zero. The system now generates over 180 reports per month automatically.",
    },
    deepDive: {
      beforeAfter: {
        heading: "Before & After",
        items: [
          { before: "Analysts manually exported data from three incompatible systems every report cycle", after: "Scheduled ETL jobs pull, normalise, and warehouse data from all three sources automatically" },
          { before: "Each report took 6–8 hours of senior analyst time to compile and format", after: "Reports generated in under 4 minutes via an async job queue" },
          { before: "Word document formatting was inconsistent — every report looked slightly different", after: "HTML templates with WeasyPrint produce pixel-perfect, brand-consistent PDFs every time" },
          { before: "Reports were emailed manually — no tracking, no audit trail, no self-serve", after: "Clients receive a secure download link automatically. Account managers track delivery in the Flutter app" },
        ],
      },
      processSteps: {
        heading: "How We Built It",
        body: "We started with data before UI — until the ETL pipeline and warehouse schema were solid, building a report generator on unreliable data would have been wasted effort.",
        steps: [
          { title: "Data audit & warehouse design", description: "Audited all three source systems, mapped their schemas, and designed a normalised PostgreSQL warehouse. Built ETL jobs in NestJS scheduled tasks that run nightly and on-demand." },
          { title: "Report template system", description: "Designed HTML/CSS report templates with the client's brand team. Built the NestJS template engine that injects warehouse data into templates and passes the result to WeasyPrint for PDF rendering." },
          { title: "BullMQ job queue & delivery", description: "Wrapped report generation in a BullMQ job so the API returns immediately with a job ID. Jobs run in workers, upload the finished PDF to S3, and notify the client with a signed download URL." },
          { title: "Flutter management app", description: "Built the Flutter app for triggering ad-hoc reports, monitoring job status via WebSocket, configuring delivery schedules, and viewing report history with download links." },
        ],
      },
      architecture: {
        heading: "System Architecture",
        body: "A NestJS API handles requests. BullMQ workers do the heavy lifting asynchronously. WeasyPrint runs as a sidecar process. Generated PDFs go to S3 — the app only ever touches signed URLs.",
        layers: [
          { name: "ETL Pipeline", tech: "NestJS Scheduled Tasks", description: "Three NestJS services, one per source system, run on a nightly cron. Each pulls incremental data, normalises to the warehouse schema, and upserts to PostgreSQL." },
          { name: "Data Warehouse", tech: "PostgreSQL", description: "Normalised schema as the single source of truth. Materialized views pre-compute expensive aggregations so report generation runs fast SELECTs, not heavy joins." },
          { name: "Report API", tech: "NestJS REST", description: "Accepts report trigger requests, validates parameters, enqueues a BullMQ job, and returns a job ID immediately. Exposes job status and history endpoints." },
          { name: "Job Queue", tech: "BullMQ + Redis", description: "Workers pick up report jobs, query the warehouse, render the HTML template, call WeasyPrint, and upload the PDF to S3. Redis stores job state for real-time status updates." },
          { name: "PDF Renderer", tech: "WeasyPrint", description: "Runs as a Python sidecar called via child_process from NestJS. Converts fully-rendered HTML/CSS to PDF with pixel-perfect fidelity to designed templates." },
          { name: "Flutter App", tech: "Flutter + Riverpod + WebSocket", description: "Account managers trigger reports, monitor job progress via WebSocket subscription, and download finished PDFs. Riverpod manages real-time job state." },
        ],
      },
      techCategories: [
        { category: "Backend", items: ["NestJS", "TypeScript", "Node.js"] },
        { category: "Queue", items: ["BullMQ", "Redis"] },
        { category: "Mobile", items: ["Flutter", "Dart", "Riverpod"] },
        { category: "Database", items: ["PostgreSQL"] },
        { category: "PDF", items: ["WeasyPrint", "Python"] },
        { category: "Storage", items: ["AWS S3"] },
      ],
      approach: {
        heading: "How We Approached the Problem",
        body: "The core insight was that this problem was 90% data plumbing and 10% PDF generation. Most teams would reach for a reporting tool. We went the other way — warehouse the data first, then report generation becomes a simple template render against clean, reliable data.",
        rejected: [
          { option: "Off-the-shelf reporting tool (Metabase / Looker)", reason: "These tools are excellent for internal dashboards but poor for client-facing branded PDFs. The client needed reports that looked like they came from their design team." },
          { option: "Puppeteer for PDF generation", reason: "Puppeteer added a full Chromium dependency. WeasyPrint produces equivalent output from pure HTML/CSS with a much smaller footprint and is easier to run in Docker." },
          { option: "Direct DB connections to source systems", reason: "Two source systems were SaaS products with rate-limited APIs. The ETL-to-warehouse approach decoupled us from source system availability and rate limits entirely." },
        ],
      },
      dataModel: {
        heading: "Data Modelling",
        body: "The warehouse schema is deliberately denormalised for read performance. Materialized views pre-aggregate KPIs so the template render is a simple SELECT, not a multi-join aggregation.",
        code: {
          title: "Warehouse Schema + Materialized View",
          file: "warehouse.sql",
          language: "sql",
          description: "Core warehouse tables and the materialized view powering the monthly KPI section of every report. Refreshes after each ETL run in ~2 seconds.",
          code: `CREATE TABLE client_engagements (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id     UUID NOT NULL REFERENCES clients(id),
  source_system TEXT NOT NULL,
  event_type    TEXT NOT NULL,
  event_value   NUMERIC,
  event_date    DATE NOT NULL,
  raw_id        TEXT,
  synced_at     TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (source_system, raw_id)
);

CREATE INDEX idx_engagements_client_date ON client_engagements (client_id, event_date DESC);

CREATE TABLE report_jobs (
  id           UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id    UUID NOT NULL REFERENCES clients(id),
  template     TEXT NOT NULL,
  period_start DATE NOT NULL,
  period_end   DATE NOT NULL,
  status       TEXT NOT NULL DEFAULT 'queued',
  s3_key       TEXT,
  bull_job_id  TEXT,
  triggered_by UUID REFERENCES users(id),
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now(),
  completed_at TIMESTAMPTZ
);

CREATE MATERIALIZED VIEW monthly_client_kpis AS
SELECT
  client_id,
  DATE_TRUNC('month', event_date) AS month,
  source_system,
  event_type,
  COUNT(*)                        AS event_count,
  SUM(event_value)                AS total_value,
  AVG(event_value)                AS avg_value
FROM client_engagements
GROUP BY 1, 2, 3, 4
WITH DATA;

CREATE UNIQUE INDEX idx_monthly_kpis
  ON monthly_client_kpis (client_id, month, source_system, event_type);`,
        },
      },
      apiLayer: {
        heading: "API Layer",
        body: "ReportService enqueues BullMQ jobs and returns immediately. The ReportProcessor runs in a worker — queries the warehouse, renders the template, generates the PDF, uploads to S3, and updates the job record.",
        code: {
          title: "Report Service + BullMQ Processor",
          file: "report.service.ts",
          language: "typescript",
          description: "The service enqueues a job and returns a job ID. The processor does the actual work in a separate worker process.",
          code: `import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue, Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { execFile } from 'child_process';
import { promisify } from 'util';
import { ReportJob } from './entities/report-job.entity';
import { TemplateService } from './template.service';
import { WarehouseService } from '../warehouse/warehouse.service';

const execFileAsync = promisify(execFile);

@Injectable()
export class ReportService {
  constructor(
    @InjectQueue('reports') private readonly queue: Queue,
    @InjectRepository(ReportJob) private readonly reportJobs: Repository<ReportJob>,
  ) {}

  async triggerReport(clientId: string, template: string, periodStart: Date, periodEnd: Date, triggeredBy: string) {
    const job = await this.reportJobs.save(
      this.reportJobs.create({ clientId, template, periodStart, periodEnd, triggeredBy }),
    );
    const bullJob = await this.queue.add('generate', { reportJobId: job.id });
    await this.reportJobs.update(job.id, { bullJobId: bullJob.id });
    return { jobId: job.id };
  }
}

@Processor('reports')
export class ReportProcessor extends WorkerHost {
  constructor(
    private readonly warehouse: WarehouseService,
    private readonly templates: TemplateService,
    @InjectRepository(ReportJob) private readonly reportJobs: Repository<ReportJob>,
    private readonly s3: S3Client,
  ) { super(); }

  async process(job: Job<{ reportJobId: string }>) {
    const reportJob = await this.reportJobs.findOneOrFail({
      where: { id: job.data.reportJobId }, relations: ['client'],
    });
    await this.reportJobs.update(reportJob.id, { status: 'processing' });

    const data = await this.warehouse.getClientKPIs(reportJob.clientId, reportJob.periodStart, reportJob.periodEnd);
    const html = await this.templates.render(reportJob.template, { client: reportJob.client, data });
    const { stdout } = await execFileAsync('weasyprint', ['-', '-'], { input: html, encoding: 'buffer' });

    const s3Key = \`reports/\${reportJob.clientId}/\${reportJob.id}.pdf\`;
    await this.s3.send(new PutObjectCommand({ Bucket: process.env.S3_BUCKET, Key: s3Key, Body: stdout, ContentType: 'application/pdf' }));
    await this.reportJobs.update(reportJob.id, { status: 'complete', s3Key, completedAt: new Date() });
  }
}`,
        },
      },
      dbFunctions: {
        heading: "Database Functions",
        body: "Refresh the materialized view after each ETL run and fetch report history with a single query for the Flutter history screen.",
        code: {
          title: "ETL Refresh + Report History",
          file: "functions.sql",
          language: "sql",
          description: "CONCURRENT refresh means existing data stays readable during the refresh. The history function returns everything the Flutter app needs in a single query.",
          code: `CREATE OR REPLACE FUNCTION refresh_monthly_kpis()
RETURNS void LANGUAGE plpgsql AS $$
BEGIN
  REFRESH MATERIALIZED VIEW CONCURRENTLY monthly_client_kpis;
END;
$$;

CREATE OR REPLACE FUNCTION get_client_report_history(
  p_client_id UUID, p_limit INT DEFAULT 20, p_offset INT DEFAULT 0
)
RETURNS TABLE (
  job_id UUID, template TEXT, period_start DATE, period_end DATE,
  status TEXT, s3_key TEXT, triggered_by TEXT, created_at TIMESTAMPTZ, completed_at TIMESTAMPTZ
)
LANGUAGE sql STABLE AS $$
  SELECT rj.id, rj.template, rj.period_start, rj.period_end, rj.status,
         rj.s3_key, u.full_name, rj.created_at, rj.completed_at
  FROM report_jobs rj
  LEFT JOIN users u ON u.id = rj.triggered_by
  WHERE rj.client_id = p_client_id
  ORDER BY rj.created_at DESC
  LIMIT p_limit OFFSET p_offset;
$$;

CREATE OR REPLACE FUNCTION fail_stale_jobs(older_than_minutes INT DEFAULT 30)
RETURNS INT LANGUAGE plpgsql AS $$
DECLARE updated INT;
BEGIN
  UPDATE report_jobs SET status = 'failed'
  WHERE status = 'processing'
    AND created_at < now() - (older_than_minutes || ' minutes')::INTERVAL;
  GET DIAGNOSTICS updated = ROW_COUNT;
  RETURN updated;
END;
$$;`,
        },
      },
      frontendConnection: {
        heading: "Frontend Connection",
        body: "The Flutter app triggers jobs via REST and tracks real-time progress via WebSocket. A Riverpod notifier subscribes to the WebSocket gateway and rebuilds the UI as job state changes — no manual refresh needed.",
        code: {
          title: "Report Provider + WebSocket Progress",
          file: "report_provider.dart",
          language: "dart",
          description: "ReportNotifier triggers jobs via REST and tracks progress via WebSocket. The UI rebuilds automatically as job state changes.",
          code: `import 'package:riverpod_annotation/riverpod_annotation.dart';
import 'package:web_socket_channel/web_socket_channel.dart';
import 'dart:convert';
import '../api/api_client.dart';

part 'report_provider.g.dart';

enum JobStatus { queued, processing, complete, failed }

class ReportJobState {
  final String jobId;
  final JobStatus status;
  final int progressPct;
  final String? downloadUrl;
  const ReportJobState({ required this.jobId, required this.status, this.progressPct = 0, this.downloadUrl });

  ReportJobState copyWith({ JobStatus? status, int? progressPct, String? downloadUrl }) =>
    ReportJobState(jobId: jobId, status: status ?? this.status,
      progressPct: progressPct ?? this.progressPct, downloadUrl: downloadUrl ?? this.downloadUrl);
}

@riverpod
class ReportNotifier extends _\$ReportNotifier {
  WebSocketChannel? _ws;

  @override
  ReportJobState? build() => null;

  Future<void> triggerReport({ required String clientId, required String template,
      required DateTime periodStart, required DateTime periodEnd }) async {
    final res = await ref.read(apiClientProvider).post('/reports/trigger', data: {
      'client_id': clientId, 'template': template,
      'period_start': periodStart.toIso8601String(), 'period_end': periodEnd.toIso8601String(),
    });
    final jobId = res.data['jobId'] as String;
    state = ReportJobState(jobId: jobId, status: JobStatus.queued);
    _subscribeToProgress(jobId);
  }

  void _subscribeToProgress(String jobId) {
    _ws = WebSocketChannel.connect(Uri.parse(
      '\${const String.fromEnvironment('WS_URL')}/reports/progress?jobId=\$jobId'));
    _ws!.stream.listen((message) {
      final data   = jsonDecode(message as String) as Map<String, dynamic>;
      final status = JobStatus.values.byName(data['status'] as String);
      state = state!.copyWith(status: status,
        progressPct: data['progressPct'] as int?, downloadUrl: data['downloadUrl'] as String?);
    }, onDone: () => _ws = null);
  }

  @override
  void dispose() { _ws?.sink.close(); super.dispose(); }
}`,
        },
      },
      lessons: {
        heading: "Lessons Learned",
        items: [
          { title: "Warehouse first, reporting second", body: "Starting with a clean warehouse meant report generation was a 2-day task once the data was right. The ETL work took 3 weeks — that ratio was exactly correct and paid dividends immediately." },
          { title: "Materialized views are underused", body: "Every expensive aggregation timed out in production against real data volumes. Moving them to materialized views — refreshed after each ETL run — dropped report query time from 45 seconds to under 200ms." },
          { title: "WeasyPrint needs explicit page break rules", body: "Tables split across pages at awkward points. Adding CSS page-break-inside: avoid on rows and page-break-before: always on section headers gave clean pagination without custom logic." },
          { title: "BullMQ progress events need throttling", body: "The processor emitted a progress event on every DB row processed, flooding the WebSocket gateway. Throttling to once per second reduced WebSocket traffic by 95% with no noticeable UX difference." },
        ],
      },
    },
  },
];