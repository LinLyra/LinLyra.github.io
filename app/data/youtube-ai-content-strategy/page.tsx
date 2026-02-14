"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Github, ExternalLink } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function YouTubeAIContentStrategyPage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "youtube-ai-content-strategy",
    title: "YouTube AI Content Strategy Optimization",
    institution: "Personal Project",
    practice: "Content Analytics · Clustering · Causal-style Estimation · Posting Strategy",
    term: "2025.10",
    status: "Completed" as const,
    tags: [
      "Python",
      "SQL",
      "YouTube Data API",
      "KMeans",
      "OLS",
      "Interaction Terms",
      "Cohort/Window Analysis",
      "Creator Strategy",
      "A/B-ready Insights",
    ],

    notes: [],
    links: {
    },
  };

  const overview = `Goal: help AI content creators and platform recommenders solve “when to post” and “what to post” under high volatility in early performance.

Data & scope:
• Collected 3,143 videos from 80+ AI/tech channels (Jan–Sep 2025) via Python + SQL.
• Built an early-performance panel using T+48h views and engagement signals to reduce long-tail drift.
• Grouped channels by scale (e.g., head vs long-tail) using 90-day rolling views.
• Clustered videos into time-slot segments (e.g., morning / afternoon / evening) with KMeans and calendar features.

Method:
• Estimated posting-time effects using OLS with channel fixed characteristics and interaction terms.
• Tested heterogeneity with “time-slot × channel-scale” interaction to validate asymmetric lift across creator tiers.

Key findings (actionable):
• Short-form 5–10 min content performs best when pushed earlier in the day.
• Mid-size channels benefit most from “afternoon → morning” shift (≈ +16.5% on play volume).
• Long-tail channels see additional gains during late night posting windows (≈ +2%).
• Reallocating ~30% of afternoon uploads to morning/night suggests ~10% overall view uplift.

Output:
A deployable strategy playbook for creators + scheduling recommendation rules for platforms.`;

  const highlights: string[] = [
    "Designed a reproducible pipeline to crawl channel/video metadata and early engagement (T+48h) using Python + SQL (rate-limit safe, incremental updates).",
    "Constructed a panel dataset with time features (weekday/weekend, hour bins), content duration buckets, and engagement ratios (like/view, comment/view).",
    "Defined channel scale tiers using 90-day rolling views, then validated stability to avoid “one-hit” outliers.",
    "Clustered posting time segments with KMeans and compared against rule-based bins to ensure interpretability.",
    "Estimated time-slot effects via OLS, including “time-slot × channel-scale” interactions to capture heterogeneous lift.",
    "Performed robustness checks with alternative dependent variables (views vs engagement) and sensitivity tests on window length (24h/48h/72h).",
    "Converted model outputs into a strategy playbook: recommended posting windows by channel tier + content length, with expected uplift ranges.",
  ];

  const reflection = `The biggest challenge was separating “time-of-posting” from creator quality and topic selection. I handled this by:
(1) focusing on early-window metrics (T+48h) to reduce long-run algorithm drift,
(2) adding interaction terms for channel scale to model heterogeneity,
(3) sanity-checking clusters against interpretable time bins.

If iterating further, I’d introduce:
• causal identification improvements (e.g., diff-in-diff around schedule changes, instrument candidates),
• topic embeddings for content type control,
• a lightweight dashboard that recommends optimal upload slots in real time.

This project strengthened my ability to turn noisy platform data into practical decision rules — the output is not just a report, but an executable growth strategy.`;

  const hasNotes = meta.notes.length > 0;
  const badgeClass =
    meta.status === "Completed"
      ? "bg-blue-600/25 text-blue-100 border-blue-400/40"
      : "bg-cyan-600/25 text-cyan-100 border-cyan-400/40";

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="data" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          {/* Top actions */}
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

              {!!meta.links?.github && (
                <Link href={meta.links.github} target="_blank">
                  <Button className="bg-white/10 border border-white/20 text-gray-100 hover:bg-white/15">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
              )}

              {!!meta.links?.demo && (
                <Link href={meta.links.demo} target="_blank">
                  <Button className="bg-white/10 border border-white/20 text-gray-100 hover:bg-white/15">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Button>
                </Link>
              )}
            </div>
          </div>

          {/* Meta card */}
          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="absolute right-3 top-3">
              <span
                className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${badgeClass}`}
              >
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

          {/* What I did */}
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

      {/* Media modal */}
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
