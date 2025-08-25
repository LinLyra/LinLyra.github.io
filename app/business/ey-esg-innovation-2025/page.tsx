"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function EyEsgInnovationPage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "ey-esg-innovation-2025",
    title: "EY ESG University Innovation Challenge 2025",
    institution: "EY × Gaodun Education",
    practice: "ESG Strategy · AI + Luxury · Supply Chain",
    term: "2025.04",
    role: "Team Lead",
    status: "Completed" as const,
    award: "Semifinalist",
    notes: ["/competition/lvmh.png"],
    tags: ["ESG", "AI + Luxury", "Luxury Supply Chain"],
  };

  const overview = `Data-driven sustainability challenge focused on AI-enabled ESG strategies for luxury supply chains.
We framed circular-fashion opportunities, mapped LVMH-style governance and data gaps, and proposed an AI × ESG roadmap
covering digital product passports, Scope-3 visibility, and structured KPI dashboards aligned with CSRD-style disclosure.`;

  const whatIDid: string[] = [
    "Led a three-member team to scope the brief, align roles, and time-box deliverables under competition cadence.",
    "Framed the problem around circular fashion and luxury supply chain traceability; clarified KPIs and decision cadence.",
    "Designed an AI × ESG architecture: Digital Product Passport (DPP), Scope-3 data model, indicator warehouse, and audit trail.",
    "Converted ESG theory into operations: ‘objective → risk → control → data source → metric’ with demo dashboards.",
    "Built a concise pitch outlining adoption path (pilot brands → data connectors → governance & audit), and Q&A playbook.",
  ];

  const reflection = `Semifinalist as Team Lead taught me to translate ESG ambitions into data systems that actually ship.
Two lessons stood out. First, strategy must start with data reliability: without unified indicators and a clear Scope-3 model,
AI scoring is theater. Second, packaging matters—judges want a repeatable path from pilot to rollout with controls, not just slogans.
I also learned to balance depth and clarity for a mixed audience (ESG, ops, data), and to defend choices under time pressure—why DPP,
why those KPIs, why that governance flow. This experience sharpened my ability to lead an outcome-driven, evidence-based pitch.`;

  const hasNotes = meta.notes.length > 0;
  const statusPill =
    meta.status === "Completed"
      ? "bg-green-600/25 text-green-100 border-green-400/40"
      : "bg-emerald-600/25 text-emerald-100 border-emerald-400/40";

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="business" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          {/* 顶部：左返回（绿色） / 右 View More（仅图片） */}
          <div className="flex items-center justify-between">
            <Link href="/business">
              <Button className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md border-green-400/30 text-gray-100 hover:bg-green-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Business
              </Button>
            </Link>

            <div className="flex items-center gap-2">
              {hasNotes && (
                <Button
                  onClick={() => setShowNotes(true)}
                  className="bg-green-500/20 border border-green-400/40 text-green-100 hover:bg-green-500/30"
                >
                  View More
                </Button>
              )}
            </div>
          </div>

          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="absolute right-3 top-3 flex gap-2">
              <span
                className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${statusPill}`}
              >
                {meta.status}
              </span>
              {meta.award && (
                <span className="inline-flex items-center h-6 rounded-full px-2.5 text-xs border border-amber-300/40 bg-amber-500/20 text-amber-100">
                  🏅 {meta.award}
                </span>
              )}
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
                <span>• {meta.role}</span>
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

          {/* Overview */}
          <section className="rounded-xl border border-green-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-green-400 md:text-2xl">
              Project Overview
            </h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {overview}
            </p>
          </section>

          {/* What I Did */}
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

          {/* Reflection */}
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
