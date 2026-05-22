import React from 'react'

/**
 * Clean minimal section header.
 * @param {string} code  e.g. "01"
 * @param {string} name  e.g. "About"
 * @param {string} color accent color (default cyan)
 */
export default function StationHeader({ code, name, color = '#06b6d4' }) {
  return (
    <div className="mb-12">
      <p className="label mb-3">{code}</p>
      <h2
        className="font-light tracking-tight text-white"
        style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1 }}
      >
        {name}
      </h2>
      <div
        className="mt-4 h-px w-12"
        style={{ background: `linear-gradient(to right, ${color}, transparent)` }}
      />
    </div>
  )
}
