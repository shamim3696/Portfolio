import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const PROJECTS = [
  {
    title: 'MetaDream', subtitle: 'Forex & Gold Trading Connector',
    company: 'Taghyeer Technologies', type: 'Enterprise Backend', color: '#06b6d4',
    description: 'Real-time trading connector bridging Dream Emirates\' platform with live forex and gold markets, sub-second latency.',
    tags: ['NestJS','Kafka','Redis','WebSocket','PostgreSQL','AWS'],
  },
  {
    title: 'Identity Service', subtitle: 'Project Setup & IAM',
    company: 'Taghyeer Technologies', type: 'Microservice', color: '#7c3aed',
    description: 'On-click project provisioning and identity management — automates env setup, role assignment, SSO across the platform.',
    tags: ['NestJS','PostgreSQL','JWT','OAuth2','Redis','AWS'],
  },
  {
    title: 'Notification Hub', subtitle: 'Multi-Channel Delivery',
    company: 'Taghyeer Technologies', type: 'Microservice', color: '#06b6d4',
    description: 'Central notification service managing WhatsApp, SMS, and AWS SES for all platform apps with BullMQ queuing.',
    tags: ['NestJS','BullMQ','Redis','AWS SES','WhatsApp API','Kafka'],
  },
  {
    title: 'Chatting App', subtitle: 'Real-Time Messaging',
    company: 'Personal Project', type: 'Full Stack', color: '#7c3aed',
    description: 'Real-time chat with WebSocket messaging, friend system, and JWT authentication.',
    tags: ['Node.js','Socket.io','MongoDB','JWT','React.js'],
    live: 'https://samchat99.netlify.app',
    github: 'https://github.com/shamim3696/ChatApplication',
  },
]

export default function ProjectsContent() {
  return (
    <div className="station-content">
      <div className="station-section-label">04 · Projects</div>
      <h2 className="station-section-title">Featured Work</h2>

      <div className="station-projects-grid">
        {PROJECTS.map((p, i) => (
          <div key={i} className="station-project-card" style={{ borderTopColor: p.color }}>
            <div className="station-project-top">
              <span className="station-project-type" style={{ color: p.color, background: p.color + '12', border: `1px solid ${p.color}25` }}>
                {p.type}
              </span>
              <div className="station-project-links">
                {p.live   && <a href={p.live}   target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.4)' }}><FaExternalLinkAlt size={11} /></a>}
                {p.github && <a href={p.github} target="_blank" rel="noreferrer" style={{ color: 'rgba(255,255,255,0.4)' }}><FaGithub size={12} /></a>}
              </div>
            </div>

            <div className="station-project-title">{p.title}</div>
            <div className="station-project-subtitle" style={{ color: p.color }}>{p.subtitle}</div>
            <div className="station-project-company">{p.company}</div>
            <p className="station-project-desc">{p.description}</p>

            <div className="station-tag-wrap">
              {p.tags.map(t => <span key={t} className="station-tag" style={{ fontSize: '10px', padding: '3px 9px' }}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
