"use client";

import Link from "next/link";
import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";

export default function KpmgEsgCasePage() {
  // —— META（绿色主题；无外链/无荣誉/无图片）——
  const meta = {
    slug: "kpmg-esg-case-competition-2024",
    title: "KPMG ESG Case Competition",
    institution: "KPMG China",
    practice: "ESG · Sustainability · Automotive Supply Chain",
    term: "2024.09",
    status: "Completed" as const,
    tags: ["ESG", "Sustainability", "Automotive Supply Chain"],
  };

  // —— Overview ——
  const overview = `ESG case-analysis competition led by KPMG China.
We tackled a multinational EV manufacturer’s sustainable supply-chain strategy: upstream critical-minerals risk,
clean manufacturing and circularity in midstream, and green logistics & after-use in downstream. We proposed an
ISO 14001–anchored EMS rollout, Scope 1/2/3 accounting and LCA templates, supplier ratings and green procurement,
and a pragmatic roadmap with governance, KPIs and pilot scenarios.`;

  // —— What I Did ——
  const whatIDid: string[] = [
    "Served as Team Lead for a 3-person team; set hypothesis tree & storyline, split workstreams, and ran daily stand-ups.",
    "Mapped the EV value chain and pressure-tested decarbonization levers: critical-mineral sourcing, vertical integration, and resilience.",
    "Designed a carbon accounting framework (Scope 1/2/3) with data model & LCA checklist; drafted reporting templates and audit trails.",
    "Built supplier ESG rating & green-procurement playbook (thresholds, audits, incentives) and ISO 14001 EMS rollout steps.",
    "Outlined logistics decarbonization (network optimization, packaging loop, modal shift) and battery recycling program options.",
    "Prioritized initiatives via impact–feasibility matrix; defined KPI tree (intensity, recycling rate, renewables share) and governance.",
  ];

  // —— Reflection ——
  const reflection = `Leading the team taught me to balance structure with realism.
Judges valued clear, auditable mechanics more than buzzwords: “target → lever → data → control → KPI”.
Framing ESG as an operating system (EMS + data + incentives) helped translate analysis into a credible
sequence of pilots and scale-up—exactly what cross-functional stakeholders can execute under time pressure.`;

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
          {/* 顶部：左返回（绿色） */}
          <div className="flex items-center justify-between">
            <Link href="/business">
              <Button className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-md border-emerald-400/30 text-emerald-100 hover:bg-emerald-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Business
              </Button>
            </Link>
            <div />
          </div>

          {/* 顶部 Meta 卡（右上仅状态；日期旁显示 Team Lead） */}
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
                {/* Team Lead 徽章（靠日期） */}
                <span className="ml-2 inline-flex h-6 items-center rounded-full border border-emerald-300/40 bg-emerald-500/20 px-2.5 text-xs text-emerald-100">
                  Team Lead
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
            <h2 className="mb-3 text-xl font-semibold text-emerald-400 md:text-2xl">Project Overview</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">{overview}</p>
          </section>

          {/* What I Did */}
          <section className="rounded-xl border border-emerald-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-emerald-400 md:text-2xl">What I Did</h2>
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
            <h2 className="mb-3 text-xl font-semibold text-emerald-400 md:text-2xl">Reflection</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">{reflection}</p>
          </section>
        </div>
      </div>
    </div>
  );
}
