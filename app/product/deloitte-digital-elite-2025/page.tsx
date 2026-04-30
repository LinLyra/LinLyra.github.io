"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function DeloitteDigitalElitePage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "deloitte-digital-elite-2025",
    title: "PinSight: AI-Driven Audit Execution Platform",
    institution: "Deloitte China",
    practice: "AI + Audit · Product Innovation",
    term: "2025.05",
    status: "Completed" as const,
    placement: "National Runner-up",
    notes: ["/competition/pin1.png"],
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
      <Navigation activeSection="product" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">

          {/* Back */}
          <Link href="/product">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Product
            </Button>
          </Link>

          {/* Header */}
          <Card className="p-6">
            <h1 className="text-2xl font-semibold text-white">
              {meta.title}
            </h1>

            <div className="flex gap-3 text-gray-300 mt-2">
              <span>{meta.institution}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {meta.term}
              </span>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {meta.tags.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>
          </Card>

          {/* Overview */}
          <section>
            <h2 className="text-xl text-amber-400 mb-2">Project Overview</h2>
            <p className="text-gray-200 whitespace-pre-line">{overview}</p>
          </section>

          {/* Key Innovations 🔥 */}
          <section>
            <h2 className="text-xl text-amber-400 mb-2">Key Innovations</h2>
            <ul className="list-disc pl-5 text-gray-200 space-y-2">
              {keyHighlights.map((k, i) => (
                <li key={i}>{k}</li>
              ))}
            </ul>
          </section>

          {/* Workflow 🔥 */}
          <section>
            <h2 className="text-xl text-amber-400 mb-2">System Workflow</h2>
            <div className="flex flex-wrap gap-3 text-gray-200">
              {workflow.map((step, i) => (
                <span key={i} className="px-3 py-1 border rounded-full">
                  {step}
                </span>
              ))}
            </div>
          </section>

          {/* What I Did */}
          <section>
            <h2 className="text-xl text-amber-400 mb-2">What I Did</h2>
            <ul className="list-disc pl-5 text-gray-200 space-y-2">
              {whatIDid.map((w, i) => (
                <li key={i}>{w}</li>
              ))}
            </ul>
          </section>

          {/* Reflection */}
          <section>
            <h2 className="text-xl text-amber-400 mb-2">Reflection</h2>
            <p className="text-gray-200 whitespace-pre-line">
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