import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const COUNT = 1800

export default function Rain() {
  const geoRef = useRef()

  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3)
    const speeds    = new Float32Array(COUNT)
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 32
      positions[i * 3 + 1] = Math.random() * 22 - 4
      positions[i * 3 + 2] = (Math.random() - 0.5) * 28
      speeds[i] = 0.08 + Math.random() * 0.06
    }
    return { positions, speeds }
  }, [])

  useFrame(() => {
    if (!geoRef.current) return
    const pos = geoRef.current.attributes.position.array
    for (let i = 0; i < COUNT; i++) {
      pos[i * 3 + 1] -= speeds[i]
      if (pos[i * 3 + 1] < -5) pos[i * 3 + 1] = 18
    }
    geoRef.current.attributes.position.needsUpdate = true
  })

  return (
    <points>
      <bufferGeometry ref={geoRef}>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={COUNT}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        color="#6688aa"
        transparent
        opacity={0.35}
        sizeAttenuation
      />
    </points>
  )
}
