import React from 'react'
import { FaFacebook, FaGithubSquare, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import StationHeader from './StationHeader'

const socials = [
  { icon: <FaEnvelope     size={15} />, href: 'mailto:shamim36960@gmail.com',                      label: 'Gmail',    color: '#EA4335' },
  { icon: <FaLinkedin     size={17} />, href: 'https://www.linkedin.com/in/shamim3696/',            label: 'LinkedIn', color: '#0A66C2' },
  { icon: <FaFacebook     size={17} />, href: 'https://www.facebook.com/shamim3696/',               label: 'Facebook', color: '#1877F2' },
  { icon: <FaGithubSquare size={17} />, href: 'https://github.com/shamim-code',                     label: 'GitHub',   color: '#e7e7e7' },
]

export default function Footer() {
  return (
    <section
      id="Contact"
      className="section"
      style={{ background: 'linear-gradient(180deg,#0a0a0f 0%,#0d0d18 60%,#0a0a0f 100%)' }}
    >
      <div className="max-w-2xl mx-auto">
        <StationHeader code="05" name="Contact" color="#7c3aed" />

        {/* Intro */}
        <p
          data-aos="fade-up"
          className="mb-10 leading-relaxed"
          style={{ fontSize: '16px', color: 'rgba(255,255,255,0.45)', maxWidth: '440px' }}
        >
          Open to new opportunities and collaborations.
          Let's build something great together.
        </p>

        {/* Socials */}
        <div data-aos="fade-up" className="divider mb-8" />

        <div className="flex flex-wrap gap-3">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition-all duration-200"
              style={{
                padding:      '8px 14px',
                borderRadius: '8px',
                fontSize:     '13px',
                color:        'rgba(255,255,255,0.45)',
                border:       '1px solid rgba(255,255,255,0.07)',
                background:   'rgba(255,255,255,0.02)',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color       = s.color
                e.currentTarget.style.borderColor = `${s.color}30`
                e.currentTarget.style.background  = `${s.color}0a`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color       = 'rgba(255,255,255,0.45)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.background  = 'rgba(255,255,255,0.02)'
              }}
            >
              {s.icon}
              <span>{s.label}</span>
            </a>
          ))}
        </div>

        {/* Footer line */}
        <p className="mt-12 text-xs" style={{ color: 'rgba(255,255,255,0.15)' }}>
          © {new Date().getFullYear()} Shamim Al Mamun · Backend Software Engineer
        </p>
      </div>
    </section>
  )
}
