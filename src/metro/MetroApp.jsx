import React from 'react'
import { MetroProvider } from './MetroContext'
import MetroScene     from './MetroScene'
import NavBoard       from './NavBoard'
import StationContent from './StationContent'
import TravelHUD      from './TravelHUD'

export default function MetroApp() {
  return (
    <MetroProvider>
      <div className="metro-root">
        {/* 3D Canvas fills the background */}
        <MetroScene />

        {/* HTML overlay layer */}
        <div className="metro-overlay">
          {/* Left: Nav board (station signboard) */}
          <NavBoard />

          {/* Right: Station content panel */}
          <StationContent />
        </div>

        {/* Travel HUD (top center when moving) */}
        <TravelHUD />
      </div>
    </MetroProvider>
  )
}
