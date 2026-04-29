"use client";

import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, ExternalLink } from "lucide-react";

export default function PathologyImageClassificationPage() {
  const meta = {
    slug: "pathology-image-classification",
    title: "Classifying Tumour vs Immune Cells in H&E Images",
    institution: "Course Project · University of Sydney",
    practice:
      "Applied Machine Learning · Computer Vision · Pathology Image Classification",
    term: "2026 S1",
    status: "Completed" as const,
    canvaUrl: "PASTE_YOUR_CANVA_LINK_HERE",
    tags: [
      "Computer Vision",
      "Medical Imaging",
      "KNN",
      "HOG",
      "Random Forest",
      "SVM",
      "CNN",
      "ResNet50",
      "Python",
      "R",
      "Explainable AI",
    ],
  };

  const overview = `\
This project compares five machine learning models for classifying tumour cells versus immune cells in H&E pathology image patches.
The client scenario was a pathologist who needed a reliable, interpretable, and clinically useful classifier.

I evaluated models from a simple pixel baseline to feature-engineered and deep learning approaches, including Pixel KNN, HOG + Random Forest, Colour Histogram + SVM, CNN, and ResNet50 transfer learning.
The final recommended model was Colour Histogram + SVM, which achieved the strongest performance while remaining lightweight and interpretable.`;

  const highlights: string[] = [
    "Built an end-to-end image classification pipeline using 2,000 H&E image patches: 1,000 immune and 1,000 tumour.",
    "Applied an 80/20 stratified split to preserve class balance, resulting in 1,600 training images and 400 test images.",
    "Preprocessed images by resizing to 50×50 RGB and normalising pixel values for fair model comparison.",
    "Established Pixel KNN as a baseline model; its 0.50 accuracy showed raw pixel distance was not informative.",
    "Engineered HOG features with Random Forest to capture edge and texture structure, improving accuracy to 0.65.",
    "Designed a domain-informed Colour Histogram + SVM model using HSV colour distributions from H&E staining biology.",
    "Tested CNN and ResNet50 to compare deep learning against interpretable feature-based approaches.",
    "Selected Colour Histogram + SVM as the final model with accuracy 0.95, tumour sensitivity 0.96, and AUC 0.992.",
    "Performed error analysis to identify failure cases: pale tumour nuclei and densely clustered immune cells.",
  ];

  const reflection = `\
This project helped me understand that stronger models are not always more complex models.
The most important insight was that H&E staining already encodes biological information through colour: haematoxylin stains nuclei purple-blue and eosin stains cytoplasm pink.

By translating this domain knowledge into HSV colour histogram features, the SVM outperformed both CNN and ResNet50.
This taught me that in small medical imaging datasets, interpretable and biologically motivated feature engineering can sometimes outperform end-to-end deep learning.

The project also strengthened my ability to communicate model trade-offs to a non-technical client, especially around sensitivity, false negatives, interpretability, and deployment risk.`;

  const badgeClass =
    meta.status === "Completed"
      ? "bg-blue-600/25 text-blue-100 border-blue-400/40"
      : "bg-cyan-600/25 text-cyan-100 border-cyan-400/40";

  return (
    <div className="relative min-h-screen">
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

            <a href={meta.canvaUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-blue-500/20 border border-blue-400/40 text-blue-100 hover:bg-blue-500/30">
                <ExternalLink className="mr-2 h-4 w-4" />
                View More
              </Button>
            </a>
          </div>

          <Card className="relative overflow-hidden border-white/20 bg-white/10 backdrop-blur-md">
            <div className="absolute right-3 top-3">
              <span
                className={`inline-flex h-6 items-center rounded-full px-2.5 text-xs border backdrop-blur-sm ${badgeClass}`}
              >
                {meta.status}
              </span>
            </div>

            <div className="p-5 md:p-6">
              <h1 className="mb-1 text-xl font-semibold text-white md:text-2xl">
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
                    className="border-blue-500/30 bg-blue-500/20 text-blue-100"
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
            <h2 className="mb-2 text-xl font-semibold text-blue-400 md:text-2xl">
              Project Overview
            </h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {overview}
            </p>
          </section>

          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-2 text-xl font-semibold text-blue-400 md:text-2xl">
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
            <h2 className="mb-2 text-xl font-semibold text-blue-400 md:text-2xl">
              Reflection
            </h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">
              {reflection}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}