"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Stars } from "@react-three/drei"
import { Suspense } from "react"
import { Galaxy } from "./galaxy"

export function GalaxyBackground() {
  const galaxyParams = {
    count: 120000, // 增加星星数量
    size: 0.01, // 稍微增大星星大小
    radius: 8, // 增大星系半径
    branches: 4,
    spin: 1.2,
    randomness: 0.15,
    randomnessPower: 3,
    insideColor: "#ff6030",
    outsideColor: "#1b3984",
  }

  return (
    <div className="fixed inset-0 z-0 bg-black">
      <Canvas
        camera={{
          position: [8, 4, 8], // 调整初始相机位置
          fov: 75,
          near: 0.1,
          far: 1000,
        }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.1} />
          <pointLight position={[0, 0, 0]} intensity={0.3} color="#ffffff" />
          <Environment preset="night" />
          <Stars radius={400} depth={80} count={5000} factor={6} saturation={0} fade />
          <Galaxy {...galaxyParams} />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={3} // 允许更近的距离
            maxDistance={150} // 允许更远的距离
            autoRotate={false}
            autoRotateSpeed={0.5}
            zoomSpeed={1.2} // 增加缩放速度
            panSpeed={1.0}
            rotateSpeed={0.8}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
