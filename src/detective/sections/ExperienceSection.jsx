import React from 'react'

const MISSIONS = [
  {
    code: 'MISSION-ALPHA',
    role: 'Backend Software Engineer',
    org: 'Taghyeer Technologies',
    location: 'Sector 16, Uttara, Dhaka',
    period: 'April 2025 – Present',
    duration: '1+ YEAR',
    status: 'ACTIVE',
    color: '#ffb347',
    clearance: 'TOP SECRET',
    objectives: [
      'Scalable microservices & REST APIs with NestJS',
      'Event-driven pipelines with Apache Kafka',
      'AWS infrastructure: EC2, S3, Lambda, SQS, SES',
      'API Gateway: rate limiting, auth, service routing',
      'Multi-channel notifications — WhatsApp, SMS, SES',
    ],
    tech: ['NestJS','Kafka','Redis','BullMQ','AWS','PostgreSQL','WebSocket'],
  },
  {
    code: 'MISSION-BETA',
    role: 'MERN Stack Developer',
    org: 'Softvence Agency',
    location: 'Block F, Banasree, Rampura, Dhaka',
    period: '2024 – Early 2025',
    duration: '5 MONTHS',
    status: 'COMPLETE',
    color: '#4d9fff',
    clearance: 'CONFIDENTIAL',
    objectives: [
      'Full-stack MERN web applications',
      'RESTful APIs with third-party integrations',
      'Real-time features via Socket.io',
      'Payment gateway integrations',
    ],
    tech: ['Node.js','Express.js','React.js','MongoDB','Socket.io'],
  },
]

export default function ExperienceSection() {
  return (
    <div className="det-section">
      <div className="det-file-header" style={{ borderColor: '#4d9fff' }}>
        <span className="det-stamp" style={{ color: '#4d9fff', borderColor: '#4d9fff' }}>MISSION LOG</span>
        <span className="det-file-num">FILE-03 · CLASSIFIED RECORD</span>
      </div>

      <h2 className="det-section-title">FIELD OPERATIONS HISTORY</h2>

      <div className="det-missions">
        {MISSIONS.map((m, i) => (
          <div key={i} className="det-mission-card" style={{ borderTopColor: m.color }}>
            <div className="det-mission-header">
              <div>
                <div className="det-mission-code" style={{ color: m.color }}>{m.code}</div>
                <div className="det-mission-role">{m.role}</div>
                <div className="det-mission-org">{m.org}</div>
                <div className="det-mission-loc">{m.location}</div>
              </div>
              <div className="det-mission-meta">
                <span className={`det-mission-status ${m.status === 'ACTIVE' ? 'det-status-active' : 'det-status-done'}`}>
                  {m.status}
                </span>
                <span className="det-mission-period">{m.period}</span>
                <span className="det-mission-dur" style={{ color: m.color }}>{m.duration}</span>
                <span className="det-clearance-badge">{m.clearance}</span>
              </div>
            </div>

            <div className="det-divider" style={{ marginBlock: '10px' }} />

            <div className="det-evidence-label">OBJECTIVES COMPLETED:</div>
            <ul className="det-objectives">
              {m.objectives.map((o, j) => (
                <li key={j}>
                  <span className="det-obj-bullet" style={{ color: m.color }}>▸</span>
                  {o}
                </li>
              ))}
            </ul>

            <div className="det-tag-row" style={{ marginTop: '10px' }}>
              {m.tech.map(t => <span key={t} className="det-tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
