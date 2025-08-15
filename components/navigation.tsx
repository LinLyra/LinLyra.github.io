"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavigationProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { id: "home", label: "Home", route: "/" },
    { id: "experience", label: "Experience", route: "/experience/" },
    { id: "learning", label: "Learning", route: "/learning/" },
    { id: "projects", label: "Projects", route: "/projects/" },
    { id: "competitions", label: "Competitions", route: "/competitions/" },
    { id: "activities", label: "Activities", route: "/activities/" },
  ]

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
        onSectionChange(sectionId)
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🌌</span>
            <span className="text-white font-bold text-lg">Welcome to Lyra's Universe</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.id}>
                {item.route === "/" ? (
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`text-white hover:text-blue-300 transition-colors ${
                      activeSection === item.id ? "text-blue-400 font-semibold" : ""
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.route}
                    className={`text-white hover:text-blue-300 transition-colors font-medium ${
                      pathname.startsWith(item.route) && item.route !== "/" ? "text-blue-400 font-semibold" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/40 backdrop-blur-md rounded-lg mt-2 p-4">
            {navItems.map((item) => (
              <div key={item.id}>
                {item.route === "/" ? (
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left py-2 text-white hover:text-blue-300 transition-colors ${
                      activeSection === item.id ? "text-blue-400 font-semibold" : ""
                    }`}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.route}
                    className="block w-full text-left py-2 text-white hover:text-blue-300 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
