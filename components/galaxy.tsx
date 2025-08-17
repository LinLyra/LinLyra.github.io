"use client"

import { useRef, useMemo } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

interface GalaxyProps {
  count: number
  size: number
  radius: number
  branches: number
  spin: number
  randomness: number
  randomnessPower: number
  insideColor: string
  outsideColor: string
}

export function Galaxy({
  count,
  size,
  radius,
  branches,
  spin,
  randomness,
  randomnessPower,
  insideColor,
  outsideColor,
}: GalaxyProps) {
  const pointsRef = useRef<THREE.Points>(null)

  // 生成位置/颜色（Float32Array）
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const colorInside = new THREE.Color(insideColor)
    const colorOutside = new THREE.Color(outsideColor)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3

      const radiusRandom = Math.random() * radius
      const spinAngle = radiusRandom * spin
      const branchAngle = ((i % branches) / branches) * Math.PI * 2

      const rand = (p: number) =>
        Math.pow(Math.random(), p) * (Math.random() < 0.5 ? 1 : -1) * randomness * radiusRandom

      positions[i3] = Math.cos(branchAngle + spinAngle) * radiusRandom + rand(randomnessPower)
      positions[i3 + 1] = rand(randomnessPower)
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radiusRandom + rand(randomnessPower)

      const mixed = colorInside.clone().lerp(colorOutside, radiusRandom / radius)
      colors[i3] = mixed.r
      colors[i3 + 1] = mixed.g
      colors[i3 + 2] = mixed.b
    }

    return [positions, colors] as const
  }, [count, radius, branches, spin, randomness, randomnessPower, insideColor, outsideColor])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        {/* ✅ 新写法：用 args 传入 [array, itemSize]，不再写 count/array/itemSize */}
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
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

