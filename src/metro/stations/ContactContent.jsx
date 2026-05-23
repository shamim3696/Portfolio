import React from 'react'
import { FaFacebook, FaGithubSquare, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const socials = [
  { icon: <FaEnvelope size={15}/>,     href: 'mailto:shamim36960@gmail.com',                label: 'Gmail',    color: '#EA4335' },
  { icon: <FaLinkedin size={17}/>,     href: 'https://www.linkedin.com/in/shamim3696/',     label: 'LinkedIn', color: '#0A66C2' },
  { icon: <FaFacebook size={17}/>,     href: 'https://www.facebook.com/shamim3696/',        label: 'Facebook', color: '#1877F2' },
  { icon: <FaGithubSquare size={17}/>, href: 'https://github.com/shamim3696',              label: 'GitHub',   color: '#e7e7e7' },
]

export default function ContactContent() {
  return (
    <div className="station-content">
      <div className="station-section-label">05 · Contact</div>
      <h2 className="station-section-title">Get In Touch</h2>

      <p className="station-section-desc" style={{ maxWidth: '400px' }}>
        Open to new opportunities and collaborations.
        Let's build something great together.
      </p>

      <div className="station-contact-email">
        <FaEnvelope size={14} style={{ color: '#06b6d4' }} />
        <a href="mailto:shamim36960@gmail.com" style={{ color: '#06b6d4' }}>
          shamim36960@gmail.com
        </a>
      </div>

      <div className="station-divider" />

      <p className="station-skill-heading" style={{ marginBottom: '12px' }}>Connect</p>
      <div className="station-socials-row">
        {socials.map((s, i) => (
          <a
            key={i}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="station-social-btn"
            onMouseEnter={e => { e.currentTarget.style.color = s.color; e.currentTarget.style.borderColor = s.color + '40' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
          >
            {s.icon}
            <span>{s.label}</span>
          </a>
        ))}
      </div>

      <p className="station-footer-copy">
        © {new Date().getFullYear()} Shamim Al Mamun · Backend Software Engineer
      </p>
    </div>
  )
}
