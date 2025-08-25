"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Award, Crown } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function NetZeroGYSPage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "net-zero-gys-2024",
    title: "Global Youth Summit on Net-Zero Future",
    institution: "UNESCO East Asia & GAUC @ Tsinghua",
    practice:
      "Climate Action · Youth Innovation · Low-carbon Product Proposal",
    term: "2024.09",
    role: "Team Lead", 
    status: "Completed" as const,
    award: "Global Bronze",
    notes: ["/competition/zero.png", "/competition/zero1.png"],
    tags: [
      "Global Bronze Award",
      "Climate Action",
      "Youth Leadership",
      "Innovation",
    ],
  };

  const overview = `Our team “Double-LT” proposed **Smart Green Home-stay**, a replicable
low-carbon model for rural revitalisation. The solution integrates:
• Rooftop PV (ABC solar cells) for on-site clean power and carbon reduction;
• Water harvesting & recycling (rain/spring/greywater) for potable and non-potable reuse;
• Temperature-control wall systems (PCMs/ICFs/SIPs) to stabilise indoor climate and cut HVAC load.
The aim is an immersive, eco-friendly stay that balances tourism income with measurable emissions and water savings.`;


  const reflection: string[] = [
    `Two things won judges over: **systems thinking** and **replicability**. Instead of pitching a single gadget, we framed how rooftop PV, water reuse, and thermal envelopes reinforce one another around a rural homestay so that revenue, comfort, and emissions reduction move together.`,
    `As team lead, my biggest learning was narrative discipline: turn scattered technical pieces into one storyline—problem → constraints → trade-offs → metrics. I also learned to assign work by “decision pages” rather than tasks, so every chart answered a question (e.g., how much PV offset is needed to keep payback < X years?).`,
    `If we iterate, I’d add a lightweight **LCOE/LCCA** view and a simple **bill-of-materials** to make cost/benefit legible for local operators. On measurement, I’d define a **field-data plan** (smart-meter PV yield, water capture/reuse logs, temperature profiles) and publish a replication kit so other villages can copy with minimal engineering debt.`,
    `Team-wise, we benefitted from early scope guardrails but could have prototyped visuals sooner. Next time I’d time-box a “visual sprint” to lock the end state first, then back-fill analysis so the deck tells a tight, decision-ready story.`,
  ];

  const hasNotes = meta.notes.length > 0;

  const statusPillClass =
    meta.status === "Completed"
      ? "bg-green-600/25 text-green-100 border-green-400/40"
      : "bg-emerald-600/25 text-emerald-100 border-emerald-400/40";

  return (
    <div className="relative min-h-screen">
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

          {/* Header card */}
          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="absolute right-3 top-3 flex gap-2">
              <span
                className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${statusPillClass}`}
              >
                {meta.status}
              </span>

              {meta.award && (
                <span className="inline-flex items

