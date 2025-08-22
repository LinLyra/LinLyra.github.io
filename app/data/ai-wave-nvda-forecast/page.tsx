"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Github, ExternalLink } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function AIStockForecastPage() {
  const [showNotes, setShowNotes] = useState(false);

  // --- META（无 award、无 logo） ---
  const meta = {
    slug: "ai-stock-forecast",
    title: "Riding the AI Wave: Forecasting NVIDIA (with AMD & Intel)",
    institution: "Course Project · University of Sydney",
    practice:
      "Applied Data Science · Financial Time Series (ABS stakeholder scenario)",
    term: "2025 S1",
    status: "Completed" as const,
    tags: [
      "Time Series",
      "ARIMA",
      "Python",
      "Pandas",
      "Statsmodels",
      "Finance",
      "Forecasting",
      "EDA",
    ],
    github: "https://github.com/LinLyra/Forecasting-the-Nivida-stock",
    notes: ["/data/aistock1.png", "/data/aistock2.png"],
  };

  const overview = `\
This project models monthly closing prices (2020–2025) for NVIDIA and compares them with AMD and Intel.
I performed stationarity checks (ADF), variance stabilization (Box–Cox), differencing, ACF/PACF diagnostics,
and fitted ARIMA family models. The selected models were then used to generate 12-month forecasts and
quantify uncertainty bands. Insights connect statistical signals with real market narratives in the AI chip cycle.`;

  // ✅ 我的职责与技能亮点（合并块）
  const highlights: string[] = [
    "Owned end-to-end NVIDIA pipeline: data sourcing/cleaning, EDA, and ADF stationarity tests.",
    "Applied Box–Cox (λ≈−0.39) and first-order differencing; verified stationarity via diagnostics.",
    "Compared ARIMA (1,1,0), (0,1,1), (1,1,1), (2,1,0), (0,1,2); selected ARIMA(0,1,0) on AIC and parsimony.",
    "Checked residuals (ACF/PACF within bounds), ran Ljung–Box; QQ plot acceptable for financial data.",
    "Forecasted 12-month horizon on transformed scale and inverse-transformed back to dollars with 95% CI.",
    "Benchmarked NVIDIA against AMD/Intel to contextualize momentum vs. volatility.",
    "Translated signals into stakeholder-friendly narrative on AI-cycle demand and competitive pressure.",
  ];

  const reflection = `
Working exclusively on the NVIDIA track taught me to own the full lifecycle of a data science project: from raw data to interpretation.
I realized how small statistical choices (differencing order, Box–Cox parameter) dramatically change NVIDIA forecasts.
Producing NVIDIA’s forecast charts reinforced that communicating uncertainty bands is as crucial as the forecast itself.
Most importantly, I learned to translate NVIDIA’s time-series signals into a market story that resonates with non-technical stakeholders.`;

  const hasNotes = meta.notes.length > 0;
  const badgeClass =
    meta.status === "Completed"
      ? "bg-blue-600/25 text-blue-100 border-blue-400/40"
      : "bg-cyan-600/25 text-cyan-100 border-cyan-400/40";

  return (
    <div className="relative min-h-screen">
      {/* 高亮 Data 星球 */}
      <Navigation activeSection="data" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          {/* 顶部：左返回 / 右 GitHub + View More */}
          <div className="flex items-center justify-between">
            <Link href="/data">
              <Button className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-md border-blue-400/30 text-gray-100 hover:bg-blue-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Data
              </Button>
            </Link>

            <div className="flex items-center gap-2">
              {meta.github && (
                <a
                  href={meta.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="View project on GitHub"
                >
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

          {/* 顶部 Meta 卡（无 logo、无 award；标签在这里展示） */}
          <Card className="relative overflow-hidden border-white/20 bg-white/10 backdrop-blur-md">
            <div className="absolute right-3 top-3">
              <span
                className={`inline-flex h-6 items-center rounded-full px-2.5 text-xs border backdrop-blur-sm ${badgeClass}`}
              >
                {meta.status}
              </span>
            </div>
            <div className="p-5 md:p-6">
              <h1 className="mb-1 text-xl font-semibold text-white md:text-2xl">
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
                    className="border-blue-500/30 bg-blue-500/20 text-blue-100"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
              <p className="text-gray-200">{meta.practice}</p>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-500/20" />
          </Card>

          {/* Overview（从这里开始正文） */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-2 text-xl font-semibold text-blue-400 md:text-2xl">
              Project Overview
            </h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {overview}
            </p>
          </section>

          {/* What I Did */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-2 text-xl font-semibold text-blue-400 md:text-2xl">
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
            <h2 className="mb-2 text-xl font-semibold text-blue-400 md:text-2xl">
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
