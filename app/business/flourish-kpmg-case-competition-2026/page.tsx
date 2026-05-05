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
  Users,
  Briefcase,
  Target,
  TrendingUp,
  Landmark,
  Route,
} from "lucide-react";
import MediaModel from "@/components/media-model";

export default function FlourishKPMGCasePage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "flourish-kpmg-case-competition-2026",
    title: "FLOURISH",
    institution: "ANUCBS × KPMG Case Competition",
    practice:
      "Talent Retention Strategy · Government Advisory · Campaign Strategy · Youth Population Challenge",
    term: "2026.05",
    status: "Completed" as const,
    role: "Strategy, Problem Diagnosis & Campaign Design",
    placement: "Top 6 Finalist",
    canvaUrl: "PASTE_YOUR_WEBPAGE_OR_CANVA_LINK_HERE",
    notes: [] as string[],
    tags: [
      "Government Advisory",
      "Talent Retention",
      "Youth Strategy",
      "Campaign Design",
      "Problem Diagnosis",
      "KPMG Case Competition",
      "ACT Government",
    ],
  };

  const overview = `FLOURISH — Find Local Opportunities, Upskill, and Reach Independent Success Here — is a 6-week talent retention strategy designed for the fictional ACT Talent & Liveability Authority.

The project addresses a core paradox: Canberra performs strongly on safety, liveability, wages, and affordability, yet 62% of ANU and University of Canberra graduates leave the ACT within two years, creating an estimated $340M annual economic loss.

Our recommendation reframes Canberra from a “study city” into a “career launchpad” by making local opportunities visible, building early employer connections, and strengthening graduates’ emotional attachment to the city.`;

  const whatIDid = [
    "Developed the core problem diagnosis: Canberra does not lose graduates because of a lack of opportunity, but because of gaps in visibility, early connection, and city identity.",
    "Defined the primary target segment as final-year ANU and University of Canberra undergraduate and postgraduate students, the highest-impact point for intervention before graduation decisions are made.",
    "Designed the overall strategy funnel: See → Engage → Stay, converting awareness into real career outcomes and long-term retention.",
    "Built the FLOURISH Opportunity Map concept to aggregate ACT jobs, internships, graduate programs, employer profiles, career pathways, and graduate stories into one central platform.",
    "Designed the Stay & Start Career Sprint, a 6-week accelerator connecting students to ACT employers through showcases, bootcamps, micro-internships, and live employer matching.",
    "Created the Canberra Belonging Pass concept to build emotional investment in Canberra through local experiences, peer circles, and authentic graduate storytelling.",
    "Structured the 6-week launch roadmap across four phases: Build, Launch, Activate, and Convert, with clear ownership and early-win milestones.",
    "Defined a success measurement framework across awareness, engagement, and conversion, with a North Star metric focused on increasing graduate intention to stay in the ACT.",
  ];

  const keyInsights = [
    {
      icon: Target,
      title: "Problem Diagnosis",
      text: "The challenge is not simply that graduates dislike Canberra; it is that local opportunities, networks, and identity are not visible early enough to influence their stay-or-leave decision.",
    },
    {
      icon: Users,
      title: "Target Segment Logic",
      text: "Final-year ANU and UC students sit at the highest-conversion window: they are already in the ACT, face low relocation barriers to staying, and can create a compounding talent pipeline if retained.",
    },
    {
      icon: Map,
      title: "Opportunity Map",
      text: "A centralised platform makes ACT jobs, internships, employer profiles, career pathways, and graduate stories easier to discover before students default to Sydney or Melbourne.",
    },
    {
      icon: Briefcase,
      title: "Career Sprint",
      text: "A 6-week activation program turns awareness into action through employer showcases, skill bootcamps, micro-projects, and direct employer matching.",
    },
    {
      icon: Landmark,
      title: "Belonging Strategy",
      text: "The Canberra Belonging Pass addresses the emotional side of retention by creating peer communities, local experiences, and authentic stories of graduates who stayed.",
    },
    {
      icon: TrendingUp,
      title: "Measurement Framework",
      text: "The strategy tracks progress from campaign reach and platform visits to student registrations, employer participation, ACT job applications, and graduate stay intention.",
    },
  ];

  const strategyModel = [
    {
      stage: "SEE",
      label: "Opportunity Visibility",
      description:
        "Aggregate fragmented ACT jobs and programs, surface career pathways by discipline, and shift perception from “no jobs” to “hidden ecosystem”.",
    },
    {
      stage: "ENGAGE",
      label: "Skills & Connection",
      description:
        "Build skills through targeted bootcamps, create direct employer touchpoints, and form early professional networks before graduation.",
    },
    {
      stage: "STAY",
      label: "Belonging & Reward",
      description:
        "Build emotional attachment to Canberra, create peer communities, and reinforce staying as the default choice.",
    },
  ];

  const roadmap = [
    {
      phase: "W1–2",
      title: "Build",
      owner: "ATLA Strategy",
      actions: [
        "FLOURISH taskforce formed",
        "Employer partnerships locked",
        "Brand and landing page live",
        "Baseline student survey",
      ],
    },
    {
      phase: "W3",
      title: "Launch",
      owner: "ATLA Comms + ANU",
      actions: [
        "Campaign goes live on campus and social",
        "Opportunity Map beta launched",
        "Opening employer showcase event",
        "Student ambassador recruitment",
      ],
    },
    {
      phase: "W4",
      title: "Activate",
      owner: "ATLA + Partners",
      actions: [
        "3–5 skill bootcamps run",
        "Employer office hours begin",
        "Industry discovery tours",
        "Belonging Pass activates",
      ],
    },
    {
      phase: "W5–6",
      title: "Convert",
      owner: "Employers + ATLA",
      actions: [
        "Micro-project employer challenge",
        "Fast-track interviews for top students",
        "FLOURISH Showcase Night",
        "Talent pool report to employers",
      ],
    },
  ];

  const metrics = [
    {
      category: "Awareness",
      items: [
        "Campaign reach: 50K+ impressions in 6 weeks",
        "Opportunity Map visits: 2,000+ unique student visitors",
        "Brand awareness: +20pp unaided recall of FLOURISH",
      ],
    },
    {
      category: "Engagement",
      items: [
        "FLOURISH registrations: 500+ students signed up",
        "Event attendance: 300+ total across all activations",
        "Employer participation: 15+ ACT organisations active",
      ],
    },
    {
      category: "Conversion",
      items: [
        "ACT job applications: 200+ applications via platform",
        "Employer-student matches: 50+ confirmed connections",
        "Graduate stay intention: +15pp vs baseline",
      ],
    },
  ];

  const reflection = `This project strengthened my ability to translate a broad public-sector challenge into a focused, evidence-led strategy.

The most important learning was that talent retention is not only an economic issue; it is also a visibility, timing, and identity problem. A strong strategy needed to go beyond “promoting Canberra” and instead create a practical system that helps students discover local opportunities, connect with employers, and imagine a future in the ACT.

Through FLOURISH, I practised building a consulting-style narrative from problem diagnosis to target segmentation, strategic initiatives, launch roadmap, and success metrics. I also learned how to design a solution that is ambitious enough to reposition a city, but still realistic enough to launch within six weeks.`;

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
                  View Project
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
              Strategic Logic
            </h2>

            <div className="grid gap-4 md:grid-cols-3">
              {strategyModel.map((item) => (
                <div
                  key={item.stage}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="mb-2 text-2xl font-bold text-green-300">
                    {item.stage}
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-white">
                    {item.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
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
            <h2 className="mb-4 text-xl font-semibold text-green-400 md:text-2xl">
              6-Week Launch Roadmap
            </h2>

            <div className="grid gap-4 md:grid-cols-4">
              {roadmap.map((phase) => (
                <div
                  key={phase.title}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-green-300">
                    {phase.phase}
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-white">
                    {phase.title}
                  </h3>

                  <ul className="mb-4 list-disc space-y-2 pl-5 text-sm text-gray-300">
                    {phase.actions.map((action) => (
                      <li key={action}>{action}</li>
                    ))}
                  </ul>

                  <p className="rounded-lg border border-green-400/20 bg-green-500/10 px-3 py-2 text-xs text-green-100">
                    Owner: {phase.owner}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm italic text-green-200">
              Early win: student registrations and employer confirmations by
              the end of Week 2.
            </p>
          </section>

          <section className="rounded-xl border border-green-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-4 text-xl font-semibold text-green-400 md:text-2xl">
              Success Metrics
            </h2>

            <p className="mb-4 rounded-xl border border-amber-300/30 bg-amber-500/10 p-4 text-sm text-amber-100">
              North Star Metric: increase the percentage of final-year ANU and
              UC students intending to stay in the ACT post-graduation.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              {metrics.map((group) => (
                <div
                  key={group.category}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <h3 className="mb-3 text-lg font-semibold text-white">
                    {group.category}
                  </h3>

                  <ul className="list-disc space-y-2 pl-5 text-sm text-gray-300">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm italic text-gray-300">
              Long-term measure: reduce ACT&apos;s negative net talent migration
              for under-30s, assessed at 6 and 12 months post-campaign.
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