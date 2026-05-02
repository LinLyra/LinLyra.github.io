"use client"

import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"
import { PremiumGlassCard } from "@/components/premium-glass-card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { orbitItems } from "@/lib/portfolio-orbit"
import { MissionHighlights } from "./mission-highlights"
import { cn } from "@/lib/utils"

type Tool = {
  slug: string
  name: string
  logo: string
}

type ToolGroupAccent = "sky" | "violet" | "emerald"

type CapabilityTone = "sky" | "violet" | "emerald" | "amber"

type CapabilityCardDef = {
  title: string
  blurb: string
  items: string[]
  tone: CapabilityTone
}

const CAPABILITY_CARDS: CapabilityCardDef[] = [
  {
    title: "Data & Intelligence",
    blurb: "Uncovering patterns in complex systems.",
    items: [
      "Predictive Modeling",
      "Time Series Forecasting",
      "Experimentation (A/B Testing)",
      "SQL / Spark",
      "Causal Thinking",
    ],
    tone: "sky",
  },
  {
    title: "Engineering & Systems",
    blurb: "Building scalable, real-world solutions.",
    items: ["Next.js / React", "API Architecture", "Cloud Databases", "Deployment & Scaling", "Observability"],
    tone: "amber",
  },
  {
    title: "Product Thinking",
    blurb: "From insight to functional MVPs.",
    items: [
      "Product Strategy",
      "User Problem Framing",
      "Product Experimentation",
      "User Research",
      "Roadmapping",
      "MVP Design",
      "Prototyping",
      "KPI Frameworks",
      "Stakeholder Narratives",
    ],
    tone: "violet",
  },
  {
    title: "Business Impact",
    blurb: "Driving decisions through structured problem-solving.",
    items: [
      "Problem Structuring",
      "Business Modeling",
      "Go-to-Market",
      "Digital Transformation",
      "Stakeholder Comms",
    ],
    tone: "emerald",
  },
]

function OrbitDualTracks({
  rowForward,
  rowReverse,
}: {
  rowForward: typeof orbitItems
  rowReverse: typeof orbitItems
}) {
  const a = [...rowForward, ...rowForward]
  const b = [...rowReverse, ...rowReverse]

  const chip = (item: (typeof orbitItems)[0], idx: number, rev: boolean) => (
    <Link
      key={`${item.slug}-${idx}-${rev ? "r" : "f"}`}
      href={item.href}
      className={cn(
        "mx-0.5 inline-flex max-w-[13rem] shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition",
        "bg-white/[0.05] ring-1 ring-white/[0.06] hover:bg-white/[0.08] hover:ring-white/[0.12]",
        item.section === "business" && "hover:ring-emerald-400/25",
        item.section === "data" && "hover:ring-sky-400/25",
        item.section === "product" && "hover:ring-amber-400/25"
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 shrink-0 rounded-full",
          item.section === "business" && "bg-emerald-400/90",
          item.section === "data" && "bg-sky-400/90",
          item.section === "product" && "bg-amber-400/90"
        )}
      />
      <span className="truncate text-[11px] font-medium leading-none text-slate-200/95">{item.title}</span>
    </Link>
  )

  return (
    <div className="space-y-2.5">
      <div className="overflow-hidden rounded-full bg-black/40 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ring-1 ring-white/[0.05] backdrop-blur-sm">
        <div className="ticker-track items-center gap-2 py-0.5" style={{ animationDuration: "78s" }}>
          {a.map((item, idx) => chip(item, idx, false))}
        </div>
      </div>
      <div className="overflow-hidden rounded-full bg-black/40 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] ring-1 ring-white/[0.05] backdrop-blur-sm">
        <div className="ticker-track-reverse items-center gap-2 py-0.5" style={{ animationDuration: "92s" }}>
          {b.map((item, idx) => chip(item, idx, true))}
        </div>
      </div>
    </div>
  )
}

function CompactToolTile({
  slug,
  src,
  name,
  accent,
}: {
  slug: string
  src: string
  name: string
  accent: ToolGroupAccent
}) {
  const needsDarkPlate = slug === "figma" || slug === "notion" || slug === "axure"
  const ring =
    accent === "sky"
      ? "hover:border-sky-400/45 hover:shadow-[0_0_18px_rgba(56,189,248,0.22)]"
      : accent === "violet"
        ? "hover:border-violet-400/45 hover:shadow-[0_0_18px_rgba(167,139,250,0.22)]"
        : "hover:border-emerald-400/45 hover:shadow-[0_0_18px_rgba(52,211,153,0.18)]"

  return (
    <div className="group relative" title={name}>
      <div
        className={cn(
          "grid h-[4.25rem] w-[4.25rem] place-items-center overflow-hidden rounded-2xl bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] ring-1 ring-white/[0.06] backdrop-blur-md transition md:h-[4.5rem] md:w-[4.5rem]",
          ring
        )}
      >
        <div
          className={cn(
            "grid place-items-center rounded-xl",
            needsDarkPlate ? "h-[3.25rem] w-[3.25rem] bg-black/65 ring-1 ring-white/10" : "h-12 w-12 md:h-[3.35rem] md:w-[3.35rem]"
          )}
        >
          <Image
            src={src}
            alt=""
            width={96}
            height={96}
            className="h-10 w-10 object-contain md:h-11 md:w-11"
            style={{
              filter:
                "saturate(1.06) contrast(1.08) brightness(1.1) drop-shadow(0 0 10px rgba(148,163,184,0.12))",
            }}
          />
        </div>
      </div>
    </div>
  )
}

function SkillsSection() {
  const orbit = useMemo(() => orbitItems, [])

  const orbitRows = useMemo(() => {
    const rows = [[], []] as typeof orbitItems[]
    orbit.forEach((x, i) => rows[i % 2].push(x))
    return rows
  }, [orbit])

  const toolGroups: { title: string; subtitle: string; accent: ToolGroupAccent; tools: Tool[] }[] = [
    {
      title: "Analysis",
      subtitle: "Models & dashboards",
      accent: "sky",
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
      subtitle: "Design & delivery",
      accent: "violet",
      tools: [
        { slug: "figma", name: "Figma", logo: "/tools/figma.png" },
        { slug: "notion", name: "Notion", logo: "/tools/notion.png" },
        { slug: "axure", name: "Axure", logo: "/tools/axure.png" },
      ],
    },
    {
      title: "Cloud / Data",
      subtitle: "Pipelines & storage",
      accent: "emerald",
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

  const toneBorder = (_tone: CapabilityTone) =>
    "border border-white/[0.06] shadow-[0_16px_50px_rgba(0,0,0,0.35)] hover:border-white/[0.1]"

  const glow = (tone: CapabilityTone) =>
    tone === "sky"
      ? "bg-[radial-gradient(circle_at_35%_25%,rgba(56,189,248,0.22),transparent_62%)]"
      : tone === "violet"
        ? "bg-[radial-gradient(circle_at_35%_25%,rgba(167,139,250,0.24),transparent_62%)]"
        : tone === "emerald"
          ? "bg-[radial-gradient(circle_at_35%_25%,rgba(52,211,153,0.22),transparent_62%)]"
          : "bg-[radial-gradient(circle_at_35%_25%,rgba(251,191,36,0.20),transparent_62%)]"

  const chipTone = (tone: CapabilityTone) =>
    tone === "sky"
      ? "bg-sky-500/10 text-sky-100/95 ring-1 ring-sky-400/20 hover:bg-sky-500/16"
      : tone === "violet"
        ? "bg-violet-500/10 text-violet-100/95 ring-1 ring-violet-400/20 hover:bg-violet-500/16"
        : tone === "emerald"
          ? "bg-emerald-500/10 text-emerald-100/95 ring-1 ring-emerald-400/20 hover:bg-emerald-500/16"
          : "bg-amber-500/10 text-amber-50/95 ring-1 ring-amber-400/20 hover:bg-amber-500/16"

  return (
    <section id="skills" className="relative z-10 px-4 py-10 md:py-14">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 text-center">
          <h2 className="text-[1.75rem] font-semibold leading-tight tracking-tight text-slate-50 md:text-[2rem]">
            Capabilities
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
            A multidisciplinary toolkit — bridging data, strategy, and technology.
          </p>
          <p className="mt-2 text-xs font-medium tracking-wide text-slate-500 md:text-sm">
            Data → Business → Product → Tech
          </p>
        </header>

        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-5 lg:items-stretch">
          <div className="flex min-h-0 flex-col lg:col-span-3">
            <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {CAPABILITY_CARDS.map((c) => {
                const base =
                  "group relative flex min-h-[10rem] flex-col overflow-hidden rounded-3xl bg-white/[0.025] backdrop-blur-xl transition will-change-transform"
                const motion = "hover:-translate-y-1 hover:scale-[1.01]"

                return (
                  <PremiumGlassCard
                    key={c.title}
                    tiltMaxDeg={3}
                    className={cn(base, toneBorder(c.tone), motion)}
                  >
                    <div
                      className={cn(
                        "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                        glow(c.tone)
                      )}
                    />
                    <div className="p-5 pb-2 md:p-6 md:pb-3">
                      <h3 className="text-[1.125rem] font-semibold leading-snug text-slate-50 md:text-xl">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400 md:text-[0.95rem]">{c.blurb}</p>
                    </div>
                    <div className="flex flex-1 flex-col p-5 pt-0 md:p-6 md:pt-0">
                      <div className="flex flex-wrap items-start gap-1.5 md:gap-2">
                        {c.items.map((s) => (
                          <span
                            key={s}
                            className={cn(
                              "rounded-full px-2 py-0.5 text-[11px] font-medium leading-tight transition md:px-2.5 md:py-1 md:text-[12px]",
                              chipTone(c.tone)
                            )}
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
          </div>

          <aside className="flex min-h-0 lg:col-span-2">
            <div className="flex h-full min-h-[28rem] w-full flex-col rounded-3xl bg-[linear-gradient(165deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5 shadow-[0_16px_50px_rgba(0,0,0,0.4)] ring-1 ring-white/[0.06] backdrop-blur-xl md:min-h-full md:p-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">Toolkit</p>
                <h3 className="mt-2 text-lg font-semibold text-slate-100 md:text-xl">Tools Behind Every Mission</h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 md:text-sm">
                  From data pipelines to shipped prototypes.
                </p>
              </div>

              <div className="mt-5 flex flex-1 flex-col justify-between gap-6">
                {toolGroups.map((g) => (
                  <div key={g.title} className="space-y-3">
                    <div>
                      <div
                        className={cn(
                          "text-[11px] font-semibold uppercase tracking-[0.22em]",
                          g.accent === "sky" && "text-sky-300",
                          g.accent === "violet" && "text-violet-300",
                          g.accent === "emerald" && "text-emerald-300"
                        )}
                      >
                        {g.title}
                      </div>
                      <div
                        className={cn(
                          "text-[11px] leading-tight",
                          g.accent === "sky" && "text-sky-200/50",
                          g.accent === "violet" && "text-violet-200/50",
                          g.accent === "emerald" && "text-emerald-200/50"
                        )}
                      >
                        {g.subtitle}
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-2.5">
                      {g.tools.map((tool) => (
                        <CompactToolTile
                          key={tool.slug}
                          slug={tool.slug}
                          src={tool.logo}
                          name={tool.name}
                          accent={g.accent}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <ScrollReveal variant="soft" className="mx-auto max-w-6xl">
          <div className="space-y-6">
            <div className="rounded-2xl bg-black/20 px-3 py-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/[0.05] backdrop-blur-sm md:px-5">
              <div className="mb-4 text-center">
                <h3 className="text-xl font-semibold tracking-tight text-slate-100 md:text-2xl">
                  Exploration Across Industries
                </h3>
                <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-500">
                  A snapshot of projects across domains — from data analysis to product builds.
                </p>
              </div>

              <OrbitDualTracks rowForward={orbitRows[0]} rowReverse={orbitRows[1]} />
            </div>

            <MissionHighlights />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export { SkillsSection }
export default SkillsSection
