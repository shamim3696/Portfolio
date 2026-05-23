import React from 'react'

const EXP = [
  {
    role: 'Backend Software Engineer', company: 'Taghyeer Technologies',
    sub: 'Sector 16, Uttara, Dhaka', period: 'April 2025 – Present', duration: '1+ Year',
    color: '#06b6d4', current: true,
    tech: ['NestJS','Kafka','Redis','BullMQ','AWS','PostgreSQL','WebSocket'],
    highlights: [
      'Scalable microservices & REST APIs with NestJS',
      'Event-driven pipelines with Apache Kafka',
      'AWS infrastructure: EC2, S3, Lambda, SQS, SES',
      'API Gateway: rate limiting, auth, routing',
      'Multi-channel notifications — WhatsApp, SMS, SES',
    ],
  },
  {
    role: 'MERN Stack Developer', company: 'Softvence Agency',
    sub: 'Block F, Banasree, Rampura, Dhaka', period: '2024 – Early 2025', duration: '5 months',
    color: '#7c3aed', current: false,
    tech: ['Node.js','Express.js','React.js','MongoDB','Socket.io'],
    highlights: [
      'Full-stack MERN applications',
      'RESTful APIs with third-party integrations',
      'Real-time features via Socket.io',
      'Payment gateway integrations',
    ],
  },
]

export default function ExperienceContent() {
  return (
    <div className="station-content">
      <div className="station-section-label">03 · Experience</div>
      <h2 className="station-section-title">Work Timeline</h2>

      <div className="station-exp-list">
        {EXP.map((e, i) => (
          <div key={i} className="station-exp-card" style={{ borderLeftColor: e.color }}>
            <div className="station-exp-header">
              <div>
                <div className="station-exp-role-row">
                  <span className="station-exp-role">{e.role}</span>
                  {e.current && <span className="station-exp-badge" style={{ color: e.color, borderColor: e.color + '40' }}>Current</span>}
                </div>
                <div className="station-exp-company" style={{ color: e.color }}>{e.company}</div>
                <div className="station-exp-sub">{e.sub}</div>
              </div>
              <div className="station-exp-period">
                <span>{e.period}</span>
                <span style={{ color: e.color }}>{e.duration}</span>
              </div>
            </div>

            <div className="station-exp-divider" style={{ background: e.color + '25' }} />

            <ul className="station-exp-highlights">
              {e.highlights.map((h, j) => (
                <li key={j}>
                  <span className="station-exp-dot" style={{ background: e.color }} />
                  {h}
                </li>
              ))}
            </ul>

            <div className="station-tag-wrap mt-3">
              {e.tech.map(t => <span key={t} className="station-tag" style={{ fontSize: '11px' }}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
