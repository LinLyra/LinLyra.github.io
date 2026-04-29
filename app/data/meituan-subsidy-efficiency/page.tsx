"use client";

import Link from "next/link";
import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function MeituanSubsidyEfficiencyPage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "meituan-subsidy-efficiency",
    title: "Subsidy Efficiency & Causal Impact Analysis",
    institution: "Meituan Business Analytics Challenge",
    practice: "Causal Inference · PSM · ATT · Incremental ROI · User Segmentation · Budget Reallocation",
    term: "2026.04",
    status: "Completed" as const,
    role: "Team Lead",
    tags: ["Causal Inference", "PSM", "ATT", "Incremental ROI", "Subsidy Strategy", "Business Analytics"],
    notes: ["/data/meituan-subsidy.png"] as string[],
  };

  const overview = `Subsidies are widely used as growth levers in local services, but traditional metrics such as redemption rate and apparent ROI often overestimate their true impact.

In this project, I built a causal inference framework using Propensity Score Matching (PSM) to estimate how much subsidized GMV was truly incremental, identify high-response user segments, and translate the findings into a budget reallocation strategy.`;

  const keyFindings: string[] = [
    "Incremental ROI reached approximately 4.55 under the 7-day same-BU evaluation window.",
    "Only around 26.4% of subsidized GMV was estimated to be truly incremental.",
    "Approximately 73.6% of subsidized transactions appeared to cover natural demand or low-efficiency targeting.",
    "Mid-activity users and lower-tier city users showed stronger marginal response to subsidies.",
  ];

  const methods: string[] = [
    "Applied Propensity Score Matching to construct comparable treatment and control groups from users receiving the same subsidy batch.",
    "Validated matching quality using standardized mean differences across historical GMV, order count, same-BU spending, and active days.",
    "Estimated Average Treatment Effects across 3-day, 7-day, and 14-day windows to evaluate short-term lift and persistence.",
    "Decomposed apparent subsidized GMV into true incremental contribution and estimated non-incremental coverage.",
    "Compared incremental ROI across user activity tiers, city levels, consumption segments, and business units.",
  ];

  const whatIDid: string[] = [
    "Designed the end-to-end analytical framework from problem definition, metric design, causal evaluation, segmentation, to strategy recommendation.",
    "Defined decision-oriented metrics including ATT, Lift, incremental ROI, true incremental share, and estimated waste rate.",
    "Built a PSM-based counterfactual logic to avoid over-crediting subsidies for users who would have purchased anyway.",
    "Identified high-potential subsidy targets such as mid-activity users and lower-tier city users based on heterogeneous ROI.",
    "Translated analytical findings into practical actions: user targeting, coupon structure optimization, budget reallocation, and monitoring dashboard design.",
  ];

  const reflection = `Biggest takeaway: high redemption does not mean high incrementality.

The analysis showed that the real problem was not whether subsidies worked, but whether they were allocated to the right users and business units. By moving from apparent ROI to incremental ROI, the decision shifted from “spend more” to “spend better”.

This project strengthened my ability to connect causal inference with business strategy: using data not only to measure outcomes, but also to guide resource allocation decisions.`;

  const hasNotes = (meta.notes?.length ?? 0) > 0;

  const badgeClass =
    meta.status === "Completed"
      ? "bg-emerald-600/25 text-emerald-100 border-emerald-400/40"
      : "bg-blue-600/25 text-blue-100 border-blue-400/40";

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0A0E1A]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(59,130,246,0.18),transparent_60%),radial-gradient(circle_at_12%_88%,rgba(16,185,129,0.14),transparent_55%),radial-gradient(circle_at_88%_22%,rgba(245,158,11,0.14),transparent_55%)]" />
      </div>

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

            {hasNotes ? (
              <Button
                onClick={() => setShowNotes(true)}
                className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-100 hover:bg-emerald-500/30"
              >
                View More
              </Button>
            ) : (
              <div />
            )}
          </div>

          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="absolute right-3 top-3">
              <span className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${badgeClass}`}>
                {meta.status}
              </span>
            </div>

            <div className="p-5 md:p-6">
              <h1 className="text-xl md:text-2xl font-semibold text-white mb-1 pr-28">
                {meta.title}
              </h1>

              <div className="mb-3 inline-flex flex-wrap items-center gap-2 text-sm text-gray-300">
                <span>{meta.institution}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {meta.term}
                </span>
                <span className="ml-1 inline-flex items-center h-5 rounded-full px-2 text-[11px] border border-emerald-300/40 bg-emerald-500/20 text-emerald-100">
                  {meta.role}
                </span>
              </div>

              <div className="mb-2 flex flex-wrap gap-2">
                {meta.tags.map((t) => (
                  <Badge key={t} className="bg-blue-500/20 text-blue-100 border-blue-500/30">
                    {t}
                  </Badge>
                ))}
              </div>

              <p className="text-gray-200">{meta.practice}</p>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-blue-500/20 via-emerald-500/30 to-amber-500/30" />
          </Card>

          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">Project Overview</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">{overview}</p>
          </section>

          <section className="rounded-xl border border-emerald-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-emerald-300 md:text-2xl">Key Findings</h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {keyFindings.map((line, i) => (
                <li key={i} className="leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">Methods</h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {methods.map((line, i) => (
                <li key={i} className="leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">What I Did</h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {whatIDid.map((line, i) => (
                <li key={i} className="leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-emerald-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-emerald-300 md:text-2xl">Reflection</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">{reflection}</p>
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