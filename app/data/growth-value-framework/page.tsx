"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function GrowthValueFrameworkPage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "growth-value-framework",
    title: "Repricing the Future: A Growth-Based Financial Framework for Emerging Productive Forces",
    institution: "Research Project · Future Financial Analyst Competition",
    practice:
      "Financial Research · Valuation, Innovation, and Real Economy",
    term: "2026.03",
    status: "Completed" as const,
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
    notes: [
      "/competition/CFA1.png",
    ],
  };

  const overview = `This project develops a Growth Value Identification Model (GVIM) to explain how financial systems should identify and price emerging productive forces. 
Instead of relying on backward-looking financial indicators alone, the framework integrates financial value, growth potential, and strategic positioning.

Using a panel dataset of leading U.S. and Chinese technology firms, the project shows that financial markets do not simply reward innovation or growth in isolation. 
Rather, they assign the strongest premium to firms that successfully convert innovation into scalable growth. 
The study further extends this finding into a three-layer mechanism of value identification, risk layering, and value co-creation, connecting financial pricing logic with real economic transformation.`;

  const researchQuestion = `How should financial systems evolve to identify, price, and support emerging productive forces in the real economy? 
The project argues that the key challenge is no longer capital allocation alone, but the ability of finance to recognize future productive capacity before it becomes visible in conventional balance sheets.`;

  const framework = `The core contribution of the project is the Growth Value Identification Model (GVIM):

V = αF + βG + γS

where F denotes financial fundamentals, G captures growth-based value, and S measures strategic positioning within industrial ecosystems.

The growth dimension is further decomposed into technological capability, user expansion, data assets, and product iteration speed. 
To operationalize the framework, the empirical model maps growth factors into observable variables such as R&D expenditure, revenue growth, and the interaction between innovation and growth. 
This enables a direct test of whether financial markets correctly price emerging productive forces.`;

  const dataEmpirical = `The empirical section is based on an unbalanced panel dataset covering 15 leading technology and innovation-driven firms from the United States and China over 2016–2023.

The key variables include:
- MarketCap as the valuation proxy
- R&D expenditure as innovation input
- Revenue growth as scalability proxy
- R&D × Growth as the interaction term representing innovation-growth synergy

The baseline regression results show that:
- R&D positively affects firm valuation
- Revenue growth also positively affects firm valuation
- The interaction between R&D and growth has the strongest explanatory power

This suggests that financial markets assign a premium not to innovation or growth alone, but to firms capable of translating innovation into scalable growth. 
Cross-country regressions further show that U.S. markets exhibit stronger sensitivity to this synergy, while Chinese markets display a hybrid pricing logic influenced by both market growth signals and policy-driven strategic factors.`;

  const caseStudies = [
    "New Energy Industry: Tesla vs CATL — Tesla reflects a market-driven valuation mechanism, while CATL demonstrates a hybrid model where strategic positioning and industrial policy materially affect financial pricing.",
    "AI Industry: Nvidia vs iFlytek — Nvidia shows strong alignment between innovation, growth, and valuation, while iFlytek reveals the difficulty of fully pricing innovation in systems where commercialization and market-based signals remain weaker.",
  ];

  const policy = `The findings imply that financial systems must move from collateral-based, backward-looking assessment toward forward-looking value identification.

Three policy implications stand out:
1. Build growth-based evaluation systems that incorporate innovation and scalability indicators.
2. Develop a multi-layer capital structure that matches risk across government funds, venture capital, and banks.
3. Strengthen value co-creation, so that finance acts not only as a capital provider but also as a strategic partner in industrial upgrading.

In the Chinese context, this also means improving the market valuation of intangible assets and better aligning policy support with market-based capital allocation mechanisms.`;

  const takeaway = `This project ultimately argues that finance should no longer be understood merely as a mechanism for pricing the present.
Its future function is to identify, price, and accelerate the productive forces of the future.`;

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
              <span
                className={`inline-flex h-6 items-center rounded-full px-2.5 text-xs border backdrop-blur-sm ${badgeClass}`}
              >
                {meta.status}
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

          {/* Research Question */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">
              Research Question
            </h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {researchQuestion}
            </p>
          </section>

          {/* Core Framework */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">
              Core Framework: GVIM
            </h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {framework}
            </p>

            <div className="mt-5 rounded-xl border border-blue-500/20 bg-blue-500/10 p-4">
              <div className="text-sm uppercase tracking-wide text-blue-300 mb-2">
                Key Insight
              </div>
              <p className="text-white text-base leading-relaxed">
                The framework shifts valuation logic from backward-looking financial metrics
                toward a growth-based pricing system that captures innovation, scalability,
                and strategic embeddedness.
              </p>
            </div>
          </section>

          {/* Data & Empirical Evidence */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">
              Data & Empirical Evidence
            </h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {dataEmpirical}
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm uppercase tracking-wide text-blue-300 mb-2">
                  Sample
                </div>
                <p className="text-gray-200 leading-relaxed">
                  15 firms, U.S. + China, 2016–2023 panel data
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm uppercase tracking-wide text-blue-300 mb-2">
                  Core Result
                </div>
                <p className="text-gray-200 leading-relaxed">
                  R&D × Growth has the strongest explanatory power in firm valuation
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm uppercase tracking-wide text-blue-300 mb-2">
                  Interpretation
                </div>
                <p className="text-gray-200 leading-relaxed">
                  Markets reward firms that convert innovation into scalable growth
                </p>
              </div>
            </div>
          </section>

          {/* Case Studies */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">
              Case Studies
            </h2>
            <ul className="list-disc space-y-4 pl-5 text-gray-200">
              {caseStudies.map((line, i) => (
                <li key={i} className="leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </section>

          {/* Policy Implications */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">
              Policy Implications
            </h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {policy}
            </p>
          </section>

          {/* Final Takeaway */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">
              Key Takeaway
            </h2>
            <p className="whitespace-pre-line text-lg leading-relaxed text-white font-medium">
              {takeaway}
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
