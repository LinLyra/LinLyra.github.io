"use client"

import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"
import { PremiumGlassCard } from "@/components/premium-glass-card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { portfolioHighlights } from "@/lib/portfolio-highlights"
import { MissionHighlights } from "./mission-highlights"

type Tool = {
  slug: string
  name: string
  logo: string
}

function Rail({
  title,
  accentClass,
  items,
  speed,
}: {
  title: string
  accentClass: string
  items: typeof portfolioHighlights
  speed: string
}) {
  const track = [...items, ...items]

  return (
    <div className="space-y-2.5">
      <div className={`text-[10px] font-semibold tracking-[0.38em] ${accentClass}`}>{title}</div>
      <div className="overflow-hidden">
        <div className="ticker-track" style={{ animationDuration: speed }}>
          {track.map((item, idx) => (
            <Link
              key={`${item.slug}-${idx}`}
              href={item.href}
              className="group mx-2 inline-flex min-w-[14.5rem] items-center gap-3 rounded-full border border-white/10 bg-white/[0.015] px-4 py-2.5 text-left transition hover:border-white/18 hover:bg-white/[0.045]"
            >
              <span
                className={`mt-0.5 h-2.5 w-2.5 rounded-full ${
                  item.section === "business"
                    ? "bg-emerald-300"
                    : item.section === "data"
                      ? "bg-sky-300"
                      : "bg-amber-300"
                }`}
              />
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-semibold text-gray-100">{item.title}</span>
                <span className="block truncate text-xs text-white/55">
                  {item.badge} · {item.date}
                </span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.22em] text-white/35 opacity-0 transition group-hover:opacity-100">
                Open
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function ToolTile({ src, name, index }: { src: string; name: string; index: number }) {
  return (
    <div
      className="group flex flex-col items-center gap-2 text-center transition duration-300 hover:-translate-y-0.5"
      style={{ animationDelay: `${index * 60}ms` }}
      title={name}
    >
      <div className="relative grid h-[76px] w-[76px] place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition group-hover:border-white/18 group-hover:bg-white/[0.05]">
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background-image:radial-gradient(circle_at_30%_40%,rgba(56,189,248,0.16),transparent_62%),radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.12),transparent_60%)]" />
        <Image
          src={src}
          alt={name}
          width={80}
          height={80}
          className="relative h-12 w-12 object-contain"
          style={{
            filter:
              "saturate(1.06) contrast(1.08) brightness(1.14) drop-shadow(0 0 14px rgba(148,163,184,0.14))",
          }}
        />
      </div>
      <div className="text-[10px] font-semibold uppercase tracking-[0.26em] text-white/50 group-hover:text-white/70">
        {name}
      </div>
    </div>
  )
}

function SkillsSection() {
  const skillCategories = [
    {
      title: "Data & Analytics",
      skills: [
        "Predictive Modeling",
        "Time Series Forecasting",
        "Experimentation (A/B Testing)",
        "Data Engineering (Spark, SQL)",
        "Data Storytelling (Power BI, Tableau)",
      ],
    },
    {
      title: "Product & Strategy",
      skills: ["User Research", "Market Analysis", "Roadmapping", "MVP Design", "Prototyping", "KPI Frameworks"],
    },
    {
      title: "Business & Consulting",
      skills: ["Stakeholder Communication", "Problem Structuring", "Business Modeling", "Industry Analysis", "Digital Transformation", "Go-to-Market Strategy"],
    },
    {
      title: "Technical Build",
      skills: ["Next.js / React", "System Design", "Cloud Databases", "API Architecture", "Deployment & Scaling"],
    },
  ]

  const tools: Tool[] = [
    { slug: "python", name: "Python", logo: "/tools/python.png" },
    { slug: "r", name: "R", logo: "/tools/r.png" },
    { slug: "sql-postgres", name: "PostgreSQL", logo: "/tools/postgres.png" },
    { slug: "mysql", name: "MySQL", logo: "/tools/mysql.png" },
    { slug: "supabase", name: "Supabase", logo: "/tools/supabase.png" },
    { slug: "tableau", name: "Tableau", logo: "/tools/tableau.png" },
    { slug: "powerbi", name: "Power BI", logo: "/tools/powerbi.png" },
    { slug: "excel", name: "Excel", logo: "/tools/excel.png" },
    { slug: "ppt", name: "PowerPoint", logo: "/tools/ppt.png" },
    { slug: "thinkcell", name: "think-cell", logo: "/tools/thinkcell.png" },
    { slug: "spark", name: "Spark", logo: "/tools/spark.png" },
    { slug: "airflow", name: "Airflow", logo: "/tools/airflow.png" },
    { slug: "databricks", name: "Databricks", logo: "/tools/databrick.png" },
    { slug: "gurobi", name: "Gurobi", logo: "/tools/gurobi.png" },
    { slug: "ga", name: "Google Analytics", logo: "/tools/google-analytics.png" },
    { slug: "figma", name: "Figma", logo: "/tools/figma.png" },
    { slug: "notion", name: "Notion", logo: "/tools/notion.png" },
    { slug: "axure", name: "Axure", logo: "/tools/axure.png" },
  ]

  const allHighlights = useMemo(() => portfolioHighlights, [])

  return (
    <section id="skills" className="relative z-10 px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-100 md:text-5xl">Skills</h2>
          <p className="mb-2 text-xl text-gray-200">A multidisciplinary toolkit for innovation and growth.</p>
          <p className="text-base text-gray-300 md:text-lg">Build • Analyze • Strategize • Transform</p>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          {skillCategories.map((category, index) => (
            <PremiumGlassCard
              key={index}
              tiltMaxDeg={4}
              className="flex h-full flex-col border border-sky-400/15 bg-white/[0.04] backdrop-blur-xl shadow-[0_0_26px_rgba(56,189,248,0.08)] hover:border-sky-400/25 hover:bg-white/[0.06]"
            >
              <div className="p-6 pb-2">
                <div className="text-xl font-semibold text-gray-100">{category.title}</div>
              </div>
              <div className="flex-1 p-6 pt-0">
                <div className="flex flex-wrap items-start gap-2">
                  {category.skills.map((s, i) => (
                    <span key={i} className="rounded-full border border-blue-500/30 bg-blue-500/20 px-3 py-1 text-sm text-blue-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </PremiumGlassCard>
          ))}
        </div>

        <ScrollReveal variant="soft" className="mx-auto max-w-7xl">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,1.55fr)_minmax(300px,360px)]">
            <div className="space-y-5">
              <div>
                <div className="text-[11px] font-semibold tracking-[0.32em] text-white/58">MORE IN ORBIT</div>
                <div className="mt-2 text-2xl font-semibold text-gray-100">One rail. Color-coded worlds.</div>
                <div className="mt-2 max-w-2xl text-sm leading-6 text-gray-300/78">
                  Business, data, and product highlights share the same orbit — the dot color tells you which planet it belongs to.
                </div>
              </div>
              <Rail title="ORBIT FEED" accentClass="text-white/70" items={allHighlights} speed="66s" />

              <MissionHighlights />
            </div>

            <div className="space-y-4 justify-self-end">
              <div>
                <div className="text-[11px] font-semibold tracking-[0.32em] text-white/58">TOOLKIT GALAXY</div>
                <div className="mt-2 text-2xl font-semibold text-gray-100">Tech Stack & Tools</div>
              </div>

              <div className="grid grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-3 lg:grid-cols-3">
                {tools.map((tool, index) => (
                  <ToolTile key={tool.slug} src={tool.logo} name={tool.name} index={index} />
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export { SkillsSection }
export default SkillsSection
