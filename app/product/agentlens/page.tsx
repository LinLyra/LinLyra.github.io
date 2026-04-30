"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Github } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function AgentLensPage() {
  const [showMedia, setShowMedia] = useState(false);

  const meta = {
    slug: "agentlens",
    title: "AgentLens — AI Agent Evaluation Platform",
    institution: "Meituan · Nocode",
    practice: "AI Evaluation · Hallucination Detection · Next.js + OpenRouter",
    term: "2026.03",
    status: "Completed" as const,
    role: "Full Stack Developer",
    tags: [
      "AI Evaluation",
      "LLM",
      "Hallucination Detection",
      "AI Agents",
      "Diagnostics",
    ],
    images: [
      "/competition/agent1.png",
      "/competition/agent2.png",
      "/competition/agent3.png",
      "/competition/agent4.png",
    ] as string[],
    links: {
      github: "" 
    },
  };

  const overview =
    "AgentLens helps developers understand not just how AI performs, but why it fails. It is an AI Agent evaluation platform designed to analyze and diagnose the quality of AI responses in real-world conversations. By taking a dialogue and a task objective as input, the system evaluates performance across five key dimensions: task completion, accuracy, relevance, user experience, and safety.\n\nThe platform goes beyond scoring — it identifies critical issues such as hallucinations, missing information, and intent misunderstanding, and presents them in a structured diagnostic report. With instant feedback and clear visualization, AgentLens enables fast iteration and debugging for AI-powered products.";

  const whatIDid: string[] = [
    "Designed the full evaluation framework for AI Agents with five key scoring dimensions.",
    "Built an automated evaluation pipeline that converts conversations into structured scoring results.",
    "Implemented hallucination detection by identifying factual inconsistencies and incorrect reasoning.",
    "Designed a strict JSON output format to ensure stable parsing and system reliability.",
    "Developed an interactive dashboard including score cards, radar charts, and diagnostic reports.",
    "Integrated OpenRouter API to support real-time evaluation with LLMs while optimizing cost.",
    "Implemented usage limits and BYOK (Bring Your Own Key) system for scalability.",
    "Created test scenarios (e.g., hallucination cases) to demonstrate system capability clearly.",
  ];

  const reflection =
    "Building AgentLens revealed that evaluating AI is fundamentally harder than generating responses. Simple scoring is not sufficient — developers need structured insights into why AI fails.\n\nOne key insight is that hallucination detection is essential for trust but difficult to define. By combining task context and response analysis, the system achieves more reliable detection than naive approaches.\n\nAnother learning is that usability matters: concise explanations and visual dashboards significantly improve how users interpret evaluation results.\n\nIn the future, AgentLens can evolve into a full AI quality monitoring system with continuous evaluation, feedback loops, and production integration.";

  const hasImages = meta.images.length > 0;

  const statusClass =
    meta.status === "Completed"
      ? "bg-emerald-500/20 text-emerald-100 border-emerald-400/30"
      : "bg-orange-500/20 text-orange-100 border-orange-400/30";

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 背景 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0b1020]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(245,158,11,0.16),transparent_60%),radial-gradient(circle_at_10%_90%,rgba(251,191,36,0.12),transparent_60%),radial-gradient(circle_at_90%_20%,rgba(234,88,12,0.10),transparent_60%)]" />
      </div>

      <Navigation activeSection="product" onSectionChange={() => {}} />

      <div className="relative z-10 p-6 pt-16 md:pt-20">
        <div className="mx-auto max-w-5xl space-y-6">
          {/* 顶部 */}
          <div className="flex items-center justify-between">
            <Link href="/product">
              <Button className="border-amber-400/30 bg-amber-500/10 text-white hover:bg-amber-500/20">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </Link>

            <div className="flex gap-2">
              <Link href={meta.links.github} target="_blank">
                <Button className="border-amber-400/30 bg-amber-500/10 text-white hover:bg-amber-500/20">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </Link>

              {hasImages && (
                <Button
                  onClick={() => setShowMedia(true)}
                  className="border-amber-400/30 bg-amber-500/10 text-white hover:bg-amber-500/20"
                >
                  View Screenshots
                </Button>
              )}
            </div>
          </div>

          {/* Header */}
          <Card className="border-amber-400/20 bg-white/10 backdrop-blur-md">
            <div className="p-6">
              <h1 className="text-2xl font-semibold text-white">
                {meta.title}
              </h1>

              <div className="mt-2 flex flex-wrap gap-2 text-gray-300 text-sm">
                <span>{meta.institution}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {meta.term}
                </span>
                <span>•</span>
                <span>{meta.role}</span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {meta.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="bg-amber-500/20 text-amber-100 border-amber-400/30"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <p className="mt-3 text-gray-200">{meta.practice}</p>
            </div>
          </Card>

          {/* Overview */}
          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-6 backdrop-blur-md">
            <h2 className="text-xl font-semibold text-amber-300 mb-3">
              Project Overview
            </h2>
            <p className="text-gray-200 whitespace-pre-line">{overview}</p>
          </section>

          {/* What I Did */}
          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-6 backdrop-blur-md">
            <h2 className="text-xl font-semibold text-amber-300 mb-3">
              What I Built
            </h2>
            <ul className="list-disc pl-5 text-gray-200 space-y-2">
              {whatIDid.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Reflection */}
          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-6 backdrop-blur-md">
            <h2 className="text-xl font-semibold text-amber-300 mb-3">
              Reflection
            </h2>
            <p className="text-gray-200 whitespace-pre-line">
              {reflection}
            </p>
          </section>
        </div>
      </div>

      {/* 图片弹窗 */}
      {hasImages && (
        <MediaModel
          isOpen={showMedia}
          onClose={() => setShowMedia(false)}
          title={meta.title}
          media={{ images: meta.images }}
        />
      )}
    </div>
  );
}