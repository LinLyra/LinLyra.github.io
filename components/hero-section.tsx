"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin } from "lucide-react"

export function HeroSection() {
  const scrollToSkills = () => {
    const element = document.getElementById("skills")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Profile Card */}
        <div className="flex justify-center">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 p-6 text-center max-w-sm">
            <CardContent className="space-y-4">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl mx-auto flex items-center justify-center">
                <span className="text-4xl text-gray-100">👤</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-100 mb-2">Long(Lyra) LIN </h3>
                <p className="text-gray-200 text-sm mb-1">University of Sydney</p>
                <p className="text-gray-200 text-sm mb-1">Major in Data Science & Business Analytics</p>
                <p className="text-gray-200 text-sm">Expected Graduation: Dec.2026</p>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="px-4 py-2 bg-blue-500/30 text-blue-200 rounded-full text-sm font-medium">
                  Lifelong Learner
                </span>
                <span className="px-4 py-2 bg-purple-500/30 text-purple-200 rounded-full text-sm font-medium">
                  Curiosity Driven
                </span>
                <span className="px-4 py-2 bg-pink-500/30 text-pink-200 rounded-full text-sm font-medium">
                  Impact Creator
                </span>
                <span className="px-4 py-2 bg-pink-500/30 text-pink-200 rounded-full text-sm font-medium">
                  Data Storyteller
                </span>
                <span className="px-4 py-2 bg-orange-500/30 text-orange-200 rounded-full text-sm font-medium">
                  Problem-to-Product Buider
                </span>
         
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-100 leading-tight">
            Learn to change the{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">World.</span>
          </h1>

          <p className="text-xl text-gray-200 mb-4">
            Driven by a passion for turning data into meaningful stories, I combine expertise in analytics, AI product development, and consulting to bridge technology and business. 
          </p>
          <p className="text-lg text-gray-300 mb-8">
            From exploring complex datasets to delivering AI-powered solutions, I turn insights into strategies that make a measurable impact.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              onClick={scrollToSkills}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-gray-100 px-8 py-3 rounded-full text-lg font-medium"
            >
              Explore Universe
            </Button>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="border-white/40 text-gray-100 hover:bg-white/20 px-6 py-3 rounded-full text-lg bg-transparent font-medium"
                onClick={() => window.open("https://github.com/yourusername", "_blank")}
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Button>
              <Button
                variant="outline"
                className="border-white/40 text-gray-100 hover:bg-white/20 px-6 py-3 rounded-full text-lg bg-transparent font-medium"
                onClick={() => window.open("https://linkedin.com/in/yourusername", "_blank")}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
