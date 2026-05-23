import React, { useMemo } from 'react'
import * as THREE from 'three'
import { TUNNEL_Y } from './constants'

export default function TunnelSegment({ startZ, endZ }) {
  const length = Math.abs(endZ - startZ)
  const midZ   = (startZ + endZ) / 2

  const ribPositions = useMemo(() =>
    Array.from({ length: Math.floor(length / 9) + 1 }, (_, i) => startZ - i * 9 - 4.5),
  [startZ, length])

  return (
    <group>
      {/* Main tube */}
      <mesh position={[0, TUNNEL_Y, midZ]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[4.6, 4.6, length, 22, 1, true]} />
        <meshStandardMaterial
          color="#090912"
          roughness={0.9}
          metalness={0.15}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Structural ribs */}
      {ribPositions.map((rz, i) => (
        <mesh key={i} position={[0, TUNNEL_Y, rz]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[4.6, 0.16, 8, 22]} />
          <meshStandardMaterial color="#141428" metalness={0.5} roughness={0.7} />
        </mesh>
      ))}

      {/* Tunnel floor between rails */}
      <mesh position={[0, -0.3, midZ]}>
        <boxGeometry args={[5, 0.1, length]} />
        <meshStandardMaterial color="#0c0c16" roughness={0.95} />
      </mesh>

      {/* Dim running lights */}
      {Array.from({ length: Math.floor(length / 25) }, (_, i) => (
        <pointLight
          key={i}
          position={[0, TUNNEL_Y - 1, startZ - i * 25 - 12]}
          color="#1e1e50"
          intensity={1.2}
          distance={28}
        />
      ))}
    </group>
  )
}
