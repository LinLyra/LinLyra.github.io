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
    title: "Men’s Beauty Tech Concept",
    institution: "L'Oréal",
    practice: "Marketing · Product Innovation · Pitch",
    term: "2025.04",
    tags: ["Marketing", "Product", "Pitch"],
    notes: ["/competition/loreal.png"],
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


  const reflection: string[] = [
    `The biggest lesson was translating vague “innovation” into a focused MVP with measurable learning goals. Community and content beat heavy feature sets at zero-to-one: a small, credible promise with clear proof points travels farther than a broad bundle.`,
    `I kept the financials honest with simple sensitivity on CAC, churn, and creator costs—this quickly shows whether the concept can scale. Next iteration, I’d pre-wire a mini experiment plan (retention cohort + referral lift) and a lean BOM to align product, channel, and unit economics from day one.`,
  ];

  const hasNotes = meta.notes.length > 0;

  return (
    <div className="relative min-h-screen overflow-hidden">

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#07130f]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(16,185,129,0.18),transparent_60%),radial-gradient(circle_at_12%_90%,rgba(20,184,166,0.14),transparent_55%),radial-gradient(circle_at_90%_25%,rgba(34,197,94,0.12),transparent_55%)]" />
      </div>

      <Navigation activeSection="business" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex items-center justify-between">
            <Link href="/business">
              <Button className="border border-emerald-400/30 text-emerald-200 hover:bg-white/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Business
              </Button>
            </Link>

            {hasNotes && (
              <Button
                onClick={() => setShowNotes(true)}
                className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-100 hover:bg-emerald-500/30"
              >
                View more
              </Button>
            )}
          </div>

          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
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
                    className="bg-emerald-500/14 text-emerald-100 border-emerald-400/25"
                  >
                    {t}
                  </Badge>
                ))}
              </div>

              <p className="text-gray-200">{meta.practice}</p>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20" />
          </Card>

          <section className="rounded-xl border border-emerald-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6 overflow-visible">
            <h2 className="mb-3 text-xl font-semibold text-emerald-300 md:text-2xl">
              Project Overview
            </h2>
            <p className="whitespace-pre-wrap break-words text-base leading-relaxed text-gray-200">
              {overview}
            </p>
          </section>


          <section className="rounded-xl border border-emerald-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6 overflow-visible">
            <h2 className="mb-3 text-xl font-semibold text-emerald-300 md:text-2xl">
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


          <section className="rounded-xl border border-emerald-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6 overflow-visible">
            <h2 className="mb-3 text-xl font-semibold text-emerald-300 md:text-2xl">
              Reflection
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-gray-200 whitespace-pre-wrap break-words">
              {reflection.map((para, i) => (
                <p key={i}>{para}</p>
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

