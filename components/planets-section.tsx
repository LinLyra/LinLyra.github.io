"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Moon, Star, Zap, Rocket } from "lucide-react"
import Link from "next/link"

export function PlanetsSection() {
  const [selectedPlanet, setSelectedPlanet] = useState<number | null>(null)

  const planets = [
    {
      id: 1,
      name: "Experience",
      icon: Globe,
      color: "from-blue-400 to-blue-600",
      description: "Professional work experience and internships",
      route: "/experience",
      content: "Explore my professional journey through various roles and projects.",
    },
    {
      id: 2,
      name: "Learning",
      icon: Moon,
      color: "from-purple-400 to-purple-600",
      description: "Academic achievements and continuous learning",
      route: "/learning",
      content: "Discover my educational background and learning adventures.",
    },
    {
      id: 3,
      name: "Projects",
      icon: Star,
      color: "from-yellow-400 to-orange-500",
      description: "Personal and collaborative projects",
      route: "/projects",
      content: "Dive into the projects that showcase my skills and creativity.",
    },
    {
      id: 4,
      name: "Competitions",
      icon: Zap,
      color: "from-green-400 to-green-600",
      description: "Hackathons and competitive programming",
      route: "/competitions",
      content: "See how I perform under pressure and collaborate with teams.",
    },
    {
      id: 5,
      name: "Activities",
      icon: Rocket,
      color: "from-pink-400 to-red-500",
      description: "Extracurricular activities and leadership",
      route: "/activities",
      content: "Learn about my involvement in communities and leadership roles.",
    },
  ]

  return (
    <section id="planets" className="min-h-screen flex items-center justify-center relative z-10 px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Explore My Universe</h2>
          <p className="text-xl text-gray-300">Navigate through different dimensions of my journey</p>
        </div>

        {/* Planets */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          {planets.map((planet, index) => {
            const Icon = planet.icon
            return (
              <Link href={planet.route} key={planet.id}>
                <div className="relative group cursor-pointer">
                  <div
                    className={`w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br ${planet.color} 
                      flex items-center justify-center shadow-lg transform transition-all duration-300 
                      group-hover:scale-110 group-hover:shadow-2xl ${
                        selectedPlanet === planet.id ? "scale-110 shadow-2xl ring-4 ring-white/30" : ""
                      }`}
                  >
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {planet.name}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Planet Details */}
        {selectedPlanet && (
          <Card className="bg-white/10 backdrop-blur-md border-white/20 max-w-2xl mx-auto">
            <CardContent className="p-6">
              {planets.map((planet) => {
                if (planet.id === selectedPlanet) {
                  const Icon = planet.icon
                  return (
                    <div key={planet.id} className="text-center">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${planet.color} flex items-center justify-center mx-auto mb-4`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{planet.name}</h3>
                      <p className="text-gray-300 mb-4">{planet.description}</p>
                      <p className="text-gray-400">{planet.content}</p>
                    </div>
                  )
                }
                return null
              })}
            </CardContent>
          </Card>
        )}

        {/* Explore Full Journey */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white mb-4">Explore Full Journey</h3>
          <p className="text-xl text-gray-300 mb-4">To infinity and beyond. LLAP 🖖</p>
          <p className="text-gray-300 mb-8">Dive deeper into my cosmic journey through time and space.</p>
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full text-lg">
            View Complete Timeline
          </Button>
        </div>
      </div>
    </section>
  )
}
