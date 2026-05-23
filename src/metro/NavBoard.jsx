import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useMetro } from './MetroContext'
import { STATIONS } from './constants'

export default function NavBoard() {
  const { currentStation, navigate, isMoving } = useMetro()
  const cur = STATIONS.find(s => s.id === currentStation)

  return (
    <div className="metro-nav-board">
      {/* Header */}
      <div className="mnb-header">
        <div className="mnb-station-info">
          <span className="mnb-code" style={{ color: cur?.color }}>
            {cur?.code}
          </span>
          <span className="mnb-name">{cur?.label} Station</span>
        </div>
        <div className="mnb-line-indicator" style={{ background: cur?.color }} />
      </div>

      <div className="mnb-divider" />

      {/* Route list */}
      <div className="mnb-label">METRO LINE · ALL STATIONS</div>
      <nav className="mnb-routes">
        {STATIONS.map((s, i) => {
          const isActive = s.id === currentStation
          return (
            <button
              key={s.id}
              onClick={() => navigate(s.id)}
              disabled={isMoving}
              className={`mnb-route-btn ${isActive ? 'mnb-route-active' : ''}`}
            >
              <span
                className="mnb-route-dot"
                style={{
                  background: isActive ? s.color : 'transparent',
                  borderColor: isActive ? s.color : 'rgba(255,255,255,0.2)',
                  boxShadow: isActive ? `0 0 6px ${s.color}` : 'none',
                }}
              />
              <span className="mnb-route-code" style={{ color: isActive ? s.color : 'rgba(255,255,255,0.3)' }}>
                {s.code}
              </span>
              <span className="mnb-route-label" style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.5)', fontWeight: isActive ? 500 : 400 }}>
                {s.label}
              </span>
              {isActive
                ? <span className="mnb-here" style={{ color: s.color }}>● HERE</span>
                : <span className="mnb-arrow">→</span>
              }
            </button>
          )
        })}
      </nav>

      {/* Moving indicator */}
      <AnimatePresence>
        {isMoving && (
          <motion.div
            className="mnb-moving"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
          >
            <span className="mnb-moving-dot" />
            Train in transit…
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
