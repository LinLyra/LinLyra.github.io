"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname() || "/";

  // ✅ 新导航顺序 & 路由（无尾斜杠，更好做 startsWith 比对）
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
    // 兼容子路由：/product 和 /product/xxx 都会高亮
    return pathname === route || pathname.startsWith(route + "/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* ✅ LOGO：把你的图片放到 public/logo.png，或替换为你的路径 */}
          <Link href="/" className="flex items-center space-x-3" aria-label="Go to home">
            <div className="relative h-8 w-8 overflow-hidden rounded-md ring-1 ring-white/20">
              <Image src="/logo.png" alt="Lyra Logo" fill sizes="32px" className="object-cover" priority />
            </div>
            <span className="text-white text-lg font-bold">Welcome to Lyra&apos;s Universe. LLAP🖖</span>
          </Link>

          {/* 桌面导航 */}
          <div className="hidden md:flex items-center space-x-8">
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
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* 移动端抽屉 */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 rounded-lg bg-black/40 p-4 backdrop-blur-md">
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

