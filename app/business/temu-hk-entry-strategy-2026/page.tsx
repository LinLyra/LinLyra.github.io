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
  Factory,
  Truck,
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Target,
} from "lucide-react";
import MediaModel from "@/components/media-model";

export default function TemuHKEntryStrategyPage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "temu-hk-entry-strategy-2026",
    title: "Temu Enters Hong Kong",
    institution: "Oliver Wyman × B1 Case Competition 2026",
    practice:
      "E-Commerce Market Entry · Competitive Strategy · Unit Economics · Cross-Border Retail",
    term: "2026.05",
    role: "Team Leader",
    placement: "",
    canvaUrl: "https://peridot-eocursor-4db.notion.site/Temu-Hong-Kong-Market-Entry-Strategy-35b3be3c13158003901be1cade8a72f5?pvs=73",
    notes: [] as string[],
    tags: [
      "Market Entry",
      "E-Commerce",
      "Hong Kong",
      "Temu",
      "Competitive Strategy",
      "Supply Chain",
      "Unit Economics",
      "Growth Strategy",
    ],
  };

  const overview = `A 5-year Hong Kong market entry strategy for Temu, developed for the Oliver Wyman × B1 Case Competition 2026.

The project identifies a structural gap in Hong Kong e-commerce: local platforms are fast but expensive, while cross-border platforms are cheap but slow. The recommendation is for Temu to enter through Electronics and Beauty, using its demand-signal-driven supply chain, micro-warehouse logistics, and trust-building infrastructure to reach break-even by Year 3 and become a Top-3 platform by Year 5.`;

  const whatIDid = [
    "Built the core thesis that Temu should not compete as a broader e-commerce platform, but as a structurally different model built around demand-signal supply chain economics.",
    "Framed the Hong Kong e-commerce market around the price-speed-trust gap between HKTVmall, Taobao, JD.com, and Temu.",
    "Developed the category selection framework and identified Electronics and Beauty as the highest-fit entry categories.",
    "Designed the three-pillar strategy: factory-direct supply chain, localized micro-warehouse logistics, and trust infrastructure.",
    "Built the 5-year financial model, including GMV, net revenue, gross margin, EBIT, CAC, LTV/CAC, payback period, and scenario analysis.",
    "Structured the roadmap across Establish, Grow, and Dominate phases with clear KPI gates for users, GMV, trust score, margin, and market share.",
  ];

  const keyInsights = [
    {
      icon: Target,
      title: "Structural Market Gap",
      text: "Hong Kong consumers want affordable, fast, and trusted e-commerce, but no incumbent currently delivers all three simultaneously.",
    },
    {
      icon: Factory,
      title: "Demand-Signal Supply Chain",
      text: "Temu’s core advantage is not lower prices alone, but its ability to connect factory supply with real-time demand signals.",
    },
    {
      icon: Truck,
      title: "Micro-Warehouse Density",
      text: "Localized fulfillment turns Temu’s cross-border model from a low-cost platform into a defensible operational moat.",
    },
    {
      icon: ShieldCheck,
      title: "Trust as the Moat",
      text: "Price drives trial, but trust drives retention. QC, 7-Eleven returns, local service, and authenticity guarantees are central to the strategy.",
    },
    {
      icon: BarChart3,
      title: "Year 3 Break-Even",
      text: "The model reaches break-even by Year 3 as scale improves both logistics efficiency and customer economics.",
    },
    {
      icon: TrendingUp,
      title: "Top-3 by Year 5",
      text: "The base case targets HK$2.3B GMV, 4.2M cumulative users, and approximately 15.8% market share by Year 5.",
    },
  ];

  const strategyPillars = [
    {
      title: "Pillar 1 — Supply Chain",
      subtitle: "Demand-signal factory-direct model",
      points: [
        "Electronics: 2,000 launch SKUs with ~42% price advantage versus HKTVmall equivalent.",
        "Beauty: 3,000 launch SKUs with ~38% price advantage.",
        "500+ pre-vetted Shenzhen / Guangzhou factories at launch.",
        "Real-time SKU-level pricing based on HK browsing and demand signals.",
      ],
    },
    {
      title: "Pillar 2 — Logistics",
      subtitle: "Micro-warehouse density as operational barrier",
      points: [
        "Kwun Tong and Tsuen Wan warehouses in Year 1.",
        "Aberdeen warehouse added in Year 2.",
        "Average delivery improves from 2.5 days in Year 1 to around 1.2 days in Year 2.",
        "Logistics cost per order reduces from HK$65 to HK$43 by Year 3.",
      ],
    },
    {
      title: "Pillar 3 — Trust",
      subtitle: "Trust infrastructure before aggressive scale",
      points: [
        "100% batch inspection for Year 1 SKUs.",
        "Temu Verified badge and serial-number tracking for priority categories.",
        "Cantonese, English, and Mandarin customer service.",
        "7-Eleven drop-off return network and 30-day no-questions return policy.",
      ],
    },
  ];

  const metrics = [
    { label: "HK Market Size", value: "HK$4.1B", note: "2024 e-commerce GMV" },
    { label: "Year 3 GMV", value: "HK$820M", note: "Break-even target" },
    { label: "Year 5 GMV", value: "HK$2.3B", note: "Top-3 platform target" },
    { label: "LTV/CAC", value: "6.4×", note: "Year 3 target" },
  ];

  const reflection = `This project strengthened my ability to build a full consulting-style market entry recommendation from market context to execution roadmap.

The most important learning was that a strong strategy is not simply about identifying an attractive market. It requires proving why the opportunity exists, why incumbents cannot solve it, why the selected player is uniquely positioned, and how the strategy translates into unit economics and executable milestones.

The final recommendation positions Temu’s Hong Kong entry not as a subsidy-led expansion, but as a structurally advantaged strategy built on supply chain responsiveness, logistics density, and trust accumulation.`;

  const hasNotes = meta.notes.length > 0;

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="business" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="flex items-center justify-between">
            <Link href="/business">
              <Button className="border border-orange-400/30 text-amber-200 hover:bg-white/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Business
              </Button>
            </Link>

            <div className="flex items-center gap-2">
              {meta.canvaUrl && meta.canvaUrl !== "#" && (
                <a href={meta.canvaUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="bg-orange-500/20 border border-orange-400/40 text-orange-100 hover:bg-orange-500/30">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View more
                  </Button>
                </a>
              )}

              {hasNotes && (
                <Button
                  onClick={() => setShowNotes(true)}
                  className="bg-orange-500/20 border border-orange-400/40 text-orange-100 hover:bg-orange-500/30"
                >
                  View notes
                </Button>
              )}
            </div>
          </div>

          <Card className="relative overflow-hidden border-white/20 bg-white/10 backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-red-500/10" />

            <div className="relative p-5 md:p-7">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                {meta.placement && (
                  <span className="inline-flex items-center rounded-full border border-amber-300/40 bg-amber-500/20 px-2.5 py-1 text-xs text-amber-100">
                    🏆 {meta.placement}
                  </span>
                )}
                <span className="inline-flex items-center rounded-full border border-orange-300/40 bg-orange-500/20 px-2.5 py-1 text-xs text-orange-100">
                  Case Competition
                </span>
              </div>

              <h1 className="mb-2 text-2xl font-semibold text-white md:text-4xl">
                {meta.title}
              </h1>

              <div className="mb-4 inline-flex flex-wrap items-center gap-2 text-sm text-gray-300">
                <span>{meta.institution}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {meta.term}
                </span>

                {meta.role && (
                  <span className="ml-2 inline-flex items-center rounded-full border border-orange-400/30 bg-orange-500/10 px-2 py-0.5 text-[11px] text-orange-200">
                    {meta.role}
                  </span>
                )}
              </div>

              <div className="mb-4 flex flex-wrap gap-2">
                {meta.tags.map((t) => (
                  <Badge
                    key={t}
                    className="border-orange-500/30 bg-orange-500/20 text-orange-100"
                  >
                    {t}
                  </Badge>
                ))}
              </div>

              <p className="max-w-4xl text-gray-200">{meta.practice}</p>
            </div>

            <div className="relative h-1 w-full bg-gradient-to-r from-orange-500/30 via-red-500/30 to-orange-500/30" />
          </Card>

          <section className="grid gap-4 md:grid-cols-4">
            {metrics.map((item) => (
              <Card
                key={item.label}
                className="border-white/10 bg-white/10 p-4 backdrop-blur-md"
              >
                <p className="text-sm text-gray-400">{item.label}</p>
                <p className="mt-1 text-2xl font-semibold text-orange-300">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-gray-400">{item.note}</p>
              </Card>
            ))}
          </section>

          <section className="rounded-xl border border-orange-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-orange-400 md:text-2xl">
              Project Overview
            </h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {overview}
            </p>
          </section>

          <section className="rounded-xl border border-orange-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-4 text-xl font-semibold text-orange-400 md:text-2xl">
              Key Strategic Insights
            </h2>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {keyInsights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <Icon className="mb-3 h-6 w-6 text-orange-300" />
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

          <section className="rounded-xl border border-orange-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-4 text-xl font-semibold text-orange-400 md:text-2xl">
              Strategy Architecture
            </h2>

            <div className="grid gap-4 md:grid-cols-3">
              {strategyPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mb-3 text-sm text-orange-200">
                    {pillar.subtitle}
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    {pillar.points.map((point, i) => (
                      <li key={i} className="leading-relaxed">
                        • {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-orange-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-orange-400 md:text-2xl">
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

          <section className="rounded-xl border border-orange-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-orange-400 md:text-2xl">
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