"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useState, useRef, useMemo, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, RotateCcw, Palette } from "lucide-react"
import * as THREE from "three"

interface GalaxyGeneratorProps {
  count: number
  size: number
  radius: number
  branches: number
  spin: number
  randomness: number
  randomnessPower: number
  insideColor: string
  outsideColor: string
  seed: number
}

function GeneratedGalaxy({
  count,
  size,
  radius,
  branches,
  spin,
  randomness,
  randomnessPower,
  insideColor,
  outsideColor,
  seed,
}: GalaxyGeneratorProps) {
  const pointsRef = useRef<THREE.Points>(null)

  // 用不同变量名避免和外层重名，并加上 as const 让 TS 推断成定长元组
  const [posArr, colArr] = useMemo((): readonly [Float32Array, Float32Array] => {
    const rand = (s: number) => {
      const x = Math.sin(s) * 10000
      return x - Math.floor(x)
    }

    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const colorInside = new THREE.Color(insideColor)
    const colorOutside = new THREE.Color(outsideColor)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      const r = rand(seed + i) * radius
      const spinAngle = r * spin
      const branchAngle = ((i % branches) / branches) * Math.PI * 2

      const randomX =
        Math.pow(rand(seed + i + 1000), randomnessPower) *
        (rand(seed + i + 2000) < 0.5 ? 1 : -1) *
        randomness *
        r
      const randomY =
        Math.pow(rand(seed + i + 3000), randomnessPower) *
        (rand(seed + i + 4000) < 0.5 ? 1 : -1) *
        randomness *
        r
      const randomZ =
        Math.pow(rand(seed + i + 5000), randomnessPower) *
        (rand(seed + i + 6000) < 0.5 ? 1 : -1) *
        randomness *
        r

      positions[i3] = Math.cos(branchAngle + spinAngle) * r + randomX
      positions[i3 + 1] = randomY
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * r + randomZ

      const mixed = colorInside.clone().lerp(colorOutside, r / radius)
      colors[i3] = mixed.r
      colors[i3 + 1] = mixed.g
      colors[i3 + 2] = mixed.b
    }

    return [positions, colors] as const
  }, [count, radius, branches, spin, randomness, randomnessPower, insideColor, outsideColor, seed])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        {/* ✅ 用 args 传入 (array, itemSize) —— 这是 @react-three/fiber 对 BufferAttribute 的类型要求 */}
        <bufferAttribute attach="attributes-position" args={[posArr, 3]} />
        <bufferAttribute attach="attributes-color" args={[colArr, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        sizeAttenuation
        depthWrite={false}
        vertexColors
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export function GalaxyGenerator() {
  const [galaxyParams, setGalaxyParams] = useState({
    count: 30000,
    size: 0.02,
    radius: 3,
    branches: 4,
    spin: 1,
    randomness: 0.2,
    randomnessPower: 3,
    insideColor: "#ff6030",
    outsideColor: "#1b3984",
    seed: Math.random() * 10000,
  })

  const colorPresets = [
    { inside: "#D4A574", outside: "#8B4513", name: "Cosmic Dust" },
    { inside: "#4F46E5", outside: "#7C3AED", name: "Deep Space" },
    { inside: "#10B981", outside: "#059669", name: "Nebula Green" },
    { inside: "#F59E0B", outside: "#DC2626", name: "Solar Flare" },
  ]

  const generateNew = useCallback(() => {
    const newSeed = Date.now() + Math.random() * 1000
    setGalaxyParams((prev) => ({
      ...prev,
      spin: (Math.random() - 0.5) * 6,          // -3 ~ 3
      randomness: Math.random() * 0.4 + 0.1,    // 0.1 ~ 0.5
      branches: Math.floor(Math.random() * 5) + 3, // 3 ~ 7
      radius: Math.random() * 2 + 2,            // 2 ~ 4
      seed: newSeed,
    }))
  }, [])

  const applyColorPreset = useCallback((preset: { inside: string; outside: string }) => {
    setGalaxyParams((prev) => ({
      ...prev,
      insideColor: preset.inside,
      outsideColor: preset.outside,
      seed: Date.now() + Math.random() * 1000,
    }))
  }, [])

  const saveGalaxy = useCallback(() => {
    const galaxyData = {
      ...galaxyParams,
      timestamp: new Date().toISOString(),
      message: "A galaxy created in Lyra's Universe",
    }

    const dataStr = JSON.stringify(galaxyData, null, 2)
    const dataBlob = new Blob([dataStr], { type: "application/json" })
    const url = URL.createObjectURL(dataBlob)

    const link = document.createElement("a")
    link.href = url
    link.download = `my-galaxy-${Date.now()}.json`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }, [galaxyParams])

  return (
    <Card className="bg-black/40 backdrop-blur-md border-white/10">
      <CardHeader>
        <CardTitle className="text-gray-100 flex items-center gap-2">
          <Palette className="w-5 h-5" />
          Draw Your Galaxy in My Universe
        </CardTitle>
        <p className="text-gray-300 text-sm">
          Create your own cosmic masterpiece and become part of my journey. Each galaxy you draw represents a unique
          connection to my universe - a way of walking alongside my path through time and space.
        </p>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Galaxy Canvas */}
        <div className="h-64 bg-black rounded-lg overflow-hidden border border-white/10 relative">
          <Canvas
            key={galaxyParams.seed}
            camera={{ position: [0, 0, 4], fov: 75 }}
            gl={{ antialias: true, alpha: true }}
          >
            <ambientLight intensity={0.1} />
            <GeneratedGalaxy {...galaxyParams} />
          </Canvas>
        </div>

        {/* Color Presets */}
        <div className="flex gap-3 justify-center">
          {colorPresets.map((preset, index) => (
            <button
              key={index}
              onClick={() => applyColorPreset(preset)}
              className="w-10 h-10 rounded-full border-2 border-white/20 hover:border-white/60 hover:scale-110 transition-all duration-300 shadow-lg"
              style={{ background: `linear-gradient(135deg, ${preset.inside}, ${preset.outside})` }}
              title={preset.name}
            />
          ))}
        </div>

        {/* Controls */}
        <div className="flex gap-3 justify-center">
          <Button
            onClick={generateNew}
            className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-md border-blue-400/30 text-gray-100 hover:bg-blue-500/30 transition-all duration-300"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Generate New
          </Button>
          <Button
            onClick={saveGalaxy}
            className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md border-green-400/30 text-gray-100 hover:bg-green-500/30 transition-all duration-300"
          >
            <Download className="w-4 h-4 mr-2" />
            Save Galaxy
          </Button>
        </div>

        <p className="text-gray-400 text-xs text-center italic">
          "Every galaxy tells a story. What story will yours tell as it orbits through my universe?"
        </p>
      </CardContent>
    </Card>
  )
}


