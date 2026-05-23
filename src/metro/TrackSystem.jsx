import React, { useMemo } from 'react'

export default function TrackSystem() {
  const LEN = 560
  const HALF = LEN / 2
  const startZ = 20
  const midZ = startZ - HALF

  const sleepers = useMemo(() =>
    Array.from({ length: Math.floor(LEN / 2.2) }, (_, i) => startZ - i * 2.2),
  [])

  return (
    <group>
      {/* Ballast bed */}
      <mesh position={[0, -0.45, midZ]}>
        <boxGeometry args={[4.2, 0.22, LEN]} />
        <meshStandardMaterial color="#16141e" roughness={0.95} metalness={0.05} />
      </mesh>

      {/* Track pit floor */}
      <mesh position={[0, -0.7, midZ]}>
        <boxGeometry args={[3.6, 0.1, LEN]} />
        <meshStandardMaterial color="#0c0c16" roughness={0.98} />
      </mesh>

      {/* Left rail */}
      <mesh position={[-0.76, -0.32, midZ]}>
        <boxGeometry args={[0.1, 0.09, LEN]} />
        <meshStandardMaterial color="#2c2c42" metalness={0.92} roughness={0.18} />
      </mesh>

      {/* Right rail */}
      <mesh position={[0.76, -0.32, midZ]}>
        <boxGeometry args={[0.1, 0.09, LEN]} />
        <meshStandardMaterial color="#2c2c42" metalness={0.92} roughness={0.18} />
      </mesh>

      {/* Rail top highlight (reflective strip) */}
      <mesh position={[-0.76, -0.275, midZ]}>
        <boxGeometry args={[0.06, 0.01, LEN]} />
        <meshStandardMaterial color="#5a5a80" metalness={1.0} roughness={0.05} />
      </mesh>
      <mesh position={[0.76, -0.275, midZ]}>
        <boxGeometry args={[0.06, 0.01, LEN]} />
        <meshStandardMaterial color="#5a5a80" metalness={1.0} roughness={0.05} />
      </mesh>

      {/* Sleepers */}
      {sleepers.map((sz, i) => (
        <mesh key={i} position={[0, -0.38, sz]}>
          <boxGeometry args={[2.1, 0.07, 0.22]} />
          <meshStandardMaterial color="#111120" roughness={0.95} />
        </mesh>
      ))}
    </group>
  )
}
