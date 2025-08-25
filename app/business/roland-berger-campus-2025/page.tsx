"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function RolandBergerCampus2025Page() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "roland-berger-campus-2025",
    title: "Roland Berger Campus Challenge 2025",
    institution: "Roland Berger",
    practice: "Strategy Case · Humanoid Robotics Go-to-Market",
    term: "2025.06",
    role: "Team Lead",
    status: "Completed" as const,
    tags: ["Strategy", "Market Analysis", "Humanoid Robot", "Go-to-Market", "Unit Economics"],
    notes: ["/competition/rb.png"] as string[],
  };

  // —— Overview —— 
  const overview = `Strategy consulting case on the humanoid robotics industry.
We mapped the market, sized TAM/SAM/SOM, pressure-tested early beachheads, and designed a staged go-to-market plan with
unit-economics checkpoints (BOM, service model, utilization). The work connected tech readiness with commercial viability,
and translated insights into a crisp storyline for executives.`;

  // —— What I Did —— 
  const highlights: string[] = [
    "Structured market sizing (top-down & bottom-up): task inventory → serviceable tasks → adoption ramp by segment.",
    "Built unit-economics model: BOM ranges, service contracts, utilization, maintenance, and payback sensitivity.",
    "Customer discovery & segmentation: manufacturing, logistics, security/inspection, eldercare; scored by feasibility & ROI.",
    "Defined go-to-market sequencing: pilot → lighthouse wins → vertical playbooks → partner ecosystem.",
    "Partnership thesis: integrators, sensor/actuation suppliers, cloud/AI stacks, safety/insurance stakeholders.",
    "Risk & regulation scan: workplace safety, human-in-the-loop requirements, data/telemetry governance.",
    "Crafted executive deck: MECE storyline, exhibit design, and ‘so-what’ recommendations.",
  ];

  const reflection = `Humanoid robotics is less a single “product” and more a stack:
(1) hardware affordability & reliability (actuation, power density, hands/dexterity),
(2) perception & control across messy, long-tail tasks, and
(3) an operations layer (fleet mgmt, remote assist, safety/guardrails) that actually makes deployments viable.

Near-term beachheads are “dull-dirty-dangerous” and constrained environments: pallet handling, inspection rounds,
night-shift security, basic material movement. Success metrics aren’t just ‘can it walk’ but:
task success rate (TSR), mean-time-to-intervention (MTTI), time-to-first-task-library (TTFTL), and safety events per 1k hrs.

Economically, capex must be amortized via service models (RaaS) with predictable uptime; value creation comes from
labor substitution on low-variance tasks plus safety/quality benefits. The credible path I see is
‘humanoid as a platform’ with curated task libraries and human-in-the-loop tele-assist, not pure autonomy day-one.
Integration matters: APIs to WMS/MES/ERP, site-mapping, and operator training drive adoption more than model benchmarks.

The lesson for me as a strategy candidate: sanity-check hype with unit economics; pick beachheads where
environmental control and measurable ROI exist; and design the partnership fabric early so scaling is not an afterthought.`;

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

                <span className="ml-1 inline-flex items-center h-5 rounded-full px-2 text-[11px] border border-emerald-300/40 bg-emerald-500/20 text-emerald-100">
                  {meta.role}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2">
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
