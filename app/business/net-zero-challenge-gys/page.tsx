"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ExternalLink, Award } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function NetZeroGYSPage() {
  const [showNotes, setShowNotes] = useState(false);

  // —— META（绿色主题；两张照片；带奖项徽章）——
  const meta = {
    slug: "net-zero-gys-2024",
    title: "Global Youth Summit on Net-Zero Future",
    institution: "UNESCO East Asia & GAUC @ Tsinghua",
    practice: "Climate Action · Youth Innovation · Low-carbon Product Proposal",
    term: "2024.09 · Team Lead",
    status: "Completed" as const,
    award: "Global Bronze",
    // 把两张图放到 public 对应路径
    notes: ["/business/gys/photo1.jpg", "/business/gys/photo2.jpg"],
    tags: ["Global Bronze Award", "Climate Action", "Youth Leadership", "Innovation"],
  };

  const overview = `Our team “Double-LT” proposed **Smart Green Home-stay**, a replicable
low-carbon model for rural revitalisation. The solution integrates:
• Rooftop PV (ABC solar cells) for on-site clean power and carbon reduction;
• Water harvesting & recycling (rain/spring/greywater) for potable and non-potable reuse;
• Temperature-control wall systems (PCMs/ICFs/SIPs) to stabilise indoor climate and cut HVAC load.
The aim is an immersive, eco-friendly stay that balances tourism income with measurable emissions and water savings.`;

  const whatIDid = [
    "Led the team end-to-end (scope > roles > timeline); coordinated multi-disciplinary inputs (architecture, env-eng).",
    "Modelled PV yield & carbon abatement under Shanghai insolation; explained ABC cell benefits and aesthetics for rooftops.",
    "Structured water-loop design: roof capture → filtration/UV → storage; spring source QA; greywater reuse routes.",
    "Specified temperature-control wall options (PCMs/ICFs/SIPs) and retrofit/new-build pathways with feasibility notes.",
    "Wrote the main report & stitched the final deck; aligned messaging to zero-carbon KPIs and rural homestay context.",
  ];

  const reflection = `Two things won judges over: **systems thinking** and **replicability**. 
Instead of a single gadget, we showed how PV + water reuse + thermal envelopes reinforce one another, 
with a rural homestay as the first beachhead. As team lead, I learnt to translate technical pieces into one 
storyline—problem, constraints, trade-offs, metrics—then assign work so every graph or diagram moves that 
story forward. If we iterate, I’d add a simple LCOE/LCCA view and a pilot bill-of-materials to sharpen costs, 
plus a one-page “how to replicate” kit for local operators and governments.`;

  const hasNotes = meta.notes.length > 0;
  const badgeClass =
    meta.status === "Completed"
      ? "bg-green-600/25 text-green-100 border-green-400/40"
      : "bg-emerald-600/25 text-emerald-100 border-emerald-400/40";

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="business" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          {/* 顶部：左返回 / 右 View More（仅照片） */}
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
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              )}
            </div>
          </div>

          {/* Meta 卡片（完成 + 全球铜奖） */}
          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="absolute right-3 top-3 flex gap-2">
              <span
                className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${badgeClass}`}
              >
                {meta.status}
              </span>
              {meta.award && (
                <span className="inline-flex items-center h-6 rounded-full px-2.5 text-xs border border-amber-300/40 bg-amber-500/20 text-amber-100">
                  <Award className="mr-1 h-3 w-3" />
                  {meta.award}
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
              </div>
              <div className="mb-2 flex flex-wrap gap-2">
                {meta.tags.map((t) => (
                  <Badge key={t} className="bg-green-500/20 text-green-100 border-green-500/30">
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
            <h2 className="mb-3 text-xl font-semibold text-green-400 md:text-2xl">Project Overview</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {overview}
            </p>
          </section>

          {/* What I Did */}
          <section className="rounded-xl border border-green-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-green-400 md:text-2xl">What I Did</h2>
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
            <h2 className="mb-3 text-xl font-semibold text-green-400 md:text-2xl">Reflection</h2>
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
