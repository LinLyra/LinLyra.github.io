"use client"

import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"
import { PremiumGlassCard } from "@/components/premium-glass-card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { deriveIndustryTagsFromOrbit } from "@/lib/home-industry-tags"
import { orbitItems } from "@/lib/portfolio-orbit"
import { MissionHighlights } from "./mission-highlights"
import { cn } from "@/lib/utils"

type Tool = {
  slug: string
  name: string
  logo: string
}

type ToolGroupAccent = "sky" | "violet" | "emerald"

type CapabilityTone = "sky" | "violet" | "emerald" | "amber" | "indigo"

type CapabilityCardDef = {
  title: string
  blurb: string
  items: string[]
  tone: CapabilityTone
}

const BASE_CAPABILITY_CARDS: CapabilityCardDef[] = [
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

function SignalTicker({
  label,
  items,
  speed,
}: {
  label: string
  items: typeof orbitItems
  speed: string
}) {
  const track = [...items, ...items]

  return (
    <div className="space-y-1">
      <div className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">{label}</div>
      <div className="overflow-hidden rounded-full border border-white/10 bg-black/35 py-1 shadow-inner shadow-black/40 backdrop-blur-sm">
        <div className="ticker-track items-center gap-2 py-0.5" style={{ animationDuration: speed }}>
          {track.map((item, idx) => (
            <Link
              key={`${item.slug}-${idx}`}
              href={item.href}
              className={cn(
                "mx-0.5 inline-flex max-w-[14rem] items-center gap-1.5 rounded-full border px-2.5 py-1 text-left transition",
                "border-white/10 bg-white/[0.04] hover:border-indigo-400/40 hover:bg-white/[0.07] hover:shadow-[0_0_14px_rgba(129,140,248,0.2)]",
                item.section === "business" && "hover:border-emerald-400/35",
                item.section === "data" && "hover:border-sky-400/35",
                item.section === "product" && "hover:border-amber-400/35"
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
              <span className="min-w-0 truncate text-[11px] font-medium leading-none text-slate-200/95">
                {item.title}
              </span>
            </Link>
          ))}
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
      ? "hover:border-sky-400/45 hover:shadow-[0_0_16px_rgba(56,189,248,0.2)]"
      : accent === "violet"
        ? "hover:border-violet-400/45 hover:shadow-[0_0_16px_rgba(167,139,250,0.2)]"
        : "hover:border-emerald-400/45 hover:shadow-[0_0_16px_rgba(52,211,153,0.18)]"

  return (
    <div className="group relative" title={name}>
      <div
        className={cn(
          "grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] backdrop-blur-md transition",
          ring
        )}
      >
        <div
          className={cn(
            "grid place-items-center rounded-lg",
            needsDarkPlate ? "h-9 w-9 bg-black/65 ring-1 ring-white/10" : "h-8 w-8"
          )}
        >
          <Image
            src={src}
            alt=""
            width={64}
            height={64}
            className="h-7 w-7 object-contain"
            style={{
              filter:
                "saturate(1.06) contrast(1.08) brightness(1.1) drop-shadow(0 0 8px rgba(148,163,184,0.1))",
            }}
          />
        </div>
      </div>
    </div>
  )
}

function SkillsSection() {
  const orbit = useMemo(() => orbitItems, [])
  const industryTags = useMemo(() => deriveIndustryTagsFromOrbit(orbit, 22), [orbit])

  const capabilityCards: CapabilityCardDef[] = useMemo(
    () => [
      ...BASE_CAPABILITY_CARDS,
      {
        title: "Cross-Industry Experience",
        blurb: "Applying the same problem-solving framework across diverse industries.",
        items: industryTags,
        tone: "indigo",
      },
    ],
    [industryTags]
  )

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

  const orbitRows = useMemo(() => {
    const rows = [[], []] as typeof orbitItems[]
    orbit.forEach((x, i) => rows[i % 2].push(x))
    return rows
  }, [orbit])

  const toneBorder = (tone: CapabilityTone) =>
    tone === "sky"
      ? "border-sky-400/22 hover:border-sky-300/45"
      : tone === "violet"
        ? "border-violet-400/22 hover:border-violet-300/45"
        : tone === "emerald"
          ? "border-emerald-400/22 hover:border-emerald-300/45"
          : tone === "indigo"
            ? "border-indigo-400/22 hover:border-indigo-300/45"
            : "border-amber-400/22 hover:border-amber-300/45"

  const glow = (tone: CapabilityTone) =>
    tone === "sky"
      ? "bg-[radial-gradient(circle_at_35%_25%,rgba(56,189,248,0.22),transparent_62%)]"
      : tone === "violet"
        ? "bg-[radial-gradient(circle_at_35%_25%,rgba(167,139,250,0.24),transparent_62%)]"
        : tone === "emerald"
          ? "bg-[radial-gradient(circle_at_35%_25%,rgba(52,211,153,0.22),transparent_62%)]"
          : tone === "indigo"
            ? "bg-[radial-gradient(circle_at_35%_25%,rgba(129,140,248,0.24),transparent_62%)]"
            : "bg-[radial-gradient(circle_at_35%_25%,rgba(251,191,36,0.20),transparent_62%)]"

  const chipTone = (tone: CapabilityTone) =>
    tone === "sky"
      ? "border-sky-400/30 bg-sky-500/12 text-sky-100 hover:border-indigo-400/40 hover:bg-indigo-500/12"
      : tone === "violet"
        ? "border-violet-400/30 bg-violet-500/12 text-violet-100 hover:border-indigo-400/40 hover:bg-indigo-500/12"
        : tone === "emerald"
          ? "border-emerald-400/30 bg-emerald-500/12 text-emerald-100 hover:border-indigo-400/40 hover:bg-indigo-500/12"
          : tone === "indigo"
            ? "border-indigo-400/30 bg-indigo-500/12 text-indigo-100 hover:border-indigo-300/50 hover:bg-indigo-500/18"
            : "border-amber-400/30 bg-amber-500/12 text-amber-50 hover:border-indigo-400/40 hover:bg-indigo-500/12"

  return (
    <section id="skills" className="relative z-10 px-4 py-12 md:py-16">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 text-center md:text-left">
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-500">Overview</p>
          <h2 className="mt-2 text-[1.75rem] font-semibold leading-tight tracking-tight text-slate-50 md:text-[2rem]">
            Capabilities
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-slate-400 md:mx-0 md:text-base">
            A multidisciplinary toolkit — bridging data, strategy, and technology.
          </p>
          <p className="mt-1.5 text-xs font-medium tracking-wide text-slate-500 md:text-sm">
            Data → Business → Product → Tech
          </p>
        </header>

        <div className="mb-8 grid grid-cols-1 gap-5 lg:grid-cols-12">
          {capabilityCards.map((c) => {
            const base =
              "group relative flex min-h-[10.5rem] flex-col overflow-hidden rounded-3xl border bg-white/[0.035] backdrop-blur-xl transition will-change-transform"
            const motion = "hover:-translate-y-2 hover:scale-[1.02]"

            const gridSpan =
              c.title === "Cross-Industry Experience"
                ? "lg:col-span-12"
                : c.title === "Product Thinking"
                  ? "lg:col-span-8"
                  : c.title === "Business Impact"
                    ? "lg:col-span-4"
                    : "lg:col-span-6"

            const rowPos =
              c.title === "Cross-Industry Experience"
                ? "lg:row-start-3"
                : c.title === "Product Thinking" || c.title === "Business Impact"
                  ? "lg:row-start-2"
                  : "lg:row-start-1"

            return (
              <PremiumGlassCard
                key={c.title}
                tiltMaxDeg={3}
                className={cn(base, toneBorder(c.tone), motion, gridSpan, rowPos)}
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
                          "rounded-full border px-2 py-0.5 text-[11px] font-medium leading-tight transition md:px-2.5 md:py-1 md:text-[12px]",
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

        <div className="mb-8 rounded-2xl border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-4 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-5">
          <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-slate-500">Toolkit</p>
              <h3 className="text-base font-semibold text-slate-100 md:text-lg">Tools Behind Every Mission</h3>
            </div>
            <p className="text-xs text-slate-500 md:text-right md:text-sm">From data pipelines to shipped prototypes.</p>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3 md:gap-x-8">
            {toolGroups.map((g) => (
              <div key={g.title} className="flex flex-wrap items-center gap-2 md:gap-2.5">
                <div className="mr-1 shrink-0 md:mr-2">
                  <div
                    className={cn(
                      "text-[10px] font-semibold uppercase tracking-[0.22em]",
                      g.accent === "sky" && "text-sky-300",
                      g.accent === "violet" && "text-violet-300",
                      g.accent === "emerald" && "text-emerald-300"
                    )}
                  >
                    {g.title}
                  </div>
                  <div
                    className={cn(
                      "hidden text-[10px] leading-tight sm:block",
                      g.accent === "sky" && "text-sky-200/45",
                      g.accent === "violet" && "text-violet-200/45",
                      g.accent === "emerald" && "text-emerald-200/45"
                    )}
                  >
                    {g.subtitle}
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-1.5">
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

        <ScrollReveal variant="soft" className="mx-auto max-w-7xl">
          <div className="space-y-5">
            <div className="rounded-2xl border border-white/8 bg-black/20 px-4 py-3 backdrop-blur-sm md:px-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-500">Signal stream</p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500 md:text-sm">
                Lightweight ticker — breadth, not narrative. Tap a chip to open the project.
              </p>
              <div className="mt-3 space-y-2.5">
                <SignalTicker label="Orbit · Multi-industry trails" items={orbitRows[0]} speed="80s" />
                <SignalTicker label="Orbit · Experiments & explorations" items={orbitRows[1]} speed="92s" />
              </div>
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
