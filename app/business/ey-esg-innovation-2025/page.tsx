"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function EyEsgInnovationPage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "ey-esg-innovation-2025",
    title: "AI × ESG Luxury Supply Chain",
    institution: "EY × Gaodun Education",
    practice: "ESG Strategy · AI + Luxury · Supply Chain",
    term: "2025.04",
    role: "Team Lead",
    status: "Completed" as const,
    award: "Semifinalist",
    notes: ["/competition/lvmh.png"],
    tags: ["ESG", "AI + Luxury", "Luxury Supply Chain"],
  };

  const overview = `This project tackled a data-driven ESG transformation challenge for luxury supply chains, with a focus on translating sustainability strategy into executable systems.

Rather than treating ESG as a reporting exercise, we reframed it as a system design problem. The key challenge was not the lack of ambition, but the lack of structured, reliable, and traceable data infrastructures capable of supporting disclosure, decision-making, and long-term governance.

Starting from the luxury sector's real constraints—fragmented supplier networks, weak Scope-3 visibility, and rising CSRD-style disclosure pressure—we designed an AI × ESG solution architecture that could connect strategy with operations.

Our proposal integrated:
• Digital Product Passports (DPP) for item-level traceability
• A structured Scope-3 data model across multi-tier suppliers
• A centralized indicator warehouse for ESG metrics
• KPI dashboards for disclosure readiness and management visibility
• Governance and audit mechanisms to support scalable rollout

We also mapped capability gaps through an LVMH-style operating lens and proposed a phased implementation path from pilot deployment to enterprise-scale adoption.

The final output was not just a conceptual ESG framework, but a system-level roadmap that made sustainability measurable, operational, and implementation-ready.`;

  const whatIDid: string[] = [
    "Led a three-member team under a compressed competition timeline, defining the project scope, coordinating workstreams, and driving the full process from problem framing to final pitch delivery.",
    "Reframed the brief from a generic ESG innovation topic into a concrete systems problem, identifying traceability, Scope-3 visibility, and indicator reliability as the core bottlenecks in luxury supply chain transformation.",
    "Structured the solution around a practical AI × ESG architecture, covering Digital Product Passport (DPP), supplier-level data collection logic, KPI warehousing, governance workflows, and audit trail design.",
    "Designed an operational logic chain of 'objective → risk → control → data source → metric', translating abstract ESG goals into measurable and monitorable execution mechanisms.",
    "Defined KPI dimensions aligned with disclosure-oriented standards, while ensuring the indicators remained useful for internal management rather than becoming purely compliance-driven outputs.",
    "Built a phased adoption roadmap covering pilot brands, supplier data onboarding, system integration, governance ownership, and scalable audit mechanisms, so that the proposal could be defended as realistic rather than aspirational.",
    "Led synthesis and storytelling for the final presentation, turning a cross-disciplinary solution involving ESG, supply chain, and data systems into a concise narrative understandable to judges from mixed backgrounds.",
    "Prepared the Q&A playbook and defended core design choices under time pressure, including why DPP was prioritized, how data reliability should be staged, and how governance should evolve alongside technical deployment."
  ];

  const reflection = `Leading this project as Team Lead and advancing to the semifinal stage strengthened my ability to turn strategic ideas into structured systems.

The biggest lesson was that ESG transformation is fundamentally a data and operating model challenge. Without reliable data pipelines, unified indicators, and clear governance ownership, even the strongest sustainability ambition remains presentation-level rather than executable. In that sense, the project taught me to look beneath the strategic narrative and ask a more important question: what system would actually make this possible?

A second lesson was the importance of implementation logic. Judges responded less to abstract vision and more to whether the solution could realistically be adopted: how information is captured, where controls sit, how dashboards are fed, and how governance scales from pilot to rollout. That pushed me to think not only as a strategist, but also as a system designer.

I also developed a sharper sense of communication under complexity. This project required translating across multiple languages at once—ESG disclosure, luxury operations, and data architecture—while still keeping the pitch clear, concise, and decision-oriented. Choosing what to simplify, what to emphasize, and what to defend became as important as the solution itself.

Overall, this experience sharpened my ability to lead through ambiguity, structure high-complexity business problems, and design solutions that bridge strategy, data, and execution in a way that feels both credible and actionable.`;

  const keyTakeaways: string[] = [
    "Strategy is only as strong as the data system beneath it.",
    "Good ESG design must satisfy both compliance logic and operational usability.",
    "Strong pitches do not just present ideas—they prove implementation pathways.",
    "Cross-functional problem solving requires both structured thinking and narrative clarity."
  ];

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
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
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
              Key Takeaways
            </h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {keyTakeaways.map((line, i) => (
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
