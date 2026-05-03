"use client";

import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  TrendingUp,
  BarChart3,
  ShieldCheck,
  LineChart,
  DollarSign,
  Globe2,
} from "lucide-react";

export default function CitiGlobalMarketChallengePage() {
  const meta = {
    slug: "citi-global-market-challenge-2026",
    title: "Cost-Efficient Alpha",
    institution: "Citi Global Market Challenge 2026",
    practice:
      "Multi-Asset Portfolio Strategy · Long/Short Allocation · Transaction Cost Optimisation · Risk Management",
    term: "2026.04",
    status: "Completed" as const,
    role: "Portfolio Strategy, Data Analysis & Investment Pitch",
    moreUrl: "https://your-data-planet-link.com",
    tags: [
      "Portfolio Strategy",
      "Long/Short Fund",
      "Asset Allocation",
      "Transaction Costs",
      "Commodities",
      "Fixed Income",
      "Risk Analytics",
      "Scenario Analysis",
      "Citi GMC",
    ],
  };

  const overview = `A multi-asset portfolio strategy created for the Citi Global Market Challenge 2026.

The project proposes a transaction-optimised long/short portfolio benchmarked against Fund X. The strategy allocates capital across equities, fixed income, commodities, FX, and cash, with the objective of outperforming Fund X over a three-month horizon.

The core thesis is “Cost-Efficient Alpha”: alpha is generated not only through asset selection, but through disciplined capital allocation after transaction costs. The final portfolio returned 19.95% versus Fund X’s 9.74%, generating approximately +10.2% active alpha, with a Sharpe ratio of 2.82.`;

  const keyInsights = [
    {
      icon: TrendingUp,
      title: "Cost-Efficient Alpha",
      text: "The strategy focuses on net returns after transaction costs, not just gross performance. That became the central differentiator of the pitch.",
    },
    {
      icon: BarChart3,
      title: "Commodity-Led Outperformance",
      text: "The portfolio overweighted commodities to 70%, capturing the strongest 3-month momentum and the lowest transaction-cost alpha opportunity.",
    },
    {
      icon: DollarSign,
      title: "Transaction Cost Discipline",
      text: "The strategy trades more aggressively where costs are lower, while avoiding high-cost segments that would dilute the net return edge.",
    },
    {
      icon: ShieldCheck,
      title: "Risk-Adjusted Performance",
      text: "Despite higher volatility, the portfolio achieved stronger risk-adjusted returns, with Sharpe 2.82 versus Fund X’s 2.50.",
    },
  ];

  const whatIDid = [
    "Built the core portfolio thesis around cost-efficient alpha and transaction-cost-aware capital allocation.",
    "Analysed time series data for equities, fixed income, and commodities to calculate 3-month returns, volatility, correlations, drawdowns, and portfolio performance.",
    "Constructed the final long/short allocation across equities, fixed income, commodities, and tactical FX overlay.",
    "Benchmarked the strategy against Fund X, which used a more conventional diversified allocation.",
    "Developed the performance attribution logic showing why commodities were the dominant source of alpha.",
    "Created the transaction cost framework, highlighting why low-cost assets should receive higher trading activity.",
    "Designed the risk management framework, including equity crash hedge, commodity reversal hedge, and rate shock hedge.",
    "Structured the final pitch deck with executive summary, macro thesis, portfolio construction, alpha attribution, risk analytics, scenario analysis, and research support.",
  ];

  const metrics = [
    { label: "Active Alpha", value: "+10.2%" },
    { label: "Portfolio Return", value: "19.95%" },
    { label: "Fund X Return", value: "9.74%" },
    { label: "Sharpe Ratio", value: "2.82×" },
    { label: "AUM", value: "$500MM" },
    { label: "Transaction Costs", value: "0.24%" },
  ];

  const reflection = `This project strengthened my ability to combine investment strategy, quantitative analysis, and institutional-style presentation.

The most important learning was that a strong portfolio pitch is not only about identifying high-return assets. It also requires understanding transaction costs, turnover, risk concentration, and whether an active bet is justified by both data and macro conviction.

Through this case, I learned how to translate raw time series data into a clear investment recommendation: long commodities, reduce equity beta, short fixed income, and use FX as a tactical hedge. I also improved my ability to build a professional investment deck that explains not only what the portfolio does, but why the strategy should outperform after costs.`;

  const statusBadge =
    meta.status === "Completed"
      ? "bg-blue-600/25 text-blue-100 border-blue-400/40"
      : "bg-sky-600/25 text-sky-100 border-sky-400/40";

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="data" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex items-center justify-between">
            <Link href="/data">
              <Button className="bg-gradient-to-r from-blue-500/20 to-sky-500/20 backdrop-blur-md border-blue-400/30 text-gray-100 hover:bg-blue-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Data
              </Button>
            </Link>

            <a href={meta.moreUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-500/20 border border-blue-400/40 text-blue-100 hover:bg-blue-500/30">
                View Project Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>

          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="absolute right-3 top-3 flex gap-2">
              <span
                className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${statusBadge}`}
              >
                {meta.status}
              </span>
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
                  <span className="ml-2 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-2 py-0.5 text-[11px] text-blue-200">
                    {meta.role}
                  </span>
                )}
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

            <div className="h-1 w-full bg-gradient-to-r from-blue-500/20 via-sky-500/20 to-blue-500/20" />
          </Card>

          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">
              Project Overview
            </h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {overview}
            </p>
          </section>

          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-4 text-xl font-semibold text-blue-400 md:text-2xl">
              Key Metrics
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-blue-400/20 bg-blue-500/10 p-4"
                >
                  <p className="text-sm text-gray-300">{item.label}</p>
                  <p className="mt-1 text-2xl font-semibold text-blue-100">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-4 text-xl font-semibold text-blue-400 md:text-2xl">
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
                    <Icon className="mb-3 h-6 w-6 text-blue-300" />
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

          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">
              Strategy Framework
            </h2>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <Globe2 className="mb-3 h-6 w-6 text-blue-300" />
                <h3 className="mb-2 text-lg font-semibold text-white">
                  Macro Conviction
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  Slowing growth, sticky inflation, rate divergence, and commodity momentum form the macro foundation of the strategy.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <LineChart className="mb-3 h-6 w-6 text-blue-300" />
                <h3 className="mb-2 text-lg font-semibold text-white">
                  Active Allocation
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  The portfolio reallocates risk toward the strongest alpha source in the dataset while keeping the structure transparent.
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <ShieldCheck className="mb-3 h-6 w-6 text-blue-300" />
                <h3 className="mb-2 text-lg font-semibold text-white">
                  Risk Control
                </h3>
                <p className="text-sm leading-relaxed text-gray-300">
                  Hedge layers protect against equity crashes, commodity reversals, and rate shocks while preserving upside.
                </p>
              </div>
            </div>
          </section>

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
