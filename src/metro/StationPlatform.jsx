import React from 'react'

export default function StationPlatform({ station }) {
  const { z, color } = station
  const c = color

  return (
    <group position={[0, 0, z]}>

      {/* ── Platform floor ── */}
      <mesh position={[7, 0.02, 0]} receiveShadow>
        <boxGeometry args={[11, 0.28, 38]} />
        <meshStandardMaterial color="#191928" roughness={0.82} metalness={0.12} />
      </mesh>

      {/* Tile grid lines */}
      {Array.from({ length: 19 }, (_, i) => (
        <mesh key={i} position={[7, 0.17, -18 + i * 2]}>
          <boxGeometry args={[11, 0.008, 0.04]} />
          <meshStandardMaterial color="#242438" />
        </mesh>
      ))}

      {/* Safety edge strip */}
      <mesh position={[1.85, 0.17, 0]}>
        <boxGeometry args={[0.22, 0.01, 37.5]} />
        <meshStandardMaterial color="#d4a020" emissive="#d4a020" emissiveIntensity={0.5} />
      </mesh>

      {/* Platform beveled edge */}
      <mesh position={[1.7, -0.05, 0]}>
        <boxGeometry args={[0.15, 0.3, 38]} />
        <meshStandardMaterial color="#141424" roughness={0.7} />
      </mesh>

      {/* ── Back wall ── */}
      <mesh position={[12.9, 3.2, 0]}>
        <boxGeometry args={[0.28, 6.7, 40]} />
        <meshStandardMaterial color="#0f0f1e" roughness={0.75} metalness={0.2} />
      </mesh>

      {/* Station color banner on back wall */}
      <mesh position={[13.05, 4.6, 0]}>
        <boxGeometry args={[0.02, 1.4, 14]} />
        <meshStandardMaterial color={c} emissive={c} emissiveIntensity={0.7} />
      </mesh>

      {/* Wall accent panels */}
      {[-14, -7, 0, 7, 14].map((wz, i) => (
        <mesh key={i} position={[12.86, 2.5, wz]}>
          <boxGeometry args={[0.05, 3, 4]} />
          <meshStandardMaterial color="#141430" roughness={0.6} metalness={0.4} />
        </mesh>
      ))}

      {/* ── Ceiling ── */}
      <mesh position={[7, 6.2, 0]}>
        <boxGeometry args={[13, 0.28, 40]} />
        <meshStandardMaterial color="#0c0c1c" roughness={0.65} metalness={0.3} />
      </mesh>

      {/* Ceiling LED strip panels */}
      {[-14, -7, 0, 7, 14].map((lz, i) => (
        <mesh key={i} position={[7, 5.98, lz]}>
          <boxGeometry args={[10, 0.055, 1.2]} />
          <meshStandardMaterial color="#ffffff" emissive="#e8f0ff" emissiveIntensity={1.4} />
        </mesh>
      ))}

      {/* ── Columns ── */}
      {[-14, -7, 0, 7, 14].map((cz, i) => (
        <group key={i} position={[12.2, 3.1, cz]}>
          {/* Column body */}
          <mesh>
            <boxGeometry args={[0.48, 6.5, 0.48]} />
            <meshStandardMaterial color="#131322" metalness={0.6} roughness={0.5} />
          </mesh>
          {/* Column base */}
          <mesh position={[0, -3.1, 0]}>
            <boxGeometry args={[0.65, 0.12, 0.65]} />
            <meshStandardMaterial color="#0f0f1e" metalness={0.8} />
          </mesh>
          {/* Accent strip facing platform */}
          <mesh position={[-0.25, 0, 0]}>
            <boxGeometry args={[0.018, 5.8, 0.5]} />
            <meshStandardMaterial color={c} emissive={c} emissiveIntensity={0.55} />
          </mesh>
        </group>
      ))}

      {/* ── Tunnel entrance/exit walls ── */}
      {[19.2, -19.2].map((wz, i) => (
        <group key={i} position={[0, 3.1, wz]}>
          <mesh>
            <boxGeometry args={[15, 6.5, 0.35]} />
            <meshStandardMaterial color="#0e0e1e" roughness={0.8} />
          </mesh>
          {/* Tunnel arch outline */}
          <mesh position={[0, 0.5, 0.18]}>
            <torusGeometry args={[4.65, 0.18, 8, 22, Math.PI]} />
            <meshStandardMaterial color={c} emissive={c} emissiveIntensity={0.4} />
          </mesh>
        </group>
      ))}

      {/* ── Lighting ── */}
      {[-12, -6, 0, 6, 12].map((lz, i) => (
        <pointLight key={i} position={[7, 5.5, lz]} color="#c8d8ff" intensity={4} distance={22} />
      ))}
      {[-14, -7, 0, 7, 14].map((lz, i) => (
        <pointLight key={i} position={[12, 1.8, lz]} color={c} intensity={2} distance={9} />
      ))}
      {/* Floor up-light near edge */}
      <pointLight position={[2, 0.5, 0]} color={c} intensity={1.5} distance={12} />
    </group>
  )
}
