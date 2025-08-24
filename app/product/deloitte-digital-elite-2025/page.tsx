"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function DeloitteDigitalElitePage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "deloitte-digital-elite-2025",
    title: "Deloitte Digital Elite Challenge 2025",
    institution: "Deloitte China",
    practice: "AI + Audit · Product Innovation",
    term: "2025.05",
    status: "Completed" as const,
    placement: "National Runner-up",
    notes: ["/product/deloitte.png"],
    tags: [
      "AI + Audit",
      "Product Architecture",
      "Frontend Dev",
      "Prompt/Flows",
      "Data Pipeline",
    ],
  };

  const overview = `National product-innovation challenge by Deloitte China.
I advanced from the AI+Audit preliminary track (Top 5 individual) to the national finals and led the team on the technical side.
We designed and shipped a working prototype for an AI-enabled audit workflow: sampling → document understanding → checks → workpapers, focusing on reliability and explainability.`;

  const whatIDid: string[] = [
    "Acted as Team Lead & Sole Technologist; four teammates contributed audit expertise while I owned the product build.",
    "Designed the end-to-end architecture: ingestion, risk-oriented sampling logic, document understanding, rules/validation, and workpaper generation.",
    "Implemented a usable web prototype and interaction flows; built prompt templates, dialogue states, and error/fallback paths.",
    "Stitched data plumbing and evaluation hooks so auditors could verify field-level extraction and control tests quickly.",
    "Drove delivery under time pressure: scoped the MVP, prioritised reliability/traceability, and prepared an executive-ready demo.",
  ];

  const reflection = `Cross-functional contests reward clarity more than flash.
Owning the full stack taught me to translate audit requirements into testable product behaviors: objectives → risks → controls → evidence.
Two choices paid off: (1) a modular design that tolerates imperfect inputs with graceful fallbacks; (2) surface-level guardrails and reviewer overrides so auditors stay in control.
Being the only technologist also reinforced a habit—show the smallest valuable loop first (upload → check → workpaper), then iterate on accuracy and speed.`;

  const hasNotes = meta.notes.length > 0;
  const statusBadge =
    meta.status === "Completed"
      ? "bg-amber-600/25 text-amber-100 border-amber-400/40"
      : "bg-orange-600/25 text-orange-100 border-orange-400/40";

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#120d09]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(245,158,11,0.16),transparent_60%),radial-gradient(circle_at_15%_90%,rgba(251,146,60,0.14),transparent_55%),radial-gradient(circle_at_90%_25%,rgba(253,186,116,0.12),transparent_55%)]" />
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

          <Card className="relative overflow-hidden border-white/20 bg-white/10 backdrop-blur-md">
            <div className="absolute right-3 top-3 flex gap-2">
              <span className={`inline-flex h-6 items-center rounded-full px-2.5 text-xs border backdrop-blur-sm ${statusBadge}`}>
                {meta.status}
              </span>
              {meta.placement && (
                <span className="inline-flex h-6 items-center rounded-full px-2.5 text-xs border border-yellow-300/40 bg-yellow-500/20 text-yellow-100">
                  🏆 {meta.placement}
                </span>
              )}
            </div>

            <div className="p-5 md:p-6">
              <h1 className="mb-1 text-xl font-semibold text-white md:text-2xl">
                {meta.title}
              </h1>

              <div className="mb-3 inline-flex flex-wrap items-center gap-2 text-sm text-gray-300">
                <span>{meta.institution}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {meta.term}
                </span>
                <span className="ml-1 rounded-full border border-amber-400/40 bg-orange-500/15 px-2 py-0.5 text-xs text-amber-100">
                  Team Lead · Sole Technologist
                </span>
              </div>

              <div className="mb-2 flex flex-wrap gap-2">
                {meta.tags.map((t) => (
                  <Badge key={t} className="border-amber-500/30 bg-orange-500/20 text-amber-100">
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
