"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Headphones, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { getSoundState, initSoundFromStorage, toggleMusic } from "@/lib/sound";
import { useEffect, useMemo, useState as useReactState } from "react";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname() || "/";
  const router = useRouter();
  const [musicOn, setMusicOn] = useReactState(false);

  useEffect(() => {
    initSoundFromStorage();
    const current = getSoundState();
    setMusicOn(current.musicEnabled);
    const onChange = (e: Event) => {
      const detail = (e as CustomEvent).detail as { musicEnabled?: boolean };
      if (typeof detail?.musicEnabled === "boolean") setMusicOn(detail.musicEnabled);
    };
    window.addEventListener("lyra-sound-change", onChange);
    return () => window.removeEventListener("lyra-sound-change", onChange);
  }, []);


  const navItems = [
    { id: "home",     label: "Home",     route: "/" },
    { id: "learning", label: "Learning", route: "/learning" },
    { id: "data",     label: "Data",     route: "/data" },
    { id: "business", label: "Business", route: "/business" },
    { id: "product",  label: "Product",  route: "/product" },
    { id: "nebula",   label: "Nebula",   route: "/nebula" },
  ];

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      if (pathname !== "/") {
        router.push("/");
        setIsMenuOpen(false);
        return;
      }
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        onSectionChange(sectionId);
      }
    }
    setIsMenuOpen(false);
  };

  const isActiveRoute = (route: string) => {
    if (route === "/") return pathname === "/";

    return pathname === route || pathname.startsWith(route + "/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
  
          <Link href="/" className="flex items-center space-x-3" aria-label="Go to home">
            <div className="relative h-8 w-8 overflow-hidden rounded-md ring-1 ring-white/20">
              <Image src="/logo.png" alt="Lyra Logo" fill sizes="32px" className="object-cover" priority />
            </div>
            <span className="text-white text-lg font-bold">Welcome to Lyra&apos;s Universe. LLAP🖖</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.id}>
                {item.route === "/" ? (
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`transition-colors hover:text-blue-300 ${
                      activeSection === item.id ? "text-blue-400 font-semibold" : "text-white"
                    }`}
                    aria-current={activeSection === item.id ? "page" : undefined}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.route}
                    className={`transition-colors font-medium hover:text-blue-300 ${
                      isActiveRoute(item.route) ? "text-blue-400 font-semibold" : "text-white"
                    }`}
                    aria-current={isActiveRoute(item.route) ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={() => toggleMusic()}
              className="music-toggle"
              data-on={musicOn ? "true" : "false"}
              aria-label={musicOn ? "Turn music off" : "Turn music on"}
              title={musicOn ? "Music: On" : "Music: Off"}
            >
              <Headphones className="h-4 w-4 text-white/80" />
              <span className="music-wave" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
          </div>

 
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>


        {isMenuOpen && (
          <div className="md:hidden mt-2 rounded-lg bg-black/40 p-4 backdrop-blur-md">
            <button
              type="button"
              onClick={() => toggleMusic()}
              className="music-toggle mb-2 w-full justify-between"
              data-on={musicOn ? "true" : "false"}
              aria-label={musicOn ? "Turn music off" : "Turn music on"}
            >
              <span className="flex items-center gap-2">
                <Headphones className="h-4 w-4 text-white/80" />
                <span className="text-sm text-white/85">Music</span>
              </span>
              <span className="music-wave" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </button>
            {navItems.map((item) => (
              <div key={item.id}>
                {item.route === "/" ? (
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full py-2 text-left transition-colors hover:text-blue-300 ${
                      activeSection === item.id ? "text-blue-400 font-semibold" : "text-white"
                    }`}
                    aria-current={activeSection === item.id ? "page" : undefined}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.route}
                    className={`block w-full py-2 text-left transition-colors hover:text-blue-300 ${
                      isActiveRoute(item.route) ? "text-blue-400 font-semibold" : "text-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={isActiveRoute(item.route) ? "page" : undefined}
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
  );
}

