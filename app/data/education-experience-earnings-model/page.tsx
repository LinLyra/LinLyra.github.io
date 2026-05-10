"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function EducationExperienceModelPage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "education-experience-earnings-model",
    title: "Education vs Experience on Earnings",
    institution: "Course Project · University of Sydney",
    practice:
      "Econometrics · Multiple Regression · Model Specification · Forecasting",
    term: "2025 S2",
    tags: [
      "Regression",
      "Econometrics",
      "Forecasting",
      "Model Comparison",
      "Omitted Variable Bias",
      "Nonlinear Model",
      "Out-of-sample",
      "Policy Insight",
    ],
    notes: ["/data/educ.png", ],
  };

  const overview = `This project was developed for the 2024 Asia and Pacific Mathematical Contest in Modeling (APMCM), focusing on the sustainable development of China’s and the global pet industry. The project combined time-series forecasting, regression analysis, machine learning, and policy scenario modeling to analyze the rapid growth of the pet economy and evaluate future market opportunities under changing international trade conditions.
The study explored four interconnected problems: domestic pet-industry development in China, global pet food demand forecasting, China’s pet food production and export trends, and the impact of foreign tariff policies on China’s pet food industry. By integrating domestic and international market dynamics, the project aimed to provide data-driven recommendations for sustainable industry growth and strategic decision-making.
Different modeling approaches were selected according to the characteristics of the data and market behavior. Linear regression was used to model the steady growth of China’s cat population, while Random Forest regression captured the more complex and nonlinear trends in dog ownership. ARIMA time-series forecasting was applied to predict global pet food demand, and scenario analysis was conducted to evaluate the effects of tariff increases on exports and domestic market substitution.
The results suggested that China’s cat population would continue growing rapidly due to urbanization and changing lifestyles, while the dog population would stabilize because of cultural and regional factors. Global pet food demand was forecasted to maintain strong growth over the next three years, driven by premiumization and increasing pet ownership in both developed and emerging markets.
The project also highlighted the risks associated with rising international tariffs on China’s pet food exports. However, the analysis showed that the expanding domestic market could partially offset export losses, especially through premium products, local branding, and market diversification strategies. Overall, the project demonstrated how mathematical modeling and economic analysis can support strategic planning in a rapidly evolving consumer industry.`;

  const highlights: string[] = [
    "Constructed a clean earnings panel and engineered core human-capital variables (education years, experience, and interaction terms).",
    "Built a baseline Mincer-style regression and progressively extended specifications with demographic and cognitive controls.",
    "Diagnosed model assumptions via residual patterns, functional-form checks, and multicollinearity review.",
    "Estimated nonlinear specifications to capture diminishing returns to experience.",
    "Performed out-of-sample forecasting to compare true predictive performance rather than relying only on in-sample fit.",
    "Quantified omitted-variable bias by comparing coefficient stability across nested models.",
    "Synthesized results into policy-relevant insights on education access and early-career labour dynamics.",
  ];

  const reflection = `This project strengthened my understanding of how mathematical modeling can be applied to real-world economic and industry problems. One of the most important lessons I learned was that different datasets require different modeling approaches. Stable and predictable trends, such as cat-population growth, are often well explained by simpler interpretable models like linear regression, 
  while more volatile and nonlinear patterns require flexible machine-learning methods such as Random Forest.I also gained practical experience in time-series forecasting and scenario analysis. Building ARIMA models for global pet food demand helped me better understand trend decomposition, forecasting assumptions, and the importance of validating future projections against economic behavior and industry context.
  Another major takeaway from this project was the importance of integrating multiple models into a coherent analytical framework. Rather than treating each question independently, the project connected domestic industry trends, global demand, export forecasting, and tariff-policy impacts into one larger economic system. This significantly improved my ability to think strategically and structurally about modeling problems.
  The tariff-policy simulation section also taught me that predictive models alone are often insufficient for decision-making. Policy uncertainty, consumer behavior, and market adaptation mechanisms must also be considered when evaluating long-term sustainability. Combining quantitative forecasting with scenario analysis and strategic recommendations created a more realistic and decision-oriented solution.From a technical perspective, 
  I improved my skills in Python-based data analysis, machine learning implementation, visualization design, and economic interpretation. I also learned how to present complex quantitative findings in a concise and business-oriented format suitable for competitions and strategic reports.If I continued this project, I would incorporate larger international datasets, apply advanced forecasting methods such as Prophet or LSTM neural networks, 
  include dynamic trade-policy modeling, and explore consumer sentiment analysis to better capture changing pet-consumption behavior in global markets.`;
  const hasNotes = meta.notes.length > 0;

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="data" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          {/* ===== Top buttons ===== */}
          <div className="flex items-center justify-between">
            <Link href="/data">
              <Button className="border border-blue-400/30 text-sky-200 hover:bg-white/10">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Data
              </Button>
            </Link>

            <div className="flex items-center gap-2">
              {hasNotes && (
                <Button
                  onClick={() => setShowNotes(true)}
                  className="bg-blue-500/20 border border-blue-400/40 text-blue-100 hover:bg-blue-500/30"
                >
                  View More
                </Button>
              )}

            </div>
          </div>

          {/* ===== Meta card ===== */}
          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="p-5 md:p-6">
              <h1 className="text-xl md:text-2xl font-semibold text-white mb-1">
                {meta.title}
              </h1>

              <div className="mb-3 inline-flex items-center gap-2 text-sm text-gray-300">
                <span>{meta.institution}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {meta.term}
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

            <div className="h-1 w-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-500/20" />
          </Card>

          {/* ===== Overview ===== */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">
              Project Overview
            </h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {overview}
            </p>
          </section>

          {/* ===== What I did ===== */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">
              What I Did
            </h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {highlights.map((line, i) => (
                <li key={i} className="leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </section>

          {/* ===== Reflection ===== */}
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

      {/* ===== Media modal ===== */}
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
