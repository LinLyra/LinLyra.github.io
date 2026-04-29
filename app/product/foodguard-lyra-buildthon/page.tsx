"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Github } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function FoodGuardBuildthonPage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "foodguard-lyra-buildthon",
    title: "FoodGuard — AI Nutrition & Allergen Assistant",
    institution: "Lyra Buildthon",
    practice: "AI Product · Computer Vision · HealthTech · Nutrition Tracking",
    term: "2025.11",
    status: "Completed" as const,
    role: "Team Project",
    github: "https://github.com/your-username/foodguard",
    notes: [
      "/competition/foodguard.png",
    ],
    tags: ["AI Product", "HealthTech", "Computer Vision", "Nutrition", "Buildthon"],
  };

  const overview =
    `FoodGuard is an AI-powered nutrition and allergen guidance app built for the Lyra Buildthon. The product turns a food photo or receipt into instant, actionable eating guidance, helping users identify ingredients, estimate nutrition, detect potential allergens, and track progress toward personal health goals. Instead of asking users to manually log meals, FoodGuard focuses on low-friction, real-life usage: snap a meal, get nutrition and allergen feedback, receive suggestions, and save progress with one tap. The project targets people with allergies or intolerances, weight-management users, busy professionals, health-conscious users, and people managing dietary risks such as sugar or carbohydrate intake.`;

  const whatIBuilt: string[] = [
    "Defined the core product concept: “Snap a meal. Get allergens and nutrition. Stay on goal.”",
    "Analyzed user pain points around unreadable nutrition labels, fast food decisions, abandoned manual calorie logging, and hidden allergen risks.",
    "Designed the product flow from capture, detection, health assessment, coaching suggestions, and one-tap tracking.",
    "Built key feature logic around image or receipt recognition, allergen detection, nutrition estimation, personalized goals, and progress tracking.",
    "Designed a smart coach experience that gives users portion suggestions, risk flags, food swaps, and daily or weekly strategy feedback.",
    "Explored smart intention inference, using user behavior and image context to infer whether the user wants to log a meal, add an allergen, or set a goal.",
    "Planned future engagement mechanisms including community rewards, streaks, gamified health challenges, premium coaching, and B2B wellness partnerships.",
  ];

  const systemLogic: string[] = [
    "Input layer: user takes a food photo, scans a receipt, or captures available ingredients.",
    "Recognition layer: the system identifies food components, possible portions, nutrition information, and allergen risks.",
    "Assessment layer: detected food is compared with user goals such as calories, macros, sugar intake, or allergy restrictions.",
    "Coach layer: the app returns risk flags, swap suggestions, portion guidance, and personalized nutrition feedback.",
    "Tracking layer: users can save meals into daily and weekly progress without manual calorie logging.",
    "Interaction layer: easy-reach mobile design supports quick capture and one-hand use during real eating moments.",
    "Growth layer: future freemium, premium coaching, campus/gym partnerships, and wellness collaborations support sustainable expansion.",
  ];

  const reflection =
    `This project helped me think about AI product design from the perspective of real user friction.

The most important insight was that users do not want another complicated logging app. They want useful guidance at the exact moment of decision. FoodGuard therefore focused on making the first action as simple as possible: take a photo and get immediate feedback. This shifted the product from “manual health tracking” to “instant food understanding.”

I also learned that health products need to balance accuracy, speed, and emotional reassurance. For users with allergies, the value is not only knowing calories, but avoiding hidden risks. For weight-management users, the value is not only recording food, but receiving simple suggestions that can be acted on immediately. That made the smart coach and allergen detection logic central to the product experience.

Another takeaway was the importance of designing beyond the MVP. The core prototype showed the nutrition scan experience, but the broader product vision included weekly tracking, streaks, community rewards, premium coaching, and B2B wellness partnerships. This made FoodGuard more than a single AI demo—it became a scalable health-tech product concept.

Overall, FoodGuard strengthened my ability to connect computer vision, user behavior, health needs, and product growth strategy into one coherent buildthon project.`;

  const hasNotes = meta.notes.length > 0;

  const badgeClass =
    meta.status === "Completed"
      ? "bg-emerald-600/25 text-emerald-100 border-emerald-400/40"
      : "bg-lime-600/25 text-lime-100 border-lime-400/40";

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#07130f]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(16,185,129,0.18),transparent_60%),radial-gradient(circle_at_12%_90%,rgba(132,204,22,0.16),transparent_55%),radial-gradient(circle_at_90%_25%,rgba(34,197,94,0.14),transparent_55%)]" />
      </div>

      <Navigation activeSection="product" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex items-center justify-between">
            <Link href="/product">
              <Button className="bg-gradient-to-r from-emerald-500/20 to-lime-500/20 backdrop-blur-md border-emerald-400/30 text-gray-100 hover:bg-emerald-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Product
              </Button>
            </Link>

            <div className="flex items-center gap-2">
              {meta.github && (
                <Link href={meta.github} target="_blank">
                  <Button className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-100 hover:bg-emerald-500/30">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub Repo
                  </Button>
                </Link>
              )}

              {hasNotes && (
                <Button
                  onClick={() => setShowNotes(true)}
                  className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-100 hover:bg-emerald-500/30"
                >
                  View More
                </Button>
              )}
            </div>
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

              <div className="mb-3 inline-flex flex-wrap items-center gap-2 text-sm text-gray-300">
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
                    className="bg-emerald-500/20 text-emerald-100 border-emerald-500/30"
                  >
                    {t}
                  </Badge>
                ))}
              </div>

              <p className="text-gray-200">{meta.practice}</p>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-emerald-500/20 via-lime-500/20 to-emerald-500/20" />
          </Card>

          <section className="rounded-xl border border-emerald-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-emerald-400 md:text-2xl">
              Project Overview
            </h2>
            <p className="text-base leading-relaxed text-gray-200">
              {overview}
            </p>
          </section>

          <section className="rounded-xl border border-emerald-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-emerald-400 md:text-2xl">
              What I Built
            </h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {whatIBuilt.map((line, i) => (
                <li key={i} className="leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-emerald-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-emerald-400 md:text-2xl">
              System Logic & Product Flow
            </h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {systemLogic.map((line, i) => (
                <li key={i} className="leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </section>

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