"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Data Science",
      skills: ["Machine Learning","Big Data(Hadoop/Spark)", "SQL/NoSQL(MongoDB)", "Visualization (Power BI)", "A/B Testing","GenAI", "Statistical Analysis"],
    },
    {
      title: "Product Strategy",
      skills: ["Market Analysis","Roadmapping", "User Research", "MVP Design", "Prototyping (Figma)", "KPI Frameworks"],
    },
    {
      title: "Business",
      skills: ["Stakeholder Communication", "Problem Structuring","Business Modeling","Digital Transformation", "GTM Planning" ],
    },
    {
      title: "Full Stack",
      skills: ["Next.js/React", "Tailwind/Node.js","Cloud Databases","API Architecture", "Deployment & Scaling"],
    },
  ]

  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "15+", label: "Technologies Mastered" },
  ]

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center relative z-10 px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-100 mb-6">Skills & Expertise</h2>
          <p className="text-xl text-gray-200 mb-8">
            A multidisciplinary toolkit for innovation and growth.
          </p>
          <p className="text-lg text-gray-300">Build • Analyze • Strategize • Transform</p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className={category.title === "Design" ? "text-white text-xl" : "text-gray-100 text-xl"}>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-200 rounded-full text-sm border border-blue-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
              <div className="text-gray-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
