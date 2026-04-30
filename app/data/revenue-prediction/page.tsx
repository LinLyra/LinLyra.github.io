"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function QBUSRevenuePredictionPage() {
  const [showNotes, setShowNotes] = useState(false);

  const meta = {
    slug: "revenue-prediction",
    title: "QSR Daily Outlet Revenue",
    institution: "Course Project · University of Sydney",
    practice:
      "Predictive Analytics · Regression · EDA · Feature Engineering · Model Selection",
    term: "2026 S1",
    status: "Completed" as const,
    award: "",
    tags: [
      "Revenue Prediction",
      "QSR Analytics",
      "Regression",
      "Elastic Net",
      "Ridge",
      "Lasso",
      "KNN",
      "Cross-Validation",
      "Feature Engineering",
      "Python",
      "scikit-learn",
      "EDA",
    ],
    notes: [
      "/data/prediction.png",
    ],
  };

  const overview = `This project built a predictive model for daily quick-service restaurant (QSR) outlet revenue using structured temporal, location-based, promotional, and competitive features.

The business goal was to support operational decisions such as staffing, inventory planning, and promotion scheduling by forecasting outlet-day revenue more accurately. I treated the task as a supervised regression problem and compared multiple models using 5-fold cross-validation with mean squared error (MSE) as the evaluation metric.

The final selected model was Elastic Net, which achieved the lowest cross-validated MSE among the candidate models. The results suggested that the data structure was largely linear, while mild regularisation helped improve stability in the presence of outlet-level effects, engineered date features, and potentially correlated predictors.`;

  const highlights: string[] = [
    "Built an end-to-end Python/scikit-learn pipeline covering data cleaning, missing value imputation, feature engineering, model training, validation, and final prediction export.",
    "Performed EDA on revenue distribution, missingness, seasonal patterns, promotional effects, downtown location effects, rainfall, and numeric correlations.",
    "Engineered calendar-based features from Date, including day, day of week, week of year, month-start/end indicators, and cyclical month encoding using sine/cosine transformations.",
    "Handled realistic data issues including missing values, right-skewed revenue, outliers, and outlet-specific heterogeneity through robust preprocessing choices.",
    "Compared Linear Regression, Ridge, Lasso, Elastic Net, and KNN using consistent 5-fold cross-validation and MSE-based model selection.",
    "Selected Elastic Net because it combines L1 and L2 regularisation, balancing feature selection and coefficient stability for a high-dimensional encoded feature space.",
    "Generated a reproducible notebook and final prediction CSV in the required assignment format, with the final cell designed to compute hidden test MSE when Test.csv is provided.",
    "Critically discussed model limitations, especially the tendency of the linear model to underpredict extreme high-revenue days.",
  ];

  const reflection = `This project strengthened my understanding of how predictive analytics connects statistical modelling with real operational decision-making. A key lesson was that model accuracy alone is not enough: the modelling process must be reproducible, well-justified, and clearly communicated.

The strongest insight was that a carefully engineered linear model can perform competitively on structured business data. Although Elastic Net only slightly outperformed standard linear regression and Ridge, its regularisation made it a robust final choice given the one-hot encoded OutletID features and potential multicollinearity.

The project also showed the importance of honest model interpretation. The final model fitted the central revenue range reasonably well but underpredicted unusually high-revenue days. In a real QSR setting, this limitation matters because those peak days are exactly when staffing shortages and stock-outs are most costly. If iterating further, I would test interaction effects, lagged revenue features, and alternative transformations to better capture high-demand events while keeping the model interpretable.`;

  const hasNotes = meta.notes.length > 0;
  const badgeClass =
    meta.status === "Completed"
      ? "bg-blue-600/25 text-blue-100 border-blue-400/40"
      : "bg-cyan-600/25 text-cyan-100 border-cyan-400/40";

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#090a12]" />
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

          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="absolute right-3 top-3 flex gap-2">
              <span
                className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${badgeClass}`}
              >
                {meta.status}
              </span>
              {meta.award && (
                <span className="inline-flex items-center h-6 rounded-full px-2.5 text-xs border border-amber-300/40 bg-amber-500/20 text-amber-100">
                  🏆 {meta.award}
                </span>
              )}
            </div>

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

              <div className="flex flex-wrap gap-2 mb-2">
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
              {highlights.map((line, i) => (
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