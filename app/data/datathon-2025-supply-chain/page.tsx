"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Award, Trophy, Video } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function Datathon2025SupplyChainPage() {
  const [showMedia, setShowMedia] = useState(false);

  const meta = {
    slug: "datathon-2025-supply-chain",
    title: "Smart Supply Chain Network Optimisation (Datathon 2025)",
    institution: "University of Sydney · Data Science & Business Analytics Society",
    role: "Team Lead / Principal Modeller",
    term: "2025.10",
    status: "First Place" as const,
    practice: "EDA · Forecasting · Prescriptive Optimisation · Visualisation",
    tags: [
      "Supply Chain",
      "Optimisation",
      "MIP",
      "Gurobi",
      "KMeans",
      "Geospatial",
      "Time Series",
      "Policy Analysis",
    ],
    images: [
      "/competition/dataslide.png",
      "/competition/datacet.png",
      "/competition/team.png",
    ] as string[],
    videos: [
      // e.g. an mp4 exported demo or hosted URL (handled by your MediaModel)
      "/competition/datademo.mp4",
    ] as string[],
  };

  const overview = `Within a 24‑hour datathon, we transformed noisy GPS and pricing records into a
tractable \"hub‑and‑corridor\" network and ran a prescriptive, multi‑objective optimisation
(Gurobi MIP) balancing Cost, On‑time, and CO₂. The project delivered three executable policies,
clear trade‑offs, and artefacts managers can act on.`;

  const highlights: string[] = [
    "1st place out of 50 teams (9 finalists).",
    "500k+ shipment & pricing records cleaned, reconciled, and benchmarked to a baseline network.",
    "Method innovation: KMeans → 12 hubs; each hub links to 3 nearest neighbours; per‑arc cost, expected delay hours, capacity, and a CO₂ proxy (fuel × 3.16 kg CO₂e/L).",
    "Prescriptive multi‑objective optimisation (Gurobi MIP) under capacity, SLA/delay, and emission constraints; weights or hard caps to traverse the frontier.",
    "Three policies: Cost‑first / On‑time‑first / Low‑carbon‑first with small but meaningful trade‑offs on a balanced network.",
  ];

  const methods: string[] = [
    "EDA → segmentation (Risk / Congestion / Weather / Supplier / Port) → grouped tests.",
    "Predictive baselines: Gradient Boosting for cost & delay deviation; time‑series ARIMA & ETS+reconciliation (R²≈0 → prediction alone not robust).",
    "Hub–Corridor network: KMeans clustering to 12 hubs; connect each to 3 nearest; compute arc parameters (c_ij, d_ij, e_ij, capacity).",
    "Prescriptive optimisation: minimise λ₁·Cost + λ₂·Delay + λ₃·CO₂ with supply/demand, flow, capacity, SLA, emission constraints (Gurobi).",
  ];

  const policies = [
    {
      name: "Cost‑first",
      points: [
        "Cheapest spend; flows consolidate on low‑cost corridors.",
        "Trade‑off: weaker on SLA and emissions.",
      ],
    },
    {
      name: "On‑time‑first (recommended)",
      points: [
        "+0.17% cost → −0.82% delay, −0.17% CO₂; best overall balance and customer experience.",
      ],
    },
    {
      name: "Low‑carbon‑first",
      points: [
        "+0.84% cost → −0.24% CO₂; SLA intact; use when ESG caps are binding.",
      ],
    },
  ];

  const results = [
    "Vs our baseline network: Total shipping cost −54%; Avg. delivery deviation −35%; CO₂ proxy −15%.",
    "Deliverables: policy comparison table, three routing schedules, corridor flow maps, and a short exec memo.",
  ];

  const badgeClass =
    meta.status === "First Place"
      ? "bg-amber-500/20 text-amber-100 border-amber-400/40"
      : "bg-blue-600/25 text-blue-100 border-blue-400/40";

  const hasMedia = meta.images.length > 0 || meta.videos.length > 0;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* starfield background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0A0E1A]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(59,130,246,0.18),transparent_60%),radial-gradient(circle_at_12%_88%,rgba(99,102,241,0.16),transparent_55%),radial-gradient(circle_at_88%_22%,rgba(56,189,248,0.14),transparent_55%)]" />
      </div>

      <Navigation activeSection="data" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          {/* top bar */}
          <div className="flex items-center justify-between">
            <Link href="/data">
              <Button className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-md border-blue-400/30 text-gray-100 hover:bg-blue-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Data
              </Button>
            </Link>

            {hasMedia && (
              <Button
                onClick={() => setShowMedia(true)}
                className="bg-amber-500/20 border border-amber-400/40 text-amber-100 hover:bg-amber-500/30"
              >
                <Video className="mr-2 h-4 w-4" /> View Photos & Video
              </Button>
            )}
          </div>

          {/* meta card */}
          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="absolute right-3 top-3 flex items-center gap-2">
              <span className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${badgeClass}`}>
                <Trophy className="mr-1 h-3.5 w-3.5" /> {meta.status}
              </span>
            </div>
            <div className="p-5 md:p-6">
              <h1 className="text-xl md:text-2xl font-semibold text-white mb-1">{meta.title}</h1>
              <div className="mb-2 inline-flex items-center gap-2 text-sm text-gray-300">
                <span>{meta.institution}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4" /> {meta.term}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1"><Award className="h-4 w-4" /> {meta.role}</span>
              </div>
              <div className="mb-3 flex flex-wrap gap-2">
                {meta.tags.map((t) => (
                  <Badge key={t} className="bg-blue-500/20 text-blue-100 border-blue-500/30">{t}</Badge>
                ))}
              </div>
              <p className="text-gray-200">{meta.practice}</p>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-500/20" />
          </Card>

          {/* overview */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">Project Overview</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">{overview}</p>
          </section>

          {/* highlights */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">Highlights</h2>
            <ul className="list-disc space-y-2 pl-5 text-gray-200">
              {highlights.map((h, i) => (
                <li key={i} className="leading-relaxed">{h}</li>
              ))}
            </ul>
          </section>

          {/* methods */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">Methods</h2>
            <ul className="list-disc space-y-2 pl-5 text-gray-200">
              {methods.map((m, i) => (
                <li key={i} className="leading-relaxed">{m}</li>
              ))}
            </ul>
          </section>

          {/* policies */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">Policies & Trade‑offs</h2>
            <div className="grid gap-4 md:grid-cols-3">
              {policies.map((p) => (
                <Card key={p.name} className="border-blue-400/20 bg-white/5 p-4">
                  <h3 className="mb-2 font-semibold text-white">{p.name}</h3>
                  <ul className="list-disc pl-5 text-gray-200 space-y-1">
                    {p.points.map((pt, i) => (
                      <li key={i} className="text-sm leading-relaxed">{pt}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </section>

          {/* results */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">Results & Deliverables</h2>
            <ul className="list-disc space-y-2 pl-5 text-gray-200">
              {results.map((r, i) => (
                <li key={i} className="leading-relaxed">{r}</li>
              ))}
            </ul>
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
