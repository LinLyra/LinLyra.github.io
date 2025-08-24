"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function GreenSyncESGPage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "greensync-esg-scoring",
    title: "AI × ESG: Generative Scoring for Circular Fashion (GreenSync)",
    institution: "Personal Project · Kaggle Notebook",
    practice: "GenAI · Vision + Document Understanding · JSON Scoring",
    term: "2025.04",
    status: "Completed" as const,
    tags: ["GenAI", "Vision", "Document Understanding", "JSON Output", "ESG"],
    kaggleUrl: "https://www.kaggle.com/code/lynnlong0330/greensync",
  };

  const overview = `Fashion ESG evaluation is often fragmented and qualitative. GreenSync builds a lightweight, reproducible pipeline that turns images and documents into structured ESG signals for circular fashion.
It demonstrates: (E) image understanding for material/impact cues, (S) policy/document assessment via prompting, and (G) structured JSON scoring with schema validation.`;

  const whatIDid = [
    "Designed an end-to-end pipeline: image encoder → document QA → rubric-based scoring → JSON aggregation.",
    "Created a scoring schema (E/S/G dimensions, weights, rationale fields) and enforced it with JSON Schema validation.",
    "Built deterministic prompt blocks and fallback rules to reduce hallucinations and keep outputs schema-compliant.",
    "Implemented material tag extraction from product images and policy checks from brand documents/FAQs.",
    "Evaluated with hand-labeled samples: precision/recall on environmental tags; sanity checks on policy claims.",
    "Packaged as a Kaggle Notebook with pinned environment and runnable examples for transparent reproducibility.",
  ];

  const reflection = `Multimodal ESG scoring works only with strong guardrails. The key was agreeing on a strict JSON schema, writing assertive prompts, and validating every output.
Future iterations: enlarge labeled sets, add confidence scores, human-in-the-loop review, and task-specific fine-tuning or adapters to improve robustness.`;

  const badgeClass =
    meta.status === "Completed"
      ? "bg-amber-600/25 text-amber-100 border-amber-400/40"
      : "bg-orange-600/25 text-orange-100 border-orange-400/40";

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* orange nebula background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#120c07]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(251,146,60,0.18),transparent_60%),radial-gradient(circle_at_12%_85%,rgba(245,158,11,0.14),transparent_55%),radial-gradient(circle_at_90%_20%,rgba(234,88,12,0.12),transparent_55%)]" />
      </div>

      <Navigation activeSection="product" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          {/* top bar */}
          <div className="flex items-center justify-between">
            <Link href="/product">
              <Button className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-md border-amber-400/30 text-gray-100 hover:bg-orange-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Product
              </Button>
            </Link>

            <div className="flex items-center gap-2">
              <a href={meta.kaggleUrl} target="_blank" rel="noreferrer">
                <Button className="bg-white/10 border border-amber-400/40 text-amber-100 hover:bg-white/20">
                  View Notebook
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
              
            </div>
          </div>

          {/* meta card */}
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
                  <Badge key={t} className="bg-orange-500/20 text-amber-100 border-amber-500/30">
                    {t}
                  </Badge>
                ))}
              </div>
              <p className="text-gray-200">{meta.practice}</p>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-500/20" />
          </Card>

          {/* overview */}
          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-amber-400 md:text-2xl">Project Overview</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">{overview}</p>
          </section>

          {/* what i did */}
          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-amber-400 md:text-2xl">What I Built</h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {whatIDid.map((line, i) => (
                <li key={i} className="leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </section>

          {/* reflection */}
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
