"use client";

import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Github } from "lucide-react";

const meta = {
  slug: "short-drama-text-analysis",
  title: "Short Drama Text Analysis: Human-AI Dialogue Behavior Mining",
  institution: "Independent Data Project",
  industries: ["Beauty", "Consumer Services", "AI Training"],
  practice: "Python · JSON Processing · NLP · Text Mining · Dialogue Metrics",
  term: "2025.09",
  status: "Completed" as const,
  tags: ["NLP", "Text Mining", "Dialogue Analysis", "Feature Engineering"],
  github: "",
};

const overview = `Processed internal human–AI role-play dialogues (JSON → CSV) and built conversation-level metrics
to quantify practice rhythm, engagement, diversity/novelty, and session variation.`;

const whatIDid: string[] = [
  "Parsed nested JSON dialogues into structured tabular datasets (conversation/message level).",
  "Engineered metrics: turns, duration, interaction density, lexical diversity, repetition and novelty proxies.",
  "Summarized behavioral patterns across sessions and exported clean datasets for downstream modeling.",
];

const methodology: string[] = [
  "Ingestion + cleaning: role separation, timestamp normalization, text normalization, invalid record removal.",
  "Conversation reconstruction: session grouping and sequencing; message-level to conversation-level aggregation.",
  "Feature engineering: interpretable indicators for engagement, rhythm, and content diversity.",
];

const reflection = `Key takeaway: conversational data is unstructured by nature, so a reliable processing pipeline
is the real foundation for any dialogue analytics or evaluation.`;

export default function ShortDramaTextAnalysisPage() {
  const badgeClass =
    meta.status === "Completed"
      ? "bg-blue-600/25 text-blue-100 border-blue-400/40"
      : "bg-cyan-600/25 text-cyan-100 border-cyan-400/40";

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#090a12]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(59,130,246,0.18),transparent_60%),radial-gradient(circle_at_10%_90%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_90%_20%,rgba(56,189,248,0.15),transparent_55%)]" />
      </div>

      <Navigation activeSection="data" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex items-center justify-between">
            <Link href="/data">
              <Button className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-md border-blue-400/30 text-gray-100 hover:bg-blue-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Data
              </Button>
            </Link>

            {meta.github && (
              <Link href={meta.github} target="_blank">
                <Button className="bg-blue-500/20 border border-blue-400/40 text-blue-100 hover:bg-blue-500/30">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Repo
                </Button>
              </Link>
            )}
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
              <h1 className="text-xl md:text-2xl font-semibold text-white mb-1 pr-28">
                {meta.title}
              </h1>

              <div className="mb-3 inline-flex flex-wrap items-center gap-2 text-sm text-gray-300">
                <span>{meta.institution}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {meta.term}
                </span>
              </div>

              <div className="mb-2 flex flex-wrap gap-2">
                {[...(meta.industries ?? []), ...meta.tags].map((t) => (
                  <Badge key={t} className="bg-blue-500/20 text-blue-100 border-blue-500/30">
                    {t}
                  </Badge>
                ))}
              </div>

              <p className="text-gray-200">{meta.practice}</p>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-500/20" />
          </Card>

          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">Project Overview</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">{overview}</p>
          </section>

          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">What I Did</h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {whatIDid.map((line, i) => (
                <li key={i} className="leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">Methodology</h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {methodology.map((line, i) => (
                <li key={i} className="leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">Reflection</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">{reflection}</p>
          </section>
        </div>
      </div>
    </div>
  );
}