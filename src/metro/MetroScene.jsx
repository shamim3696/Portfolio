import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import Train          from './Train'
import TrackSystem    from './TrackSystem'
import TunnelSegment  from './TunnelSegment'
import StationPlatform from './StationPlatform'
import CameraController from './CameraController'
import { STATIONS }   from './constants'

function Scene() {
  return (
    <>
      {/* Atmosphere */}
      <fog attach="fog" args={['#050510', 25, 140]} />
      <ambientLight intensity={0.08} color="#1a1a3a" />

      {/* Global fill light from platform side */}
      <directionalLight position={[12, 8, 0]} color="#c8d0ff" intensity={0.4} />

      {/* Distant stars visible through tunnel gaps */}
      <Stars radius={180} depth={60} count={2500} factor={4} fade speed={0.5} />

      {/* Track runs the full length */}
      <TrackSystem />

      {/* Tunnel segments between each adjacent station pair */}
      {STATIONS.slice(0, -1).map((s, i) => {
        const next = STATIONS[i + 1]
        return (
          <TunnelSegment key={i} startZ={s.z - 19} endZ={next.z + 19} />
        )
      })}

      {/* Station platforms */}
      {STATIONS.map(s => (
        <StationPlatform key={s.id} station={s} />
      ))}

      {/* The train */}
      <Train />

      {/* Camera follows the train */}
      <CameraController />
    </>
  )
}

export default function MetroScene() {
  return (
    <Canvas
      camera={{ position: [10, 4.2, 12], fov: 65, near: 0.1, far: 400 }}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
      shadows
      style={{ position: 'absolute', inset: 0 }}
    >
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  )
}
