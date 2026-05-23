import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useMetro } from './MetroContext'
import { STATIONS } from './constants'

export default function TravelHUD() {
  const { isMoving, currentStation, targetStation } = useMetro()
  const dest = STATIONS.find(s => s.id === targetStation)

  return (
    <AnimatePresence>
      {isMoving && (
        <motion.div
          className="metro-travel-hud"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {/* Tunnel blur overlay */}
          <div className="metro-tunnel-overlay" />

          {/* HUD panel */}
          <div className="metro-hud-panel">
            <div className="metro-hud-row">
              <span className="metro-hud-label">DESTINATION</span>
              <span className="metro-hud-dest" style={{ color: dest?.color }}>
                {dest?.code} · {dest?.label}
              </span>
            </div>
            <div className="metro-hud-progress">
              <motion.div
                className="metro-hud-bar"
                style={{ background: dest?.color }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 4.8, ease: 'linear' }}
              />
            </div>
            <div className="metro-hud-status">
              <span className="metro-hud-blink" />
              Train in transit
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
