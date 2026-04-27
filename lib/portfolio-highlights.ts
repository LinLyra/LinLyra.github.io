export type PortfolioSection = "data" | "business" | "product" | "learning" | "nebula"

export type PortfolioHighlight = {
  slug: string
  title: string
  section: PortfolioSection
  href: string
  date: string
  badge: string
  summary: string
  tags: string[]
}

export const portfolioHighlights: PortfolioHighlight[] = [
  {
    slug: "mercer-business-analyst",
    title: "Mercer - Business Analyst Internship",
    section: "business",
    href: "/business/mercer-business-analyst",
    date: "2025.12 - 2026.03",
    badge: "Top internship",
    summary: "Talent analytics, competency modeling, and people insights.",
    tags: ["People Analytics", "Competency Modeling", "HR"],
  },
  {
    slug: "abc-product-consultant",
    title: "A Better Community - AI Product Consultant",
    section: "business",
    href: "/business/abc-product-consultant",
    date: "2025.03 - 2025.08",
    badge: "Impact project",
    summary: "GenAI assistants and workflow design for nonprofit clients.",
    tags: ["AI Product", "User Research", "Deployment"],
  },
  {
    slug: "youtube-ai-content-strategy",
    title: "YouTube AI Content Strategy Optimization",
    section: "data",
    href: "/data/youtube-ai-content-strategy",
    date: "2025.10",
    badge: "Data flagship",
    summary: "Posting strategy, channel clustering, and view-lift modeling.",
    tags: ["Python", "SQL", "KMeans"],
  },
  {
    slug: "datathon-2025-supply-chain",
    title: "SUDATA x SUBAA Datathon 2025",
    section: "data",
    href: "/data/datathon-2025-supply-chain",
    date: "2025.10",
    badge: "First place",
    summary: "Supply-chain optimization using Gurobi and clustering.",
    tags: ["Optimisation", "Gurobi", "Time Series"],
  },
  {
    slug: "deloitte-digital-elite-2025",
    title: "Deloitte Digital Elite Challenge",
    section: "product",
    href: "/product/deloitte-digital-elite-2025",
    date: "2025.05",
    badge: "Runner-up",
    summary: "AI + audit product innovation and prototype delivery.",
    tags: ["AI + Audit", "Frontend", "Product"],
  },
  {
    slug: "gdgx-openai-hack",
    title: "GDG x OpenAI Hack Node Australia",
    section: "product",
    href: "/product/gdgx-openai-hack",
    date: "2025.08",
    badge: "Hackathon",
    summary: "Full-stack prototype built for the global AI hackathon.",
    tags: ["Vibe coding", "Full-stack", "GameFi"],
  },
]

