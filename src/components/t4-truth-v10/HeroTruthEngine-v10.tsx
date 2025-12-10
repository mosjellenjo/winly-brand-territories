'use client'

import { useEffect, useRef, useState } from 'react'

export function HeroTruthEngineV10() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, speed: 0 })
  const lastMouseRef = useRef({ x: 0, y: 0, time: Date.now() })
  const colorPhaseRef = useRef(0)
  const [activeStep, setActiveStep] = useState(0)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  const displayedStep = hoveredStep !== null ? hoveredStep : activeStep

  // Grid glow effect - reduced brightness, traveling colors
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

      // Halved brightness for normal movement, extra for fast movement
      const speedMultiplier = Math.min(1, speed / 20)
      const baseOpacity = 0.005 // Very dim when still
      const normalOpacityBoost = 0.075 // Halved from v8's 0.15
      const fastMovementBoost = speed > 15 ? Math.min(0.1, (speed - 15) / 40) : 0

      // Traveling color phase - continues even when mouse is still
      colorPhaseRef.current += 0.025

      for (let x = 0; x <= canvas.width; x += gridSize) {
        const distanceFromMouse = Math.abs(x - mouseX)
        const intensity = Math.max(0, 1 - distanceFromMouse / glowRadius)

        // Color phase shifts based on position for traveling effect
        const colorPhase = colorPhaseRef.current + (x / canvas.width) * Math.PI * 2

        const lineOpacity = baseOpacity + (intensity > 0 ? intensity * (speedMultiplier * normalOpacityBoost + fastMovementBoost) : 0)

        if (intensity > 0 && speedMultiplier > 0.05) {
          // Colors shift between blue, cyan, and green
          const r = Math.floor(68 + Math.sin(colorPhase) * 25)
          const g = Math.floor(170 + Math.sin(colorPhase + 1.5) * 50)
          const b = Math.floor(195 + Math.cos(colorPhase) * 40)
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
        const lineOpacity = baseOpacity + (intensity > 0 ? intensity * (speedMultiplier * normalOpacityBoost + fastMovementBoost) : 0)

        if (intensity > 0 && speedMultiplier > 0.05) {
          const r = Math.floor(68 + Math.sin(colorPhase) * 25)
          const g = Math.floor(170 + Math.sin(colorPhase + 1.5) * 50)
          const b = Math.floor(195 + Math.cos(colorPhase) * 40)
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${lineOpacity})`
        } else {
          ctx.strokeStyle = `rgba(68, 109, 205, ${baseOpacity})`
        }

        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Glow points with traveling brightness wave
      if (speedMultiplier > 0.08) {
        for (let x = 0; x <= canvas.width; x += gridSize) {
          for (let y = 0; y <= canvas.height; y += gridSize) {
            const dx = x - mouseX
            const dy = y - mouseY
            const distance = Math.sqrt(dx * dx + dy * dy)
            const intensity = Math.max(0, 1 - distance / glowRadius)

            if (intensity > 0.1) {
              // Traveling brightness - wave moves through the grid
              const pointPhase = colorPhaseRef.current + (x + y) / 150
              const brightnessWave = 0.4 + 0.6 * Math.sin(pointPhase * 1.5)

              const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8)
              const alpha = intensity * (speedMultiplier * 0.25 + fastMovementBoost * 0.5) * brightnessWave
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

        mouseRef.current.speed = mouseRef.current.speed * 0.8 + speed * 0.2
      }

      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
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

      {/* Floating Navigation - expanded left, Winly logo pushed further left */}
      <header className="fixed top-12 left-0 right-0 z-50 px-6">
        <div className="mx-auto flex items-center" style={{ maxWidth: 'calc(100% - 48px)' }}>
          {/* Logo pushed further left outside toolbar */}
          <div className="mr-3 flex-shrink-0">
            <span className="text-2xl font-semibold text-[#F2F5FA]" style={{ fontFamily: 'system-ui' }}>
              Winly
            </span>
          </div>

          {/* Nav bar - expanded slightly to the left */}
          <nav className="flex-1 flex items-center justify-between rounded-xl border border-white/[0.08] bg-[#1A1D26]/70 backdrop-blur-xl px-2 py-2">
            <div className="flex items-center gap-1">
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
                className="ml-2 inline-flex items-center justify-center px-6 py-3 text-base font-normal text-[#10131C] rounded-lg transition-all hover:opacity-90"
                style={{ backgroundColor: '#C8E6F5' }}
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
                className="text-5xl sm:text-6xl lg:text-[64px] font-normal leading-[1.16] tracking-normal"
                style={{ fontFamily: 'system-ui' }}
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
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-normal text-[#10131C] rounded-lg transition-all hover:opacity-90"
                  style={{ backgroundColor: '#C8E6F5' }}
                >
                  Start prøveperiode
                </a>
              </div>

              <p className="mt-10 text-[#BAD7F5]/70 text-lg">
                <span className="text-[#F2F5FA] font-medium">Finn, forstå og vinn</span>{' '}
                norske B2B-kunder med det mest komplette datagrunnlaget.
              </p>

              {/* Workflow Steps with arrow shape, fading outline, slide animation */}
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

            {/* Right: Preview Panel with marble background image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[600px]">
                {/* Marble background - will use image when provided, fallback to gradient */}
                <div
                  className="absolute rounded-3xl pointer-events-none"
                  style={{
                    top: '-60px',
                    left: '-60px',
                    right: '-60px',
                    bottom: '-60px',
                    backgroundImage: 'url(/assets/marble-background.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                {/* Fallback gradient if image doesn't load */}
                <div
                  className="absolute rounded-3xl pointer-events-none"
                  style={{
                    top: '-60px',
                    left: '-60px',
                    right: '-60px',
                    bottom: '-60px',
                    background: `
                      linear-gradient(135deg,
                        rgba(180, 210, 255, 0.5) 0%,
                        rgba(150, 200, 240, 0.4) 25%,
                        rgba(180, 230, 220, 0.45) 50%,
                        rgba(200, 220, 250, 0.4) 75%,
                        rgba(170, 200, 230, 0.5) 100%
                      )
                    `,
                    filter: 'blur(50px)',
                  }}
                />

                {/* Preview panel */}
                <div
                  className="relative rounded-xl overflow-hidden shadow-2xl"
                  style={{
                    border: '1px solid rgba(255, 255, 255, 0.12)',
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

      {/* Bottom text */}
      <div className="relative z-10 text-center pb-12 px-10">
        <p className="text-[#BAD7F5]/50 text-base">
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
      className={`flex items-center px-4 py-2 rounded-lg text-base transition-all ${
        active
          ? 'text-[#F2F5FA]'
          : 'text-[#BAD7F5]/70 hover:text-[#F2F5FA]'
      }`}
    >
      {active && (
        <div className="w-4 h-4 mr-1.5">
          <svg viewBox="0 0 16 16" className="w-full h-full fill-current">
            <path d="M7.007,0.63c0.614-0.355,1.371-0.355,1.986,0l4.893,2.825c0.614,0.355,0.993,1.01,0.993,1.72v5.65 c0,0.709-0.378,1.365-0.993,1.72L8.993,15.37c-0.614,0.355-1.371,0.355-1.986,0l-4.893-2.825c-0.614-0.355-0.993-1.01-0.993-1.72 v-5.65c0-0.709,0.378-1.365,0.993-1.72L7.007,0.63z" />
          </svg>
        </div>
      )}
      {label}
      {hasArrow && (
        <svg className="w-3 h-3 ml-px" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={2}>
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
      {/* Arrow-shaped container */}
      <div
        className="relative flex items-start gap-4 p-5 transition-all duration-300"
        style={{
          clipPath: active
            ? 'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)'
            : 'polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%)',
          borderRadius: '12px 0 0 12px',
        }}
      >
        {/* Background fill with fade to right */}
        <div
          className={`absolute inset-0 transition-opacity duration-300 ${active ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'}`}
          style={{
            background: 'linear-gradient(90deg, rgba(75, 182, 211, 0.12) 0%, rgba(75, 182, 211, 0.06) 50%, transparent 85%)',
            clipPath: 'inherit',
          }}
        />

        {/* Fading outline - bright on left, fades to right */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${active ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'}`}
          style={{ clipPath: 'inherit' }}
        >
          {/* Top edge with fade */}
          <div
            className="absolute top-0 left-0 h-px"
            style={{
              width: '85%',
              background: 'linear-gradient(90deg, rgba(75, 182, 211, 0.6) 0%, rgba(75, 182, 211, 0.3) 60%, transparent 100%)',
            }}
          />
          {/* Bottom edge with fade */}
          <div
            className="absolute bottom-0 left-0 h-px"
            style={{
              width: '85%',
              background: 'linear-gradient(90deg, rgba(75, 182, 211, 0.6) 0%, rgba(75, 182, 211, 0.3) 60%, transparent 100%)',
            }}
          />
          {/* Left edge */}
          <div
            className="absolute top-0 left-0 w-px h-full"
            style={{ background: 'rgba(75, 182, 211, 0.6)' }}
          />
        </div>

        {/* Content - slides right on hover/active */}
        <div
          className={`relative flex h-8 w-8 items-center justify-center rounded-lg text-sm font-medium flex-shrink-0 transition-all duration-300 ${
            active
              ? 'bg-gradient-to-br from-[#446DCD] via-[#4BB6D3] to-[#6EF2CC] text-white translate-x-1'
              : 'bg-white/10 text-[#BAD7F5]/60 group-hover:translate-x-2'
          }`}
        >
          {num}
        </div>
        <div className={`relative transition-all duration-300 ${active ? 'translate-x-1' : 'group-hover:translate-x-2'}`}>
          {/* Brighter, slightly larger font */}
          <p className={`text-[17px] font-medium transition-colors ${active ? 'text-[#F2F5FA]' : 'text-[#D0E0F5] group-hover:text-[#E8F0FA]'}`}>
            {title}
          </p>
          <p className="text-sm text-[#BAD7F5]/50">{description}</p>
        </div>
      </div>
    </li>
  )
}

// Preview components
function SearchPreview() {
  return (
    <div className="p-6 min-h-[400px]">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 text-[#F2F5FA] text-sm">
          <SearchIcon className="w-4 h-4" />
          Søk
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-[#BAD7F5]/50 text-sm">
          <FilterIcon className="w-4 h-4" />
          Filter
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-4 mb-6">
        <div className="flex items-center gap-3">
          <SearchIcon className="w-5 h-5 text-[#4BB6D3]" />
          <span className="text-[#F2F5FA]">IT-selskaper i Oslo med &gt;10 ansatte</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="text-sm text-[#BAD7F5]/50 mb-2">847 resultater funnet</div>
        {[
          { name: 'Acme Tech AS', industry: 'IT-tjenester', employees: '45', location: 'Oslo' },
          { name: 'Nordic Digital AS', industry: 'Programvare', employees: '128', location: 'Oslo' },
          { name: 'CloudWorks Norway', industry: 'Cloud Services', employees: '67', location: 'Oslo' },
        ].map((company, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#446DCD] to-[#4BB6D3] flex items-center justify-center text-white text-xs font-medium">
                {company.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm text-[#F2F5FA]">{company.name}</p>
                <p className="text-xs text-[#BAD7F5]/40">{company.industry}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-[#4BB6D3]">{company.employees} ansatte</p>
              <p className="text-xs text-[#BAD7F5]/40">{company.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function AnalyzePreview() {
  return (
    <div className="p-6 min-h-[400px]">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#446DCD] to-[#4BB6D3] flex items-center justify-center text-white font-medium">
          AT
        </div>
        <div>
          <h3 className="text-lg text-[#F2F5FA]">Acme Tech AS</h3>
          <p className="text-sm text-[#BAD7F5]/50">Org.nr: 912 345 678</p>
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4 mb-4">
        <p className="text-sm text-[#BAD7F5]/50 mb-3">Eierstruktur</p>
        <div className="flex items-center justify-center gap-2">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#4BB6D3] flex items-center justify-center">
              <span className="text-xs text-[#F2F5FA]">Holding AS</span>
            </div>
            <p className="text-xs text-[#4BB6D3] mt-1">100%</p>
          </div>
          <div className="w-8 h-0.5 bg-[#4BB6D3]/50" />
          <div className="text-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#6EF2CC] flex items-center justify-center bg-[#6EF2CC]/10">
              <span className="text-xs text-[#F2F5FA]">Acme Tech</span>
            </div>
          </div>
          <div className="w-8 h-0.5 bg-[#4BB6D3]/50" />
          <div className="text-center">
            <div className="w-16 h-16 rounded-full border-2 border-[#4BB6D3]/50 flex items-center justify-center">
              <span className="text-xs text-[#BAD7F5]/70">Datter AS</span>
            </div>
            <p className="text-xs text-[#4BB6D3]/70 mt-1">51%</p>
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
            <p className="text-xs text-[#BAD7F5]/40">{stat.label}</p>
            <p className="text-lg text-[#F2F5FA]">{stat.value}</p>
            <p className="text-xs text-[#6EF2CC]">{stat.change}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function BuildPreview() {
  return (
    <div className="p-6 min-h-[400px]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg text-[#F2F5FA]">Ny målgruppe</h3>
        <div className="text-sm text-[#4BB6D3]">248 selskaper</div>
      </div>

      <div className="space-y-3 mb-6">
        {[
          { label: 'Bransje', value: 'IT-tjenester, Programvare' },
          { label: 'Lokasjon', value: 'Oslo, Bergen, Trondheim' },
          { label: 'Størrelse', value: '10-100 ansatte' },
          { label: 'Vekst', value: '> 15% siste år' },
        ].map((filter, i) => (
          <div key={i} className="flex items-center justify-between p-3 rounded-lg border border-white/10 bg-white/[0.02]">
            <span className="text-sm text-[#BAD7F5]/50">{filter.label}</span>
            <span className="text-sm text-[#F2F5FA]">{filter.value}</span>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-[#4BB6D3]/30 bg-[#4BB6D3]/5 p-4">
        <p className="text-sm text-[#4BB6D3] mb-2">Målgruppe-preview</p>
        <div className="flex gap-2 flex-wrap">
          {['Acme Tech AS', 'Nordic Digital', 'CloudWorks', '+245 flere'].map((name, i) => (
            <span key={i} className="px-2 py-1 rounded bg-white/10 text-xs text-[#F2F5FA]">
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
    <div className="p-6 min-h-[400px]">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg text-[#F2F5FA]">Eksporter data</h3>
        <div className="text-sm text-[#6EF2CC]">Klar for eksport</div>
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
              <p className="text-sm text-[#F2F5FA]">{option.label}</p>
              <p className="text-xs text-[#BAD7F5]/40">{option.desc}</p>
            </div>
            {i === 0 && <CheckIcon className="ml-auto w-5 h-5 text-[#6EF2CC]" />}
          </div>
        ))}
      </div>

      <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#446DCD] via-[#4BB6D3] to-[#6EF2CC] text-white font-medium transition-all hover:opacity-90">
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
