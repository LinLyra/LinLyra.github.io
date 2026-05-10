"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Github } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function AussieAdventurePage() {
  const [showMedia, setShowMedia] = useState(false);

  const meta = {
    slug: "aussie-adventure",
    title: "Aussie Adventure — Travel AI meets Fashion",
    institution: "Travel · AI · Fashion",
    practice: "Vision color palette · Outfit recommendation · Next.js prototype",
    term: "2025.09",
    role: "Team Lead",
    tags: ["Travel", "Recommender", "Color Palette", "Weather API"],
    images: [
      "/competition/aussie1.png",
    ] as string[],
    links: {
      github: "https://github.com/LinLyra/Aussie-Adventure-Stylist",
    },
  };

  const overview =
    "Aussie Adventure is a travel–fashion prototype that turns landscape photos into wearable palettes. It extracts 5 key colors and high-level scene tags from destination images, then blends activity (e.g., walking, hiking, dining) with weather to propose 2–3 concise outfit ideas. The goal is speed and delight: get a “looks-right” suggestion in seconds, with one-line explanations that feel human, not robotic. The UI favors quick tweaks—swap a color, change an activity, or toggle layers—so users can nudge results without starting over. The system is intentionally lightweight, designed to be embedded into a trip planner or a retailer’s inspiration page.";

  const whatIDid: string[] = [
    "Drove scoping and user research; mapped how travelers currently plan outfits for multi-activity days and weather uncertainty.",
    "Designed the end-to-end UX: upload → palette extraction → activity & weather constraints → 2–3 outfits → one-line explanations.",
    "Implemented a simple rules core that mixes palette mood with practicality (breathability, layers, shoes), avoiding heavy taxonomies.",
    "Built a clean Next.js + Tailwind interface with chip-based controls and a lightweight editor for color swap / activity switch.",
    "Authored explanation templates with tone control; kept copy under ~140 chars so it reads like a friendly stylist, not a spec sheet.",
    "Set up quick user-style pilots to test timing, clarity, and satisfaction; iterated on defaults for color prominence and layer choice.",
    "Outlined integration paths for ‘shop the look’ (e-commerce APIs) and feedback loops (accept/reject) to personalize over time.",
  ];

  const reflection =
    "Turning photos into palettes is delightful, but guardrails matter. Simple, readable tags beat deep hierarchies when the goal is fast inspiration. One crisp line of “why this works” consistently outperformed long paragraphs in user feedback, and small editor affordances (swap a color, toggle layers) made the system feel collaborative rather than prescriptive. If I extend this, I would: (1) plug in e-commerce APIs for instant “shop the look”, (2) learn from accept/reject signals to tune palette prominence and tone, and (3) add a packing-list view that rolls daily outfits into a compact, weather-aware set of items.";

  const hasImages = meta.images.length > 0;

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* bg */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#07111F]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.28),transparent_58%),radial-gradient(circle_at_12%_88%,rgba(14,165,233,0.18),transparent_55%),radial-gradient(circle_at_88%_22%,rgba(59,130,246,0.16),transparent_55%)]" />
      </div>

      <Navigation activeSection="product" onSectionChange={() => {}} />

      <div className="relative z-10 p-6 pt-16 md:pt-20">
        <div className="mx-auto max-w-5xl space-y-6">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <Link href="/product">
              <Button className="border border-blue-400/30 text-sky-200 hover:bg-white/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Product
              </Button>
            </Link>

            <div className="flex items-center gap-2">
              {meta.links.github && (
                <Link href={meta.links.github} target="_blank" rel="noreferrer">
                  <Button className="bg-blue-500/20 border border-blue-300/40 text-blue-100 hover:bg-blue-500/30">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
              )}
              {hasImages && (
                <Button
                  onClick={() => setShowMedia(true)}
                  className="bg-blue-500/20 border border-blue-300/40 text-blue-100 hover:bg-blue-500/30"
                >
                  View more
                </Button>
              )}
            </div>
          </div>

          {/* Header card */}
          <Card className="relative overflow-hidden border-blue-200/20 bg-white/10 backdrop-blur-md">
            <div className="p-5 md:p-6">
              <h1 className="mb-1 text-xl font-semibold text-white md:text-2xl">
                {meta.title}
              </h1>

              <div className="mb-3 inline-flex flex-wrap items-center gap-2 text-sm text-blue-100/80">
                <span>{meta.institution}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {meta.term}
                </span>
                <span>•</span>
                <span>Role: {meta.role}</span>
              </div>

              <div className="mb-2 flex flex-wrap gap-2">
                {meta.tags.map((t) => (
                  <Badge key={t} className="bg-blue-500/15 text-blue-100 border-blue-300/25">
                    {t}
                  </Badge>
                ))}
              </div>

              <p className="text-blue-50/90">{meta.practice}</p>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-blue-500/30 via-sky-400/40 to-indigo-500/30" />
          </Card>

          {/* Overview */}
          <section className="rounded-xl border border-blue-200/15 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-50 md:text-2xl">
              Project Overview
            </h2>
            <p className="text-base leading-relaxed text-blue-50/85">{overview}</p>
          </section>

          {/* What I Did */}
          <section className="rounded-xl border border-blue-200/15 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-50 md:text-2xl">
              What I Did
            </h2>
            <ul className="list-disc space-y-3 pl-5 text-blue-50/85">
              {whatIDid.map((line, i) => (
                <li key={i} className="leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </section>

          {/* Reflection */}
          <section className="rounded-xl border border-blue-200/15 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-50 md:text-2xl">
              Reflection
            </h2>
            <p className="text-base leading-relaxed text-blue-50/85">{reflection}</p>
          </section>
        </div>
      </div>

      {hasImages && (
        <MediaModel
          isOpen={showMedia}
          onClose={() => setShowMedia(false)}
          title={meta.title}
          media={{ images: meta.images }}
        />
      )}
    </div>
  );
}
