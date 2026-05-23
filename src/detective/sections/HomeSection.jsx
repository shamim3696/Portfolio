import React from 'react'
import { useDetective } from '../DetectiveContext'

export default function HomeSection() {
  const { setSection } = useDetective()
  return (
    <div className="det-section">
      <div className="det-file-header" style={{ borderColor: '#ffb347' }}>
        <span className="det-stamp" style={{ color: '#ffb347', borderColor: '#ffb347' }}>IDENTITY FILE</span>
        <span className="det-file-num">FILE-00 · PRIORITY: HIGH</span>
      </div>

      <div className="det-redact-bar">SUBJECT IDENTITY · DECLASSIFIED</div>

      <h1 className="det-hero-name">
        <span className="det-hero-w">Shamim </span>
        <span className="det-hero-amber">Al Mamun</span>
      </h1>

      <div className="det-typewriter-wrap">
        <span className="det-typewriter">Backend Software Engineer</span>
        <span className="det-cursor">_</span>
      </div>

      <p className="det-body-text" style={{ marginTop: '16px', marginBottom: '20px' }}>
        Subject specializes in high-performance backend systems, event-driven
        microservices, and cloud infrastructure. Currently operating at
        <strong style={{ color: '#ffb347' }}> Taghyeer Technologies</strong>.
      </p>

      <div className="det-tech-badges">
        {['Node.js','NestJS','AWS','Kafka','Redis','BullMQ'].map((t, i) => (
          <span key={i} className="det-tech-badge">{t}</span>
        ))}
      </div>

      <div className="det-evidence-tag">
        <span className="det-evidence-dot" />
        SUBJECT IS OPEN TO NEW OPPORTUNITIES
      </div>

      <div className="det-cta-row">
        <button className="det-btn-primary" onClick={() => setSection('projects')}>OPEN CASE FILES →</button>
        <button className="det-btn-outline" onClick={() => setSection('contact')}>MAKE CONTACT</button>
      </div>
    </div>
  )
}
