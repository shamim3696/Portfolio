import React, { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaLock, FaUnlock } from 'react-icons/fa'

const CASES = [
  {
    code: 'OP-METADREAM', label: 'MetaDream', sub: 'Forex & Gold Trading Connector',
    org: 'Taghyeer Technologies', color: '#ffb347', status: 'CLASSIFIED',
    synopsis: 'Real-time trading connector bridging Dream Emirates\' platform with live forex/gold markets. Sub-second latency via Kafka pipelines.',
    evidence: ['Real-time WebSocket trade execution','Kafka order pipeline for async processing','Redis caching for live price feeds','Risk management API with exposure controls'],
    tech: ['NestJS','Kafka','Redis','WebSocket','PostgreSQL','AWS'],
  },
  {
    code: 'OP-IDENTITY', label: 'Identity Service', sub: 'Project Setup & IAM',
    org: 'Taghyeer Technologies', color: '#ff3a3a', status: 'CLASSIFIED',
    synopsis: 'On-click project provisioning and identity management. Automates environment setup, SSO, and role-based access control.',
    evidence: ['One-click project environment provisioning','OAuth2 / JWT-based SSO across all apps','Role-based access control (RBAC)','API key lifecycle with scoping & expiry'],
    tech: ['NestJS','PostgreSQL','JWT','OAuth2','Redis','AWS'],
  },
  {
    code: 'OP-NOTIFHUB', label: 'Notification Hub', sub: 'Multi-Channel Delivery',
    org: 'Taghyeer Technologies', color: '#00ff88', status: 'CLASSIFIED',
    synopsis: 'Central notification service orchestrating WhatsApp, SMS, and AWS SES for all platform microservices via BullMQ queues.',
    evidence: ['WhatsApp Business API + SMS + AWS SES','BullMQ queues for high-throughput dispatch','Template management with variable substitution','Delivery tracking with retry & failure reporting'],
    tech: ['NestJS','BullMQ','Redis','AWS SES','WhatsApp API','Kafka'],
  },
  {
    code: 'OP-CHAT', label: 'Chatting App', sub: 'Real-Time Messaging',
    org: 'Personal Operation', color: '#4d9fff', status: 'DECLASSIFIED',
    synopsis: 'Real-time chat application with WebSocket messaging, friend system, and JWT authentication.',
    evidence: ['Bidirectional messaging via Socket.io','JWT authentication with token rotation','Friend request & contact management','MongoDB persistence with history'],
    tech: ['Node.js','Socket.io','MongoDB','JWT','React.js'],
    live: 'https://samchat99.netlify.app',
    github: 'https://github.com/shamim3696/ChatApplication',
  },
]

export default function ProjectsSection() {
  const [open, setOpen] = useState(null)

  return (
    <div className="det-section">
      <div className="det-file-header" style={{ borderColor: '#ff3a3a' }}>
        <span className="det-stamp" style={{ color: '#ff3a3a', borderColor: '#ff3a3a' }}>EVIDENCE VAULT</span>
        <span className="det-file-num">FILE-05 · ACTIVE OPERATIONS</span>
      </div>

      <h2 className="det-section-title">CASE OPERATIONS</h2>
      <p className="det-body-text" style={{ marginBottom: '14px' }}>
        Click any case file to unlock classified details.
      </p>

      <div className="det-cases">
        {CASES.map((c, i) => (
          <div key={i} className={`det-case-card ${open === i ? 'det-case-open' : ''}`} style={{ borderLeftColor: c.color }}>
            {/* Case header (always visible) */}
            <button className="det-case-header" onClick={() => setOpen(open === i ? null : i)}>
              <div className="det-case-left">
                <span className="det-case-lock" style={{ color: c.color }}>
                  {open === i ? <FaUnlock size={12}/> : <FaLock size={12}/>}
                </span>
                <div>
                  <div className="det-case-code" style={{ color: c.color }}>{c.code}</div>
                  <div className="det-case-name">{c.label}</div>
                </div>
              </div>
              <div className="det-case-right">
                <span className="det-case-org">{c.org}</span>
                <span
                  className="det-case-status"
                  style={{ color: c.status === 'DECLASSIFIED' ? '#00ff88' : '#ff3a3a',
                           borderColor: c.status === 'DECLASSIFIED' ? '#00ff8830' : '#ff3a3a30' }}
                >
                  {c.status}
                </span>
                {c.live   && <a href={c.live}   target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} style={{ color: 'rgba(255,255,255,0.35)' }}><FaExternalLinkAlt size={10}/></a>}
                {c.github && <a href={c.github} target="_blank" rel="noreferrer" onClick={e => e.stopPropagation()} style={{ color: 'rgba(255,255,255,0.35)' }}><FaGithub size={11}/></a>}
              </div>
            </button>

            {/* Expanded details */}
            {open === i && (
              <div className="det-case-body">
                <p className="det-case-sub" style={{ color: c.color }}>{c.sub}</p>
                <p className="det-body-text">{c.synopsis}</p>
                <div className="det-evidence-label" style={{ marginTop: '10px' }}>EVIDENCE LOG:</div>
                <ul className="det-objectives">
                  {c.evidence.map((e, j) => (
                    <li key={j}><span className="det-obj-bullet" style={{ color: c.color }}>▸</span>{e}</li>
                  ))}
                </ul>
                <div className="det-tag-row" style={{ marginTop: '10px' }}>
                  {c.tech.map(t => <span key={t} className="det-tag">{t}</span>)}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
