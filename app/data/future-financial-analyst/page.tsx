"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Trophy } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function GrowthValueFrameworkPage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "future-financial-analyst-competition",
    title: "Growth-Based Repricing Framework",
    institution: "CFA Institute",
    practice: "Financial Research · Valuation, Innovation, and Real Economy",
    term: "2026.03",
    honor: "Top 60" as const,
    tags: [
      "Finance",
      "Valuation",
      "Growth Factor",
      "GVIM",
      "Empirical Research",
      "Panel Data",
      "China vs US",
      "Policy",
    ],
    notes: ["/competition/CFA1.png"],
  };

  const overview = `This project develops a Growth Value Identification Model (GVIM) to explain how financial systems should identify and price emerging productive forces.

Instead of relying only on backward-looking financial indicators, the framework combines financial fundamentals, growth potential, and strategic positioning. Using a panel dataset of leading U.S. and Chinese technology firms, the project explores how markets price innovation, scalability, and the ability to convert technological input into real economic growth.`;

  const highlight = `The core highlight of this project is the attempt to reframe valuation from a purely financial problem into a growth-based pricing problem.

The framework argues that firms should not be evaluated only by current earnings or asset size. Their future value also depends on whether they can turn innovation into scalable products, user growth, data assets, and stronger positions within industrial ecosystems.`;

  const whatIDid: string[] = [
    "Designed the main research question and framework, focusing on how finance can better identify and price future productive capacity before it fully appears in traditional financial statements.",
    "Built the GVIM logic by separating firm value into financial fundamentals, growth-based value, and strategic positioning, then connected these dimensions with measurable indicators.",
    "Led the empirical analysis using panel data from leading Chinese and U.S. technology firms, including variables such as market capitalization, R&D expenditure, revenue growth, and the R&D × Growth interaction term.",
    "Developed the business interpretation of the results, especially the idea that markets reward firms not simply for innovation itself, but for their ability to convert innovation into scalable growth.",
    "Translated the findings into practical implications for financial institutions, valuation systems, policy support, and capital allocation toward emerging industries.",
  ];

  const reflectionPoints: string[] = [
    "This project helped me understand that valuation is not only about measuring the present, but also about identifying future growth capacity.",
    "The most important insight was that innovation and growth should not be viewed separately. A firm becomes more valuable when it can connect technological capability with scalable market expansion.",
    "The comparison between Chinese and U.S. firms also showed that valuation systems are shaped by different market structures, policy environments, and investor expectations.",
    "If I continue this research, I would further improve the variable design, expand the sample size, and test the framework across more industries.",
  ];

  const hasNotes = meta.notes.length > 0;

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="data" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
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
            </div>
          </div>

          {/* Top Meta Card */}
          <Card className="relative overflow-hidden border-white/20 bg-white/10 backdrop-blur-md">
            <div className="absolute right-3 top-3">
              <span className="inline-flex h-6 items-center rounded-full px-2.5 text-xs border backdrop-blur-sm bg-amber-500/20 text-amber-100 border-amber-400/40">
                <Trophy className="mr-1 h-3.5 w-3.5" />
                {meta.honor}
              </span>
            </div>

            <div className="p-5 md:p-6">
              <h1 className="mb-1 text-xl font-semibold text-white md:text-2xl leading-snug">
                {meta.title}
              </h1>

              <div className="mb-3 inline-flex flex-wrap items-center gap-2 text-sm text-gray-300">
                <span>{meta.institution}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {meta.term}
                </span>
              </div>

              <div className="mb-3 flex flex-wrap gap-2">
                {meta.tags.map((t) => (
                  <Badge
                    key={t}
                    className="border-blue-500/30 bg-blue-500/20 text-blue-100"
                  >
                    {t}
                  </Badge>
                ))}
              </div>

              <p className="text-gray-200 leading-relaxed">{meta.practice}</p>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-500/20" />
          </Card>

          {/* Project Overview */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">
              Project Overview
            </h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {overview}
            </p>
          </section>

          {/* Highlight */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">
              Highlight
            </h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {highlight}
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
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {reflectionPoints.map((pt, i) => (
                <li key={i} className="leading-relaxed">
                  {pt}
                </li>
              ))}
            </ul>
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