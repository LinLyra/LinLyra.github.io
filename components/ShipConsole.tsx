"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export default function ShipConsole() {
  const pathname = usePathname()
  const [time, setTime] = useState(0)
  const [history, setHistory] = useState<string[]>([])
  const [open, setOpen] = useState(false)

  // 计时器
  useEffect(() => {
    const timer = setInterval(() => {
      setTime((t) => t + 1)
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // 记录访问轨迹
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("nav-history") || "[]")
    const updated = [pathname, ...stored.filter((p: string) => p !== pathname)].slice(0, 6)
    localStorage.setItem("nav-history", JSON.stringify(updated))
    setHistory(updated)
  }, [pathname])

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60)
    const sec = s % 60
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`
  }

  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 9999,
        }}
      >
        <div
          onClick={() => setOpen(!open)}
          style={{
            cursor: "pointer",
            padding: "8px 14px",
            borderRadius: 10,
            background: "rgba(30, 41, 59, 0.7)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(100,150,255,0.4)",
            color: "#93c5fd",
            fontSize: 13,
            letterSpacing: 1,
            boxShadow: "0 0 12px rgba(100,150,255,0.6)",
            marginBottom: 8,
            textTransform: "uppercase"
          }}
        >
          🛰 Ship Console
        </div>

        {open && (
          <div
            style={{
              width: 260,
              padding: 18,
              borderRadius: 14,
              background: "rgba(10, 15, 30, 0.85)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(100,150,255,0.3)",
              color: "#cbd5e1",
              fontSize: 13,
              boxShadow: "0 0 30px rgba(80,120,255,0.4)",
              position: "relative",
              overflow: "hidden"
            }}
          >
            {/* 扫描线动画 */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: 2,
                background: "linear-gradient(90deg, transparent, #60a5fa, transparent)",
                animation: "scan 3s linear infinite"
              }}
            />

            <div style={{ fontWeight: 600, marginBottom: 12, color: "#60a5fa" }}>
              SYSTEM STATUS
            </div>

            <div>Sector: {pathname}</div>
            <div>Mission Time: {formatTime(time)}</div>

            <div style={{ marginTop: 14 }}>
              <div style={{ fontSize: 11, opacity: 0.6 }}>Navigation Log</div>
              {history.map((p, i) => (
                <div key={i} style={{ fontSize: 12 }}>
                  • {p}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </>
  )
}
