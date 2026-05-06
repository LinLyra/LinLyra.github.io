"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function CybersecurityModelingPage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "global-cybersecurity-analysis",
    title: "Global Cybersecurity Risk & Policy Intelligence Modeling",
    institution: "2025 MCM/ICM Mathematical Contest in Modeling",
    practice:
      "Data Analytics · Time Series · Policy Intelligence · Geographic Visualization · NLP",
    term: "2025.02",
    tags: [
      "Cybersecurity",
      "Mathematical Modeling",
      "Time Series",
      "Policy Analysis",
      "Heatmap",
      "NLP",
      "Data Visualization",
      "GCI",
    ],
    notes: [
      "/competition/mcm.png",
      "/competition/mcm2.png",
      "/competition/mcm3.png",
    ],
  };

  const overview = `This project explored the global distribution of cybercrime, national cybersecurity preparedness, and the relationship between digital development and cyber risk. Using international cybersecurity datasets, policy reports, cyberattack statistics, and Global Cybersecurity Index (GCI) data, we built an integrated analytical framework to study how cyber threats vary across regions, industries, and regulatory environments.

The project focused on three major questions:
1. Which countries and regions experience the highest concentration of cybercrime activity?
2. How do national cybersecurity laws and governance systems influence cybercrime prevention and response effectiveness?
3. How do socioeconomic and demographic factors such as internet penetration, economic development, and digital infrastructure correlate with cybercrime trends?

To answer these questions, we combined geographic analysis, time-series forecasting, statistical comparison, policy-text analysis, and visualization techniques. The final framework connected cyberattack frequency, breach costs, legal preparedness, and cybersecurity readiness into one coherent global risk assessment system.

The results showed that highly digitalized economies such as the United States, United Kingdom, Germany, and China experience disproportionately high cyberattack pressure because of their economic value and digital infrastructure density. At the same time, countries with strong cybersecurity governance systems, including Estonia and Israel, demonstrated better resilience and prevention effectiveness. Developing regions with increasing internet penetration but weaker legal and technical systems showed rising cyber risk exposure and lower response capacity.`;

  const whatIDid: string[] = [
    "Collected and integrated cybersecurity datasets from international reports, public databases, Kaggle breach datasets, GCI reports, and global cybercrime statistics.",
    "Performed exploratory analysis on global cyberattack types, regional incident distribution, data breach trends, and industry-level economic losses.",
    "Built regional heatmaps to visualize temporal changes in cybersecurity incidents across North America, Europe, Asia-Pacific, Latin America, and the Middle East.",
    "Analyzed cybersecurity policy effectiveness by comparing legal coverage, breach notification laws, interception regulations, and online identity protection frameworks across regions.",
    "Studied Global Cybersecurity Index (GCI) scores and interpreted how legal, technical, organizational, capacity-development, and cooperation pillars contribute to national cyber resilience.",
    "Conducted time-series trend analysis on annual global breach costs and projected future cybersecurity economic impact using historical growth patterns.",
    "Compared industry-level breach costs and identified healthcare, finance, and government sectors as the most economically vulnerable industries.",
    "Performed policy-text analysis and cybersecurity keyword extraction using NLP-based word cloud analysis on GDPR-related and national cybersecurity law documents.",
    "Synthesized quantitative findings into strategic recommendations for policymakers, including cybersecurity education, international cooperation, breach regulation, and digital infrastructure protection.",
    "Contributed to the final modeling report structure, visualization design, analytical interpretation, and policy recommendation writing.",
  ];

  const methodology: string[] = [
    "Data Collection: gathered multi-source cybersecurity datasets including GCI reports, cybercrime databases, IBM threat intelligence reports, breach-cost reports, and public regulatory documents.",
    "Data Cleaning & Integration: standardized country names, regional classifications, yearly metrics, and breach categories to create a unified analytical dataset.",
    "Geographic Analysis: constructed regional heatmaps and country-level cybersecurity distribution maps to analyze spatial patterns of cyber incidents.",
    "Trend & Time-Series Analysis: analyzed annual growth trends of breach incidents and global breach costs to identify long-term cybersecurity risk escalation.",
    "Policy Comparison Framework: categorized cybersecurity laws into legal protection dimensions such as illegal access, data interception, identity theft, and breach notification systems.",
    "GCI Evaluation Analysis: interpreted the five-pillar Global Cybersecurity Index framework, including legal, technical, organizational, capacity development, and international cooperation dimensions.",
    "Industry Risk Analysis: compared average breach costs across industries and identified which sectors carry the highest financial and operational cyber risk.",
    "NLP & Text Mining: generated cybersecurity policy word clouds and extracted dominant themes such as data protection, digital sovereignty, cybersecurity governance, and privacy regulation.",
    "Scenario Interpretation: linked cybersecurity readiness with socioeconomic variables such as internet penetration, digital infrastructure development, and institutional maturity.",
    "Policy Recommendation Modeling: translated analytical findings into strategic cybersecurity governance recommendations for countries at different development stages.",
  ];

  const reflection = `This project helped me realize that cybersecurity is not only a technical problem, but also a policy, economic, and societal challenge. Countries with stronger digital economies are often more exposed to cyber threats because they possess higher-value infrastructure and data assets. However, strong cybersecurity outcomes depend not only on technical defense systems, but also on legal frameworks, public awareness, education systems, and international cooperation.

One of the biggest insights from this project was understanding the importance of combining quantitative modeling with policy analysis. A heatmap or trend forecast alone cannot fully explain why some countries perform better than others. The broader institutional environment — including regulation quality, breach notification systems, cybersecurity education, and response coordination — plays a critical role in determining cyber resilience.

This project also strengthened my ability to work with heterogeneous global datasets and transform complex international policy information into interpretable visual and analytical insights. I learned how to combine geographic analysis, time-series analysis, visualization, and NLP techniques into one integrated modeling framework.

If I continued this project, I would expand the work by incorporating real-time cyberattack feeds, machine learning–based risk prediction, network analysis of international cybercrime activity, and dynamic cybersecurity readiness scoring systems. I would also explore how AI-generated threats and large language models may reshape future cybersecurity governance and international cyber risk landscapes.`;

  const hasNotes = meta.notes.length > 0;

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#090B14]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(59,130,246,0.18),transparent_60%),radial-gradient(circle_at_10%_90%,rgba(99,102,241,0.18),transparent_55%),radial-gradient(circle_at_90%_20%,rgba(56,189,248,0.15),transparent_55%)]" />
      </div>

      <Navigation activeSection="data" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">

          <div className="flex items-center justify-between">
            <Link href="/data">
              <Button className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 backdrop-blur-md border-blue-400/30 text-gray-100 hover:bg-blue-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Data
              </Button>
            </Link>

            {hasNotes && (
              <Button
                onClick={() => setShowNotes(true)}
                className="bg-blue-500/20 border border-blue-400/40 text-blue-100 hover:bg-blue-500/30"
              >
                View More
              </Button>
            )}
          </div>

          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="p-5 md:p-6">

              <h1 className="text-xl md:text-2xl font-semibold text-white mb-1">
                {meta.title}
              </h1>

              <div className="mb-3 inline-flex items-center gap-2 text-sm text-gray-300">
                <span>{meta.institution}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {meta.term}
                </span>
              </div>

              <div className="mb-2 flex flex-wrap gap-2">
                {meta.tags.map((t) => (
                  <Badge
                    key={t}
                    className="bg-blue-500/20 text-blue-100 border-blue-500/30"
                  >
                    {t}
                  </Badge>
                ))}
              </div>

              <p className="text-gray-200">{meta.practice}</p>
            </div>

            <div className="h-1 w-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-cyan-500/20" />
          </Card>

          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">
              Project Overview
            </h2>

            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {overview}
            </p>
          </section>

          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">
              What I Did
            </h2>

            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {whatIDid.map((line, i) => (
                <li key={i} className="leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">
              Methodology
            </h2>

            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {methodology.map((line, i) => (
                <li key={i} className="leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">
              Reflection
            </h2>

            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {reflection}
            </p>
          </section>

        </div>
      </div>

      {hasNotes && (
        <MediaModel
          isOpen={showNotes}
          onClose={() => setShowNotes(false)}
          title={meta.title}
          media={{ images: meta.notes }}
        />
      )}
    </div>
  );
}