import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function LampLight() {
  const lampRef  = useRef()
  const neonRef  = useRef()
  const targetRef = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (lampRef.current) {
      // Occasional subtle flicker
      const flicker = Math.sin(t * 47) > 0.97 ? 0.25 : 1.0
      lampRef.current.intensity = 72 * flicker
    }
    if (neonRef.current) {
      const n = Math.sin(t * 3.2) > 0.9 ? 0.2 : 1.0
      neonRef.current.intensity = 5 * n
    }
  })

  return (
    <>
      {/* Desk lamp spot */}
      <object3D ref={targetRef} position={[-1.4, 0, -0.4]} />
      <spotLight
        ref={lampRef}
        position={[-1.4, 3.1, -0.2]}
        angle={0.38}
        penumbra={0.65}
        intensity={72}
        color="#ff8c1a"
        distance={9}
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      {/* Ambient cold fill */}
      <ambientLight intensity={0.06} color="#1a1e2e" />

      {/* Neon through window */}
      <pointLight ref={neonRef} position={[-3.5, 2.8, -7]} color="#4455ff" intensity={5} distance={18} />
      <pointLight position={[-3.5, 2.8, -7]} color="#cc00ff" intensity={2} distance={10} />

      {/* Monitor glow */}
      <pointLight position={[0.5, 1.6, 0.5]} color="#00ff66" intensity={1.8} distance={5} />

      {/* Under-desk shadow fill */}
      <pointLight position={[-1, 0.2, 0]} color="#221408" intensity={0.5} distance={4} />
    </>
  )
}

function Desk() {
  const wood   = { color: '#1c1408', metalness: 0.15, roughness: 0.85 }
  const darkwd = { color: '#140e04', metalness: 0.1, roughness: 0.9 }

  return (
    <group position={[-1, 0, 0]}>
      {/* Desktop surface */}
      <mesh position={[0, 1.14, 0]} castShadow receiveShadow>
        <boxGeometry args={[5.2, 0.11, 2.6]} />
        <meshStandardMaterial {...wood} />
      </mesh>
      {/* Front lip */}
      <mesh position={[0, 1.06, 1.32]}>
        <boxGeometry args={[5.2, 0.06, 0.06]} />
        <meshStandardMaterial {...darkwd} />
      </mesh>

      {/* Left pedestal */}
      <mesh position={[-2.2, 0.5, 0.2]} receiveShadow>
        <boxGeometry args={[0.7, 1.1, 2.2]} />
        <meshStandardMaterial {...darkwd} />
      </mesh>
      {/* Drawer lines */}
      {[0.15, -0.2, -0.52].map((dy, i) => (
        <mesh key={i} position={[-2.2, 0.5 + dy, 1.32]}>
          <boxGeometry args={[0.65, 0.04, 0.02]} />
          <meshStandardMaterial color="#0a0804" metalness={0.5} roughness={0.6} />
        </mesh>
      ))}
      {/* Drawer handles */}
      {[0.15, -0.2, -0.52].map((dy, i) => (
        <mesh key={i} position={[-2.2, 0.5 + dy, 1.34]}>
          <boxGeometry args={[0.18, 0.025, 0.025]} />
          <meshStandardMaterial color="#3a2e18" metalness={0.8} roughness={0.3} />
        </mesh>
      ))}

      {/* Right legs */}
      {[[2.3, 1.1], [2.3, -1.1]].map(([lx, lz], i) => (
        <mesh key={i} position={[lx, 0.55, lz]} receiveShadow>
          <boxGeometry args={[0.14, 1.1, 0.14]} />
          <meshStandardMaterial {...darkwd} />
        </mesh>
      ))}

      {/* Under-shelf */}
      <mesh position={[0.8, 0.75, 0]}>
        <boxGeometry args={[3.4, 0.06, 2.4]} />
        <meshStandardMaterial {...darkwd} />
      </mesh>

      {/* Scattered papers on desk */}
      {[[-0.5, 0.2], [0.4, -0.3], [1.2, 0.1]].map(([px, pz], i) => (
        <mesh key={i} position={[px, 1.2, pz]} rotation={[0, i * 0.4, 0]}>
          <boxGeometry args={[0.55, 0.005, 0.72]} />
          <meshStandardMaterial color="#d4c090" roughness={0.9} />
        </mesh>
      ))}
    </group>
  )
}

function DeskLamp() {
  return (
    <group position={[-2.4, 1.2, -0.4]}>
      {/* Base */}
      <mesh>
        <cylinderGeometry args={[0.18, 0.22, 0.1, 10]} />
        <meshStandardMaterial color="#1a1408" metalness={0.7} roughness={0.4} />
      </mesh>
      {/* Arm lower */}
      <mesh position={[0, 0.7, 0]} rotation={[0.15, 0, 0]}>
        <cylinderGeometry args={[0.025, 0.025, 1.4, 8]} />
        <meshStandardMaterial color="#1e1810" metalness={0.8} roughness={0.35} />
      </mesh>
      {/* Arm upper */}
      <mesh position={[0.05, 1.75, 0.1]} rotation={[-0.4, 0, 0]}>
        <cylinderGeometry args={[0.022, 0.022, 1.0, 8]} />
        <meshStandardMaterial color="#1e1810" metalness={0.8} roughness={0.35} />
      </mesh>
      {/* Shade */}
      <mesh position={[0.1, 2.15, 0.25]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.48, 0.42, 10, 1, true]} />
        <meshStandardMaterial color="#1c1208" metalness={0.5} roughness={0.5} side={THREE.DoubleSide} />
      </mesh>
      {/* Inner shade glow */}
      <mesh position={[0.1, 2.0, 0.25]}>
        <coneGeometry args={[0.44, 0.38, 10, 1, true]} />
        <meshStandardMaterial color="#ff8c20" emissive="#ff8c20" emissiveIntensity={0.6} side={THREE.BackSide} transparent opacity={0.7} />
      </mesh>
    </group>
  )
}

function Monitor() {
  return (
    <group position={[0.5, 1.2, 0.5]}>
      {/* Stand base */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.18, 0.22, 0.06, 10]} />
        <meshStandardMaterial color="#101010" metalness={0.8} roughness={0.3} />
      </mesh>
      {/* Stand pole */}
      <mesh position={[0, 0.22, 0]}>
        <cylinderGeometry args={[0.04, 0.05, 0.44, 8]} />
        <meshStandardMaterial color="#0c0c0c" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Monitor frame */}
      <mesh position={[0, 0.75, 0]}>
        <boxGeometry args={[1.55, 1.0, 0.09]} />
        <meshStandardMaterial color="#0d0d0d" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Screen */}
      <mesh position={[0, 0.75, 0.048]}>
        <planeGeometry args={[1.38, 0.86]} />
        <meshStandardMaterial color="#001a08" emissive="#00ff66" emissiveIntensity={0.12} />
      </mesh>
      {/* Screen scanlines (thin emissive strips) */}
      {Array.from({ length: 8 }).map((_, i) => (
        <mesh key={i} position={[0, 0.32 + i * 0.1, 0.05]}>
          <planeGeometry args={[1.35, 0.012]} />
          <meshStandardMaterial color="#00ff44" emissive="#00ff44" emissiveIntensity={0.06} transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  )
}

function EvidenceBoard() {
  const photoPositions = [
    [-1.2, 0.5], [0, 0.7], [1.1, 0.4],
    [-0.7, -0.2], [0.5, -0.1], [-0.1, -0.6],
  ]
  return (
    <group position={[3.5, 2.8, -5.88]}>
      {/* Cork board */}
      <mesh>
        <boxGeometry args={[4.2, 3.0, 0.07]} />
        <meshStandardMaterial color="#6b5530" roughness={0.95} />
      </mesh>
      {/* Board frame */}
      {[
        [0, 1.52, 0, 4.4, 0.1, 0.1],
        [0, -1.52, 0, 4.4, 0.1, 0.1],
        [2.15, 0, 0, 0.1, 3.1, 0.1],
        [-2.15, 0, 0, 0.1, 3.1, 0.1],
      ].map(([x, y, z, w, h, d], i) => (
        <mesh key={i} position={[x, y, 0.04]}>
          <boxGeometry args={[w, h, 0.06]} />
          <meshStandardMaterial color="#1a1208" metalness={0.4} roughness={0.7} />
        </mesh>
      ))}

      {/* Photos/cards */}
      {photoPositions.map(([px, py], i) => (
        <group key={i} position={[px, py, 0.05]}>
          <mesh>
            <boxGeometry args={[0.55, 0.42, 0.01]} />
            <meshStandardMaterial color={i % 2 === 0 ? '#d8c898' : '#c8b880'} roughness={0.9} />
          </mesh>
          {/* Red string connections (thin lines) */}
          {i < photoPositions.length - 1 && (
            <mesh
              position={[
                (photoPositions[i + 1][0] - px) / 2,
                (photoPositions[i + 1][1] - py) / 2,
                0.01,
              ]}
              rotation={[0, 0, Math.atan2(photoPositions[i + 1][1] - py, photoPositions[i + 1][0] - px)]}
            >
              <boxGeometry args={[
                Math.hypot(photoPositions[i + 1][0] - px, photoPositions[i + 1][1] - py),
                0.006,
                0.002,
              ]} />
              <meshStandardMaterial color="#cc2222" emissive="#ff0000" emissiveIntensity={0.3} />
            </mesh>
          )}
          {/* Pushpin */}
          <mesh position={[0, 0.18, 0.02]}>
            <cylinderGeometry args={[0.025, 0.025, 0.05, 6]} />
            <meshStandardMaterial color="#cc2222" emissive="#ff0000" emissiveIntensity={0.4} metalness={0.7} roughness={0.3} />
          </mesh>
        </group>
      ))}

      {/* "CLASSIFIED" stamp */}
      <mesh position={[0.8, -0.9, 0.06]} rotation={[0, 0, -0.15]}>
        <boxGeometry args={[1.1, 0.28, 0.01]} />
        <meshStandardMaterial color="#cc0000" emissive="#ff0000" emissiveIntensity={0.25} transparent opacity={0.7} />
      </mesh>
    </group>
  )
}

function Window() {
  const windowRef = useRef()
  useFrame(({ clock }) => {
    if (!windowRef.current) return
    // Rain on glass: subtle shimmer
    windowRef.current.material.emissiveIntensity = 0.28 + Math.sin(clock.getElapsedTime() * 0.8) * 0.04
  })
  return (
    <group position={[-3.5, 2.8, -5.9]}>
      {/* Outer frame */}
      <mesh>
        <boxGeometry args={[3.4, 2.8, 0.22]} />
        <meshStandardMaterial color="#1a1208" metalness={0.4} roughness={0.7} />
      </mesh>
      {/* Glass pane */}
      <mesh ref={windowRef} position={[0, 0, 0.08]}>
        <planeGeometry args={[2.9, 2.4]} />
        <meshStandardMaterial color="#0a1428" emissive="#0a1428" emissiveIntensity={0.28} transparent opacity={0.82} />
      </mesh>
      {/* Window cross */}
      <mesh position={[0, 0, 0.12]}>
        <boxGeometry args={[2.9, 0.05, 0.02]} />
        <meshStandardMaterial color="#1a1208" metalness={0.5} roughness={0.6} />
      </mesh>
      <mesh position={[0, 0, 0.12]}>
        <boxGeometry args={[0.05, 2.4, 0.02]} />
        <meshStandardMaterial color="#1a1208" metalness={0.5} roughness={0.6} />
      </mesh>

      {/* Neon "OPEN" sign outside */}
      <mesh position={[0, -0.5, 0.1]}>
        <planeGeometry args={[1.2, 0.3]} />
        <meshStandardMaterial color="#ff0055" emissive="#ff0055" emissiveIntensity={1.2} transparent opacity={0.6} />
      </mesh>
    </group>
  )
}

function FilingCabinets() {
  const mat = { color: '#141210', metalness: 0.55, roughness: 0.6 }
  return (
    <group position={[5.5, 0, -3]}>
      {[0, 1.1, 2.2].map((xoff, i) => (
        <group key={i} position={[xoff, 0, 0]}>
          <mesh position={[0, 0.85, 0]}>
            <boxGeometry args={[1.0, 1.7, 0.6]} />
            <meshStandardMaterial {...mat} />
          </mesh>
          {[0.5, 0.1, -0.28].map((dy, j) => (
            <mesh key={j} position={[0, 0.85 + dy, 0.31]}>
              <boxGeometry args={[0.88, 0.06, 0.02]} />
              <meshStandardMaterial color="#0a0a0a" metalness={0.4} roughness={0.8} />
            </mesh>
          ))}
          {[0.5, 0.1, -0.28].map((dy, j) => (
            <mesh key={j} position={[0, 0.85 + dy, 0.32]}>
              <boxGeometry args={[0.2, 0.025, 0.025]} />
              <meshStandardMaterial color="#2a2018" metalness={0.8} roughness={0.3} />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  )
}

function BookShelf() {
  const shelfMat = { color: '#1c1408', metalness: 0.1, roughness: 0.9 }
  const bookColors = ['#4a2020', '#1a2a4a', '#2a3a1a', '#3a1a3a', '#1a3a2a', '#3a2a1a', '#1a1a3a', '#3a1a1a']

  return (
    <group position={[5.5, 0, 2.5]}>
      {/* Shelf unit */}
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[3.4, 3.0, 0.35]} />
        <meshStandardMaterial {...shelfMat} />
      </mesh>
      {/* Shelf boards */}
      {[0.4, 1.0, 1.6, 2.2].map((sy, i) => (
        <mesh key={i} position={[0, sy, 0.15]}>
          <boxGeometry args={[3.2, 0.06, 0.3]} />
          <meshStandardMaterial {...shelfMat} />
        </mesh>
      ))}
      {/* Books */}
      {Array.from({ length: 24 }).map((_, i) => {
        const shelf = Math.floor(i / 6)
        const pos   = (i % 6) - 2.5
        const h     = 0.38 + Math.random() * 0.18
        return (
          <mesh key={i} position={[pos * 0.48, 0.4 + shelf * 0.6 + h / 2, 0.15]}>
            <boxGeometry args={[0.4 + Math.random() * 0.08, h, 0.25]} />
            <meshStandardMaterial color={bookColors[i % bookColors.length]} roughness={0.9} />
          </mesh>
        )
      })}
    </group>
  )
}

function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
      <planeGeometry args={[24, 18]} />
      <meshStandardMaterial color="#120e08" roughness={0.88} metalness={0.08} />
    </mesh>
  )
}

function BackWall() {
  return (
    <mesh position={[0, 3.0, -6]} receiveShadow>
      <boxGeometry args={[22, 9, 0.22]} />
      <meshStandardMaterial color="#0e0c08" roughness={0.85} metalness={0.05} />
    </mesh>
  )
}

function LeftWall() {
  return (
    <mesh position={[-7, 3.0, 0]} receiveShadow>
      <boxGeometry args={[0.22, 9, 18]} />
      <meshStandardMaterial color="#0c0a06" roughness={0.9} metalness={0.05} />
    </mesh>
  )
}

export default function OfficeRoom() {
  return (
    <group>
      <LampLight />
      <Floor />
      <BackWall />
      <LeftWall />
      <Desk />
      <DeskLamp />
      <Monitor />
      <EvidenceBoard />
      <Window />
      <FilingCabinets />
      <BookShelf />
    </group>
  )
}
