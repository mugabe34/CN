import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

const LaptopModel = (props) => {
  const meshRef = useRef()

  // Add subtle rotation animation
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group ref={meshRef} {...props} dispose={null}>
      {/* Custom 3D Laptop Model */}
      <group scale={[1.2, 1.2, 1.2]} position={[0, -0.5, 0]}>
        {/* Laptop Base */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[3, 0.15, 2]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
        </mesh>

        {/* Laptop Screen */}
        <mesh position={[0, 1, -0.95]} rotation={[-0.1, 0, 0]} castShadow>
          <boxGeometry args={[2.8, 1.8, 0.1]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Screen Display */}
        <mesh position={[0, 1, -0.9]} rotation={[-0.1, 0, 0]}>
          <planeGeometry args={[2.4, 1.5]} />
          <meshStandardMaterial color="#000040" emissive="#000080" emissiveIntensity={0.3} />
        </mesh>

        {/* Keyboard */}
        <mesh position={[0, 0.08, 0.3]} rotation={[-0.05, 0, 0]}>
          <planeGeometry args={[2.4, 1.4]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.3} roughness={0.7} />
        </mesh>

        {/* Trackpad */}
        <mesh position={[0, 0.09, 0.8]} rotation={[-0.05, 0, 0]}>
          <planeGeometry args={[0.8, 0.5]} />
          <meshStandardMaterial color="#333" metalness={0.5} roughness={0.3} />
        </mesh>
      </group>
    </group>
  )
}

export default LaptopModel
