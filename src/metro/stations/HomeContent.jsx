import React from 'react'

export default function HomeContent() {
  return (
    <div className="station-content">
      <div className="station-badge">
        <span className="station-badge-dot" />
        Open to opportunities · Backend SE
      </div>

      <h1 className="station-hero-name">
        <span className="station-hero-white">Shamim </span>
        <span className="station-hero-shimmer">Al Mamun</span>
      </h1>

      <p className="station-hero-role">Backend Software Engineer</p>

      <p className="station-hero-desc">
        Building scalable microservices and event-driven systems
        for high-growth startups and enterprise platforms.
      </p>

      <div className="station-tech-row">
        {[
          { label: 'Node.js',  color: '#68A063' },
          { label: 'NestJS',   color: '#E0234E' },
          { label: 'AWS',      color: '#FF9900' },
          { label: 'Kafka',    color: '#aaa'    },
          { label: 'Redis',    color: '#DC382D' },
          { label: 'BullMQ',   color: '#7c3aed' },
        ].map(t => (
          <span key={t.label} className="station-tech-pill" style={{ color: t.color, borderColor: t.color + '35', background: t.color + '12' }}>
            {t.label}
          </span>
        ))}
      </div>

      <div className="station-cta-row">
        <a href="#projects" className="station-btn-primary">View Projects →</a>
        <a href="#contact"  className="station-btn-outline">Get in Touch</a>
      </div>
    </div>
  )
}
