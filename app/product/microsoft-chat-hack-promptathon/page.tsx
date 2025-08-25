"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function MicrosoftPromptathonPage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "microsoft-promptathon-2025",
    title: "Microsoft Chat & Hack Promptathon",
    institution: "Microsoft",
    practice: "GenAI Prompt Engineering · Product Prototyping",
    term: "2025.03",
    status: "Completed" as const,
    tags: ["GenAI", "Prompting", "Product Prototype"],
    notes: ["/competition/microsoft.png"],
  };

  const overview = `Rapid prototyping sprint focused on prompt engineering and lightweight productization.
I explored prompt patterns for multi-turn chat tasks, instrumented quick evaluations to compare response quality,
and packaged a minimal demo that showcased a pragmatic use case rather than generic chat.`;

  const highlights: string[] = [
    "Designed reusable prompt templates (task framing, role, constraints, examples) for consistent outputs.",
    "Set up a simple evaluation rubric (accuracy, completeness, refusal safety, latency) to iterate quickly.",
    "Built a minimal UI demo to validate task flow end-to-end and collect feedback from non-technical peers.",
    "Added basic guardrails: input sanitation, safe-response fallbacks, and logging for error triage.",
    "Documented prompt variants and trade-offs to support later handoff and reproducibility.",
  ];

  const reflection = `Two lessons stood out. First, prompt work becomes real once it is tied to a concrete task and an
evaluation loop—otherwise it drifts. Second, a thin product wrapper (clear CTA, guardrails, and telemetry)
does more to earn user trust than another clever prompt tweak.

I also learned that prompt patterns scale best when treated like small, composable building blocks. By writing
prompts as “task modules” (setup → constraints → exemplars → validation) and pairing them with a tiny rubric,
I could swap pieces without breaking the whole flow. That made failures debuggable: if quality dipped, I knew
whether to adjust instructions, add a counter-example, tighten constraints, or improve input sanitation.

If I iterate further, I would (1) add lightweight dataset capture for continuous evaluation, (2) keep a small
registry of reusable task blocks with known trade-offs, and (3) log user intent + outcome to close the loop
between prompting and product. The goal isn't a perfect prompt—it’s a prompt that is observable, maintainable,
and trustworthy in a real user journey.`;

  const hasNotes = meta.notes.length > 0;
  const badgeClass =
    meta.status === "Completed"
      ? "bg-orange-600/25 text-orange-100 border-amber-400/40"
      : "bg-amber-600/25 text-amber-100 border-amber-400/40";

  return (
    <div className="relative min-h-screen overflow-hidden">

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#140e0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(245,158,11,0.16),transparent_60%),radial-gradient(circle_at_12%_88%,rgba(249,115,22,0.14),transparent_55%),radial-gradient(circle_at_90%_25%,rgba(251,191,36,0.12),transparent_55%)]" />
      </div>

      <Navigation activeSection="product" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">

          <div className="flex items-center justify-between">
            <Link href="/product">
              <Button className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-md border-amber-400/30 text-amber-100 hover:bg-orange-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Product
              </Button>
            </Link>

            {hasNotes && (
              <Button
                onClick={() => setShowNotes(true)}
                className="bg-orange-500/20 border border-amber-400/40 text-amber-100 hover:bg-orange-500/30"
              >
                View More
              </Button>
            )}
          </div>


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
                  <Badge key={t} className="bg-orange-500/20 text-orange-100 border-amber-500/30">
                    {t}
                  </Badge>
                ))}
              </div>
              <p className="text-gray-200">{meta.practice}</p>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-500/20" />
          </Card>

          {/* Overview */}
          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-orange-300 md:text-2xl">Project Overview</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {overview}
            </p>
          </section>

          {/* What I Did */}
          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-orange-300 md:text-2xl">What I Did</h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {highlights.map((line, i) => (
                <li key={i} className="leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-orange-300 md:text-2xl">Reflection</h2>
            <div
              className="
                whitespace-pre-wrap
                break-words
                [overflow-wrap:anywhere]
                text-base leading-relaxed text-gray-200
              "
            >
              {reflection}
            </div>
          </section>
        </div>
      </div>

      {hasNotes && (
        <MediaModel
          isOpen={showNotes}
          onClose={() => setShowNotes(false)}
          title={meta.title}
          media={{ images: meta.notes }}
        />
      )}
    </div>
  );
}

