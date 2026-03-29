"use client";

import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";

export default function ProductConsultingInternPage() {
  const meta = {
    slug: "product-consulting-intern",
    title: "AI Product Consultant (Intern)",
    institution: "Social Impact Organizations & Nonprofit Clients",
    practice:
      "AI Product Consulting · User Research · Workflow Design · Knowledge Systems · Rollout & Training",
    term: "2025.03 — 2025.08",
    status: "In Progress" as const,
    tags: [
      "Product Discovery",
      "User Research",
      "Workflow Design",
      "Knowledge Base Design",
      "Prompt Engineering",
      "Multi-turn Dialogue",
      "Usability Testing",
      "Training & Enablement",
    ],
  };

  const whatIDid = `Two distinct AI product engagements across social impact sectors:

• Project 1: AI Teaching Assistant for Media Literacy (Education)
  - Co-designed an AI-powered teaching assistant for children's media literacy programs, transforming social topics and curriculum scripts into a structured, reusable knowledge base.
  - Developed prompt frameworks and multi-turn dialogue flows aligned with different learner personas, including differences in age, comprehension level, and engagement style.
  - Evaluated platform feasibility across low-code AI tools and designed access-control strategies for controlled pilot rollout.
  - Focused on improving pedagogical consistency, response reliability, and scalability of content delivery.

• Project 2: AI Support Bot for Elderly Services (Senior Care)
  - Conducted stakeholder interviews to assess operational workflows such as approval, finance, and data handoff, and identified system inefficiencies and unmet user needs.
  - Designed workflow logic and system architecture for a support bot integrating text knowledge, video content, and web search.
  - Processed and structured knowledge assets using Python to improve tagging, retrieval, and response accuracy.
  - Led usability testing and onboarding, optimizing interaction design for elderly users with lower digital literacy.
  - Supported deployment through training, permission configuration, and scenario-based testing in real-world settings.`;

  const takeaways = `• AI product design starts with human understanding: successful systems depend on aligning user capability, context, and cognitive load, not just model performance.

• Capability-aware design matters: designing for elderly users versus young learners showed that usability changes dramatically with digital literacy, decision behavior, and interaction patterns.

• Effective AI products require systems thinking: strong solutions come from integrating knowledge base design, prompt logic, workflow mapping, and access control into one coherent experience.

• Reusable knowledge systems outperform one-off setups: modularizing content into structured knowledge bases significantly improves scalability, consistency, and long-term maintainability.

• Real product consulting is an end-to-end loop: stakeholder interviews → workflow mapping → solution design → testing → training → iteration. Adoption depends as much on alignment and enablement as on technology.

• The hardest part is not building the bot, but making it understandable, trustworthy, and usable for different groups in real-world contexts.

• Through training and co-building (“vibe coding”), I also observed how individuals differ in learning speed, abstraction ability, and execution, which deepened my interest in capability-based evaluation beyond resumes.`;

  const badgeClass =
    meta.status === "In Progress"
      ? "bg-green-600/25 text-green-100 border-green-400/40"
      : "bg-emerald-600/25 text-emerald-100 border-emerald-400/40";

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="business" onSectionChange={() => {}} />

      <div className="relative z-10 p-6 pt-16 md:pt-20">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex items-center justify-between">
            <Link href="/business">
              <Button className="border-green-400/30 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-gray-100 backdrop-blur-md hover:bg-green-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Business
              </Button>
            </Link>
            <div />
          </div>

          <Card className="relative overflow-hidden border-white/20 bg-white/10 backdrop-blur-md">
            <div className="absolute right-3 top-3">
              <span
                className={`inline-flex h-6 items-center rounded-full border px-2.5 text-xs backdrop-blur-sm ${badgeClass}`}
              >
                {meta.status}
              </span>
            </div>
            <div className="p-5 md:p-6">
              <h1 className="mb-1 text-xl font-semibold text-white md:text-2xl">
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
                    className="border-green-500/30 bg-green-500/20 text-green-100"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
              <p className="text-gray-200">{meta.practice}</p>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20" />
          </Card>

          <section className="rounded-xl border border-green-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-green-400 md:text-2xl">
              What I Worked On
            </h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {whatIDid}
            </p>
          </section>

          <section className="rounded-xl border border-green-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-green-400 md:text-2xl">
              Key Takeaways
            </h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {takeaways}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
