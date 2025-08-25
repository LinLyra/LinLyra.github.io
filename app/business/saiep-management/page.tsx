"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function SAIEPManagementConsultingPage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "saiep-management",
    title: "Management Consultant",
    institution: "Study Australian Industry Experience Program",
    practice: "Strategy consulting · Market research · Growth modelling",
    term: "2025.7",
    status: "Completed" as const,
    tags: ["Strategy", "Market Research", "Competitive Analysis", "Business Model Design"],
    notes: ["/experience/saiep1.png", "/experience/saiep2.png"],
  };

  const overview = `Strategy-led consulting engagement focused on growth for an education non-profit.
We scoped the problem with stakeholders, mapped the market, and built an evidence-based growth narrative
that the client could take to partners and funders. Deliverables included a succinct strategy report,
supporting analysis, and an adoption-ready roadmap for the next phases.`;


  const highlights: string[] = [
    "Stakeholder discovery: distilled goals, constraints, and success criteria; framed testable hypotheses.",
    "Market/partner scan: competitor mapping, segment sizing, and partnership pathways for schools and agencies.",
    "Structured recommendations: growth levers, pricing/packaging ideas, pilot design, and risk/mitigation.",
    "Communication assets: executive storyline, one-pager artifacts, and a simple KPI set for tracking impact.",
    "Roadmap: phased rollout with proof-points, feedback loops, and resource assumptions for scale-up.",
  ];

  const takeaways = `I learned how to turn a broad mission into a practical growth story that leaders can act on.
Two habits mattered most: (1) keep the narrative tight—problem, options, trade-offs, decision—and (2) propose a
pilotable path (who, what, when, how success is measured) instead of abstract strategy.

A second lesson was evidence discipline. When assumptions were fuzzy, we resisted over-engineering the plan and
designed small tests with clear proof-points: what signal we expect, how we’ll measure it, and what decision it unlocks.
This kept the team moving while reducing risk for stakeholders.

Finally, packaging changed outcomes. An executive one-pager + a deeper appendix let different audiences engage at their
own altitude. Pairing a lightweight KPI tree with an operating cadence (owners, reviews, course-corrections) made the
recommendations feel inevitable rather than aspirational—something a lean non-profit could actually run next week.`;

  const hasNotes = meta.notes.length > 0;
  const badgeClass =
    meta.status === "Completed"
      ? "bg-emerald-600/25 text-emerald-100 border-emerald-400/40"
      : "bg-green-600/25 text-green-100 border-green-400/40";

  return (
    <div className="relative min-h-screen overflow-visible">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#07110c]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(16,185,129,0.18),transparent_60%),radial-gradient(circle_at_10%_90%,rgba(34,197,94,0.16),transparent_55%),radial-gradient(circle_at_90%_20%,rgba(52,211,153,0.14),transparent_55%)]" />
      </div>

      <Navigation activeSection="business" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          {/* 顶部：左返回 / 右 View More */}
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

          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-visible">
            <div className="absolute right-3 top-3">
              <span className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${badgeClass}`}>
                {meta.status}
              </span>
            </div>
            <div className="p-5 md:p-6">
              <h1 className="text-xl md:text-2xl font-semibold text-white mb-1">{meta.title}</h1>
              <div className="mb-3 inline-flex items-center gap-2 text-sm text-gray-300">
                <span>{meta.institution}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {meta.term}
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
            <h2 className="mb-3 text-xl font-semibold text-emerald-400 md:text-2xl">Project Overview</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200 break-words hyphens-auto">
              {overview}
            </p>
          </section>

          {/* What I Worked On */}
          <section className="rounded-xl border border-emerald-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-emerald-400 md:text-2xl">What I Worked On</h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {highlights.map((line, i) => (
                <li key={i} className="leading-relaxed break-words hyphens-auto">
                  {line}
                </li>
              ))}
            </ul>
          </section>

          {/* Takeaways */}
          <section className="rounded-xl border border-emerald-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-emerald-400 md:text-2xl">Takeaways</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200 break-words hyphens-auto">
              {takeaways}
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
