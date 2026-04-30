"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function XueTuHackathonPage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "xuetu-hackathon",
    title: "XueTu — Offline Tutoring Match & Trust Platform",
    institution: "Global Hackathon Tour",
    practice: "Product Design · Matching Platform · Trust System",
    term: "2026.01",
    status: "Completed" as const,
    role: "Co-founder",
    repoUrl: "https://github.com/your-username/xuetu",
    notes: [
      "/competition/xuetu.png",
      "/competition/xuetu-1.png",
      "/competition/xuetu-2.png",
      "/competition/xuetu-3.png",
    ],
    tags: ["AI Hackathon", "Education", "Marketplace", "Trust System"],
  };

  const overview =
    `XueTu is an intelligent matching and trust-guarantee platform designed for offline tutoring scenarios between university students and families. The project focuses on a real but often overlooked problem: finding a suitable tutor is still inefficient, fragmented, and risky. Parents usually rely on WeChat groups, agencies, or scattered information posts, while student tutors face unclear locations, high communication costs, and limited trust-building channels. XueTu aims to rebuild the first tutoring experience by combining location-based matching, structured tutor profiles, personality-fit assessment, transparent pricing, trial-class booking, attendance records, and two-way reviews. The core product positioning is simple: make every tutoring relationship feel reliable from the very first meeting.`;

  const whatIBuilt: string[] = [
    "Defined the product positioning: a service aggregation and trust-guarantee platform for university student offline tutoring scenarios.",
    "Analyzed the current pain points of tutoring supply and demand, including fragmented information, low matching efficiency, high agency costs, weak trust mechanisms, and lack of service records.",
    "Designed the parent-side experience, including tutor discovery, map-based search, tutor profile, personality-fit test, trial-class booking, payment flow, order tracking, and review system.",
    "Designed the student-side experience, including nearby order discovery, order details, navigation, trial-class records, income tracking, profile editing, qualification upload, and service history.",
    "Built the product logic around four reconstruction points: upgraded matching accuracy, personality-fit mechanism, location-based efficient matching, and fulfillment-review trust loop.",
    "Planned the platform business model around first trial-class commission, with a lower long-term burden than traditional tutoring agencies and no repeated extraction from long-term offline classes.",
    "Created the hackathon presentation narrative, product poster, UI flow, and value proposition to clearly explain why the platform solves a concrete and neglected real-world problem.",
  ];

  const systemArchitecture: string[] = [
    "Matching layer: combines subject, grade, location, price, availability, teaching preference, and personality-fit indicators.",
    "Trust layer: stores trial-class booking, check-in records, course feedback, accumulated teaching hours, and two-way reviews.",
    "Parent side: supports tutor search, map view, tutor comparison, booking, payment, order management, and learning-style assessment.",
    "Student side: supports nearby demand discovery, order acceptance, navigation, earnings, profile management, and qualification uploads.",
    "Commercial model: takes a small commission from the first verified trial lesson, while long-term offline classes are not repeatedly charged.",
    "Growth strategy: starts from 1–2 university communities, builds high-quality tutor supply first, then acquires parents through local communities and trust-oriented content.",
    "Future expansion: can evolve into a local education service marketplace with verified student tutors, transparent pricing, and accumulated reputation assets.",
  ];

  const reflection =
    `This project strengthened my understanding of how product design can solve a very local but highly real service problem.

The most important insight was that offline tutoring is not only a matching problem. It is also a trust problem. Parents care about whether the tutor is reliable, whether the child can get along with the tutor, and whether the first trial will turn into a stable relationship. Student tutors care about whether the order is worth taking, whether the commute is reasonable, and whether their labor value can be fairly recognized. Because both sides face uncertainty, the product cannot only display information. It must create a process that makes trust visible and traceable.

I also learned that a marketplace product needs a careful balance between efficiency and responsibility. If the platform only pursues traffic, it may become another information board. XueTu is different because it tries to standardize the first trial experience, record service behavior, and use reviews and check-ins to build long-term credibility. This makes each successful tutoring session become part of a reusable trust asset.

Overall, this hackathon helped me practice full-cycle product thinking: from problem discovery, user pain points, matching logic, interface flow, business model, operation strategy, to final storytelling. It also reminded me that meaningful products do not always need to start from grand concepts. Sometimes, solving one ignored but concrete problem honestly is already valuable.`;

  const hasNotes = meta.notes.length > 0;

  const badgeClass =
    meta.status === "Completed"
      ? "bg-amber-600/25 text-amber-100 border-amber-400/40"
      : "bg-orange-600/25 text-orange-100 border-orange-400/40";

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#07111f]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(245,158,11,0.18),transparent_60%),radial-gradient(circle_at_12%_90%,rgba(251,191,36,0.14),transparent_55%),radial-gradient(circle_at_90%_25%,rgba(234,88,12,0.12),transparent_55%)]" />
      </div>

      <Navigation activeSection="product" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex items-center justify-between">
            <Link href="/product">
              <Button className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-md border-amber-400/30 text-gray-100 hover:bg-amber-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Product
              </Button>
            </Link>

            <div className="flex items-center gap-2">
              {meta.repoUrl && (
                <Link href={meta.repoUrl} target="_blank">
                  <Button className="bg-amber-500/20 border border-amber-400/40 text-amber-100 hover:bg-amber-500/30">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </Link>
              )}

              {hasNotes && (
                <Button
                  onClick={() => setShowNotes(true)}
                  className="bg-amber-500/20 border border-amber-400/40 text-amber-100 hover:bg-amber-500/30"
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
                    className="bg-amber-500/20 text-amber-100 border-amber-500/30"
                  >
                    {t}
                  </Badge>
                ))}
              </div>

              <p className="text-gray-200">{meta.practice}</p>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20" />
          </Card>

          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-amber-400 md:text-2xl">
              Project Overview
            </h2>
            <p className="text-base leading-relaxed text-gray-200">
              {overview}
            </p>
          </section>

          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-amber-400 md:text-2xl">
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

          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-amber-400 md:text-2xl">
              System Logic & Business Model
            </h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {systemArchitecture.map((line, i) => (
                <li key={i} className="leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-amber-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-amber-400 md:text-2xl">
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