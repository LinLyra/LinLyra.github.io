"use client"

import { useState, useEffect } from "react"
import { GalaxyBackground } from "@/components/galaxy-background"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SkillsSection } from "@/components/skills-section"
import { Planets3DSection } from "@/components/planets-3d-section"
import { ContactSection } from "@/components/contact-section"

export default function PersonalWebsite() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "planets", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative">
      {/* Galaxy Background */}
      <GalaxyBackground />

      {/* Navigation */}
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

      {/* Content Sections */}
      <div className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <Planets3DSection />
        <ContactSection />
      </div>

      {/* Scroll Indicator */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-2">
        {["home", "skills", "planets", "contact"].map((section) => (
          <div
            key={section}
            className={`w-2 h-8 rounded-full transition-all duration-300 ${
              activeSection === section ? "bg-blue-400" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
