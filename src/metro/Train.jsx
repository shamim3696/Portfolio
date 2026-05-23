import React, { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import { useMetro } from './MetroContext'
import { STATIONS, TRAIN_Y } from './constants'

function Body() {
  return (
    <>
      {/* Underframe skirt */}
      <mesh position={[0, 0.22, 0]}>
        <boxGeometry args={[2.95, 0.44, 18.4]} />
        <meshStandardMaterial color="#0e0e20" metalness={0.6} roughness={0.5} />
      </mesh>

      {/* Lower body */}
      <mesh position={[0, 0.98, 0]}>
        <boxGeometry args={[2.75, 1.1, 18.2]} />
        <meshStandardMaterial color="#12122a" metalness={0.55} roughness={0.45} />
      </mesh>

      {/* Upper body */}
      <mesh position={[0, 2.16, 0]}>
        <boxGeometry args={[2.6, 1.52, 18.0]} />
        <meshStandardMaterial color="#101026" metalness={0.5} roughness={0.5} />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 3.08, 0]}>
        <boxGeometry args={[2.35, 0.28, 17.6]} />
        <meshStandardMaterial color="#0a0a1c" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Roof rib */}
      <mesh position={[0, 3.25, 0]}>
        <boxGeometry args={[0.7, 0.12, 15]} />
        <meshStandardMaterial color="#080818" metalness={0.85} roughness={0.25} />
      </mesh>

      {/* Cyan accent stripe – lower */}
      <mesh position={[0, 0.47, 0]}>
        <boxGeometry args={[2.97, 0.065, 18.5]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={1.4} />
      </mesh>

      {/* Cyan accent stripe – window top */}
      <mesh position={[0, 2.98, 0]}>
        <boxGeometry args={[2.62, 0.048, 18.1]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={1.0} />
      </mesh>

      {/* Window band – left */}
      <mesh position={[-1.305, 2.16, 0]}>
        <boxGeometry args={[0.038, 1.2, 17.6]} />
        <meshStandardMaterial color="#9ec8e8" emissive="#9ec8e8" emissiveIntensity={0.22} transparent opacity={0.78} />
      </mesh>

      {/* Window band – right */}
      <mesh position={[1.305, 2.16, 0]}>
        <boxGeometry args={[0.038, 1.2, 17.6]} />
        <meshStandardMaterial color="#9ec8e8" emissive="#9ec8e8" emissiveIntensity={0.22} transparent opacity={0.78} />
      </mesh>

      {/* Window dividers (5 per side) */}
      {[-7, -3.5, 0, 3.5, 7].map((wz, i) => (
        <React.Fragment key={i}>
          <mesh position={[-1.306, 2.16, wz]}>
            <boxGeometry args={[0.038, 1.3, 0.09]} />
            <meshStandardMaterial color="#0a0a1c" />
          </mesh>
          <mesh position={[1.306, 2.16, wz]}>
            <boxGeometry args={[0.038, 1.3, 0.09]} />
            <meshStandardMaterial color="#0a0a1c" />
          </mesh>
        </React.Fragment>
      ))}

      {/* Door indicator lines */}
      {[-3.8, 3.8].map((dz, i) => (
        <React.Fragment key={i}>
          <mesh position={[-1.306, 1.15, dz]}>
            <boxGeometry args={[0.038, 1.6, 0.055]} />
            <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.6} />
          </mesh>
          <mesh position={[1.306, 1.15, dz]}>
            <boxGeometry args={[0.038, 1.6, 0.055]} />
            <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.6} />
          </mesh>
        </React.Fragment>
      ))}

      {/* ── Front face ── */}
      <mesh position={[0, 1.7, 9.12]}>
        <boxGeometry args={[2.75, 3.4, 0.08]} />
        <meshStandardMaterial color="#0b0b1e" metalness={0.85} roughness={0.2} />
      </mesh>
      <mesh position={[0, 2.56, 9.17]}>
        <boxGeometry args={[1.85, 1.0, 0.02]} />
        <meshStandardMaterial color="#8ec8e8" emissive="#8ec8e8" emissiveIntensity={0.45} transparent opacity={0.88} />
      </mesh>
      {/* Front number display */}
      <mesh position={[0, 1.35, 9.18]}>
        <boxGeometry args={[0.72, 0.22, 0.01]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={2.0} />
      </mesh>
      {/* Headlight housing L */}
      <mesh position={[-0.88, 1.08, 9.13]}>
        <boxGeometry args={[0.42, 0.28, 0.07]} />
        <meshStandardMaterial color="#050518" metalness={0.95} roughness={0.05} />
      </mesh>
      <mesh position={[-0.88, 1.08, 9.17]}>
        <planeGeometry args={[0.32, 0.18]} />
        <meshStandardMaterial color="#fff8e8" emissive="#fff8e8" emissiveIntensity={3.5} />
      </mesh>
      {/* Headlight housing R */}
      <mesh position={[0.88, 1.08, 9.13]}>
        <boxGeometry args={[0.42, 0.28, 0.07]} />
        <meshStandardMaterial color="#050518" metalness={0.95} roughness={0.05} />
      </mesh>
      <mesh position={[0.88, 1.08, 9.17]}>
        <planeGeometry args={[0.32, 0.18]} />
        <meshStandardMaterial color="#fff8e8" emissive="#fff8e8" emissiveIntensity={3.5} />
      </mesh>

      {/* ── Rear face ── */}
      <mesh position={[0, 1.7, -9.12]}>
        <boxGeometry args={[2.75, 3.4, 0.08]} />
        <meshStandardMaterial color="#0b0b1e" metalness={0.85} roughness={0.2} />
      </mesh>
      <mesh position={[-0.88, 1.08, -9.17]}>
        <planeGeometry args={[0.32, 0.18]} />
        <meshStandardMaterial color="#ff2200" emissive="#ff2200" emissiveIntensity={2.5} />
      </mesh>
      <mesh position={[0.88, 1.08, -9.17]}>
        <planeGeometry args={[0.32, 0.18]} />
        <meshStandardMaterial color="#ff2200" emissive="#ff2200" emissiveIntensity={2.5} />
      </mesh>
    </>
  )
}

function Bogies() {
  return (
    <>
      {[-5.6, 5.6].map((bz, bi) => (
        <group key={bi} position={[0, -0.28, bz]}>
          <mesh>
            <boxGeometry args={[3.05, 0.28, 3.4]} />
            <meshStandardMaterial color="#080818" metalness={0.8} roughness={0.3} />
          </mesh>
          {[-1.05, 1.05].map((az, ai) => (
            <group key={ai} position={[0, -0.18, az]}>
              <mesh rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.07, 0.07, 3.3, 8]} />
                <meshStandardMaterial color="#1a1a2c" metalness={0.9} roughness={0.2} />
              </mesh>
              {[-1.42, 1.42].map((wx, wi) => (
                <mesh key={wi} position={[wx, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
                  <cylinderGeometry args={[0.4, 0.4, 0.2, 24]} />
                  <meshStandardMaterial color="#0d0d1c" metalness={0.9} roughness={0.2} />
                </mesh>
              ))}
            </group>
          ))}
        </group>
      ))}
    </>
  )
}

export default function Train() {
  const groupRef = useRef()
  const { targetStation, setIsMoving, setCurrentStation, trainZRef } = useMetro()

  useEffect(() => {
    if (!groupRef.current) return
    const target = STATIONS.find(s => s.id === targetStation)
    if (!target) return
    gsap.killTweensOf(groupRef.current.position)
    gsap.to(groupRef.current.position, {
      z: target.z,
      duration: 4.8,
      ease: 'power2.inOut',
      onComplete: () => {
        setIsMoving(false)
        setCurrentStation(targetStation)
      },
    })
  }, [targetStation])

  useFrame(() => {
    if (groupRef.current && trainZRef) {
      trainZRef.current = groupRef.current.position.z
    }
  })

  return (
    <group ref={groupRef} position={[0, TRAIN_Y, 0]}>
      <Body />
      <Bogies />
      {/* Headlight cone */}
      <pointLight position={[0, 1.1, 10]} color="#fffff4" intensity={12} distance={40} />
      {/* Undercarriage glow */}
      <pointLight position={[0, -0.15, 0]} color="#06b6d4" intensity={1.2} distance={6} />
    </group>
  )
}
