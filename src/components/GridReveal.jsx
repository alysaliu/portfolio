import { useEffect, useRef, useState } from 'react'

// Cursor-following "grid reveal" effect: a faint grid sits under a solid
// overlay that matches the background; a soft radial mask trailing the cursor
// punches through the overlay to reveal the grid nearby. Adapted from the
// Grid Reveal reference (48px cells, radius 260, lerp 0.12).
export default function GridReveal({
  cell = 24,
  radius = 200,
  lineColor = '#e9ebef',
  bgColor = '#ffffff',
}) {
  const rootRef = useRef(null)
  const target = useRef({ x: -9999, y: -9999 })
  const rafId = useRef(null)
  const [pos, setPos] = useState({ x: -9999, y: -9999 })
  const [active, setActive] = useState(false)

  // Track the cursor relative to the parent so hovering over the text
  // (which sits above this layer) still drives the reveal.
  useEffect(() => {
    const parent = rootRef.current?.parentElement
    if (!parent) return

    const onMove = (e) => {
      const rect = parent.getBoundingClientRect()
      target.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
      setActive(true)
    }
    const onLeave = () => setActive(false)

    parent.addEventListener('mousemove', onMove)
    parent.addEventListener('mouseleave', onLeave)
    return () => {
      parent.removeEventListener('mousemove', onMove)
      parent.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  // Smoothly ease the rendered position toward the cursor target.
  useEffect(() => {
    const tick = () => {
      setPos((p) => {
        const nx = p.x + (target.current.x - p.x) * 0.08
        const ny = p.y + (target.current.y - p.y) * 0.08
        if (Math.abs(nx - p.x) > 0.05 || Math.abs(ny - p.y) > 0.05) {
          return { x: nx, y: ny }
        }
        return p
      })
      rafId.current = requestAnimationFrame(tick)
    }
    rafId.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId.current)
  }, [])

  const maskImage = `radial-gradient(circle ${radius}px at ${pos.x}px ${pos.y}px, rgba(0,0,0,0) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,1) 100%)`

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}
    >
      {/* the grid itself */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `linear-gradient(${lineColor} 1px, transparent 1px), linear-gradient(90deg, ${lineColor} 1px, transparent 1px)`,
          backgroundSize: `${cell}px ${cell}px`,
        }}
      />
      {/* overlay that hides the grid, punched through near the cursor */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: bgColor,
          WebkitMaskImage: active ? maskImage : 'none',
          maskImage: active ? maskImage : 'none',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
          transition: 'opacity 0.4s ease',
        }}
      />
    </div>
  )
}
