"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Award } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function NetZeroGYSPage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "net-zero-gys-2024",
    title: "Global Youth Summit on Net-Zero Future",
    institution: "UNESCO East Asia & GAUC @ Tsinghua",
    practice: "Climate Action · Youth Innovation · Low-carbon Product Proposal",
    term: "2024.09",
    role: "Team Lead",
    status: "Completed" as const,
    award: "Global Bronze",
    notes: ["/competition/zero.png", "/competition/zero1.png"],
    tags: ["Global Bronze Award", "Climate Action", "Youth Leadership", "Innovation"],
  };

  const overview = `Our team “Double-LT” proposed **Smart Green Home-stay**, a replicable
low-carbon model for rural revitalisation. The solution integrates:
• Rooftop PV (ABC solar cells) for on-site clean power and carbon reduction;
• Water harvesting & recycling (rain/spring/greywater) for potable and non-potable reuse;
• Temperature-control wall systems (PCMs/ICFs/SIPs) to stabilise indoor climate and cut HVAC load.
The aim is an immersive, eco-friendly stay that balances tourism income with measurable emissions and water savings.`;

  const whatIDid: string[] = [
    "Led scoping and storyline; aligned problem → constraints → trade-offs → metrics.",
    "Sized rooftop PV and sketched payback sensitivities to anchor feasibility.",
    "Outlined water capture/reuse scheme and basic quality tiers for end-uses.",
    "Compared envelope options (PCMs/ICFs/SIPs) and mapped comfort/HVAC impact.",
    "Defined KPI set and field-data plan (PV yield, water reuse logs, temperature profiles).",
    "Built the decision-ready deck; assigned ‘decision pages’ so each chart answered a question.",
  ];

  const takeaways: string[] = [
    `Two things won judges over: **systems thinking** and **replicability**. Rather than a single gadget, we showed how PV, water reuse and thermal envelopes reinforce each other around one homestay so revenue, comfort and emissions reduction move together.`,
    `Narrative discipline mattered: turning scattered technical pieces into a single spine—problem → constraints → options → metrics—kept the deck tight and decision-oriented. Assigning work by “decision pages” ensured every exhibit earned its slide.`,
    `If iterating, I’d add a light **LCOE/LCCA** and a simple **bill-of-materials** to make cost/benefit legible for local operators. On measurement, a **field-data plan** plus a small replication kit would let other villages copy with minimal engineering debt.`,
    `Teamwise, early scope guardrails helped; we could have prototyped visuals sooner. Next time I’d time-box a “visual sprint” first, then back-fill analysis so the end-state stays crisp.`,
  ];

  const hasNotes = meta.notes.length > 0;
  const statusPill =
    meta.status === "Completed"
      ? "bg-green-600/25 text-green-100 border-green-400/40"
      : "bg-emerald-600/25 text-emerald-100 border-emerald-400/40";

  return (
    <div className="relative min-h-screen overflow-visible">
      <Navigation activeSection="business" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          {/* Top actions */}
          <div className="flex items-center justify-between">
            <Link href="/business">
              <Button className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md border-green-400/30 text-gray-100 hover:bg-green-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Business
              </Button>
            </Link>

            {hasNotes && (
              <Button
                onClick={() => setShowNotes(true)}
                className="bg-green-500/20 border border-green-400/40 text-green-100 hover:bg-green-500/30"
              >
                View More
              </Button>
            )}
          </div>

          {/* Header card */}
          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-visible">
            <div className="absolute right-3 top-3 flex gap-2">
              <span className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${statusPill}`}>
                {meta.status}
              </span>

              {meta.award && (
                <span className="inline-flex items-center h-6 rounded-full px-2.5 text-xs border border-amber-300/40 bg-amber-500/20 text-amber-100">
                  <Award className="mr-1 h-3.5 w-3.5" />
                  {meta.award}
                </span>
              )}
            </div>

            <div className="p-5 md:p-6">
              <h1 className="text-xl md:text-2xl font-semibold text-white mb-1">{meta.title}</h1>

              <div className="mb-3 inline-flex items-center gap-2 text-sm text-gray-300">
                <span>{meta.institution}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {meta.term}
                </span>
                {meta.role && (
                  <span className="ml-1 inline-flex items-center h-5 rounded-full px-2 text-[11px] border border-green-300/40 bg-green-500/20 text-green-100">
                    {meta.role}
                  </span>
                )}
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
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200 break-words hyphens-auto">
              {overview}
            </p>
          </section>

          {/* What I Worked On */}
          <section className="rounded-xl border border-green-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-green-400 md:text-2xl">What I Worked On</h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {whatIDid.map((line, i) => (
                <li key={i} className="leading-relaxed break-words hyphens-auto">
                  {line}
                </li>
              ))}
            </ul>
          </section>

          {/* Takeaways */}
          <section className="rounded-xl border border-green-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-green-400 md:text-2xl">Takeaways</h2>
            <div className="space-y-4 text-base leading-relaxed text-gray-200">
              {takeaways.map((p, i) => (
                <p key={i} className="whitespace-pre-line break-words hyphens-auto">
                  {p}
                </p>
              ))}
            </div>
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
