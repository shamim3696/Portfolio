import React from 'react'

export default function AboutContent() {
  const backendSkills = ['Node.js','NestJS','Express.js','Apache Kafka','Redis','BullMQ','AWS','PostgreSQL','MongoDB','API Gateway','Socket.io']
  const frontendSkills = ['React.js','Next.js','Tailwind CSS','HTML / CSS']

  return (
    <div className="station-content">
      <div className="station-section-label">01 · About</div>

      <div className="station-stats-row">
        {[['1.5+','Years Experience'],['10+','Projects Built'],['2','Companies']].map(([v,l]) => (
          <div key={l} className="station-stat-card">
            <span className="station-stat-val">{v}</span>
            <span className="station-stat-label">{l}</span>
          </div>
        ))}
      </div>

      <p className="station-bio">
        Specializing in high-performance backend systems, event-driven microservices,
        and cloud infrastructure. Currently at{' '}
        <strong style={{ color: '#fff' }}>Taghyeer Technologies</strong> — building
        enterprise APIs and Kafka-powered pipelines.
      </p>

      <div className="station-skill-grid">
        <div>
          <p className="station-skill-heading">Backend</p>
          <div className="station-tag-wrap">
            {backendSkills.map(s => <span key={s} className="station-tag">{s}</span>)}
          </div>
        </div>
        <div>
          <p className="station-skill-heading">Frontend</p>
          <div className="station-tag-wrap">
            {frontendSkills.map(s => <span key={s} className="station-tag">{s}</span>)}
          </div>
          <p className="station-note">Supporting role — primary focus is backend</p>
        </div>
      </div>
    </div>
  )
}
