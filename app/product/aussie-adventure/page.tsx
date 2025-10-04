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
    status: "Completed" as const,
    role: "Team Lead",
    tags: ["Travel", "Recommender", "Color Palette", "Weather API"],
    images: [
      "/projects/aussie-adventure/1.png",
      "/projects/aussie-adventure/2.png",
      "/projects/aussie-adventure/3.png",
    ] as string[],
    videos: ["/media/aussie-adventure-demo.mp4"] as string[],
    links: {
      github: "https://github.com/LinLyra/Aussie-Adventure-Stylist",
    },
  };

  const overview = `Aussie Adventure is a travel–fashion prototype that turns landscape photos into wearable palettes. It extracts 5 key colors and high-level scene tags from destination images, then blends activity (e.g., walking, hiking, dining) with weather to propose 2–3 concise outfit ideas. The goal is speed and delight: get a “looks-right” suggestion in seconds, with one-line explanations that feel human, not robotic. The UI favors quick tweaks—swap a color, change an activity, or toggle layers—so users can nudge results without starting over. The system is intentionally lightweight, designed to be embedded into a trip planner or a retailer’s inspiration page.`;

  const whatIDid: string[] = [
    "Drove scoping and user research; mapped how travelers currently plan outfits for multi-activity days and weather uncertainty.",
    "Designed the end-to-end UX: upload → palette extraction → activity & weather constraints → 2–3 outfits → one-line explanations.",
    "Implemented a simple rules core that mixes palette mood with practicality (breathability, layers, shoes), avoiding heavy taxonomies.",
    "Built a clean Next.js + Tailwind interface with chip-based controls and a lightweight editor for color swap / activity switch.",
    "Authored explanation templates with tone control; kept copy under ~140 chars so it reads like a friendly stylist, not a spec sheet.",
    "Set up quick user-style pilots to test timing, clarity, and satisfaction; iterated on defaults for color prominence and layer choice.",
    "Outlined integration paths for ‘shop the look’ (e-commerce APIs) and feedback loops (accept/reject) to personalize over time.",
  ];

  const reflection = `Turning photos into palettes is delightful, but guardrails matter. Simple, readable tags beat deep hierarchies when the goal is fast inspiration. One crisp line of “why this works” consistently outperformed long paragraphs in user feedback, and small editor affordances (swap a color, toggle layers) made the system feel collaborative rather than prescriptive. If I extend this, I would: (1) plug in e-commerce APIs for instant “shop the look”, (2) learn from accept/reject signals to tune palette prominence and tone, and (3) add a packing-list view that rolls daily outfits into a compact, weather-aware set of items.`;

  const hasImages = meta.images.length > 0;

  const statusClass =
    meta.status === "Completed"
      ? "bg-amber-500/20 text-amber-100 border-amber-400/30"
      : "bg-orange-500/20 text-orange-100 border-orange-400/30";

  return (
    <div className="relative min-h-screen overflow-hidden">

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0d0a07]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(245,158,11,0.15),transparent_60%),radial-gradient(circle_at_12%_88%,rgba(251,191,36,0.12),transparent_55%),radial-gradient(circle_at_90%_22%,rgba(234,179,8,0.1),transparent_55%)]" />
      </div>

      <Navigation activeSection="product" onSectionChange={() => {}} />

      <div className="relative z-10 p-6 pt-16 md:pt-20">
        <div className="mx-auto max-w-5xl space-y-6">

          <div className="flex items-center justify-between">
            <Link href="/product">
              <Button className="border-amber-400/30 bg-amber-500/10 text-gray-100 backdrop-blur-md hover:bg-amber-500/20">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Product
              </Button>
            </Link>

            <div className="flex items-center gap-2">
              {meta.links.github && (
                <Link href={meta.links.github} target="_blank" rel="noreferrer">
                  <Button className="border-amber-400/30 bg-amber-500/10 text-gray-100 hover:bg-amber-500/20">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
              )}
              {hasImages && (
                <Button
                  onClick={() => setShowMedia(true)}
                  className="border-amber-400/30 bg-amber-500/10 text-gray-100 hover:bg-amber-500/20"
                >
                  View More
                </Button>
              )}
            </div>
          </div>

 
          <Card className="relative overflow-hidden border-amber-400/25 bg-white/10 backdrop-blur-md">
            <div className="absolute right-3 top-3 flex items-center gap-2">
              <span className={`inline-flex h-6 items-center rounded-full px-2.5 text-xs border ${statusClass}`}>
                {meta.status}
              </span>
            </div>

            <div className="p-5 md:p-6">
              <h1 className="mb-1 text-xl font-semibold text-white md:text-2xl">
                {meta.title}
              </h1>

              <div className="mb-3 inline-flex flex-wrap items-center gap-2 text-sm text-gray-300">
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
                  <Badge key={t} className="border-amber-400/30 bg-amber-500/20 text-amber-100">
                    {t}
                  </Badge>
                ))}
              </div>

              <p className="text-gray-200">{meta.practice}</p>
            </div>
          </Card>

          {/* Overview */}
          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-amber-300 md:text-2xl">
              Project Overview
            </h2>

            <p className="text-base leading-relaxed text-gray-200">{overview}</p>
          </section>

          {/* What I Did */}
          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-amber-300 md:text-2xl">
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

          {/* Reflection */}
          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-amber-300 md:text-2xl">
              Reflection
            </h2>

            <p className="text-base leading-relaxed text-gray-200">{reflection}</p>
          </section>

   
          {meta.videos.length > 0 && (
            <section className="rounded-xl border border-amber-400/20 bg-white/10 p-4 md:p-5 backdrop-blur-md">
              <h2 className="mb-3 text-lg font-semibold text-amber-300 md:text-xl">
                Demo
              </h2>
              <div className="mx-auto w-full md:w-1/2">
                <div className="relative aspect-video overflow-hidden rounded-lg border border-amber-400/30 bg-black/40">
                  <video
                    src={meta.videos[0]}
                    className="h-full w-full object-contain"
                    controls
                    preload="metadata"
             
                  />
                </div>
              </div>
            </section>
          )}
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
