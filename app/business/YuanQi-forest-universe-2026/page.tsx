"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function GenkiForestCodeEnergyPage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "YuanQi-forest-universe-2026",
    title: "YuanQi Forest Code Energy Water",
    institution: "YuanQiForest",
    practice: "Brand Innovation · Product Strategy · Youth Marketing",
    term: "2025.12",
    role: "Solo",
    status: "Completed" as const,
    award: "Finalist",
    notes: ["/competition/Yuanqi.png"],
    tags: ["Brand Strategy", "Product Innovation", "Youth Marketing"],
  };

  const overview =
    `This project proposed Code Energy Water, a Genki Forest product concept designed for programmers, computer science students, self-learners, and young digital workers. The core insight was that this audience often faces long hours of study, coding, debugging, and screen-based work, but existing drink choices are usually divided between coffee, which feels functional but heavy, and traditional energy drinks, which feel intense and high-pressure. Genki Forest already owns a strong association with zero sugar, lightness, freshness, and low burden, so the project aimed to extend this brand perception into a more specific youth subculture: coding culture. Instead of treating the product as only a beverage, the proposal turned it into a light identity symbol and social interaction experience. Through bottle-label coding challenges, cap QR-code interactions, daily logic tasks, achievement badges, social sharing posters, and campus or workplace leaderboards, Code Energy Water was designed to make “staying clear-minded” not just a functional benefit, but a cultural expression that young programmers can understand, participate in, and share.`;

  const whatIDid: string[] = [
    "Identified programmers, computer science students, self-learning developers, interns, and early-career engineers as a high-potential Genki Forest youth segment with clear beverage needs and strong cultural identity.",
    "Reframed the product opportunity from simple refreshment to a brand experience built around clarity, coding culture, light energy, and social recognition.",
    "Developed the Code Energy Water concept, combining low-sugar refreshing taste, programmer language, bottle-label code challenges, and QR-code based micro-interactions.",
    "Designed three product flavors and emotional usage scenarios, positioning the drink as a long-term companion for coding, studying, debugging, and late-night focus moments.",
    "Created the interactive mechanism of “drink, scan, solve, earn, and share,” allowing each bottle to unlock a lightweight logic challenge and generate a sense of achievement.",
    "Built the campaign experience around daily clarity tasks, energy points, digital badges, personalized sharing posters, campus rankings, workplace rankings, and special event activations.",
    "Structured the final proposal around market insight, user pain points, product highlights, interactive play, social sharing, and brand value, making the idea both creative and commercially explainable.",
  ];

  const reflection =
    `This project helped me understand how product innovation can become more powerful when it is connected to a specific cultural group.

The most important part was not simply designing a new flavor or a new package. It was finding a real emotional and behavioral gap among young programmers: they need focus and refreshment, but they also want to feel understood. Code is not only a tool for them; it is also a language, a lifestyle, and a shared identity. By turning coding challenges, daily clarity, and light achievement into part of the drinking experience, the product became more than water. It became a small ritual that could make users feel seen.

I also learned that strong youth marketing depends on participation. A product can attract attention through visual design, but it becomes memorable when users can interact with it, complete something, and share it with others. The QR-code challenge, clarity badge, energy points, and leaderboard system were designed to make the product naturally spread through daily use instead of relying only on advertising.

Overall, this project strengthened my ability to connect consumer insight, product concept, interaction design, and brand communication into one complete proposal. It trained me to think about how a beverage brand can enter a niche culture without feeling forced, and how a simple product can be turned into a recognizable social symbol.`;

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

            {hasNotes && (
              <Button
                onClick={() => setShowNotes(true)}
                className="bg-green-500/20 border border-green-400/40 text-green-100 hover:bg-green-500/30"
              >
                View More
              </Button>
            )}
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