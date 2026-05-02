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
    <div className="space-y-3">
      <div className="space-y-1">
        <div className={`text-[11px] font-semibold tracking-[0.34em] ${accentClass}`}>{title}</div>
        {subtitle && <div className="text-[13px] leading-snug text-slate-500">{subtitle}</div>}
      </div>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/20 py-3 backdrop-blur-md">
        <div className="ticker-track items-center py-1" style={{ animationDuration: speed }}>
          {track.map((item, idx) => (
            <Link
              key={`${item.slug}-${idx}`}
              href={item.href}
              className={cn(
                "group mx-3 my-1 inline-flex min-w-[17.5rem] max-w-[20rem] items-center gap-3.5 rounded-2xl border px-5 py-4 text-left shadow-sm transition",
                "hover:-translate-y-0.5 hover:shadow-lg",
                item.section === "business" &&
                  "border-emerald-400/35 bg-emerald-950/35 hover:border-emerald-300/55 hover:shadow-emerald-500/20",
                item.section === "data" &&
                  "border-sky-400/35 bg-sky-950/35 hover:border-sky-300/55 hover:shadow-sky-500/20",
                item.section === "product" &&
                  "border-amber-400/35 bg-amber-950/35 hover:border-amber-300/55 hover:shadow-amber-500/20"
              )}
            >
              <span
                className={cn(
                  "mt-0.5 h-3 w-3 shrink-0 rounded-full ring-2 ring-white/10",
                  item.section === "business" && "bg-emerald-300",
                  item.section === "data" && "bg-sky-300",
                  item.section === "product" && "bg-amber-300"
                )}
              />
              <span className="min-w-0 flex-1">
                <span className="block text-[0.95rem] font-semibold leading-snug text-slate-100 md:text-base">
                  {item.title}
                </span>
                <span
                  className={cn(
                    "mt-1 block text-[12px] leading-snug line-clamp-1",
                    item.section === "business" && "text-emerald-200/75",
                    item.section === "data" && "text-sky-200/75",
                    item.section === "product" && "text-amber-200/75"
                  )}
                >
                  {item.industries.join(" · ")}
                </span>
              </span>
              <span className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/35 opacity-0 transition group-hover:opacity-100">
                Open
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

function ToolTile({
  slug,
  src,
  name,
  index,
  accent,
}: {
  slug: string
  src: string
  name: string
  index: number
  accent: ToolGroupAccent
}) {
  const needsDarkPlate = slug === "figma" || slug === "notion" || slug === "axure"
  const hoverRing =
    accent === "sky"
      ? "group-hover:border-sky-400/40 group-hover:shadow-[0_0_22px_rgba(56,189,248,0.18)]"
      : accent === "violet"
        ? "group-hover:border-violet-400/40 group-hover:shadow-[0_0_22px_rgba(167,139,250,0.18)]"
        : "group-hover:border-emerald-400/40 group-hover:shadow-[0_0_22px_rgba(52,211,153,0.16)]"

  return (
    <div
      className="group flex flex-col items-center gap-1.5 text-center transition duration-300 hover:-translate-y-0.5"
      style={{ animationDelay: `${index * 40}ms` }}
      title={name}
    >
      <div
        className={cn(
          "relative grid h-[5.25rem] w-[5.25rem] place-items-center overflow-hidden rounded-2xl border border-white/12 bg-white/[0.04] backdrop-blur-xl transition",
          hoverRing
        )}
      >
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background-image:radial-gradient(circle_at_30%_40%,rgba(56,189,248,0.14),transparent_62%),radial-gradient(circle_at_70%_60%,rgba(168,85,247,0.10),transparent_60%)]" />
        <div
          className={cn(
            "relative grid place-items-center rounded-xl",
            needsDarkPlate ? "h-14 w-14 bg-black/70 ring-1 ring-white/12" : "h-12 w-12"
          )}
        >
          <Image
            src={src}
            alt={name}
            width={96}
            height={96}
            className="h-11 w-11 object-contain"
            style={{
              filter:
                "saturate(1.06) contrast(1.08) brightness(1.12) drop-shadow(0 0 12px rgba(148,163,184,0.12))",
            }}
          />
        </div>
      </div>
      <div className="max-w-[5.5rem] text-[10px] font-semibold uppercase leading-tight tracking-[0.18em] text-slate-500 group-hover:text-slate-400">
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
      items: [
        "Predictive Modeling",
        "Time Series Forecasting",
        "Experimentation (A/B Testing)",
        "SQL / Spark",
        "Causal Thinking",
      ],
      tone: "sky" as const,
    },
    {
      title: "Engineering & Systems",
      blurb: "Building scalable, real-world solutions.",
      items: ["Next.js / React", "API Architecture", "Cloud Databases", "Deployment & Scaling", "Observability"],
      tone: "amber" as const,
    },
    {
      title: "Product Thinking",
      blurb: "From insight to functional MVPs.",
      items: [
        "User Research",
        "Roadmapping",
        "MVP Design",
        "Prototyping",
        "KPI Frameworks",
        "UX Writing",
        "Stakeholder Narratives",
      ],
      tone: "violet" as const,
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
      tone: "emerald" as const,
    },
  ]

  const toolGroups: { title: string; subtitle: string; accent: ToolGroupAccent; tools: Tool[] }[] = [
    {
      title: "Analysis",
      subtitle: "Models, dashboards, and decision frameworks.",
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
      subtitle: "Product design + shipped prototypes.",
      accent: "violet",
      tools: [
        { slug: "figma", name: "Figma", logo: "/tools/figma.png" },
        { slug: "notion", name: "Notion", logo: "/tools/notion.png" },
        { slug: "axure", name: "Axure", logo: "/tools/axure.png" },
      ],
    },
    {
      title: "Cloud / Data",
      subtitle: "Pipelines, databases, and orchestration.",
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

  const orbit = useMemo(() => orbitItems, [])

  const orbitRows = useMemo(() => {
    const rows = [[], []] as typeof orbitItems[]
    orbit.forEach((x, i) => rows[i % 2].push(x))
    return rows
  }, [orbit])

  return (
    <section id="skills" className="relative z-10 px-4 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 text-center md:text-left">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500">Overview</p>
          <h2 className="mt-2 text-[1.75rem] font-semibold leading-tight tracking-tight text-slate-50 md:text-[2rem]">
            Capabilities
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 md:mx-0 md:text-base md:leading-relaxed">
            A multidisciplinary toolkit — bridging data, strategy, and technology.
          </p>
          <p className="mt-2 text-xs font-medium tracking-wide text-slate-500 md:text-sm">
            Data → Business → Product → Tech
          </p>
        </header>

        <div className="mb-14 grid grid-cols-1 gap-10 lg:grid-cols-5 lg:items-start">
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
              {capabilityCards.map((c) => {
                const base =
                  "group relative flex h-full min-h-[11rem] flex-col overflow-hidden rounded-3xl border bg-white/[0.035] backdrop-blur-xl transition will-change-transform"
                const motion = "hover:-translate-y-1 hover:scale-[1.02] md:hover:scale-[1.03]"

                const toneBorder =
                  c.tone === "sky"
                    ? "border-sky-400/22 hover:border-sky-300/45"
                    : c.tone === "violet"
                      ? "border-violet-400/22 hover:border-violet-300/45"
                      : c.tone === "emerald"
                        ? "border-emerald-400/22 hover:border-emerald-300/45"
                        : "border-amber-400/22 hover:border-amber-300/45"

                const glow =
                  c.tone === "sky"
                    ? "bg-[radial-gradient(circle_at_35%_25%,rgba(56,189,248,0.22),transparent_62%)]"
                    : c.tone === "violet"
                      ? "bg-[radial-gradient(circle_at_35%_25%,rgba(167,139,250,0.24),transparent_62%)]"
                      : c.tone === "emerald"
                        ? "bg-[radial-gradient(circle_at_35%_25%,rgba(52,211,153,0.22),transparent_62%)]"
                        : "bg-[radial-gradient(circle_at_35%_25%,rgba(251,191,36,0.20),transparent_62%)]"

                const chipTone =
                  c.tone === "sky"
                    ? "border-sky-400/30 bg-sky-500/12 text-sky-100"
                    : c.tone === "violet"
                      ? "border-violet-400/30 bg-violet-500/12 text-violet-100"
                      : c.tone === "emerald"
                        ? "border-emerald-400/30 bg-emerald-500/12 text-emerald-100"
                        : "border-amber-400/30 bg-amber-500/12 text-amber-50"

                const gridSpan =
                  c.title === "Product Thinking"
                    ? "lg:col-span-8"
                    : c.title === "Business Impact"
                      ? "lg:col-span-4"
                      : "lg:col-span-6"

                const rowPos =
                  c.title === "Product Thinking" || c.title === "Business Impact"
                    ? "lg:row-start-2"
                    : "lg:row-start-1"

                return (
                  <PremiumGlassCard
                    key={c.title}
                    tiltMaxDeg={4}
                    className={[base, toneBorder, motion, gridSpan, rowPos].join(" ")}
                  >
                    <div
                      className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${glow}`}
                    />
                    <div className="p-6 pb-2 md:p-7 md:pb-3">
                      <h3 className="text-[1.125rem] font-semibold leading-snug text-slate-50 md:text-xl">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400 md:text-[0.95rem]">{c.blurb}</p>
                    </div>
                    <div className="flex flex-1 flex-col p-6 pt-0 md:p-7 md:pt-0">
                      <div className="flex flex-wrap items-start gap-2">
                        {c.items.map((s) => (
                          <span
                            key={s}
                            className={cn(
                              "rounded-full border px-2.5 py-1 text-[12px] font-medium leading-tight md:text-[13px]",
                              chipTone
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

          <aside className="lg:col-span-2">
            <div className="sticky top-24 rounded-3xl border border-white/12 bg-white/[0.03] p-5 backdrop-blur-xl md:p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Toolkit</p>
              <h3 className="mt-2 text-[1.25rem] font-semibold leading-tight text-slate-100">
                Tools Behind Every Mission
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                From data pipelines to shipped prototypes.
              </p>

              <div className="mt-6 space-y-6">
                {toolGroups.map((g) => (
                  <div key={g.title} className="space-y-3">
                    <div>
                      <div
                        className={cn(
                          "text-[11px] font-semibold uppercase tracking-[0.26em]",
                          g.accent === "sky" && "text-sky-300/90",
                          g.accent === "violet" && "text-violet-300/90",
                          g.accent === "emerald" && "text-emerald-300/90"
                        )}
                      >
                        {g.title}
                      </div>
                      <div
                        className={cn(
                          "mt-1 text-[13px] leading-snug",
                          g.accent === "sky" && "text-sky-200/55",
                          g.accent === "violet" && "text-violet-200/55",
                          g.accent === "emerald" && "text-emerald-200/55"
                        )}
                      >
                        {g.subtitle}
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-x-2 gap-y-3 sm:grid-cols-3">
                      {g.tools.map((tool, index) => (
                        <ToolTile
                          key={tool.slug}
                          slug={tool.slug}
                          src={tool.logo}
                          name={tool.name}
                          index={index}
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

        <ScrollReveal variant="soft" className="mx-auto max-w-7xl">
          <div className="space-y-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500">
                Industry diversity
              </p>
              <h3 className="mt-2 text-[1.75rem] font-semibold leading-tight tracking-tight text-slate-50 md:text-[2rem]">
                Exploring multiple worlds.
              </h3>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400 md:text-base md:leading-relaxed">
                Cross-industry experience, unified by one approach: turn data into insight, and insight into action.
              </p>
              <div className="mt-4 max-w-3xl space-y-1.5 text-sm leading-relaxed text-slate-500 md:text-[0.95rem] md:leading-relaxed">
                <p>Each orbit is a different industry.</p>
                <p>
                  The method stays the same — find the signal, build the solution, deliver the impact.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Rail
                title="Orbit feed · Multi-industry trails"
                subtitle="Industries explored, patterns uncovered."
                accentClass="text-sky-300/85"
                items={orbitRows[0]}
                speed="72s"
              />
              <Rail
                title="Orbit feed · Experiments & explorations"
                subtitle="Where curiosity leads the analysis."
                accentClass="text-violet-300/85"
                items={orbitRows[1]}
                speed="84s"
              />
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
