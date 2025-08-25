"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function AdventureXYolo2025Page() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "adventurex-yolo-2025",
    title: "AdventureX 2025 — YOLO “Growth Stock” Platform",
    institution: "AdventureX Hackathon",
    practice: "Product Ops · Growth Platform · Web App Prototype",
    term: "2025.07",
    status: "Completed" as const,

    notes: [
      "/competition/yolo.png",
      "/competition/yolo1.png",
      "/competition/yolo2.png",
    ] as string[],
    tags: ["Product Ops", "Web3 (roadmap)", "Youth Innovation", "YOLO"],
  };

  const overview = `YOLO is a youth growth platform that turns personal development into a visible, supportable, and connectable “Growth Stock”.
Instead of static résumé tags, YOLO focuses on dynamic signals—projects, learning, competitions, and peer support—so
potential talent can be discovered earlier and connected to opportunities. The core value is building a growth-value data layer
and a trust mechanism around it (records, endorsements, and lightweight incentives).`;

  const whatIDid: string[] = [
    "Shaped the product thesis: growth-as-an-asset (“Growth Stock”) with gameplay-style recording and social feedback.",
    "Defined core modules: Growth Events, Growth Curve visualization, Support/Endorse actions, and Talent watchlist.",
    "Drafted UX flows and information model: user Stock, event timeline, support network, and simple ranking signals.",
    "Implemented a working prototype and promo landing to validate interest and collect real user feedback in days.",
    "Designed pilot metrics and a short feedback loop to iterate on event taxonomy, scoring hints, and sharing mechanics.",
  ];

  const architecture: string[] = [
    "Frontend: React + Tailwind CSS; state via Zustand with light localStorage caching for quick MVP iterations.",
    "Sharing & acquisition: qrcode.react integration to generate quick-share Stock/landing QR for on-site growth.",
    "Deployment: Vercel continuous deployment for rapid iteration and cross-device testing.",
    "Data intake: forms + group ops feedback + Google Sheets aggregation for zero-friction data capture.",
    "Planned data layer: Firestore / Supabase for persistent user Stock states and relationship graphs.",
    "Future options: chain-based attestations/NFT certificates for verifiable ‘support’ records (kept optional).",
    "Ops toolchain: lightweight dashboards for event moderation, signal review, and cohort invites (roadmap).",
  ];

  const hasNotes = meta.notes.length > 0;
  const badgeClass =
    meta.status === "Completed"
      ? "bg-orange-600/25 text-orange-100 border-amber-400/40"
      : "bg-amber-600/25 text-amber-100 border-amber-400/40";

  return (
    <div className="relative min-h-screen overflow-hidden">

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0f0a07]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(245,158,11,0.16),transparent_60%),radial-gradient(circle_at_15%_90%,rgba(251,191,36,0.14),transparent_55%),radial-gradient(circle_at_90%_25%,rgba(234,179,8,0.12),transparent_55%)]" />
      </div>

      <Navigation activeSection="product" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">

          <div className="flex items-center justify-between">
            <Link href="/product">
              <Button className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-md border-amber-400/30 text-gray-100 hover:bg-orange-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Product
              </Button>
            </Link>

            {hasNotes && (
              <Button
                onClick={() => setShowNotes(true)}
                className="bg-orange-500/20 border border-amber-400/40 text-orange-100 hover:bg-orange-500/30"
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
                    className="bg-orange-500/20 text-orange-100 border-orange-500/30"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
              <p className="text-gray-200">{meta.practice}</p>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-500/20" />
          </Card>

          {/* Overview */}
          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-amber-400 md:text-2xl">
              Project Overview
            </h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {overview}
            </p>
          </section>

          {/* What I Built */}
          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-amber-400 md:text-2xl">
              What I Built
            </h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {whatIDid.map((line, i) => (
                <li key={i} className="leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </section>

          {/* System Architecture */}
          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-amber-400 md:text-2xl">
              System Architecture & Tech
            </h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {architecture.map((line, i) => (
                <li key={i} className="leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
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
