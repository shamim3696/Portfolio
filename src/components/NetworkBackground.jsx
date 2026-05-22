import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Scene() {
  const { pGeo, vels } = useMemo(() => {
    const COUNT = 520
    const pos = new Float32Array(COUNT * 3)
    const vel = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 28
      pos[i * 3 + 1] = (Math.random() - 0.5) * 18
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12
      vel[i * 3]     = (Math.random() - 0.5) * 0.003
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.002
      vel[i * 3 + 2] = (Math.random() - 0.5) * 0.0015
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    return { pGeo: g, vels: vel }
  }, [])

  const orb1  = useRef()
  const orb2  = useRef()
  const orb3  = useRef()
  const ring1 = useRef()
  const ring2 = useRef()
  const ring3 = useRef()
  const ring4 = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()

    // Drift particles
    const pos = pGeo.attributes.position.array
    const COUNT = pos.length / 3
    for (let i = 0; i < COUNT; i++) {
      pos[i * 3]     += vels[i * 3]
      pos[i * 3 + 1] += vels[i * 3 + 1]
      pos[i * 3 + 2] += vels[i * 3 + 2]
      if (Math.abs(pos[i * 3])     > 14) vels[i * 3]     *= -1
      if (Math.abs(pos[i * 3 + 1]) > 9)  vels[i * 3 + 1] *= -1
      if (Math.abs(pos[i * 3 + 2]) > 6)  vels[i * 3 + 2] *= -1
    }
    pGeo.attributes.position.needsUpdate = true

    // Breathe orbs
    if (orb1.current) {
      const s = 1 + Math.sin(t * 0.38) * 0.2
      orb1.current.scale.set(s, s, s)
    }
    if (orb2.current) {
      const s = 1 + Math.cos(t * 0.3) * 0.16
      orb2.current.scale.set(s, s, s)
    }
    if (orb3.current) {
      const s = 1 + Math.sin(t * 0.22 + 1) * 0.13
      orb3.current.scale.set(s, s, s)
    }

    // Rotate rings
    if (ring1.current) {
      ring1.current.rotation.z = t * 0.09
      ring1.current.rotation.x = 0.5 + Math.sin(t * 0.05) * 0.18
    }
    if (ring2.current) {
      ring2.current.rotation.z = -t * 0.06
      ring2.current.rotation.y = t * 0.07
    }
    if (ring3.current) {
      ring3.current.rotation.x = t * 0.05
      ring3.current.rotation.z = Math.cos(t * 0.035) * 0.6
    }
    if (ring4.current) {
      ring4.current.rotation.y = t * 0.04
      ring4.current.rotation.x = -t * 0.03
    }
  })

  return (
    <group>
      {/* Star field */}
      <points geometry={pGeo}>
        <pointsMaterial size={0.04} color="#ffffff" transparent opacity={0.5} sizeAttenuation />
      </points>

      {/* Cyan glow orb — top left, large */}
      <mesh ref={orb1} position={[-7, 4.5, -16]}>
        <sphereGeometry args={[5, 8, 8]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.075} />
      </mesh>

      {/* Violet glow orb — bottom right, large */}
      <mesh ref={orb2} position={[8, -4.5, -20]}>
        <sphereGeometry args={[7, 8, 8]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.06} />
      </mesh>

      {/* Small cyan accent orb — near center */}
      <mesh ref={orb3} position={[0, 0.5, -5]}>
        <sphereGeometry args={[2, 8, 8]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.045} />
      </mesh>

      {/* Ring 1 — cyan, mid-right */}
      <mesh ref={ring1} position={[3, 1, -10]}>
        <torusGeometry args={[3.8, 0.014, 16, 120]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.18} />
      </mesh>

      {/* Ring 2 — violet, left */}
      <mesh ref={ring2} position={[-4, -1.5, -13]}>
        <torusGeometry args={[5.5, 0.009, 16, 120]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.12} />
      </mesh>

      {/* Ring 3 — soft purple, center */}
      <mesh ref={ring3} position={[0.5, 0, -7]}>
        <torusGeometry args={[2.4, 0.007, 16, 80]} />
        <meshBasicMaterial color="#a78bfa" transparent opacity={0.1} />
      </mesh>

      {/* Ring 4 — cyan, small accent */}
      <mesh ref={ring4} position={[-1, 2, -6]}>
        <torusGeometry args={[1.6, 0.006, 12, 60]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.08} />
      </mesh>

      {/* Lights */}
      <ambientLight intensity={0.07} />
      <pointLight position={[-5, 4, -4]}  color="#06b6d4" intensity={3.0} distance={24} />
      <pointLight position={[ 6, -3, -6]} color="#7c3aed" intensity={2.5} distance={28} />
      <pointLight position={[ 0,  2, -2]} color="#a78bfa" intensity={1.2} distance={16} />
    </group>
  )
}

export default function NetworkBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 58 }}
      gl={{ antialias: true, alpha: true }}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    >
      <Scene />
    </Canvas>
  )
}
