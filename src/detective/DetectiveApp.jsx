import React from 'react'
import { DetectiveProvider } from './DetectiveContext'
import DetectiveScene from './DetectiveScene'
import IntroOverlay from './IntroOverlay'
import NavPanel from './NavPanel'
import ContentPanel from './ContentPanel'
import DustMotes from './DustMotes'
import '../detective.css'

export default function DetectiveApp() {
  return (
    <DetectiveProvider>
      <div className="det-root">
        {/* 3D background scene */}
        <div className="det-scene-layer">
          <DetectiveScene />
        </div>

        {/* Film grain + scanlines + vignette overlays */}
        <div className="det-grain" />
        <div className="det-scanlines" />
        <div className="det-vignette" />
        <DustMotes />

        {/* UI layers */}
        <IntroOverlay />

        <div className="det-ui-layer">
          <NavPanel />
          <ContentPanel />
        </div>
      </div>
    </DetectiveProvider>
  )
}
