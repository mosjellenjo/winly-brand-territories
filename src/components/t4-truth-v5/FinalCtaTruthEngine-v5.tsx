'use client'

import { useEffect, useRef } from 'react'

export function FinalCtaTruthEngineV5() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })

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

      const { x: mouseX, y: mouseY } = mouseRef.current

      // Draw grid lines with glow effect near mouse
      for (let x = 0; x <= canvas.width; x += gridSize) {
        const distanceFromMouse = Math.abs(x - mouseX)
        const intensity = Math.max(0, 1 - distanceFromMouse / glowRadius)

        if (intensity > 0) {
          ctx.strokeStyle = `rgba(75, 182, 211, ${0.02 + intensity * 0.1})`
        } else {
          ctx.strokeStyle = 'rgba(68, 109, 205, 0.015)'
        }

        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      for (let y = 0; y <= canvas.height; y += gridSize) {
        const distanceFromMouse = Math.abs(y - mouseY)
        const intensity = Math.max(0, 1 - distanceFromMouse / glowRadius)

        if (intensity > 0) {
          ctx.strokeStyle = `rgba(75, 182, 211, ${0.02 + intensity * 0.1})`
        } else {
          ctx.strokeStyle = 'rgba(68, 109, 205, 0.015)'
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
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section className="relative bg-[#10131C] py-32 border-t border-white/[0.06] overflow-hidden">
      {/* Canvas grid background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-[#446DCD]/15 via-[#4BB6D3]/10 to-[#6EF2CC]/15 rounded-full blur-[120px]" />

      <div className="relative z-10 px-5">
        <div className="mx-auto max-w-[1800px]">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-[#BAD7F5] tracking-tight leading-tight">
              Klar for ett samlet bilde av det norske B2B-markedet?
            </h2>

            <p className="mt-8 text-lg text-[#BAD7F5]/60 leading-relaxed">
              Start en gratis prøveperiode og se hvordan Winly kan forenkle arbeidet med innsikt, prioritering og vekst.
            </p>

            <div className="mt-12">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-[#E4ECF4] hover:bg-white px-8 py-4 text-lg font-normal text-[#121111] rounded-full transition-all"
              >
                Start prøveperiode
              </a>
            </div>

            {/* Trust indicators */}
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
      <span className="text-sm">{text}</span>
    </div>
  )
}
