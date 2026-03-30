"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Trophy, ArrowLeft, Award, BriefcaseBusiness } from "lucide-react";

type BusinessType =
  | "internship"
  | "consulting"
  | "competition"
  | "strategy"
  | "sustainability"
  | "marketing";

type BusinessItem = {
  slug: string;
  title: string;
  role?: string;
  company?: string;
  event?: string;
  date?: string;
  type: BusinessType;
  description: string;
  summary?: string;
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

export default function BusinessPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<BusinessType[]>([]);

  const businessItems: BusinessItem[] = [
    {
      slug: "mercer-business-analyst",
      title: "Business Analyst",
      role: "Intern",
      company: "Mercer",
      date: "2025.12 — 2026.03",
      type: "internship",
      pinned: true,
      logo: "/experience/mercer.png",
      placement: "Intern",
      description:
        "Talent strategy and people analytics work across competency modeling, talent mapping, and succession-related decision support.",
      summary:
        "Worked on talent assessment and talent review projects across industries, translating business needs into competency models, talent profiles, and actionable people insights.",
      skills: [
        "People Analytics",
        "Competency Modeling",
        "Talent Mapping",
        "360 Feedback",
      ],
      industries: ["HR Consulting", "People Analytics", "Enterprise Services"],
      keywords: [
        "talent review",
        "succession planning",
        "9-box",
        "psychometrics",
        "MPM",
        "candidate evaluation",
      ],
      tags: ["Talent Assessment", "People Analytics", "HR Consulting"],
    },
    {
      slug: "abc-product-consultant",
      title: "AI Product Consultant",
      role: "Intern",
      company: "A Better Community",
      date: "2025.03 — 2025.08",
      type: "internship",
      pinned: true,
      logo: "/experience/abclogo.png",
      placement: "Intern",
      description:
        "AI product consulting for nonprofit clients, spanning stakeholder interviews, low-code AI platform selection, workflow design, deployment, and training.",
      summary:
        "Designed and delivered GenAI assistants for social-impact scenarios such as media literacy education and elderly services, combining user research, knowledge systems, and rollout execution.",
      skills: [
        "Stakeholder Interview",
        "Workflow Design",
        "AI Product",
        "User Research",
      ],
      industries: ["Nonprofit", "Education", "Senior Care", "AI Applications"],
      keywords: [
        "coze",
        "knowledge base",
        "chatbot",
        "low-code ai",
        "digital literacy",
        "deployment",
      ],
      tags: ["AI Product", "Social Impact", "Consulting"],
    },
    {
      slug: "launchpad-go-to-market",
      title: "Launchpad",
      role: "Co-founder / Organizing Team",
      company: "AI Builder Community",
      date: "2026.01",
      type: "consulting",
      pinned: true,
      logo: "/experience/launchpad.png",
      placement: "Co-founder",
      description:
        "Built a go-to-market competition mechanism to help hackathon and startup teams validate products, connect with partners, and move toward market readiness.",
      summary:
        "Designed the overall competition and selection logic for early-stage AI products, with a focus on project screening, builder profiling, partner matching, and post-event growth opportunities.",
      skills: [
        "Go-to-Market",
        "Talent Screening",
        "Community Building",
        "Project Matching",
      ],
      industries: ["Startup", "AI", "Developer Ecosystem", "Product"],
      keywords: [
        "hackathon next stage",
        "builder community",
        "screening mechanism",
        "product validation",
        "startup support",
      ],
      tags: ["Launchpad", "AI Community", "Builder Ecosystem"],
    },
    {
      slug: "kpmg-bluebird-it-audit",
      title: "KPMG Bluebird IT Audit Challenge",
      event: "KPMG",
      date: "2025.08",
      type: "competition",
      logo: "/competition/kpmglogo.png",
      placement: "Finalist",
      description:
        "Analyzed IT audit cases in the automotive-related retail and POS environment, focusing on process risk, system control, and audit logic.",
      summary:
        "Translated business technology issues into audit risk perspectives, with emphasis on POS systems, retail process flow, and control points.",
      skills: ["IT Audit", "Risk Analysis", "Process Mapping"],
      industries: ["Automotive Retail", "POS", "IT Audit"],
      keywords: [
        "it audit",
        "pos",
        "retail system",
        "control risk",
        "kpmg bluebird",
      ],
      tags: ["IT Audit", "POS", "Risk"],
    },
    {
      slug: "net-zero-challenge-gys",
      title: "Global Youth Summit on Net-Zero Future",
      event: "UNESCO East Asia & GAUC",
      date: "2024.09",
      type: "sustainability",
      logo: "/competition/UNESCOlogo.png",
      placement: "Global·Bronze",
      description:
        "Youth summit project focused on climate innovation, sustainability communication, and international collaboration.",
      summary:
        "Contributed to climate-oriented idea development and cross-cultural exchange in a global youth innovation context.",
      skills: ["Climate Action", "Innovation", "Youth Leadership"],
      industries: ["Sustainability", "Climate", "Youth Innovation"],
      keywords: [
        "net-zero",
        "unesco",
        "global youth summit",
        "climate action",
      ],
      tags: ["Climate Action", "Youth Leadership", "Innovation"],
    },
    {
      slug: "saiep-management",
      title: "Management Consultant",
      role: "Project Member",
      company: "Study Australian Industry Experience Program",
      date: "2025.07",
      type: "consulting",
      logo: "/experience/SAIEPlogo.png",
      description:
        "Consulting project for a nonprofit sports organization, covering market research, growth opportunities, and business model development.",
      summary:
        "Worked on strategic recommendations for a nonprofit sports context, focusing on user growth, organizational positioning, and practical implementation pathways.",
      skills: [
        "Strategic Thinking",
        "Market Research",
        "Growth Strategy",
        "Business Model Design",
      ],
      industries: ["Nonprofit", "Sports", "Community Services"],
      keywords: [
        "nonprofit sports",
        "growth strategy",
        "consulting project",
        "market research",
      ],
      tags: ["Strategy", "Nonprofit", "Growth"],
    },
    {
      slug: "YuanQi-forest-universe-2026",
      title: "YuanQi Forest Universe Challenge 2026",
      event: "YuanQi Forest",
      date: "2026.01",
      type: "marketing",
      logo: "/competition/Yuanqilogo.png",
      placement: "Finalist",
      description:
        "Designed a product concept for a consumer brand challenge, focusing on differentiated positioning, user appeal, and commercialization potential.",
      summary:
        "Developed an innovation proposal around product-market fit and user-facing experience, reaching the final stage of the competition.",
      skills: ["Product Design", "Innovation", "Go-to-Market"],
      industries: ["Beverage", "Consumer Goods", "Brand Innovation"],
      keywords: [
        "finalist",
        "consumer product",
        "brand challenge",
        "market fit",
      ],
      tags: ["Beverage", "Product", "Marketing"],
    },
    {
      slug: "roland-berger-campus-2025",
      title: "Roland Berger Campus Challenge 2025",
      event: "Roland Berger",
      date: "2025.06",
      type: "competition",
      logo: "/competition/rblogo.png",
      description:
        "Explored the humanoid robot market through commercialization strategy, scenario prioritization, and entry-path analysis for manufacturing-related players.",
      summary:
        "Analyzed where humanoid robotics can create business value first, compared ToB and ToC scenarios, and translated industry structure into entry strategy and capability implications.",
      skills: ["Strategy", "Market Analysis", "Commercialization"],
      industries: ["Humanoid Robot", "Advanced Manufacturing", "AI Hardware"],
      keywords: [
        "humanoid robot",
        "commercialization strategy",
        "market entry",
        "scenario analysis",
        "toB vs toC",
      ],
      tags: ["Strategy", "Humanoid Robot", "Commercialization"],
    },
    {
      slug: "mengniu-campus-innovation-2025",
      title: "Mengniu Campus Innovation Challenge 2025",
      event: "Mengniu",
      date: "2025.12",
      type: "marketing",
      logo: "/competition/mengniulogo.png",
      description:
        "Designed a consumer-facing product concept and innovation proposal for a dairy brand, combining user insight, product positioning, and market communication.",
      summary:
        "Focused on translating consumer needs into product concepts and launch narratives, with emphasis on category differentiation and brand-fit innovation.",
      skills: ["Product Design", "Consumer Insight", "Brand Strategy"],
      industries: ["FMCG", "Dairy", "Consumer Goods"],
      keywords: [
        "consumer product",
        "brand innovation",
        "campus competition",
        "product concept",
      ],
      tags: ["FMCG", "Product", "Brand"],
    },
    {
      slug: "loreal-brandstorm",
      title: "L'Oréal BRANDSTORM 2025",
      event: "L'Oréal",
      date: "2025.04",
      type: "marketing",
      logo: "/competition/loreallogo.png",
      description:
        "Developed a tech-enabled product and brand innovation concept for men’s beauty, with a focus on user needs, positioning, and pitch design.",
      summary:
        "Worked on product thinking in a consumer brand setting, integrating marketing, innovation, and emerging technology into a cohesive concept.",
      skills: ["Marketing", "Product", "Pitch"],
      industries: ["Beauty", "Consumer Goods", "Men's Skincare"],
      keywords: [
        "brandstorm",
        "men's beauty",
        "product innovation",
        "consumer insight",
      ],
      tags: ["Marketing", "Product", "Men's Skincare"],
    },
    {
      slug: "mersen-campus-brand-activation",
      title: "Mersen Campus Brand Activation",
      event: "Mersen",
      date: "2026.03",
      type: "marketing",
      logo: "/competition/mersenlogo.png",
      description:
        "Planned online and offline promotion activities for an electrical brand, integrating campaign messaging, audience engagement, and execution design.",
      summary:
        "Explored how a technical brand can communicate more effectively with campus audiences through integrated activation and event-based promotion.",
      skills: ["Brand Activation", "Campaign Planning", "Event Design"],
      industries: ["Electrical Equipment", "Industrial Brand", "Marketing"],
      keywords: [
        "online offline campaign",
        "brand activity",
        "campus promotion",
        "electrical brand",
      ],
      tags: ["Brand", "Campaign", "Promotion"],
    },
    {
      slug: "ey-esg-innovation-2025",
      title: "EY ESG University Innovation Challenge 2025",
      event: "EY",
      date: "2025.04",
      type: "sustainability",
      logo: "/competition/eylogo.png",
      placement: "Semifinalist",
      description:
        "Built ESG strategy recommendations around luxury supply chains, with a focus on sustainability risks, innovation opportunities, and data-backed transformation.",
      summary:
        "Analyzed sustainability challenges in the luxury industry and proposed structured ESG improvement paths connected to supply chain and brand strategy.",
      skills: ["ESG", "Supply Chain", "Sustainability Strategy"],
      industries: ["Luxury", "Supply Chain", "ESG"],
      keywords: [
        "luxury supply chain",
        "sustainability strategy",
        "esg innovation",
      ],
      tags: ["ESG", "Luxury", "Supply Chain"],
    },
    {
      slug: "kpmg-esg-case-competition",
      title: "KPMG ESG Case Competition",
      event: "KPMG",
      date: "2024.09",
      type: "sustainability",
      logo: "/competition/kpmglogo.png",
      description:
        "Conducted ESG analysis for the automotive supply chain, identifying sustainability risks and proposing strategic responses across upstream and downstream operations.",
      summary:
        "Focused on ESG issues in the automotive value chain, using industry context to translate sustainability concerns into structured business analysis.",
      skills: ["ESG Analysis", "Industry Research", "Value Chain Thinking"],
      industries: ["Automotive", "Supply Chain", "ESG"],
      keywords: [
        "automotive supply chain",
        "esg analysis",
        "kpmg case",
        "sustainability risk",
      ],
      tags: ["ESG", "Automotive", "Sustainability"],
    },
    {
      slug: "allegro-fund-pe-competition-2024",
      title: "Allegro Fund Competition",
      event: "Allegro",
      date: "2024.09",
      type: "sustainability",
      logo: "/competition/allegrologo.png",
      description:
        "Developed ESG strategy and valuation thinking for the dairy industry, combining sustainability themes with business fundamentals and investment logic.",
      summary:
        "Worked on how ESG considerations influence value creation and strategic positioning in a consumer goods sector with strong operational complexity.",
      skills: ["ESG Strategy", "Valuation Thinking", "Industry Analysis"],
      industries: ["Dairy", "Consumer Goods", "ESG"],
      keywords: [
        "dairy industry",
        "esg valuation",
        "consumer sector",
        "value creation",
      ],
      tags: ["ESG", "Valuation", "Dairy"],
    },
    {
      slug: "deloitte-technology",
      title: "Technology · Virtual Experience",
      company: "Deloitte (Forage)",
      date: "2024.12",
      type: "consulting",
      logo: "/experience/deloittelogo.png",
      description:
        "Explored digital consulting through business-technology problem solving, using Python and Tableau to support structured analysis.",
      summary:
        "A short virtual experience focused on how technology teams frame business issues, structure data, and communicate insight clearly.",
      skills: ["Data Analysis", "Tableau", "Excel", "Python"],
      industries: ["Consulting", "Technology", "Business Transformation"],
      keywords: [
        "forage",
        "deloitte",
        "digital consulting",
        "business technology",
      ],
      tags: ["Data Analysis", "Technology", "Consulting"],
    },
    {
      slug: "accenture-strategy-consulting",
      title: "Strategy Consulting · Virtual Experience",
      company: "Accenture (Forage)",
      date: "2024.12",
      type: "strategy",
      logo: "/experience/accenturelogo.png",
      description:
        "Virtual strategy consulting experience focused on scoping, prioritization, and structured recommendation building.",
      summary:
        "Practiced breaking down ambiguous business issues into focused workstreams, priorities, and client-oriented outputs.",
      skills: [
        "Strategy Consulting",
        "Prioritisation",
        "Client Communication",
        "Problem Solving",
      ],
      industries: ["Consulting", "Strategy", "Business Services"],
      keywords: [
        "accenture forage",
        "strategy consulting",
        "prioritisation",
        "client communication",
      ],
      tags: ["Strategy", "Analysis", "Consulting"],
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
    const result = businessItems.filter((item) => {
      const haystack = [
        item.title,
        item.role ?? "",
        item.company ?? "",
        item.event ?? "",
        item.description ?? "",
        item.summary ?? "",
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

    return result.sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      return (b.date ?? "").localeCompare(a.date ?? "");
    });
  }, [q, selectedTypes]);

  const toggleType = (t: BusinessType) => {
    setSelectedTypes((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  };

  const isTypeUsed = (t: BusinessType) =>
    businessItems.some((b) => b.type === t);

  return (
    <div className="relative min-h-screen">
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

          <div className="mb-8 space-y-4">
            <Input
              placeholder="Search by skill, industry, company, project theme, or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mx-auto max-w-2xl border-green-400/30 bg-black/30 text-gray-100 backdrop-blur-md placeholder:text-gray-400"
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
              const visibleBadges = [
                ...(item.skills ?? []),
                ...(item.industries ?? []),
                ...(item.tags ?? []),
              ].slice(0, 4);

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

                    <Card className="flex h-full min-h-[260px] flex-col overflow-hidden border-green-400/20 bg-black/30 backdrop-blur-md transition-all duration-300 hover:bg-black/40 hover:border-green-400/35">
                      <CardHeader className="pb-2">
                        <div className="flex items-start gap-3 pr-10">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-green-400/20 bg-white/5">
                            <img
                              src={item.logo || item.image || "/placeholder.svg"}
                              alt={`${item.title} logo`}
                              className="max-h-[2.5rem] max-w-[2.5rem] object-contain"
                              onError={(e) => {
                                e.currentTarget.src = "/placeholder.svg";
                              }}
                            />
                          </div>

                          <div className="min-w-0">
                            <CardTitle className="line-clamp-2 text-lg leading-snug text-gray-100">
                              {item.title}
                            </CardTitle>

                            {item.role && (
                              <p className="mt-1 text-sm font-medium text-gray-300">
                                {item.role}
                              </p>
                            )}

                            <div className="mt-1 flex items-center gap-2 text-xs text-gray-400">
                              {item.type === "internship" ||
                              item.type === "consulting" ||
                              item.type === "strategy" ? (
                                <>
                                  <BriefcaseBusiness className="h-4 w-4 shrink-0" />
                                  <span>{item.date ?? ""}</span>
                                  {item.company && <span>• {item.company}</span>}
                                </>
                              ) : (
                                <>
                                  <Trophy className="h-4 w-4 shrink-0" />
                                  <span>{item.date ?? ""}</span>
                                  {item.event && <span>• {item.event}</span>}
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="flex flex-1 flex-col">
                        <p className="mb-4 line-clamp-4 text-sm leading-6 text-gray-200">
                          {item.description}
                        </p>

                        <div className="mt-auto flex flex-wrap gap-1.5">
                          {visibleBadges.map((tag) => (
                            <Badge
                              key={tag}
                              className="border-green-500/30 bg-green-500/20 text-xs text-green-200"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
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
