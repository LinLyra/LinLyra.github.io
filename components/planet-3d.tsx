"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, MeshDistortMaterial } from "@react-three/drei"
import type * as THREE from "three"

interface Planet3DProps {
  position: [number, number, number]
  color: string
  size?: number
  distort?: number
  speed?: number
}

export function Planet3D({ position, color, size = 1, distort = 0.3, speed = 0.5 }: Planet3DProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.1
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime * speed * 0.5) * 0.1
    }
  })

  return (
    <Sphere ref={meshRef} position={position} args={[size, 64, 64]}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={distort}
        speed={2}
        roughness={0.1}
        metalness={0.8}
      />
    </Sphere>
  )
}
