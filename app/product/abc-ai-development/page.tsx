"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";

export default function AIDevelopmentInternPage() {
  const meta = {
    slug: "ai-development-internship",
    title: "AI Development (Internship) — GenAI Assistants for Community Services",
    institution: "A Better Community",
    practice: "Product Research · Interview Intake · Prompt/Flows · Data & Guardrails",
    term: "2025.03 — Present",
    status: "In Progress" as const,
    tags: [
      "User Interviews",
      "Screening/Triage",
      "Prompt Design",
      "Agent Flows",
      "RAG/Indexing",
      "Localization",
      "Quality & Guardrails",
      "Change Management",
    ],
  };

  const whatIDid = `Two lines of work, one product mindset:

• Interview Intake & Triage
  - Built a structured intake for client interviews: eligibility, urgency, domain, and privacy dimensions.
  - Operationalized scoring rubrics and routing rules so requests auto-triage to the right assistant or human queue.
  - Turned interview insights into personas, intents, and slot models to drive conversation design.

• Assistant Design & Delivery
  - Designed multi-turn flows (greeting → discovery → task → confirmation → handoff) with clear fallbacks and escalation.
  - Authored reusable prompt templates and tool-use protocols; added retrieval hooks and small knowledge indices.
  - Provided bilingual (EN/ZH) phrasing guidance and a terminology/glossary layer to improve clarity for seniors and non-native speakers.
  - Unblocked technical issues across the team: RAG recall gaps, latency spikes, hallucination hotspots, and role/permission config.
  - Instrumented logs and lightweight analytics (success, deflection, fallback rate, escalation) and wrote runbooks for ops.
  - Delivered demo scripts and admin training so non-technical staff can configure scenarios and permissions safely.`;

  const takeaways = `• Product over model: start from user goals and constraints; flows, tone, and fallbacks make the experience—not model selection.
• Measure adoption, not just accuracy: task success, first-response resolution, fallback/escation rate, and time-to-value guided iterations.
• Guardrails win trust: role-based access, retrieval boundaries, refusal styles, and human-handoff rules reduced operational risk.
• Language and accessibility matter: bilingual prompts, simpler sentence patterns, and a shared glossary improved comprehension.
• Delivery loop: interviews → flow/prototype → pilot → analytics/QA → enablement. This kept stakeholders aligned and the bot useful.`;

  const hasNotes = false;
  const badgeClass =
    meta.status === "In Progress"
      ? "bg-amber-600/25 text-amber-100 border-amber-400/40"
      : "bg-orange-600/25 text-orange-100 border-orange-400/40";

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="product" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <Link href="/product">
              <Button className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-md border-amber-400/30 text-gray-100 hover:bg-orange-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Product
              </Button>
            </Link>
            <div />
          </div>

          {/* Meta card (orange theme) */}
          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="absolute right-3 top-3">
              <span
                className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${badgeClass}`}
              >
                {meta.status}
              </span>
            </div>
            <div className="p-5 md:p-6">
              <h1 className="text-xl md:text-2xl font-semibold text-white mb-1">
                {meta.title}
              </h1>
              <div className="mb-3 inline-flex items-center gap-2 text-sm text-gray-300">
                <span>{meta.institution}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {meta.term}
                </span>
              </div>
              <div className="mb-2 flex flex-wrap gap-2">
                {meta.tags.map((t) => (
                  <Badge
                    key={t}
                    className="bg-orange-500/20 text-orange-100 border-orange-500/30"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
              <p className="text-gray-200">{meta.practice}</p>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-500/20" />
          </Card>

          {/* What I Worked On */}
          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-amber-400 md:text-2xl">
              What I Worked On
            </h2>
            <pre className="whitespace-pre-wrap text-base leading-relaxed text-gray-200">
              {whatIDid}
            </pre>
          </section>

          {/* Key Takeaways */}
          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-amber-400 md:text-2xl">
              Key Takeaways
            </h2>
            <pre className="whitespace-pre-wrap text-base leading-relaxed text-gray-200">
              {takeaways}
            </pre>
          </section>
        </div>
      </div>
    </div>
  );
}
