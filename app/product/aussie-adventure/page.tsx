"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Github, Video } from "lucide-react";
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
      github: "https://github.com/yourname/Aussie-Adventure-Stylist", 
    },
  };

  const overview = `We built a travel–fashion prototype that turns landscapes into outfit palettes.
The system extracts colors from destination photos (Vision) and combines activity + weather
to recommend outfits with short, human-friendly explanations.`;

  const whatIDid: string[] = [
    "Led scoping and user interviews; mapped manual workflows for trip outfits.",
    "Designed end-to-end flow (upload → palette → rules → explanations → UI).",
    "Built a clean Next.js + Tailwind prototype with a lightweight editor panel.",
    "Implemented palette extraction (Vision-inspired) and activity/weather rules.",
    "Defined evaluation notes and ran quick user-style pilots for clarity & timing.",
  ];


  const reflection = `Turning photos into palettes felt delightful, but guardrails matter:
simple tags beat heavy schemas; clear, short explanations beat verbose copy.
If iterating, I’d plug in e-commerce APIs for “shop the look” and learn from
accept/reject feedback to personalize over time.`;

  const hasMedia = meta.images.length > 0 || meta.videos.length > 0;
  const statusClass =
    meta.status === "Completed"
      ? "bg-emerald-500/20 text-emerald-100 border-emerald-400/30"
      : "bg-orange-500/20 text-orange-100 border-orange-400/30";

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Starry background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#0b0b0f]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(147,197,253,0.12),transparent_60%),radial-gradient(circle_at_12%_88%,rgba(99,102,241,0.12),transparent_55%),radial-gradient(circle_at_90%_22%,rgba(168,85,247,0.1),transparent_55%)]" />
      </div>

      <Navigation activeSection="product" onSectionChange={() => {}} />

      <div className="relative z-10 p-6 pt-16 md:pt-20">
        <div className="mx-auto max-w-5xl space-y-6">
          {/* top bar */}
          <div className="flex items-center justify-between">
            <Link href="/product">
              <Button className="bg-white/10 border border-white/20 text-gray-100 hover:bg-white/15">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Product
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
                  className="bg-white/10 border border-white/20 text-gray-100 hover:bg-white/15"
                >
                  <Video className="mr-2 h-4 w-4" />
                  View More
                </Button>
              )}
            </div>
          </div>

          {/* Header card */}
          <Card className="relative overflow-hidden border-white/15 bg-white/8 backdrop-blur-md">
            <div className="absolute right-3 top-3 flex items-center gap-2">
              <span
                className={`inline-flex h-6 items-center rounded-full px-2.5 text-xs border ${statusClass}`}
              >
                {meta.status}
              </span>
            </div>

            <div className="p-5 md:p-6">
              <h1 className="mb-1 text-xl md:text-2xl font-semibold text-white">
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
                  <Badge
                    key={t}
                    className="border-indigo-400/30 bg-indigo-500/20 text-indigo-100"
                  >
                    {t}
                  </Badge>
                ))}
              </div>

              <p className="text-gray-200">{meta.practice}</p>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-fuchsia-500/20" />
          </Card>

          {/* Project Overview */}
          <section className="rounded-xl border border-white/15 bg-white/8 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-indigo-300 md:text-2xl">
              Project Overview
            </h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {overview}
            </p>
          </section>

          {/* What I Did */}
          <section className="rounded-xl border border-white/15 bg-white/8 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-indigo-300 md:text-2xl">
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
          <section className="rounded-xl border border-white/15 bg-white/8 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-indigo-300 md:text-2xl">
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
