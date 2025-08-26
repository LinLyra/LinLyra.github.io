"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function DisasterInsurancePage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "disaster-insurance",
    title: "Disaster Risk Insurance: Insights and Recommendations",
    institution: "Course Project · University of Sydney",
    practice: "Risk Finance · Protection Gap Analytics · EDA & Hypothesis Test",
    term: "2024 S2",
    status: "Completed" as const,
    award: "Project Excellence Award",
    tags: [
      "Protection Gap",
      "Parametric Insurance",
      "Asia",
      "Earthquake/Flood",
      "Payout Ratio",
      "Welch t-test",
      "R",
      "tidyverse",
      "ggplot2",
      "EDA",
    ],
    notes: [
      "/data/top5.png",
      "/data/data1001top5.png",
    ] 
  };

  const overview = `Using the Kaggle/Our World in Data natural-disaster dataset, I quantified the global protection gap
(economic losses − insured losses) and compared payout ratios across regions and peril types.
Asia shows frequent, high-loss events (especially earthquakes and floods) but persistently low insurance coverage;
North America/Oceania are more mature, yet uninsured losses are still rising with event frequency.
Recommendation: prioritize innovative/parametric products and public-private partnerships in Asia and other vulnerable regions
to narrow the protection gap and strengthen resilience. This direction aligns with the World Bank Climate Finance Mobilization goals.`;

  const highlights: string[] = [
    "Built an end-to-end R/tidyverse pipeline: cleaning, encoding payout ratios and protection-gap indicators; publication-ready charts.",
    "Constructed regional time series of uninsured losses; contrasted payout ratios with disaster frequency and peril mix.",
    "Peril-focused slices (earthquake/flood) to map loss drivers to product design opportunities (incl. parametrics/PPPs).",
    "Statistical inference: Welch one-sided t-test (Asia vs North America coverage), p = 0.04638 < 0.05 → Asia significantly lower.",
    "Synthesized external evidence (Swiss Re sigma) to validate trends and support an action-oriented recommendation.",
    "Packaged findings for a policy audience (World Bank): where to intervene, which peril to target, and why parametrics help.",
  ];

  const reflection = `Working with noisy, partly missing self-reported/loss data forced disciplined claims: I documented
assumptions, kept estimates conservative, and triangulated with Swiss Re sigma. The biggest learning was turning
analytics into a concrete product roadmap: for Asian markets, simulate parametric triggers (e.g., quake intensity,
flood gauge thresholds) and test affordability/payout adequacy under PPP structures. If iterating, I would integrate
exposure layers and higher-resolution peril data, then run sensitivity analyses on trigger design to balance basis risk,
speed of payout, and fiscal impact. Keeping the message policy-relevant—where to act, what to build, and how to measure
impact—was key, and it’s also why this project earned recognition.`;

  const hasNotes = meta.notes.length > 0;
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

            <div className="flex items-center gap-2">
              {hasNotes && (
                <Button
                  onClick={() => setShowNotes(true)}
                  className="bg-blue-500/20 border border-blue-400/40 text-blue-100 hover:bg-blue-500/30"
                >
                  View More
                </Button>
              )}
            </div>
          </div>


          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="absolute right-3 top-3 flex gap-2">
              <span
                className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${badgeClass}`}
              >
                {meta.status}
              </span>
              {meta.award && (
                <span className="inline-flex items-center h-6 rounded-full px-2.5 text-xs border border-amber-300/40 bg-amber-500/20 text-amber-100">
                  🏆 {meta.award}
                </span>
              )}
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
              <div className="flex flex-wrap gap-2 mb-2">
                {meta.tags.map((t) => (
                  <Badge
                    key={t}
                    className="bg-blue-500/20 text-blue-100 border-blue-500/30"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
              <p className="text-gray-200">{meta.practice}</p>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-500/20" />
          </Card>

          {/* Overview */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">
              Project Overview
            </h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {overview}
            </p>
          </section>

          {/* What I Did */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">
              What I Did
            </h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {highlights.map((line, i) => (
                <li key={i} className="leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </section>

          {/* Reflection */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">
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

