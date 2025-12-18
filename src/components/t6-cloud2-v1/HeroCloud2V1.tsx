'use client'

import { useEffect, useRef, useState } from 'react'

// Weather mood colors for the preview frame - softer, understated
// Cycles: sunny → rainy → cloudy → sunny
const weatherMoods = [
  { name: 'sunny', colors: ['rgba(251, 191, 36, 0.35)', 'rgba(245, 158, 11, 0.25)', 'rgba(252, 211, 77, 0.18)'], duration: 15000 },
  { name: 'rainy', colors: ['rgba(99, 102, 241, 0.35)', 'rgba(79, 70, 229, 0.25)', 'rgba(129, 140, 248, 0.18)'], duration: 12000 },
  { name: 'cloudy', colors: ['rgba(148, 163, 184, 0.4)', 'rgba(100, 116, 139, 0.3)', 'rgba(203, 213, 225, 0.2)'], duration: 7000 },
]

export function HeroCloud2V1() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0, speed: 0 })
  const lastMouseRef = useRef({ x: 0, y: 0, time: Date.now() })
  const colorPhaseRef = useRef(0)
  const [activeStep, setActiveStep] = useState(0)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)
  const [weatherMoodIndex, setWeatherMoodIndex] = useState(0)
  const [moodTransition, setMoodTransition] = useState(0) // 0 to 1 for smooth transitions
  const [sunPosition, setSunPosition] = useState(-1) // -1 means not ready yet, 0-1 is actual position
  const [sunCycleStarted, setSunCycleStarted] = useState(false) // Track if sun has properly started from left

  const displayedStep = hoveredStep !== null ? hoveredStep : activeStep

  // Weather mood cycling effect with smooth crossfade
  useEffect(() => {
    let transitionFrame: number
    let startTime = Date.now()
    let currentMoodIdx = weatherMoodIndex

    const animate = () => {
      const cycleDuration = weatherMoods[currentMoodIdx].duration
      const elapsed = Date.now() - startTime
      const cycleProgress = (elapsed % cycleDuration) / cycleDuration

      // Smooth transition: fade out current (last 40%), fade in next
      setMoodTransition(cycleProgress)

      // Always update sun position
      setSunPosition(cycleProgress)

      // Change mood at cycle end
      if (elapsed >= cycleDuration) {
        startTime = Date.now()
        currentMoodIdx = (currentMoodIdx + 1) % weatherMoods.length
        setWeatherMoodIndex(currentMoodIdx)
      }

      transitionFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(transitionFrame)
    }
  }, [])

  // Mark sun cycle as started when position is low (on the left)
  // Once started, it stays true for the entire cycle
  useEffect(() => {
    if (!sunCycleStarted && sunPosition >= 0 && sunPosition < 0.1) {
      setSunCycleStarted(true)
    }
  }, [sunPosition, sunCycleStarted])

  // Sun is visible once the cycle has properly started from the left
  const showSun = sunCycleStarted && sunPosition >= 0

  // Calculate sun opacity for smooth fade in at start (sun fades in while moving)
  const sunOpacity = sunPosition < 0.06 ? sunPosition / 0.06 : 1

  // Grid glow effect - Light theme version
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

      const speedMultiplier = Math.min(1, speed / 20)
      // Base opacity for always-visible subtle grid (light theme)
      const baseGridOpacity = 0.02
      const normalOpacityBoost = 0.04
      const fastMovementBoost = speed > 15 ? Math.min(0.05, (speed - 15) / 40) : 0

      colorPhaseRef.current += 0.025

      // Draw grid lines - light grey, brighter blue on hover
      for (let x = 0; x <= canvas.width; x += gridSize) {
        const distanceFromMouse = Math.abs(x - mouseX)
        const intensity = Math.max(0, 1 - distanceFromMouse / glowRadius)

        const colorPhase = colorPhaseRef.current + (x / canvas.width) * Math.PI * 2
        const hoverOpacity = intensity > 0 ? intensity * (speedMultiplier * normalOpacityBoost + fastMovementBoost) : 0

        if (intensity > 0 && speedMultiplier > 0.05) {
          // Blue glow when hovering (adjusted for light theme)
          const r = Math.floor(30 + Math.sin(colorPhase) * 20)
          const g = Math.floor(120 + Math.sin(colorPhase + 1.5) * 40)
          const b = Math.floor(200 + Math.cos(colorPhase) * 30)
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${baseGridOpacity + hoverOpacity})`
        } else {
          // Subtle grey grid always visible
          ctx.strokeStyle = `rgba(180, 190, 210, ${baseGridOpacity})`
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
        const hoverOpacity = intensity > 0 ? intensity * (speedMultiplier * normalOpacityBoost + fastMovementBoost) : 0

        if (intensity > 0 && speedMultiplier > 0.05) {
          const r = Math.floor(30 + Math.sin(colorPhase) * 20)
          const g = Math.floor(120 + Math.sin(colorPhase + 1.5) * 40)
          const b = Math.floor(200 + Math.cos(colorPhase) * 30)
          ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${baseGridOpacity + hoverOpacity})`
        } else {
          ctx.strokeStyle = `rgba(180, 190, 210, ${baseGridOpacity})`
        }

        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Mouse-tracking glow points at grid intersections
      if (speedMultiplier > 0.08) {
        for (let x = 0; x <= canvas.width; x += gridSize) {
          for (let y = 0; y <= canvas.height; y += gridSize) {
            const dx = x - mouseX
            const dy = y - mouseY
            const distance = Math.sqrt(dx * dx + dy * dy)
            const intensity = Math.max(0, 1 - distance / glowRadius)

            if (intensity > 0.1) {
              const pointPhase = colorPhaseRef.current + (x + y) / 150
              const brightnessWave = 0.4 + 0.6 * Math.sin(pointPhase * 1.5)

              const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8)
              const alpha = intensity * (speedMultiplier * 0.35 + fastMovementBoost * 0.5) * brightnessWave
              gradient.addColorStop(0, `rgba(59, 130, 246, ${alpha})`)
              gradient.addColorStop(1, 'rgba(59, 130, 246, 0)')

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
    { num: 1, title: 'Helhetlig datainnsamling', description: 'Vi samler og strukturerer all offentlig, finansiell og kommersiell data' },
    { num: 2, title: 'Tidlig mønstergjenkjenning', description: 'Vi trener modeller til å gjenkjenne mønstre og knytte relasjoner' },
    { num: 3, title: 'Forutsigbart værkart for muligheter', description: 'Prediktiv innsikt om fremtidige forretningsmuligheter' },
    { num: 4, title: 'Signaler som varsler før markedet endres', description: 'Bli varslet når data og signaler tyder på at mulighetsbildet endres.' },
  ]

  const stepPreviews = [
    <DataPreview key="data" />,
    <PatternPreview key="pattern" />,
    <MapPreview key="map" />,
    <AlertPreview key="alert" />,
  ]

  const handleHover = (index: number) => {
    setHoveredStep(index)
    setActiveStep(index)
  }

  return (
    <section className="relative min-h-screen bg-[#F8FAFC] overflow-hidden">
      {/* Canvas for interactive grid glow effect */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Floating Navigation - Light theme */}
      <header className="fixed top-12 left-0 right-0 z-50 px-6">
        <div className="mx-auto flex items-center" style={{ maxWidth: 'calc(100% - 48px)' }}>
          <div className="mr-6 flex-shrink-0">
            <span className="text-2xl font-semibold text-slate-800" style={{ fontFamily: 'system-ui' }}>
              Winly
            </span>
          </div>

          <nav className="flex-1 flex items-center justify-between rounded-xl border border-slate-200/50 bg-white/40 backdrop-blur-xl px-2 py-2 transition-colors duration-300 hover:bg-white/60 shadow-sm">
            <div className="flex items-center gap-1">
              <NavItem label="Hjem" active />
              <NavItem label="Produkt" />
              <NavItem label="Priser" />
              <NavItem label="Om oss" />
            </div>
            <div className="flex items-center gap-1">
              <NavItem label="Kontakt" hasArrow />
              <NavItem label="Logg inn" hasArrow />
              <a
                href="#"
                className="ml-2 inline-flex items-center justify-center px-6 py-3 text-base font-normal text-white rounded-lg transition-all hover:opacity-90 bg-[#3B82F6]"
              >
                Prøv gratis
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Content */}
      <div className="relative z-10 pt-40 pb-20" style={{ padding: '180px 70px 80px 90px' }}>
        <div className="mx-auto" style={{ maxWidth: 'calc(100% - 140px)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: Text Content */}
            <div className="max-w-3xl">
              <h1
                className="text-5xl sm:text-6xl lg:text-[56px] font-normal leading-[1.16] tracking-normal"
                style={{ fontFamily: 'system-ui' }}
              >
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, rgb(59, 130, 246), rgb(14, 165, 233), rgb(6, 182, 212))',
                  }}
                >
                  Winly
                </span>
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, rgb(6, 182, 212), rgb(14, 165, 233))',
                  }}
                >
                  ,
                </span>
                <span className="text-slate-700"> Norges første</span>
                <br />
                <span className="text-slate-700">værkart for </span>
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, rgb(59, 130, 246), rgb(14, 165, 233), rgb(6, 182, 212))',
                  }}
                >
                  vekstmuligheter
                </span>
              </h1>

              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3.5 text-base font-normal text-white rounded-lg transition-all hover:opacity-90 bg-[#3B82F6] shadow-lg shadow-blue-500/25"
                >
                  Start prøveperiode
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>

              <p className="mt-8 text-slate-500 text-lg leading-relaxed">
                Glem anbudsvarsling og AI som lapper sammen tilbud i siste liten -{' '}
                <span className="text-slate-700 font-medium">Winly gir deg innsikten du trenger</span> for å planlegge ressurser og jobbe strategisk lenge før utlysningen kommer.
              </p>

              {/* Workflow Steps */}
              <ul className="mt-8 space-y-0">
                {steps.map((step, index) => (
                  <WorkflowStep
                    key={step.num}
                    num={step.num}
                    title={step.title}
                    description={step.description}
                    active={displayedStep === index}
                    isHovered={hoveredStep === index}
                    onMouseEnter={() => handleHover(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                  />
                ))}
              </ul>
            </div>

            {/* Right: Preview Panel */}
            <div className="relative flex justify-center lg:justify-end" style={{ marginTop: '70px' }}>
              <div className="relative w-full max-w-[600px] h-[450px]">
                {/* Weather mood frame - contained within the transparent border area */}
                {(() => {
                  const currentMood = weatherMoods[weatherMoodIndex]
                  const nextMood = weatherMoods[(weatherMoodIndex + 1) % weatherMoods.length]

                  // Calculate opacity for smooth crossfade
                  // Current mood fades out in last 40%, next mood fades in during that period
                  // Using easeInOut for smoother, more natural transitions
                  const fadeOutStart = 0.6
                  const rawProgress = moodTransition > fadeOutStart
                    ? (moodTransition - fadeOutStart) / (1 - fadeOutStart)
                    : 0
                  // Apply ease-in-out curve for smoother transitions
                  const easedProgress = rawProgress < 0.5
                    ? 2 * rawProgress * rawProgress
                    : 1 - Math.pow(-2 * rawProgress + 2, 2) / 2
                  const currentOpacity = moodTransition > fadeOutStart ? 1 - easedProgress : 1
                  const nextOpacity = easedProgress

                  return (
                    <>
                      {/* Frame container - clips the glow to stay between outer edge and inner card */}
                      <div
                        className="absolute rounded-2xl pointer-events-none overflow-hidden"
                        style={{
                          top: '-50px',
                          left: '-50px',
                          width: '700px',
                          height: '550px',
                        }}
                      >
                        {/* Inner mask to cut out the card area */}
                        <div className="relative w-full h-full">
                          {/* Current mood layer */}
                          <div
                            className="absolute inset-0"
                            style={{
                              background: currentMood.name === 'cloudy'
                                ? 'linear-gradient(180deg, rgba(226, 232, 240, 0.5) 0%, rgba(203, 213, 225, 0.4) 50%, rgba(226, 232, 240, 0.3) 100%)'
                                : currentMood.name === 'sunny'
                                ? 'linear-gradient(180deg, rgba(59, 130, 246, 0.45) 0%, rgba(96, 165, 250, 0.35) 40%, rgba(147, 197, 253, 0.25) 70%, rgba(254, 249, 195, 0.2) 100%)'
                                : currentMood.name === 'rainy'
                                ? 'linear-gradient(180deg, rgba(71, 85, 105, 0.6) 0%, rgba(100, 116, 139, 0.5) 30%, rgba(71, 85, 105, 0.45) 60%, rgba(51, 65, 85, 0.4) 100%)'
                                : `
                                linear-gradient(135deg, ${currentMood.colors[0]} 0%, ${currentMood.colors[1]} 30%, ${currentMood.colors[2]} 60%, transparent 100%),
                                linear-gradient(225deg, ${currentMood.colors[1]} 0%, ${currentMood.colors[0]} 40%, transparent 80%),
                                linear-gradient(315deg, ${currentMood.colors[2]} 0%, ${currentMood.colors[1]} 50%, transparent 90%)
                              `,
                              opacity: currentOpacity,
                            }}
                          />
                          {/* Next mood layer (for crossfade) */}
                          <div
                            className="absolute inset-0"
                            style={{
                              background: nextMood.name === 'cloudy'
                                ? 'linear-gradient(180deg, rgba(226, 232, 240, 0.5) 0%, rgba(203, 213, 225, 0.4) 50%, rgba(226, 232, 240, 0.3) 100%)'
                                : nextMood.name === 'sunny'
                                ? 'linear-gradient(180deg, rgba(59, 130, 246, 0.45) 0%, rgba(96, 165, 250, 0.35) 40%, rgba(147, 197, 253, 0.25) 70%, rgba(254, 249, 195, 0.2) 100%)'
                                : nextMood.name === 'rainy'
                                ? 'linear-gradient(180deg, rgba(71, 85, 105, 0.6) 0%, rgba(100, 116, 139, 0.5) 30%, rgba(71, 85, 105, 0.45) 60%, rgba(51, 65, 85, 0.4) 100%)'
                                : `
                                linear-gradient(135deg, ${nextMood.colors[0]} 0%, ${nextMood.colors[1]} 30%, ${nextMood.colors[2]} 60%, transparent 100%),
                                linear-gradient(225deg, ${nextMood.colors[1]} 0%, ${nextMood.colors[0]} 40%, transparent 80%),
                                linear-gradient(315deg, ${nextMood.colors[2]} 0%, ${nextMood.colors[1]} 50%, transparent 90%)
                              `,
                              opacity: nextOpacity,
                            }}
                          />

                          {/* Cloud blobs for cloudy mood - yr.no inspired with depth and movement */}
                          {currentMood.name === 'cloudy' && (
                            <div className="absolute inset-0" style={{ opacity: currentOpacity }}>
                              {/* Dark cloud mass - top, creates depth like yr.no overcast */}
                              <div
                                style={{
                                  position: 'absolute',
                                  top: '-40px',
                                  left: '-20%',
                                  width: '140%',
                                  height: '180px',
                                  background: 'linear-gradient(180deg, rgba(100, 116, 139, 0.5) 0%, rgba(148, 163, 184, 0.3) 60%, transparent 100%)',
                                  filter: 'blur(20px)',
                                  animation: 'cloud-drift-1 25s ease-in-out infinite',
                                }}
                              />
                              {/* Large billowing cloud - left side */}
                              <div
                                style={{
                                  position: 'absolute',
                                  top: '10%',
                                  left: '-10%',
                                  width: '250px',
                                  height: '200px',
                                  background: 'radial-gradient(ellipse 100% 80% at 30% 40%, rgba(255, 255, 255, 0.85) 0%, rgba(226, 232, 240, 0.5) 40%, transparent 70%)',
                                  borderRadius: '50%',
                                  filter: 'blur(15px)',
                                  animation: 'cloud-drift-2 20s ease-in-out infinite',
                                }}
                              />
                              {/* Mid-tone cloud mass - center */}
                              <div
                                style={{
                                  position: 'absolute',
                                  top: '20%',
                                  left: '30%',
                                  width: '200px',
                                  height: '150px',
                                  background: 'radial-gradient(ellipse 90% 70% at 50% 50%, rgba(203, 213, 225, 0.7) 0%, rgba(148, 163, 184, 0.4) 50%, transparent 80%)',
                                  borderRadius: '50%',
                                  filter: 'blur(18px)',
                                  animation: 'cloud-drift-3 22s ease-in-out infinite',
                                }}
                              />
                              {/* Bright highlight cloud - right side */}
                              <div
                                style={{
                                  position: 'absolute',
                                  top: '5%',
                                  right: '-5%',
                                  width: '220px',
                                  height: '170px',
                                  background: 'radial-gradient(ellipse 80% 90% at 60% 30%, rgba(255, 255, 255, 0.9) 0%, rgba(241, 245, 249, 0.5) 45%, transparent 75%)',
                                  borderRadius: '50%',
                                  filter: 'blur(12px)',
                                  animation: 'cloud-drift-4 18s ease-in-out infinite',
                                }}
                              />
                              {/* Lower cloud layer - adds depth */}
                              <div
                                style={{
                                  position: 'absolute',
                                  bottom: '10%',
                                  left: '10%',
                                  width: '180px',
                                  height: '120px',
                                  background: 'radial-gradient(ellipse at center, rgba(226, 232, 240, 0.6) 0%, rgba(203, 213, 225, 0.3) 50%, transparent 80%)',
                                  borderRadius: '50%',
                                  filter: 'blur(20px)',
                                  animation: 'cloud-drift-1 28s ease-in-out infinite reverse',
                                }}
                              />
                              {/* Small wispy cloud - bottom right */}
                              <div
                                style={{
                                  position: 'absolute',
                                  bottom: '20%',
                                  right: '15%',
                                  width: '150px',
                                  height: '100px',
                                  background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.7) 0%, rgba(241, 245, 249, 0.35) 45%, transparent 75%)',
                                  borderRadius: '50%',
                                  filter: 'blur(16px)',
                                  animation: 'cloud-drift-2 24s ease-in-out infinite reverse',
                                }}
                              />
                              {/* Shadow undertone - bottom */}
                              <div
                                style={{
                                  position: 'absolute',
                                  bottom: '-20px',
                                  left: '20%',
                                  width: '60%',
                                  height: '100px',
                                  background: 'linear-gradient(0deg, rgba(100, 116, 139, 0.25) 0%, transparent 100%)',
                                  filter: 'blur(25px)',
                                  animation: 'cloud-drift-3 30s ease-in-out infinite',
                                }}
                              />
                            </div>
                          )}

                          {/* Cloud blobs for next mood if it's cloudy */}
                          {nextMood.name === 'cloudy' && (
                            <div className="absolute inset-0" style={{ opacity: nextOpacity }}>
                              {/* Dark cloud mass - top, creates depth like yr.no overcast */}
                              <div
                                style={{
                                  position: 'absolute',
                                  top: '-40px',
                                  left: '-20%',
                                  width: '140%',
                                  height: '180px',
                                  background: 'linear-gradient(180deg, rgba(100, 116, 139, 0.5) 0%, rgba(148, 163, 184, 0.3) 60%, transparent 100%)',
                                  filter: 'blur(20px)',
                                  animation: 'cloud-drift-1 25s ease-in-out infinite',
                                }}
                              />
                              {/* Large billowing cloud - left side */}
                              <div
                                style={{
                                  position: 'absolute',
                                  top: '10%',
                                  left: '-10%',
                                  width: '250px',
                                  height: '200px',
                                  background: 'radial-gradient(ellipse 100% 80% at 30% 40%, rgba(255, 255, 255, 0.85) 0%, rgba(226, 232, 240, 0.5) 40%, transparent 70%)',
                                  borderRadius: '50%',
                                  filter: 'blur(15px)',
                                  animation: 'cloud-drift-2 20s ease-in-out infinite',
                                }}
                              />
                              {/* Mid-tone cloud mass - center */}
                              <div
                                style={{
                                  position: 'absolute',
                                  top: '20%',
                                  left: '30%',
                                  width: '200px',
                                  height: '150px',
                                  background: 'radial-gradient(ellipse 90% 70% at 50% 50%, rgba(203, 213, 225, 0.7) 0%, rgba(148, 163, 184, 0.4) 50%, transparent 80%)',
                                  borderRadius: '50%',
                                  filter: 'blur(18px)',
                                  animation: 'cloud-drift-3 22s ease-in-out infinite',
                                }}
                              />
                              {/* Bright highlight cloud - right side */}
                              <div
                                style={{
                                  position: 'absolute',
                                  top: '5%',
                                  right: '-5%',
                                  width: '220px',
                                  height: '170px',
                                  background: 'radial-gradient(ellipse 80% 90% at 60% 30%, rgba(255, 255, 255, 0.9) 0%, rgba(241, 245, 249, 0.5) 45%, transparent 75%)',
                                  borderRadius: '50%',
                                  filter: 'blur(12px)',
                                  animation: 'cloud-drift-4 18s ease-in-out infinite',
                                }}
                              />
                              {/* Lower cloud layer - adds depth */}
                              <div
                                style={{
                                  position: 'absolute',
                                  bottom: '10%',
                                  left: '10%',
                                  width: '180px',
                                  height: '120px',
                                  background: 'radial-gradient(ellipse at center, rgba(226, 232, 240, 0.6) 0%, rgba(203, 213, 225, 0.3) 50%, transparent 80%)',
                                  borderRadius: '50%',
                                  filter: 'blur(20px)',
                                  animation: 'cloud-drift-1 28s ease-in-out infinite reverse',
                                }}
                              />
                              {/* Small wispy cloud - bottom right */}
                              <div
                                style={{
                                  position: 'absolute',
                                  bottom: '20%',
                                  right: '15%',
                                  width: '150px',
                                  height: '100px',
                                  background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.7) 0%, rgba(241, 245, 249, 0.35) 45%, transparent 75%)',
                                  borderRadius: '50%',
                                  filter: 'blur(16px)',
                                  animation: 'cloud-drift-2 24s ease-in-out infinite reverse',
                                }}
                              />
                              {/* Shadow undertone - bottom */}
                              <div
                                style={{
                                  position: 'absolute',
                                  bottom: '-20px',
                                  left: '20%',
                                  width: '60%',
                                  height: '100px',
                                  background: 'linear-gradient(0deg, rgba(100, 116, 139, 0.25) 0%, transparent 100%)',
                                  filter: 'blur(25px)',
                                  animation: 'cloud-drift-3 30s ease-in-out infinite',
                                }}
                              />
                            </div>
                          )}

                          {/* Sunny mood - clear blue sky with sun and white clouds like yr.no */}
                          {currentMood.name === 'sunny' && (
                            <div className="absolute inset-0" style={{ opacity: currentOpacity }}>
                              {/* Sun container - fades in from left and follows arc across frame */}
                              {showSun && (
                                <div
                                  style={{
                                    position: 'absolute',
                                    top: '5%',
                                    left: '-100px',
                                    width: '200px',
                                    height: '200px',
                                    opacity: sunOpacity,
                                    transform: `translate(${sunPosition * 550}%, ${-40 * Math.sin(sunPosition * Math.PI)}%)`,
                                  }}
                                >
                                  {/* Bright sun - outer warm glow */}
                                  <div
                                    style={{
                                      position: 'absolute',
                                      inset: 0,
                                      background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.95) 0%, rgba(254, 249, 195, 0.7) 20%, rgba(253, 224, 71, 0.4) 40%, rgba(251, 191, 36, 0.2) 60%, transparent 80%)',
                                      borderRadius: '50%',
                                      filter: 'blur(15px)',
                                      animation: 'sun-glow-pulse 8s ease-in-out infinite',
                                    }}
                                  />
                                  {/* Sun core - brighter center */}
                                  <div
                                    style={{
                                      position: 'absolute',
                                      top: '50%',
                                      left: '50%',
                                      transform: 'translate(-50%, -50%)',
                                      width: '80px',
                                      height: '80px',
                                      background: 'radial-gradient(circle at center, rgba(255, 255, 255, 1) 0%, rgba(254, 249, 195, 0.9) 40%, rgba(253, 224, 71, 0.5) 70%, transparent 100%)',
                                      borderRadius: '50%',
                                      filter: 'blur(8px)',
                                    }}
                                  />
                                </div>
                              )}
                              {/* White fluffy cloud - top left */}
                              <div
                                style={{
                                  position: 'absolute',
                                  top: '-10px',
                                  left: '-20px',
                                  width: '180px',
                                  height: '100px',
                                  background: 'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.5) 50%, transparent 80%)',
                                  borderRadius: '50%',
                                  filter: 'blur(12px)',
                                  animation: 'cloud-drift-1 20s ease-in-out infinite',
                                }}
                              />
                              {/* White fluffy cloud - top right */}
                              <div
                                style={{
                                  position: 'absolute',
                                  top: '20px',
                                  right: '-10px',
                                  width: '150px',
                                  height: '80px',
                                  background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.4) 55%, transparent 85%)',
                                  borderRadius: '50%',
                                  filter: 'blur(10px)',
                                  animation: 'cloud-drift-2 25s ease-in-out infinite',
                                }}
                              />
                              {/* Small accent cloud - top center */}
                              <div
                                style={{
                                  position: 'absolute',
                                  top: '5px',
                                  left: '40%',
                                  width: '100px',
                                  height: '60px',
                                  background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.3) 50%, transparent 80%)',
                                  borderRadius: '50%',
                                  filter: 'blur(8px)',
                                  animation: 'cloud-drift-3 18s ease-in-out infinite',
                                }}
                              />
                            </div>
                          )}

                          {/* Sunny mood for next (crossfade) */}
                          {nextMood.name === 'sunny' && (
                            <div className="absolute inset-0" style={{ opacity: nextOpacity }}>
                              {/* Sun container - fades in from left and follows arc across frame */}
                              {showSun && (
                                <div
                                  style={{
                                    position: 'absolute',
                                    top: '5%',
                                    left: '-100px',
                                    width: '200px',
                                    height: '200px',
                                    opacity: sunOpacity,
                                    transform: `translate(${sunPosition * 550}%, ${-40 * Math.sin(sunPosition * Math.PI)}%)`,
                                  }}
                                >
                                  {/* Bright sun - outer warm glow */}
                                  <div
                                    style={{
                                      position: 'absolute',
                                      inset: 0,
                                      background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.95) 0%, rgba(254, 249, 195, 0.7) 20%, rgba(253, 224, 71, 0.4) 40%, rgba(251, 191, 36, 0.2) 60%, transparent 80%)',
                                      borderRadius: '50%',
                                      filter: 'blur(15px)',
                                      animation: 'sun-glow-pulse 8s ease-in-out infinite',
                                    }}
                                  />
                                  {/* Sun core - brighter center */}
                                  <div
                                    style={{
                                      position: 'absolute',
                                      top: '50%',
                                      left: '50%',
                                      transform: 'translate(-50%, -50%)',
                                      width: '80px',
                                      height: '80px',
                                      background: 'radial-gradient(circle at center, rgba(255, 255, 255, 1) 0%, rgba(254, 249, 195, 0.9) 40%, rgba(253, 224, 71, 0.5) 70%, transparent 100%)',
                                      borderRadius: '50%',
                                      filter: 'blur(8px)',
                                    }}
                                  />
                                </div>
                              )}
                              {/* White fluffy cloud - top left */}
                              <div
                                style={{
                                  position: 'absolute',
                                  top: '-10px',
                                  left: '-20px',
                                  width: '180px',
                                  height: '100px',
                                  background: 'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.5) 50%, transparent 80%)',
                                  borderRadius: '50%',
                                  filter: 'blur(12px)',
                                  animation: 'cloud-drift-1 20s ease-in-out infinite',
                                }}
                              />
                              {/* White fluffy cloud - top right */}
                              <div
                                style={{
                                  position: 'absolute',
                                  top: '20px',
                                  right: '-10px',
                                  width: '150px',
                                  height: '80px',
                                  background: 'radial-gradient(ellipse 70% 50% at 50% 60%, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.4) 55%, transparent 85%)',
                                  borderRadius: '50%',
                                  filter: 'blur(10px)',
                                  animation: 'cloud-drift-2 25s ease-in-out infinite',
                                }}
                              />
                              {/* Small accent cloud - top center */}
                              <div
                                style={{
                                  position: 'absolute',
                                  top: '5px',
                                  left: '40%',
                                  width: '100px',
                                  height: '60px',
                                  background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.3) 50%, transparent 80%)',
                                  borderRadius: '50%',
                                  filter: 'blur(8px)',
                                  animation: 'cloud-drift-3 18s ease-in-out infinite',
                                }}
                              />
                            </div>
                          )}

                          {/* Rainy mood - dark clouds with falling rain like yr.no */}
                          {currentMood.name === 'rainy' && (
                            <div className="absolute inset-0" style={{ opacity: currentOpacity }}>
                              {/* Dark storm clouds */}
                              <div
                                style={{
                                  position: 'absolute',
                                  top: '-30px',
                                  left: '-40px',
                                  width: '250px',
                                  height: '140px',
                                  background: 'radial-gradient(ellipse 90% 70% at 50% 60%, rgba(71, 85, 105, 0.8) 0%, rgba(51, 65, 85, 0.5) 50%, transparent 80%)',
                                  borderRadius: '50%',
                                  filter: 'blur(15px)',
                                  animation: 'cloud-drift-1 22s ease-in-out infinite',
                                }}
                              />
                              <div
                                style={{
                                  position: 'absolute',
                                  top: '-20px',
                                  right: '-30px',
                                  width: '200px',
                                  height: '120px',
                                  background: 'radial-gradient(ellipse 85% 65% at 50% 55%, rgba(100, 116, 139, 0.7) 0%, rgba(71, 85, 105, 0.4) 55%, transparent 85%)',
                                  borderRadius: '50%',
                                  filter: 'blur(18px)',
                                  animation: 'cloud-drift-2 26s ease-in-out infinite',
                                }}
                              />
                              {/* Rain streaks - short diagonal lines like yr.no */}
                              <div
                                className="absolute overflow-hidden"
                                style={{
                                  top: '-100%',
                                  left: '-50%',
                                  right: '-50%',
                                  bottom: '-50%',
                                  background: `repeating-linear-gradient(
                                    105deg,
                                    transparent 0px,
                                    transparent 3px,
                                    rgba(200, 215, 230, 0.4) 3px,
                                    rgba(200, 215, 230, 0.4) 4px,
                                    transparent 4px,
                                    transparent 80px
                                  )`,
                                  maskImage: `repeating-linear-gradient(
                                    195deg,
                                    transparent 0px,
                                    transparent 40px,
                                    black 40px,
                                    black 90px,
                                    transparent 90px,
                                    transparent 180px
                                  )`,
                                  WebkitMaskImage: `repeating-linear-gradient(
                                    195deg,
                                    transparent 0px,
                                    transparent 40px,
                                    black 40px,
                                    black 90px,
                                    transparent 90px,
                                    transparent 180px
                                  )`,
                                  animation: 'rain-fall-1 0.8s linear infinite',
                                }}
                              />
                              <div
                                className="absolute overflow-hidden"
                                style={{
                                  top: '-100%',
                                  left: '-50%',
                                  right: '-50%',
                                  bottom: '-50%',
                                  background: `repeating-linear-gradient(
                                    108deg,
                                    transparent 0px,
                                    transparent 5px,
                                    rgba(180, 200, 220, 0.35) 5px,
                                    rgba(180, 200, 220, 0.35) 6px,
                                    transparent 6px,
                                    transparent 100px
                                  )`,
                                  maskImage: `repeating-linear-gradient(
                                    198deg,
                                    transparent 0px,
                                    transparent 60px,
                                    black 60px,
                                    black 120px,
                                    transparent 120px,
                                    transparent 220px
                                  )`,
                                  WebkitMaskImage: `repeating-linear-gradient(
                                    198deg,
                                    transparent 0px,
                                    transparent 60px,
                                    black 60px,
                                    black 120px,
                                    transparent 120px,
                                    transparent 220px
                                  )`,
                                  animation: 'rain-fall-2 1.0s linear infinite',
                                }}
                              />
                              <div
                                className="absolute overflow-hidden"
                                style={{
                                  top: '-100%',
                                  left: '-50%',
                                  right: '-50%',
                                  bottom: '-50%',
                                  background: `repeating-linear-gradient(
                                    103deg,
                                    transparent 0px,
                                    transparent 2px,
                                    rgba(190, 210, 230, 0.3) 2px,
                                    rgba(190, 210, 230, 0.3) 3px,
                                    transparent 3px,
                                    transparent 120px
                                  )`,
                                  maskImage: `repeating-linear-gradient(
                                    193deg,
                                    transparent 0px,
                                    transparent 30px,
                                    black 30px,
                                    black 70px,
                                    transparent 70px,
                                    transparent 150px
                                  )`,
                                  WebkitMaskImage: `repeating-linear-gradient(
                                    193deg,
                                    transparent 0px,
                                    transparent 30px,
                                    black 30px,
                                    black 70px,
                                    transparent 70px,
                                    transparent 150px
                                  )`,
                                  animation: 'rain-fall-3 1.2s linear infinite',
                                }}
                              />
                            </div>
                          )}

                          {/* Rainy mood for next (crossfade) */}
                          {nextMood.name === 'rainy' && (
                            <div className="absolute inset-0" style={{ opacity: nextOpacity }}>
                              {/* Dark storm clouds */}
                              <div
                                style={{
                                  position: 'absolute',
                                  top: '-30px',
                                  left: '-40px',
                                  width: '250px',
                                  height: '140px',
                                  background: 'radial-gradient(ellipse 90% 70% at 50% 60%, rgba(71, 85, 105, 0.8) 0%, rgba(51, 65, 85, 0.5) 50%, transparent 80%)',
                                  borderRadius: '50%',
                                  filter: 'blur(15px)',
                                  animation: 'cloud-drift-1 22s ease-in-out infinite',
                                }}
                              />
                              <div
                                style={{
                                  position: 'absolute',
                                  top: '-20px',
                                  right: '-30px',
                                  width: '200px',
                                  height: '120px',
                                  background: 'radial-gradient(ellipse 85% 65% at 50% 55%, rgba(100, 116, 139, 0.7) 0%, rgba(71, 85, 105, 0.4) 55%, transparent 85%)',
                                  borderRadius: '50%',
                                  filter: 'blur(18px)',
                                  animation: 'cloud-drift-2 26s ease-in-out infinite',
                                }}
                              />
                              {/* Rain streaks - short diagonal lines like yr.no */}
                              <div
                                className="absolute overflow-hidden"
                                style={{
                                  top: '-100%',
                                  left: '-50%',
                                  right: '-50%',
                                  bottom: '-50%',
                                  background: `repeating-linear-gradient(
                                    105deg,
                                    transparent 0px,
                                    transparent 3px,
                                    rgba(200, 215, 230, 0.4) 3px,
                                    rgba(200, 215, 230, 0.4) 4px,
                                    transparent 4px,
                                    transparent 80px
                                  )`,
                                  maskImage: `repeating-linear-gradient(
                                    195deg,
                                    transparent 0px,
                                    transparent 40px,
                                    black 40px,
                                    black 90px,
                                    transparent 90px,
                                    transparent 180px
                                  )`,
                                  WebkitMaskImage: `repeating-linear-gradient(
                                    195deg,
                                    transparent 0px,
                                    transparent 40px,
                                    black 40px,
                                    black 90px,
                                    transparent 90px,
                                    transparent 180px
                                  )`,
                                  animation: 'rain-fall-1 0.8s linear infinite',
                                }}
                              />
                              <div
                                className="absolute overflow-hidden"
                                style={{
                                  top: '-100%',
                                  left: '-50%',
                                  right: '-50%',
                                  bottom: '-50%',
                                  background: `repeating-linear-gradient(
                                    108deg,
                                    transparent 0px,
                                    transparent 5px,
                                    rgba(180, 200, 220, 0.35) 5px,
                                    rgba(180, 200, 220, 0.35) 6px,
                                    transparent 6px,
                                    transparent 100px
                                  )`,
                                  maskImage: `repeating-linear-gradient(
                                    198deg,
                                    transparent 0px,
                                    transparent 60px,
                                    black 60px,
                                    black 120px,
                                    transparent 120px,
                                    transparent 220px
                                  )`,
                                  WebkitMaskImage: `repeating-linear-gradient(
                                    198deg,
                                    transparent 0px,
                                    transparent 60px,
                                    black 60px,
                                    black 120px,
                                    transparent 120px,
                                    transparent 220px
                                  )`,
                                  animation: 'rain-fall-2 1.0s linear infinite',
                                }}
                              />
                              <div
                                className="absolute overflow-hidden"
                                style={{
                                  top: '-100%',
                                  left: '-50%',
                                  right: '-50%',
                                  bottom: '-50%',
                                  background: `repeating-linear-gradient(
                                    103deg,
                                    transparent 0px,
                                    transparent 2px,
                                    rgba(190, 210, 230, 0.3) 2px,
                                    rgba(190, 210, 230, 0.3) 3px,
                                    transparent 3px,
                                    transparent 120px
                                  )`,
                                  maskImage: `repeating-linear-gradient(
                                    193deg,
                                    transparent 0px,
                                    transparent 30px,
                                    black 30px,
                                    black 70px,
                                    transparent 70px,
                                    transparent 150px
                                  )`,
                                  WebkitMaskImage: `repeating-linear-gradient(
                                    193deg,
                                    transparent 0px,
                                    transparent 30px,
                                    black 30px,
                                    black 70px,
                                    transparent 70px,
                                    transparent 150px
                                  )`,
                                  animation: 'rain-fall-3 1.2s linear infinite',
                                }}
                              />
                            </div>
                          )}

                          {/* Rotating shimmer overlay - blends both moods (hidden for cloudy, sunny, and rainy) */}
                          {currentMood.name !== 'cloudy' && currentMood.name !== 'sunny' && currentMood.name !== 'rainy' && (
                            <div
                              className="absolute inset-0"
                              style={{
                                background: `conic-gradient(from 0deg at 50% 50%,
                                  transparent 0deg,
                                  ${currentMood.colors[0]} 45deg,
                                  transparent 90deg,
                                  ${currentMood.colors[1]} 135deg,
                                  transparent 180deg,
                                  ${currentMood.colors[2]} 225deg,
                                  transparent 270deg,
                                  ${currentMood.colors[0]} 315deg,
                                  transparent 360deg)`,
                                opacity: 0.5 * currentOpacity,
                                animation: 'spin 25s linear infinite',
                              }}
                            />
                          )}
                          {/* Next mood shimmer layer (hidden for cloudy, sunny, and rainy) */}
                          {nextMood.name !== 'cloudy' && nextMood.name !== 'sunny' && nextMood.name !== 'rainy' && (
                            <div
                              className="absolute inset-0"
                              style={{
                                background: `conic-gradient(from 180deg at 50% 50%,
                                  transparent 0deg,
                                  ${nextMood.colors[0]} 45deg,
                                  transparent 90deg,
                                  ${nextMood.colors[1]} 135deg,
                                  transparent 180deg,
                                  ${nextMood.colors[2]} 225deg,
                                  transparent 270deg,
                                  ${nextMood.colors[0]} 315deg,
                                  transparent 360deg)`,
                                opacity: 0.5 * nextOpacity,
                                animation: 'spin 25s linear infinite reverse',
                              }}
                            />
                          )}
                          {/* Cut out the center where the card will be */}
                          <div
                            className="absolute bg-[#F8FAFC] rounded-xl"
                            style={{
                              top: '50px',
                              left: '50px',
                              right: '50px',
                              bottom: '50px',
                            }}
                          />
                        </div>
                      </div>
                    </>
                  )
                })()}

                {/* Preview panel */}
                <div
                  className="relative rounded-xl overflow-hidden shadow-xl h-full"
                  style={{
                    border: '1px solid rgba(226, 232, 240, 0.8)',
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.99) 100%)',
                  }}
                >
                  <div className="h-full overflow-auto">
                    {stepPreviews[displayedStep]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade glow effect - light blue */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          width: '100%',
          height: '350px',
          background: 'radial-gradient(ellipse 120% 100% at 50% 100%, rgba(59, 130, 246, 0.15) 0%, rgba(14, 165, 233, 0.1) 25%, rgba(6, 182, 212, 0.08) 45%, transparent 75%)',
          filter: 'blur(50px)',
          zIndex: 5,
        }}
      />

      {/* Bottom text */}
      <div className="relative z-10 text-center pb-8 -mt-4 px-10">
        <p className="text-slate-400 text-base">
          For team som ønsker bedre oversikt, bedre beslutninger og raskere vekst.{' '}
          <a href="#" className="text-[#3B82F6] hover:text-[#0EA5E9] transition-colors">
            Se bruksområder.
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
          ? 'text-slate-800'
          : 'text-slate-500 hover:text-slate-800'
      }`}
    >
      {active && (
        <div className="w-4 h-4 mr-1.5 text-[#3B82F6]">
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
  isHovered = false,
  onMouseEnter,
  onMouseLeave,
}: {
  num: number
  title: string
  description: string
  active?: boolean
  isHovered?: boolean
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}) {
  const showActiveState = isHovered || active
  const arrowExtend = isHovered ? 32 : (showActiveState ? 20 : 12)
  const textShift = isHovered ? 8 : 0

  return (
    <li
      className={`group relative flex items-start gap-4 px-5 py-3.5 cursor-pointer transition-all duration-300 overflow-hidden ${
        showActiveState
          ? 'bg-slate-100/60'
          : 'hover:bg-slate-50/50'
      }`}
      style={{
        clipPath: `polygon(0 0, calc(100% - ${arrowExtend}px) 0, 100% 50%, calc(100% - ${arrowExtend}px) 100%, 0 100%)`,
        borderRadius: '12px 0 0 12px',
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Fade effect overlay */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${showActiveState ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'}`}
        style={{
          background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.08) 0%, rgba(59, 130, 246, 0.03) 50%, transparent 100%)',
        }}
      />

      {/* Bright border glow */}
      {showActiveState && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.1) 30%, transparent 70%)',
            clipPath: `polygon(0 0, calc(100% - ${arrowExtend}px) 0, 100% 50%, calc(100% - ${arrowExtend}px) 100%, 0 100%)`,
          }}
        />
      )}

      {/* Complete outline */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity duration-300 ${showActiveState ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'}`}
        style={{
          borderLeft: '1px solid rgba(59, 130, 246, 0.4)',
          borderTop: '1px solid rgba(59, 130, 246, 0.4)',
          borderBottom: '1px solid rgba(59, 130, 246, 0.4)',
          borderRadius: '12px 0 0 12px',
          maskImage: 'linear-gradient(to right, black 0%, black 60%, transparent 85%)',
          WebkitMaskImage: 'linear-gradient(to right, black 0%, black 60%, transparent 85%)',
        }}
      />

      {/* Content with slide animation on hover */}
      <div
        className={`relative flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold flex-shrink-0 transition-all duration-300 ${
          showActiveState
            ? 'bg-gradient-to-br from-[#3B82F6] via-[#0EA5E9] to-[#06B6D4] text-white'
            : 'bg-slate-200 text-slate-500'
        }`}
        style={{ transform: `translateX(${textShift}px)` }}
      >
        {num}
      </div>
      <div
        className="relative transition-all duration-300"
        style={{ transform: `translateX(${textShift}px)` }}
      >
        <p className={`text-[17px] font-medium transition-colors ${showActiveState ? 'text-slate-800' : 'text-slate-600 group-hover:text-slate-700'}`}>
          {title}
        </p>
        <p className="text-sm text-slate-400">{description}</p>
      </div>
    </li>
  )
}

// Preview components
function DataPreview() {
  return (
    <div className="p-5">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#3B82F6]/10 text-[#3B82F6] text-sm">
          <DatabaseIcon className="w-4 h-4" />
          Datakilder
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 mb-4">
        <div className="flex items-center gap-2">
          <DatabaseIcon className="w-4 h-4 text-[#3B82F6]" />
          <span className="text-slate-700 text-sm">Brreg, Doffin, årsregnskaper, nyheter</span>
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-xs text-slate-400 mb-1">Integrerte kilder</div>
        {[
          { name: 'Brønnøysundregistrene', type: 'Offentlig', status: 'Live' },
          { name: 'Doffin', type: 'Anbud', status: 'Live' },
          { name: 'Årsregnskaper', type: 'Finansiell', status: 'Live' },
          { name: 'Hjemmesider', type: 'Web', status: 'Live' },
          { name: 'Foretaksregisteret', type: 'Offentlig', status: 'Live' },
          { name: 'Telefonkatalogen', type: 'Kontakt', status: 'Live' },
          { name: 'Kartverket', type: 'Geo', status: 'Live' },
        ].map((source, i) => (
          <div key={i} className="flex items-center justify-between p-2 rounded-lg border border-slate-100 bg-white hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-[#3B82F6] to-[#0EA5E9] flex items-center justify-center text-white text-[10px] font-medium">
                {source.name.charAt(0)}
              </div>
              <div>
                <p className="text-xs text-slate-700">{source.name}</p>
                <p className="text-[10px] text-slate-400">{source.type}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] text-emerald-600">{source.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function PatternPreview() {
  return (
    <div className="p-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#0EA5E9] flex items-center justify-center text-white">
          <BrainIcon className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg text-slate-700">Mønstergjenkjenning</h3>
          <p className="text-sm text-slate-400">AI-modell trent på norske data</p>
        </div>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 mb-4">
        <p className="text-sm text-slate-400 mb-3">Signaler vi ser etter</p>
        <div className="space-y-2">
          {[
            'Budsjettøkninger i spesifikke sektorer',
            'Historiske kjøpsmønstre',
            'Lederskifter og organisasjonsendringer',
            'Nyhetssignaler og pressemeldinger',
          ].map((signal, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              <span className="text-sm text-slate-600">{signal}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {[
          { label: 'Prediksjoner', value: '2,847', change: '+12%' },
          { label: 'Treffsikkerhet', value: '87%', change: '+3%' },
        ].map((stat, i) => (
          <div key={i} className="rounded-lg border border-slate-100 bg-white p-3 text-center">
            <p className="text-xs text-slate-400">{stat.label}</p>
            <p className="text-lg text-slate-700">{stat.value}</p>
            <p className="text-xs text-emerald-500">{stat.change}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function MapPreview() {
  return (
    <div className="p-5">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base text-slate-700">Pipeline-prognose</h3>
        <div className="text-xs text-slate-400">Neste 18 mnd</div>
      </div>

      {/* Total value */}
      <div className="mb-3">
        <div className="text-3xl font-semibold text-slate-700">37,2 <span className="text-lg font-normal text-slate-400">MNOK</span></div>
        <div className="text-xs text-emerald-500">Potensiell kontraktsverdi</div>
      </div>

      {/* Pipeline chart */}
      <div className="relative h-28 rounded-xl border border-slate-100 bg-slate-50/50 overflow-hidden mb-4">
        {/* SVG for lines and area - stretched to fill */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
          {/* Gradient definition */}
          <defs>
            <linearGradient id="pipelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.02" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <line x1="30" y1="10" x2="300" y2="10" stroke="#E2E8F0" strokeWidth="0.5" />
          <line x1="30" y1="30" x2="300" y2="30" stroke="#E2E8F0" strokeWidth="0.5" />
          <line x1="30" y1="50" x2="300" y2="50" stroke="#E2E8F0" strokeWidth="0.5" />
          <line x1="30" y1="70" x2="300" y2="70" stroke="#E2E8F0" strokeWidth="0.5" />

          {/* Area fill under the smooth line - starts after y-axis at x=30 */}
          <path
            d="M 30 74 Q 60 72, 80 68 T 120 58 T 160 45 T 200 32 T 240 22 T 280 16 L 300 14 L 300 90 L 30 90 Z"
            fill="url(#pipelineGradient)"
          />

          {/* Main smooth line - starts after y-axis at x=30 */}
          <path
            d="M 30 74 Q 60 72, 80 68 T 120 58 T 160 45 T 200 32 T 240 22 T 280 16 L 300 14"
            fill="none"
            stroke="#10B981"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Data points as divs - positioned absolutely to stay round */}
        <div className="absolute w-2.5 h-2.5 rounded-full bg-emerald-500" style={{ left: '10%', top: '74%', transform: 'translate(-50%, -50%)' }} />
        <div className="absolute w-2.5 h-2.5 rounded-full bg-emerald-500" style={{ left: '40%', top: '58%', transform: 'translate(-50%, -50%)' }} />
        <div className="absolute w-2.5 h-2.5 rounded-full bg-emerald-500" style={{ left: '67%', top: '32%', transform: 'translate(-50%, -50%)' }} />
        <div className="absolute w-2.5 h-2.5 rounded-full bg-emerald-500" style={{ left: '100%', top: '14%', transform: 'translate(-50%, -50%)' }} />

        {/* Y-axis labels */}
        <div className="absolute left-1.5 top-0 text-[9px] text-slate-400">40M</div>
        <div className="absolute left-1.5 top-[22%] text-[9px] text-slate-400">30M</div>
        <div className="absolute left-1.5 top-[45%] text-[9px] text-slate-400">20M</div>
        <div className="absolute left-1.5 top-[68%] text-[9px] text-slate-400">10M</div>

        {/* X-axis labels */}
        <div className="absolute bottom-0.5 left-[10%] text-[9px] text-slate-400">Nå</div>
        <div className="absolute bottom-0.5 left-[35%] text-[9px] text-slate-400">6 mnd</div>
        <div className="absolute bottom-0.5 left-[63%] text-[9px] text-slate-400">12 mnd</div>
        <div className="absolute bottom-0.5 right-1 text-[9px] text-slate-400">18 mnd</div>

        {/* Highlight marker */}
        <div className="absolute top-1 right-2 bg-emerald-500 text-white text-[9px] px-1.5 py-0.5 rounded font-medium">
          +29,2M
        </div>
      </div>

      {/* Breakdown table with headers */}
      <div className="space-y-1.5">
        {/* Table header */}
        <div className="flex items-center gap-2 pb-1.5 border-b border-slate-100">
          <span className="text-[10px] text-slate-400 uppercase tracking-wide flex-1">Relevante muligheter</span>
          <span className="text-[10px] text-slate-400 uppercase tracking-wide w-16 text-right">Est. verdi</span>
          <span className="text-[10px] text-slate-400 uppercase tracking-wide w-12 text-right">Sjanse</span>
          <span className="text-[10px] text-slate-400 uppercase tracking-wide w-16 text-right">Pipeline</span>
        </div>
        {[
          { name: 'IT-infrastruktur', totalValue: '32,0M', winRate: '35%', pipeline: '11,2M', color: '#10B981' },
          { name: 'Konsulentoppdrag', totalValue: '19,5M', winRate: '40%', pipeline: '7,8M', color: '#3B82F6' },
          { name: 'Plattformbistand', totalValue: '16,9M', winRate: '35%', pipeline: '5,9M', color: '#8B5CF6' },
          { name: 'Drift & vedlikehold', totalValue: '15,0M', winRate: '30%', pipeline: '4,5M', color: '#F59E0B' },
          { name: 'Systemintegrasjon', totalValue: '13,7M', winRate: '30%', pipeline: '4,1M', color: '#EC4899' },
          { name: 'Prosjektledelse', totalValue: '10,6M', winRate: '35%', pipeline: '3,7M', color: '#06B6D4' },
        ].map((cat, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: cat.color }} />
            <span className="text-sm text-slate-600 flex-1 truncate">{cat.name}</span>
            <span className="text-xs text-slate-500 w-16 text-right">{cat.totalValue}</span>
            <span className="text-xs text-slate-400 w-12 text-right">{cat.winRate}</span>
            <span className="text-sm text-slate-700 font-medium w-16 text-right">{cat.pipeline}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function AlertPreview() {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg text-slate-700">Varsler</h3>
        <div className="text-sm text-emerald-500">3 nye i dag</div>
      </div>

      <div className="space-y-3 mb-6">
        {[
          { icon: '🔔', title: 'Nytt anbud', desc: 'Oslo kommune: IT-drift', time: '2 min siden', urgent: true },
          { icon: '📈', title: 'Budsjettøkning', desc: 'Helse Sør-Øst +15%', time: '1 time siden', urgent: false },
          { icon: '🎯', title: 'Match funnet', desc: 'Passer din profil', time: '3 timer siden', urgent: false },
        ].map((alert, i) => (
          <div key={i} className={`flex items-center gap-4 p-4 rounded-xl border ${i === 0 ? 'border-[#F97316]/30 bg-[#F97316]/5' : 'border-slate-100 bg-white'} cursor-pointer hover:bg-slate-50 transition-colors`}>
            <span className="text-2xl">{alert.icon}</span>
            <div className="flex-1">
              <p className="text-sm text-slate-700">{alert.title}</p>
              <p className="text-xs text-slate-400">{alert.desc}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-slate-400">{alert.time}</p>
              {alert.urgent && <span className="text-xs text-[#F97316]">Haster</span>}
            </div>
          </div>
        ))}
      </div>

      <button className="w-full py-3 rounded-xl bg-gradient-to-r from-[#3B82F6] via-[#0EA5E9] to-[#06B6D4] text-white font-medium transition-all hover:opacity-90">
        Se alle varsler
      </button>
    </div>
  )
}

function DatabaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  )
}

function BrainIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  )
}

function RainIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  )
}
