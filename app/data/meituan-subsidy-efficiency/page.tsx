"use client";
import Link from "next/link";
import { useState } from "react";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar } from "lucide-react";
import MediaModel from "@/components/media-model";
export default function MeituanSubsidyEfficiencyPage() {
  const [showNotes, setShowNotes] = useState(false);
  const meta = {
    slug: "meituan-subsidy-efficiency",
    title: "Subsidy Efficiency Evaluation and Budget Reallocation for Local Life Marketing",
    institution: "Meituan Business Analytics Challenge",
    practice: "Causal Inference · PSM · ATT · Incremental ROI · User Segmentation · Budget Reallocation",
    term: "2026.04",
    role: "Individual",
    tags: ["Causal Inference", "PSM", "ATT", "Incremental ROI", "Subsidy Strategy", "Business Analytics"],
    notes: ["/data/meituan1.png"] as string[],
  };
  const overview = `This project studied how local life platforms can evaluate marketing subsidies from a true incremental-growth perspective instead of relying only on surface-level metrics such as coupon redemption rate, subsidized GMV, or apparent ROI. In many subsidy campaigns, users who redeem coupons may already have strong purchase intent, which means part of the subsidized transaction volume is not truly created by the subsidy. The core business question was therefore not simply whether subsidies work, but how much real incremental value they generate and where budget should be reallocated to improve efficiency.
Using real business data from a local life platform, I built an analytical framework covering transactions, coupon acquisition records, user activity behavior, and user profiles. I used Propensity Score Matching to construct comparable treatment and control groups from users in the same coupon batch, estimated Average Treatment Effects across 3-day, 7-day, and 14-day windows, and further decomposed apparent subsidized GMV into true incremental contribution and estimated non-incremental coverage.
The final analysis showed that subsidies still had a positive causal effect after controlling for user history, but the efficiency structure was highly uneven. The 7-day same-business-unit ATT was about 50.14, the approximate incremental ROI was about 4.55, while only around 26.4% of apparent subsidized GMV could be attributed to true incremental demand. This revealed a clear budget misallocation problem: subsidies were effective, but too much budget was spent on users and scenarios that would likely have converted naturally.`;
  const keyInsights: string[] = [
    "Subsidies created measurable incremental value after matching comparable users, especially within the 7-day and 14-day windows.",
    "The 14-day effect was about 1.79 times the 7-day effect, suggesting that subsidy impact was not limited to immediate conversion but continued to release over time.",
    "Only about 26.4% of apparent subsidized GMV was estimated as true incrementality, while the remaining share reflected natural demand coverage or inefficient targeting.",
    "Mid-activity users and lower-tier city users showed stronger marginal response, making them better targets for future subsidy allocation.",
    "Different business units had large efficiency gaps, indicating that budget reallocation could improve total performance without increasing total spending.",
  ];
  const methods: string[] = [
    "Defined a causal evaluation problem around true incremental GMV rather than apparent subsidized transaction value.",
    "Built treatment and control groups from the same subsidy batch to reduce coupon-level and campaign-level confounding.",
    "Applied Propensity Score Matching using user history variables such as pre-30-day GMV, order count, same-BU spending, active days, city level, and profile features.",
    "Checked matching quality through standardized mean differences to confirm that the matched treatment and control groups were more comparable.",
    "Estimated ATT, Lift, incremental ROI, true incremental share, and estimated waste rate across multiple time windows and user segments.",
    "Translated the analytical results into a practical strategy framework covering targeting optimization, coupon structure refinement, budget reallocation, and dashboard monitoring.",
  ];
  const whatIDid: string[] = [
    "Designed the complete research structure from business diagnosis to causal evaluation, segmentation analysis, budget strategy, and final recommendation.",
    "Reframed the problem from traditional subsidy performance review to true incrementality measurement, making the analysis more decision-oriented.",
    "Selected and engineered key pre-treatment features to describe historical consumption, activity level, business-unit preference, and user profile differences.",
    "Used PSM to estimate a more credible counterfactual outcome for coupon redeemers and avoid over-crediting subsidies for purchases that may have happened anyway.",
    "Calculated multi-window treatment effects and compared short-term stimulation with longer-term persistence.",
    "Built a segmentation logic to identify high-response groups, including mid-activity users, lower-tier city users, high-activity users, and high-consumption users.",
    "Developed a budget reallocation recommendation that shifts resources away from low-ROI, high-subsidy scenarios and toward higher-response users and business units.",
    "Designed a monitoring dashboard concept with metrics such as incremental ROI, true incremental share, waste rate, subsidy penetration, high-response hit rate, and 7-day ATT.",
  ];
  const businessValue = `The business value of this project lies in turning subsidy evaluation from a post-campaign reporting exercise into a resource allocation system. Instead of asking whether coupon users spent more than non-coupon users, the framework estimates what would have happened without the subsidy and then uses that incremental gap to guide future budget decisions.
For platform operations, this means subsidy strategy can move from broad coverage to marginal-return-driven targeting. Budget does not necessarily need to increase; it can be reallocated from low-efficiency business units and low-response users to segments with higher incremental ROI. This creates a clearer path for improving growth quality, reducing waste, and building a more sustainable subsidy mechanism.`;
  const reflection = `The biggest lesson I learned from this project is that high redemption does not equal high incrementality. A campaign may look successful under apparent ROI, but once natural demand is separated from true incremental demand, the conclusion can change significantly. This made me realize that business analysis should not stop at describing what happened; it should help decision-makers understand what truly caused the outcome.
This project also helped me connect causal inference with real business strategy. PSM and ATT were not used only as statistical methods, but as tools to answer a practical operating question: where should the next unit of subsidy budget go? Through this process, I strengthened my ability to move from data cleaning and metric design to causal reasoning, user segmentation, and actionable recommendations.
If I continued this project, I would expand the analysis from one representative subsidy batch to multiple campaign batches, compare seasonal differences, and build an online experimentation or uplift-modeling system. That would make the budget reallocation strategy more dynamic and allow the platform to continuously learn which users, cities, and business units generate the highest true incremental return.`;
  const hasNotes = (meta.notes?.length ?? 0) > 0;
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#07111F]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(37,99,235,0.28),transparent_58%),radial-gradient(circle_at_12%_88%,rgba(14,165,233,0.18),transparent_55%),radial-gradient(circle_at_88%_22%,rgba(59,130,246,0.16),transparent_55%)]" />
      </div>
      <Navigation activeSection="data" onSectionChange={() => {}} />
      <div className="relative z-10 pt-16 md:pt-20 p-6">
        <div className="mx-auto max-w-5xl space-y-6">
          <div className="flex items-center justify-between">
            <Link href="/data">
              <Button className="bg-gradient-to-r from-blue-500/20 to-sky-500/20 backdrop-blur-md border-blue-400/30 text-gray-100 hover:bg-blue-500/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Data
              </Button>
            </Link>
            {hasNotes ? (
              <Button onClick={() => setShowNotes(true)} className="bg-blue-500/20 border border-blue-300/40 text-blue-100 hover:bg-blue-500/30">
                View More
              </Button>
            ) : (
              <div />
            )}
          </div>
          <Card className="relative bg-white/10 backdrop-blur-md border-blue-200/20 overflow-hidden">
            <div className="p-5 md:p-6">
              <h1 className="text-xl md:text-2xl font-semibold text-white mb-1">{meta.title}</h1>
              <div className="mb-3 inline-flex flex-wrap items-center gap-2 text-sm text-blue-100/80">
                <span>{meta.institution}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {meta.term}
                </span>
                <span className="ml-1 inline-flex items-center h-5 rounded-full px-2 text-[11px] border border-blue-300/40 bg-blue-500/20 text-blue-100">{meta.role}</span>
              </div>
              <div className="mb-2 flex flex-wrap gap-2">
                {meta.tags.map((t) => (
                  <Badge key={t} className="bg-blue-500/15 text-blue-100 border-blue-300/25">{t}</Badge>
                ))}
              </div>
              <p className="text-blue-50/90">{meta.practice}</p>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-blue-500/30 via-sky-400/40 to-indigo-500/30" />
          </Card>
          <section className="rounded-xl border border-blue-200/15 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-50 md:text-2xl">Project Overview</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-blue-50/85">{overview}</p>
          </section>
          <section className="rounded-xl border border-blue-200/15 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-50 md:text-2xl">Key Insights</h2>
            <ul className="list-disc space-y-3 pl-5 text-blue-50/85">
              {keyInsights.map((line, i) => (
                <li key={i} className="leading-relaxed">{line}</li>
              ))}
            </ul>
          </section>
          <section className="rounded-xl border border-blue-200/15 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-50 md:text-2xl">Methods</h2>
            <ul className="list-disc space-y-3 pl-5 text-blue-50/85">
              {methods.map((line, i) => (
                <li key={i} className="leading-relaxed">{line}</li>
              ))}
            </ul>
          </section>
          <section className="rounded-xl border border-blue-200/15 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-50 md:text-2xl">What I Did</h2>
            <ul className="list-disc space-y-3 pl-5 text-blue-50/85">
              {whatIDid.map((line, i) => (
                <li key={i} className="leading-relaxed">{line}</li>
              ))}
            </ul>
          </section>
          <section className="rounded-xl border border-blue-200/15 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-50 md:text-2xl">Business Value</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-blue-50/85">{businessValue}</p>
          </section>
          <section className="rounded-xl border border-blue-200/15 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-50 md:text-2xl">Reflection</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-blue-50/85">{reflection}</p>
          </section>
        </div>
      </div>
      {hasNotes && (
        <MediaModel isOpen={showNotes} onClose={() => setShowNotes(false)} title={meta.title} media={{ images: meta.notes }} />
      )}
    </div>
  );
}