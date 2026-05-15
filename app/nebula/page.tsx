"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Award, MapPin, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PremiumGlassCard } from "@/components/premium-glass-card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { PageCornerLottie } from "@/components/page-corner-lottie"
import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"

type NebulaKind = "Volunteer" | "Networking" | "Talks" | "Workshop" | "Organizing"

function nebulaKindChipClass(kind: NebulaKind, active: boolean): string {
  const tones: Record<NebulaKind, { on: string; off: string }> = {
    Organizing: {
      on: "border-amber-300/55 bg-amber-500/35 text-amber-50 shadow-[0_0_12px_rgba(245,158,11,0.2)]",
      off: "border-amber-400/30 bg-amber-950/25 text-amber-100/95 hover:bg-amber-500/15",
    },
    Volunteer: {
      on: "border-emerald-300/55 bg-emerald-500/35 text-emerald-50 shadow-[0_0_12px_rgba(52,211,153,0.2)]",
      off: "border-emerald-400/30 bg-emerald-950/25 text-emerald-100/95 hover:bg-emerald-500/15",
    },
    Networking: {
      on: "border-sky-300/55 bg-sky-500/35 text-sky-50 shadow-[0_0_12px_rgba(56,189,248,0.2)]",
      off: "border-sky-400/30 bg-sky-950/25 text-sky-100/95 hover:bg-sky-500/15",
    },
    Talks: {
      on: "border-violet-300/55 bg-violet-500/35 text-violet-50 shadow-[0_0_12px_rgba(167,139,250,0.22)]",
      off: "border-violet-400/30 bg-violet-950/25 text-violet-100/95 hover:bg-violet-500/15",
    },
    Workshop: {
      on: "border-orange-300/55 bg-orange-500/35 text-orange-50 shadow-[0_0_12px_rgba(251,146,60,0.2)]",
      off: "border-orange-400/30 bg-orange-950/25 text-orange-100/95 hover:bg-orange-500/15",
    },
  }
  const t = tones[kind]
  return cn(
    "inline-flex h-7 items-center rounded-full border px-3 text-xs font-medium whitespace-nowrap cursor-pointer transition",
    active ? t.on : t.off
  )
}

type NebulaActivityItem = {
  slug: string
  title: string
  org: string
  date: string
  /** Short teaser on the card */
  summary: string
  cover: string
  location?: string
  kinds: NebulaKind[]
  /** Longer copy in the detail dialog (defaults to summary) */
  detailSummary?: string
  /** Extra photos shown in the dialog (cover is always the card hero) */
  gallery?: string[]
  /** Top-right pill on the card (e.g. Co-founder) */
  roleBadge?: string
}

export default function NebulaPage() {
  const [q, setQ] = useState("")
  const [selectedKinds, setSelectedKinds] = useState<NebulaKind[]>([])
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<NebulaActivityItem | null>(null)
  const [visibleCount, setVisibleCount] = useState(16)
  const sentinelRef = useRef<HTMLDivElement | null>(null)

  const activities: NebulaActivityItem[] = [
    {
      slug: "launchpad-s1-shanghai-2026",
      title: "Launchpad S1",
      org: "Launchpad",
      date: "2026.01",
      roleBadge: "Co-founder",
      summary:
        "Co-founded and helped lead a global GTM-focused innovation event in Shanghai (3 days, 2 nights)—bridging hackathon projects and early startups to real users through rapid testing, content, launch strategy, and community exposure.",
      detailSummary:
        "As one of the organizers of Launchpad S1, I helped build and lead a global go-to-market focused innovation event designed to bridge the gap between hackathon projects, early-stage startups, and real-world users. The event brought together founders, builders, marketers, and creators to help promising products move beyond prototypes and enter the market through rapid user testing, content creation, launch strategy design, and community exposure. I was involved in shaping the overall event experience, coordinating cross-functional collaboration, and creating an environment where innovative products could gain real traction, feedback, and visibility within just a few days.",
      cover: "/competition/launchpad.png",
      gallery: ["/competition/Launchpad1.png", "/competition/launchpad2.png", "/competition/launchpad3.png"],
      location: "Shanghai · 3-day / 2-night program",
      kinds: ["Organizing", "Networking"],
    },
    {
      slug: "finma-westpac-collaboration-session-2025",
      title: "FINMA & Westpac Event",
      org: "FINMA × Westpac",
      date: "2026.05",
      summary:
        "Collaborative session between Swiss market supervision and Westpac on how regulation, compliance technology, and regional banking innovation intersect in practice.",
      detailSummary:
        "Joined an invite-only session at Westpac’s Sydney office bringing together FINMA perspectives and Westpac’s regional banking context. The discussion centered on supervisory expectations, how compliance and risk tooling is evolving alongside digital channels, and what “good” looks like when translating global regulatory principles into day-to-day product and control design. I left with a sharper mental model for how regulators and large banks align on transparency, resilience, and customer trust—and how those themes show up in roadmaps, third-party risk, and cross-border operations.",
      cover: "/activities/westpac.png",
      location: "Westpac Office, Sydney",
      kinds: ["Talks", "Networking"],
    },
    {
      slug: "ubs-wif-exclusive-trade-floor-walk-2026",
      title: "WIF × UBS | Exclusive Trade Floor Walk",
      org: "Women in Finance × UBS",
      date: "2026.05",
      summary:
        "Small-group visit to UBS’s Sydney trading floor: how risk, liquidity, and client flow come together in real time—and what “good” looks like when markets move fast.",
      detailSummary:
        "Hosted by Women in Finance (WIF) at UBS’s Sydney office, this session was built as a candid, behind-the-scenes look at how a global markets desk operates day-to-day—not as a generic tour, but as a conversation about workflows, controls, and culture. We walked through how traders and structurers coordinate around live risk limits, how information is triaged when volatility spikes, and how client conversations translate into execution and hedging choices. I left with a clearer picture of the skills that matter on the floor (judgment under uncertainty, communication discipline, and cross-team trust) and how those map to recruiting signals and early-career development paths.",
      cover: "/activities/ubswif.png",
      location: "UBS Office, Sydney",
      kinds: ["Networking", "Talks"],
    },
    {
      slug: "accenture-businessone-case-crack-2026",
      title: "Accenture × BusinessOne | Case Crack 2026",
      org: "Accenture × BusinessOne Society",
      date: "2026.05",
      summary:
        "Fast-paced case crack with Accenture practitioners—problem framing, hypothesis trees, and a credible storyline you can defend in 24 hours of pressure.",
      detailSummary:
        "Held at Accenture’s Sydney office with BusinessOne Society, this Case Crack was structured like a compressed consulting sprint: a messy business problem, incomplete data, and a panel expecting clarity—not jargon. We practiced breaking the question into drivers, prioritizing what matters for the client’s decision, and translating analysis into a simple narrative with explicit trade-offs. The Accenture team emphasized how they evaluate recommendations in real engagements (traceability, implementation risk, and stakeholder alignment), which sharpened my instinct for what “good enough to present” looks like versus what’s just interesting analysis. Great practice for structured communication under time pressure.",
      cover: "/activities/accentureb1.png",
      location: "Accenture Office, Sydney",
      kinds: ["Networking", "Workshop"],
    },
    {
      slug: "morgan-stanley-unit-industry-insight-evening-2026",
      title: "UNIT Industry Insight Evening",
      org: "Morgan Stanley",
      date: "2026.04",
      summary:
        "Office session hosted by Morgan Stanley’s UNIT program, focused on how teams think about industry structure, competitive dynamics, and client problems. Took away a clearer picture of day-to-day analyst work, plus concrete recruiting advice and CV/behavioral signals that matter.",
      cover: "/activities/morgan.png",
      location: "Morgan Stanley Office, Sydney",
      kinds: ["Talks", "Networking"],
    },
    {
      slug: "postgresql-sydney-meetup-april-2026",
      title: "PostgreSQL Sydney Meetup — April 2026",
      org: "PostgreSQL Sydney",
      date: "2026.04",
      summary:
        "Community meetup covering Postgres performance tuning, indexing trade-offs, and operational reliability in real systems. Left with a tighter mental model for query planning, observability signals, and how teams keep data services stable under load.",
      cover: "/activities/postgre.png",
      location: "Fujitsu Office, Sydney",
      kinds: ["Talks", "Networking"],
    },
    {
      slug: "pimco-career-catalyst-evening",
      title: "PIMCO Career Catalyst Evening",
      org: "PIMCO",
      date: "2026.4",
      summary:
        "Perspectives on macro investing and the role of analysts in navigating market uncertainty. Useful framing on how research, risk, and client context connect in decision-making, plus a few heuristics for communicating views under uncertainty.",
      cover: "/activities/PIMCO.png",
      location: "PIMCO Office, Sydney",
      kinds: ["Networking", "Talks"],
    },
    
    {
      slug: "vercel-relevance-ai-syd",
      title: "Vercel × Relevance AI (AI SYD)",
      org: "Vercel × Relevance AI",
      date: "2026.4",
      summary:
        "Building agents, rapid feedback loops, and how tooling accelerates iteration in practice.",
      cover: "/activities/revelanceai.png",
      location: "Revelance AI Office, Sydney",
      kinds: ["Talks", "Networking"],
    },
    {
      slug: "sydney-data-engineering-meetup-delta-sharing",
      title: "Sydney Data Engineering Meetup",
      org: "Data Engineering Meetup",
      date: "2026.4",
      summary:
        "Deep dives into Delta Sharing, data contracts, and how modern data systems are becoming more open and interoperable.",
      cover: "/activities/optiver.png",
      location: "Optiver Office, Sydney",
      kinds: ["Talks", "Networking"],
    },
    {
      slug: "paypal-developer-meetup",
      title: "PayPal Developer Meetup",
      org: "PayPal",
      date: "2026.4",
      summary:
        "Insights into real-world developer ecosystems and the product infrastructure behind them. Focused on platform thinking (docs, SDKs, trust), and how product teams measure activation and reduce friction for builders.",
      cover: "/activities/paypal.png",
      location: "Paypal Office, Sydney",
      kinds: ["Talks", "Networking"],
    },
    {
      slug: "jane-street-strategy-product",
      title: "Jane Street — Strategy & Product Session",
      org: "Jane Street",
      date: "2026.3",
      summary:
        "A session on structured thinking, decision-making under uncertainty, and turning ideas into execution.",
      cover: "/activities/js.jpg",
      location: "Saltbox",
      kinds: ["Talks"],
    },
    
    {
      slug: "cursor-meetup-unsw",
      title: "Cursor Meetup @ UNSW",
      org: "Cursor",
      date: "2026.3",
      summary:
        "Hands-on exposure to AI-assisted development and how modern workflows are being reshaped.",
      cover: "/activities/cursorunsw.png",
      location: "UNSW Campus",
      kinds: ["Workshop", "Networking"],
    },
    {
      slug: "visagio-insights-night",
      title: "Visagio Insights Night",
      org: "Visagio",
      date: "2026.3",
      summary:
        "Consulting perspectives on problem-solving, structured thinking, and communicating decisions clearly.",
      cover: "/activities/Visagio.png",
      location: "Stone & Chalk Tech Central, Sydney",
      kinds: ["Talks", "Networking"],
    },
    {
      slug: "international-womens-day-inner-circle",
      title: "International Women’s Day Inner Circle",
      org: "IWD Inner Circle",
      date: "2026.3",
      summary:
        "Listening to people share where they started, what shaped them, and how they built confidence and momentum through uncertainty.",
      cover: "/activities/founderedge.png",
      location: "Stone & Chalk Tech Central, Sydney",
      kinds: ["Talks", "Networking"],
    },
    {
      slug: "data-ai-con-2026-dataops-agentic-ai",
      title: "Data + AI Con ’26: When DataOps Meets Agentic AI",
      org: "Data + AI Con",
      date: "2026.3",
      summary:
        "How DataOps principles and agentic AI patterns are converging to reshape modern data platforms and delivery.",
      cover: "/activities/dataai.jpg",
      location: "UTS Startup",
      kinds: ["Talks"],
    },
    {
      slug: "salesforce-agentforce-summit-2026",
      title: "Agentforce Summit",
      org: "Salesforce",
      date: "2026.2",
      summary:
        "Summit on Agentforce patterns, Data Cloud, and how enterprises operationalize agent workflows with governance and observability.",
      cover: "/activities/agentforce.png",
      location: "Salesforce Office, Sydney",
      kinds: ["Talks", "Networking"],
    },
    {
      slug: "microsoft-code-without-barriers",
      title: "Code; Without Barriers",
      org: "Microsoft",
      date: "2025.11",
      summary:
        "Event featuring women leaders and engineers sharing their journeys, challenges, and growth strategies in tech.",
      cover: "/activities/microsoft.jpg",
      location: "Microsoft Office, Sydney",
      kinds: ["Talks", "Networking"],
    },
    {
      slug: "ey-suede-panel-event-2025",
      title: "EY x SUEDE Society Panel Event",
      org: "EY",
      date: "2025.11",
      summary:
        "Panel discussion on career pathways, problem-solving approaches, and real-world consulting experiences.",
      cover: "/activities/ey-ui.jpg",
      location: "EY Office, Sydney",
      kinds: ["Talks", "Networking"],
    },
    {
      slug: "salesforce-summit-agentforce-2025",
      title: "Salesforce Summit: Agentforce & Data Cloud",
      org: "Salesforce",
      date: "2025.11",
      summary:
        "Summit on Agentforce, Data Cloud, and the future of AI-driven customer platforms.",
      cover: "/activities/saleforces.jpg",
      location: "Salesforce Office, Sydney",
      kinds: ["Talks", "Networking"],
    },
    {
      slug: "power-bi-workshop-capgemini-2025",
      title: "Power BI Workshop",
      org: "Capgemini",
      date: "2025.10",
      summary:
        "Hands-on session using practice datasets to build Power BI reports and get started with BI tools.",
      cover: "/activities/powerbi.png",
      location: "Capgemini Office, Sydney",
      kinds: ["Workshop"],
    },
    {
      slug: "ey-parthenon-analytics-ma-2025",
      title: "Analytics Powering the Future of M&A",
      org: "EY-Parthenon",
      date: "2025.10",
      summary:
        "Session on turning data collection and analysis into an equity story — acquisition-grade KPIs, QoE lenses, cohorts, and sensitivity modeling.",
      cover: "/activities/eypar.png",
      location: "USYD Campus",
      kinds: ["Talks"],
    },
    {
      slug: "ibus-industry-speed-mentoring-2025",
      title: "IBUS Industry Speed Mentoring",
      org: "IBUS",
      date: "2025.10",
      summary:
        "Speed mentoring event connecting students with industry mentors and practical recruiting advice.",
      cover: "/activities/ibus.png",
      location: "USYD Campus",
      kinds: ["Networking"],
    },
    {
      slug: "ai-amplified-nvidia-2025",
      title: "AI Amplified (In Partnership with NVIDIA)",
      org: "NVIDIA",
      date: "2025.10",
      summary:
        "Reflections on Physical AI, robotics, and how compute plus hardware/software stacks push AI into real-world operations.",
      cover: "/activities/nvidia.png",
      location: "Stone & Chalk Tech Central, Sydney",
      kinds: ["Talks", "Networking"],
    },
    {
      slug: "design-with-impact-jahin-tanvir-2025",
      title: "Design with Impact: Confidence and Communication",
      org: "Canva",
      date: "2025.10",
      summary:
        "Interactive workshop on building confidence and impactful communication skills.",
      cover: "/activities/design.png",
      location: "Canva Office, Sydney",
      kinds: ["Workshop"],
    },
    {
      slug: "pathways-into-goldman-sachs-2025",
      title: "Pathways into Goldman Sachs",
      org: "Goldman Sachs",
      date: "2025.10",
      summary:
        "Campus info session providing insights into career pathways, recruitment strategies, and opportunities.",
      cover: "/activities/goldmansachs.png",
      location: "USYD Campus",
      kinds: ["Talks"],
    },
    {
      slug: "sudata-forecast-reconciliation-2025",
      title: "Forecast Reconciliation in Practice (SUData Society)",
      org: "SUData Society",
      date: "2025.10",
      summary:
        "Campus talk on hierarchical & grouped forecasting: model choices, reconciliation methods, and evaluation.",
      cover: "/activities/forecast.png",
      location: "USYD Campus",
      kinds: ["Talks"],
    },
    {
      slug: "high-flyers-growth-summit-2025",
      title: "High Flyers 2025 Growth Summit",
      org: "Macquarie Capital",
      date: "2025.10",
      summary:
        "Full-day summit: growth capital insights, founder playbooks, operator perspectives, and an AI moat panel.",
      cover: "/activities/flyers.png",
      location: "Macquarie Office, Sydney",
      kinds: ["Talks", "Networking"],
    },
    {
      slug: "atlassian-office-tour-2025",
      title: "Atlassian Office Tour & Graduate Panel",
      org: "Atlassian",
      date: "2025.10",
      summary:
        "Visit Atlassian’s Sydney HQ: culture and product/engineering overview, plus a graduate panel.",
      cover: "/activities/atlassian.png",
      location: "Atlassian Office, Sydney",
      kinds: ["Networking", "Talks"],
    },
    {
      slug: "google-io-extended-2025-sydney-ai-cloud",
      title: "Google I/O Extended 2025 Sydney — AI/Cloud Edition",
      org: "GDG Sydney",
      date: "2025.09",
      summary:
        "AI/Cloud: extending platforms with agentic features; what works (and doesn’t) in production.",
      cover: "/activities/googleai.png",
      location: "Google Office, Sydney",
      kinds: ["Talks", "Networking"],
    },
    {
      slug: "google-io-extended-2025-sydney-mobile",
      title: "Google I/O Extended 2025 Sydney — Mobile Edition",
      org: "GDG Sydney",
      date: "2025.09",
      summary:
        "Workshop on MCP + building Android apps for all devices.",
      cover: "/activities/googlemobile.png",
      location: "Google Office, Sydney",
      kinds: ["Talks", "Networking"],
    },
    {
      slug: "championing-women-in-science-leadership",
      title: "Championing Women in Science Leadership",
      org: "Campus",
      date: "2025.09",
      summary:
        "Career development and leadership experiences from women in science.",
      cover: "/activities/women-in-science.png",
      location: "USYD Campus",
      kinds: ["Talks", "Networking"],
    },
    {
      slug: "syncs-wit-her-tech-journey",
      title: "SYNCSxWIT — Her Tech Journey: Women’s Pathway Into Tech",
      org: "SYNCS x WIT",
      date: "2025.09",
      summary:
        "Stories, resources, and pathways for women entering and growing in tech.",
      cover: "/activities/her-tech-journey.png",
      location: "USYD Campus",
      kinds: ["Talks", "Networking"],
    },
    {
      slug: "discover-bloomberg-sydney-2025",
      title: "2025 Discover Bloomberg Sydney",
      org: "Bloomberg",
      date: "2025.09",
      summary:
        "Onsite visit to explore products, engineering culture, and career paths.",
      cover: "/activities/bloomberg-discover.png",
      location: "Bloomberg Office, Sydney",
      kinds: ["Networking", "Talks"],
    },
    {
      slug: "data-science-intern-panel-campus",
      title: "Data Science Intern Panel",
      org: "Campus",
      date: "2025.09",
      summary:
        "Interns and alumni share project experiences, interview prep, and skill building.",
      cover: "/activities/ds-intern-panel.png",
      location: "USYD Campus",
      kinds: ["Talks", "Networking"],
    },
    {
      slug: "google-genai-academy",
      title: "Google GenAI Academy Launch — Agents and the New Software Paradigm",
      org: "GDG Sydney",
      date: "2025.09",
      summary:
        "Launch event on agents, generative AI, and the future of software development.",
      cover: "/activities/genai.png",
      location: "Google Office, Sydney",
      kinds: ["Talks", "Networking"],
    },
    {
      slug: "ignite-chatgpt-nocode",
      title: "How to Leverage ChatGPT & No-Code AI",
      org: "StartupLink USYD",
      date: "2025.09",
      summary:
        "Exploring how founders can use ChatGPT and no-code tools to build smarter, faster MVPs.",
      cover: "/activities/gpt.png",
      location: "USYD Campus",
      kinds: ["Talks", "Workshop"],
    },
    {
      slug: "ignite-build-mvp",
      title: "Build the Right Thing: Ideas to MVP",
      org: "StartupLink USYD",
      date: "2025.09",
      summary:
        "A practical guide to validating startup ideas and translating them into minimum viable products.",
      cover: "/activities/mvp.png",
      location: "USYD Campus",
      kinds: ["Talks", "Workshop"],
    },
    {
      slug: "ignite-startup-monetisation",
      title: "How Your Startup Makes Money / Business Models That Work",
      org: "StartupLink USYD",
      date: "2025.09",
      summary:
        "Insights on sustainable revenue models and monetisation strategies for early-stage startups.",
      cover: "/activities/ignite.png",
      location: "USYD Campus",
      kinds: ["Talks"],
    },
    {
      slug: "rabobank-office-tour",
      title: "Office Tour — Rabobank Australia",
      org: "Rabobank",
      date: "2025.08",
      summary:
        "Banking tech stack, risk systems, and a peek into product operations.",
      cover: "/activities/ra1.png",
      location: "Rabobank Office, Sydney",
      kinds: ["Networking"],
    },
    {
      slug: "ey-applicants-interviews",
      title: "EY Presents: Applicants and Interviews",
      org: "EY",
      date: "2025.08",
      summary:
        "Insights on application processes, interview prep, and career pathways.",
      cover: "/activities/ey1.png",
      location: "USYD Campus",
      kinds: ["Networking", "Talks"],
    },
    {
      slug: "gurobi-community-meetup",
      title: "Gurobi Community Meetup",
      org: "Gurobi",
      date: "2025.08",
      summary:
        "Optimisation case studies: LP/IP modeling, solver tuning, and applications.",
      cover: "/activities/gurobi1.png",
      location: "Swiss Hotel",
      kinds: ["Networking", "Talks"],
    },
    {
      slug: "microsoft-chat-and-hack",
      title: "Chat & Hack: Microsoft Careers Day (On Campus)",
      org: "Microsoft",
      date: "2025.03",
      summary:
        "Career chats, hack-style demos, and routes into product & engineering.",
      cover: "/activities/microsoft1.png",
      location: "USYD Campus",
      kinds: ["Networking", "Talks"],
    },
    {
      slug: "bain-career-in-consulting",
      title: "A Career in Consulting with Bain & Company",
      org: "Bain & Company",
      date: "2025.03",
      summary:
        "Pathways into strategy consulting, recruiting tips, and day-in-the-life insights.",
      cover: "/activities/bain1.png",
      location: "USYD Campus",
      kinds: ["Networking", "Talks"],
    },
    {
      slug: "hongkong-flow-trader",
      title: "Hongkong Flow Trader",
      org: "Industry Insights",
      date: "2025.03",
      summary: "Flow trading landscape, pricing, risk, and life on the trading floor.",
      cover: "/activities/flow1.png",
      location: "USYD Campus",
      kinds: ["Talks"],
    },
    {
      slug: "ai-power-struggle-regulation",
      title: "The AI Power Struggle: China, the US and the Future of Regulation",
      org: "Policy & Governance",
      date: "2025.04",
      summary: "Global AI regulation, safety vs. innovation, cross-border governance trends.",
      cover: "/activities/ai.png",
      location: "USYD Campus",
      kinds: ["Talks"],
    },
    {
      slug: "rhombus-ai-workshop",
      title: "AI Workshop with Rhombus AI",
      org: "Rhombus AI",
      date: "2025.04",
      summary: "Hands-on with LLM tooling, data pipelines, and prompt workflows.",
      cover: "/activities/rhombus.png",
      location: "USYD Campus",
      kinds: ["Talks"],
    },
    {
      slug: "faculty-stem-panel",
      title: "Faculty of Science STEM Panel Discussion",
      org: "Faculty of Science",
      date: "2024.08",
      summary: "Panel discussion on STEM careers, research opportunities, and student pathways.",
      cover: "/activities/stem.png",
      location: "USYD Campus",
      kinds: ["Talks"],
    },
    {
      slug: "linkedin-all-star-profile",
      title: "LinkedIn: Building an All-Star Profile",
      org: "Career Center",
      date: "2024.08",
      summary: "Profile optimisation, storytelling, and networking best practices.",
      cover: "/activities/linkedin.png",
      location: "USYD Campus",
      kinds: ["Networking", "Talks"],
    },
    {
      slug: "city2surf-volunteer",
      title: "City2Surf Marathon Volunteer",
      org: "City2Surf",
      date: "2024.08",
      summary: "Supported race logistics, assisted in crowd management and final medal distribution.",
      cover: "/activities/city2.png",
      location: "Bondi Beach",
      kinds: ["Volunteer"],
    },
  ]
  

  const chips: NebulaKind[] = useMemo(
    () => ["Organizing", "Volunteer", "Networking", "Talks", "Workshop"],
    []
  )

  const filtered = activities.filter((a) => {

    const tokens = q.toLowerCase().trim().split(/\s+/).filter(Boolean)
    const hay = [a.title, a.org, a.summary ?? "", a.location ?? ""]
      .join(" ")
      .toLowerCase()
    const textOk = tokens.length === 0 || tokens.every((t) => hay.includes(t))

    const kindOk =
      selectedKinds.length === 0 ||
      a.kinds.some((k) => selectedKinds.includes(k))

    return textOk && kindOk
  })

  const shown = useMemo(() => filtered.slice(0, visibleCount), [filtered, visibleCount])

  // When filters change, reset the visible window so the page feels snappy.
  // (Also reduces the number of images the browser fetches.)
  useEffect(() => {
    setVisibleCount(16)
  }, [q, selectedKinds.join("|")])

  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return
    if (filtered.length <= shown.length) return

    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches
    if (reduced) return

    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0]
        if (e?.isIntersecting) {
          setVisibleCount((n) => Math.min(filtered.length, n + 16))
        }
      },
      { threshold: 0.01, rootMargin: "480px 0px 720px 0px" }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [filtered.length, shown.length])

  const toggleKind = (k: NebulaKind) =>
    setSelectedKinds((prev) =>
      prev.includes(k) ? prev.filter((x) => x !== k) : [...prev, k]
    )

  return (
    <div
      className="relative min-h-screen"
      style={
        {
          ["--pgc-glow-a" as any]: "248 113 113",
          ["--pgc-glow-b" as any]: "244 63 94",
        } as React.CSSProperties
      }
    >
      <Navigation activeSection="nebula" onSectionChange={() => {}} />

      <PageCornerLottie
        side="left"
        className="top-[118px] left-[max(1rem,calc(50%-36rem-4rem))]"
        src="/animations/catch-fish.lottie"
        alt="Fishing animation"
        sizeRem={15}
      />

      <div className="relative z-10 pt-20 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Link href="/">
              <Button className="border mb-4 border-red-400/30 text-rose-200 hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Universe
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-gray-100 mb-3">Nebula</h1>
            <p className="text-gray-200">
              Reflections beyond the core — volunteering, networking and talks I attend.
            </p>
          </div>

      
          <div className="mb-6 space-y-4">
            <div className="relative max-w-xl mx-auto">
              <Input
                placeholder="Search by title,organization,place,keyword…"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="w-full bg-black/30 backdrop-blur-md border-red-400/30 text-gray-100 placeholder:text-gray-400 pr-10"
              />
              {q && (
                <button
                  aria-label="Clear search"
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md hover:bg-white/10 text-gray-300"
                  onClick={() => setQ("")}
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2 justify-center">
              {chips.map((k) => {
                const active = selectedKinds.includes(k)
                return (
                  <span
                    key={k}
                    onClick={() => toggleKind(k)}
                    className={nebulaKindChipClass(k, active)}
                  >
                    {k}
                  </span>
                )
              })}
            </div>
          </div>


          <div className="grid items-start gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4">
            {shown.map((a, idx) => (
              <ScrollReveal key={a.slug} variant="soft" delayMs={Math.min(idx, 10) * 45} className="min-h-0 w-full">
                <button
                  type="button"
                  className="w-full text-left"
                  onClick={() => {
                    setSelected(a)
                    setOpen(true)
                  }}
                  aria-label={`Open details: ${a.title}`}
                >
                  <PremiumGlassCard
                    tiltMaxDeg={5}
                    className="flex w-full flex-col bg-black/25 backdrop-blur-xl border border-red-400/20 hover:bg-black/30 transition-all overflow-hidden shadow-[0_0_26px_rgba(244,63,94,0.10)] hover:border-red-400/35 hover:shadow-[0_0_40px_rgba(248,113,113,0.14)]"
                    title={a.title}
                  >
                    <div className="relative h-24 w-full shrink-0 sm:h-[6.75rem]">
                      <img
                        src={a.cover || "/placeholder.svg"}
                        alt={a.title}
                        loading={idx < 4 ? "eager" : "lazy"}
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                      {a.roleBadge ? (
                        <div className="pointer-events-none absolute right-2 top-2 z-10">
                          <span className="inline-flex items-center gap-1 rounded-full border border-amber-300/40 bg-yellow-500/20 px-2 py-0.5 text-[10px] font-semibold text-amber-100 shadow-lg backdrop-blur-md">
                            <Award className="h-3 w-3 text-amber-300" />
                            {a.roleBadge}
                          </span>
                        </div>
                      ) : null}
                    </div>

                    <div className="flex shrink-0 flex-col px-3 pb-3 pt-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="truncate text-[11px] text-gray-300">{a.org}</span>
                        <span className="shrink-0 text-[11px] text-gray-400">{a.date}</span>
                      </div>
                      <div className="mt-1.5 space-y-1">
                        <div
                          className="line-clamp-2 text-[13px] font-semibold leading-snug text-gray-100"
                          title={a.title}
                        >
                          {a.title}
                        </div>
                        <div className="flex items-start gap-1 text-[11px] leading-snug text-gray-300/90 line-clamp-1">
                          <MapPin className="mt-0.5 h-3 w-3 shrink-0 text-rose-300/70" />
                          <span className="min-w-0">{a.location ?? "\u00a0"}</span>
                        </div>
                        <p className="line-clamp-2 text-[11px] leading-relaxed text-gray-100/88">
                          {a.summary ?? ""}
                        </p>
                      </div>
                    </div>
                  </PremiumGlassCard>
                </button>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            {filtered.length > shown.length ? (
              <div className="text-xs text-slate-400">Scroll to load more…</div>
            ) : (
              <div className="text-xs text-slate-500">You’ve reached the end.</div>
            )}
          </div>
          <div ref={sentinelRef} className="h-8 w-full" aria-hidden="true" />

          <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="border-red-400/20 bg-slate-950/85 text-slate-100 backdrop-blur-xl shadow-[0_0_60px_rgba(248,113,113,0.14)]">
              <DialogHeader>
                <DialogTitle className="text-slate-100">{selected?.title ?? "Details"}</DialogTitle>
                <DialogDescription className="text-slate-300/80">
                  <span className="text-slate-200/90">{selected?.org ?? ""}</span>
                  {selected?.date ? <span> · {selected.date}</span> : null}
                  {selected?.location ? <span> · {selected.location}</span> : null}
                </DialogDescription>
              </DialogHeader>

              {selected?.summary || selected?.detailSummary ? (
                <p className="text-sm leading-6 text-slate-200/90">
                  {selected.detailSummary ?? selected.summary}
                </p>
              ) : null}

              {selected?.gallery?.length ? (
                <div className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-3">
                  {selected.gallery.map((src) => (
                    <div
                      key={src}
                      className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-black/40"
                    >
                      <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
                    </div>
                  ))}
                </div>
              ) : null}

              {selected?.kinds?.length ? (
                <div className="flex flex-wrap gap-2 pt-2">
                  {selected.kinds.map((k) => (
                    <span
                      key={k}
                      className="inline-flex items-center h-7 rounded-full px-3 text-xs border border-red-400/25 bg-red-500/10 text-red-100"
                    >
                      {k}
                    </span>
                  ))}
                </div>
              ) : null}
            </DialogContent>
          </Dialog>

          <div className="text-center mt-10 text-gray-400 text-sm">
            If you’re curious about any of these, I’m always happy to chat and share more—coffee’s on me ☕
          </div>
        </div>
      </div>
    </div>
  )
}

