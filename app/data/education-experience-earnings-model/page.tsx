"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function EducationExperienceModelPage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "education-experience-earnings-model",
    title: "Education vs Experience: Earnings Model Comparison",
    institution: "Course Project · University of Sydney",
    practice:
      "Econometrics · Multiple Regression · Model Specification · Forecasting",
    term: "2025 S2",
    status: "Completed" as const,
    tags: [
      "Regression",
      "Econometrics",
      "Forecasting",
      "Model Comparison",
      "Omitted Variable Bias",
      "Nonlinear Model",
      "Out-of-sample",
      "Policy Insight",
    ],
    // 没图可以先 []
    notes: ["/data/edu_exp_1.png", "/data/edu_exp_2.png"],
    // 可选：如果你有 PDF 报告
    reportPdf: "/data/Education_Experience_Report.pdf",
  };

  // ================= OVERVIEW =================

  const overview = `This project examines how education and work experience jointly shape individual earnings using a structured model comparison framework.

Objective:
• Quantify the relative importance of schooling vs. experience.
• Evaluate model specification sensitivity.
• Improve predictive performance while maintaining interpretability.

Methodology:
• Built multiple regression specifications with progressively richer controls.
• Compared linear, extended, and nonlinear models.
• Performed out-of-sample forecasting to evaluate real predictive power.
• Assessed omitted-variable bias and model stability.

Key findings:
• Education emerges as the strongest and most stable predictor of earnings.
• Experience increases wages but shows clear diminishing marginal returns.
• Extended models reduce omitted-variable bias and improve explanatory power.
• The full nonlinear specification delivers the best out-of-sample forecasts.

Implication:
Human capital accumulation through education remains the dominant long-run see driver of earnings, while early-career experience primarily affects short-run wage growth.`;

  // ================= WHAT I DID =================

  const highlights: string[] = [
    "Constructed a clean earnings panel and engineered core human-capital variables (education years, experience, and interaction terms).",
    "Built a baseline Mincer-style regression and progressively extended specifications with demographic and cognitive controls.",
    "Diagnosed model assumptions via residual patterns, functional-form checks, and multicollinearity review.",
    "Estimated nonlinear specifications to capture diminishing returns to experience.",
    "Performed out-of-sample forecasting to compare true predictive performance rather than relying only on in-sample fit.",
    "Quantified omitted-variable bias by comparing coefficient stability across nested models.",
    "Synthesized results into policy-relevant insights on education access and early-career labour dynamics.",
  ];

  // ================= REFLECTION =================

  const reflection = `The most important lesson from this project is that model specification matters as much as model accuracy.

Early linear models appeared adequate in-sample, but coefficient stability checks revealed sensitivity to omitted variables. By expanding the specification and testing nonlinear forms, the analysis became both more interpretable and more predictive.

Two practices proved especially valuable:
(1) evaluating models with out-of-sample forecasts rather than relying purely on R², and  
(2) explicitly testing diminishing returns to experience.

If I were to extend this work, I would:
• introduce panel or pseudo-panel structure,
• explore causal identification strategies,
• incorporate occupation and industry heterogeneity,
• and build an interactive earnings simulator for policy scenarios.

This project strengthened my ability to connect econometric rigor with real labour-market interpretation — moving beyond “fit a regression” toward structured model reasoning.`;

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
          {/* ===== Top buttons ===== */}
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

          {/* ===== Meta card ===== */}
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

          {/* ===== Overview ===== */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">
              Project Overview
            </h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {overview}
            </p>
          </section>

          {/* ===== What I did ===== */}
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

          {/* ===== Reflection ===== */}
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

      {/* ===== Media modal ===== */}
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
