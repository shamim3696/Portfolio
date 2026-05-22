import React from 'react'
import { BiSolidInstitution } from 'react-icons/bi'
import { IoLocation }         from 'react-icons/io5'

export default function Card({ degree, index = 0 }) {
  return (
    <div
      className="card p-5 hover-lift"
      style={{
        opacity: 0,
        animation: `hero-fade-up 0.65s cubic-bezier(0.16,1,0.3,1) ${0.1 + index * 0.12}s forwards`,
      }}
    >
      {/* Top row */}
      <div className="flex justify-between items-start mb-4">
        <span
          className="text-[10px] font-medium px-2.5 py-1 rounded-full"
          style={{
            background: 'rgba(124,58,237,0.1)',
            color:      'rgba(124,58,237,0.85)',
            border:     '1px solid rgba(124,58,237,0.18)',
          }}
        >
          {degree.tag}
        </span>
        <span
          className="font-mono text-[10px]"
          style={{ color: 'rgba(255,255,255,0.28)', letterSpacing: '0.04em' }}
        >
          {degree.duration}
        </span>
      </div>

      {/* Degree label */}
      <p
        className="text-xs font-medium mb-1 px-2 py-0.5 rounded inline-block"
        style={{
          background: 'rgba(255,255,255,0.05)',
          color:      'rgba(255,255,255,0.5)',
          border:     '1px solid rgba(255,255,255,0.07)',
        }}
      >
        {degree.degree}
      </p>

      <p className="text-white font-medium text-sm leading-snug mt-2 mb-4">
        {degree.department}
      </p>

      {/* Divider */}
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)', marginBottom: '12px' }} />

      {/* Institution */}
      <div className="flex items-start gap-2 mb-2">
        <BiSolidInstitution size={13} style={{ color: 'rgba(124,58,237,0.7)', marginTop: '2px', flexShrink: 0 }} />
        <p className="text-xs leading-snug" style={{ color: 'rgba(255,255,255,0.45)' }}>
          {degree.institue}
        </p>
      </div>

      {/* Location */}
      <div className="flex items-start gap-2">
        <IoLocation size={13} style={{ color: 'rgba(6,182,212,0.65)', marginTop: '2px', flexShrink: 0 }} />
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
          {degree.address}
        </p>
      </div>
    </div>
  )
}
