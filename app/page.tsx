"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";


const Planets3DSection = dynamic(
  () => import("@/components/planets-3d-section"), 
  { ssr: false, loading: () => null }
);

const ContactSection = dynamic(
  () => import("@/components/contact-section"),     
  { ssr: false, loading: () => null }
);

export default function PersonalWebsite() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "skills", "planets", "contact"] as const;
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <Navigation activeSection={activeSection} onSectionChange={setActiveSection} />

      <div className="relative z-10 snap-y snap-mandatory scroll-smooth">
        <HeroSection />
        <SkillsSection />
        <Planets3DSection />
        <ContactSection />
      </div>
    </div>
  );
}





