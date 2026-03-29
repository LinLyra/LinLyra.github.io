"use client";

import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";

export default function AIProductResearcherPage() {
  const meta = {
    slug: "ai-product-researcher",
    title: "AI Product Researcher — GenAI Systems for Community Services",
    institution: "A Better Community",
    practice:
      "Product Research · User Understanding · AI Systems Design · Capability Evaluation",
    term: "2025.03 — Present",
    status: "In Progress" as const,
    tags: [
      "User Research",
      "Capability Assessment",
      "Prompt & Flow Design",
      "RAG Systems",
      "Knowledge Structuring",
      "Behavior Analysis",
      "AI Product Strategy",
      "Human-Centered AI",
    ],
  };

  const whatIDid = `Focused on understanding how AI systems interact with real-world users and organizational workflows, especially in low-digital-literacy contexts:

• Research Track 1: User Capability & Interaction Modeling
  - Designed structured interview frameworks to assess user capability (digital literacy, comprehension, decision behavior) across different groups (e.g., elderly vs. educators).
  - Translated qualitative interview data into personas, intent structures, and behavioral patterns to guide AI system design.
  - Identified key gaps between “what users can do” vs. “what AI expects,” informing interaction simplification strategies.

• Research Track 2: AI System Design & Knowledge Structuring
  - Designed multi-turn interaction frameworks (discovery → intent clarification → execution → fallback → handoff) to improve task success and reduce confusion.
  - Built structured knowledge systems combining text, video, and retrieval pipelines to support consistent and scalable responses.
  - Developed prompt strategies, guardrails, and role definitions to improve reliability and reduce hallucination risks.
  - Diagnosed system-level issues such as retrieval gaps, latency, and response inconsistency, proposing iterative improvements.

• Research Track 3: Deployment, Adoption & Organizational Integration
  - Studied real-world deployment challenges including permission control, workflow integration, and operational alignment.
  - Designed onboarding, training materials, and scenario-based demos to enable non-technical teams to use AI systems effectively.
  - Observed user interaction data and feedback loops to refine system behavior and improve adoption outcomes.

• Research Track 4: AI Learning & Capability Development
  - Participated as a technical mentor in AI co-learning (“vibe coding”) programs, supporting participants in building 0→1 AI applications.
  - Observed differences in learning patterns, abstraction ability, and execution across participants, forming early insights into capability-based evaluation.`;

  const takeaways = `• AI is ultimately a human problem, not a technical one: the biggest gap is not model capability, but the mismatch between system design and human understanding.
• Capability-aware design is critical: users differ significantly in cognitive load tolerance, abstraction ability, and interaction behavior. Systems must adapt to people, not the other way around.
• From “feature building” to “system thinking”: effective AI products require integrating prompts, workflows, knowledge systems, and guardrails into one coherent structure.
• Knowledge structuring is more valuable than model tuning: well-organized, modular knowledge systems consistently outperform ad-hoc or prompt-only solutions.
• Real-world deployment is a socio-technical problem: adoption depends on trust, clarity, and usability as much as on system performance.
• Interviews are not just for requirements — they reveal capability: user behavior, confusion patterns, and decision-making processes are strong signals of underlying ability.
• Early signals of talent are observable in learning environments: through AI co-building, differences in learning speed, abstraction, and execution become visible beyond traditional credentials.
• Bridging AI and people requires interdisciplinary thinking: combining product logic, behavioral understanding, and technical intuition is key to designing meaningful systems.`;

  const badgeClass =
    meta.status === "In Progress"
      ? "bg-amber-600/25 text-amber-100 border-amber-400/40"
      : "bg-orange-600/25 text-orange-100 border-orange-400/40";

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="product" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex items-center justify-between">
            <Link href="/product">
              <Button className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-md border-amber-400/30 text-gray-100 hover:bg-orange-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Product
              </Button>
            </Link>
            <div />
          </div>

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

          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-amber-400 md:text-2xl">
              What I Worked On
            </h2>
            <div className="whitespace-pre-wrap text-base leading-relaxed text-gray-200">
              {whatIDid}
            </div>
          </section>

          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-amber-400 md:text-2xl">
              Key Takeaways
            </h2>
            <div className="whitespace-pre-wrap text-base leading-relaxed text-gray-200">
              {takeaways}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
