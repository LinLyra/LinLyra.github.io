"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { PremiumGlassCard } from "@/components/premium-glass-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { PageCornerLottie } from "@/components/page-corner-lottie";
import { ArrowLeft, Award } from "lucide-react";

type BusinessType =
  | "internship"
  | "consulting"
  | "competition"
  | "strategy"
  | "sustainability"
  | "marketing";

type BusinessItem = {
  slug: string;
  /** Card line 1 — your project / deliverable name */
  projectName: string;
  /** Card line 2 — competition name, employer, or program host (no extra org line under date) */
  subtitle: string;
  date?: string;
  type: BusinessType;
  /** One-sentence blurb on the card */
  description: string;
  tags?: string[];
  skills?: string[];
  industries?: string[];
  keywords?: string[];
  placement?: string;
  logo?: string;
  image?: string;
  pinned?: boolean;
};

const TYPE_LABELS: Record<BusinessType, string> = {
  internship: "internship",
  consulting: "consulting",
  competition: "competition",
  strategy: "strategy",
  sustainability: "sustainability",
  marketing: "marketing",
};

function mergeBusinessBadges(item: BusinessItem, max = 6): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const raw of [...(item.industries ?? []), ...(item.skills ?? [])]) {
    const x = raw.trim();
    if (!x || seen.has(x)) continue;
    seen.add(x);
    out.push(x);
    if (out.length >= max) break;
  }
  return out;
}

export default function BusinessPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<BusinessType[]>([]);

  const businessItems: BusinessItem[] = [
    {
      slug: "mercer-business-analyst",
      projectName: "Business Analyst",
      subtitle: "Mercer",
      date: "2025.12 — 2026.03",
      type: "internship",
      pinned: true,
      logo: "/experience/mercer.png",
      placement: "Intern",
      description:
        "People analytics and talent strategy work spanning competency models, talent mapping, and succession support.",
      skills: ["People Analytics", "Competency Modeling", "Talent Mapping", "360 Feedback"],
      industries: ["HR Consulting", "People Analytics", "Enterprise"],
      keywords: ["talent review", "succession", "9-box", "psychometrics", "MPM"],
      tags: ["Talent Assessment", "HR Consulting"],
    },
    {
      slug: "abc-product-consultant",
      projectName: "AI Product Consultant",
      subtitle: "A Better Community",
      date: "2025.03 — 2025.08",
      type: "internship",
      pinned: true,
      logo: "/experience/abclogo.png",
      placement: "Intern",
      description:
        "GenAI product consulting for nonprofits: discovery, workflow design, rollout, and training.",
      skills: ["Stakeholder Interview", "Workflow Design", "AI Product", "User Research"],
      industries: ["Nonprofit", "Education", "Senior Care", "AI Applications"],
      keywords: ["coze", "knowledge base", "chatbot", "low-code ai"],
      tags: ["AI Product", "Social Impact"],
    },
    {
      slug: "kpmg-bluebird-it-audit",
      projectName: "POS / Payments IT Audit Case",
      subtitle: "KPMG Bluebird IT Audit Challenge",
      date: "2025.08",
      type: "competition",
      logo: "/competition/kpmglogo.png",
      placement: "Semifinalist",
      description:
        "IT audit case on retail POS/payment stacks—risk framing, controls, and testable evidence under time pressure.",
      skills: ["IT Audit", "Risk Analysis", "Process Mapping"],
      industries: ["Retail Tech", "Payments", "IT Audit"],
      keywords: ["pos", "payments", "kpmg bluebird"],
      tags: ["IT Audit", "Cybersecurity"],
    },
    {
      slug: "net-zero-challenge-gys",
      projectName: "Smart Green Homestay",
      subtitle: "Global Youth Summit on Net-Zero Future",
      date: "2024.09",
      type: "sustainability",
      logo: "/competition/UNESCOlogo.png",
      placement: "Global·Bronze",
      description:
        "Low-carbon rural stay model combining clean power, water reuse, and envelope design for tourism + emissions cuts.",
      skills: ["Climate Action", "Innovation", "Youth Leadership"],
      industries: ["Sustainability", "Climate", "Tourism"],
      keywords: ["net-zero", "unesco", "homestay"],
      tags: ["Climate", "Innovation"],
    },
    {
      slug: "mersen-campus-brand-activation",
      projectName: "Invisible Guardian",
      subtitle: "Mersen Campus Challenge",
      date: "2026.04",
      type: "marketing",
      logo: "/competition/mersenlogo.jpg",
      placement: "Top 10",
      description:
        "Employer-brand campaign turning invisible industrial value into a memorable campus narrative and activations.",
      skills: ["Brand Activation", "Campaign Planning", "Event Design"],
      industries: ["Industrial Brand", "B2B", "Marketing"],
      keywords: ["employer branding", "campus", "electrical"],
      tags: ["Brand", "Campaign"],
    },
    {
      slug: "YuanQi-forest-universe-2026",
      projectName: "Code Energy Water",
      subtitle: "YuanQi Forest Universe Challenge",
      date: "2026.01",
      type: "marketing",
      logo: "/competition/Yuanqilogo.png",
      placement: "Finalist",
      description:
        "Youth beverage concept weaving coding culture, micro-challenges, and light refreshment into one shareable ritual.",
      skills: ["Product Design", "Innovation", "Go-to-Market"],
      industries: ["Beverage", "Consumer Goods", "Brand Innovation"],
      keywords: ["genki forest", "youth marketing"],
      tags: ["Product", "Brand"],
    },
    {
      slug: "ubs-finance-challenge-2026",
      projectName: "Long BeOne, Short Akeso",
      subtitle: "UBS Finance Challenge 2026",
      date: "2026.05",
      type: "competition",
      logo: "/competition/ubslogo.png",
      description:
        "Equity research pitch proposing a long BeOne / short Akeso pair trade in China biotech, combining fundamental valuation, pipeline risk analysis, and AI-assisted sentiment research.",
      skills: ["Equity Research", "Long/Short Strategy","Valuation","NLP Sentiment Analysis","Pipeline Analysis",],
      industries: ["Healthcare", "Biotech", "Capital Markets"],
      keywords: ["beone", "akeso", "china biotech", "long short", "finbert"],
      tags: ["Equity Research", "Healthcare", "AI Analysis"],
    },
    {
      slug: "roland-berger-campus-2025",
      projectName: "Humanoid Robot GTM",
      subtitle: "Roland Berger Campus Challenge",
      date: "2025.06",
      type: "competition",
      logo: "/competition/rblogo.png",
      description:
        "Strategy case on humanoid robotics—sizing, beachheads, sequencing, and economics for early commercialization.",
      skills: ["Strategy", "Market Analysis", "Commercialization"],
      industries: ["Humanoid Robotics", "Advanced Manufacturing", "AI Hardware"],
      keywords: ["robotics", "gtm", "unit economics"],
      tags: ["Strategy", "Robotics"],
    },
    {
      slug: "mengniu-campus-innovation-2025",
      projectName: "Clear-Mind Challenge Bottle",
      subtitle: "Mengniu Campus Innovation Challenge",
      date: "2025.12",
      type: "marketing",
      logo: "/competition/mengniulogo.png",
      description:
        "Dairy SKU + interactive youth campaign linking focus, coding culture, and social sharing in one loop.",
      skills: ["Product Design", "Consumer Insight", "Brand Strategy"],
      industries: ["FMCG", "Dairy", "Consumer Goods"],
      keywords: ["mengniu", "youth", "gamification"],
      tags: ["FMCG", "Innovation"],
    },
    {
      slug: "loreal-brandstorm",
      projectName: "Men’s Beauty Tech Concept",
      subtitle: "L'Oréal BRANDSTORM",
      date: "2025.04",
      type: "marketing",
      logo: "/competition/loreallogo.png",
      description:
        "Tech-enabled men’s grooming concept with crisp positioning, narrative, and pitch-ready storyline.",
      skills: ["Marketing", "Product", "Pitch"],
      industries: ["Beauty", "Consumer Goods", "Men's Skincare"],
      keywords: ["brandstorm", "men's beauty"],
      tags: ["Marketing", "Product"],
    },
    {
      slug: "saiep-management",
      projectName: "Management Consultant",
      subtitle: "Study Australian Industry Experience Program",
      date: "2025.07",
      type: "consulting",
      logo: "/experience/SAIEPlogo.png",
      description:
        "Growth strategy for a nonprofit sports org—market scan, levers, and a practical rollout path.",
      skills: ["Strategic Thinking", "Market Research", "Growth Strategy", "Business Model Design"],
      industries: ["Nonprofit", "Sports", "Community"],
      keywords: ["saiep", "nonprofit", "consulting"],
      tags: ["Strategy", "Growth"],
    },
    {
      slug: "ey-esg-innovation-2025",
      projectName: "AI × ESG Luxury Supply Chain",
      subtitle: "EY ESG University Innovation Challenge",
      date: "2025.04",
      type: "sustainability",
      logo: "/competition/eylogo.png",
      placement: "Semifinalist",
      description:
        "Traceability + Scope-3 data architecture for luxury supply chains with disclosure-ready KPIs and governance.",
      skills: ["ESG", "Supply Chain", "Sustainability Strategy"],
      industries: ["Luxury", "Supply Chain", "ESG"],
      keywords: ["dpp", "scope 3", "csrd"],
      tags: ["ESG", "Luxury"],
    },
    {
      slug: "kpmg-esg-case-competition",
      projectName: "Automotive Supply Chain ESG",
      subtitle: "KPMG ESG Case Competition",
      date: "2024.09",
      type: "sustainability",
      logo: "/competition/kpmglogo.png",
      description:
        "End-to-end ESG read on automotive value chain risks, controls, and a phased improvement roadmap.",
      skills: ["ESG Analysis", "Industry Research", "Value Chain Thinking"],
      industries: ["Automotive", "Supply Chain", "ESG"],
      keywords: ["ev", "decarbonization", "supplier"],
      tags: ["ESG", "Automotive"],
    },
    {
      slug: "allegro-fund-pe-competition-2024",
      projectName: "Bega Group ESG & Valuation",
      subtitle: "Allegro Fund Competition",
      date: "2024.09",
      type: "sustainability",
      logo: "/competition/allegrologo.png",
      description:
        "F&B ESG strategy linked to valuation—channels from farm to factory with investor-grade narrative.",
      skills: ["ESG Strategy", "Valuation Thinking", "Industry Analysis"],
      industries: ["Dairy", "Consumer Staples", "ESG"],
      keywords: ["bega", "dcf", "f&b"],
      tags: ["ESG", "Valuation"],
    },
    {
      slug: "deloitte-technology",
      projectName: "Digital Consulting Simulation",
      subtitle: "Deloitte (Forage)",
      date: "2024.12",
      type: "consulting",
      logo: "/experience/deloittelogo.png",
      description:
        "Short virtual sprint from messy tables to KPIs, visuals, and a client-ready takeaway.",
      skills: ["Data Analysis", "Tableau", "Excel", "Python"],
      industries: ["Consulting", "Technology", "Transformation"],
      keywords: ["forage", "deloitte"],
      tags: ["Analytics", "Tech"],
    },
    {
      slug: "accenture-strategy-consulting",
      projectName: "Strategy Consulting Simulation",
      subtitle: "Accenture (Forage)",
      date: "2024.12",
      type: "strategy",
      logo: "/experience/accenturelogo.png",
      description:
        "Problem framing, prioritization, and storyline practice for ambiguous client briefs.",
      skills: ["Strategy Consulting", "Prioritisation", "Client Communication", "Problem Solving"],
      industries: ["Consulting", "Strategy", "Business Services"],
      keywords: ["accenture", "forage", "mece"],
      tags: ["Strategy", "Consulting"],
    },
    {
      slug: "aerotropolis-south-connector-2026",
      projectName: "Aerotropolis South Connector",
      subtitle: "PMSoc × KordaMentha Case Competition",
      date: "2026.04",
      type: "strategy",
      placement: "Top 6",
      description:
        "PPP toll-corridor thesis for Western Sydney—demand, revenue stack, and bankable delivery narrative.",
      skills: ["Infrastructure", "PPP", "Commercial Strategy", "Feasibility"],
      industries: ["Infrastructure", "Transport", "Public Sector"],
      keywords: ["western sydney", "ppp", "toll road"],
      tags: ["Infrastructure", "Finance"],
    },
    {
      slug: "commonwealth-treasury-case",
      projectName: "Policy Package Evaluation",
      subtitle: "Commonwealth Treasury Case Competition",
      date: "2025.04",
      type: "competition",
      logo: "/competition/Commonwealthlogo.png",
      description:
        "Macro–micro policy scenarios with trade-offs across growth, inflation, and distribution under fiscal guardrails.",
      skills: ["Economics", "Policy", "Scenario Analysis", "Storylining"],
      industries: ["Banking", "Public Policy", "Macroeconomics"],
      keywords: ["cba", "treasury", "fiscal"],
      tags: ["Policy", "Economics"],
    },
  ];

  const allTypes: BusinessType[] = [
    "internship",
    "consulting",
    "competition",
    "strategy",
    "sustainability",
    "marketing",
  ];

  const q = searchTerm.trim().toLowerCase();

  const filtered = useMemo(() => {
    return businessItems.filter((item) => {
      const haystack = [
        item.projectName,
        item.subtitle,
        item.description,
        item.placement ?? "",
        ...(item.tags ?? []),
        ...(item.skills ?? []),
        ...(item.industries ?? []),
        ...(item.keywords ?? []),
      ]
        .join(" ")
        .toLowerCase();

      const searchHit = q === "" || haystack.includes(q);
      const typeHit =
        selectedTypes.length === 0 || selectedTypes.includes(item.type);

      return searchHit && typeHit;
    });
  }, [businessItems, q, selectedTypes]);

  const toggleType = (t: BusinessType) => {
    setSelectedTypes((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  };

  const isTypeUsed = (t: BusinessType) =>
    businessItems.some((b) => b.type === t);

  return (
    <div
      className="relative min-h-screen"
      style={
        {
          ["--pgc-glow-a" as any]: "34 197 94",
          ["--pgc-glow-b" as any]: "16 185 129",
        } as React.CSSProperties
      }
    >
      <Navigation activeSection="business" onSectionChange={() => {}} />

      <div className="relative z-10 p-6 pt-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center">
            <Link href="/">
              <Button className="mb-4 border-green-400/30 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-gray-100 backdrop-blur-md hover:bg-green-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Universe
              </Button>
            </Link>
            <h1 className="mb-2 text-4xl font-bold text-gray-100">Business</h1>
            <p className="text-gray-200">
              Projects and experiences across consulting, strategy, product thinking, and industry analysis.
            </p>
          </div>

          <PageCornerLottie
            side="left"
            className="top-[192px]"
            src="/animations/star-in-hand-baby-astronaut.lottie"
            alt="Star in hand baby astronaut animation"
          />

          <div className="mb-8 space-y-4">
            <Input
              placeholder="Search by project, competition, industry, skill…"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mx-auto max-w-xl border-green-400/30 bg-black/30 text-green-50 backdrop-blur-md placeholder:text-green-200/55"
            />

            <div className="flex flex-wrap justify-center gap-2">
              {allTypes.map((t) =>
                isTypeUsed(t) ? (
                  <Badge
                    key={t}
                    onClick={() => toggleType(t)}
                    className={`cursor-pointer capitalize ${
                      selectedTypes.includes(t)
                        ? "border-green-400/50 bg-green-500/30 text-green-100"
                        : "border-green-400/30 bg-green-500/10 text-green-200"
                    }`}
                  >
                    {TYPE_LABELS[t]}
                  </Badge>
                ) : null
              )}

              {selectedTypes.length > 0 && (
                <Button
                  variant="ghost"
                  className="h-6 px-2 text-gray-300"
                  onClick={() => setSelectedTypes([])}
                >
                  Clear
                </Button>
              )}
            </div>
          </div>

          <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => {
              const visibleBadges = mergeBusinessBadges(item);

              return (
                <Link
                  key={item.slug}
                  href={`/business/${item.slug}`}
                  className="group block h-full"
                >
                  <div className="relative h-full">
                    {item.placement && (
                      <div className="pointer-events-none absolute -right-2 -top-2 z-20">
                        <div className="flex items-center gap-1 rounded-full border border-yellow-400/30 bg-yellow-500/20 px-3 py-1 shadow-lg backdrop-blur-md">
                          <Award className="h-3.5 w-3.5 text-yellow-400" />
                          <span className="text-xs font-semibold text-yellow-300">
                            {item.placement}
                          </span>
                        </div>
                      </div>
                    )}

                    <PremiumGlassCard className="flex h-full min-h-[260px] flex-col overflow-hidden bg-black/25 shadow-[0_0_26px_rgba(34,197,94,0.10)] ring-1 ring-emerald-400/20 backdrop-blur-xl hover:bg-black/30 hover:ring-emerald-400/35 hover:shadow-[0_0_40px_rgba(16,185,129,0.16)]">
                      <div className="p-6 pb-2">
                        <div className="flex items-start gap-3 pr-10">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/5 ring-1 ring-emerald-400/20">
                            <img
                              src={item.logo || item.image || "/placeholder.svg"}
                              alt=""
                              className="h-full w-full object-cover"
                              onError={(e) => {
                                e.currentTarget.src = "/placeholder.svg";
                              }}
                            />
                          </div>

                          <div className="min-w-0 flex-1">
                            <h2 className="text-base font-semibold leading-snug text-gray-100 whitespace-normal break-words">
                              {item.projectName}
                            </h2>
                            <p className="mt-1 line-clamp-2 text-sm font-medium text-gray-400">
                              {item.subtitle}
                            </p>
                            <div className="mt-2 flex min-h-[1.25rem] items-center gap-2 text-xs text-gray-400">
                              <span className="truncate">{item.date ?? ""}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col p-6 pt-0">
                        <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-gray-200">
                          {item.description}
                        </p>

                        <div className="mt-auto overflow-hidden flex flex-wrap gap-1.5">
                          {visibleBadges.map((tag) => (
                            <Badge
                              key={tag}
                              className="border-green-500/30 bg-green-500/20 text-xs font-normal text-green-200"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </PremiumGlassCard>
                  </div>
                </Link>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-gray-400">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
