"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";

export default function ProductConsultingInternPage() {
  // 没有图片/外链，这里不用弹窗
  const meta = {
    slug: "product-consulting-intern",
    title: "Product Consultant (Intern) — AI Assistants for Education & Senior Care",
    institution: "Digital Media Org & Nonprofit Client",
    practice: "Product Consulting · Requirement Discovery · Prompt/Flows · Rollout & Training",
    term: "2025.03 — Present",
    status: "In Progress" as const,
    tags: [
      "Product Discovery",
      "User Research",
      "Workflow Mapping",
      "Knowledge Base Design",
      "Prompt Engineering",
      "Multi-turn Dialogue",
      "Usability Testing",
      "Change Management",
    ],
  };

  const whatIDid = `Two engagement tracks, one consulting mindset:

• Education (Digital Media): Co-led the prototype of an AI teaching assistant for children's media-literacy curriculum.
  - Built a structured knowledge base that turns social topics + curriculum scripts into reusable lesson modules.
  - Engineered GPT-based prompt templates and multi-turn dialogue logic aligned to learner personas.
  - Evaluated platform feasibility and designed access-control strategy for pilot cohorts.

• Senior Care (Nonprofit): Designed a support bot for elderly services and internal operations.
  - Ran stakeholder interviews; mapped approval, finance and data handoff workflows; identified system gaps.
  - Drafted system architecture, BI indicators and functional specs to align product scope with constraints.
  - Executed usability testing; supported client onboarding, permission configuration and live demo sessions.`;

  const takeaways = `• Product > Tech: Prompts, flows, and knowledge bases are experience design—not model worship. Start from user goals, tone/response strategy, and graceful fallbacks to ship an MVP fast.
• Reusable knowledge > one-offs: Modularize lesson scripts and social topics into a KB for reuse, versioning, and quality control.
• Guardrails matter: Access control, persona guardrails, and conversation-state management are critical for safe, reliable rollouts.
• Discovery → Delivery: Interviews → process mapping → documentation → usability testing → training/enablement — a complete consulting loop that keeps teams aligned.
• Rollout lessons: Small pilots + permission setup + scenario-based training materially improved adoption and frontline satisfaction.`;

  const badgeClass =
    meta.status === "In Progress"
      ? "bg-green-600/25 text-green-100 border-green-400/40"
      : "bg-emerald-600/25 text-emerald-100 border-emerald-400/40";

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="business" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          {/* 顶部：左返回（绿色主题） */}
          <div className="flex items-center justify-between">
            <Link href="/business">
              <Button className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md border-green-400/30 text-gray-100 hover:bg-green-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Business
              </Button>
            </Link>
            <div />
          </div>

          {/* Meta 卡片（绿色） */}
          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="absolute right-3 top-3">
              <span className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${badgeClass}`}>
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
                  <Badge key={t} className="bg-green-500/20 text-green-100 border-green-500/30">
                    {t}
                  </Badge>
                ))}
              </div>
              <p className="text-gray-200">{meta.practice}</p>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20" />
          </Card>

          {/* What I Worked On（替代 Overview） */}
          <section className="rounded-xl border border-green-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-green-400 md:text-2xl">
              What I Worked On
            </h2>
            {/* 用 p + whitespace-pre-line 保留换行，且不使用等宽字体 */}
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {whatIDid}
            </p>
          </section>

          {/* Key Takeaways（替代 Reflection） */}
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
