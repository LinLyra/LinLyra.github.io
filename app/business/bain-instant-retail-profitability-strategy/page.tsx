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
  Map,
  Landmark,
  TrendingUp,
  Truck,
} from "lucide-react";
import MediaModel from "@/components/media-model";

export const dynamic = "force-static";

export default function InstantRetailProfitabilityStrategyPage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "bain-instant-retail-profitability-strategy",
    title: "Instant Retail Profitability Strategy",
    institution: "Bain Case Competition 2026",
    practice: "Strategy Consulting · Retail Strategy · Unit Economics",
    term: "2026",
    role: "Team Leader",
    placement: "",
    canvaUrl: "http://peridot-eocursor-4db.notion.site/Instant-Retail-Profitability-Strategy-3583be3c1315806880dfff1aea218ef7",
    notes: [] as string[],
    tags: [
      "Strategy Consulting",
      "Retail Strategy",
      "Unit Economics",
      "Growth Strategy",
      "City Portfolio",
      "Platform Economics",
      "China Instant Retail",
    ],
  };

  const overview = `A Bain-style strategy case focused on helping an instant retail company achieve profitable growth across Tier 3–4 cities in China.

The project found that the company’s losses were not simply caused by insufficient scale. Instead, the core issue was structural: weak city portfolio allocation, low fulfillment density, poor category mix, and excessive subsidy dependency.

The final recommendation was to concentrate capital in three density-ready cities, optimize three repairable cities, and hold or exit structurally weak cities. The strategy shifts the company from subsidy-led growth to mission-driven, density-based profitability.`;

  const whatIDid = [
    "Built the core thesis that Tier 3–4 losses are structural, not merely scale-driven.",
    "Developed a 3-tier city portfolio framework: Invest, Optimize, and Hold.",
    "Analyzed 10 cities using order density, profitability score, chain supply, category mix, AOV, and loss gap metrics.",
    "Designed the unit economics model and quantified a ~¥0.65/order improvement gap for Optimize cities.",
    "Identified four operational levers: subsidy optimization, delivery densification, AOV/category mix upgrade, and merchant monetization.",
    "Built differentiated city playbooks for Invest and Optimize cities.",
    "Created a 3-year path to profitability with milestones, KPIs, and risk guardrails.",
    "Synthesized the analysis into a Bain-style executive strategy deck with clear recommendations.",
  ];

  const keyInsights = [
    {
      icon: TrendingUp,
      title: "Unit Economics Diagnosis",
      text: "Optimize cities lose ~¥0.6/order due to density, subsidy, and category mix issues. The gap can be closed through four operational levers.",
    },
    {
      icon: Map,
      title: "City Portfolio Strategy",
      text: "Only three cities are structurally investable. Capital should be concentrated in Quanzhou, Huizhou, and Weihai rather than spread evenly.",
    },
    {
      icon: Truck,
      title: "Fulfillment Density Advantage",
      text: "Profitability depends on dense flash warehouse coverage, shorter delivery radius, stronger chain merchant supply, and higher order frequency.",
    },
    {
      icon: Landmark,
      title: "Path to Profitability",
      text: "Invest cities can reach break-even by Year 2, Optimize cities by Year 3, while Hold cities should remain self-funding with no new capex.",
    },
  ];

  const reflection = `This project strengthened my ability to connect market context, operational data, and financial logic into one coherent strategy.

The biggest learning was that growth alone does not solve profitability problems. In platform businesses, scaling weak density and subsidy-dependent models can amplify losses rather than fix them.

I also learned how to translate complex unit economics into clear executive recommendations: where to invest, what to fix, what to stop, and how to phase actions over time.`;

  const hasNotes = meta.notes.length > 0;

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="business" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex items-center justify-between">
            <Link href="/business">
              <Button className="border border-green-400/30 text-green-200 hover:bg-white/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Business
              </Button>
            </Link>

            <div className="flex items-center gap-2">
              <a href={meta.canvaUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-green-500/20 border border-green-400/40 text-green-100 hover:bg-green-500/30">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View more
                </Button>
              </a>

              {hasNotes && (
                <Button
                  onClick={() => setShowNotes(true)}
                  className="bg-green-500/20 border border-green-400/40 text-green-100 hover:bg-green-500/30"
                >
                  View more
                </Button>
              )}
            </div>
          </div>

          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="absolute right-3 top-3 flex gap-2">
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
                  <span className="ml-2 inline-flex items-center rounded-full border border-green-400/30 bg-green-500/10 px-2 py-0.5 text-[11px] text-green-200">
                    {meta.role}
                  </span>
                )}
              </div>

              <div className="mb-2 flex flex-wrap gap-2">
                {meta.tags.map((t) => (
                  <Badge
                    key={t}
                    className="bg-green-500/20 text-green-100 border-green-500/30"
                  >
                    {t}
                  </Badge>
                ))}
              </div>

              <p className="text-gray-200">{meta.practice}</p>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20" />
          </Card>

          <section className="rounded-xl border border-green-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-green-400 md:text-2xl">
              Project Overview
            </h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {overview}
            </p>
          </section>

          <section className="rounded-xl border border-green-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-4 text-xl font-semibold text-green-400 md:text-2xl">
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
                    <Icon className="mb-3 h-6 w-6 text-green-300" />
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

          <section className="rounded-xl border border-green-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-green-400 md:text-2xl">
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

          <section className="rounded-xl border border-green-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-green-400 md:text-2xl">
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