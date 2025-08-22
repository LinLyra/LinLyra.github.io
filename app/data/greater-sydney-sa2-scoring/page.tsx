"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Github, ExternalLink } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function Data2901SydneyResourcesPage() {
  const [showNotes, setShowNotes] = useState(false);

  // —— META（无 award、带 GitHub 与 Report、带图片）——
  const meta = {
    slug: "data2901-sydney-resources",
    title: "Greater Sydney SA2 Resource Scoring",
    institution: "Group Project · University of Sydney",
    practice: "Spatial Analytics · PostgreSQL/PostGIS · Composite Scoring",
    term: "2025 S1",
    status: "Completed" as const,
    github: "https://github.com/LinLyra/Greater-Sydney",
    tags: [
      "PostgreSQL",
      "PostGIS",
      "pandas/geopandas",
      "ABS / GTFS / NSW POI API",
      "Z-score",
      "Sigmoid",
      "Rank-based",
      "Lasso",
      "OLS",
      "Choropleth",
    ],
    notes: [
      "/data/data2901.png",
    ] 
  };

  // —— Overview（和 AI Stock 相同的 <p> + whitespace-pre-line）——
  const overview = `We evaluate how “well-resourced” each SA2 in selected SA4 zones of Greater Sydney is by building a spatial database and a composite scoring system.
We integrated six datasets (ABS SA2/Population/Income, Retail Business counts, Transport for NSW GTFS stops, NSW DoE school catchments, NSW POI API), standardized geometries to GDA2020 (EPSG:7844), and performed all joins in PostGIS. Each indicator was normalized (z-scores) and aggregated; the sum was passed through a sigmoid to obtain a final score in [0,1].

Key findings:
• Sydney – Inner West: consistently high scores across SA2s (dense infrastructure & transport).
• Sydney – Blacktown: largest internal disparity (south high; north low), indicating spatial inequality.
• Sydney – Eastern Suburbs: mixed performance.
• Pearson correlation between score and median income is weak & slightly negative (≈ −0.08), suggesting resource access is not simply a function of income in this subset.
We also add robustness checks via rank-based scoring and validate predictors with Lasso + OLS.`;

  // —— What I did —— 
  const highlights: string[] = [
    "Built a reproducible spatial database (PostgreSQL + PostGIS), unified all layers in GDA2020 (EPSG:7844), and created SA4 filters/views with GiST indexes.",
    "ETL with pandas/geopandas: cleaned, typed, and de-duplicated; mapped GTFS stops to SA2; intersected school catchments; fetched NSW POIs via API.",
    "Engineered four indicators per SA2: retail business density, public transport stops, school catchment coverage, and essential POIs.",
    "Standardized indicators with z-scores and aggregated; applied a sigmoid to bound the final score to [0,1]; excluded tiny-pop SA2s for stability.",
    "Produced choropleths and ranked bar charts to surface spatial inequality; compared dispersion within SA4 groups.",
    "Checked relationship with income (weak/slightly negative); used Lasso + OLS for selection & interpretation; retained predictors after CV.",
    "Ran a rank-based composite as a robustness check to mitigate outlier inflation and improve policy communication.",
  ];

  // —— Reflection（也改回 <p>）——
  const reflection = `Two choices made the work robust and explainable: (1) keeping geospatial logic inside PostGIS (indexes, ST_Intersects/Contains, and consistent SRIDs) and (2) separating indicator engineering from scoring so we could swap normalization (z-score vs. rank) without breaking the pipeline.
The z-score + sigmoid path surfaced contrast clearly but can inflate extremes; the rank-based variant, while simpler, improved stability and policy communication.
Model validation reminded us that a single composite index rarely “explains” socioeconomic outcomes—Lasso/OLS helped quantify limits and justify future variables (e.g., housing cost, land use).
If iterating, I’d expand indicators, add time dynamics for “access volatility,” and publish a policy brief pairing low-scoring SA2s with actionable levers.`;

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
          {/* 顶部：左返回 / 右 GitHub + Report + View More */}
          <div className="flex items-center justify-between">
            <Link href="/data">
              <Button className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-md border-blue-400/30 text-gray-100 hover:bg-blue-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Data
              </Button>
            </Link>

            <div className="flex items-center gap-2">
              {meta.github && (
                <a href={meta.github} target="_blank" rel="noreferrer">
                  <Button className="bg-white/10 border border-blue-400/40 text-blue-100 hover:bg-white/20">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                    <ExternalLink className="ml-1 h-4 w-4" />
                  </Button>
                </a>
              )}
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

          {/* 顶部 Meta 卡（无 logo、无荣誉） */}
          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="absolute right-3 top-3">
              <span
                className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${badgeClass}`}
              >
                {meta.status}
              </span>
            </div>
            <div className="p-5 md:p-6">
              <h1 className="text-xl md:text-2xl font-semibold text-white mb-1">{meta.title}</h1>
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

          {/* Overview —— 用 <p> + whitespace-pre-line，避免等宽字体 */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">Project Overview</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">{overview}</p>
          </section>

          {/* What I did */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">What I Did</h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {highlights.map((line, i) => (
                <li key={i} className="leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </section>

          {/* Reflection —— 同样用 <p> */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">Reflection</h2>
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

