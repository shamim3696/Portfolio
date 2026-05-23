import React, { lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useMetro } from './MetroContext'

const PANELS = {
  home:       lazy(() => import('./stations/HomeContent')),
  about:      lazy(() => import('./stations/AboutContent')),
  skills:     lazy(() => import('./stations/SkillsContent')),
  experience: lazy(() => import('./stations/ExperienceContent')),
  projects:   lazy(() => import('./stations/ProjectsContent')),
  contact:    lazy(() => import('./stations/ContactContent')),
}

export default function StationContent() {
  const { currentStation, isMoving } = useMetro()
  const Panel = PANELS[currentStation]

  return (
    <AnimatePresence mode="wait">
      {!isMoving && Panel && (
        <motion.div
          key={currentStation}
          className="metro-content-panel"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <Suspense fallback={<div className="station-loading">Loading…</div>}>
            <Panel />
          </Suspense>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
