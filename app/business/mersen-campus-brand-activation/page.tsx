"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function MersenCampusChallengePage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "mersen-campus-challenge-2026",
    title: "Mersen Campus Challenge 2026",
    institution: "Mersen China",
    practice: "Employer Branding · Campaign Strategy · Industrial Branding",
    term: "2026.04",
    role: "Solo",
    status: "Completed" as const,
    award: "🏅 Top 10",
    notes: ["/competition/mersen.png"],
    tags: ["Employer Branding", "Campaign Strategy", "Industrial Brand"],
  };

  const overview =
    `This project focused on employer branding strategy for Mersen, a global expert in electrical systems and advanced materials. The core challenge was not a lack of technical strength, but a lack of public perception. As a typical B2B industrial company, Mersen plays a critical role in enabling safety, efficiency, and sustainability across modern industrial systems, yet for students its value remains largely invisible. We therefore approached the brief as a perception design problem: how do you make an "invisible but essential" company emotionally legible to young talent? Our solution centered on the employer-brand keyword "Invisible Guardian" and proposed an integrated campaign built around one core creative question: What if the world lost Mersen for 24 hours? Based on this concept, we designed a three-layer activation path including online interactive simulation to visualize system failure without protection, offline immersive campus installations to demonstrate hidden industrial value, and recruitment conversion mechanisms that turn brand understanding into career identification. Rather than simply positioning Mersen as professional or innovative, the project translated its technical role into a memorable identity: a hidden force that quietly protects how the world runs.`;

  const whatIDid: string[] = [
    "Led the team in reframing the brief from a conventional event-planning task into an employer-brand perception challenge, clarifying that the real issue was visibility rather than capability.",
    "Conducted strategic analysis on B2B industrial branding and identified the communication gap between Mersen’s system-level value and students’ low-sensation perception of industrial companies.",
    "Extracted the core employer-brand keyword 'Invisible Guardian' to unify Mersen’s technical role, industrial importance, and emotional positioning into one memorable concept.",
    "Developed the campaign’s central creative proposition—'What if the world lost Mersen for 24 hours?'—to transform abstract industrial value into a vivid, experience-based narrative.",
    "Designed a three-stage user journey covering awareness, immersion, and conversion, including online failure simulation, offline campus installations, and identity-based recruitment engagement.",
    "Structured the proposal so that campaign creativity remained tied to employer-brand objectives, ensuring the solution functioned not only as a communication concept but also as a recruitment funnel.",
    "Built the presentation logic, messaging hierarchy, and narrative flow, balancing strategic insight, brand consistency, user empathy, and execution feasibility in the final output.",
  ];

  const reflection =
    `This project strengthened my ability to translate abstract business value into audience-facing brand strategy.

What stood out most was how different industrial branding is from consumer branding. Mersen does not suffer from weak fundamentals—it suffers from low visibility. That forced me to think beyond slogans and focus on perception design: what exactly do students fail to see, and how can strategy make that hidden value understandable, memorable, and relevant?

I also learned that strong employer branding requires more than creative language. A good concept must connect insight, message, experience, and conversion. In this project, that meant moving from a single keyword to a full campaign mechanism that could attract attention, build memory, and support recruitment outcomes.

Another important takeaway was the value of strategic simplification. Mersen’s business is technically complex, but the communication challenge was not solved by adding more information. It was solved by identifying the most resonant truth behind the brand and building the campaign around it. The idea of the "Invisible Guardian" gave the project a strategic center that aligned brand identity, user understanding, and activation design.

Overall, this experience sharpened my ability to work across business insight, user perception, and campaign architecture. It trained me to turn low-visibility strengths into compelling narratives that people can not only understand, but remember—and act on.`;

  const hasNotes = meta.notes.length > 0;

  const statusPill =
    meta.status === "Completed"
      ? "bg-green-600/25 text-green-100 border-green-400/40"
      : "bg-emerald-600/25 text-emerald-100 border-emerald-400/40";

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="business" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
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

          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="absolute right-3 top-3 flex gap-2">
              <span
                className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${statusPill}`}
              >
                {meta.status}
              </span>

              {meta.award && (
                <span className="inline-flex items-center h-6 rounded-full px-2.5 text-xs border border-amber-300/40 bg-amber-500/20 text-amber-100">
                  🏅 {meta.award}
                </span>
              )}
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
                <span>• {meta.role}</span>
              </div>

              <div className="mb-2 flex flex-wrap gap-2">
                {meta.tags.map((t) => (
                  <Badge
                    key={t}
                    className="bg-green-500/20 text-green-100 border-green-500/30"
                  >
                    {t}
                  </Badge>
                ))}
              </div>

              <p className="text-gray-200">{meta.practice}</p>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20" />
          </Card>

          <section className="rounded-xl border border-green-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-green-400 md:text-2xl">
              Project Overview
            </h2>
            <p className="text-base leading-relaxed text-gray-200">
              {overview}
            </p>
          </section>

          <section className="rounded-xl border border-green-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-green-400 md:text-2xl">
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

          <section className="rounded-xl border border-green-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-green-400 md:text-2xl">
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