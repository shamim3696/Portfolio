import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useMetro } from './MetroContext'
import { STATIONS } from './constants'

const _pos  = new THREE.Vector3()
const _look = new THREE.Vector3()

export default function CameraController() {
  const { isMoving, currentStation, trainZRef } = useMetro()
  const { camera } = useThree()
  const lookTarget = useRef(new THREE.Vector3())

  useFrame((_, delta) => {
    const tz = trainZRef.current

    if (isMoving) {
      // Side-cinematic follow: behind and to the platform side
      _pos.set(11, 5.5, tz + 16)
      _look.set(0, 1.8, tz - 4)
    } else {
      // At-station view: on the platform looking at board + train
      const st = STATIONS.find(s => s.id === currentStation)
      const sz = st ? st.z : 0
      _pos.set(10, 4.2, sz + 10)
      _look.set(0, 2.0, sz - 2)
    }

    const speed = isMoving ? 2.8 : 1.6
    camera.position.lerp(_pos, delta * speed)
    lookTarget.current.lerp(_look, delta * speed)
    camera.lookAt(lookTarget.current)
  })

  return null
}
