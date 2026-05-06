"use client";
import Link from "next/link";
import { Navigation } from "@/components/navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Github } from "lucide-react";
const meta = {
  slug: "short-drama-text-analysis",
  title: "Short Drama Text Analysis: Human-AI Dialogue Behavior Mining",
  institution: "Independent Data Project",
  industries: ["Beauty", "Consumer Services", "AI Training"],
  practice: "Python · JSON Processing · NLP · Text Mining · Dialogue Metrics",
  term: "2025.09",
  tags: ["NLP", "Text Mining", "Dialogue Analysis", "Feature Engineering"],
  github: "https://github.com/LinLyra/short-drama-text-analysis",
};
const overview = `This project focuses on processing and analyzing human-AI role-play dialogue data generated from an internal AI training scenario. The original data was stored as nested JSON records, where each practice session contained user information, practice metadata, evaluation results, scenario details, and multiple turns of conversation logs. The goal of the project was to transform this raw and unstructured dialogue data into a clean analytical dataset that could support behavioral analysis, training evaluation, and future model or dashboard development.
I designed a full data processing pipeline that converts the original JSON files into structured message-level and session-level tables. At the message level, each row represents one dialogue turn with role, content, timestamp, and sequence information. At the session level, each row represents one complete practice session with aggregated behavioral, textual, temporal, and evaluation features.
Beyond basic cleaning, I built a set of interpretable metrics to describe how employees interact with the AI coach. These metrics cover practice rhythm, conversation structure, text length, question rate, lexical diversity, score progression, interaction balance, AI dominance, repetition, and novelty. The novelty measurement was designed in two layers: a lexical version based on TF-IDF or Jaccard similarity, and a semantic version based on Gemini text embeddings. This made the project not only a data cleaning task, but also an exploratory dialogue mining framework for understanding how users practice, improve, and vary their expression over time.`;
const whatIDid: string[] = [
  "Parsed the original nested JSON dialogue records and transformed them into structured datasets at both message level and practice-session level.",
  "Extracted key metadata from each practice session, including practice ID, practice time, practice duration, employee ID, employee name, department, scenario information, total score, and evaluation text.",
  "Reconstructed complete conversations by preserving the order of chat logs and separating user messages from AI assistant messages.",
  "Built message-level features such as role, turn index, content, and timestamp to support downstream conversation analysis.",
  "Built session-level features including total turns, user turns, assistant turns, user-to-assistant role balance, average token length, average character length, question rate, and type-token ratio.",
  "Created time-based learning rhythm indicators such as parsed practice datetime, first-session flag, gap since previous practice, daily practice count, weekly practice count, and employee-level session index.",
  "Calculated score-related learning indicators, including numeric score conversion, score change from the previous session, and three-session moving average score to capture short-term progress trends.",
  "Designed lexical novelty metrics by comparing each employee's current practice text with their previous practice history using TF-IDF cosine similarity or Jaccard similarity.",
  "Designed semantic novelty metrics using Gemini text embeddings to measure whether the meaning and expression path of a new practice session differed from the employee's previous sessions.",
  "Added interaction quality indicators such as alternation rate, assistant token share, and adjacent assistant-message repetition to evaluate whether the dialogue was balanced, interactive, or overly template-like.",
  "Exported the final processed dataset as a clean CSV file for future visualization, modeling, training-effect analysis, or business reporting.",
];
const methodology: string[] = [
  "Data ingestion and structure parsing: loaded the raw practice JSON data, inspected the key fields, and identified the nested relationship between practice sessions and chat logs.",
  "Message-level table construction: expanded each conversation into individual message rows, keeping practice ID, employee information, role, content, turn index, and practice time.",
  "Practice-level aggregation: grouped messages by practice ID and calculated session-level indicators that summarize conversation length, user participation, AI participation, and overall interaction structure.",
  "Text feature engineering: computed average token length, average character length, question rate, and type-token ratio for all messages, user messages, and assistant messages separately.",
  "Time-series feature engineering: parsed practice time into datetime format, sorted sessions by employee and time, then calculated practice gaps, daily frequency, weekly frequency, and employee-level session order.",
  "Learning-progress tracking: converted total score into numeric form and created score delta and rolling average metrics to show whether repeated practice was associated with visible improvement.",
  "Lexical novelty analysis: concatenated all messages within each session into a full practice text, compared the current session with the employee's historical sessions, and defined novelty as one minus the maximum historical similarity.",
  "Semantic novelty analysis: used Gemini text embeddings to represent each practice session as a semantic vector, then calculated one minus the maximum cosine similarity against previous sessions from the same employee.",
  "Interaction and readability analysis: measured role alternation, assistant token share, and adjacent assistant repetition to evaluate whether the conversation was interactive, balanced, and diverse.",
  "Output preparation: cleaned and exported the final session-level dataset with engineered features in UTF-8 CSV format, making it ready for Excel review, dashboard building, or downstream machine learning.",
];
const reflection = `The most important takeaway from this project is that dialogue data cannot be analyzed directly in its raw form. A single conversation contains multiple layers of information: who participated, when the practice happened, what scenario it belonged to, how many turns occurred, how long each side spoke, whether the user asked questions, whether the AI repeated itself, and whether the employee's expression changed over time. Without a reliable processing pipeline, these signals remain hidden inside nested JSON records.
This project also helped me understand that good feature engineering should connect technical processing with real training questions. For example, practice frequency and time gaps can reflect learning rhythm; score delta and moving average can reflect short-term progress; role balance and alternation rate can reflect interaction quality; lexical and semantic novelty can reflect whether employees are simply repeating old expressions or exploring new ways to communicate.
Another key lesson is that surface-level text metrics are not enough. Lexical similarity can capture repeated wording, but it may miss deeper semantic repetition. That is why I added embedding-based novelty as a second layer. This made the analysis more robust because it could detect whether two sessions were similar in meaning even when the wording changed.
If I continue improving this project, I would add visual dashboards for employee-level learning trajectories, cluster users by practice behavior, compare different training scenarios, and connect these behavioral features with final performance outcomes. The long-term value of this project is that it provides a reusable data foundation for AI training evaluation, coaching strategy optimization, and human-AI interaction research.`;
export default function ShortDramaTextAnalysisPage() {
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
            {meta.github && (
              <Link href={meta.github} target="_blank">
                <Button className="bg-blue-500/20 border border-blue-400/40 text-blue-100 hover:bg-blue-500/30">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </Link>
            )}
          </div>
          <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
            <div className="p-5 md:p-6">
              <h1 className="text-xl md:text-2xl font-semibold text-white mb-1 pr-28">{meta.title}</h1>
              <div className="mb-3 inline-flex flex-wrap items-center gap-2 text-sm text-gray-300">
                <span>{meta.institution}</span>
                <span>•</span>
                <span className="inline-flex items-center gap-1">
                  <Calendar className="h-4 w-4" /> {meta.term}
                </span>
              </div>
              <div className="mb-2 flex flex-wrap gap-2">
                {[...(meta.industries ?? []), ...meta.tags].map((t) => (
                  <Badge key={t} className="bg-blue-500/20 text-blue-100 border-blue-500/30">{t}</Badge>
                ))}
              </div>
              <p className="text-gray-200">{meta.practice}</p>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-blue-500/20 via-indigo-500/20 to-blue-500/20" />
          </Card>
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">Project Overview</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">{overview}</p>
          </section>
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">What I Did</h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {whatIDid.map((line, i) => (
                <li key={i} className="leading-relaxed">{line}</li>
              ))}
            </ul>
          </section>
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">Methodology</h2>
            <ul className="list-disc space-y-3 pl-5 text-gray-200">
              {methodology.map((line, i) => (
                <li key={i} className="leading-relaxed">{line}</li>
              ))}
            </ul>
          </section>
          <section className="rounded-xl border border-blue-400/20 bg-white/10 p-5 backdrop-blur-md md:p-6">
            <h2 className="mb-3 text-xl font-semibold text-blue-400 md:text-2xl">Reflection</h2>
            <p className="whitespace-pre-line text-base leading-relaxed text-gray-200">{reflection}</p>
          </section>
        </div>
      </div>
    </div>
  );
}