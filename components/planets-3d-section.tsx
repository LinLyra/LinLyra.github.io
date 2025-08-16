"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { SkillsSection } from "@/components/skills-section";

// ✅ 3D 组件用动态导入并关闭 SSR；用“包装成 default”的写法，彻底消除类型不匹配
const Planets3DSection = dynamic(
  () =>
    import("@/components/planets-3d-section").then((m) => ({
      default: m.Planets3DSection ?? m.default,
    })),
  { ssr: false, loading: () => null }
);

const ContactSection = dynamic(
  () =>
    import("@/components/contact-section").then((m) => ({
      default: m.ContactSection ?? m.default,
    })),
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
      {/* GalaxyBackground 已在 layout 里全局挂载，这里不需要再渲染 */}

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

