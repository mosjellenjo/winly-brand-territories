'use client'

import { useEffect, useRef, useState } from 'react'

export function HeroTruthEngineV9() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, speed: 0 })
  const lastMouseRef = useRef({ x: 0, y: 0, time: Date.now() })
  const colorPhaseRef = useRef(0)
  const [activeStep, setActiveStep] = useState(0)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  const displayedStep = hoveredStep !== null ? hoveredStep : activeStep

  // Grid glow effect with traveling colors
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const gridSize = 60
    const glowRadius = 300

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const { x: mouseX, y: mouseY, speed } = mouseRef.current

      // Speed affects glow intensity - halved from v8, more responsive to fast movements
      const speedMultiplier = Math.min(1, speed / 25) // Higher threshold = need faster movement
      const baseOpacity = 0.006 // Even dimmer when still
      const maxOpacityBoost = 0.08 // Halved max brightness for normal movement

      // Fast movement boost (rigorously moving = extra brightness)
      const fastMovementBoost = speed > 20 ? Math.min(0.1, (speed - 20) / 50) : 0

      // Update color phase for traveling effect
      colorPhaseRef.current += 0.02

      for (let x = 0; x <= canvas.width; x += gridSize) {
        const distanceFromMouse = Math.abs(x - mouseX)
        const intensity = Math.max(0, 1 - distanceFromMouse / glowRadius)

        // Traveling color effect - phase shifts based on position
        const colorPhase = colorPhaseRef.current + (x / canvas.width) * Math.PI * 2

        const lineOpacity = baseOpacity + (intensity > 0 ? intensity * (speedMultiplier * maxOpacityBoost + fastMovementBoost) : 0)

        if (intensity > 0 && speedMultiplier > 0.05) {
          // Color shifts between cyan and green based on phase
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

      // Glow points at intersections with traveling brightness
      if (speedMultiplier > 0.08) {
        for (let x = 0; x <= canvas.width; x += gridSize) {
          for (let y = 0; y <= canvas.height; y += gridSize) {
            const dx = x - mouseX
            const dy = y - mouseY
            const distance = Math.sqrt(dx * dx + dy * dy)
            const intensity = Math.max(0, 1 - distance / glowRadius)

            if (intensity > 0.1) {
              // Traveling brightness - some points are brighter based on phase
              const pointPhase = colorPhaseRef.current + (x + y) / 200
              const brightnessWave = 0.5 + 0.5 * Math.sin(pointPhase * 2)

              const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8)
              const alpha = intensity * (speedMultiplier + fastMovementBoost) * 0.4 * brightnessWave
              gradient.addColorStop(0, `rgba(110, 242, 204, ${alpha})`)
              gradient.addColorStop(1, 'rgba(110, 242, 204, 0)')

              ctx.fillStyle = gradient
              ctx.beginPath()
              ctx.arc(x, y, 8, 0, Math.PI * 2)
              ctx.fill()
            }
          }
        }
      }

      requestAnimationFrame(draw)
    }

    draw()

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now()
      const deltaTime = now - lastMouseRef.current.time

      if (deltaTime > 0) {
        const dx = e.clientX - lastMouseRef.current.x
        const dy = e.clientY - lastMouseRef.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const speed = (distance / deltaTime) * 16

        mouseRef.current.speed = mouseRef.current.speed * 0.85 + speed * 0.15
      }

      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
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

  const steps = [
    { num: 1, title: 'Søk', description: 'Finn selskaper, roller og anbud' },
    { num: 2, title: 'Analyser', description: 'Se sammenhenger og eierskap' },
    { num: 3, title: 'Bygg', description: 'Lag målgrupper og segmenter' },
    { num: 4, title: 'Eksporter', description: 'Ta innsikten videre i dine verktøy' },
  ]

  const stepPreviews = [
    <SearchPreview key="search" />,
    <AnalyzePreview key="analyze" />,
    <BuildPreview key="build" />,
    <ExportPreview key="export" />,
  ]

  return (
    <section className="relative min-h-screen bg-[#10131C] overflow-hidden">
      {/* Canvas for interactive grid glow effect */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Floating Navigation - aligned with content, rounder edges */}
      <header className="fixed top-12 left-0 right-0 z-50" style={{ padding: '0 70px' }}>
        <div className="mx-auto flex items-center" style={{ maxWidth: 'calc(100% - 140px)' }}>
          {/* Logo inside the nav area */}
          <nav className="w-full flex items-center justify-between rounded-2xl border border-white/[0.08] bg-[#1A1D26]/70 backdrop-blur-xl px-4 py-2">
            {/* Left side with logo and nav items */}
            <div className="flex items-center gap-2">
              {/* Logo inside nav */}
              <span
                className="text-xl text-[#F2F5FA] mr-4 tracking-tight"
                style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 300 }}
              >
                Winly
              </span>
              <NavItem label="Hjem" active />
              <NavItem label="Produkter" />
              <NavItem label="Priser" />
              <NavItem label="Kunder" />
            </div>
            <div className="flex items-center gap-1">
              <NavItem label="Om oss" hasArrow />
              <NavItem label="Karriere" hasArrow />
              <NavItem label="Kontakt" hasArrow />
              <NavItem label="Logg inn" hasArrow />
              {/* CTA */}
              <a
                href="#"
                className="ml-2 inline-flex items-center justify-center px-5 py-2.5 text-sm text-[#10131C] rounded-xl transition-all hover:opacity-90"
                style={{
                  backgroundColor: '#C8E6F5',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  fontWeight: 400,
                }}
              >
                Prøveperiode
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 pt-40 pb-20" style={{ padding: '160px 70px 80px 70px' }}>
        <div className="mx-auto" style={{ maxWidth: 'calc(100% - 140px)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text Content */}
            <div className="max-w-2xl">
              <h1
                className="text-5xl sm:text-6xl lg:text-[64px] leading-[1.1] tracking-tight"
                style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 300 }}
              >
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, rgb(68, 109, 205), rgb(75, 182, 211), rgb(110, 242, 204))',
                  }}
                >
                  Winly
                </span>
                <span className="text-[#F2F5FA]">, alt for norsk</span>
                <br />
                <span className="text-[#F2F5FA]">B2B-data</span>
              </h1>

              <div className="mt-10">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base text-[#10131C] rounded-xl transition-all hover:opacity-90"
                  style={{
                    backgroundColor: '#C8E6F5',
                    fontFamily: 'Inter, system-ui, sans-serif',
                    fontWeight: 400,
                  }}
                >
                  Start prøveperiode
                </a>
              </div>

              <p
                className="mt-10 text-[#BAD7F5]/70 text-lg"
                style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 300 }}
              >
                <span className="text-[#F2F5FA]" style={{ fontWeight: 400 }}>Finn, forstå og vinn</span>{' '}
                norske B2B-kunder med det mest komplette datagrunnlaget.
              </p>

              {/* Workflow Steps with fading outline */}
              <ul className="mt-10 space-y-1">
                {steps.map((step, index) => (
                  <WorkflowStep
                    key={step.num}
                    num={step.num}
                    title={step.title}
                    description={step.description}
                    active={displayedStep === index}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                    onClick={() => setActiveStep(index)}
                  />
                ))}
              </ul>
            </div>

            {/* Right: Preview Panel with MARBLE background */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[600px]">
                {/* Solid marble background - like Devin's image 1 */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    top: '-80px',
                    left: '-80px',
                    right: '-80px',
                    bottom: '-80px',
                    background: `
                      url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.009' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")
                    `,
                    opacity: 0.4,
                    mixBlendMode: 'overlay',
                  }}
                />

                {/* Main marble color layer */}
                <div
                  className="absolute rounded-3xl pointer-events-none"
                  style={{
                    top: '-60px',
                    left: '-60px',
                    right: '-60px',
                    bottom: '-60px',
                    background: `
                      linear-gradient(
                        135deg,
                        rgba(180, 200, 230, 0.7) 0%,
                        rgba(200, 215, 240, 0.6) 20%,
                        rgba(175, 210, 235, 0.7) 40%,
                        rgba(195, 220, 245, 0.6) 60%,
                        rgba(185, 205, 235, 0.7) 80%,
                        rgba(190, 215, 240, 0.6) 100%
                      )
                    `,
                    filter: 'blur(40px)',
                  }}
                />

                {/* Marble veins/waves overlay */}
                <div
                  className="absolute rounded-3xl pointer-events-none"
                  style={{
                    top: '-40px',
                    left: '-40px',
                    right: '-40px',
                    bottom: '-40px',
                    background: `
                      radial-gradient(ellipse 120% 80% at 20% 20%, rgba(220, 235, 250, 0.8) 0%, transparent 50%),
                      radial-gradient(ellipse 100% 60% at 80% 80%, rgba(200, 225, 245, 0.7) 0%, transparent 45%),
                      radial-gradient(ellipse 80% 100% at 50% 40%, rgba(210, 230, 250, 0.5) 0%, transparent 40%)
                    `,
                    filter: 'blur(25px)',
                  }}
                />

                {/* Bright highlights */}
                <div
                  className="absolute rounded-2xl pointer-events-none"
                  style={{
                    top: '-20px',
                    left: '-20px',
                    right: '-20px',
                    bottom: '-20px',
                    background: `
                      radial-gradient(circle at 15% 25%, rgba(240, 248, 255, 0.9) 0%, transparent 25%),
                      radial-gradient(circle at 85% 75%, rgba(235, 245, 255, 0.8) 0%, transparent 20%),
                      radial-gradient(circle at 50% 50%, rgba(230, 242, 255, 0.4) 0%, transparent 35%)
                    `,
                    filter: 'blur(15px)',
                  }}
                />

                {/* Preview panel */}
                <div
                  className="relative rounded-xl overflow-hidden shadow-2xl"
                  style={{
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    background: 'linear-gradient(180deg, rgba(15, 18, 25, 0.97) 0%, rgba(15, 18, 25, 0.99) 100%)',
                  }}
                >
                  {stepPreviews[displayedStep]}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom text - this leads into the logos section */}
      <div className="relative z-10 text-center pb-8 px-10">
        <p
          className="text-[#BAD7F5]/50 text-base"
          style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 300 }}
        >
          Brukes av ledende norske B2B-team.{' '}
          <a href="#" className="text-[#4BB6D3] hover:text-[#6EF2CC] transition-colors">
            Se hva de har oppnådd.
          </a>
        </p>
      </div>
    </section>
  )
}

function NavItem({ label, active = false, hasArrow = false }: { label: string; active?: boolean; hasArrow?: boolean }) {
  return (
    <a
      href="#"
      className={`flex items-center px-3 py-2 rounded-lg text-sm transition-all ${
        active
          ? 'text-[#F2F5FA]'
          : 'text-[#BAD7F5]/70 hover:text-[#F2F5FA]'
      }`}
      style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 300 }}
    >
      {active && (
        <div className="w-3.5 h-3.5 mr-1.5">
          <svg viewBox="0 0 16 16" className="w-full h-full fill-current">
            <path d="M7.007,0.63c0.614-0.355,1.371-0.355,1.986,0l4.893,2.825c0.614,0.355,0.993,1.01,0.993,1.72v5.65 c0,0.709-0.378,1.365-0.993,1.72L8.993,15.37c-0.614,0.355-1.371,0.355-1.986,0l-4.893-2.825c-0.614-0.355-0.993-1.01-0.993-1.72 v-5.65c0-0.709,0.378-1.365,0.993-1.72L7.007,0.63z" />
          </svg>
        </div>
      )}
      {label}
      {hasArrow && (
        <svg className="w-2.5 h-2.5 ml-0.5" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M3 9L9 3M9 3H4M9 3V8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </a>
  )
}

function WorkflowStep({
  num,
  title,
  description,
  active = false,
  onMouseEnter,
  onMouseLeave,
  onClick,
}: {
  num: number
  title: string
  description: string
  active?: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  onClick?: () => void
}) {
  return (
    <li
      className="group relative cursor-pointer"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {/* Arrow-shaped container with fading outline */}
      <div
        className="relative flex items-start gap-4 p-4 transition-all duration-300"
        style={{
          clipPath: active
            ? 'polygon(0 0, calc(100% - 24px) 0, 100% 50%, calc(100% - 24px) 100%, 0 100%)'
            : 'polygon(0 0, calc(100% - 16px) 0, 100% 50%, calc(100% - 16px) 100%, 0 100%)',
        }}
      >
        {/* Background fill with fade */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${active ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}`}
          style={{
            background: 'linear-gradient(90deg, rgba(75, 182, 211, 0.15) 0%, rgba(75, 182, 211, 0.08) 40%, rgba(75, 182, 211, 0.02) 70%, transparent 100%)',
            clipPath: 'inherit',
          }}
        />

        {/* Fading outline - only visible when active or hovered */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${active ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}`}
          style={{
            clipPath: 'inherit',
          }}
        >
          {/* Top edge with fade */}
          <div
            className="absolute top-0 left-0 right-6 h-px"
            style={{
              background: 'linear-gradient(90deg, rgba(75, 182, 211, 0.5) 0%, rgba(75, 182, 211, 0.3) 50%, transparent 100%)',
            }}
          />
          {/* Bottom edge with fade */}
          <div
            className="absolute bottom-0 left-0 right-6 h-px"
            style={{
              background: 'linear-gradient(90deg, rgba(75, 182, 211, 0.5) 0%, rgba(75, 182, 211, 0.3) 50%, transparent 100%)',
            }}
          />
          {/* Left edge */}
          <div
            className="absolute top-0 left-0 w-px h-full"
            style={{
              background: 'rgba(75, 182, 211, 0.5)',
            }}
          />
        </div>

        {/* Content with slide animation */}
        <div
          className={`relative flex h-7 w-7 items-center justify-center rounded-lg text-sm flex-shrink-0 transition-all duration-300 ${
            active
              ? 'bg-gradient-to-br from-[#446DCD] via-[#4BB6D3] to-[#6EF2CC] text-white'
              : 'bg-white/10 text-[#BAD7F5]/60'
          } ${!active ? 'group-hover:translate-x-2' : ''}`}
          style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 500 }}
        >
          {num}
        </div>
        <div className={`relative transition-all duration-300 ${!active ? 'group-hover:translate-x-2' : ''}`}>
          <p
            className={`text-base transition-colors ${active ? 'text-[#F2F5FA]' : 'text-[#C8D8F0] group-hover:text-[#E0E8F5]'}`}
            style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 400 }}
          >
            {title}
          </p>
          <p
            className="text-sm text-[#BAD7F5]/50"
            style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 300 }}
          >
            {description}
          </p>
        </div>
      </div>
    </li>
  )
}

// Preview components
function SearchPreview() {
  return (
    <div className="p-6 min-h-[400px]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 text-[#F2F5FA] text-sm" style={{ fontWeight: 400 }}>
          <SearchIcon className="w-4 h-4" />
          Søk
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[#BAD7F5]/50 text-sm" style={{ fontWeight: 300 }}>
          <FilterIcon className="w-4 h-4" />
          Filter
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-4 mb-6">
        <div className="flex items-center gap-3">
          <SearchIcon className="w-5 h-5 text-[#4BB6D3]" />
          <span className="text-[#F2F5FA]" style={{ fontWeight: 300 }}>IT-selskaper i Oslo med &gt;10 ansatte</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="text-sm text-[#BAD7F5]/50 mb-2" style={{ fontWeight: 300 }}>847 resultater funnet</div>
        {[
          { name: 'Acme Tech AS', industry: 'IT-tjenester', employees: '45', location: 'Oslo' },
          { name: 'Nordic Digital AS', industry: 'Programvare', employees: '128', location: 'Oslo' },
          { name: 'CloudWorks Norway', industry: 'Cloud Services', employees: '67', location: 'Oslo' },
        ].map((company, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#446DCD] to-[#4BB6D3] flex items-center justify-center text-white text-xs" style={{ fontWeight: 500 }}>
                {company.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm text-[#F2F5FA]" style={{ fontWeight: 400 }}>{company.name}</p>
                <p className="text-xs text-[#BAD7F5]/40" style={{ fontWeight: 300 }}>{company.industry}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-[#4BB6D3]" style={{ fontWeight: 400 }}>{company.employees} ansatte</p>
              <p className="text-xs text-[#BAD7F5]/40" style={{ fontWeight: 300 }}>{company.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AnalyzePreview() {
  return (
    <div className="p-6 min-h-[400px]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#446DCD] to-[#4BB6D3] flex items-center justify-center text-white" style={{ fontWeight: 500 }}>
          AT
        </div>
        <div>
          <h3 className="text-lg text-[#F2F5FA]" style={{ fontWeight: 400 }}>Acme Tech AS</h3>
          <p className="text-sm text-[#BAD7F5]/50" style={{ fontWeight: 300 }}>Org.nr: 912 345 678</p>
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 mb-4">
        <p className="text-sm text-[#BAD7F5]/50 mb-3" style={{ fontWeight: 300 }}>Eierstruktur</p>
        <div className="flex items-center justify-center gap-2">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#4BB6D3] flex items-center justify-center">
              <span className="text-xs text-[#F2F5FA]" style={{ fontWeight: 300 }}>Holding AS</span>
            </div>
            <p className="text-xs text-[#4BB6D3] mt-1" style={{ fontWeight: 400 }}>100%</p>
          </div>
          <div className="w-8 h-0.5 bg-[#4BB6D3]/50" />
          <div className="text-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#6EF2CC] flex items-center justify-center bg-[#6EF2CC]/10">
              <span className="text-xs text-[#F2F5FA]" style={{ fontWeight: 300 }}>Acme Tech</span>
            </div>
          </div>
          <div className="w-8 h-0.5 bg-[#4BB6D3]/50" />
          <div className="text-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#4BB6D3]/50 flex items-center justify-center">
              <span className="text-xs text-[#BAD7F5]/70" style={{ fontWeight: 300 }}>Datter AS</span>
            </div>
            <p className="text-xs text-[#4BB6D3]/70 mt-1" style={{ fontWeight: 400 }}>51%</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {[
          { label: 'Omsetning', value: '45M', change: '+12%' },
          { label: 'Ansatte', value: '45', change: '+8' },
          { label: 'Resultat', value: '4.2M', change: '+23%' },
        ].map((stat, i) => (
          <div key={i} className="rounded-lg border border-white/5 bg-white/[0.02] p-3 text-center">
            <p className="text-xs text-[#BAD7F5]/40" style={{ fontWeight: 300 }}>{stat.label}</p>
            <p className="text-lg text-[#F2F5FA]" style={{ fontWeight: 300 }}>{stat.value}</p>
            <p className="text-xs text-[#6EF2CC]" style={{ fontWeight: 400 }}>{stat.change}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function BuildPreview() {
  return (
    <div className="p-6 min-h-[400px]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg text-[#F2F5FA]" style={{ fontWeight: 400 }}>Ny målgruppe</h3>
        <div className="text-sm text-[#4BB6D3]" style={{ fontWeight: 400 }}>248 selskaper</div>
      </div>

      <div className="space-y-3 mb-6">
        {[
          { label: 'Bransje', value: 'IT-tjenester, Programvare' },
          { label: 'Lokasjon', value: 'Oslo, Bergen, Trondheim' },
          { label: 'Størrelse', value: '10-100 ansatte' },
          { label: 'Vekst', value: '> 15% siste år' },
        ].map((filter, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/[0.02]">
            <span className="text-sm text-[#BAD7F5]/50" style={{ fontWeight: 300 }}>{filter.label}</span>
            <span className="text-sm text-[#F2F5FA]" style={{ fontWeight: 400 }}>{filter.value}</span>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-[#4BB6D3]/30 bg-[#4BB6D3]/5 p-4">
        <p className="text-sm text-[#4BB6D3] mb-2" style={{ fontWeight: 400 }}>Målgruppe-preview</p>
        <div className="flex gap-2 flex-wrap">
          {['Acme Tech AS', 'Nordic Digital', 'CloudWorks', '+245 flere'].map((name, i) => (
            <span key={i} className="px-2 py-1 rounded bg-white/10 text-xs text-[#F2F5FA]" style={{ fontWeight: 300 }}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ExportPreview() {
  return (
    <div className="p-6 min-h-[400px]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg text-[#F2F5FA]" style={{ fontWeight: 400 }}>Eksporter data</h3>
        <div className="text-sm text-[#6EF2CC]" style={{ fontWeight: 400 }}>Klar for eksport</div>
      </div>

      <div className="space-y-3 mb-6">
        {[
          { icon: '📊', label: 'CSV-fil', desc: 'For Excel og regneark' },
          { icon: '🔗', label: 'HubSpot', desc: 'Direkte integrasjon' },
          { icon: '📧', label: 'E-postliste', desc: 'For kampanjer' },
        ].map((option, i) => (
          <div key={i} className={`flex items-center gap-4 p-4 rounded-xl border ${i === 0 ? 'border-[#6EF2CC]/50 bg-[#6EF2CC]/5' : 'border-white/10 bg-white/[0.02]'} cursor-pointer hover:bg-white/[0.04] transition-colors`}>
            <span className="text-2xl">{option.icon}</span>
            <div>
              <p className="text-sm text-[#F2F5FA]" style={{ fontWeight: 400 }}>{option.label}</p>
              <p className="text-xs text-[#BAD7F5]/40" style={{ fontWeight: 300 }}>{option.desc}</p>
            </div>
            {i === 0 && <CheckIcon className="ml-auto w-5 h-5 text-[#6EF2CC]" />}
          </div>
        ))}
      </div>

      <button
        className="w-full py-3 rounded-xl bg-gradient-to-r from-[#446DCD] via-[#4BB6D3] to-[#6EF2CC] text-white transition-all hover:opacity-90"
        style={{ fontWeight: 500 }}
      >
        Eksporter 248 selskaper
      </button>
    </div>
  )
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  )
}

function FilterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}
