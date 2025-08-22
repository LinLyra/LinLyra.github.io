"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function Data1x01StudyBehavioursPage() {
  const [showNotes, setShowNotes] = useState(false);

  // —— META ——（把 reportUrl 改成你 public 下的实际路径）
  const meta = {
    slug: "data1x01-study-behaviours",
    title: "The study behaviours and expectations of DATA1X01 students",
    institution: "Course Project · University of Sydney",
    practice: "Exploratory Data Analysis · Survey Analytics (DATA1X01)",
    term: "2024 S2",
    status: "Completed" as const,
    award: "Project Excellence Award", // 
    reportUrl: "/projects/DATA1001Project1.html", // ← 这里连接到你的 HTML 报告
    tags: [
      "Survey EDA",
      "Learning Styles",
      "Study Habits",
      "Mark Goals",
      "R",
      "tidyverse",
      "ggplot2",
      "Visualization",
    ],
    // 如果你有配图可以放到 notes 里（用于右上角 View More 弹窗）
    notes: [
      "/data/data1001.png",
      "/data/group10.png",
    ],
  };

  // —— 概览（基于你报告结构 Executive Summary / Evidence / IDA）——
  const overview = `\
We investigate DATA1X01 students’ study behaviours and expectations using cohort survey responses.
Two questions guided our analysis:
1) How do study habits (steady work, last-minute work, subject-driven patterns) relate to self-identified learning styles (deep, surface, strategic)?
2) Across different DATA1X01 streams, how do students’ mark goals relate to the weekly study hours they plan to invest?

We performed initial data analysis (IDA) in R (tidyverse/ggplot2), cleaned and encoded survey fields, and produced descriptive summaries and visuals. A key insight is that intended study time does not strongly align with mark goals, suggesting a gap between expectations and planned effort. We also observe mixed alignment between self-reported learning styles and declared habits, highlighting the limits of self-assessed study strategies.`;

  // —— 关键词 ——（用于上方标签）
  const keywords = [
    "Survey EDA",
    "Learning Styles (Deep/Surface/Strategic)",
    "Steady vs. Last-minute",
    "Mark Goals",
    "Weekly Study Hours",
    "Likert Encoding",
    "Grouped Summaries",
    "R / tidyverse",
    "ggplot2",
    "Visualization",
  ];

  // —— 合并后的 “What I Built & Learned” ——（可复用到其它项目）
  const highlights: string[] = [
    "Framed research questions with course scope; operationalized study habits and learning styles into analyzable variables.",
    "Cleaned and encoded survey responses; handled missing/ambiguous entries; documented assumptions and data caveats.",
    "Performed IDA in R (tidyverse): grouped summaries, cross-tabs, and clear visuals for patterns and outliers.",
    "Interrogated links between mark goals and planned weekly hours; contrasted signals across different DATA1X01 streams.",
    "Examined correspondence between declared learning styles and reported habits; highlighted misalignments and nuance.",
    "Authored a reproducible analysis script and an accessible narrative for non-technical readers.",
  ];

  // —— 反思 ——（可按需微调）
  const reflection = `
This project strengthened my ability to translate survey constructs into measurable features and to respect the limits of self-reported data.
I learned to keep conclusions proportional to evidence, design visuals that reveal structure without over-claiming, and communicate findings that are useful for teaching staff and students alike.`;

  const hasNotes = meta.notes.length > 0;
  const badgeClass =
    meta.status === "Completed"
      ? "bg-blue-600/25 text-blue-100 border-blue-400/40"
      : "bg-cyan-600/25 text-cyan-100 border-cyan-400/40";

  return (
    <div className="relative min-h-screen">
      {/* 高亮 Data 星球 */}
      <Navigation activeSection="data" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          {/* 顶部：左返回 / 右 View Report (+ 可选 View More) */}
          <div className="flex items-center justify-between">
            <Link href="/data">
              <Button className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-md border-blue-400/30 text-gray-100 hover:bg-blue-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Data
              </Button>
            </Link>

            <div className="flex items-center gap-2">
              {meta.reportUrl && (
                <a href={meta.reportUrl} target="_blank" rel="noreferrer">
                  <Button className="bg-white/10 border border-blue-400/40 text-blue-100 hover:bg-white/20">
                    View Report
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              )}
              {hasNotes && (
                <Button
                  onClick={() => setShowNotes(true)}
                  className="bg-blue-500/20 border border-blue-400/40 text-blue-100 hover:bg-blue-500/30"
                >
                  View More
                </Button>
              )}
            </div>
          </div>

          {/* 顶部 Meta 卡（含 Award） */}
          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="absolute right-3 top-3 flex gap-2">
              <span className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${badgeClass}`}>
                {meta.status}
              </span>
              {meta.award && (
                <span className="inline-flex items-center h-6 rounded-full px-2.5 text-xs border border-amber-300/40 bg-amber-500/20 text-amber-100">
                  🏆 {meta.award}
                </span>
              )}
            </div>
            <div className="p-5 md:p-6 flex items-start gap-4">
              <div className="relative flex-shrink-0 h-12 w-12 rounded-xl bg-black/30 border border-white/10 overflow-hidden">
                <Image src={meta.logo} alt="logo" fill sizes="48px" className="object-contain" priority />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-xl md:text-2xl font-semibold text-white mb-1">{meta.title}</h1>
                <div className="mb-3 inline-flex items-center gap-2 text-sm text-gray-300">
                  <span>{meta.institution}</span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-4 w-4" /> {meta.term}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {meta.tags.map((t) => (
                    <Badge key={t} className="bg-blue-500/20 text-blue-100 border-blue-500/30">
                      {t}
                    </Badge>
                  ))}
                </div>
                <p className="text-gray-200">{meta.practice}</p>
              </div>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-500/20" />
          </Card>

          {/* Overview */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">Project Overview</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">{overview}</p>
          </section>

          {/* Keywords */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">Keywords</h2>
            <div className="flex flex-wrap gap-2">
              {keywords.map((k) => (
                <Badge key={k} className="border-blue-500/30 bg-blue-500/20 text-blue-100">
                  {k}
                </Badge>
              ))}
            </div>
          </section>

          {/* What I Built & Learned（合并块） */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">What I Built & Learned</h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {highlights.map((line, i) => (
                <li key={i} className="leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </section>

          {/* Reflection */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">Reflection</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">{reflection}</p>
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
