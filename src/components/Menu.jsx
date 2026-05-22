import React from 'react'
import { motion } from 'framer-motion'

const stations = [
  { id: 'Home',       code: '00', label: 'Home'       },
  { id: 'About',      code: '01', label: 'About'      },
  { id: 'Experience', code: '02', label: 'Experience' },
  { id: 'Education',  code: '03', label: 'Education'  },
  { id: 'Projects',   code: '04', label: 'Projects'   },
  { id: 'Contact',    code: '05', label: 'Contact'    },
]

export default function Menu() {
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40 lg:hidden"
        style={{ background: 'rgba(10,10,15,0.6)', backdropFilter: 'blur(4px)' }}
      />

      {/* Panel */}
      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 bottom-0 z-50 flex flex-col lg:hidden"
        style={{
          width:       '260px',
          background:  'rgba(12,12,18,0.98)',
          backdropFilter: 'blur(24px)',
          borderRight: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* Logo */}
        <div
          className="flex items-center px-7 shrink-0"
          style={{ height: '64px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
        >
          <span className="text-white font-semibold text-lg tracking-tight">SAM</span>
          <span style={{ color: '#06b6d4', fontSize: '20px', marginLeft: '1px' }}>.</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-7 py-6 relative overflow-y-auto">
          {/* Track */}
          <div
            className="absolute"
            style={{
              left:       '34px',
              top:        '30px',
              height:     `${(stations.length - 1) * 52}px`,
              width:      '1px',
              background: 'linear-gradient(to bottom, rgba(6,182,212,0.2), rgba(124,58,237,0.1), transparent)',
            }}
          />

          {stations.map((s, i) => (
            <motion.a
              key={s.id}
              href={`#${s.id}`}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.055, duration: 0.28 }}
              className="flex items-center gap-4 group"
              style={{
                height:         '52px',
                textDecoration: 'none',
              }}
            >
              {/* Dot */}
              <div
                className="rounded-full shrink-0 transition-all duration-200 group-hover:scale-125"
                style={{
                  width:     '7px',
                  height:    '7px',
                  background: i === 0 ? '#06b6d4' : 'transparent',
                  border:    `1.5px solid ${i === 0 ? '#06b6d4' : 'rgba(255,255,255,0.18)'}`,
                  boxShadow: i === 0 ? '0 0 6px rgba(6,182,212,0.7)' : 'none',
                }}
              />

              {/* Code + Label */}
              <div>
                <span
                  className="font-mono block"
                  style={{ fontSize: '9px', color: 'rgba(6,182,212,0.4)', letterSpacing: '0.1em' }}
                >
                  {s.code}
                </span>
                <span
                  className="text-sm transition-colors duration-200 group-hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.5)', lineHeight: 1.2 }}
                >
                  {s.label}
                </span>
              </div>
            </motion.a>
          ))}
        </nav>

        {/* Bottom */}
        <div
          className="px-7 pb-6 shrink-0"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px' }}
        >
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.18)' }}>
            © {new Date().getFullYear()} Shamim Al Mamun
          </p>
        </div>
      </motion.aside>
    </>
  )
}
