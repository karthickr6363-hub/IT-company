import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Ring, Sphere } from '@react-three/drei'
import * as THREE from 'three'

function Logo3D({ scale = 1, rotationSpeed = 0.5 }) {
  const ringRef = useRef()
  const dotRef = useRef()

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.elapsedTime * rotationSpeed
    }
    if (dotRef.current) {
      // Subtle floating animation
      dotRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1
    }
  })

  return (
    <group scale={scale}>
      {/* Yellow Ring */}
      <Ring
        ref={ringRef}
        args={[1.5, 2, 64]}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial
          color="#FFD700"
          emissive="#FFD700"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </Ring>
      
      {/* White Center Dot */}
      <Sphere
        ref={dotRef}
        args={[0.5, 32, 32]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#FFFFFF"
          emissive="#FFFFFF"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </group>
  )
}

export default Logo3D
