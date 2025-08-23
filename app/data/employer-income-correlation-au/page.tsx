"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function Data1002Project3Page() {
  const [showNotes, setShowNotes] = useState(false);

  // —— META（无 award / 无外链）——
  const meta = {
    slug: "employer-income-correlation-au",
    title: "Modeling Australia’s Weekly Earnings with Employment Signals",
    institution: "Course Project · University of Sydney",
    practice: "Predictive Modeling · EDA · Model Comparison (Python / scikit-learn)",
    term: "2024 S2",
    status: "Completed" as const,
    // 只放一张项目配图（放在 public 下）
    notes: ["/data/data1002.png"],
    // 显示在 Meta 卡片里的标签（不单独做 Keywords 区块）
    tags: [
      "Random Forest",
      "Gradient Boosting",
      "Linear Regression",
      "Extra Trees",
      "AdaBoost",
      "Decision Tree",
      "KNN",
      "Naive Bayes",
      "R² / MSE",
      "Python",
      "scikit-learn",
    ],
  };

  const overview = `Using the employment dataset (1994–2024), we predict Australia’s weekly total earnings from
employment signals. After cleaning/standardizing raw attributes, we built multiple models and compared performance
via R² and MSE on an 80/20 train–test split. Ensemble learners (Random Forest / Gradient Boosting) achieved the
best fit (R² ≈ 0.99, low MSE), while simpler baselines (KNN / Naive Bayes) underperformed. Feature importance
indicates “Employed Persons” dominates predictive power; “Unemployed Persons” adds minor lift.`;

  const highlights: string[] = [
    "Data prep: parsed & cleaned historical series; standardized numeric fields; reproducible train/test split (80/20, random_state=42).",
    "Benchmarked 8 models: Random Forest, Gradient Boosting, Linear Regression, Extra Trees, AdaBoost, Decision Tree, KNN, Naive Bayes.",
    "Top accuracy: Random Forest (R²≈0.995, MSE≈411) edges Gradient Boosting (R²≈0.994, MSE≈556); linear model also strong on this dataset.",
    "Diagnostics: inspected residuals/fit plots; checked variance and generalization gap; ensembles showed no material overfitting.",
    "Interpretability: feature importance highlights Employed Persons as the primary driver; Unemployed Persons contributes marginally.",
    "Packaging: produced publication-ready figures and a short model-selection narrative for non-technical stakeholders.",
  ];

  const reflection = `Two things stood out. First, model hierarchy matters less when signal-to-noise is high and relationships are
close to linear—ensembles still win, but a well-specified linear baseline can be surprisingly competitive. Second,
stakeholder value comes from translation, not just metrics: we used feature importance and error bands to explain
what moves earnings and where predictions are less certain.

If I iterate, I’ll add macro covariates (CPI, IR, sector composition) to stress-test non-linear gains. Second, build a simple
cross-validation / time-series split to de-bias the random 80/20. Third, quantify stability via rolling windows; and
tighten the plotting pipeline so every chart is reproducible from raw inputs. The goal isn’t just a slightly higher R²,
but a model that remains legible and robust when assumptions inevitably drift.`;

  const hasNotes = meta.notes.length > 0;
  const badgeClass =
    meta.status === "Completed"
      ? "bg-blue-600/25 text-blue-100 border-blue-400/40"
      : "bg-cyan-600/25 text-cyan-100 border-cyan-400/40";

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 背景：深色 + 蓝色星云 */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#090a12]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(59,130,246,0.18),transparent_60%),radial-gradient(circle_at_10%_90%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_90%_20%,rgba(56,189,248,0.15),transparent_55%)]" />
      </div>

      <Navigation activeSection="data" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          {/* 顶部：左返回 / 右 View Photo（只有图片，无外链） */}
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
                View Photo
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>

          {/* 顶部 Meta 卡（无 award / 无外链） */}
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
              <div className="flex flex-wrap gap-2 mb-2">
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

          {/* Reflection（不截断） */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">
              Reflection
            </h2>
            <p className="whitespace-pre-line break-words text-base leading-relaxed text-gray-200">
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
