"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Trophy, ArrowLeft, Award, BriefcaseBusiness } from "lucide-react";

type BusinessType = "consulting" | "case" | "sustainability" | "marketing";

type BusinessItem = {
  slug: string;
  title: string;
  event?: string;
  company?: string;
  date?: string;
  type: BusinessType;
  description?: string;
  tags?: string[];
  skills?: string[];
  placement?: string;     // ← 用来在卡片右上角显示“获奖/晋级”徽标
  teamSize?: string;
  image?: string;
  logo?: string;
};

export default function BusinessPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<BusinessType[]>([]);

  /** ===== 数据（比赛 + 咨询）===== */
  const businessItems: BusinessItem[] = [
    {
      slug: "abc-product-consultant",
      title: "Product Consultant（Internship）",
      company: "A Better Community",
      date: "2025.3 — Present",
      type: "consulting",
      skills: ["Stakeholder Interview", "Slide Decks", "Project Management"],
      logo: "/experience/abclogo.png",
      description:
        "Hands-on product consulting with stakeholder interviews, data cleaning, AI-agent exploration.",
      tags: ["AI bot", "Product consultant"],
    },
    {
      slug: "net-zero-challenge-gys",
      title: "Global Youth Summit on Net-Zero Future",
      date: "2024.09",
      type: "sustainability",
      logo: "/competition/UNESCOlogo.png",
      description:
        "Youth-driven summit at Tsinghua, co-hosted by UNESCO East Asia and GAUC.",
      placement: "Global·Bronze",                 // ★ 新增：封面角标
      tags: ["Global Bronze Award", "Climate Action", "Youth Leadership", "Innovation"],
    },
    {
      slug: "kpmg-bluebird-it-audit",
      title: "KPMG Bluebird IT Audit Challenge",
      date: "2025.08",
      type: "case",
      logo: "/competition/kpmglogo.png",
      description: "Solve real-world IT-audit cases with technology.",
      placement: "Semifinalist",                        // ★ 新增：封面角标
      tags: ["Advance to the Semifinals", "IT Audit", "Cybersecurity", "ATM"],
    },
    {
      slug: "saiep-management",
      title: "Management Consultant",
      company: "Study Australian Industry Experience Program",
      date: "2025.7",
      type: "consulting",
      skills: [
        "Strategic Thinking",
        "Market Research",
        "Competitive Analysis",
        "Business Model Design",
        "Growth Strategy",
      ],
      logo: "/experience/SAIEPlogo.png",
      description:
        "Strategy-led consulting practice with market research and growth modeling.",
      tags: ["Strategy", "Go-to-Market"],
    },
    {
      slug: "roland-berger-campus-2025",
      title: "Roland Berger Campus Challenge 2025",
      date: "2025.06",
      type: "case",
      logo: "/competition/rblogo.png",
      description: "Strategy consulting case challenge from Roland Berger.",
      tags: ["Strategy", "Market Analysis", "Humanoid Robot"],
    },
    {
      slug: "ey-esg-innovation-2025",
      title: "EY ESG University Innovation Challenge 2025",
      date: "2025.04",
      type: "case",
      logo: "/competition/eylogo.png",
      description: "Data-driven sustainability strategies and ESG innovation.",
      placement: "Semifinalist",                        // ★ 新增：封面角标
      tags: ["ESG", "AI + Luxury", "Luxury Supply Chain"],
    },
    {
      slug: "accenture-strategy-consulting",
      title: "Strategy Consulting · Virtual Experience",
      company: "Accenture (Forage)",
      date: "2024.12",
      type: "consulting",
      skills: [
        "Strategy Consulting",
        "Data Analysis",
        "Prioritisation",
        "Client Communication",
        "Problem Solving",
      ],
      logo: "/experience/accenturelogo.png",
      description:
        "Virtual strategy consulting experience: scoping, prioritisation and analysis.",
      tags: ["Consulting", "Analysis"],
    },
    {
      slug: "deloitte-technology",
      title: "Technology · Virtual Experience",
      company: "Deloitte (Forage)",
      date: "2024.12",
      type: "consulting",
      logo: "/experience/deloittelogo.png",
      description:
        "Explored digital consulting with Python and Tableau-driven insights on business technology challenges",
      tags: ["Data Analysis", "Tableau", "Excel", "Python"],
    },
    {
      slug: "kpmg-esg-case-competition",
      title: "KPMG ESG Case Competition",
      date: "2025",
      type: "case",
      logo: "/competition/kpmglogo.png",
      description: "ESG case-analysis competition led by KPMG China.",
      tags: ["ESG", "Sustainability", "Automotive Supply Chain"],
    },
    {
      slug: "commonwealth-treasury-case",
      title: "Commonwealth Treasury Case Competition",
      date: "2025.04",
      type: "case",
      logo: "/competition/Commonwealthlogo.png",
      description: "Public policy & economic analysis case organized by CBA.",
      tags: ["Economics", "Policy", "Analytics"],
    },
  ];

  /** ===== 过滤类型 ===== */
  const allTypes: BusinessType[] = ["consulting", "case", "sustainability", "marketing"];

  /** ===== 搜索 ===== */
  const q = searchTerm.trim().toLowerCase();
  const filtered = businessItems.filter((c) => {
    const haystack = [
      c.title,
      c.company ?? "",
      c.event ?? "",
      c.description ?? "",
      ...(c.tags ?? []),
      ...(c.skills ?? []),
    ]
      .join(" ")
      .toLowerCase();

    const hit = q === "" || haystack.includes(q);
    const typeOK = selectedTags.length === 0 || selectedTags.includes(c.type);
    return hit && typeOK;
  });

  const toggleTag = (t: BusinessType) =>
    setSelectedTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]));

  const isTypeUsed = (t: BusinessType) => businessItems.some((b) => b.type === t);

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="business" onSectionChange={() => {}} />

      <div className="relative z-10 pt-20 p-6">
        <div className="mx-auto max-w-6xl">
          {/* 头部 */}
          <div className="mb-8 text-center">
            <Link href="/">
              <Button className="mb-4 border-green-400/30 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-gray-100 backdrop-blur-md hover:bg-green-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Universe
              </Button>
            </Link>
            <h1 className="mb-2 text-4xl font-bold text-gray-100">Business</h1>
            <p className="text-gray-200">
              Translating insights into strategy with structured thinking and industry analysis.
            </p>
          </div>

          {/* 搜索 + 类型过滤 */}
          <div className="mb-8 space-y-4">
            <Input
              placeholder="Search by title / company / tags / skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mx-auto max-w-md border-green-400/30 bg-black/30 text-gray-100 backdrop-blur-md placeholder:text-gray-400"
            />
            <div className="flex flex-wrap justify-center gap-2">
              {allTypes.map((t) =>
                isTypeUsed(t) ? (
                  <Badge
                    key={t}
                    onClick={() => toggleTag(t)}
                    className={`cursor-pointer ${
                      selectedTags.includes(t)
                        ? "bg-green-500/30 text-green-100 border-green-400/50"
                        : "bg-green-500/10 text-green-200 border-green-400/30"
                    }`}
                  >
                    {t}
                  </Badge>
                ) : null
              )}
              {selectedTags.length > 0 && (
                <Button variant="ghost" className="h-6 px-2 text-gray-300" onClick={() => setSelectedTags([])}>
                  Clear
                </Button>
              )}
            </div>
          </div>

          {/* 列表 */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c) => (
              <Link key={c.slug} href={`/business/${c.slug}`} className="block">
                <Card className="min-h-[220px] cursor-pointer overflow-hidden border-green-400/20 bg-black/30 backdrop-blur-md transition-all duration-300 hover:bg-black/40">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {/* 小 Logo 方块 */}
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-green-400/20 bg-white/5">
                          <img
                            src={c.logo || c.image || "/placeholder.svg"}
                            alt={`${c.title} logo`}
                            className="max-h-[2.5rem] max-w-[2.5rem] object-contain"
                          />
                        </div>
                        <div>
                          <CardTitle className="text-lg leading-snug text-gray-100">{c.title}</CardTitle>
                          {/* 次要信息：比赛用日期；咨询用公司 */}
                          <div className="mt-1 flex items-center gap-2 text-xs text-gray-400">
                            {c.type === "consulting" ? (
                              <>
                                <BriefcaseBusiness className="h-4 w-4" />
                                <span>{c.date ?? ""}</span>
                                {c.company && <span>• {c.company}</span>}
                              </>
                            ) : (
                              <>
                                <Trophy className="h-4 w-4" />
                                <span>{c.date ?? ""}</span>
                                {c.event && <span>• {c.event}</span>}
                              </>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* 右上角：获奖/晋级徽标 */}
                      {c.placement && (
                        <div className="flex items-center gap-1 rounded-full bg-yellow-500/20 px-2 py-1 backdrop-blur-sm">
                          <Award className="h-3 w-3 text-yellow-400" />
                          <span className="text-xs font-semibold text-yellow-400">{c.placement}</span>
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="mb-4 line-clamp-3 text-sm text-gray-200">{c.description ?? ""}</p>
                    {/* 标签优先展示 skills，否则 tags */}
                    <div className="flex flex-wrap gap-1">
                      {((c.skills && c.skills.length > 0 ? c.skills : c.tags) ?? [])
                        .slice(0, 4)
                        .map((tag) => (
                          <Badge key={tag} className="border-green-500/30 bg-green-500/20 text-xs text-green-200">
                            {tag}
                          </Badge>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && <p className="mt-12 text-center text-gray-400">No results found.</p>}
        </div>
      </div>
    </div>
  );
}


