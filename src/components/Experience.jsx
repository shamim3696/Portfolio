import React from 'react'
import StationHeader from './StationHeader'

const experiences = [
  {
    company:   'Taghyeer Technologies',
    sub:       'Sector 16, Uttara, Dhaka',
    role:      'Backend Software Engineer',
    period:    'April 2025 – Present',
    duration:  '1+ Year',
    color:     '#06b6d4',
    current:   true,
    tech:      ['NestJS', 'Node.js', 'Apache Kafka', 'Redis', 'BullMQ', 'AWS', 'API Gateway', 'PostgreSQL', 'WebSocket'],
    highlights: [
      'Scalable microservices & REST APIs with NestJS and Node.js',
      'Event-driven pipelines with Apache Kafka for async processing',
      'AWS infrastructure management — EC2, S3, Lambda, SQS, SES',
      'Background job queues with BullMQ and Redis',
      'API Gateway: rate limiting, auth middleware, service routing',
      'Multi-channel notifications — WhatsApp, SMS, AWS SES',
    ],
  },
  {
    company:   'Softvence Agency',
    sub:       'Block F, Banasree, Rampura, Dhaka',
    role:      'MERN Stack Developer',
    period:    '2024 – Early 2025',
    duration:  '5 months',
    color:     '#7c3aed',
    current:   false,
    tech:      ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'Socket.io'],
    highlights: [
      'Full-stack web applications using the MERN stack',
      'RESTful APIs with third-party service integrations',
      'Real-time features via Socket.io (chat, notifications)',
      'Payment gateway integrations',
    ],
  },
]

export default function Experience() {
  return (
    <section
      id="Experience"
      className="section"
      style={{ background: 'linear-gradient(180deg,#0a0a0f 0%,#0d0d18 50%,#0a0a0f 100%)' }}
    >
      <div className="max-w-3xl mx-auto">
        <StationHeader code="02" name="Experience" color="#06b6d4" />

        <div className="relative">
          {/* Vertical timeline track */}
          <div
            className="absolute hidden sm:block"
            style={{
              left:       '-1px',
              top:        '8px',
              bottom:     '8px',
              width:      '1px',
              background: 'linear-gradient(to bottom, rgba(6,182,212,0.3), rgba(124,58,237,0.2), transparent)',
            }}
          />

          {experiences.map((exp, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="relative sm:pl-10 mb-8 last:mb-0"
            >
              {/* Timeline dot */}
              <div
                className="hidden sm:block absolute"
                style={{
                  left:      '-5px',
                  top:       '10px',
                  width:     '9px',
                  height:    '9px',
                  borderRadius: '50%',
                  background: exp.color,
                  boxShadow: `0 0 8px ${exp.color}90`,
                }}
              />

              {/* Card */}
              <div className="card p-6 hover-lift">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="text-white font-medium text-base leading-tight">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span
                          className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                          style={{
                            background: 'rgba(6,182,212,0.12)',
                            color:      '#06b6d4',
                            border:     '1px solid rgba(6,182,212,0.2)',
                          }}
                        >
                          Current
                        </span>
                      )}
                    </div>
                    <p className="font-medium text-sm" style={{ color: exp.color }}>
                      {exp.company}
                    </p>
                    {exp.sub && (
                      <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.28)' }}>
                        {exp.sub}
                      </p>
                    )}
                  </div>
                  <div className="shrink-0 text-left sm:text-right">
                    <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>{exp.period}</p>
                    <p className="text-xs font-medium mt-0.5" style={{ color: exp.color }}>
                      {exp.duration}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div
                  className="mb-4"
                  style={{
                    height:     '1px',
                    background: `linear-gradient(to right, ${exp.color}28, transparent)`,
                  }}
                />

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2.5 text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                      <span
                        className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                        style={{ background: exp.color, opacity: 0.7 }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.tech.map((t, j) => (
                    <span key={j} className="tag" style={{ fontSize: '11px', padding: '3px 10px' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
