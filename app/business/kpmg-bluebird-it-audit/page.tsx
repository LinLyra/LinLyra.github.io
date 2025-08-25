"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function KpmgBluebirdItAuditPage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "kpmg-bluebird-it-audit-2025",
    title: "KPMG Bluebird IT Audit Challenge 2025",
    institution: "KPMG China",
    practice: "IT Audit · POS/Payments · Cybersecurity Controls",
    term: "2025.08",
    status: "Completed" as const,
    role: "Team Lead",              
    placement: "Semifinalist",      
    notes: ["/competition/bluebird.png"], // 放到 public 下
    tags: [
      "IT Audit",
      "Cybersecurity",
      "POS / Payments",
      "Cloud POS",
      "Data Consistency",
      "Change Management",
    ],
  };

  const overview = `Real-world IT-audit case challenge focused on technology risks in POS/ATM and payment systems.
Our team assessed threat surfaces, mapped control objectives, and proposed test plans and
remediation priorities under time pressure.`;

  const whatIDid = [
    "Framed the audit scope quickly: POS/ATM threat model, data integrity, interface security, and change management.",
    "Built a concise control matrix (design vs. operating effectiveness) and drafted practical test steps/evidence lists.",
    "Outlined data-consistency checks across POS → clearing/ERP; suggested offline-mode limits and log retention controls.",
    "Prepared a small set of slides/checklists that teammates (audit background) could execute consistently.",
  ];

  const reflection = `The prompt was unexpectedly technical, but my prior exposure to payments and POS architecture helped me lead two audit teammates and push us into the semifinals.  

The biggest lesson: judges value clear, testable controls more than theory—spell out “objective → risk → control → test step → evidence”. Mapping cloud POS, mobile POS and omni-channel 
flows to a simple audit path (transaction → logs → interfaces → reconciliation) made the solution actionable.  

Unfortunately, the offline final overlapped with the start of semester, so we could not attend. Still, this sprint taught me how to bridge tech details with audit rigor, and how to ship a minimal, 
repeatable audit playbook under tight time constraints.`;


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
              <span className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${statusBadge}`}>
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

    
              <div className="mb-3 inline-flex items-center gap-2 text-sm text-gray-300">
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
                  <Badge key={t} className="bg-green-500/20 text-green-100 border-green-500/30">
                    {t}
                  </Badge>
                ))}
              </div>

              <p className="text-gray-200">{meta.practice}</p>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20" />
          </Card>

          {/* Overview */}
          <section className="rounded-xl border border-green-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-green-400 md:text-2xl">
              Project Overview
            </h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {overview}
            </p>
          </section>

          {/* What I Did */}
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

          {/* Reflection */}
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

