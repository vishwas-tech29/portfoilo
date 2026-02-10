"use client"
"use no memo"

import { useRef, useMemo } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Float, MeshTransmissionMaterial } from '@react-three/drei'
import * as THREE from 'three'

export function InteractiveCharacter() {
  const groupRef = useRef<THREE.Group>(null)
  const headRef = useRef<THREE.Mesh>(null)
  const bodyRef = useRef<THREE.Mesh>(null)
  const { viewport, pointer } = useThree()

  // Animate character with mouse tracking
  useFrame((state) => {
    const t = state.clock.elapsedTime

    if (groupRef.current) {
      // Slow camera push-in effect
      groupRef.current.position.z = Math.sin(t * 0.1) * 0.1
    }

    if (headRef.current) {
      // Mouse-tracked head movement
      const targetRotationY = pointer.x * 0.3
      const targetRotationX = -pointer.y * 0.2
      
      headRef.current.rotation.y = THREE.MathUtils.lerp(
        headRef.current.rotation.y,
        targetRotationY + Math.sin(t * 0.3) * 0.05,
        0.05
      )
      headRef.current.rotation.x = THREE.MathUtils.lerp(
        headRef.current.rotation.x,
        targetRotationX + Math.sin(t * 0.5) * 0.03,
        0.05
      )
      
      // Breathing motion
      headRef.current.position.y = 1.2 + Math.sin(t * 0.8) * 0.02
    }

    if (bodyRef.current) {
      // Breathing motion
      bodyRef.current.scale.y = 1 + Math.sin(t * 0.8) * 0.02
      
      // Subtle lean towards mouse
      bodyRef.current.rotation.z = THREE.MathUtils.lerp(
        bodyRef.current.rotation.z,
        pointer.x * 0.05,
        0.03
      )
    }
  })

  // Stylized character geometry
  const characterGeometry = useMemo(() => {
    return {
      head: new THREE.SphereGeometry(0.5, 32, 32),
      body: new THREE.CapsuleGeometry(0.4, 1.2, 16, 32),
      arm: new THREE.CapsuleGeometry(0.12, 0.8, 8, 16)
    }
  }, [])

  return (
    <Float
      speed={0.5}
      rotationIntensity={0.1}
      floatIntensity={0.2}
    >
      <group ref={groupRef} position={[0, 0, 0]}>
        {/* Head */}
        <mesh
          ref={headRef}
          geometry={characterGeometry.head}
          position={[0, 1.2, 0]}
          castShadow
        >
          <meshStandardMaterial
            color="#1a1a1a"
            metalness={0.6}
            roughness={0.3}
            emissive="#4a9eff"
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Face glow accent - follows gaze */}
        <mesh position={[0, 1.2, 0.4]} scale={[0.3, 0.15, 0.1]}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color="#4a9eff" transparent opacity={0.6} />
        </mesh>

        {/* Eyes - subtle glow */}
        <mesh position={[-0.15, 1.25, 0.45]} scale={[0.08, 0.08, 0.05]}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshBasicMaterial color="#00ffaa" />
        </mesh>
        <mesh position={[0.15, 1.25, 0.45]} scale={[0.08, 0.08, 0.05]}>
          <sphereGeometry args={[1, 8, 8]} />
          <meshBasicMaterial color="#00ffaa" />
        </mesh>

        {/* Body */}
        <mesh
          ref={bodyRef}
          geometry={characterGeometry.body}
          position={[0, 0, 0]}
          castShadow
        >
          <meshStandardMaterial
            color="#0a0a0a"
            metalness={0.8}
            roughness={0.2}
            emissive="#7c3aed"
            emissiveIntensity={0.05}
          />
        </mesh>

        {/* Left Arm */}
        <mesh
          geometry={characterGeometry.arm}
          position={[-0.6, 0.3, 0]}
          rotation={[0, 0, 0.3]}
          castShadow
        >
          <meshStandardMaterial
            color="#1a1a1a"
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>

        {/* Right Arm - slightly raised */}
        <mesh
          geometry={characterGeometry.arm}
          position={[0.6, 0.5, 0.2]}
          rotation={[0.2, 0, -0.5]}
          castShadow
        >
          <meshStandardMaterial
            color="#1a1a1a"
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>

        {/* Energy field around character */}
        <mesh position={[0, 0.5, 0]} scale={[2.5, 3, 2.5]}>
          <sphereGeometry args={[1, 32, 32]} />
          <MeshTransmissionMaterial
            transmission={0.95}
            thickness={0.5}
            roughness={0.1}
            chromaticAberration={0.5}
            anisotropy={1}
            distortion={0.2}
            distortionScale={0.5}
            temporalDistortion={0.1}
            color="#4a9eff"
            transparent
            opacity={0.1}
          />
        </mesh>

        {/* Floating geometric accent */}
        <mesh position={[1.5, 1.5, -0.5]} rotation={[0.5, 0.5, 0]}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
          <meshStandardMaterial
            color="#00ffaa"
            emissive="#00ffaa"
            emissiveIntensity={0.8}
            metalness={1}
            roughness={0}
          />
        </mesh>
      </group>
    </Float>
  )
}
