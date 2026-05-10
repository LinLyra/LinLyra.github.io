"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ExternalLink, Github, Trophy } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function DeloitteDigitalElitePage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "deloitte-digital-elite-2025",
    title: "PinSight: AI-Driven Audit Execution Platform",
    institution: "Deloitte China",
    practice: "AI + Audit · Product Innovation",
    term: "2025.05",
    placement: "National Runner-up",
    github: "https://github.com/LinLyra/pinsight",
    moreUrl: "",
    notes: ["/competition/pin1.png"] as string[],
    tags: [
      "AI Audit",
      "Product Architecture",
      "Document AI",
      "Workflow Automation",
      "Digital Transformation",
    ],
  };

  const overview = `PinSight is an AI-driven audit execution platform designed for SME audit teams, addressing the inefficiencies of traditional labor-intensive auditing.

As enterprise data complexity grows, manual vouching and rule-based sampling become unreliable and error-prone. Meanwhile, most SME audit teams lack access to expensive enterprise systems, creating a critical “digital gap”.

PinSight bridges this gap by automating the full audit workflow — from risk-based sampling and document understanding to logic validation and working paper generation — through a modular, explainable AI system.

The system emphasizes:
- Precision over random sampling
- Structured understanding of unstructured audit evidence
- Human-in-the-loop control for reliability and compliance

This project was delivered as a working product prototype with a functional UI and end-to-end workflow.`;


  const keyHighlights: string[] = [
    "Risk-oriented smart sampling using hybrid ML models (XGBoost + Isolation Forest) to detect anomalies beyond traditional methods.",
    "OCR-free document understanding via Donut (Document Transformer) for direct image-to-JSON extraction.",
    "Triple-check validation engine covering consistency, logic, and cross-document correlation.",
    "Automated audit narrative generation using LLMs with traceable reasoning.",
    "Modular microservices architecture enabling plug-and-play deployment.",
  ];

  // 🔥 WHAT I DID
  const whatIDid: string[] = [
    "Led product development as the sole technologist, translating audit workflows into an AI-driven system.",
    "Designed the full architecture: ingestion, sampling, document understanding, validation, and reporting.",
    "Built a working web prototype with interactive UI for anomaly inspection and report generation.",
    "Developed prompt workflows for AI-assisted audit reasoning and narrative generation.",
    "Prioritised explainability and auditor control in system design.",
    "Delivered MVP under time constraints focusing on usability and reliability.",
  ];

  // 🔥 NEW WORKFLOW
  const workflow = [
    "Import: Upload ledgers or datasets",
    "Sample: AI identifies high-risk entries",
    "Recognize: Extract structured data from vouchers",
    "Validate: Run business logic checks",
    "Generate: Produce audit workpapers",
  ];

  // 🔥 REFLECTION
  const reflection = `This project reinforced a key insight: in audit systems, reliability and trust matter more than raw model performance.

Instead of building a black-box AI, I designed a system where auditors can verify, control, and override every step.

The modular architecture ensures flexibility and real-world deployability, especially for SME audit environments.

Being the sole technical contributor also strengthened my ability to translate domain knowledge into executable product systems.`;

  const hasNotes = meta.notes.length > 0;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0a0e1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(245,158,11,0.16),transparent_60%),radial-gradient(circle_at_12%_90%,rgba(251,146,60,0.14),transparent_55%),radial-gradient(circle_at_90%_22%,rgba(99,102,241,0.12),transparent_55%)]" />
      </div>

      <Navigation activeSection="product" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex items-center justify-between gap-3">
            <Link href="/product">
              <Button className="border border-amber-400/30 text-amber-200 hover:bg-white/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Product
              </Button>
            </Link>

            <div className="flex items-center gap-2">
              {meta.github ? (
                <Link href={meta.github} target="_blank" rel="noreferrer">
                  <Button className="bg-white/10 border border-white/20 text-gray-100 hover:bg-white/15">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
              ) : null}

              {meta.moreUrl ? (
                <Link href={meta.moreUrl} target="_blank" rel="noreferrer">
                  <Button className="bg-orange-500/20 border border-amber-400/40 text-amber-100 hover:bg-orange-500/30">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View more
                  </Button>
                </Link>
              ) : hasNotes ? (
                <Button
                  onClick={() => setShowNotes(true)}
                  className="bg-orange-500/20 border border-amber-400/40 text-amber-100 hover:bg-orange-500/30"
                >
                  View more
                </Button>
              ) : null}
            </div>
          </div>

          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="absolute right-3 top-3">
              {meta.placement ? (
                <span className="inline-flex items-center h-6 rounded-full px-2.5 text-xs border border-amber-300/40 bg-amber-500/20 text-amber-100 backdrop-blur-sm">
                  <Trophy className="mr-1 h-3.5 w-3.5" />
                  {meta.placement}
                </span>
              ) : null}
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
                {meta.tags.map((t) => (
                  <Badge key={t} className="border-amber-500/30 bg-orange-500/20 text-xs font-normal text-orange-100">
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
            <h2 className="mb-3 text-xl font-semibold text-amber-400 md:text-2xl">Project Overview</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">{overview}</p>
          </section>

          {/* Key Innovations 🔥 */}
          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-amber-400 md:text-2xl">Key Innovations</h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {keyHighlights.map((k, i) => (
                <li key={i}>{k}</li>
              ))}
            </ul>
          </section>

          {/* Workflow 🔥 */}
          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-amber-400 md:text-2xl">System Workflow</h2>
            <div className="flex flex-wrap gap-2 text-gray-200">
              {workflow.map((step, i) => (
                <span key={i} className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-sm">
                  {step}
                </span>
              ))}
            </div>
          </section>

          {/* What I Did */}
          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-amber-400 md:text-2xl">What I Did</h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {whatIDid.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </section>

          {/* Reflection */}
          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-amber-400 md:text-2xl">Reflection</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">{reflection}</p>
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