"use client"
"use no memo"

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Environment, Float, Sparkles } from '@react-three/drei'
import { EffectComposer, Bloom, Vignette, DepthOfField } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'
import * as THREE from 'three'

export function Scene3D() {
  const particlesRef = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (particlesRef.current) {
      // Very slow particle drift
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <>
      {/* Minimal Lighting Setup - Cinematic and restrained */}
      <ambientLight intensity={0.05} />
      
      {/* Key Light - Soft overhead, creating depth */}
      <spotLight
        position={[0, 8, 2]}
        angle={0.4}
        penumbra={1}
        intensity={1.2}
        castShadow
        color="#ffffff"
      />
      
      {/* Subtle Rim Light - Cool blue accent */}
      <pointLight
        position={[-3, 2, -4]}
        intensity={0.4}
        color="#4a7c9e"
      />
      
      {/* Faint Back Light - Violet accent */}
      <pointLight
        position={[3, 1, -5]}
        intensity={0.3}
        color="#6b5b95"
      />

      {/* Minimal Particles - Sense of scale and time */}
      <Float
        speed={0.5}
        rotationIntensity={0.05}
        floatIntensity={0.3}
      >
        <Sparkles
          count={40}
          scale={20}
          size={1.5}
          speed={0.1}
          opacity={0.15}
          color="#ffffff"
        />
      </Float>

      {/* Infinite dark space - no distracting geometry */}
      <fog attach="fog" args={['#000000', 10, 30]} />

      {/* Environment */}
      <Environment preset="night" />

      {/* Post Processing - Cinematic depth */}
      <EffectComposer>
        <Bloom
          intensity={0.3}
          luminanceThreshold={0.4}
          luminanceSmoothing={0.9}
          mipmapBlur
        />
        <DepthOfField
          focusDistance={0.02}
          focalLength={0.05}
          bokehScale={1}
        />
        <Vignette
          offset={0.2}
          darkness={0.9}
          eskil={false}
          blendFunction={BlendFunction.NORMAL}
        />
      </EffectComposer>
    </>
  )
}
