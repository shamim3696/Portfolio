import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDetective } from './DetectiveContext'
import { INTRO_LINES } from './constants'

export default function IntroOverlay() {
  const { phase, setPhase } = useDetective()
  const [lineIdx, setLineIdx] = useState(0)
  const [done,    setDone]    = useState(false)

  useEffect(() => {
    if (phase !== 'intro') return

    const timers = INTRO_LINES.map((_, i) =>
      setTimeout(() => setLineIdx(i), i * 900)
    )
    const endTimer = setTimeout(() => {
      setDone(true)
      setTimeout(() => setPhase('entering'), 600)
    }, INTRO_LINES.length * 900 + 400)

    return () => { timers.forEach(clearTimeout); clearTimeout(endTimer) }
  }, [phase])

  return (
    <AnimatePresence>
      {phase === 'intro' && (
        <motion.div
          className="det-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Agency badge */}
          <div className="det-intro-badge">
            <span className="det-intro-shield">◈</span>
            <span>SAM DETECTIVE AGENCY · CLASSIFIED</span>
          </div>

          {/* Terminal lines */}
          <div className="det-intro-lines">
            {INTRO_LINES.map((line, i) => (
              <motion.p
                key={i}
                className={`det-intro-line ${i === INTRO_LINES.length - 1 ? 'det-intro-line--hero' : ''}`}
                initial={{ opacity: 0, x: -20 }}
                animate={i <= lineIdx ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4 }}
              >
                {i < INTRO_LINES.length - 1 && <span className="det-intro-prompt">{'>'}</span>}
                {line}
                {i === lineIdx && i === INTRO_LINES.length - 1 && (
                  <span className="det-cursor">_</span>
                )}
              </motion.p>
            ))}
          </div>

          {/* Skip button */}
          <button className="det-intro-skip" onClick={() => { setDone(true); setPhase('entering') }}>
            ENTER &nbsp;→
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
