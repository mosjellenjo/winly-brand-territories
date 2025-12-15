'use client'

import { useEffect, useRef } from 'react'

export function FinalCtaCloud2V1() {
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

      const speedMultiplier = Math.min(1, speed / 20)
      const baseOpacity = 0.03
      const normalOpacityBoost = 0.08
      const fastMovementBoost = speed > 15 ? Math.min(0.1, (speed - 15) / 40) : 0

      colorPhaseRef.current += 0.02

      for (let x = 0; x <= canvas.width; x += gridSize) {
        const distanceFromMouse = Math.abs(x - mouseX)
        const intensity = Math.max(0, 1 - distanceFromMouse / glowRadius)

        const colorPhase = colorPhaseRef.current + (x / canvas.width) * Math.PI * 2
        const lineOpacity = baseOpacity + (intensity > 0 ? intensity * (speedMultiplier * normalOpacityBoost + fastMovementBoost) : 0)

        if (intensity > 0 && speedMultiplier > 0.05) {
          const r = Math.floor(59 + Math.sin(colorPhase) * 20)
          const g = Math.floor(130 + Math.sin(colorPhase + 1.5) * 40)
          const b = Math.floor(246 + Math.cos(colorPhase) * 10)
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${lineOpacity})`
        } else {
          ctx.strokeStyle = `rgba(59, 130, 246, ${baseOpacity})`
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
        const lineOpacity = baseOpacity + (intensity > 0 ? intensity * (speedMultiplier * normalOpacityBoost + fastMovementBoost) : 0)

        if (intensity > 0 && speedMultiplier > 0.05) {
          const r = Math.floor(59 + Math.sin(colorPhase) * 20)
          const g = Math.floor(130 + Math.sin(colorPhase + 1.5) * 40)
          const b = Math.floor(246 + Math.cos(colorPhase) * 10)
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${lineOpacity})`
        } else {
          ctx.strokeStyle = `rgba(59, 130, 246, ${baseOpacity})`
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

        mouseRef.current.speed = mouseRef.current.speed * 0.8 + speed * 0.2
      }

      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
      lastMouseRef.current = { x: e.clientX, y: e.clientY, time: now }
    }

    const speedDecay = setInterval(() => {
      mouseRef.current.speed *= 0.93
    }, 50)

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(speedDecay)
    }
  }, [])

  return (
    <section className="relative py-20 overflow-hidden" style={{ background: 'linear-gradient(180deg, #3B82F6 0%, #2563EB 50%, #1E40AF 100%)' }}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Subtle gradient orbs */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-gradient-to-r from-cyan-400/20 to-transparent rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-gradient-to-l from-blue-300/15 to-transparent rounded-full blur-[80px]" />

      <div className="relative z-10" style={{ padding: '0 70px' }}>
        <div className="mx-auto" style={{ maxWidth: 'calc(100% - 140px)' }}>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight">
              Se ditt værkart for vekst i dag!
            </h2>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-medium text-[#2563EB] bg-white rounded-lg transition-all hover:bg-blue-50 shadow-lg hover:shadow-xl"
              >
                Start gratis prøveperiode
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-medium text-white rounded-lg transition-all border border-white/40 hover:bg-white/10 hover:border-white/60"
              >
                Snakk med oss
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              <TrustIndicator text="Ingen kredittkort" />
              <TrustIndicator text="14 dagers prøveperiode" />
              <TrustIndicator text="Full tilgang til alle funksjoner" />
            </div>
          </div>

          {/* Footer */}
          <footer className="mt-16 pt-8 border-t border-white/15">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-white">
                <span className="text-xl font-semibold">Winly</span>
                <p className="mt-1 text-white/60 text-sm">Norges første værkart for B2B-muligheter</p>
              </div>
              <div className="flex flex-wrap justify-center gap-5">
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Produkter
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Priser
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Om oss
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Kontakt
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors text-sm">
                  Personvern
                </a>
              </div>
              <p className="text-white/40 text-sm">&copy; 2024 Winly. Alle rettigheter reservert.</p>
            </div>
          </footer>
        </div>
      </div>
    </section>
  )
}

function TrustIndicator({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-blue-100">
      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span className="text-sm">{text}</span>
    </div>
  )
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  )
}
