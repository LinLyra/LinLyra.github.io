 "use client"
 
 import { useMemo, useState } from "react"
 import Image from "next/image"
 import Link from "next/link"
 import { Navigation } from "@/components/navigation"
 import { Card } from "@/components/ui/card"
 import { Badge } from "@/components/ui/badge"
 import { Button } from "@/components/ui/button"
 import { ArrowLeft, Calendar, ExternalLink } from "lucide-react"
 import MediaModel from "@/components/media-model"
 
 type BadgeItem = {
   title: string
   issued: string
   credentialId?: string
   url?: string
 }
 
 export default function GoogleGenAISkillBadges2025Page() {
   const [showNotes, setShowNotes] = useState(false)
 
   const meta = {
     slug: "google-genai-skill-badges-2025",
     title: "Google GenAI Program — Skill Badges",
     institution: "Google",
     term: "2025.10 — 2025.12",
     logo: "/learning/googlelogo.png",
     status: "Completed" as const,
     tagline:
       "A focused learning sprint across GenAI, cloud MLOps, data engineering, and AI infrastructure. I packaged the outcomes as a single program page to keep the Learning section scannable (badges as screenshots, links optional).",
     tags: ["GenAI", "Vertex AI", "MLOps", "GKE", "Data Engineering", "AI Infrastructure"],
     notes: [] as string[],
   }
 
   const badge =
     meta.status === "Completed"
       ? "bg-purple-600/25 text-purple-100 border-purple-400/40"
       : "bg-fuchsia-600/25 text-fuchsia-100 border-fuchsia-400/40"
 
   const badges: BadgeItem[] = [
     { title: "Use Machine Learning APIs on Google Cloud", issued: "Oct 2025", credentialId: "19487034" },
     { title: "Machine Learning Operations (MLOps) for Generative AI", issued: "Oct 2025", credentialId: "19671419" },
     { title: "Machine Learning Operations (MLOps) with Vertex AI: Model Evaluation", issued: "Oct 2025", credentialId: "19703166" },
     { title: "Architecting with Google Kubernetes Engine: Foundations", issued: "Oct 2025", credentialId: "19814791" },
     { title: "Introduction to Data Engineering on Google Cloud", issued: "Nov 2025", credentialId: "20080180" },
     { title: "AI Infrastructure: Introduction to AI Hypercomputer", issued: "Nov 2025", credentialId: "20132387" },
     { title: "AI Infrastructure: Cloud GPUs", issued: "Nov 2025", credentialId: "20133394" },
     { title: "AI Infrastructure: Cloud TPUs", issued: "Nov 2025", credentialId: "20134916" },
     { title: "Conversational AI and its Engagement Framework", issued: "Nov 2025", credentialId: "20216894" },
     { title: "Architect Customer Engagement Suite with Google AI", issued: "Nov 2025", credentialId: "20217592" },
     { title: "Introduction to Data Analytics on Google Cloud", issued: "Nov 2025", credentialId: "20411583" },
     { title: "Introduction to Large Language Models", issued: "Nov 2025", credentialId: "20463422" },
     { title: "MySQL to Cloud Spanner", issued: "Nov 2025", credentialId: "20463621" },
     { title: "Transformer Models and BERT Model", issued: "Nov 2025", credentialId: "20463736" },
     { title: "Create Image Captioning Models", issued: "Nov 2025", credentialId: "20464395" },
     { title: "Encoder-Decoder Architecture", issued: "Nov 2025", credentialId: "20505284" },
     { title: "Attention Mechanism", issued: "Nov 2025", credentialId: "20507537" },
     { title: "Serverless Data Processing with Dataflow: Foundations", issued: "Nov 2025", credentialId: "20508222" },
     { title: "Supervised Fine-tuning for Gemini", issued: "Dec 2025", credentialId: "20693812" },
   ]
 
   const outcomes = useMemo(
     () => [
       {
         k: "GenAI foundations",
         v: "LLM basics, attention/encoder-decoder/transformers, and practical prompts for applied tasks.",
       },
       {
         k: "Vertex AI evaluation & MLOps",
         v: "Model evaluation mindset, monitoring signals, and production workflows for GenAI systems.",
       },
       {
         k: "Cloud data engineering",
         v: "End-to-end pipelines: ingestion → processing → serving, plus serverless patterns (e.g., Dataflow).",
       },
       {
         k: "Infrastructure for AI",
         v: "How GPUs/TPUs and “AI hypercomputer” building blocks map to training/inference trade-offs.",
       },
       {
         k: "Platform engineering",
         v: "Kubernetes foundations (GKE) and how to think about deployment and reliability in practice.",
       },
       {
         k: "Applied APIs",
         v: "Using ML APIs to accelerate product prototyping when bespoke models are unnecessary.",
       },
     ],
     []
   )
 
   const takeaways = `I completed a set of Google skill badges inside a GenAI learning program, covering four threads: (1) LLM fundamentals, (2) Vertex AI evaluation + GenAI MLOps, (3) cloud data engineering, and (4) AI infrastructure.\n\nBecause there are many badges, I grouped them under one “program” page rather than listing each badge as a separate Learning card. For the portfolio, the screenshots are the quickest proof, and the credential IDs are there for reference. If needed, I can also attach the public credential links, but keeping links optional avoids turning the page into a long list of outbound URLs.`
 
   const hasNotes = meta.notes.length > 0
 
   return (
     <div className="relative min-h-screen">
       <Navigation activeSection="learning" onSectionChange={() => {}} />
 
       <div className="relative z-10 pt-16 md:pt-20 p-6">
         <div className="max-w-5xl mx-auto space-y-6">
           <div className="flex items-center justify-between">
             <Link href="/learning">
               <Button className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20">
                 <ArrowLeft className="w-4 h-4 mr-2" />
                 Back to Learning
               </Button>
             </Link>
 
             {hasNotes && (
               <Button
                 onClick={() => setShowNotes(true)}
                 className="bg-fuchsia-500/20 border border-fuchsia-400/40 text-fuchsia-100 hover:bg-fuchsia-500/30"
               >
                 View Screenshots
               </Button>
             )}
           </div>
 
           <header className="text-center space-y-2">
             <h1 className="text-3xl md:text-4xl font-bold text-white">{meta.title}</h1>
             <div className="text-gray-300 inline-flex items-center gap-2 text-sm md:text-base">
               <span>{meta.institution}</span>
               <span>•</span>
               <span className="inline-flex items-center gap-1">
                 <Calendar className="w-4 h-4" /> {meta.term}
               </span>
             </div>
           </header>
 
           <Card className="relative bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
             <div className="absolute right-3 top-3">
               <span className={`inline-flex items-center h-6 rounded-full px-2.5 text-xs border backdrop-blur-sm ${badge}`}>
                 {meta.status}
               </span>
             </div>
 
             <div className="p-5 md:p-6 flex items-start gap-4">
               <div className="relative flex-shrink-0 h-12 w-12 rounded-xl bg-black/30 border border-white/10 overflow-hidden">
                 <Image src={meta.logo} alt="logo" fill sizes="48px" className="object-cover" priority />
               </div>
               <div className="flex-1 min-w-0">
                 <div className="flex flex-wrap gap-2 mb-3">
                   {meta.tags.map((t) => (
                     <Badge key={t} className="bg-purple-500/20 text-purple-100 border-purple-500/30">
                       {t}
                     </Badge>
                   ))}
                 </div>
                 <p className="text-gray-200">{meta.tagline}</p>
               </div>
             </div>
 
             <div className="h-1 w-full bg-gradient-to-r from-fuchsia-500/20 via-purple-500/20 to-fuchsia-500/20" />
           </Card>
 
           <section className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 md:p-6">
             <h2 className="text-xl md:text-2xl font-semibold text-fuchsia-400 mb-4">Learning Outcomes</h2>
             <ul className="space-y-3 text-gray-200">
               {outcomes.map((o) => (
                 <li key={o.k} className="[&>strong]:text-white leading-relaxed">
                   <strong>{o.k}:</strong> {o.v}
                 </li>
               ))}
             </ul>
           </section>
 
           <section className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 md:p-6">
             <h2 className="text-xl md:text-2xl font-semibold text-fuchsia-400 mb-3">Badges (Credential IDs)</h2>
             <div className="grid gap-2 md:grid-cols-2">
               {badges.map((b) => (
                 <div key={`${b.title}-${b.credentialId ?? ""}`} className="flex items-start justify-between gap-3 rounded-lg border border-white/10 bg-black/20 px-3 py-2">
                   <div className="min-w-0">
                     <div className="text-gray-100 text-sm font-medium leading-snug">
                       {b.title}
                     </div>
                     <div className="mt-0.5 text-xs text-gray-400">
                       {b.issued}
                       {b.credentialId ? ` · Credential ID ${b.credentialId}` : ""}
                     </div>
                   </div>
                   {b.url ? (
                     <a
                       href={b.url}
                       target="_blank"
                       className="shrink-0 inline-flex items-center gap-1 text-xs text-fuchsia-200 hover:text-fuchsia-100"
                     >
                       Show <ExternalLink className="h-3.5 w-3.5" />
                     </a>
                   ) : null}
                 </div>
               ))}
             </div>
             <p className="mt-3 text-xs text-gray-400">
               Tip: if you prefer, we can add the public credential links later (kept optional to avoid an overly link-heavy page).
             </p>
           </section>
 
           <section className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-5 md:p-6">
             <h2 className="text-xl md:text-2xl font-semibold text-fuchsia-400 mb-3">Takeaways</h2>
             <p className="text-gray-200 text-base leading-relaxed whitespace-pre-line">{takeaways}</p>
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
   )
 }
