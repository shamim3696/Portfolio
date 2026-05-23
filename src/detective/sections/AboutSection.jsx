import React from 'react'

const PROFILE_ROWS = [
  ['CODENAME',    'SHAMIM AL MAMUN'],
  ['DESIGNATION', 'BACKEND ENGINEER'],
  ['STATUS',      'ACTIVE'],
  ['BASE',        'DHAKA, BANGLADESH'],
  ['AFFILIATION', 'TAGHYEER TECHNOLOGIES'],
  ['CLEARANCE',   'BACKEND SYSTEMS'],
]

export default function AboutSection() {
  return (
    <div className="det-section">
      <div className="det-file-header" style={{ borderColor: '#ff3a3a' }}>
        <span className="det-stamp" style={{ color: '#ff3a3a', borderColor: '#ff3a3a' }}>CLASSIFIED</span>
        <span className="det-file-num">FILE-01 · SUBJECT PROFILE</span>
      </div>

      <h2 className="det-section-title">SUBJECT DOSSIER</h2>

      {/* Profile grid */}
      <div className="det-profile-grid">
        {PROFILE_ROWS.map(([k, v]) => (
          <div key={k} className="det-profile-row">
            <span className="det-profile-key">{k}</span>
            <span className="det-profile-val">{v}</span>
          </div>
        ))}
      </div>

      <div className="det-divider" />

      {/* Bio */}
      <div className="det-evidence-block">
        <div className="det-evidence-label">ANALYST NOTES:</div>
        <p className="det-body-text">
          Subject demonstrates exceptional proficiency in distributed systems architecture
          and cloud-native development. Specializes in event-driven microservices, Kafka pipelines,
          and AWS infrastructure. Prior background includes MERN stack development at
          <strong style={{ color: '#ffb347' }}> Softvence Agency</strong>.
          Current mission: enterprise fintech systems at Taghyeer Technologies.
        </p>
      </div>

      {/* Stats */}
      <div className="det-stats-row">
        {[['1.5+','YEARS ACTIVE'],['10+','OPERATIONS'],['2','AGENCIES']].map(([v,l]) => (
          <div key={l} className="det-stat">
            <span className="det-stat-val">{v}</span>
            <span className="det-stat-key">{l}</span>
          </div>
        ))}
      </div>

      {/* Skills */}
      <div className="det-divider" />
      <div className="det-evidence-label">KNOWN CAPABILITIES:</div>
      <div className="det-skill-cols">
        <div>
          <p className="det-skill-cat">BACKEND ARSENAL</p>
          <div className="det-tag-row">
            {['Node.js','NestJS','Express.js','Kafka','Redis','BullMQ','AWS','PostgreSQL','MongoDB','API Gateway'].map(s => (
              <span key={s} className="det-tag">{s}</span>
            ))}
          </div>
        </div>
        <div>
          <p className="det-skill-cat">SUPPORT SYSTEMS</p>
          <div className="det-tag-row">
            {['React.js','Next.js','Tailwind CSS','Socket.io'].map(s => (
              <span key={s} className="det-tag det-tag--dim">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
