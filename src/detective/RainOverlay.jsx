import { useMemo } from 'react'

const DROP_COUNT = 90

export default function RainOverlay() {
  const drops = useMemo(() => (
    Array.from({ length: DROP_COUNT }, (_, i) => ({
      id: i,
      left:     Math.random() * 100,
      delay:    Math.random() * 2.5,
      duration: 0.55 + Math.random() * 0.65,
      height:   10 + Math.random() * 18,
      opacity:  0.04 + Math.random() * 0.09,
    }))
  ), [])

  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 8, pointerEvents: 'none', overflow: 'hidden' }}>
      {drops.map(drop => (
        <div
          key={drop.id}
          style={{
            position:               'absolute',
            left:                   `${drop.left}%`,
            top:                    0,
            width:                  '1px',
            height:                 `${drop.height}px`,
            background:             `linear-gradient(to bottom, transparent, rgba(100,140,180,${drop.opacity}) 40%, rgba(120,160,200,${drop.opacity * 1.2}) 100%)`,
            animationName:          'det-raindrop-fall',
            animationDuration:      `${drop.duration}s`,
            animationDelay:         `${drop.delay}s`,
            animationTimingFunction:'linear',
            animationIterationCount:'infinite',
          }}
        />
      ))}
    </div>
  )
}
