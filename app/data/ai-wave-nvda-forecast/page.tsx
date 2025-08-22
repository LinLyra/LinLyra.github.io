"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function AIStockForecastPage() {
  const [showNotes, setShowNotes] = useState(false);

  // --- META（仍保留给弹窗等用） ---
  const meta = {
    slug: "ai-stock-forecast",
    title: "Riding the AI Wave: Forecasting NVIDIA (with AMD & Intel)",
    institution: "Course Project · University of Sydney",
    practice: "Applied Data Science / Financial Time Series (ABS stakeholder scenario)",
    term: "2025 S1",
    logo: "/projects/ai-stock/nvidia-logo.png",
    status: "Completed" as const,
    tagline:
      "Time-series forecasting with ARIMA on NVIDIA, with comparative analysis on AMD & Intel to explore AI-driven market dynamics.",
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
    github: "https://github.com/LinLyra/Forecasting-the-Nivida-stock", // 如需展示外链可再加回
    notes: [
      "/data/ai-stock1.png",
      "/data/ai-stock2.png",
    ],
  };

  const overview = `\
This project models monthly closing prices (2020–2025) for NVIDIA and compares them with AMD and Intel. \
I performed stationarity checks (ADF), variance stabilization (Box–Cox), differencing, ACF/PACF diagnostics, \
and fitted ARIMA family models. The selected models were then used to generate 12-month forecasts and \
quantify uncertainty bands. Insights connect statistical signals with real market narratives in the AI chip cycle.`;

  const keywords = [
    "ADF Test",
    "Box–Cox",
    "Differencing",
    "ACF/PACF",
    "ARIMA(0,1,0) / (1,1,0)",
    "Residual Diagnostics",
    "Ljung–Box",
    "Confidence Intervals",
    "Semiconductor Industry",
  ];

  const responsibilities = [
    { k: "NVIDIA Workstream Lead", v: "Owned end-to-end pipeline for NVIDIA: data sourcing, cleaning, exploratory analysis, and statistical testing (ADF)." },
    { k: "Variance Stabilization & Stationarity", v: "Applied Box–Cox (λ≈−0.39) and first-order differencing; verified stationarity via diagnostics before modeling." },
    { k: "Model Selection (NVIDIA)", v: "Evaluated ARIMA candidates including (1,1,0), (0,1,1), (1,1,1), (2,1,0), (0,1,2); selected ARIMA(0,1,0) on AIC and residual checks." },
    { k: "Residual Diagnostics", v: "Checked ACF/PACF of residuals, Ljung–Box (no significant autocorrelation), QQ plot; assessed variance stability post-transform." },
    { k: "Forecasting & Inverse Transform", v: "Produced 12-month forecasts on transformed scale and inverse-Box–Cox back to price level; presented point + 95% CI bands." },
    { k: "Business Interpretation (NVIDIA)", v: "Explained how AI demand and competitive dynamics map to the model’s signals; communicated uncertainty and risk to stakeholders." },
    { k: "Comparative Read-Across", v: "Benchmarked NVIDIA vs. AMD/Intel to contextualize growth momentum vs. volatility; aligned insights with stakeholder needs." },
  ];

  const takeaways = `
Working exclusively on the NVIDIA track taught me to own the full lifecycle of a data science project: from raw data to interpretation. 
I realized how small statistical choices (differencing order, Box–Cox parameter) dramatically change NVIDIA forecasts.
Producing NVIDIA’s forecast charts reinforced that communicating uncertainty bands is as crucial as the forecast itself. 
Most importantly, I learned to translate NVIDIA’s time-series signals into a market story that resonates with non-technical stakeholders.`

  const hasNotes = meta.notes.length > 0;

  return (
    <div className="relative min-h-screen">
      {/* 高亮 Data 星球 */}
      <Navigation activeSection="data" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* 仅保留一个返回按钮（蓝色主题），不再有顶部工具栏/大标题 */}
          <div>
            <Link href="/data">
              <Button className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-md border-blue-400/30 text-gray-100 hover:bg-blue-500/30">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Data
              </Button>
            </Link>
          </div>

          {/* Overview —— 页面从这里开始 */}
          <section className="bg-white/10 backdrop-blur-md border border-blue-400/20 rounded-xl p-5 md:p-6">
            <div className="mb-2 text-sm text-gray-300 inline-flex items-center gap-2">
              <span>{meta.institution}</span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {meta.term}
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-3">Project Overview</h2>
            <p className="text-gray-200 text-base leading-relaxed whitespace-pre-line">{overview}</p>
          </section>

          {/* Keywords（蓝色主题标签） */}
          <section className="bg-white/10 backdrop-blur-md border border-blue-400/20 rounded-xl p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">Keywords</h2>
            <div className="flex flex-wrap gap-2">
              {keywords.map((k) => (
                <Badge key={k} className="bg-blue-500/20 text-blue-100 border-blue-500/30">
                  {k}
                </Badge>
              ))}
            </div>
          </section>

          {/* Responsibilities */}
          <section className="bg-white/10 backdrop-blur-md border border-blue-400/20 rounded-xl p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">My Responsibilities & Skills</h2>
            <ul className="space-y-3 text-gray-200">
              {responsibilities.map((o) => (
                <li key={o.k} className="[&>strong]:text-white leading-relaxed">
                  <strong>{o.k}:</strong> {o.v}
                </li>
              ))}
            </ul>
          </section>

          {/* NVIDIA Workstream */}
          <section className="bg-white/10 backdrop-blur-md border border-blue-400/20 rounded-xl p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-4">
              NVIDIA Workstream — What I Did
            </h2>
            <ul className="space-y-3 text-gray-200 list-disc pl-5">
              <li><span className="text-white">Data sourcing & sanity checks:</span> compiled monthly closing prices (2020–2025), verified ranges, missing values, and outliers.</li>
              <li><span className="text-white">Stationarity pipeline:</span> ran ADF on raw series (non-stationary), applied Box–Cox (λ≈−0.39) and first-order differencing to achieve stationarity.</li>
              <li><span className="text-white">ACF/PACF diagnostics:</span> inspected patterns consistent with a differenced random-walk baseline.</li>
              <li><span className="text-white">Model candidates:</span> compared ARIMA (1,1,0), (0,1,1), (1,1,1), (2,1,0), (0,1,2) and selected <span className="font-semibold">ARIMA(0,1,0)</span> on AIC and simplicity.</li>
              <li><span className="text-white">Residual checks:</span> ACF/PACF within bounds; Ljung–Box showed no significant autocorrelation; QQ plot acceptable for financial data.</li>
              <li><span className="text-white">Forecasting:</span> generated 12-month horizon on transformed scale; inverse-transformed back to dollars; presented point path with widening 95% CI.</li>
              <li><span className="text-white">Narrative for stakeholders:</span> articulated how AI-cycle momentum vs. competitive pressure explains the forecast shape; emphasized uncertainty communication.</li>
            </ul>
          </section>

          {/* Summary */}
          <section className="bg-white/10 backdrop-blur-md border border-blue-400/20 rounded-xl p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-blue-400 mb-3">Summary</h2>
            <p className="text-gray-200 text-base leading-relaxed whitespace-pre-line">{takeaways}</p>
          </section>

          {/* 可选：查看图表/讲义截图（蓝色按钮） */}
          {hasNotes && (
            <div>
              <Button
                onClick={() => setShowNotes(true)}
                className="bg-blue-500/20 border border-blue-400/40 text-blue-100 hover:bg-blue-500/30"
              >
                View Figures
              </Button>
            </div>
          )}
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

