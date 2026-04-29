"use client"

import { useMemo, useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, MapPin, X } from "lucide-react"
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

type Kind = "Volunteer" | "Networking" | "Talks" | "Workshop"

type ActivityItem = {
  slug: string
  title: string
  org: string
  date: string
  summary: string
  cover: string
  location?: string
  kinds: Kind[]   
}

export default function NebulaPage() {
  const [q, setQ] = useState("")
  const [selectedKinds, setSelectedKinds] = useState<Kind[]>([])
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<ActivityItem | null>(null)

  const activities: ActivityItem[] = [
   

    {
      slug: "pimco-career-catalyst-evening",
      title: "PIMCO Career Catalyst Evening",
      org: "PIMCO",
      date: "2026.4",
      summary:
        "Perspectives on macro investing and the role of analysts in navigating market uncertainty.",
      cover: "/activities/PIMCO.jpg",
      location: "PIMCO Office, Sydney",
      kinds: ["Networking", "Talks"],
    },
    {
      slug: "jane-street-strategy-product",
      title: "Jane Street — Strategy & Product Discussion",
      org: "Jane Street",
      date: "2026.3",
      summary:
        "A session on structured thinking, decision-making under uncertainty, and turning ideas into execution.",
      cover: "/activities/js.jpg",
      location: "Saltbox",
      kinds: ["Talks"],
    },
    {
      slug: "vercel-relevance-ai-syd",
      title: "Vercel × Relevance AI (AI SYD)",
      org: "Vercel × Relevance AI",
      date: "2026.4",
      summary:
        "Building agents, rapid feedback loops, and how tooling accelerates iteration in practice.",
      cover: "/activities/Revelance.jpg",
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
      cover: "/activities/optiver.jpg",
      location: "Optiver Office, Sydney",
      kinds: ["Talks", "Networking"],
    },
    {
      slug: "paypal-developer-meetup",
      title: "PayPal Developer Meetup",
      org: "PayPal",
      date: "2026.4",
      summary:
        "Insights into real-world developer ecosystems and the product infrastructure behind them.",
      cover: "/activities/Paypal.jpg",
      location: "Paypal Office, Sydney",
      kinds: ["Talks", "Networking"],
    },
    {
      slug: "cursor-meetup-unsw",
      title: "Cursor Meetup @ UNSW",
      org: "Cursor",
      date: "2026.3",
      summary:
        "Hands-on exposure to AI-assisted development and how modern workflows are being reshaped.",
      cover: "/activities/cursor.jpg",
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
      cover: "/activities/Visagio.jpg",
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
      cover: "/activities/women.jpg",
      location: "TStone & Chalk Tech Central, Sydney",
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
      slug: "microsoft-code-without-barriers",
      title: "Code; Without Barriers",
      org: "Microsoft",
      date: "2025.11",
      summary:
        "Attended Microsoft’s Code; Without Barriers event featuring women leaders and engineers sharing their career journeys, challenges, and growth strategies in tech. Gained insights into building confidence, navigating technical careers as a woman, and the importance of inclusive ecosystems in shaping sustainable innovation.",
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
        "Panel discussion jointly hosted by EY and the SUEDE Society, exploring career pathways, problem-solving approaches, and real-world consulting experiences. The event offered practical perspectives on how analytical thinking, communication, and stakeholder management come together in professional services.",
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
        "Industry summit at Salesforce focused on Agentforce, Data Cloud, and the future of AI-driven customer platforms. Learned how data unification, real-time intelligence, and AI agents are reshaping enterprise workflows and customer experiences, reinforcing the role of data infrastructure in scalable AI applications.",
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
    "An introductory, hands-on session using practice datasets to explore how to build effective Power BI reports and get started with data visualization and business intelligence tools.",
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
    "Session on how to turn data collection, preparation, and analysis into an equity story — covering acquisition-grade KPIs, operational data normalization, revenue-to-cash bridges, QoE lenses, cohort and unit economics views, and scenario/sensitivity modeling for stakeholders.",
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
    "Speed mentoring event connecting students with industry mentors. Gained practical advice on building a career in Australia as an international student.",
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
    "Reflections on Physical AI, robotics, and how accelerating compute plus tighter hardware/software stacks are pushing AI into real-world operations. Sparked many ideas for AI × robotics × industrial digitalization.",
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
    "Interactive workshop with Jahin Tanvir on building confidence and impactful communication skills, tailored for design and presentation in professional settings.",
  cover: "/activities/design.png",
  location: "Canva Office,Sydney",
  kinds: ["Workshop"],
},
{
  slug: "pathways-into-goldman-sachs-2025",
  title: "Pathways into Goldman Sachs",
  org: "Goldman Sachs",
  date: "2025.10",
  summary:
    "Campus info session providing insights into career pathways, recruitment strategies, and opportunities at Goldman Sachs for students interested in finance and investment banking.",
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
    "Campus talk on hierarchical & grouped forecasting: base-model choices (ETS/ARIMA), reconciliation methods (MinT/MinT-Shrink), temporal–hierarchical structures, and evaluation (MAPE, WRMSSE). Practical tips for production pipelines.",
  cover: "/activities/forecast.png", 
  location: "USYDCampus",
  kinds: ["Talks"],
},
    {
  slug: "high-flyers-growth-summit-2025",
  title: "High Flyers 2025 Growth Summit",
  org: "Macquarie Capital",
  date: "2025.10",
  summary:
    "Full-day summit: growth capital insights, founder playbooks to 10M+ ARR, operator perspectives, and an AI moat panel. Great investor/founder networking.",
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
    "Visit Atlassian’s Sydney HQ: culture and product/engineering overview, plus a graduate panel on roles, recruiting pathways, and Q&A.",
  cover: "/activities/atlassian.png",
  location: "Atlassian Office, Sydney",
  kinds: ["Networking", "Talks"],
},
    {
  slug: "google-io-extended-2025-sydney-ai-cloud",
  title: "Google I/O Extended 2025 Sydney — AI/Cloud Edition",
  org: "GDG Sydney",
  date: "2025.09",
  summary: "AI/Cloud：1) How you can extend your platform with agentic features；2) Agentic AI: What Works (And what doesn't) in production。",
  cover: "/activities/googleai.png",
  location: "Google Office, Sydney",
  kinds: ["Talks", "Networking"],
},
{
  slug: "google-io-extended-2025-sydney-mobile",
  title: "Google I/O Extended 2025 Sydney — Mobile Edition",
  org: "GDG Sydney",
  date: "2025.09",
  summary: "Workshop: Optimising development with MCP, Future-Ready & Adaptive: Building Android Apps for All Devices.",
  cover: "/activities/googlemobile.png",
  location: "Google Office, Sydney",
  kinds: ["Talks", "Networking"],
},
{
  slug: "championing-women-in-science-leadership",
  title: "Championing Women in Science Leadership",
  org: "Campus",
  date: "2025.09",
  summary: "Career development and leadership experiences from women in science.",
  cover: "/activities/women-in-science.png",
  location: "USYD Campus",
  kinds: ["Talks", "Networking"],
},
{
  slug: "syncs-wit-her-tech-journey",
  title: "SYNCSxWIT — Her Tech Journey: Women’s Pathway Into Tech",
  org: "SYNCS x WIT",
  date: "2025.09",
  summary: "Stories, resources, and pathways for women entering and growing in tech.",
  cover: "/activities/her-tech-journey.png",
  location: "USYD Campus",
  kinds: ["Talks", "Networking"],
},
{
  slug: "discover-bloomberg-sydney-2025",
  title: "2025 Discover Bloomberg Sydney",
  org: "Bloomberg",
  date: "2025.09",
  summary: "Onsite visit to explore products, engineering culture, and career paths.",
  cover: "/activities/bloomberg-discover.png",
  location: "Bloomberg Office, Sydney ",
  kinds: ["Networking", "Talks"],
},
{
  slug: "data-science-intern-panel-campus",
  title: "Data Science Intern Panel",
  org: "Campus",
  date: "2025.09",
  summary: "Interns and alumni share project experiences, interview prep, and skill building.",
  cover: "/activities/ds-intern-panel.png",
  location: "USYD Campus",
  kinds: ["Talks", "Networking"],
},

    {
  slug: "google-genai-academy",
  title: "Google GenAI Academy Launch — Agents and the New Software Paradigm",
  org: "GDG Sydney",
  date: "2025.09",
  summary: "Introduction to Google's GenAI Academy, highlighting agents, generative AI, and the future of software development.",
  cover: "/activities/genai.png",
  location: "Google Office, Sydney",
  kinds: ["Talks", "Networking"],
  },
    {
  slug: "ignite-chatgpt-nocode",
  title: "How to Leverage ChatGPT & No-Code AI",
  org: "StartupLink USYD",
  date: "2025.09",
  summary: "Exploring how founders can use ChatGPT and no-code tools to build smarter, faster MVPs.",
  cover: "/activities/gpt.png",
  location: "USYD Campus",
  kinds: ["Talks", "Workshop"],
  },
  {
  slug: "ignite-build-mvp",
  title: "Build the Right Thing: Ideas to MVP",
  org: "StartupLink USYD",
  date: "2025.09",
  summary: "A practical guide to validating startup ideas and translating them into minimum viable products.",
  cover: "/activities/mvp.png",
  location: "USYD Campus",
  kinds: ["Talks", "Workshop"],
  },
  {
  slug: "ignite-startup-monetisation",
  title: "How Your Startup Makes Money / Business Models That Work",
  org: "StartupLink USYD",
  date: "2025.09",
  summary: "Insights on sustainable revenue models and monetisation strategies for early-stage startups.",
  cover: "/activities/ignite.png",
  location: "USYD Campus",
  kinds: ["Talks"],
  },

    {
      slug: "rabobank-office-tour",
      title: "Office Tour — Rabobank Australia",
      org: "Rabobank",
      date: "2025.08",
      summary: "Banking tech stack, risk systems, and a peek into product operations.",
      cover: "/activities/ra1.png",
      location: "Rabobank Office, Sydney",
      kinds: ["Networking"],
    },
    {
      slug: "ey-applicants-interviews",
      title: "EY Presents: Applicants and Interviews",
      org: "EY",
      date: "2025.08",
      summary: "Insights on EY application processes, interview prep, and career pathways.",
      cover: "/activities/ey1.png",
      location: "USYD Campus",
      kinds: ["Networking", "Talks"],
    },
    {
      slug: "gurobi-community-meetup",
      title: "Gurobi Community Meetup",
      org: "Gurobi",
      date: "2025.08",
      summary: "Optimisation case studies: LP/IP modeling, solver tuning, and applications.",
      cover: "/activities/gurobi1.png",
      location: "Swiss Hotel",
      kinds: ["Networking", "Talks"],
    },
    {
      slug: "microsoft-chat-and-hack",
      title: "Chat & Hack: Microsoft Careers Day (On Campus)",
      org: "Microsoft",
      date: "2025.03",
      summary: "Career chats, hack-style demos, and routes into product & engineering.",
      cover: "/activities/microsoft1.png",
      location: "USYD Campus",
      kinds: ["Networking", "Talks"],
    },
    {
      slug: "bain-career-in-consulting",
      title: "A Career in Consulting with Bain & Company",
      org: "Bain & Company",
      date: "2025.03",
      summary: "Pathways into strategy consulting, recruiting tips, and day-in-the-life insights.",
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
    {
      slug: "mid-autumn-gala",
      title: "Mid-Autumn Festival Gala Volunteer",
      org: "Chinese-Australian Association",
      date: "2024.09",
      summary: "Assisted in event coordination, guest reception.",
      cover: "/activities/mid.png",
      location: "Town Hall",
      kinds: ["Volunteer"],
    },
    {
      slug: "usu",
      title: "USU Volunteer",
      org: "University of Sydney Union (USU)",
      date: "2025.04 - Present",
      summary: "Contributed to student life by supporting campus events, and engaging with diverse student communities.",
      cover: "/activities/usu.png",
      location: "USYD Campus",
      kinds: ["Volunteer"],
    },
  ]

  const chips: Kind[] = useMemo(() => ["Volunteer", "Networking", "Talks", "Workshop"], [])

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

  const toggleKind = (k: Kind) =>
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

      <div className="relative z-10 pt-20 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Link href="/">
              <Button className="mb-4 bg-gradient-to-r from-red-500/20 to-rose-500/20 backdrop-blur-md border-red-400/30 text-gray-100 hover:bg-red-500/30">
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
                placeholder="Search by title / organization / place / keyword…"
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
                    className={
                      "inline-flex items-center h-7 rounded-full px-3 text-sm border whitespace-nowrap cursor-pointer " +
                      (active
                        ? "bg-red-500/30 border-red-400/40 text-red-100"
                        : "bg-black/30 text-red-200 border-red-400/20 hover:bg-red-500/10")
                    }
                  >
                    {k}
                  </span>
                )
              })}
            </div>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((a) => (
              <button
                key={a.slug}
                type="button"
                className="text-left"
                onClick={() => {
                  setSelected(a)
                  setOpen(true)
                }}
                aria-label={`Open details: ${a.title}`}
              >
                <PremiumGlassCard
                  tiltMaxDeg={5}
                  className="bg-black/25 backdrop-blur-xl border border-red-400/20 hover:bg-black/30 transition-all overflow-hidden shadow-[0_0_26px_rgba(244,63,94,0.10)] hover:border-red-400/35 hover:shadow-[0_0_40px_rgba(248,113,113,0.14)]"
                  title={a.title}
                >
                  <div className="relative h-32 w-full">
                    <img
                      src={a.cover || "/placeholder.svg"}
                      alt={a.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </div>

                  <div className="p-6 pb-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-gray-400 text-xs">{a.org}</span>
                      <span className="text-gray-400 text-xs">{a.date}</span>
                    </div>
                    <div className="text-gray-100 text-sm font-semibold mb-1 line-clamp-2" title={a.title}>
                      {a.title}
                    </div>
                    {a.location && (
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <MapPin className="w-3 h-3" />
                        {a.location}
                      </div>
                    )}
                  </div>

                  <div className="p-6 pt-0">
                    {a.summary && (
                      <p className="min-h-[2.75rem] text-gray-200 text-xs leading-5 line-clamp-2">
                        {a.summary}
                      </p>
                    )}
                  </div>
                </PremiumGlassCard>
              </button>
            ))}
          </div>

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

              {selected?.summary ? (
                <p className="text-sm leading-6 text-slate-200/90">{selected.summary}</p>
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

