import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDetective } from './DetectiveContext'
import { SECTIONS } from './constants'

export default function NavPanel() {
  const { section, setSection, phase } = useDetective()
  const [mobileOpen, setMobileOpen] = useState(false)

  function handleSelect(id) {
    setSection(id)
    setMobileOpen(false)
  }

  if (phase !== 'active') return null

  const navContent = (
    <>
      <div className="det-nav-header">
        <div className="det-nav-logo">◈</div>
        <div>
          <div className="det-nav-agency">SAM DETECTIVE AGENCY</div>
          <div className="det-nav-sub">CLASSIFIED · ACTIVE CASE</div>
        </div>
        {/* Mobile close */}
        <button className="det-nav-mobile-close" onClick={() => setMobileOpen(false)}>✕</button>
      </div>

      <div className="det-nav-divider" />
      <div className="det-nav-label">INVESTIGATION FILES</div>

      <nav className="det-nav-files">
        {SECTIONS.map((s) => {
          const isActive = s.id === section
          return (
            <button
              key={s.id}
              onClick={() => handleSelect(s.id)}
              className={`det-file-btn ${isActive ? 'det-file-active' : ''}`}
              style={isActive ? { borderLeftColor: s.color } : {}}
            >
              <span
                className="det-file-strip"
                style={{ background: isActive ? s.color : 'rgba(255,255,255,0.08)' }}
              />
              <div className="det-file-body">
                <div className="det-file-top">
                  <span className="det-file-code" style={{ color: isActive ? s.color : 'rgba(255,255,255,0.2)' }}>
                    {s.code}
                  </span>
                  {isActive && <span className="det-file-open" style={{ color: s.color }}>OPEN</span>}
                </div>
                <span className="det-file-label" style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.45)' }}>
                  {s.label.toUpperCase()}
                </span>
              </div>
              {isActive && <span className="det-file-arrow" style={{ color: s.color }}>◀</span>}
            </button>
          )
        })}
      </nav>

      <div className="det-nav-divider" />
      <p className="det-nav-footer">© {new Date().getFullYear()} · CONFIDENTIAL</p>
    </>
  )

  return (
    <>
      {/* Hamburger button — mobile only */}
      <button className="det-hamburger" onClick={() => setMobileOpen(true)}>
        <span /><span /><span />
      </button>

      {/* Mobile backdrop */}
      {mobileOpen && <div className="det-nav-backdrop" onClick={() => setMobileOpen(false)} />}

      {/* Desktop nav — always visible */}
      <motion.div
        className="det-nav det-nav-desktop"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {navContent}
      </motion.div>

      {/* Mobile nav — slide in overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="det-nav det-nav-mobile"
            initial={{ x: -260 }}
            animate={{ x: 0 }}
            exit={{ x: -260 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            {navContent}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
