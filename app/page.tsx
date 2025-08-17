"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";

// ✅ 这里统一做 dynamic（组件文件里不要再写 dynamic）
const Planets3DSection = dynamic(
  () => import("@/components/planets-3d-section"), // 默认导出
  { ssr: false, loading: () => null }
);

const ContactSection = dynamic(
  () => import("@/components/contact-section"),     // 建议也改成默认导出（见第 3 部分）
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

      <div className="relative z-10">
        <HeroSection />
        <SkillsSection />
        <Planets3DSection />
        <ContactSection />
      </div>

      <div className="fixed right-6 top-1/2 -translate-y-1/2 transform z-40 space-y-2">
        {["home", "skills", "planets", "contact"].map((section) => (
          <div
            key={section}
            className={`h-8 w-2 rounded-full transition-all duration-300 ${
              activeSection === section ? "bg-blue-400" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}





