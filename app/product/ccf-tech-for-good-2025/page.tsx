"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function CcfTechForGood2025Page() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "ccf-tech-for-good-2025",
    title: "CCF Tech for Good Hackathon 2025",
    institution: "CCF · Tech for Good",
    practice: "Hackathon · Accessible Films · Product Design",
    term: "2025.05",
    status: "Completed" as const,
    award: "Top 9",
    tags: ["Accessible Films", "Product Design", "Social Impact"],
    notes: [
      "/competition/ccf.png",
      "/competition/ccf1.png",
      "/competition/ccf2.png",
    ] as string[],
  };

  const overview = `Built a social-impact prototype that generates audio descriptions for films to improve accessibility for visually impaired audiences.
We mapped user needs, defined success metrics, and delivered a working demo that turns “silent” gaps into concise scene narration while preserving dialogues.`;

  const whatIDid: string[] = [
    "Framed the problem with stakeholder interviews and benchmarked current manual workflows for accessible films.",
    "Designed an end-to-end pipeline: speech/silence detection → scene understanding → narration drafting → voiceover mix.",
    "Implemented clean prompts/flows for scene summarisation and tone control; added basic guardrails and fallbacks.",
    "Built evaluation rubrics (clarity, timing, non-spoiler tone) and ran quick user-style pilots for iteration.",
    "Packaged a lightweight UI for one-click generation and manual tweaks to support accessibility editors.",
  ];

  const reflection = `Hackathons reward clarity over complexity. Scoping around “insert narration only when dialogue is silent”
forced disciplined engineering and better UX decisions. The key lessons for me:
1) model choice matters less than crisp prompts and timing control;
2) accessible design needs measurable guardrails (no spoilers, readable pace);
3) a small, end-to-end demo with editing hooks is more valuable than a perfect model benchmark.`;

  const hasNotes = meta.notes.length > 0;
  const statusClass =
    meta.status === "Completed"
      ? "bg-amber-600/25 text-amber-100 border-amber-400/40"
      : "bg-orange-600/25 text-orange-100 border-orange-400/40";

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0d0a07]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(245,158,11,0.16),transparent_60%),radial-gradient(circle_at_12%_88%,rgba(251,191,36,0.14),transparent_55%),radial-gradient(circle_at_90%_22%,rgba(234,179,8,0.12),transparent_55%)]" />
      </div>

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
            <div className="absolute right-3 top-3 flex items-center gap-2">
              <span className={`inline-flex h-6 items-center rounded-full px-2.5 text-xs border ${statusClass}`}>
                {meta.status}
              </span>
              {meta.award && (
                <span className="inline-flex h-6 items-center rounded-full px-2.5 text-xs border border-yellow-300/40 bg-yellow-500/20 text-yellow-100">
                  🏅 {meta.award}
                </span>
              )}
            </div>
            <div className="p-5 md:p-6">
              <h1 className="mb-1 text-xl md:text-2xl font-semibold text-white">
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
                    className="border-amber-500/30 bg-orange-500/20 text-amber-100"
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
              Project Overview
            </h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {overview}
            </p>
          </section>

          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-amber-400 md:text-2xl">
              What I Did
            </h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {whatIDid.map((line, i) => (
                <li key={i} className="leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-amber-400 md:text-2xl">
              Reflection
            </h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {reflection}
            </p>
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
