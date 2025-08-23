"use client";

import { useState } from "react";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import MediaModel from "@/components/media-model";

export default function Comp3308ClassifiersPage() {
  const [showNotes, setShowNotes] = useState(false);

  // —— META（无奖项、无外链；只放一张配图做 View More）——
  const meta = {
    slug: "pima-diabetes-accuracy-vs-runtime",
    title: "Classifier Accuracy & Runtime — Pima Diabetes vs Room Occupancy",
    institution: "Course Project · University of Sydney",
    practice: "Machine Learning · Model Comparison (Weka vs Python)",
    term: "2025 S1",
    status: "Completed" as const,
    tags: [
      "k-NN",
      "Naive Bayes",
      "Ensemble",
      "Random Forest",
      "SVM",
      "10-fold CV",
      "Weka",
      "Python",
    ],
    // 换成你的实际图片路径（public 下）
    notes: ["/data/comp3308.png"],
  };

  // —— 概览（来自报告的要点，精炼叙述）——
  const overview = `We compare custom Python implementations (1NN/7NN, Naive Bayes, + majority-vote ensemble)
with Weka baselines (ZeroR, 1R, Decision Tree, MLP, SVM, Random Forest) on two datasets:
(1) Pima Indians Diabetes (768 × 8) and (2) Room Occupancy (2025 × 4). Using 10-fold stratified CV,
we evaluate both predictive accuracy and runtime.

Results: On Pima, Random Forest is top (~77.44%), while SVM/MLP/7NN/MyEns are close in the mid-70% band.
On Occupancy, nearly all models exceed 98–99% (e.g., RF ~99.71%, 1NN ~99.51%), reflecting cleaner signals
and clearer class boundaries. Our Python implementations match Weka’s accuracy closely, but run slower
(~8–12s vs <2s), highlighting language/implementation overheads.

Takeaway: Dataset structure dominates outcomes; ensembles help more on noisier Pima than on clean Occupancy.
Accuracy parity across platforms validates our implementations; runtime favors Java/Weka unless Python is
vectorized/optimized.`;

  // —— What I did（合并“职责 + 技能 + 做法”）——
  const highlights: string[] = [
    "Re-implemented 1NN/7NN & Gaussian Naive Bayes in Python; set up 10-fold stratified CV pipeline.",
    "Built a simple majority-vote ensemble (1NN + 7NN + NB) and compared against Weka baselines.",
    "Reproduced normalization, folds, and configs to ensure fair, like-for-like comparisons.",
    "Analyzed accuracy deltas across datasets and models; explained why Occupancy → ~99% while Pima stays ~75%.",
    "Profiled runtime: Weka (<2s) vs Python (8–12s) and attributed gaps to platform optimizations & vectorization.",
    "Summarized implications: choose models by data regime; prioritize optimization only where latency matters.",
  ];

  // —— Reflection（不截断，蓝色主题）——
  const reflection = `This exercise made me appreciate how strongly dataset structure drives model performance.
On Pima, we saw modest ceilings (≈75–77%) even for strong models; on Occupancy, almost everything was near-perfect.
That pushed me to interpret results beyond “which algorithm wins,” toward “why this dataset favors certain inductive biases.”

Re-implementing k-NN & NB deepened my grasp of distance metrics, smoothing, and independence assumptions, and why
the same design can feel brittle on noisy, high-variance medical data but excel on clean sensor streams. Matching Weka’s
accuracy was a good correctness check; the runtime gap reminded me that production systems benefit from compiled paths
(HotSpot JIT, optimized data structures) or Python acceleration (NumPy/Cython/numba).

If I iterate, I’ll (1) add precision/recall/F1 and calibration error, (2) test robustness under class imbalance/missingness,
(3) vectorize and parallelize the Python path, and (4) probe explainability (feature importance, decision surfaces) to balance
performance and interpretability for real deployments.`;

  const hasNotes = meta.notes.length > 0;
  const badgeClass =
    meta.status === "Completed"
      ? "bg-blue-600/25 text-blue-100 border-blue-400/40"
      : "bg-cyan-600/25 text-cyan-100 border-cyan-400/40";

  return (
    <div className="relative min-h-screen">
      <Navigation activeSection="data" onSectionChange={() => {}} />

      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          {/* 顶部：左返回 / 右仅 View More */}
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

          {/* Meta 卡（无荣誉、无外链） */}
          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="absolute right-3 top-3">
              <span className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${badgeClass}`}>
                {meta.status}
              </span>
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
              <div className="mb-2 flex flex-wrap gap-2">
                {meta.tags.map((t) => (
                  <Badge key={t} className="bg-blue-500/20 text-blue-100 border-blue-500/30">
                    {t}
                  </Badge>
                ))}
              </div>
              <p className="text-gray-200">{meta.practice}</p>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-500/20" />
          </Card>

          {/* Overview */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">Project Overview</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">{overview}</p>
          </section>

          {/* What I did */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">What I did</h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {highlights.map((line, i) => (
                <li key={i} className="leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </section>

          {/* Reflection（不截断） */}
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">Reflection</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">{reflection}</p>
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
