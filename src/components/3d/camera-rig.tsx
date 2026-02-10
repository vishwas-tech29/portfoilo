"use client"
"use no memo"

import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

export function CameraRig() {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null)
  const { viewport } = useThree()

  useFrame((state) => {
    if (!cameraRef.current) return

    const t = state.clock.elapsedTime

    // Start wide, gradually move closer - signaling growth and momentum
    // Character feels small in universe, then grows in presence
    const targetZ = 12 - Math.min(t * 0.08, 5) // Slower, more deliberate
    cameraRef.current.position.z = THREE.MathUtils.lerp(
      cameraRef.current.position.z,
      targetZ,
      0.01
    )

    // Very subtle camera sway - confident, not shaky
    cameraRef.current.position.x = Math.sin(t * 0.1) * 0.15
    cameraRef.current.position.y = Math.cos(t * 0.08) * 0.1

    // Look at center with minimal drift
    const lookAtTarget = new THREE.Vector3(
      Math.sin(t * 0.05) * 0.2,
      Math.cos(t * 0.05) * 0.1,
      0
    )
    cameraRef.current.lookAt(lookAtTarget)
  })

  return (
    <PerspectiveCamera
      ref={cameraRef}
      makeDefault
      position={[0, 0, 12]}
      fov={50}
      near={0.1}
      far={1000}
    />
  )
}
