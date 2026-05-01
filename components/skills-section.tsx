"use client"

import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"
import { PremiumGlassCard } from "@/components/premium-glass-card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { orbitItems } from "@/lib/portfolio-orbit"
import { MissionHighlights } from "./mission-highlights"

type Tool = {
  slug: string
  name: string
  logo: string
}

function Rail({
  title,
  subtitle,
  accentClass,
  items,
  speed,
}: {
  title: string
  subtitle?: string
  accentClass: string
  items: typeof orbitItems
  speed: string
}) {
  const track = [...items, ...items]

  return (
    <div className="space-y-2.5">
      <div className="space-y-1">
        <div className={`text-[10px] font-semibold tracking-[0.38em] ${accentClass}`}>{title}</div>
        {subtitle && <div className="text-xs text-white/55">{subtitle}</div>}
      </div>
      <div className="overflow-hidden">
        <div className="ticker-track" style={{ animationDuration: speed }}>
          {track.map((item, idx) => (
            <Link
              key={`${item.slug}-${idx}`}
              href={item.href}
              className={[
                "group mx-2 inline-flex min-w-[14.5rem] items-center gap-3 rounded-full border px-4 py-2.5 text-left transition",
                item.section === "business"
                  ? "border-emerald-400/25 bg-emerald-500/[0.08] hover:border-emerald-300/40 hover:bg-emerald-500/[0.14]"
                  : item.section === "data"
                    ? "border-sky-400/25 bg-sky-500/[0.08] hover:border-sky-300/40 hover:bg-sky-500/[0.14]"
                    : "border-amber-400/25 bg-amber-500/[0.08] hover:border-amber-300/40 hover:bg-amber-500/[0.14]",
              ].join(" ")}
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
                <span className="block truncate text-xs text-white/55">{item.industries.join(" · ")}</span>
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
      <div className="relative grid h-[64px] w-[64px] place-items-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl transition group-hover:border-white/18 group-hover:bg-white/[0.05]">
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background-image:radial-gradient(circle_at_30%_40%,rgba(56,189,248,0.16),transparent_62%),radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.12),transparent_60%)]" />
        <Image
          src={src}
          alt={name}
          width={80}
          height={80}
          className="relative h-9 w-9 object-contain"
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
  const capabilityCards = [
    {
      title: "Data & Intelligence",
      blurb: "Uncovering patterns in complex systems.",
      items: ["Predictive Modeling", "Time Series Forecasting", "Experimentation (A/B Testing)", "SQL / Spark"],
      tone: "sky" as const,
      weight: "side" as const,
    },
    {
      title: "Product Thinking",
      blurb: "From insight to functional MVPs.",
      items: ["User Research", "Roadmapping", "MVP Design", "Prototyping", "KPI Frameworks", "UX Writing"],
      tone: "violet" as const,
      weight: "highlight" as const,
    },
    {
      title: "Business Impact",
      blurb: "Driving decisions through structured problem-solving.",
      items: ["Problem Structuring", "Business Modeling", "Go-to-Market", "Digital Transformation", "Stakeholder Comms"],
      tone: "emerald" as const,
      weight: "highlight" as const,
    },
    {
      title: "Engineering & Systems",
      blurb: "Building scalable, real-world solutions.",
      items: ["Next.js / React", "API Architecture", "Cloud Databases", "Deployment & Scaling"],
      tone: "amber" as const,
      weight: "side" as const,
    },
  ]

  const toolGroups: { title: string; subtitle: string; tools: Tool[] }[] = [
    {
      title: "Analysis",
      subtitle: "Models, dashboards, and decision frameworks.",
      tools: [
        { slug: "python", name: "Python", logo: "/tools/python.png" },
        { slug: "r", name: "R", logo: "/tools/r.png" },
        { slug: "excel", name: "Excel", logo: "/tools/excel.png" },
        { slug: "tableau", name: "Tableau", logo: "/tools/tableau.png" },
        { slug: "powerbi", name: "Power BI", logo: "/tools/powerbi.png" },
        { slug: "ppt", name: "PowerPoint", logo: "/tools/ppt.png" },
        { slug: "thinkcell", name: "think-cell", logo: "/tools/thinkcell.png" },
        { slug: "ga", name: "Google Analytics", logo: "/tools/google-analytics.png" },
      ],
    },
    {
      title: "Build",
      subtitle: "Product design + shipped prototypes.",
      tools: [
        { slug: "figma", name: "Figma", logo: "/tools/figma.png" },
        { slug: "notion", name: "Notion", logo: "/tools/notion.png" },
        { slug: "axure", name: "Axure", logo: "/tools/axure.png" },
      ],
    },
    {
      title: "Cloud / Data",
      subtitle: "Pipelines, databases, and orchestration.",
      tools: [
        { slug: "sql-postgres", name: "PostgreSQL", logo: "/tools/postgres.png" },
        { slug: "mysql", name: "MySQL", logo: "/tools/mysql.png" },
        { slug: "supabase", name: "Supabase", logo: "/tools/supabase.png" },
        { slug: "spark", name: "Spark", logo: "/tools/spark.png" },
        { slug: "airflow", name: "Airflow", logo: "/tools/airflow.png" },
        { slug: "databricks", name: "Databricks", logo: "/tools/databrick.png" },
        { slug: "gurobi", name: "Gurobi", logo: "/tools/gurobi.png" },
      ],
    },
  ]

  const orbit = useMemo(() => orbitItems, [])

  const orbitRows = useMemo(() => {
    const rows = [[], []] as typeof orbitItems[]
    orbit.forEach((x, i) => rows[i % 2].push(x))
    return rows
  }, [orbit])

  return (
    <section id="skills" className="relative z-10 px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-100 md:text-5xl">Capabilities</h2>
          <p className="mb-2 text-xl text-gray-200">
            A multidisciplinary toolkit — bridging data, strategy, and technology.
          </p>
          <p className="text-base text-gray-300 md:text-lg">Data → Business → Product → Tech</p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {capabilityCards.map((c) => {
            const base =
              "relative flex h-full flex-col overflow-hidden rounded-3xl border bg-white/[0.035] backdrop-blur-xl transition will-change-transform"
            const motion = "hover:-translate-y-1 hover:scale-[1.02] md:hover:scale-[1.03]"
            const sideDim = c.weight === "side" ? "opacity-90 hover:opacity-100" : "opacity-100"

            const toneBorder =
              c.tone === "sky"
                ? "border-sky-400/18 hover:border-sky-300/30"
                : c.tone === "violet"
                  ? "border-violet-400/18 hover:border-violet-300/30"
                  : c.tone === "emerald"
                    ? "border-emerald-400/18 hover:border-emerald-300/30"
                    : "border-amber-400/18 hover:border-amber-300/30"

            const glow =
              c.tone === "sky"
                ? "[background-image:radial-gradient(circle_at_30%_35%,rgba(56,189,248,0.18),transparent_62%)]"
                : c.tone === "violet"
                  ? "[background-image:radial-gradient(circle_at_30%_35%,rgba(167,139,250,0.20),transparent_62%)]"
                  : c.tone === "emerald"
                    ? "[background-image:radial-gradient(circle_at_30%_35%,rgba(52,211,153,0.18),transparent_62%)]"
                    : "[background-image:radial-gradient(circle_at_30%_35%,rgba(251,191,36,0.16),transparent_62%)]"

            const gridSpan =
              c.weight === "highlight"
                ? "lg:col-span-6 lg:row-span-2"
                : "lg:col-span-3 lg:row-span-2"

            return (
              <PremiumGlassCard
                key={c.title}
                tiltMaxDeg={4}
                className={[base, toneBorder, motion, sideDim, gridSpan].join(" ")}
              >
                <div className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${glow}`} />
                <div className="p-7 pb-3">
                  <div className="text-[11px] font-semibold tracking-[0.32em] text-white/55">CAPABILITY</div>
                  <div className="mt-2 text-2xl font-semibold text-gray-100">{c.title}</div>
                  <div className="mt-2 text-sm leading-6 text-gray-300/80">{c.blurb}</div>
                </div>
                <div className="flex-1 p-7 pt-0">
                  <div className="flex flex-wrap items-start gap-2">
                    {c.items.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-white/12 bg-white/[0.04] px-3 py-1 text-xs text-white/80"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </PremiumGlassCard>
            )
          })}
        </div>

        <ScrollReveal variant="soft" className="mx-auto max-w-7xl">
          <div className="grid gap-7 lg:grid-cols-[minmax(0,1.55fr)_minmax(300px,360px)]">
            <div className="space-y-5">
              <div>
                <div className="text-[11px] font-semibold tracking-[0.32em] text-white/58">INDUSTRY DIVERSITY</div>
                <div className="mt-2 text-2xl font-semibold text-gray-100">Exploring multiple worlds.</div>
                <div className="mt-2 max-w-2xl text-sm leading-6 text-gray-300/78">
                  Each orbit is a different industry.
                  <br />
                  The method stays the same — find the signal, build the solution, deliver the impact.
                </div>
              </div>
              <div className="space-y-4">
                <Rail
                  title="ORBIT FEED · MULTI-INDUSTRY TRAILS"
                  subtitle="Industries explored, patterns uncovered."
                  accentClass="text-white/70"
                  items={orbitRows[0]}
                  speed="66s"
                />
                <Rail
                  title="ORBIT FEED · EXPERIMENTS & EXPLORATIONS"
                  subtitle="Where curiosity leads the analysis."
                  accentClass="text-white/55"
                  items={orbitRows[1]}
                  speed="78s"
                />
              </div>

              <MissionHighlights />
            </div>

            <div className="space-y-4 justify-self-end">
              <div>
                <div className="text-[11px] font-semibold tracking-[0.32em] text-white/58">TOOLKIT GALAXY</div>
                <div className="mt-2 text-2xl font-semibold text-gray-100">Tools Behind Every Mission</div>
                <div className="mt-2 text-sm leading-6 text-gray-300/78">
                  From data pipelines to shipped prototypes.
                </div>
              </div>

              <div className="space-y-5">
                {toolGroups.map((g) => (
                  <div key={g.title} className="space-y-3">
                    <div>
                      <div className="text-xs font-semibold tracking-[0.26em] text-white/60 uppercase">{g.title}</div>
                      <div className="mt-1 text-xs text-white/45">{g.subtitle}</div>
                    </div>
                    <div className="grid grid-cols-4 gap-x-2 gap-y-4">
                      {g.tools.map((tool, index) => (
                        <ToolTile key={tool.slug} src={tool.logo} name={tool.name} index={index} />
                      ))}
                    </div>
                  </div>
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
