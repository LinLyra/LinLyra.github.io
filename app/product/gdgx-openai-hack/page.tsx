"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ExternalLink, Github } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function GDGOpenAIHackNodeAustraliaPage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "gdg-openai-hack-node-au",
    title: "GDG × OpenAI Hack Node Australia — YOLO (Full-stack Upgrade)",
    institution: "GDG • OpenAI (co-hosted with MIT Sloan AI Club)",
    practice: "Full-stack · Social App · Tokenized Growth (GXP / Circles / Missions / Scout)",
    term: "2025.08",
    status: "Completed" as const,
    notes: [
      "/competition/gdg.png",
      "/competition/gdg1.png",
      "/competition/gdg2.png",
    ] as string[],
    tags: [
      "Full-stack",
      "GXP",
      "Circles",
      "Missions",
      "YOLO Token",
      "Next.js",
      "Go",
      "PostgreSQL",
    ],
  };

  const overview = `Second Global AI Hackathon node in Australia. I rebuilt the AdventureX prototype
into “YOLO·AU”: a growth-as-asset social app where every builder has a personal token (YOLO),
and behavior generates GXP to unlock permissions and ranking. New modules include Growth Circles
(community/DAO-like spaces), Missions (challenge engine), and a lightweight Scout dashboard for investors.`;

  const whatIBuilt: string[] = [
    "Designed growth primitives: personal YOLO token + GXP reputation; permission unlocks from GXP tiers.",
    "Implemented Circles (community spaces) with leaderboards and mock voting; Missions for weekly challenges.",
    "Shipped Scout console: watchlists, basic trend signals (GXP delta, token holder changes, task finish rate).",
    "Front-end in Next.js/React + Tailwind + Zustand; auth via email/username (Auth.js or mock).",
    "API in Go (Gin/Fiber) + PostgreSQL (via GORM/SQLC); Prisma alternative path documented for Node stack.",
    "Event timeline & assets: growth events (projects/awards) unify into a user ‘growth graph’ used by ranking.",
  ];

  const reflection = `I treated “growth” as a first-class asset: actions mint reputation (GXP), support mints price
signals (YOLO), and both feed discovery. Operations-wise I validated acquisition loops (missions + circles)
and drafted anti-gaming limits (caps, daily GXP budget). This upgrade made the prototype coherent for
early users (builders, scouts) and clarified a path from vibe hacking to a defensible product thesis.`;

  const hasNotes = meta.notes.length > 0;
  const badgeClass =
    meta.status === "Completed"
      ? "bg-amber-600/25 text-amber-100 border-amber-400/40"
      : "bg-orange-600/25 text-orange-100 border-orange-400/40";

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* orange nebula background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#120c07]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(251,146,60,0.18),transparent_60%),radial-gradient(circle_at_12%_85%,rgba(245,158,11,0.14),transparent_55%),radial-gradient(circle_at_90%_20%,rgba(234,88,12,0.12),transparent_55%)]" />
      </div>

      <Navigation activeSection="product" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          {/* top bar */}
          <div className="flex items-center justify-between">
            <Link href="/product">
              <Button className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-md border-amber-400/30 text-gray-100 hover:bg-orange-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Product
              </Button>
            </Link>

            <div className="flex items-center gap-2">
              {hasNotes && (
                <Button
                  onClick={() => setShowNotes(true)}
                  className="bg-orange-500/20 border border-amber-400/40 text-amber-100 hover:bg-orange-500/30"
                >
                  View More
                </Button>
              )}

              {/* GitHub repo button */}
              <a
                href="https://github.com/LinLyra/global-accelerator-2025"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  className="bg-white/10 border border-white/20 text-gray-100 hover:bg-white/20"
                  aria-label="Open GitHub Repository"
                >
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                  <ExternalLink className="ml-1 h-3 w-3 opacity-80" />
                </Button>
              </a>
            </div>
          </div>

          {/* meta card */}
          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="absolute right-3 top-3">
              <span className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${badgeClass}`}>
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
                  <Badge key={t} className="border-amber-500/30 bg-orange-500/20 text-amber-100">
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
            <h2 className="mb-3 text-xl font-semibold text-amber-400 md:text-2xl">Project Overview</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">{overview}</p>
          </section>

          {/* What I Built */}
          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-amber-400 md:text-2xl">What I Built</h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {whatIBuilt.map((line, i) => (
                <li key={i} className="leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </section>


          {/* Reflection */}
          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-amber-400 md:text-2xl">Reflection</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">{reflection}</p>
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
