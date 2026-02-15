"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function WineQualityAnalysisPage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "wine-quality-analysis",
    title: "Wine Quality Analysis: Key Drivers of Perceived Quality",
    institution: "Course Project · University of Sydney",
    practice:
      "Statistical Modeling · Model Selection · Robustness & Stability Checks",
    term: "2025 S2",
    status: "Completed" as const,
    tags: [
      "R",
      "Multiple Regression",
      "Diagnostics",
      "Transformations (log)",
      "Model Selection",
      "AIC/BIC",
      "Stability / Robustness",
      "Interpretation",
    ],
    // 可选：把图放到 public/data/ 下，例如 /data/wine_1.png
    // 没有图就写 []，按钮会自动消失
    notes: ["/data/wine_1.png", "/data/wine_2.png"],
    // 可选：把你的 PDF 放到 public/data/Wine_Quality_Analysis.pdf
  };

  const overview = `Goal: identify the key physicochemical drivers behind wine quality ratings, and build interpretable models that generalize.

Dataset:
• Vinho Verde wine quality dataset (red + white variants)
• Outcome: sensory “quality” score
• Predictors: acidity, alcohol, sulphates, residual sugar, density, etc.

Approach:
• Ran full diagnostic checks (linearity, normality, heteroskedasticity, leverage/outliers).
• Applied transformations (e.g., log) where appropriate to stabilize variance and improve fit.
• Compared model candidates via selection criteria and validation logic.
• Emphasized interpretability: which variables matter most and why.

Key takeaway:
Quality is not driven by a single variable; the best-performing models balance interpretability with predictive stability, and show consistent importance for alcohol and a small set of chemical indicators.`;

  const highlights: string[] = [
    "Performed EDA and data cleaning, checked missingness, ranges, and distribution shifts between red vs white wines.",
    "Ran regression diagnostics: residual patterns, Q-Q plots, leverage/influence checks, and heteroskedasticity indications.",
    "Applied targeted transformations (e.g., log) to improve assumptions and reduce skew/outlier sensitivity.",
    "Built multiple candidate models and compared them using selection criteria (e.g., AIC/BIC) and interpretability constraints.",
    "Evaluated variable importance and stability with repeated selection logic (aiming for robust, not just ‘best AIC’).",
    "Produced a final explainable model and summarized practical insights: which chemical levers are associated with higher perceived quality.",
    "Communicated results in an executive-summary style: conclusions first, then evidence, then limitations and next steps.",
  ];

  const reflection = `This project taught me that “best model” depends on the goal:
• If the goal is explanation, you want a stable set of predictors and a clean story.
• If the goal is prediction, you may accept more complexity but must validate stability.

I focused on bridging both:
(1) rigorous diagnostics + transformations,
(2) selection with sanity checks,
(3) conclusions that remain consistent across reasonable modeling choices.

If iterating further, I’d:
• add cross-validated performance comparisons,
• explore nonlinearities (splines/interactions),
• compare red vs white with a unified model including type interactions,
• build a small interactive report (filters + coefficient explorer) for better storytelling.`;

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

              {!!meta.reportPdf && (
                <Link href={meta.reportPdf} target="_blank">
                  <Button className="bg-white/10 border border-white/20 text-gray-100 hover:bg-white/15">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Report PDF
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
