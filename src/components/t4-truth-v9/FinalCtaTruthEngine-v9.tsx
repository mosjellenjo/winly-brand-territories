'use client'

import { useEffect, useRef } from 'react'

export function FinalCtaTruthEngineV9() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, speed: 0 })
  const lastMouseRef = useRef({ x: 0, y: 0, time: Date.now() })
  const colorPhaseRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      const section = canvas.parentElement
      if (section) {
        canvas.width = section.offsetWidth
        canvas.height = section.offsetHeight
      }
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const gridSize = 60
    const glowRadius = 250

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const { x: mouseX, y: mouseY, speed } = mouseRef.current

      const speedMultiplier = Math.min(1, speed / 25)
      const baseOpacity = 0.005
      const maxOpacityBoost = 0.06
      const fastMovementBoost = speed > 20 ? Math.min(0.08, (speed - 20) / 50) : 0

      colorPhaseRef.current += 0.015

      for (let x = 0; x <= canvas.width; x += gridSize) {
        const distanceFromMouse = Math.abs(x - mouseX)
        const intensity = Math.max(0, 1 - distanceFromMouse / glowRadius)

        const colorPhase = colorPhaseRef.current + (x / canvas.width) * Math.PI * 2
        const lineOpacity = baseOpacity + (intensity > 0 ? intensity * (speedMultiplier * maxOpacityBoost + fastMovementBoost) : 0)

        if (intensity > 0 && speedMultiplier > 0.05) {
          const r = Math.floor(68 + Math.sin(colorPhase) * 20)
          const g = Math.floor(180 + Math.sin(colorPhase + 1) * 40)
          const b = Math.floor(200 + Math.cos(colorPhase) * 30)
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${lineOpacity})`
        } else {
          ctx.strokeStyle = `rgba(68, 109, 205, ${baseOpacity})`
        }

        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y <= canvas.height; y += gridSize) {
        const distanceFromMouse = Math.abs(y - mouseY)
        const intensity = Math.max(0, 1 - distanceFromMouse / glowRadius)

        const colorPhase = colorPhaseRef.current + (y / canvas.height) * Math.PI * 2
        const lineOpacity = baseOpacity + (intensity > 0 ? intensity * (speedMultiplier * maxOpacityBoost + fastMovementBoost) : 0)

        if (intensity > 0 && speedMultiplier > 0.05) {
          const r = Math.floor(68 + Math.sin(colorPhase) * 20)
          const g = Math.floor(180 + Math.sin(colorPhase + 1) * 40)
          const b = Math.floor(200 + Math.cos(colorPhase) * 30)
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${lineOpacity})`
        } else {
          ctx.strokeStyle = `rgba(68, 109, 205, ${baseOpacity})`
        }

        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      requestAnimationFrame(draw)
    }

    draw()

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const now = Date.now()
      const deltaTime = now - lastMouseRef.current.time

      if (deltaTime > 0) {
        const dx = e.clientX - lastMouseRef.current.x
        const dy = e.clientY - lastMouseRef.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const speed = (distance / deltaTime) * 16

        mouseRef.current.speed = mouseRef.current.speed * 0.85 + speed * 0.15
      }

      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
      lastMouseRef.current = { x: e.clientX, y: e.clientY, time: now }
    }

    const speedDecay = setInterval(() => {
      mouseRef.current.speed *= 0.92
    }, 50)

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(speedDecay)
    }
  }, [])

  return (
    <section className="relative bg-[#10131C] py-32 border-t border-white/[0.06] overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#446DCD]/15 via-[#4BB6D3]/10 to-[#6EF2CC]/15 rounded-full blur-[120px]" />

      <div className="relative z-10" style={{ padding: '0 70px' }}>
        <div className="mx-auto" style={{ maxWidth: 'calc(100% - 140px)' }}>
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="text-4xl sm:text-5xl lg:text-6xl text-[#F2F5FA] tracking-tight leading-tight"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 300 }}
            >
              Klar for ett samlet bilde av det norske B2B-markedet?
            </h2>

            <p
              className="mt-8 text-lg text-[#BAD7F5]/60 leading-relaxed"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 300 }}
            >
              Start en gratis prøveperiode og se hvordan Winly kan forenkle arbeidet med innsikt, prioritering og vekst.
            </p>

            <div className="mt-12">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-lg text-[#10131C] rounded-xl transition-all hover:opacity-90"
                style={{
                  backgroundColor: '#C8E6F5',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 400,
                }}
              >
                Start prøveperiode
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <TrustIndicator text="Ingen kredittkort" />
              <TrustIndicator text="Avbryt når som helst" />
              <TrustIndicator text="Full tilgang i 14 dager" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustIndicator({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-[#BAD7F5]/50">
      <svg className="h-4 w-4 text-[#6EF2CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span className="text-sm" style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 300 }}>{text}</span>
    </div>
  )
}
