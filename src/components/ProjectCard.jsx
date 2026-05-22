import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

export default function ProjectCard({ project, delay = 0 }) {
  const { title, subtitle, company, type, color, description, features, tags, livelink, githublink } = project

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className="card p-5 flex flex-col hover-lift"
      style={{ height: '100%' }}
    >
      {/* Type badge + links */}
      <div className="flex items-center justify-between mb-4">
        <span
          className="text-[10px] font-medium px-2.5 py-1 rounded-full"
          style={{
            background: `${color}10`,
            color:      `${color}cc`,
            border:     `1px solid ${color}22`,
            letterSpacing: '0.06em',
          }}
        >
          {type}
        </span>
        <div className="flex gap-3">
          {livelink && (
            <a
              href={livelink}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.28)' }}
              onMouseEnter={e => { e.currentTarget.style.color = color }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.28)' }}
              title="Live Demo"
            >
              <FaExternalLinkAlt size={12} />
            </a>
          )}
          {githublink && (
            <a
              href={githublink}
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-200"
              style={{ color: 'rgba(255,255,255,0.28)' }}
              onMouseEnter={e => { e.currentTarget.style.color = color }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.28)' }}
              title="Source Code"
            >
              <FaGithub size={13} />
            </a>
          )}
        </div>
      </div>

      {/* Title */}
      <div className="mb-3">
        <h3
          className="font-semibold text-white text-base leading-tight mb-0.5"
          style={{ letterSpacing: '-0.01em' }}
        >
          {title}
        </h3>
        <p className="text-sm" style={{ color }}>{subtitle}</p>
        <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.25)' }}>{company}</p>
      </div>

      {/* Divider */}
      <div
        className="mb-3"
        style={{ height: '1px', background: `linear-gradient(to right, ${color}20, transparent)` }}
      />

      {/* Description */}
      <p className="text-sm leading-relaxed mb-4 flex-shrink-0" style={{ color: 'rgba(255,255,255,0.48)' }}>
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-1.5 mb-4 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
            <span
              className="mt-1.5 w-1 h-1 rounded-full shrink-0"
              style={{ background: color, opacity: 0.65 }}
            />
            {f}
          </li>
        ))}
      </ul>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5 mt-auto pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        {tags.map((t, i) => (
          <span key={i} className="tag" style={{ fontSize: '10px', padding: '3px 9px' }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}
