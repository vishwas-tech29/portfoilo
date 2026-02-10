"use client"
"use no memo"

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

export function RealisticCharacter() {
  const groupRef = useRef<THREE.Group>(null)
  const headRef = useRef<THREE.Mesh>(null)
  const torsoRef = useRef<THREE.Mesh>(null)

  // Minimal, natural animation - stillness is power
  useFrame((state) => {
    const t = state.clock.elapsedTime

    if (headRef.current) {
      // Very subtle head turn - thoughtful, observing
      headRef.current.rotation.y = Math.sin(t * 0.15) * 0.08
      headRef.current.rotation.x = Math.sin(t * 0.2) * 0.03
      
      // Natural breathing
      headRef.current.position.y = 1.5 + Math.sin(t * 0.6) * 0.015
    }

    if (torsoRef.current) {
      // Breathing motion
      torsoRef.current.scale.y = 1 + Math.sin(t * 0.6) * 0.01
    }
  })

  // Realistic human proportions
  const characterGeometry = useMemo(() => {
    return {
      head: new THREE.SphereGeometry(0.35, 32, 32),
      neck: new THREE.CylinderGeometry(0.12, 0.14, 0.25, 16),
      torso: new THREE.CapsuleGeometry(0.35, 0.9, 16, 32),
      shoulders: new THREE.BoxGeometry(0.9, 0.2, 0.3),
      arm: new THREE.CapsuleGeometry(0.1, 0.6, 12, 16),
      forearm: new THREE.CapsuleGeometry(0.08, 0.5, 12, 16),
      leg: new THREE.CapsuleGeometry(0.12, 0.7, 12, 16)
    }
  }, [])

  // Clean dark materials - black hoodie aesthetic
  const fabricMaterial = new THREE.MeshStandardMaterial({
    color: '#0a0a0a',
    metalness: 0.1,
    roughness: 0.9,
    flatShading: false
  })

  const skinMaterial = new THREE.MeshStandardMaterial({
    color: '#d4a574',
    metalness: 0,
    roughness: 0.7
  })

  return (
    <Float
      speed={0.3}
      rotationIntensity={0.05}
      floatIntensity={0.1}
    >
      <group ref={groupRef} position={[0, -1.5, 0]}>
        {/* Head */}
        <mesh
          ref={headRef}
          geometry={characterGeometry.head}
          material={skinMaterial}
          position={[0, 1.5, 0]}
          castShadow
        />

        {/* Subtle facial features - eyes */}
        <mesh position={[-0.12, 1.55, 0.3]} scale={[0.06, 0.06, 0.03]}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshBasicMaterial color="#1a1a1a" />
        </mesh>
        <mesh position={[0.12, 1.55, 0.3]} scale={[0.06, 0.06, 0.03]}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshBasicMaterial color="#1a1a1a" />
        </mesh>

        {/* Neck */}
        <mesh
          geometry={characterGeometry.neck}
          material={skinMaterial}
          position={[0, 1.15, 0]}
          castShadow
        />

        {/* Shoulders - hoodie */}
        <mesh
          geometry={characterGeometry.shoulders}
          material={fabricMaterial}
          position={[0, 0.95, 0]}
          castShadow
        />

        {/* Torso - hoodie body */}
        <mesh
          ref={torsoRef}
          geometry={characterGeometry.torso}
          material={fabricMaterial}
          position={[0, 0.3, 0]}
          castShadow
        />

        {/* Left Arm */}
        <group position={[-0.5, 0.8, 0]}>
          <mesh
            geometry={characterGeometry.arm}
            material={fabricMaterial}
            position={[0, -0.3, 0]}
            rotation={[0, 0, 0.15]}
            castShadow
          />
          <mesh
            geometry={characterGeometry.forearm}
            material={fabricMaterial}
            position={[0, -0.9, 0.1]}
            rotation={[0.2, 0, 0.1]}
            castShadow
          />
        </group>

        {/* Right Arm - slightly different pose */}
        <group position={[0.5, 0.8, 0]}>
          <mesh
            geometry={characterGeometry.arm}
            material={fabricMaterial}
            position={[0, -0.3, 0]}
            rotation={[0, 0, -0.15]}
            castShadow
          />
          <mesh
            geometry={characterGeometry.forearm}
            material={fabricMaterial}
            position={[0, -0.9, 0.15]}
            rotation={[0.25, 0, -0.1]}
            castShadow
          />
        </group>

        {/* Left Leg */}
        <mesh
          geometry={characterGeometry.leg}
          material={fabricMaterial}
          position={[-0.15, -0.7, 0]}
          rotation={[0.05, 0, 0]}
          castShadow
        />

        {/* Right Leg */}
        <mesh
          geometry={characterGeometry.leg}
          material={fabricMaterial}
          position={[0.15, -0.7, 0]}
          rotation={[-0.05, 0, 0]}
          castShadow
        />

        {/* Subtle rim light accent - cool blue */}
        <pointLight
          position={[-1, 1.5, -1]}
          intensity={0.3}
          distance={3}
          color="#4a7c9e"
        />
      </group>
    </Float>
  )
}
