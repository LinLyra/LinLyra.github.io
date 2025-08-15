"use client"

import type React from "react"

import { useRef, useState, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, RotateCcw, Palette } from "lucide-react"

interface Point {
  x: number
  y: number
  color: string
  size: number
}

export function GalaxyDrawingCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [currentColor, setCurrentColor] = useState("#ff6030")
  const [points, setPoints] = useState<Point[]>([])

  const colorPresets = [
    { color: "#ff6030", name: "Orange Star" },
    { color: "#4F46E5", name: "Blue Nebula" },
    { color: "#10B981", name: "Green Cosmic" },
    { color: "#F59E0B", name: "Golden Sun" },
  ]

  const drawPoint = useCallback((x: number, y: number, color: string, size = 3) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Create glowing effect
    ctx.shadowColor = color
    ctx.shadowBlur = 15
    ctx.globalCompositeOperation = "screen"

    // Draw main point
    ctx.beginPath()
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()

    // Add smaller bright center
    ctx.shadowBlur = 5
    ctx.beginPath()
    ctx.arc(x, y, size * 0.5, 0, Math.PI * 2)
    ctx.fillStyle = "#ffffff"
    ctx.fill()

    ctx.shadowBlur = 0
    ctx.globalCompositeOperation = "source-over"
  }, [])

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      setIsDrawing(true)
      const canvas = canvasRef.current
      if (!canvas) return

      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const newPoint = { x, y, color: currentColor, size: Math.random() * 4 + 2 }
      setPoints((prev) => [...prev, newPoint])
      drawPoint(x, y, currentColor, newPoint.size)
    },
    [currentColor, drawPoint],
  )

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      if (!isDrawing) return

      const canvas = canvasRef.current
      if (!canvas) return

      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const newPoint = { x, y, color: currentColor, size: Math.random() * 4 + 2 }
      setPoints((prev) => [...prev, newPoint])
      drawPoint(x, y, currentColor, newPoint.size)
    },
    [isDrawing, currentColor, drawPoint],
  )

  const handleMouseUp = useCallback(() => {
    setIsDrawing(false)
  }, [])

  const clearCanvas = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.fillStyle = "#000000"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    setPoints([])
  }, [])

  const downloadGalaxy = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Create a new canvas for the final image
    const finalCanvas = document.createElement("canvas")
    finalCanvas.width = canvas.width
    finalCanvas.height = canvas.height
    const finalCtx = finalCanvas.getContext("2d")
    if (!finalCtx) return

    // Draw the galaxy
    finalCtx.drawImage(canvas, 0, 0)

    // Add welcome text
    finalCtx.font = "bold 24px Arial"
    finalCtx.fillStyle = "#ffffff"
    finalCtx.textAlign = "center"
    finalCtx.shadowColor = "#000000"
    finalCtx.shadowBlur = 10
    finalCtx.fillText("Welcome to Lyra's Universe", canvas.width / 2, 40)

    finalCtx.font = "16px Arial"
    finalCtx.fillText("Your personal galaxy creation", canvas.width / 2, 70)

    // Download the image
    const link = document.createElement("a")
    link.download = `lyra-universe-galaxy-${Date.now()}.png`
    link.href = finalCanvas.toDataURL()
    link.click()
  }, [])

  // Initialize canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = 600
    canvas.height = 400

    // Fill with black background
    ctx.fillStyle = "#000000"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
  }, [])

  return (
    <Card className="bg-black/40 backdrop-blur-md border-white/10">
      <CardHeader>
        <CardTitle className="text-gray-100 flex items-center gap-2">
          <Palette className="w-5 h-5" />
          Draw Your Galaxy in My Universe
        </CardTitle>
        <p className="text-gray-300 text-sm">
          Use your mouse to paint stars and create your own galaxy. Each stroke becomes part of my cosmic journey.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Drawing Canvas */}
        <div className="relative">
          <canvas
            ref={canvasRef}
            className="border border-white/20 rounded-lg cursor-crosshair bg-black"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ width: "100%", height: "300px" }}
          />
          <div className="absolute top-2 left-2 text-gray-400 text-xs">Click and drag to paint stars ✨</div>
        </div>

        {/* Color Presets */}
        <div className="flex gap-3 justify-center">
          {colorPresets.map((preset, index) => (
            <button
              key={index}
              onClick={() => setCurrentColor(preset.color)}
              className={`w-10 h-10 rounded-full border-2 transition-all duration-300 shadow-lg ${
                currentColor === preset.color
                  ? "border-white/80 scale-110"
                  : "border-white/20 hover:border-white/60 hover:scale-105"
              }`}
              style={{ backgroundColor: preset.color }}
              title={preset.name}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="flex gap-3 justify-center">
          <Button
            onClick={clearCanvas}
            className="bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-md border-red-400/30 text-gray-100 hover:bg-red-500/30 transition-all duration-300"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Clear Canvas
          </Button>
          <Button
            onClick={downloadGalaxy}
            className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md border-green-400/30 text-gray-100 hover:bg-green-500/30 transition-all duration-300"
          >
            <Download className="w-4 h-4 mr-2" />
            Save Galaxy
          </Button>
        </div>

        <p className="text-gray-400 text-xs text-center italic">
          "Paint your stars across my universe. Every brushstroke writes our shared story."
        </p>
      </CardContent>
    </Card>
  )
}
