"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Award, Trophy, Video, Github } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function Datathon2025SupplyChainPage() {
  const [showMedia, setShowMedia] = useState(false);

  const meta = {
    slug: "datathon-2025-supply-chain",
    title: "Smart Supply Chain Network Optimisation (Datathon 2025)",
    institution: "University of Sydney · Data Science & Business Analytics Society",
    role: "Principal Modeller",
    term: "2025.10",
    status: "First Place" as const,
    practice: "EDA · Forecasting · Prescriptive Optimisation · Visualisation",
    tags: ["Supply Chain", "Optimisation", "MIP", "Gurobi", "Geospatial"],
    images: [
      "/competition/dataslide.png",
      "/competition/datacet.png",
    ] as string[],
    videos: ["/competition/datademo.mp4"] as string[],
    links: {
      github: "https://github.com/yourname/2025-Datathon", 
    },
  };

  const overview = `Strategy case under a 24-hour datathon. We turned noisy GPS & pricing data
into an analysable hub-and-corridor view and produced a clear decision story:
three executable policies, trade-offs managers can reason about, and maps/schedules
that make the outcome tangible.`;

  const whatIDid: string[] = [
    "Led the analytics & modelling: baseline diagnostics, segmentation, KPIs.",
    "Built the optimisation artefacts & visuals: policy tables, corridor maps, schedules.",
    "Shaped the narrative: executive storyline, trade-off framing, and final delivery.",
  ];

  const highlights: string[] = [
    "🏆 1st place out of 50 teams (9 finalists).",
    "500k+ shipment & pricing records; reproducible baseline and KPIs.",
    "Three policies with small but meaningful trade-offs (Cost / On-time / CO₂).",
  ];

  const reflection = `The small deltas across policies signalled a relatively balanced network.
Clear framing and legible artefacts mattered as much as algorithms:
policy tables, route maps, and a concise storyline helped the decision land.`;

  const badgeClass =
    meta.status === "First Place"
      ? "bg-amber-500/20 text-amber-100 border-amber-400/40"
      : "bg-blue-600/25 text-blue-100 border-blue-400/40";

  const hasMedia = meta.images.length > 0 || meta.videos.length > 0;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0A0E1A]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(59,130,246,0.18),transparent_60%),radial-gradient(circle_at_12%_88%,rgba(99,102,241,0.16),transparent_55%),radial-gradient(circle_at_88%_22%,rgba(56,189,248,0.14),transparent_55%)]" />
      </div>

      <Navigation activeSection="data" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          {/* top bar */}
          <div className="flex items-center justify-between gap-3">
            <Link href="/data">
              <Button className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-md border-blue-400/30 text-gray-100 hover:bg-blue-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Data
              </Button>
            </Link>

            <div className="flex items-center gap-2">
              {meta.links.github && (
                <Link href={meta.links.github} target="_blank" rel="noreferrer">
                  <Button className="bg-white/10 border border-white/20 text-gray-100 hover:bg-white/20">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
              )}
              {hasMedia && (
                <Button
                  onClick={() => setShowMedia(true)}
                  className="bg-amber-500/20 border border-amber-400/40 text-amber-100 hover:bg-amber-500/30"
                >
                  <Video className="mr-2 h-4 w-4" />
                  Photos / Video
                </Button>
              )}
            </div>
          </div>

          {/* meta card */}
          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="absolute right-3 top-3 flex items-center gap-2">
              <span
                className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${badgeClass}`}
              >
                <Trophy className="mr-1 h-3.5 w-3.5" /> {meta.status}
              </span>
            </div>
            <div className="p-5 md:p-6">
              <h1 className="text-xl md:text-2xl font-semibold text-white mb-1">
                {meta.title}
              </h1>
              <div className="mb-2 inline-flex items-center gap-2 text-sm text-gray-300">
                <span>{meta.institution}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {meta.term}
                </span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Award className="h-4 w-4" /> {meta.role}
                </span>
              </div>
              <div className="mb-3 flex flex-wrap gap-2">
                {meta.tags.map((t) => (
                  <Badge
                    key={t}
                    className="bg-blue-500/20 text-blue-100 border-blue-500/30"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
              <p className="text-gray-200">{meta.practice}</p>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-500/20" />
          </Card>

          {/* Project Overview */}
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
              {whatIDid.map((line, i) => (
                <li key={i} className="leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </section>

          {/* Highlights (compact) */}
          <section className="rounded-xl border border-emerald-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-emerald-400 md:text-2xl">
              Highlights
            </h2>
            <ul className="list-disc space-y-2 pl-5 text-gray-200">
              {highlights.map((h, i) => (
                <li key={i} className="leading-relaxed">
                  {h}
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

      {hasMedia && (
        <MediaModel
          isOpen={showMedia}
          onClose={() => setShowMedia(false)}
          title={meta.title}
          media={{ images: meta.images, videos: meta.videos }}
        />
      )}
    </div>
  );
}
