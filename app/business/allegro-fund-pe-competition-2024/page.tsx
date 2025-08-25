"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function BegaEsgValuationPage() {
  const [showNotes, setShowNotes] = useState(false);

  // —— META（绿色主题；1 张图；无外链/无荣誉）——
  const meta = {
    slug: "bega-esg-valuation",
    title: "Bega Group ESG Strategy & Valuation",
    institution: "Allegro Fund",
    practice: "ESG Strategy · DCF Valuation · Food & Beverage",
    term: "2024.10",
    status: "Completed" as const,
    tags: [
      "ESG",
      "DCF",
      "Industry Analysis",
      "Risk & Governance",
      "Product Responsibility",
      "Water & Emissions",
      "Recommendations",
    ],
    notes: [
      "/competition/bega.png",
    ] as string[],
  };

  const overview = `We developed an ESG-driven strategy and valuation view for Bega Group in the food & beverage sector.
The work combined an industry scan with a baseline DCF and an ESG-adjusted view to link sustainability
levers to value creation. We examined environmental (emissions, water use), social (product responsibility, safety)
and governance (board/committee structure, disclosure) signals, then translated findings into practical,
farm-to-factory recommendations and an investor-facing narrative.`;

  const whatIDid: string[] = [
    "Mapped the industry structure and competitive intensity; summarized risks/opportunities for a consumer staples name.",
    "Built a baseline DCF with transparent assumptions and a sensitivity pack (growth, margins, WACC).",
    "Constructed an ESG overlay to the valuation (e.g., carbon externalities, workforce diversity/productivity channels) to reflect risk/return impacts.",
    "Reviewed environmental and social performance themes (emissions trajectory, water use, product quality/safety) and benchmarked governance setup.",
    "Shaped recommendations from farm level to operations (e.g., supplier engagement programs, data/monitoring, pilot-first rollout) and tied each to value drivers.",
    "Authored an executive storyline: what to fix, what to scale, how to evidence impact, and how it flows into valuation.",
  ];

    const reflection = `Key learning: investors reward credible, decision-grade ESG—not slogans. The bridge from ESG to
valuation is built with measurable channels (risk reduction, cost/outage avoidance, brand/revenue resilience),
clean data and conservative assumptions. A practical playbook helped: start where data is strongest,
pilot to de-risk execution, attach KPIs to each lever, and show how those KPIs move cash flows or discount rates.
Equally important was packaging: a clear ‘why this, why now’ narrative and exhibits that make audit-ready assumptions obvious.

Another reflection was the balance between depth and pragmatism. ESG analysis can quickly become an endless wish-list,
but the discipline was to prioritise levers that truly move enterprise value and can be evidenced in 6–18 months.
It also showed me how crucial storytelling is: valuation models may sit in Excel, but the real persuasion happens
through a slide or a one-page memo that makes the link between sustainability and value creation impossible to ignore.

Finally, I realised the exercise sharpened my consulting toolkit itself: framing a messy, multi-dimensional topic,
finding a ‘client-credible’ scope, and pushing to connect strategy recommendations back into valuation. This reinforced
that even ESG—when done rigorously—is not a side narrative, but an investable, measurable part of business strategy.`;


  const hasNotes = meta.notes.length > 0;
  const badgeClass =
    meta.status === "Completed"
      ? "bg-emerald-600/25 text-emerald-100 border-emerald-400/40"
      : "bg-lime-600/25 text-lime-100 border-lime-400/40";

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* 绿色星云背景（与 Business 星球一致） */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#08110d]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(16,185,129,0.16),transparent_60%),radial-gradient(circle_at_15%_90%,rgba(34,197,94,0.14),transparent_55%),radial-gradient(circle_at_90%_25%,rgba(52,211,153,0.12),transparent_55%)]" />
      </div>

      <Navigation activeSection="business" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex items-center justify-between">
            <Link href="/business">
              <Button className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-md border-emerald-400/30 text-emerald-100 hover:bg-emerald-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Business
              </Button>
            </Link>

            {hasNotes && (
              <Button
                onClick={() => setShowNotes(true)}
                className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-100 hover:bg-emerald-500/30"
              >
                View More
              </Button>
            )}
          </div>

          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="absolute right-3 top-3">
              <span className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${badgeClass}`}>
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
                  <Badge key={t} className="bg-emerald-500/20 text-emerald-100 border-emerald-500/30">
                    {t}
                  </Badge>
                ))}
              </div>
              <p className="text-gray-200">{meta.practice}</p>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-emerald-500/20" />
          </Card>

          {/* Overview */}
          <section className="rounded-xl border border-emerald-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-emerald-400 md:text-2xl">
              Project Overview
            </h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {overview}
            </p>
          </section>

          {/* What I Did */}
          <section className="rounded-xl border border-emerald-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-emerald-400 md:text-2xl">
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
          <section className="rounded-xl border border-emerald-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-emerald-400 md:text-2xl">
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
