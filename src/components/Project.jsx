import React from 'react'
import ProjectCard from './ProjectCard'
import StationHeader from './StationHeader'

export const projects = [
  {
    title:       'MetaDream',
    subtitle:    'Forex & Gold Trading Connector',
    company:     'Taghyeer Technologies / Dream Emirates',
    type:        'Enterprise Backend',
    color:       '#06b6d4',
    description: 'Real-time trading connector bridging Dream Emirates\' platform with live forex and gold markets, handling high-frequency execution with sub-second latency.',
    features: [
      'Real-time WebSocket trade execution & market data streaming',
      'Kafka-powered order pipeline for async trade processing',
      'Redis caching for live price feeds & session management',
      'Risk management API with position limits & exposure controls',
      'RESTful order management with full audit trail',
    ],
    tags:       ['NestJS', 'Kafka', 'Redis', 'WebSocket', 'PostgreSQL', 'AWS'],
    livelink:   null,
    githublink: null,
  },
  {
    title:       'Identity Service',
    subtitle:    'Project Setup & IAM',
    company:     'Taghyeer Technologies',
    type:        'Microservice',
    color:       '#7c3aed',
    description: 'On-click project provisioning and identity management service. Automates environment setup, role assignment, and access control across the platform.',
    features: [
      'One-click project environment provisioning via API',
      'OAuth2 / JWT-based SSO across all platform apps',
      'Role-based access control with granular permissions',
      'API key lifecycle management with scoping and expiry',
      'Full audit logging for all identity & access events',
    ],
    tags:       ['NestJS', 'PostgreSQL', 'JWT', 'OAuth2', 'Redis', 'AWS'],
    livelink:   null,
    githublink: null,
  },
  {
    title:       'Notification Hub',
    subtitle:    'Multi-Channel Delivery Service',
    company:     'Taghyeer Technologies',
    type:        'Microservice',
    color:       '#06b6d4',
    description: 'Central notification orchestration service managing all communication channels — WhatsApp, SMS, and email via AWS SES — for every app in the platform.',
    features: [
      'Multi-channel delivery: WhatsApp Business API, SMS, AWS SES',
      'BullMQ job queues for high-throughput async dispatch',
      'Template management with variable substitution',
      'Delivery tracking with retry logic & failure reporting',
      'Unified API consumed by all platform microservices',
    ],
    tags:       ['NestJS', 'BullMQ', 'Redis', 'AWS SES', 'WhatsApp API', 'Kafka'],
    livelink:   null,
    githublink: null,
  },
  {
    title:       'Chatting App',
    subtitle:    'Real-Time Messaging',
    company:     'Personal Project',
    type:        'Full Stack',
    color:       '#7c3aed',
    description: 'Real-time chat application with WebSocket messaging, friend system, and JWT authentication.',
    features: [
      'Real-time bidirectional messaging via Socket.io',
      'JWT authentication with refresh token rotation',
      'Friend request & contact management',
      'MongoDB persistence with message history',
    ],
    tags:       ['Node.js', 'Socket.io', 'MongoDB', 'JWT', 'React.js'],
    livelink:   'https://samchat99.netlify.app',
    githublink: 'https://github.com/shamim3696/ChatApplication',
  },
]

export default function Project() {
  return (
    <section
      id="Projects"
      className="section"
      style={{ background: '#0a0a0f' }}
    >
      <div className="max-w-3xl mx-auto">
        <StationHeader code="04" name="Projects" color="#06b6d4" />
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={i} project={p} delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  )
}
