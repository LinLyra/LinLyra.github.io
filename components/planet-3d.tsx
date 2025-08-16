"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial } from "@react-three/drei";
import type { Mesh } from "three";

export interface Planet3DProps {
  position: [number, number, number];
  color: string;
  size?: number;
  distort?: number;
  speed?: number;
}

export function Planet3D({
  position,
  color,
  size = 1,
  distort = 0.3,
  speed = 0.5,
}: Planet3DProps) {
  const meshRef = useRef<Mesh>(null);

  // 避免每次渲染都重建 args
  const sphereArgs = useMemo<[number, number, number]>(() => [size, 64, 64], [size]);

  // 用 delta 更平滑，避免帧率依赖
  useFrame((state, delta) => {
    const m = meshRef.current;
    if (!m) return;
    m.rotation.x += Math.sin(state.clock.elapsedTime * speed) * 0.1 * delta;
    m.rotation.y += 0.6 * delta; // ~0.01/帧 @60fps
    m.rotation.z += Math.cos(state.clock.elapsedTime * speed * 0.5) * 0.1 * delta;
  });

  return (
    <Sphere ref={meshRef} position={position} args={sphereArgs} castShadow receiveShadow>
      <MeshDistortMaterial
        color={color}
        distort={distort}
        speed={2}
        roughness={0.1}
        metalness={0.8}
      />
    </Sphere>
  );
}

