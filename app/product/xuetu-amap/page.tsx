"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function XueTuAmapDeveloperConferencePage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "xuetu-amap",
    title: "XueTu — Amap-Based Learning Companion Platform",
    institution: "Amap Intelligent Developer Conference",
    practice: "Location-Based Product · Amap API · Education Service Platform",
    term: "2026.01",
    status: "Completed" as const,
    role: "Founder",
    notes: [
      "/competition/xuetu-amap.png",
      "/competition/xuetu-amap-1.png",
      "/competition/xuetu-amap-2.png",
    ],
    tags: ["Amap API", "Location Service", "Education", "Trust System"],
  };

  const overview =
    `XueTu is a learning companion and offline tutoring platform built around Amap’s location-based capabilities. This earlier version of the project focused less on hackathon-style marketplace expansion and more on one core question: how can map infrastructure make offline tutoring more trustworthy, visible, and efficient? In the current tutoring market, families and university students often rely on WeChat groups, agencies, or scattered information posts. This creates low matching efficiency, high hidden costs, weak trust, and almost no traceable service process. XueTu uses Amap API as the product foundation to turn tutoring from a text-based information exchange into a location-aware, visualized, and recordable local service flow. Through nearby demand matching, geocoding, distance sorting, route navigation, location check-in, trial-class orders, and two-way reviews, the platform aims to make every offline learning service easier to judge, easier to reach, and easier to trust.`;

  const whatIBuilt: string[] = [
    "Positioned XueTu as a location-based learning companion platform for university students and families, with Amap as the core infrastructure layer.",
    "Analyzed the pain points of traditional tutoring channels, including fragmented information, inefficient matching, high agency costs, weak trust, and lack of process records.",
    "Designed nearby demand discovery based on Amap map visualization, allowing student tutors to see tutoring opportunities around them instead of browsing scattered text posts.",
    "Planned geocoding and reverse-geocoding logic to convert family addresses into map coordinates and support location-based matching.",
    "Designed distance calculation and sorting logic so users can compare opportunities by nearby priority, subject, grade, budget, and teaching requirement.",
    "Integrated route planning and navigation as a key product capability, helping student tutors quickly judge commute cost and navigate to offline teaching locations.",
    "Designed location check-in and fulfillment records to make offline service behavior traceable, supporting trust-building, dispute handling, and long-term service credibility.",
  ];

  const amapCapabilities: string[] = [
    "Map display: visualizes tutoring demand and tutor distribution on a real local map.",
    "Real-time location: supports student-side positioning and arrival check-in.",
    "Geocoding: converts family address text into latitude and longitude coordinates.",
    "Reverse geocoding: improves address readability and location confirmation.",
    "Distance calculation: supports nearby-first ranking and intelligent matching.",
    "Route planning: helps student tutors estimate commute time before accepting an order.",
    "Navigation: connects online matching with actual offline arrival.",
    "Location-based records: supports check-in evidence and service process traceability.",
  ];

  const reflection =
    `Compared with the later Global Hackathon version, this Amap Developer Conference version was more focused on the technical and infrastructural value of location services.

The biggest learning was that offline education services cannot be solved only by better information display. The key problem is that the service happens in physical space. Distance, commute time, location confidence, arrival proof, and service records all directly affect whether both sides feel safe enough to cooperate. Amap API made it possible to turn these hidden offline uncertainties into visible product signals.

I also realized that map capability is not just a technical feature. In this project, it became the trust foundation of the product. Nearby matching reduced inefficient communication, route planning helped student tutors evaluate whether an order was worth taking, and location check-in created a record that the service actually happened. These details made the platform more than a tutoring marketplace. It became a structured local service system.

This version gave XueTu its original product foundation: location first, trust first, and offline process first. The later hackathon version expanded the idea into a fuller marketplace and business model, but the Amap version clarified the most important core: using location intelligence to make offline tutoring more transparent, reliable, and efficient.`;

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

            {hasNotes && (
              <Button
                onClick={() => setShowNotes(true)}
                className="bg-amber-500/20 border border-amber-400/40 text-amber-100 hover:bg-amber-500/30"
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
              Amap API Capabilities
            </h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {amapCapabilities.map((line, i) => (
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