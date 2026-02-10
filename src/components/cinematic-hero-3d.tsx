"use client"

import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { RealisticCharacter } from './3d/realistic-character'
import { Scene3D } from './3d/scene-3d'
import { KineticText } from './3d/kinetic-text'
import { CameraRig } from './3d/camera-rig'
import { LoadingScreen } from './3d/loading-screen'

export function CinematicHero3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      <LoadingScreen />
      <motion.section 
        ref={containerRef}
        className="relative h-screen w-full overflow-hidden bg-black"
        style={{ opacity, scale }}
      >
      {/* 3D Canvas */}
      {isClient && (
        <div className="absolute inset-0">
          <Canvas
            gl={{ 
              antialias: true,
              alpha: true,
              powerPreference: "high-performance"
            }}
            dpr={[1, 2]}
          >
            <Suspense fallback={null}>
              <CameraRig />
              <Scene3D />
              <RealisticCharacter />
            </Suspense>
          </Canvas>
        </div>
      )}

      {/* Kinetic Typography Overlay */}
      <KineticText />

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 6, duration: 2 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-9 border border-white/20 rounded-full flex justify-center pt-2"
        >
          <motion.div
            className="w-1 h-2 bg-white/40 rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        <span className="text-[10px] text-white/30 tracking-[0.3em] uppercase">Scroll</span>
      </motion.div>

      {/* Vignette Effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-transparent to-black/80" />
    </motion.section>
    </>
  )
}
