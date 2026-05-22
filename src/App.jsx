import React, { useState, useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxCross2 } from 'react-icons/rx'

import Card           from './components/Card'
import Tools          from './components/Tools'
import Project        from './components/Project'
import Footer         from './components/Footer'
import Menu           from './components/Menu'
import Experience     from './components/Experience'
import NetworkBackground from './components/NetworkBackground'
import StationHeader  from './components/StationHeader'

import AOS from 'aos'
import 'aos/dist/aos.css'

/* ── Stations ────────────────────────────────────────────── */
const STATIONS = [
  { id: 'Home',       code: '00', label: 'Home'       },
  { id: 'About',      code: '01', label: 'About'      },
  { id: 'Experience', code: '02', label: 'Experience' },
  { id: 'Education',  code: '03', label: 'Education'  },
  { id: 'Projects',   code: '04', label: 'Projects'   },
  { id: 'Contact',    code: '05', label: 'Contact'    },
]

/* Vertical spacing constants (px) for the sidebar train */
const STATION_TOP    = 124   // y of first station dot center
const STATION_STEP   = 52    // gap between station dot centers
const TRAIN_H        = 16    // height of train indicator

/* ── Left sidebar ────────────────────────────────────────── */
function Sidebar({ active }) {
  const idx = STATIONS.findIndex(s => s.id === active)

  return (
    <aside
      className="hidden lg:flex fixed top-0 left-0 h-screen flex-col z-50"
      style={{
        width:       '220px',
        background:  'rgba(10,10,15,0.94)',
        backdropFilter: 'blur(20px)',
        borderRight: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {/* Logo */}
      <div className="flex items-center px-7 shrink-0" style={{ height: '72px' }}>
        <span className="text-white font-semibold text-xl tracking-tight">SAM</span>
        <span style={{ color: '#06b6d4', fontSize: '22px', lineHeight: 1, marginLeft: '1px' }}>.</span>
      </div>

      <div className="divider mx-7 shrink-0" />

      {/* Label */}
      <div className="px-7 pt-5 pb-2 shrink-0">
        <span className="label" style={{ fontSize: '9px', letterSpacing: '0.18em' }}>METRO ROUTE</span>
      </div>

      {/* Route map */}
      <nav className="relative px-7 shrink-0">
        {/* Vertical track */}
        <div
          className="absolute"
          style={{
            left:       '33px',
            top:        `${STATION_TOP - STATION_STEP / 2}px`,
            height:     `${(STATIONS.length - 1) * STATION_STEP}px`,
            width:      '1px',
            background: 'linear-gradient(to bottom, rgba(6,182,212,0.25), rgba(124,58,237,0.15), transparent)',
          }}
        />

        {/* Train indicator */}
        <div
          className="absolute rounded-full animate-train-glow"
          style={{
            left:       '31px',
            top:        `${STATION_TOP + idx * STATION_STEP - TRAIN_H / 2}px`,
            width:      '5px',
            height:     `${TRAIN_H}px`,
            background: 'linear-gradient(to bottom, #06b6d4, #7c3aed)',
            transition: 'top 0.65s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex:     2,
          }}
        />

        {/* Station items */}
        {STATIONS.map((s, i) => {
          const isActive = active === s.id
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="flex items-center gap-3 group"
              style={{
                height:         `${STATION_STEP}px`,
                textDecoration: 'none',
                paddingLeft:    '16px',
              }}
            >
              {/* Dot */}
              <div
                className="rounded-full shrink-0 transition-all duration-300"
                style={{
                  width:     isActive ? '10px' : '7px',
                  height:    isActive ? '10px' : '7px',
                  background: isActive ? '#06b6d4' : 'transparent',
                  border:    `1.5px solid ${isActive ? '#06b6d4' : 'rgba(255,255,255,0.18)'}`,
                  boxShadow: isActive ? '0 0 8px rgba(6,182,212,0.75)' : 'none',
                  animation: isActive ? 'dot-pulse 2.5s ease-in-out infinite' : 'none',
                  zIndex:    3,
                  position:  'relative',
                }}
              />
              {/* Label */}
              <span
                className="text-sm transition-all duration-300 group-hover:text-white"
                style={{
                  color:      isActive ? 'white' : 'rgba(255,255,255,0.32)',
                  fontWeight: isActive ? 500 : 400,
                  letterSpacing: '0.01em',
                }}
              >
                {s.label}
              </span>
            </a>
          )
        })}
      </nav>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Bottom */}
      <div className="px-7 pb-6 shrink-0">
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.15)' }}>
          © 2025 Shamim
        </p>
      </div>
    </aside>
  )
}

/* ── Top bar (mobile / tablet) ───────────────────────────── */
function TopBar({ toggle, setToggle }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 transition-all duration-300"
      style={{
        height:      '60px',
        background:  scrolled ? 'rgba(10,10,15,0.97)' : 'rgba(10,10,15,0.6)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <a href="#Home" style={{ textDecoration: 'none' }} className="flex items-center gap-0.5">
        <span className="text-white font-semibold text-lg tracking-tight">SAM</span>
        <span style={{ color: '#06b6d4', fontSize: '20px' }}>.</span>
      </a>
      <button
        onClick={() => setToggle(!toggle)}
        className="p-2 rounded-lg transition-all duration-200"
        style={{ border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)' }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(6,182,212,0.35)'; e.currentTarget.style.color = '#06b6d4' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}
        aria-label="Menu"
      >
        {toggle
          ? <RxCross2 size={18} />
          : <GiHamburgerMenu size={18} />
        }
      </button>
    </header>
  )
}

/* ── Skill data ──────────────────────────────────────────── */
const backendSkills = [
  'Node.js', 'NestJS', 'Express.js', 'MongoDB', 'PostgreSQL',
  'Apache Kafka', 'Redis', 'BullMQ', 'AWS', 'API Gateway',
  'Socket.io', 'Payment Gateway',
]
const frontendSkills = ['React.js', 'Next.js', 'Tailwind CSS', 'HTML / CSS']

/* ── Education data ──────────────────────────────────────── */
const education = [
  {
    degree: 'M.Sc',
    department: 'Computer Science and Engineering',
    institue: 'Jahangirnagar University',
    address: 'Savar, Dhaka',
    tag: 'Masters',
    duration: 'Ongoing',
  },
  {
    degree: 'Bachelor Degree',
    department: 'Computer Science and Engineering',
    institue: 'Daffodil International University',
    address: 'DSC, Ashulia, Savar, Dhaka',
    tag: 'Graduation',
    duration: '2020 – 2024',
  },
  {
    degree: 'HSC',
    department: 'Science Group',
    institue: 'Sristy College of Tangail',
    address: 'Biswas Betka, Tangail',
    tag: 'Intermediate',
    duration: '2016 – 2018',
  },
  {
    degree: 'SSC',
    department: 'Science Group',
    institue: 'Sakhipur P.M. Pilot High School',
    address: 'Sakhipur, Tangail',
    tag: 'Secondary',
    duration: '2011 – 2016',
  },
]

/* ── App ─────────────────────────────────────────────────── */
export default function App() {
  const [toggle,   setToggle]   = useState(false)
  const [active,   setActive]   = useState('Home')

  useEffect(() => {
    AOS.init({ duration: 650, once: true, offset: 60, easing: 'ease-out-cubic' })

    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { threshold: 0.2, rootMargin: '-70px 0px 0px 0px' }
    )
    STATIONS.forEach(({ id }) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [])

  return (
    <div style={{ background: '#0a0a0f', minHeight: '100vh' }}>
      <Sidebar active={active} />
      <TopBar  toggle={toggle} setToggle={setToggle} />
      {toggle && <Menu />}

      {/* Main content — offset by sidebar on lg+ */}
      <main className="lg:ml-[220px]">

        {/* ── 00: Hero ─────────────────────────────────── */}
        <section
          id="Home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
          <NetworkBackground />

          {/* CSS grid overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(6,182,212,0.035) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6,182,212,0.035) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
              maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
            }}
          />

          {/* Radial glow overlays */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `
                radial-gradient(ellipse 60% 50% at 50% 50%, rgba(6,182,212,0.06) 0%, transparent 65%),
                radial-gradient(ellipse 40% 40% at 20% 80%, rgba(124,58,237,0.07) 0%, transparent 60%),
                radial-gradient(ellipse 40% 40% at 80% 20%, rgba(124,58,237,0.05) 0%, transparent 60%)
              `,
            }}
          />

          {/* Content */}
          <div
            className="relative z-10 w-full text-center"
            style={{ padding: 'clamp(20px,5vw,64px)' }}
          >
            <div className="max-w-3xl mx-auto">

              {/* Availability badge */}
              <div
                className="hero-reveal flex justify-center mb-8"
                style={{ animationDelay: '0.05s' }}
              >
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                  style={{
                    background: 'rgba(16,185,129,0.08)',
                    border:     '1px solid rgba(16,185,129,0.25)',
                  }}
                >
                  <span className="hero-badge-dot" />
                  <span style={{ fontSize: '11px', color: '#10b981', fontWeight: 500, letterSpacing: '0.06em' }}>
                    Open to opportunities
                  </span>
                  <span style={{ color: 'rgba(16,185,129,0.35)', fontSize: '11px' }}>·</span>
                  <span className="label" style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)' }}>Backend SE</span>
                </div>
              </div>

              {/* Name — single line shimmer */}
              <div className="hero-reveal mb-5" style={{ animationDelay: '0.18s' }}>
                <h1
                  className="font-light tracking-tight leading-none"
                  style={{ fontSize: 'clamp(1.9rem, 6.5vw, 6.5rem)', whiteSpace: 'nowrap' }}
                >
                  <span className="text-white">Shamim </span>
                  <span className="hero-name-shimmer">Al Mamun</span>
                </h1>
              </div>

              {/* Role line */}
              <div className="hero-reveal mb-4" style={{ animationDelay: '0.3s' }}>
                <p
                  className="font-light tracking-widest uppercase"
                  style={{ fontSize: 'clamp(0.75rem, 1.8vw, 0.9rem)', color: 'rgba(255,255,255,0.38)', letterSpacing: '0.22em' }}
                >
                  Backend Software Engineer
                </p>
              </div>

              {/* Tagline */}
              <div className="hero-reveal mb-9" style={{ animationDelay: '0.38s' }}>
                <p className="mx-auto" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.38)', maxWidth: '440px', lineHeight: 1.7 }}>
                  Building scalable microservices and event-driven systems
                  for high-growth startups and enterprise platforms.
                </p>
              </div>

              {/* Tech pills */}
              <div
                className="hero-reveal flex flex-wrap gap-2 mb-10 justify-center"
                style={{ animationDelay: '0.48s' }}
              >
                {[
                  { label: 'Node.js',  color: '#68A063', delay: '0s'    },
                  { label: 'NestJS',   color: '#E0234E', delay: '0.12s' },
                  { label: 'AWS',      color: '#FF9900', delay: '0.24s' },
                  { label: 'Kafka',    color: '#aaa',    delay: '0.36s' },
                  { label: 'Redis',    color: '#DC382D', delay: '0.48s' },
                  { label: 'BullMQ',   color: '#7c3aed', delay: '0.6s'  },
                ].map((t, i) => (
                  <span
                    key={t.label}
                    style={{
                      display:        'inline-flex',
                      alignItems:     'center',
                      padding:        '6px 16px',
                      borderRadius:   '100px',
                      fontSize:       '12px',
                      fontWeight:     500,
                      background:     `${t.color}12`,
                      border:         `1px solid ${t.color}30`,
                      color:          t.color,
                      whiteSpace:     'nowrap',
                      animation:      `pill-float ${2.6 + i * 0.25}s ease-in-out infinite`,
                      animationDelay: t.delay,
                    }}
                  >
                    {t.label}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div
                className="hero-reveal flex flex-wrap gap-3 justify-center"
                style={{ animationDelay: '0.58s' }}
              >
                <a href="#Projects" className="btn-primary">View Work →</a>
                <a href="#Contact"  className="btn-outline">Get in Touch</a>
              </div>
            </div>
          </div>

          {/* Scroll cue */}
          <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            style={{ opacity: 0.25 }}
          >
            <div
              className="w-px h-10"
              style={{ background: 'linear-gradient(to bottom, transparent, #06b6d4, transparent)' }}
            />
          </div>
        </section>

        {/* ── 01: About ────────────────────────────────── */}
        <section id="About" className="section" style={{ background: '#0a0a0f' }}>
          <div className="max-w-3xl mx-auto">
            <StationHeader code="01" name="About" />

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {[
                { v: '1.5+', l: 'Years experience' },
                { v: '10+',  l: 'Projects built'   },
                { v: '2',    l: 'Companies'         },
              ].map(s => (
                <div
                  key={s.l}
                  data-aos="fade-up"
                  className="card p-5 hover-lift"
                >
                  <p
                    className="font-light mb-1"
                    style={{ fontSize: '2.2rem', color: '#06b6d4', lineHeight: 1 }}
                  >
                    {s.v}
                  </p>
                  <p className="text-sm" style={{ color: 'rgba(255,255,255,0.38)' }}>{s.l}</p>
                </div>
              ))}
            </div>

            {/* Bio */}
            <div data-aos="fade-up" className="mb-10">
              <p className="leading-relaxed" style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', maxWidth: '600px' }}>
                Specializing in high-performance backend systems, event-driven
                microservices, and cloud infrastructure. Currently at{' '}
                <span style={{ color: 'white', fontWeight: 500 }}>Taghyeer Technologies</span>{' '}
                — building enterprise APIs and Kafka-powered pipelines for the
                Dubai fintech market.
              </p>
            </div>

            {/* Skills */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div data-aos="fade-right">
                <p className="label mb-4">Backend</p>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map(s => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>
              <div data-aos="fade-left">
                <p className="label mb-4">Frontend</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {frontendSkills.map(s => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
                <p className="text-xs mt-3" style={{ color: 'rgba(255,255,255,0.22)' }}>
                  Supporting role — primary focus is backend
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02: Experience ───────────────────────────── */}
        <Experience />

        {/* ── 03: Education ────────────────────────────── */}
        <section
          id="Education"
          className="section"
          style={{ background: 'linear-gradient(180deg,#0a0a0f 0%,#0d0d18 50%,#0a0a0f 100%)' }}
        >
          <div className="max-w-3xl mx-auto">
            <StationHeader code="03" name="Education" color="#7c3aed" />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {education.map((deg, i) => (
                <Card key={i} degree={deg} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Tools (unlabelled, between edu & projects) ── */}
        <Tools />

        {/* ── 04: Projects ─────────────────────────────── */}
        <Project />

        {/* ── 05: Contact ──────────────────────────────── */}
        <Footer />

      </main>
    </div>
  )
}
