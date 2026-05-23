import { useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import gsap from 'gsap'
import { useDetective } from './DetectiveContext'

const LOOK_AT = new THREE.Vector3(-2.5, 1.4, -0.8)
const _target = new THREE.Vector3()

export default function CameraController() {
  const { phase, setPhase, camTargetRef } = useDetective()
  const { camera } = useThree()

  useEffect(() => {
    if (phase === 'intro') return
    // Run dolly-in once phase moves to 'entering'
    if (phase === 'entering') {
      camTargetRef.current = { x: 0, y: 3.5, z: 13 }
      camera.position.set(0, 3.5, 13)
      gsap.to(camTargetRef.current, {
        x: 4.5, y: 2.8, z: 6,
        duration: 3.2,
        ease: 'power2.inOut',
        onComplete: () => setPhase('active'),
      })
    }
  }, [phase])

  useFrame((_, delta) => {
    const t = camTargetRef.current
    _target.set(t.x, t.y, t.z)
    camera.position.lerp(_target, delta * (phase === 'entering' ? 8 : 2))
    camera.lookAt(LOOK_AT)
  })

  return null
}
