"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Calendar,
  ExternalLink,
  Map,
  Landmark,
  TrendingUp,
  Truck,
} from "lucide-react";
import MediaModel from "@/components/media-model";

export default function AerotropolisSouthConnectorPage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "aerotropolis-south-connector-2026",
    title: "Aerotropolis South Connector",
    institution: "PMSoc × KordaMentha Case Competition 2026",
    practice: "PPP Infrastructure · Toll Road Strategy · Commercial Advisory",
    term: "2026.04",
    status: "Completed" as const,
    role: "Strategy & Commercial Analysis",
    placement: "Top 6",
    canvaUrl: "https://peridot-eocursor-4db.notion.site/Aerotropolis-South-Connector-3523be3c13158057a5c3ddf8944f9d3a", 
    notes: [] as string[],
    tags: [
      "Infrastructure Advisory",
      "PPP",
      "Toll Road",
      "Commercial Strategy",
      "Western Sydney",
      "Feasibility Analysis",
      "Revenue Stack",
    ],
  };

  const overview = `A consulting case competition project proposing the Aerotropolis South Connector, a staged PPP toll corridor designed to address Western Sydney’s missing southbound motorway-grade connection.

The proposal positions the corridor as more than a toll road: it is a multi-use infrastructure asset connecting Western Sydney Airport, the Aerotropolis, logistics precincts, and South-West Sydney growth areas.`;

  const whatIDid = [
    "Built the core investment thesis: NSW’s next infrastructure opportunity should be south, not east.",
    "Developed the problem framing around population growth, airport activation, freight demand, and NSW fiscal constraints.",
    "Designed the corridor selection logic using a strategic need × commercial attractiveness framework.",
    "Prepared the feasibility snapshot using comparable Sydney motorway projects such as NorthConnex, M12 Motorway, and WestConnex.",
    "Structured the commerciality section around a three-layer revenue stack: base tolls, supplementary corridor income, and long-term land value capture.",
    "Defined a DBFOM PPP delivery model with private-sector risk allocation, NSW Government support, and performance KPIs.",
  ];

  const keyInsights = [
    {
      icon: Map,
      title: "Strategic Corridor Gap",
      text: "The south of the Aerotropolis remains the key missing motorway-grade connection after M12 fills the east-west network.",
    },
    {
      icon: Truck,
      title: "Freight & Airport Demand",
      text: "The project is anchored by airport operations, cargo capacity, logistics precincts, and heavy vehicle traffic.",
    },
    {
      icon: TrendingUp,
      title: "Multi-Layer Revenue",
      text: "The corridor creates value through tolls, logistics access, EV charging, fibre leasing, land value capture, and development rights.",
    },
    {
      icon: Landmark,
      title: "PPP Delivery Logic",
      text: "A DBFOM concession allows private capital to deliver infrastructure while reducing direct fiscal pressure on government.",
    },
  ];

  const reflection = `This project strengthened my ability to approach infrastructure cases from both a strategic and commercial perspective.

The most important learning was that a strong consulting recommendation is not simply about identifying a transport problem. It requires connecting demand, network gaps, financing constraints, commercial upside, and stakeholder value into one coherent investment narrative.

Through this case, I learned how to frame an infrastructure corridor as a bankable PPP asset rather than just a road project. I also improved my ability to translate complex urban, freight, and financial considerations into a concise executive-level presentation.`;

  const hasNotes = meta.notes.length > 0;

  const statusBadge =
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
              <a href={meta.canvaUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-green-500/20 border border-green-400/40 text-green-100 hover:bg-green-500/30">
                  View Canva Project
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>

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
                className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${statusBadge}`}
              >
                {meta.status}
              </span>

              {meta.placement && (
                <span className="inline-flex items-center h-6 rounded-full px-2.5 text-xs border border-amber-300/40 bg-amber-500/20 text-amber-100">
                  🏆 {meta.placement}
                </span>
              )}
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

                {meta.role && (
                  <span className="ml-2 inline-flex items-center rounded-full border border-green-400/30 bg-green-500/10 px-2 py-0.5 text-[11px] text-green-200">
                    {meta.role}
                  </span>
                )}
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
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {overview}
            </p>
          </section>

          <section className="rounded-xl border border-green-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-4 text-xl font-semibold text-green-400 md:text-2xl">
              Key Analysis Areas
            </h2>

            <div className="grid gap-4 md:grid-cols-2">
              {keyInsights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-white/10 bg-white/5 p-4"
                  >
                    <Icon className="mb-3 h-6 w-6 text-green-300" />
                    <h3 className="mb-2 text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-300">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
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
