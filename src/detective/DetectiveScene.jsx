import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars }  from '@react-three/drei'
import OfficeRoom        from './OfficeRoom'
import Rain              from './Rain'
import CameraController  from './CameraController'

export default function DetectiveScene() {
  return (
    <Canvas
      camera={{ position: [0, 3.5, 13], fov: 62, near: 0.1, far: 300 }}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
      shadows
      style={{ position: 'absolute', inset: 0 }}
    >
      <Suspense fallback={null}>
        <fog attach="fog" args={['#06040a', 12, 90]} />

        {/* Very distant background stars (visible through window) */}
        <Stars radius={80} depth={40} count={1200} factor={3} fade speed={0} />

        <OfficeRoom />
        <Rain />
        <CameraController />
      </Suspense>
    </Canvas>
  )
}
