"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function McmIcm2025Page() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "mcm-icm-2025",
    title: "MCM/ICM Mathematical Contest in Modeling 2025",
    institution: "COMAP (Consortium for Mathematics and Its Applications)",
    practice: "Modeling · Statistics · Visualization",
    term: "2025.02",
    status: "Completed" as const,
    tags: [
      "Modeling",
      "Statistics",
      "Optimization",
      "Time Series",
      "Geospatial",
      "Policy Analysis",
    ],
    notes: [
      "/competition/mcm.png",
      "/competition/mcm2.png",
      "/competition/mcm3.png",
    ] as string[],
  };

  const overview = `International mathematical modeling competition tackling an open, data-driven problem.
I assembled multi-source datasets, framed hypotheses, and built a transparent pipeline—from exploratory analysis and
feature engineering to model selection and visualization—then translated results into an actionable narrative and memo.`;

  const whatIDid: string[] = [
    "Scoping & data assembly: curated public datasets; standardized country names/years; reconciled missing values.",
    "EDA & feature engineering: trend and seasonal checks; log/ratio transforms; composite indicators; outlier and leverage diagnostics.",
    "Modeling: baselines (OLS, regularized regression) → tree ensembles for nonlinearity; sensitivity checks and ablation to avoid over-fitting.",
    "Clustering & segmentation: region- and readiness-based cohorts to compare dynamics and policy efficacy.",
    "Forecasting & what-ifs: simple time-series baselines with scenario knobs to stress-test policy levers.",
    "Visualization: heatmaps, small-multiples, and tier maps for cross-country comparability; reproducible charts for the paper.",
    "Communication: executive summary + appendix (assumptions, limitations, reproducibility notes) tied to recommendations.",
  ];

  const reflection = `Biggest lesson: modeling is only useful when the assumptions, comparability, and uncertainty are explicit.
Cross-country data is noisy and policy signals are confounded; versioned data cleaning, clear definitions, and sensitivity
analysis matter as much as the final metric. Packaging results as a short policy story—backed by transparent exhibits—
made the work land with non-technical readers. If iterating, I’d tighten causal identification (instrumental variables or
synthetic controls where feasible) and expand counterfactual scenarios to pressure-test recommendations under data drift.`;

  const hasNotes = meta.notes.length > 0;
  const badgeClass =
    meta.status === "Completed"
      ? "bg-blue-600/25 text-blue-100 border-blue-400/40"
      : "bg-cyan-600/25 text-cyan-100 border-cyan-400/40";

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* blue nebula background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0A0E1A]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(59,130,246,0.18),transparent_60%),radial-gradient(circle_at_12%_88%,rgba(99,102,241,0.16),transparent_55%),radial-gradient(circle_at_88%_22%,rgba(56,189,248,0.14),transparent_55%)]" />
      </div>

      <Navigation activeSection="data" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          {/* top bar */}
          <div className="flex items-center justify-between">
            <Link href="/data">
              <Button className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-md border-blue-400/30 text-gray-100 hover:bg-blue-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Data
              </Button>
            </Link>

            {hasNotes && (
              <Button
                onClick={() => setShowNotes(true)}
                className="bg-blue-500/20 border border-blue-400/40 text-blue-100 hover:bg-blue-500/30"
              >
                View More
              </Button>
            )}
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
                  <Badge key={t} className="bg-blue-500/20 text-blue-100 border-blue-500/30">
                    {t}
                  </Badge>
                ))}
              </div>
              <p className="text-gray-200">{meta.practice}</p>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-500/20" />
          </Card>

          {/* overview */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">
              Project Overview
            </h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {overview}
            </p>
          </section>

          {/* what i did */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">
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

          {/* reflection */}
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
