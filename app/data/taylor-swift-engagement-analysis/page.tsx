"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Github } from "lucide-react";

export default function TaylorSwiftPage() {
  const meta = {
    slug: "taylor-swift-engagement-analysis",
    title: "Taylor Swift Engagement Analysis: Online Sentiment & Herding Dynamics",
    institution: "Independent Research",
    practice:
      "YouTube API · Gemini API· Sentiment Analysis · ELM Theory · Bayesian Updating",
    term: "2025.08",
    status: "Completed" as const,
    tags: [
      "YouTube API",
      "Gemini LLM",
      "Sentiment Analysis",
      "ELM",
      "Bayesian Updating",
      "Python",
    ],
    github: "https://github.com/LinLyra/taylor-engagement-analysis",
  };

  const overview = `Analyzed 5,700+ YouTube comments on Taylor Swift’s engagement news to explore how public sentiment evolves online. 
This project combined machine learning with persuasion theory to reveal dynamics of digital discourse.`;

  const whatIDid: string[] = [
    "Collected 5,700+ comments using the YouTube Data API, applied deduplication, regex cleaning, and semantic normalization to construct a research dataset.",
    "Applied Elaboration Likelihood Model (ELM): classified comments into central (rational) vs peripheral (emotional) routes using Gemini LLM.",
    "Conducted sentiment analysis (positive / neutral / negative) with Gemini API, validated against 100 manually labeled samples.",
    "Tracked sentiment evolution using Bayesian updating; applied rolling variance for polarization and herding tests for collective dynamics.",
    "Found negative voices increasingly dominant; peripheral (emotional) routes far exceeded central (rational) ones, resembling financial markets’ 'overreaction–correction' cycle.",
  ];

  const reflection = `
  Through this project, I realized that working with social media data requires both technical rigor and theoretical grounding. While the YouTube API provided large-scale comments efficiently, significant effort was needed for cleaning and normalization (duplicates, slang, emojis).
  This reinforced the importance of data preprocessing as decisive stage that shapes model reliability. On the modeling side, the Elaboration Likelihood Model (ELM) proved valuable instructuring the classification between central and peripheral persuasion pathways.
  Yet, the relatively lower accuracy on pathway labeling (88%) compared to sentiment classification (99%) highlighted that theoretical constructs are often harder to operationalize in real-world noisy data. It reminded me that applying social science theories to digital discourse is not only a technical task but also requires careful mapping between constructs and observable signals.
  Finally, the temporal analysis using Bayesian updating and herding tests showed how public sentiment can resemble financial market dynamics—initial overreaction, herd formation, and eventual correction. This analogy broadened my perspective: socialdata analysis is not limited to describing trends, but can also generate insightsfor policy, media strategy, and platform governance. 
  In the future, I would extend the dataset to cross-platform comparisons (e.g., TikTok, Twitter) and refine the labeling scheme with multi-annotator validation to strengthen the robustness of the conclusions.
`;

  const badgeClass =
    meta.status === "Completed"
      ? "bg-blue-600/25 text-blue-100 border-blue-400/40"
      : "bg-cyan-600/25 text-cyan-100 border-cyan-400/40";

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* background */}
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

            {meta.github && (
              <Link href={meta.github} target="_blank">
                <Button className="bg-blue-500/20 border border-blue-400/40 text-blue-100 hover:bg-blue-500/30">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub Repo
                </Button>
              </Link>
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
    </div>
  );
}

