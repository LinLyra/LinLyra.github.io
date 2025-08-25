"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function CommonwealthTreasuryCasePage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "commonwealth-treasury-case",
    title: "Commonwealth Treasury Case Competition",
    institution: "Commonwealth Bank of Australia (CBA)",
    practice: "Public Policy · Economic Analysis · Case Competition",
    term: "2025.04",
    status: "Completed" as const,
    tags: ["Economics", "Policy", "Analytics"],
    notes: ["/competition/commonwealth.png"] as string[],
  };

  // —— Overview —— 
  const overview = `Public policy & economic analysis case organized by CBA.
We assessed macro–micro transmission channels for alternative policy packages (stimulus mix, tax levers, sector support),
and balanced growth, inflation and distributional outcomes. Our final proposal prioritized targeted measures with clear
monitoring metrics and fiscal guardrails.`;

  // —— What I Did —— 
  const highlights: string[] = [
    "Framed objectives and constraints: growth, price stability, employment, fiscal headroom.",
    "Built a lightweight scenario model (elasticities + multipliers) to compare policy options and sector spillovers.",
    "Ran distributional sense-checks (household cohorts / SMEs) and identified at-risk segments.",
    "Outlined risk & implementation plan: data signals to watch, phase-gates, and rollback triggers.",
    "Crafted an executive storyline and exhibits that tied numbers to concrete policy actions.",
  ];

  // —— Reflection —— 
    // —— Reflection ——
  const reflection = `Biggest takeaway: good policy cases are about trade-offs, not single-metric wins.
Anchoring the narrative on measurable objectives (growth, inflation, inequality proxies) helped us justify why our package
was targeted and phased, rather than broad-brush. Clear monitoring signals and rollback criteria made the recommendations
actionable for decision-makers.

Another lesson was separating ‘show’ vs. ‘signal’: we avoided false precision and used simple elasticities/multipliers
with transparent assumptions, then stress-tested a few edge cases (energy shocks, SME credit tightening).
That kept the model explainable while still decision-grade.

Finally, packaging mattered as much as modelling. We learned to link each exhibit to a next step:
which data the treasury should track, what phase-gates unlock, and what triggers pause/rollback.
If iterating, I would add distributional microdata (household/firm panels) and run sensitivity on fiscal rules to quantify
trade-offs under tighter headroom. This balance of clarity, humility, and execution detail is what makes a policy case persuasive.`;


  const hasNotes = meta.notes.length > 0;
  const badgeClass =
    meta.status === "Completed"
      ? "bg-emerald-600/25 text-emerald-100 border-emerald-400/40"
      : "bg-lime-600/25 text-lime-100 border-lime-400/40";

  return (
    <div className="relative min-h-screen overflow-hidden">
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
              <div className="flex flex-wrap gap-2 mb-2">
                {meta.tags.map((t) => (
                  <Badge
                    key={t}
                    className="bg-emerald-500/20 text-emerald-100 border-emerald-500/30"
                  >
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
              {highlights.map((line, i) => (
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
