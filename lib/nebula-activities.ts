"use client"

export type NebulaKind = "Volunteer" | "Networking" | "Talks" | "Workshop"

export type NebulaActivityItem = {
  slug: string
  title: string
  org: string
  date: string
  summary: string
  cover: string
  location?: string
  kinds: NebulaKind[]
}

// Source of truth for the Nebula cards (used by both the page and the CONSOLE labels).
export const nebulaActivities: NebulaActivityItem[] = [
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
]

