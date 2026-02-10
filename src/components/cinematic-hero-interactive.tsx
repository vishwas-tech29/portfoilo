"use client"

import { Canvas } from '@react-three/fiber'
import { Suspense, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { InteractiveCharacter } from './3d/interactive-character'
import { Scene3D } from './3d/scene-3d'
import { KineticText } from './3d/kinetic-text'
import { CameraRig } from './3d/camera-rig'
import { LoadingScreen } from './3d/loading-screen'

export function CinematicHeroInteractive() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      <LoadingScreen />
      <motion.section 
        className="relative h-screen w-full overflow-hidden bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
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
                <InteractiveCharacter />
              </Suspense>
            </Canvas>
          </div>
        )}

        {/* Kinetic Typography Overlay */}
        <KineticText />

        {/* Interactive hint */}
        <motion.div
          className="absolute top-8 right-8 text-white/40 text-sm tracking-wider z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          <span className="uppercase text-xs">Move to interact</span>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border border-white/30 rounded-full flex justify-center pt-2"
          >
            <motion.div
              className="w-1 h-3 bg-white/60 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <span className="text-xs text-white/50 tracking-[0.2em] uppercase">Scroll</span>
        </motion.div>

        {/* Vignette Effect */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-radial from-transparent via-transparent to-black/80" />
      </motion.section>
    </>
  )
}
