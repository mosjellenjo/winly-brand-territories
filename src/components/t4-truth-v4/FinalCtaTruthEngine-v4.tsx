'use client'

import { useEffect, useRef } from 'react'

export function FinalCtaTruthEngineV4() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = grid.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      grid.style.setProperty('--mouse-x', `${x}px`)
      grid.style.setProperty('--mouse-y', `${y}px`)
    }

    grid.addEventListener('mousemove', handleMouseMove)
    return () => grid.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative bg-[#0B1120] py-24 border-t border-white/[0.06] overflow-hidden">
      {/* Interactive grid */}
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56, 189, 248, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(circle 300px at var(--mouse-x, 50%) var(--mouse-y, 50%), black, transparent)',
          WebkitMaskImage: 'radial-gradient(circle 300px at var(--mouse-x, 50%) var(--mouse-y, 50%), black, transparent)',
        }}
      />

      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-500/20 via-sky-500/10 to-blue-500/20 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">
            Klar for ett samlet bilde av det norske B2B-markedet?
          </h2>
          <p className="mt-6 text-gray-400 leading-relaxed">
            Start en gratis prøveperiode og se hvordan Winly kan forenkle arbeidet med innsikt, prioritering og vekst.
          </p>
          <div className="mt-10">
            <a
              href="#"
              className="inline-flex items-center justify-center bg-white px-8 py-4 text-sm font-medium text-[#0B1120] rounded-lg transition-all hover:bg-gray-100 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
            >
              Start 14 dagers gratis prøve
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <div className="flex items-center gap-2 text-gray-500">
              <CheckCircle />
              <span className="text-sm">Ingen kredittkort</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <CheckCircle />
              <span className="text-sm">Avbryt når som helst</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <CheckCircle />
              <span className="text-sm">Full tilgang i 14 dager</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckCircle() {
  return (
    <svg className="h-4 w-4 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}
