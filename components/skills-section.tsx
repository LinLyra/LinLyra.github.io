"use client"

import Image from "next/image"
import { useEffect, useMemo, useRef, useState } from "react"

/** -------- Types -------- */
type Category = "Web" | "Database" | "Data" | "ML" | "Analytics" | "DevOps" | "Cloud" | "Design"
type Tool = {
  slug: string
  name: string
  category: Category
  logo: string              // e.g. /tools/python.svg
  level?: "Proficient" | "Working" | "Learning"
}

/** -------- Logo with graceful fallback -------- */
function LogoBadge({ src, alt }: { src: string; alt: string }) {
  const [err, setErr] = useState(false)
  if (err || !src) {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[11px] font-semibold text-white/80">
        {alt.slice(0, 2).toUpperCase()}
      </div>
    )
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={36}
      height={36}
      className="object-contain"
      onError={() => setErr(true)}
    />
  )
}

/** -------- 将 items 均匀分布在 path 上 -------- */
function PathPlacer({
  d,
  items,
  box = { w: 800, h: 420 },
}: {
  d: string
  items: Tool[]
  box?: { w: number; h: number }
}) {
  const pathRef = useRef<SVGPathElement | null>(null)
  const [pts, setPts] = useState<{ x: number; y: number }[]>([])

  useEffect(() => {
    const path = pathRef.current
    if (!path) return
    const len = path.getTotalLength()
    const res: { x: number; y: number }[] = []
    const n = Math.max(items.length, 1)
    for (let i = 0; i < items.length; i++) {
      const p = path.getPointAtLength(((i + 0.5) / n) * len)
      res.push({ x: p.x, y: p.y })
    }
    setPts(res)
  }, [items.length, d])

  return (
    <div className="pointer-events-none absolute inset-0">
      {/* 隐形路径（用于采样坐标） */}
      <svg viewBox={`0 0 ${box.w} ${box.h}`} className="absolute inset-0 h-full w-full">
        <path ref={pathRef} d={d} fill="none" stroke="transparent" strokeWidth={1} />
      </svg>

      {/* 真实摆放 */}
      <div className="absolute inset-0">
        {pts.map((p, i) => {
          const t = items[i]
          return (
            <div
              key={`${t.slug}-${i}`}
              className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${(p.x / box.w) * 100}%`, top: `${(p.y / box.h) * 100}%` }}
              title={t.name}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/12 bg-white/8 shadow-lg backdrop-blur transition hover:scale-105 hover:border-white/20 hover:bg-white/12">
                <LogoBadge src={t.logo} alt={t.name} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/** -------- 飞船主组件 -------- */
export function ToolsSpaceship() {
  // 你决定展示的工具（Tableau + 两个 SQL + Jupyter + Colab + R 都在）
  const tools: Tool[] = [
    // Web
    { slug: "typescript", name: "TypeScript", category: "Web", logo: "/tools/typescript.svg", level: "Proficient" },
    { slug: "nextjs", name: "Next.js", category: "Web", logo: "/tools/nextjs.svg", level: "Proficient" },
    { slug: "react", name: "React", category: "Web", logo: "/tools/react.svg", level: "Proficient" },
    { slug: "tailwind", name: "Tailwind CSS", category: "Web", logo: "/tools/tailwind.svg", level: "Proficient" },
    { slug: "nodejs", name: "Node.js", category: "Web", logo: "/tools/nodejs.svg", level: "Working" },

    // Database
    { slug: "postgres", name: "PostgreSQL", category: "Database", logo: "/tools/postgres.svg", level: "Proficient" },
    { slug: "mysql", name: "MySQL", category: "Database", logo: "/tools/mysql.svg", level: "Proficient" },
    { slug: "supabase", name: "Supabase", category: "Database", logo: "/tools/supabase.svg", level: "Working" },

    // Data / ML
    { slug: "python", name: "Python", category: "Data", logo: "/tools/python.svg", level: "Proficient" },
    { slug: "pandas", name: "pandas", category: "Data", logo: "/tools/pandas.svg", level: "Proficient" },
    { slug: "numpy", name: "NumPy", category: "Data", logo: "/tools/numpy.svg", level: "Proficient" },
    { slug: "sklearn", name: "scikit-learn", category: "ML", logo: "/tools/sklearn.svg", level: "Proficient" },

    // Notebooks
    { slug: "jupyter", name: "Jupyter Notebook", category: "Data", logo: "/tools/jupyter.svg", level: "Proficient" },
    { slug: "colab", name: "Google Colab", category: "Data", logo: "/tools/colab.svg", level: "Working" },

    // Analytics / BI
    { slug: "tableau", name: "Tableau", category: "Analytics", logo: "/tools/tableau.svg", level: "Working" },

    // DevOps / Cloud
    { slug: "git", name: "Git", category: "DevOps", logo: "/tools/git.svg", level: "Proficient" },
    { slug: "docker", name: "Docker", category: "DevOps", logo: "/tools/docker.svg", level: "Working" },
    { slug: "aws", name: "AWS", category: "Cloud", logo: "/tools/aws.svg", level: "Working" },

    // Design
    { slug: "figma", name: "Figma", category: "Design", logo: "/tools/figma.svg", level: "Working" },

    // R
    { slug: "r-lang", name: "R", category: "Data", logo: "/tools/r.svg", level: "Working" },
  ]

  // 分配到不同部位：机身外轮廓/内环、左右机翼、尾翼、机头
  const by = (c: Category) => tools.filter(t => t.category === c)
  const hullItems   = useMemo(() => [...by("Web"), ...by("Database")], [tools])
  const innerItems  = useMemo(() => [...by("Data"), ...by("ML")], [tools])
  const wingLeft    = useMemo(() => by("Analytics"), [tools])
  const wingRight   = useMemo(() => by("DevOps"), [tools])
  const tailItems   = useMemo(() => by("Cloud"), [tools])
  const cockpit     = useMemo(() => by("Design"), [tools])

  // 画布大小（与 path 坐标匹配）
  const BOX = { w: 800, h: 420 }

  // 飞船轮廓（右指向）——尽量顺滑并留机头尖
  const PATH_HULL =
    "M120,210 C220,130 420,130 560,180 L700,210 L560,240 C420,290 220,290 120,210 Z"
  // 机身内部一条“次内环”
  const PATH_INNER =
    "M170,210 C250,160 410,160 530,200 L610,210 L530,220 C410,260 250,260 170,210 Z"
  // 左右机翼（上、下合一条）
  const PATH_WING_L = "M260,210 L180,150 L240,210 L180,270 Z"
  const PATH_WING_R = "M420,210 L500,150 L440,210 L500,270 Z"
  // 尾翼
  const PATH_TAIL   = "M120,210 L90,170 L110,210 L90,250 Z"
  // 机头/驾驶舱
  const PATH_COCKPIT = "M610,210 C630,190 650,190 670,210 C650,230 630,230 610,210 Z"

  return (
    <section className="relative z-10 mx-auto my-16 max-w-6xl px-4">
      <div className="rounded-3xl border border-white/10 bg-black/40 p-4 backdrop-blur-md">
        <h3 className="mb-4 text-center text-2xl md:text-3xl font-semibold text-blue-400">Tools Spaceship</h3>

        {/* 容器使用固定比例，避免与上面“Explore”重叠 */}
        <div className="relative mx-auto aspect-[800/420] w-full max-w-5xl">
          {/* 背景微光 */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl [background:radial-gradient(ellipse_at_center,rgba(59,130,246,.12),transparent_60%)]" />

          {/* 摆放各部位 */}
          <PathPlacer d={PATH_HULL}   items={hullItems}  box={BOX} />
          <PathPlacer d={PATH_INNER}  items={innerItems} box={BOX} />
          <PathPlacer d={PATH_WING_L} items={wingLeft}   box={BOX} />
          <PathPlacer d={PATH_WING_R} items={wingRight}  box={BOX} />
          <PathPlacer d={PATH_TAIL}   items={tailItems}  box={BOX} />
          <PathPlacer d={PATH_COCKPIT} items={cockpit}   box={BOX} />

          {/* 可选：显示轮廓调试
          <svg viewBox={`0 0 ${BOX.w} ${BOX.h}`} className="absolute inset-0 h-full w-full">
            <path d={PATH_HULL} fill="none" stroke="rgba(255,255,255,.15)" />
            <path d={PATH_INNER} fill="none" stroke="rgba(255,255,255,.1)" />
            <path d={PATH_WING_L} fill="none" stroke="rgba(255,255,255,.1)" />
            <path d={PATH_WING_R} fill="none" stroke="rgba(255,255,255,.1)" />
            <path d={PATH_TAIL} fill="none" stroke="rgba(255,255,255,.1)" />
            <path d={PATH_COCKPIT} fill="none" stroke="rgba(255,255,255,.1)" />
          </svg> */}
        </div>

        {/* 移动端降级为网格（避免拥挤） */}
        <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-4 md:hidden">
          {tools.map(t => (
            <div key={t.slug} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-2">
              <LogoBadge src={t.logo} alt={t.name} />
              <span className="text-sm text-white/90">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


