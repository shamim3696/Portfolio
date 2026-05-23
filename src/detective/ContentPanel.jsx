import React, { Suspense, lazy } from 'react'
import { useDetective } from './DetectiveContext'

const HomeSection       = lazy(() => import('./sections/HomeSection'))
const AboutSection      = lazy(() => import('./sections/AboutSection'))
const SkillsSection     = lazy(() => import('./sections/SkillsSection'))
const ExperienceSection = lazy(() => import('./sections/ExperienceSection'))
const ProjectsSection   = lazy(() => import('./sections/ProjectsSection'))
const ContactSection    = lazy(() => import('./sections/ContactSection'))

const SECTION_MAP = {
  home:       <HomeSection />,
  about:      <AboutSection />,
  skills:     <SkillsSection />,
  experience: <ExperienceSection />,
  projects:   <ProjectsSection />,
  contact:    <ContactSection />,
}

export default function ContentPanel() {
  const { phase, section: activeSection } = useDetective()

  if (phase !== 'active') return null

  return (
    <div className="det-content-panel" key={activeSection}>
      <Suspense fallback={
        <div className="det-loading">
          <span className="det-loading-dot" />
          <span className="det-loading-dot" style={{ animationDelay: '0.2s' }} />
          <span className="det-loading-dot" style={{ animationDelay: '0.4s' }} />
        </div>
      }>
        {SECTION_MAP[activeSection] ?? <HomeSection />}
      </Suspense>
    </div>
  )
}
