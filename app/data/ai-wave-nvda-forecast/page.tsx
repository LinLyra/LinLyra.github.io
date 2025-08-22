"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Github, ExternalLink } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function AIStockForecastPage() {
  const [showNotes, setShowNotes] = useState(false);

  // --- META: customize freely ---
  const meta = {
    slug: "ai-stock-forecast",
    title: "Riding the AI Wave: Forecasting NVIDIA (with AMD & Intel)",
    institution: "Course Project · University of Sydney",
    practice: "Applied Data Science / Financial Time Series (ABS stakeholder scenario)",
    term: "2025 S1",
    logo: "/projects/ai-stock/nvidia-logo.png", // 48×48 suggested
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
    github: "https://github.com/your-username/ai-stock-forecast", // ← put your repo link here
    notes: [
      "/projects/ai-stock/nv_close.png",
      "/projects/ai-stock/nv_acf_pacf.png",
      "/projects/ai-stock/nv_boxcox_diff.png",
      "/projects/ai-stock/nv_forecast.png",
      "/projects/ai-stock/amd_forecast.png",
      "/projects/ai-stock/intel_forecast.png",
    ],
  };

  const overview = `\
This project models monthly closing prices (2020–2025) for NVIDIA and compares them with AMD and Intel. \
I performed stationarity checks (ADF), variance stabilization (Box–Cox), differencing, ACF/PACF diagnostics, \
and fitted ARIMA family models. The selected models were then used to generate 12‑month forecasts and \
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
    {
      k: "Data Prep & EDA",
      v: "Loaded & cleaned monthly OHLC data; produced trend/volatility views and descriptive stats.",
    },
    {
      k: "Statistical Foundations",
      v: "Ran ADF stationarity tests; applied Box–Cox; differenced non‑stationary series.",
    },
    {
      k: "Modeling",
      v: "Diagnosed ACF/PACF; fit ARIMA candidates; selected final model via information criteria and residual checks.",
    },
    {
      k: "Diagnostics",
      v: "Checked white‑noise residuals (Ljung–Box), QQ/ACF/PACF of residuals; assessed variance stability.",
    },
    {
      k: "Forecasting & Visualization",
      v: "Produced 12‑month forecasts (point & 95% CI) and charts for NVIDIA/AMD/Intel; inverse‑transformed predictions.",
    },
    {
      k: "Business Interpretation",
      v: "Connected model outputs to AI chip demand/competition narratives for stakeholder insight (ABS scenario).",
    },
  ];

  const takeaways = `\
Even clean‑looking time series hide non‑stationarity and variance shifts; rigorous diagnostics matter. \"Good\" forecasts still widen with horizon—communicating uncertainty is part of the product. \ 
Most importantly, I practiced translating statistical evidence into business‑sensible narratives (who needs this, and why).`;

  const hasNotes = meta.notes.length > 0;
  const badge =
    meta.status === "Completed"
      ? "bg-purple-600/25 text-purple-100 border-purple-400/40"
      : "bg-fuchsia-600/25 text-fuchsia-100 border-fuchsia-400/40";

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="projects" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Top Bar */}
          <div className="flex items-center justify-between">
            <Link href="/projects">
              <Button className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
              </Button>
            </Link>

            <div className="flex items-center gap-2">
              {meta.github && (
                <a href={meta.github} target="_blank" rel="noreferrer">
                  <Button className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                    <Github className="w-4 h-4 mr-2" /> View on GitHub
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </Button>
                </a>
              )}
              {hasNotes && (
                <Button
                  onClick={() => setShowNotes(true)}
                  className="bg-fuchsia-500/20 border border-fuchsia-400/40 text-fuchsia-100 hover:bg-fuchsia-500/30"
                >
                  View More
                </Button>
              )}
            </div>
          </div>

          {/* Header */}
          <header className="text-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold text-white">{meta.title}</h1>
            <div className="text-gray-300 inline-flex items-center gap-2 text-sm md:text-base">
              <span>{meta.institution}</span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-4 h-4" /> {meta.term}
              </span>
            </div>
            <p className="text-sm md:text-base text-gray-300 mt-1">{meta.practice}</p>
          </header>

          {/* Meta Card */}
          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="absolute right-3 top-3">
              <span
                className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${badge}`}
              >
                {meta.status}
              </span>
            </div>
            <div className="p-5 md:p-6 flex items-start gap-4">
              <div className="relative flex-shrink-0 h-12 w-12 rounded-xl bg-black/30 border border-white/10 overflow-hidden">
                <Image src={meta.logo} alt="logo" fill sizes="48px" className="object-contain" priority />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap gap-2 mb-3">
                  {meta.tags.map((t) => (
                    <Badge key={t} className="bg-purple-500/20 text-purple-100 border-purple-500/30">
                      {t}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-200">{meta.tagline}</p>
              </div>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-fuchsia-500/20 via-purple-500/20 to-fuchsia-500/20" />
          </Card>

          {/* Overview */}
          <section className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-fuchsia-400 mb-3">Project Overview</h2>
            <p className="text-gray-200 text-base leading-relaxed whitespace-pre-line">{overview}</p>
          </section>

          {/* Keywords */}
          <section className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-fuchsia-400 mb-4">Keywords</h2>
            <div className="flex flex-wrap gap-2">
              {keywords.map((k) => (
                <Badge key={k} className="bg-purple-500/20 text-purple-100 border-purple-500/30">
                  {k}
                </Badge>
              ))}
            </div>
          </section>

          {/* Responsibilities & Skills */}
          <section className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-fuchsia-400 mb-4">My Responsibilities & Skills</h2>
            <ul className="space-y-3 text-gray-200">
              {responsibilities.map((o) => (
                <li key={o.k} className="[&>strong]:text-white leading-relaxed">
                  <strong>{o.k}:</strong> {o.v}
                </li>
              ))}
            </ul>
          </section>

          {/* Takeaways */}
          <section className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 md:p-6">
            <h2 className="text-xl md:text-2xl font-semibold text-fuchsia-400 mb-3">Summary</h2>
            <p className="text-gray-200 text-base leading-relaxed whitespace-pre-line">{takeaways}</p>
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
