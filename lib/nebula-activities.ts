"use client"

export type NebulaKind = "Volunteer" | "Networking" | "Talks" | "Workshop" | "Organizing"

export type NebulaActivityItem = {
  slug: string
  title: string
  org: string
  date: string
  summary: string
  cover: string
  location?: string
  kinds: NebulaKind[]
  detailSummary?: string
  gallery?: string[]
  roleBadge?: string
}

// Source of truth for the Nebula cards (used by both the page and the CONSOLE labels).
export const nebulaActivities: NebulaActivityItem[] = [
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
]

