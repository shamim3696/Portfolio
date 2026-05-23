import { useEffect, useRef } from 'react'

const COUNT = 65

function makeParticle(W, H) {
  // concentrated toward upper-center where lamp light falls
  const cx = W * 0.52
  const cy = H * 0.38
  return {
    x:            cx + (Math.random() - 0.5) * W * 0.55,
    y:            cy + (Math.random() - 0.5) * H * 0.4,
    vx:           (Math.random() - 0.5) * 0.18,
    vy:           -0.04 - Math.random() * 0.1,
    size:         0.6 + Math.random() * 1.8,
    maxOpacity:   0.12 + Math.random() * 0.38,
    opacity:      0,
    life:         Math.random(),
    speed:        0.0008 + Math.random() * 0.0015,
  }
}

export default function DustMotes() {
  const canvasRef = useRef()
  const stateRef  = useRef({ particles: [], raf: null, W: 0, H: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    const s      = stateRef.current

    const resize = () => {
      s.W = canvas.width  = window.innerWidth
      s.H = canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    s.particles = Array.from({ length: COUNT }, () => makeParticle(s.W, s.H))

    const tick = () => {
      ctx.clearRect(0, 0, s.W, s.H)

      s.particles.forEach((p, i) => {
        p.life += p.speed
        if (p.life >= 1) {
          s.particles[i] = makeParticle(s.W, s.H)
          return
        }

        // fade in first 20%, hold, fade out last 20%
        const t = p.life
        p.opacity = t < 0.2
          ? (t / 0.2) * p.maxOpacity
          : t > 0.8
          ? ((1 - t) / 0.2) * p.maxOpacity
          : p.maxOpacity

        p.x += p.vx
        p.y += p.vy

        // warm amber glow matching desk lamp
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4)
        g.addColorStop(0, `rgba(255, 195, 100, ${p.opacity})`)
        g.addColorStop(0.5, `rgba(240, 160, 60, ${p.opacity * 0.5})`)
        g.addColorStop(1, `rgba(255, 140, 40, 0)`)

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2)
        ctx.fillStyle = g
        ctx.fill()
      })

      s.raf = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(s.raf)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, zIndex: 8, pointerEvents: 'none' }}
    />
  )
}
