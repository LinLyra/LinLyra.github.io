"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  Brain,
  TrendingUp,
  BarChart3,
  Activity,
  ShieldAlert,
} from "lucide-react";
import MediaModel from "@/components/media-model";

export default function UBSFinanceChallengePage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "ubs-finance-challenge-2026",
    title: "Long BeOne, Short Akeso",
    institution: "UBS Finance Challenge 2026",
    practice:
      "Equity Research · Long/Short Pair Trade · Healthcare Sector · AI-Assisted Investment Analysis",
    term: "2026.05",
    status: "Completed" as const,
    role: "Investment Thesis, Valuation & AI Analysis",
    placement: "Competition Submission",
    pdfUrl: "",
    notes: [] as string[],
    tags: [
      "Equity Research",
      "Long/Short Strategy",
      "Healthcare",
      "Biotech",
      "Valuation",
      "NLP Sentiment Analysis",
      "Pipeline Scoring",
      "DCF",
      "FinBERT",
    ],
  };

  const overview = `A finance challenge submission proposing a long-short pair trade in the China biotech sector: Long BeOne Medicines and Short Akeso Inc.

The core thesis argues that the market is mispricing execution certainty versus innovation optionality. BeOne is positioned as a commercial-stage biotech leader with global revenue visibility, high gross margins, and a de-risked late-stage pipeline, while Akeso is framed as a more speculative innovation platform exposed to binary clinical outcomes and valuation compression.`;

  const whatIDid = [
    "Built the core pair trade thesis around execution certainty versus innovation optionality in China biotech.",
    "Structured the investment recommendation: Long BeOne Medicines and Short Akeso Inc. within the Healthcare sector.",
    "Developed the fundamental comparison across revenue scale, gross margin, profitability, pipeline maturity, and commercialization stage.",
    "Prepared the valuation bridge using pipeline risk-adjusted NPV, revenue upside, multiple normalization, and downside de-rating assumptions.",
    "Designed the AI-assisted analysis module using NLP sentiment analysis, AI pipeline scoring, and AI versus human valuation comparison.",
    "Connected catalysts, risks, and valuation into a coherent investment narrative suitable for an equity research pitch.",
  ];

  const keyInsights = [
    {
      icon: TrendingUp,
      title: "Long/Short Mispricing",
      text: "The trade captures divergence between BeOne’s proven global commercialization and Akeso’s expectation-driven valuation.",
    },
    {
      icon: BarChart3,
      title: "Fundamental Valuation",
      text: "The analysis compares revenue visibility, margins, profitability inflection, EV/Sales, P/E multiples, and target price bridges.",
    },
    {
      icon: Activity,
      title: "Pipeline Risk Analysis",
      text: "BeOne’s approved products and late-stage assets reduce downside risk, while Akeso’s early-stage concentration creates binary clinical risk.",
    },
    {
      icon: Brain,
      title: "AI-Assisted Research",
      text: "The project uses FinBERT-style sentiment analysis, NLP-driven news signals, pipeline scoring, and AI-human valuation comparison.",
    },
  ];

  const reflection = `This project strengthened my ability to combine equity research, financial valuation, and AI-assisted analysis into a single investment recommendation.

The most important learning was that a strong long-short pitch is not only about identifying one good company and one weak company. It requires building a relative-value argument: why the market is overpricing one set of expectations while underpricing another company’s execution certainty.

Through this case, I improved my ability to translate biotech-specific factors — such as clinical stage, probability of success, regulatory risk, commercialization maturity, and pipeline concentration — into an investment thesis that can be supported by valuation, catalysts, and risk management. I also learned how AI can enhance research speed and breadth, while human judgment remains essential for interpreting regulatory nuance and competitive dynamics.`;

  const hasNotes = meta.notes.length > 0;

  const statusBadge =
    meta.status === "Completed"
      ? "bg-green-600/25 text-green-100 border-green-400/40"
      : "bg-emerald-600/25 text-emerald-100 border-emerald-400/40";

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="business" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex items-center justify-between">
            <Link href="/business">
              <Button className="bg-gradient-to-r from-red-500/20 to-rose-500/20 backdrop-blur-md border-red-400/30 text-gray-100 hover:bg-red-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Business
              </Button>
            </Link>

            <div className="flex items-center gap-2">
              <a href={meta.pdfUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-red-500/20 border border-red-400/40 text-red-100 hover:bg-red-500/30">
                  View Project PDF
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>

              {hasNotes && (
                <Button
                  onClick={() => setShowNotes(true)}
                  className="bg-red-500/20 border border-red-400/40 text-red-100 hover:bg-red-500/30"
                >
                  View More
                </Button>
              )}
            </div>
          </div>

          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="absolute right-3 top-3 flex gap-2">
              <span
                className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${statusBadge}`}
              >
                {meta.status}
              </span>

              {meta.placement && (
                <span className="inline-flex items-center h-6 rounded-full px-2.5 text-xs border border-amber-300/40 bg-amber-500/20 text-amber-100">
                  🏆 {meta.placement}
                </span>
              )}
            </div>

            <div className="p-5 md:p-6">
              <h1 className="text-xl md:text-2xl font-semibold text-white mb-1">
                {meta.title}
              </h1>

              <div className="mb-3 inline-flex flex-wrap items-center gap-2 text-sm text-gray-300">
                <span>{meta.institution}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {meta.term}
                </span>

                {meta.role && (
                  <span className="ml-2 inline-flex items-center rounded-full border border-red-400/30 bg-red-500/10 px-2 py-0.5 text-[11px] text-red-200">
                    {meta.role}
                  </span>
                )}
              </div>

              <div className="mb-2 flex flex-wrap gap-2">
                {meta.tags.map((t) => (
                  <Badge
                    key={t}
                    className="bg-red-500/20 text-red-100 border-red-500/30"
                  >
                    {t}
                  </Badge>
                ))}
              </div>

              <p className="text-gray-200">{meta.practice}</p>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-red-500/20 via-rose-500/20 to-red-500/20" />
          </Card>

          <section className="rounded-xl border border-red-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-red-400 md:text-2xl">
              Project Overview
            </h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {overview}
            </p>
          </section>

          <section className="rounded-xl border border-red-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-4 text-xl font-semibold text-red-400 md:text-2xl">
              Key Analysis Areas
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {keyInsights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <Icon className="mb-3 h-6 w-6 text-red-300" />
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-300">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="rounded-xl border border-red-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-red-400 md:text-2xl">
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

          <section className="rounded-xl border border-red-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-red-400 md:text-2xl">
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