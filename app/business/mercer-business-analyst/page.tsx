"use client";

import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";

export default function MercerBusinessAnalystPage() {
  const meta = {
    slug: "mercer-business-analyst",
    title: "Business Analyst (Intern) — Talent Strategy & People Analytics",
    institution: "Mercer (Career Team)",
    practice:
      "Talent Strategy · Capability Modeling · People Analytics · Organizational Decision Support",
    term: "2025.12 — 2026.03",
    status: "Completed" as const,
    tags: [
      "Talent Assessment",
      "Competency Modeling",
      "People Analytics",
      "360 Feedback",
      "Psychometrics",
      "Talent Mapping",
      "Succession Planning",
      "Data Analysis",
    ],
  };

  const whatIDid = `Worked on talent assessment and organizational decision-making projects across multiple industries (e.g., manufacturing, healthcare, finance), focusing on translating business needs into structured talent evaluation systems:

• Talent Modeling & Evaluation Framework Design
  - Built competency models and talent profiles aligned with business strategy and role requirements across different organizational levels.
  - Applied psychometric tools (MPM) and 360-degree feedback to evaluate leadership, behavioral competencies, and growth potential.
  - Contributed to designing standardized evaluation frameworks to improve consistency in talent assessment.

• People Analytics & Data-Driven Talent Insights
  - Analyzed 10,000+ talent assessment records, segmenting by function, seniority, and performance groups to identify capability gaps and high-potential talent.
  - Conducted multi-dimensional analysis to uncover differences in leadership, execution, and development potential across groups.
  - Translated raw assessment data into actionable insights for talent decisions.

• Talent Mapping & Succession Strategy
  - Supported talent mapping and 9-box analysis to identify high-potential individuals and build talent pipelines.
  - Contributed to succession planning and development recommendations for promotion and leadership cultivation.
  - Assisted in linking individual capability profiles with long-term organizational needs.

• Project Execution & Stakeholder Coordination
  - Participated in end-to-end project delivery, including assessment setup, progress tracking, and data quality control.
  - Collaborated with clients to align evaluation logic with business context and organizational structure.
  - Ensured accuracy, reliability, and usability of assessment outputs in real decision-making scenarios.`;

  const takeaways = `• Talent evaluation is fundamentally a modeling problem: translating abstract qualities like “leadership” or “potential” into structured, observable, and comparable dimensions is critical for decision-making.

• Data reveals patterns, but interpretation creates value: large-scale assessment data alone is insufficient—meaningful insights come from linking patterns to business context and organizational strategy.

• High-potential identification is multi-dimensional: performance, learning ability, behavioral traits, and growth trajectory must be considered together rather than in isolation.

• Capability gaps are often structural, not individual: differences across teams or layers often reflect organizational design, role expectations, and incentive systems.

• Standardization improves fairness and scalability: structured frameworks (competency models, 9-box grids) reduce bias and enable more consistent talent decisions.

• Talent decisions are inherently uncertain: frameworks and data reduce ambiguity, but judgment and contextual understanding remain essential.

• The intersection of business and people is where real impact happens: effective talent strategy requires understanding both organizational goals and human capability at the same time.

• Early signals of potential are often behavioral: learning speed, adaptability, and problem-solving approach provide stronger signals than static credentials.`;

  const badgeClass =
    meta.status === "Completed"
      ? "bg-emerald-600/25 text-emerald-100 border-emerald-400/40"
      : "bg-green-600/25 text-green-100 border-green-400/40";

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="business" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">

          <div className="flex items-center justify-between">
            <Link href="/business">
              <Button className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-md border-emerald-400/30 text-gray-100 hover:bg-emerald-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Business
              </Button>
            </Link>
            <div />
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
              <div className="mb-3 inline-flex items-center gap-2 text-sm text-gray-300">
                <span>{meta.institution}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {meta.term}
                </span>
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
            <div className="h-1 w-full bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-emerald-500/20" />
          </Card>

          <section className="rounded-xl border border-emerald-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-emerald-400 md:text-2xl">
              What I Worked On
            </h2>
            <div className="whitespace-pre-wrap text-base leading-relaxed text-gray-200">
              {whatIDid}
            </div>
          </section>

          <section className="rounded-xl border border-emerald-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-emerald-400 md:text-2xl">
              Key Takeaways
            </h2>
            <div className="whitespace-pre-wrap text-base leading-relaxed text-gray-200">
              {takeaways}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
