"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Trophy, ArrowLeft, Award } from "lucide-react";

type CompetitionItem = {
  slug: string;
  title: string;
  event?: string;
  date?: string; // 
  type: "hackathon" | "marketing" | "modeling" | "sustainability" | "case" | "product";
  description?: string;
  tags?: string[];
  placement?: string;
  teamSize?: string;
  image?: string;
  logo?: string;  
};

export default function CompetitionsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const competitions: CompetitionItem[] = [
    {
      slug: "gdgx-openai-hack",
      title: "GDG × OpenAI Hack Node Australia",
      date: "2025.08",
      type: "hackathon",
      logo: "/competition/gdglogo.png",
      description:
        "2nd Global AI Hackathon, co-hosted with MIT Sloan AI Club; sponsors include OpenAI, Akamai, Scale AI.",
      tags: ["Full-stack", "Vibe coding", "Social Network App", "GameFi"],
    },
    {
      slug: "adventurex-2025",
      title: "AdventureX 2025",
      date: "2025.07",
      type: "hackathon",
      logo: "/competition/advexlogo.jpg",
      description: "China’s largest youth-driven hackathon.",
      tags: ["Product Ops", "Web3", "Youth Innovation", "YOLO"],
    },
    {
      slug: "deloitte-digital-elite-2025",
      title: "Deloitte Digital Elite Challenge 2025",
      date: "2025.05",
      type: "product",
      logo: "/competition/deloittelogo.png",
      description: "Global university competition by Deloitte China to discover digital-minded talent.",
      tags: ["AI + Audit", "Frontend Dev", "Digital Transformation"],
    },
    {
      slug: "ccf-tech-for-good-2025",
      title: "CCF Tech for Good Hackathon 2025",
      date: "2025.05",
      type: "hackathon",
      logo: "/competition/ccflogo.png",
      description: "Building social-impact solutions at the CCF tech-for-good hackathon.",
      tags: ["Accessible Films", "Product Design", "Social Impact"],
    },
    {
      slug: "roland-berger-campus-2025",
      title: "Roland Berger Campus Challenge 2025",
      date: "2025.06",
      type: "case",
      logo: "/competition/Roland_Berger_Logo.png",
      description: "Strategy consulting case challenge from Roland Berger.",
      tags: ["Strategy", "Market Analysis"],
    },
    {
      slug: "ey-esg-innovation-2025",
      title: "EY ESG University Innovation Challenge 2025",
      date: "2025.04",
      type: "case",
      logo: "/competition/eylogo.png",
      description: "Data-driven sustainability strategies and ESG innovation.",
      tags: ["ESG", "AI + Luxury"],
    },
    {
      slug: "kpmg-innovate-day-2025",
      title: "KPMG Innovate Day 2025",
      date: "2024.10",
      type: "product",
      logo: "/competition/kpmglogo.png",
      description: "KPMG innovation program focused on digital products & insights.",
      tags: ["Product", "AuditX", "Business Plan"],
    },
    {
      slug: "kpmg-esg-case-competition-3rd",
      title: "KPMG ESG Case Competition",
      date: "2025",
      type: "case",
      logo: "/competition/kpmglogo.png",
      description: "ESG case-analysis competition led by KPMG China.",
      tags: ["ESG", "Sustainability", "Business Strategy"],
    },
    {
      slug: "kpmg-bluebird-it-audit",
      title: "KPMG Bluebird IT Audit Challenge",
      date: "2025.08",
      type: "case",
      logo: "/competition/kpmglogo.png",
      description: "Solve real-world IT-audit cases with technology.",
      tags: ["IT Audit", "Cybersecurity", "ATM"],
    },
    {
      slug: "apmcm-2024",
      title: "APMCM (Asia-Pacific Mathematical Contest in Modeling) 2024",
      date: "2024.11",
      type: "modeling",
      logo: "/competition/apmcmlogo.png",
      description: "Mathematical modeling contest (Asia-Pacific).",
      tags: ["Modeling", "Optimization"],
    },
    {
      slug: "mcm-icm-2025",
      title: "MCM/ICM Mathematical Contest in Modeling 2025",
      date: "2025.02",
      type: "modeling",
      logo: "/competition/COMAPlogo.svg",
      description: "International mathematical modeling competition.",
      tags: ["Modeling", "Statistics"],
    },
    {
      slug: "loreal-brandstorm",
      title: "L'Oréal BRANDSTORM 2025",
      date: "2025.04",
      type: "marketing",
      logo: "/competition/loreallogo.png",
      description: "Global youth challenge—Men’s beauty through tech & product innovation.",
      tags: ["Marketing", "Product", "Pitch"],
    },
    {
      slug: "net-zero-challenge-gys",
      title: "Global Youth Summit on Net-Zero Future",
      date: "2024.09",
      type: "sustainability",
      logo: "/competition/UNESCOlogo.png",
      description:
        "Youth-driven summit at Tsinghua, co-hosted by UNESCO East Asia and GAUC.",
      tags: ["Climate Action", "Youth Leadership", "Innovation"],
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
    {
      slug: "microsoft-chat-hack-promptathon",
      title: "Microsoft Chat & Hack Promptathon",
      date: "2025.03",
      type: "hackathon",
      logo: "/competition/microsoftlogo.png",
      description: "GenAI prompt engineering & product prototyping.",
      tags: ["GenAI", "Prompting", "Product"],
    },
  ];

  const allTypes = ["hackathon", "marketing", "modeling", "sustainability", "case", "product"] as const;

  const q = searchTerm.trim().toLowerCase();
  const filtered = competitions.filter((c) => {
    const hit =
      c.title.toLowerCase().includes(q) ||
      (c.event ?? "").toLowerCase().includes(q) ||
      (c.description ?? "").toLowerCase().includes(q) ||
      (c.tags ?? []).some((t) => t.toLowerCase().includes(q));
    const tagOK = selectedTags.length === 0 || selectedTags.includes(c.type);
    return hit && tagOK;
  });

  return (
    <div className="relative min-h-screen">
      <div className="relative z-10 pt-20 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Link href="/">
              <Button className="mb-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md border-green-400/30 text-gray-100 hover:bg-green-500/30">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Universe
              </Button>
            </Link>
            <h1 className="text-4xl font-bold text-gray-100 mb-4">Competitions</h1>
            <p className="text-gray-200">
              Transforming classroom knowledge into real-world impact through competitions.
            </p>
          </div>

          {/* 搜索 + 类型过滤 */}
          <div className="mb-8 space-y-4">
            <Input
              placeholder="Search competitions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-md mx-auto bg-black/30 backdrop-blur-md border-green-400/30 text-gray-100 placeholder:text-gray-400"
            />
            <div className="flex flex-wrap gap-2 justify-center">
              {allTypes.map((t) => {
                const active = selectedTags.includes(t);
                return (
                  <Badge
                    key={t}
                    onClick={() =>
                      setSelectedTags((prev) =>
                        active ? prev.filter((x) => x !== t) : [...prev, t]
                      )
                    }
                    className={`cursor-pointer ${
                      active
                        ? "bg-green-500/30 text-green-100 border-green-400/50"
                        : "bg-green-500/10 text-green-200 border-green-400/30"
                    }`}
                  >
                    {t}
                  </Badge>
                );
              })}
              {selectedTags.length > 0 && (
                <Button
                  variant="ghost"
                  className="h-6 px-2 text-gray-300"
                  onClick={() => setSelectedTags([])}
                >
                  Clear
                </Button>
              )}
            </div>
          </div>

          {/* 卡片列表（无大图，仅 Logo） */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c) => (
              <Link key={c.slug} href={`/competitions/${c.slug}`} className="block">
                <Card className="bg-black/30 backdrop-blur-md border-green-400/20 hover:bg-black/40 transition-all duration-300 cursor-pointer overflow-hidden min-h-[220px]">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        {/* ✅ 小 Logo 方块 */}
                        <div className="shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-green-400/20 flex items-center justify-center overflow-hidden">
                          <img
                            src={c.logo || c.image || "/placeholder.svg"}
                            alt={`${c.title} logo`}
                            className="max-w-[2.5rem] max-h-[2.5rem] object-contain"
                          />
                        </div>
                        <div>
                          <CardTitle className="text-gray-100 text-lg leading-snug">
                            {c.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                            <Trophy className="w-4 h-4" />
                            <span>{c.date ?? ""}</span>
                            {c.event && <span>• {c.event}</span>}
                          </div>
                        </div>
                      </div>

                      {c.placement && (
                        <div className="flex items-center gap-1 bg-yellow-500/20 backdrop-blur-sm rounded-full px-2 py-1">
                          <Award className="w-3 h-3 text-yellow-400" />
                          <span className="text-yellow-400 text-xs font-semibold">
                            {c.placement}
                          </span>
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-200 text-sm mb-4 line-clamp-3">
                      {c.description ?? ""}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {(c.tags ?? []).slice(0, 4).map((tag) => (
                        <Badge
                          key={tag}
                          className="bg-green-500/20 text-green-200 border-green-500/30 text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-400 mt-12">No results found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
