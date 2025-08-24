"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function APMCM2024Page() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "apmcm-2024",
    title: "APMCM (Asia-Pacific Mathematical Contest in Modeling) 2024",
    institution: "APMCM",
    practice:
      "Mathematical Modeling · Time Series & Regression · Policy Scenario Analysis",
    term: "2024.11",
    status: "Completed" as const,
    tags: [
      "Modeling",
      "Optimization",
      "Time Series",
      "Regression",
      "Random Forest",
      "ARIMA",
      "Scenario Analysis",
    ],
    notes: ["/competition/apmcm.png"],
  };

  const overview = `Pet-industry modeling across China and global markets:
- Built connected models to analyze domestic trends, forecast global pet-food demand, and assess tariff scenarios.
- Chosen methods matched data behavior: linear trend for cats, non-linear dynamics for dogs, ARIMA for global demand, and a scenario model for export tariffs and domestic absorption.`;

  const whatIDid: string[] = [
    "Data preparation and assumptions: cleaned gaps/outliers; normalized drivers (income, urbanization, penetration) and set stable-macro assumptions.",
    "China pet trends: linear regression for the cat population; random forest for the dog population to capture non-linearities and feature importance.",
    "Global demand: ARIMA forecasting on pet-food time series to produce 3-year demand outlook and confidence bands.",
    "Exports & policy: scenario model for tariff shocks (e.g., 5%/10%/20%) and a domestic-market potential calculator to test offset capacity.",
    "Evaluation: sensitivity checks on key drivers; error diagnostics for ARIMA and RF; stress-test with alternative adoption ramps.",
    "Delivery: concise exhibits and an executive storyline connecting model outputs to go-to-market and policy recommendations.",
  ];

  const reflection = `Key takeaways:
- Match method to signal: linear for steady trends; tree models for non-linear drivers; ARIMA for stationary time-series.
- Assumptions are part of the model: make them explicit and stress-test with scenario ranges, not single points.
- Decision focus beats metric chasing: tie every chart to a “so-what”—pricing power, export risk, domestic substitution, and timing.
- For policy questions, combine models: forecasts + scenario analysis + unit-economics give a tractable decision surface for stakeholders.`;

  const hasNotes = meta.notes.length > 0;
  const badgeClass =
    meta.status === "Completed"
      ? "bg-blue-600/25 text-blue-100 border-blue-400/40"
      : "bg-cyan-600/25 text-cyan-100 border-cyan-400/40";

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* blue nebula background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#090a12]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(59,130,246,0.18),transparent_60%),radial-gradient(circle_at_10%_90%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_90%_20%,rgba(56,189,248,0.15),transparent_55%)]" />
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

          {/* What I Did */}
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
