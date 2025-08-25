"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function DeloitteTechnologyVirtualPage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "deloitte-technology-virtual",
    title: "Technology · Virtual Experience",
    institution: "Deloitte (Forage)",
    practice: "Digital Consulting · Data Analysis · Insights & Dashboards",
    term: "2024.12",
    status: "Completed" as const,
    notes: ["/experience/deloitteforge.png"],
  };

  const overview = `Technology consulting simulation exploring data-driven client work:
from cleaning and analysing datasets to communicating insights via simple dashboards.`;

  const whatIDid = [
    "Explored a business scenario and clarified questions the data needs to answer.",
    "Cleaned and transformed raw tables; created quick checks/KPIs to surface patterns.",
    "Built a compact dashboard/report to share insights with non-technical stakeholders.",
    "Summarised recommendations and next steps in a client-ready update.",
  ];

  const takeaways = `Good technology consulting is translation: turn messy tables into a few
business-relevant stories—what changed, why it matters, and what to do next. I practised
time-boxed analysis, tidy visuals, and crisp takeaways so the audience can act immediately.

Another key lesson was the balance between speed and depth. The simulation pushed me to find
"just enough analysis"—sanity checks, quick pivots, and a dashboard that highlights the
signal without drowning in noise. It showed me how even simple metrics, if framed well,
can unlock real client impact.

If I repeated the exercise, I would experiment with layering insights: an immediate one-page
storyline for executives, plus a deeper appendix for analysts. That way I can serve both
audiences at once while still practicing clear, structured communication under pressure.`;

  const hasNotes = meta.notes.length > 0;
  const badgeClass =
    meta.status === "Completed"
      ? "bg-emerald-600/25 text-emerald-100 border-emerald-400/40"
      : "bg-lime-600/25 text-lime-100 border-lime-400/40";

  return (
    <div className="relative min-h-screen overflow-visible">

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#08110d]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(16,185,129,0.16),transparent_60%),radial-gradient(circle_at_15%_90%,rgba(34,197,94,0.14),transparent_55%),radial-gradient(circle_at_90%_25%,rgba(52,211,153,0.12),transparent_55%)]" />
      </div>

      <Navigation activeSection="business" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex items-center justify-between">
            <Link href="/business">
              <Button className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-md border-emerald-400/30 text-emerald-100 hover:bg-emerald-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Business
              </Button>
            </Link>

            {hasNotes && (
              <Button
                onClick={() => setShowNotes(true)}
                className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-100 hover:bg-emerald-500/30"
              >
                View More
              </Button>
            )}
          </div>


          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-visible">
            <div className="absolute right-3 top-3">
              <span className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${badgeClass}`}>
                {meta.status}
              </span>
            </div>
            <div className="p-5 md:p-6">
              <h1 className="text-xl md:text-2xl font-semibold text-white mb-1">{meta.title}</h1>
              <div className="mb-3 inline-flex items-center gap-2 text-sm text-gray-300">
                <span>{meta.institution}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {meta.term}
                </span>
              </div>
              <p className="text-gray-200">{meta.practice}</p>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-emerald-500/20" />
          </Card>

          {/* Overview */}
          <section className="rounded-xl border border-emerald-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-emerald-400 md:text-2xl">Project Overview</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200 break-words hyphens-auto">
              {overview}
            </p>
          </section>

          {/* What I Did */}
          <section className="rounded-xl border border-emerald-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-emerald-400 md:text-2xl">What I Worked on</h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {whatIDid.map((line, i) => (
                <li key={i} className="leading-relaxed break-words hyphens-auto">{line}</li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-emerald-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-emerald-400 md:text-2xl">Takeaways</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200 break-words hyphens-auto">
              {takeaways}
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

