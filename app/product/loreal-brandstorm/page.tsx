"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function LorealBrandstorm2025Page() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "loreal-brandstorm-2025",
    title: "L'Oréal BRANDSTORM 2025",
    institution: "L'Oréal",
    practice: "Marketing · Product Innovation · Pitch",
    term: "2025.04",
    status: "Completed" as const,
    tags: ["Marketing", "Product", "Pitch"],
    notes: ["/product/loreal.png"],
  };

  const overview = `Global youth challenge focused on men’s beauty through tech and product innovation.
I explored community-led growth for men's skincare, built a lightweight product concept with clear positioning,
and crafted a pitch narrative covering insight → concept → channel plan → MVP metrics.`;

  const whatIDid: string[] = [
    "Mapped consumer needs and barriers; defined target personas and core use cases.",
    "Positioned the product and value proposition; drafted naming, messaging, and visual moodboard.",
    "Outlined GTM channels (social, retail partners, KOLs) and a 0–12 month rollout plan with KPIs.",
    "Built a simple unit model for subscription bundle vs. à-la-carte pricing; stress-tested CAC/LTV.",
    "Created a competition-ready pitch deck and demo storyboard; iterated via timed dry-runs.",
  ];

  const reflection = `The biggest lesson was translating vague “innovation” into a focused MVP with measurable learning goals.
Community and content beat heavy feature sets at zero-to-one: a small, credible promise with clear proof points
(e.g., routine adherence, repeat purchase) travels farther than a broad bundle. I also learned to keep the
financials honest—simple sensitivity on CAC, churn, and creator costs quickly shows whether the concept can scale.`;

  const hasNotes = meta.notes.length > 0;
  const badgeClass =
    meta.status === "Completed"
      ? "bg-orange-600/25 text-orange-100 border-amber-400/40"
      : "bg-amber-600/25 text-amber-100 border-amber-400/40";

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#120d08]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(249,115,22,0.18),transparent_60%),radial-gradient(circle_at_12%_90%,rgba(245,158,11,0.16),transparent_55%),radial-gradient(circle_at_90%_25%,rgba(251,191,36,0.12),transparent_55%)]" />
      </div>

      <Navigation activeSection="product" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex items-center justify-between">
            <Link href="/product">
              <Button className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-md border-amber-400/30 text-orange-100 hover:bg-orange-500/30">
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
              <div className="mb-2 flex flex-wrap gap-2">
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

          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-orange-400 md:text-2xl">
              Project Overview
            </h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {overview}
            </p>
          </section>

          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-orange-400 md:text-2xl">
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

          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-orange-400 md:text-2xl">
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
