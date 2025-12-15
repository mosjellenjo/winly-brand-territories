'use client'

import { useState, useCallback, useEffect } from 'react'

interface PipelineStep {
  id: string
  title: string
  description: string
}

const CYCLE_DURATION = 5000

export function FeaturesCloud2V1() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const features = [
    {
      title: 'Åpne kilder',
      description: 'Alle datakilder er åpne og dokumenterte. Du vet alltid hvor informasjonen kommer fra.',
      icon: <OpenSourceIcon />,
    },
    {
      title: 'Spesialtrent på norsk kontekst',
      description: 'Prediksjonsmodellen er spesialtrent på norsk anbuds- og bedriftsdata.',
      icon: <NorwayModelIcon />,
    },
    {
      title: 'Forståelige prediksjoner',
      description: 'Du kan se hvorfor en prediksjon ble gjort - full transparens i vurderingene.',
      icon: <TransparencyIcon />,
    },
    {
      title: 'Sanntidsdata',
      description: 'Kontinuerlig oppdatering fra alle kilder sikrer at du alltid har ferske data.',
      icon: <RealtimeIcon />,
    },
  ]

  const pipelineSteps: PipelineStep[] = [
    {
      id: 'collect',
      title: 'Datainnsamling med bredde',
      description: 'Vi kombinerer signaler fra alle offentlige kilder - fra budsjettdokumenter til anbudshistorikk og nyheter - og gjør dem lesbare for maskinen.',
    },
    {
      id: 'ai',
      title: 'AI trent på norsk næringsliv',
      description: 'Vi har trent egne prediksjonsmodeller på millioner av datapunkter for å lære mønstre ingen ser - og flagge signalene som betyr noe.',
    },
    {
      id: 'weathermap',
      title: 'Værkart for fremtiden',
      description: 'Basert på signalene genererer vi et prediktivt værkart over når og hvor det vil "regne penger" - så du kan forberede deg i god tid.',
    },
    {
      id: 'transparency',
      title: 'Full transparens, ingen svart boks',
      description: 'Du ser hva vi fant, hvorfor det betyr noe - og hvor dataene kommer fra.',
    },
  ]

  const pipelineLength = pipelineSteps.length

  // Auto-cycling effect
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsAnimating(true)
          setTimeout(() => setIsAnimating(false), 400)
          setActiveIndex((prevIndex) => (prevIndex + 1) % pipelineLength)
          return 0
        }
        return prev + (100 / (CYCLE_DURATION / 50))
      })
    }, 50)

    return () => clearInterval(interval)
  }, [isPaused, pipelineLength])

  const handleCardHover = useCallback((index: number) => {
    setIsPaused(true)
    if (index !== activeIndex) {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 400)
    }
    setActiveIndex(index)
    setProgress(0)
  }, [activeIndex])

  const handleCardLeave = useCallback(() => {
    setIsPaused(false)
  }, [])

  const handleProgressClick = useCallback((index: number) => {
    if (index !== activeIndex) {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 400)
    }
    setActiveIndex(index)
    setProgress(0)
  }, [activeIndex])

  return (
    <section className="relative bg-white py-24 border-t border-slate-100">
      <div style={{ padding: '0 70px' }}>
        <div className="mx-auto" style={{ maxWidth: 'calc(100% - 140px)' }}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-800 tracking-tight">
              Vår teknologi og{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(90deg, rgb(59, 130, 246), rgb(14, 165, 233), rgb(6, 182, 212))',
                }}
              >
                data
              </span>
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Basert på sanntid, spesialtrening og full transparens
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-2xl border border-[#3B82F6]/30 bg-gradient-to-b from-[#3B82F6]/10 to-white p-6 transition-all duration-300 hover:border-[#3B82F6]/50 hover:shadow-lg hover:shadow-[#3B82F6]/15"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#3B82F6]/12 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#3B82F6]/10 via-[#0EA5E9]/10 to-[#06B6D4]/10 border border-[#3B82F6]/20">
                    <div className="text-[#3B82F6]">{feature.icon}</div>
                  </div>

                  <h3 className="text-lg font-medium text-slate-800 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* How we predict - expandable cards like UseCases */}
          <div className="mt-16">
            <div className="mb-8">
              <h3 className="text-2xl sm:text-3xl font-normal text-slate-800 tracking-tight">
                Slik varsler vi før det{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, rgb(59, 130, 246), rgb(14, 165, 233), rgb(6, 182, 212))',
                  }}
                >
                  regner
                </span>
              </h3>
            </div>

            {/* Expandable cards */}
            <div className="relative flex gap-3 h-[280px]">
              {pipelineSteps.map((step, index) => {
                const isActive = activeIndex === index

                return (
                  <div
                    key={step.id}
                    className="relative transition-all duration-500 ease-out cursor-pointer overflow-hidden rounded-xl"
                    style={{
                      width: isActive ? 'calc(100% - 180px)' : '60px',
                      flexShrink: 0,
                    }}
                    onMouseEnter={() => handleCardHover(index)}
                    onMouseLeave={handleCardLeave}
                  >
                    {/* Card with gradient */}
                    <div
                      className="h-full rounded-xl p-6 transition-all duration-500 overflow-hidden relative"
                      style={{
                        background: isActive
                          ? 'linear-gradient(135deg, #3B82F6 0%, #0EA5E9 30%, #06B6D4 60%, #14B8A6 100%)'
                          : 'linear-gradient(135deg, #3B82F6 0%, #0EA5E9 100%)',
                      }}
                    >
                      {/* Darker overlay for text area when active */}
                      {isActive && (
                        <div
                          className="absolute top-0 left-0 w-[50%] h-full pointer-events-none"
                          style={{
                            background: 'linear-gradient(90deg, rgba(30, 64, 175, 0.2) 0%, rgba(30, 64, 175, 0.05) 70%, transparent 100%)',
                          }}
                        />
                      )}

                      {/* Progress bar */}
                      {isActive && (
                        <div className="absolute bottom-5 left-6 flex gap-2">
                          {pipelineSteps.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={(e) => {
                                e.stopPropagation()
                                handleProgressClick(idx)
                              }}
                              className="relative h-1 rounded-full overflow-hidden transition-all"
                              style={{
                                width: activeIndex === idx ? '40px' : '18px',
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                              }}
                            >
                              <div
                                className="absolute inset-y-0 left-0 rounded-full transition-all duration-75"
                                style={{
                                  width: activeIndex === idx ? `${progress}%` : idx < activeIndex ? '100%' : '0%',
                                  backgroundColor: 'white',
                                }}
                              />
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Collapsed view - vertical line + step number */}
                      {!isActive && (
                        <div className="h-full flex flex-col items-center justify-center gap-3">
                          <div className="w-1.5 h-16 rounded-full bg-white/20" />
                          <span className="text-white/60 text-xs font-medium">{index + 1}</span>
                        </div>
                      )}

                      {/* Expanded view */}
                      {isActive && (
                        <div className="h-full flex gap-8">
                          {/* Left side - Content */}
                          <div className="w-[45%] flex flex-col justify-center relative z-10">
                            <div
                              className="transition-all ease-out"
                              style={{
                                opacity: isAnimating ? 0 : 1,
                                transform: isAnimating ? 'translateY(12px)' : 'translateY(0)',
                                transitionDuration: isAnimating ? '100ms' : '350ms',
                                transitionTimingFunction: isAnimating ? 'ease-in' : 'cubic-bezier(0.16, 1, 0.3, 1)',
                              }}
                            >
                              <div className="text-xs text-white/60 font-medium uppercase tracking-wider mb-2">
                                Steg {index + 1}
                              </div>
                              <h4 className="text-2xl font-normal text-white mb-4">
                                {step.title}
                              </h4>
                              <p className="text-white/85 text-base leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                          </div>

                          {/* Right side - Visual */}
                          <div className="w-[55%] flex items-center justify-center">
                            <div
                              className="w-full h-full rounded-lg overflow-hidden flex items-center justify-center"
                              style={{
                                opacity: isAnimating ? 0 : 1,
                                transform: isAnimating ? 'scale(0.95)' : 'scale(1)',
                                transitionProperty: 'opacity, transform',
                                transitionDuration: isAnimating ? '100ms' : '400ms',
                                transitionTimingFunction: isAnimating ? 'ease-in' : 'cubic-bezier(0.16, 1, 0.3, 1)',
                                background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                                border: '1px solid rgba(255,255,255,0.1)',
                              }}
                            >
                              {index === 0 && <DataCollectionVisual />}
                              {index === 1 && <AIRadarVisual />}
                              {index === 2 && <WeatherMapVisual />}
                              {index === 3 && <TransparencyVisual />}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Visual for Step 1: Data Collection - Horizontal tech data flow visualization
function DataCollectionVisual() {
  const dataSources = [
    { name: 'Brønnøysund', abbr: 'BR', icon: 'building' },
    { name: 'Doffin', abbr: 'DO', icon: 'file' },
    { name: 'Årsregnskap', abbr: 'ÅR', icon: 'chart' },
    { name: 'Foretaksreg.', abbr: 'FR', icon: 'users' },
    { name: 'Kartverket', abbr: 'KV', icon: 'map' },
    { name: 'Nyheter', abbr: 'NY', icon: 'news' },
    { name: 'Hjemmesider', abbr: 'WB', icon: 'globe' },
  ]

  return (
    <div className="relative w-full h-full flex items-center justify-between px-6 overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Left side: Data sources in 2 columns */}
      <div className="relative flex gap-3">
        {/* Column 1 */}
        <div className="flex flex-col gap-2">
          {dataSources.slice(0, 4).map((source, i) => (
            <div
              key={i}
              className="flex items-center gap-2 animate-pulse"
              style={{ animationDelay: `${i * 150}ms`, animationDuration: '2.5s' }}
            >
              <div className="relative">
                <div className="w-11 h-11 rounded-lg bg-white/15 backdrop-blur-sm border border-white/25 flex flex-col items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-white/90 mb-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M21 5v6c0 1.66-4 3-9 3s-9-1.34-9-3V5" />
                    <path d="M21 11v6c0 1.66-4 3-9 3s-9-1.34-9-3v-6" />
                  </svg>
                  <span className="text-white/90 text-[8px] font-bold">{source.abbr}</span>
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-ping" style={{ animationDuration: '2s' }} />
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <span className="text-white/70 text-[10px] font-medium w-20 truncate">{source.name}</span>
            </div>
          ))}
        </div>
        {/* Column 2 */}
        <div className="flex flex-col gap-2 mt-6">
          {dataSources.slice(4).map((source, i) => (
            <div
              key={i}
              className="flex items-center gap-2 animate-pulse"
              style={{ animationDelay: `${(i + 4) * 150}ms`, animationDuration: '2.5s' }}
            >
              <div className="relative">
                <div className="w-11 h-11 rounded-lg bg-white/15 backdrop-blur-sm border border-white/25 flex flex-col items-center justify-center shadow-lg">
                  <svg className="w-4 h-4 text-white/90 mb-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M21 5v6c0 1.66-4 3-9 3s-9-1.34-9-3V5" />
                    <path d="M21 11v6c0 1.66-4 3-9 3s-9-1.34-9-3v-6" />
                  </svg>
                  <span className="text-white/90 text-[8px] font-bold">{source.abbr}</span>
                </div>
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400 animate-ping" style={{ animationDuration: '2s' }} />
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-400" />
              </div>
              <span className="text-white/70 text-[10px] font-medium w-20 truncate">{source.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Center: Animated horizontal data flow */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="relative flex items-center">
          {/* Flow lines with particles */}
          <div className="flex items-center gap-1">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)',
                  animation: 'flow-right 2s ease-in-out infinite',
                  animationDelay: `${i * 200}ms`,
                }}
              />
            ))}
          </div>
          {/* Arrow */}
          <svg className="w-8 h-8 text-white/80 mx-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
          {/* More flow particles */}
          <div className="flex items-center gap-1">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.4) 100%)',
                  animation: 'flow-right 2s ease-in-out infinite',
                  animationDelay: `${(i + 8) * 200}ms`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Right side: Central Data Lake / Processing */}
      <div className="relative flex flex-col items-center">
        {/* Main data lake container */}
        <div className="relative">
          <div className="w-28 h-32 rounded-2xl bg-gradient-to-br from-white/25 to-white/10 backdrop-blur-sm border border-white/40 flex flex-col items-center justify-center shadow-2xl">
            {/* Server rack icon */}
            <div className="space-y-1.5 mb-2">
              <div className="w-16 h-4 rounded bg-white/20 flex items-center px-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1" />
                <div className="flex-1 h-1 rounded bg-white/30" />
              </div>
              <div className="w-16 h-4 rounded bg-white/20 flex items-center px-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1" />
                <div className="flex-1 h-1 rounded bg-white/30" />
              </div>
              <div className="w-16 h-4 rounded bg-white/20 flex items-center px-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mr-1 animate-pulse" />
                <div className="flex-1 h-1 rounded bg-white/30" />
              </div>
            </div>
            {/* Database icon */}
            <svg className="w-8 h-8 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M21 5v14c0 1.66-4 3-9 3s-9-1.34-9-3V5" />
              <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
            </svg>
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-2xl bg-white/20 blur-2xl -z-10" />
        </div>
        {/* Label */}
        <span className="text-white/80 text-xs font-medium mt-3">Winly Data Lake</span>
        {/* Stats */}
        <div className="flex gap-3 mt-2">
          <div className="text-center">
            <span className="text-white/90 text-sm font-bold">7+</span>
            <span className="text-white/50 text-[9px] block">kilder</span>
          </div>
          <div className="text-center">
            <span className="text-white/90 text-sm font-bold">1M+</span>
            <span className="text-white/50 text-[9px] block">selskaper</span>
          </div>
        </div>
      </div>

      {/* Animated flow particles */}
      <style jsx>{`
        @keyframes flow-right {
          0% { opacity: 0.2; transform: scale(0.6) translateX(-4px); }
          50% { opacity: 1; transform: scale(1.1) translateX(0); }
          100% { opacity: 0.2; transform: scale(0.6) translateX(4px); }
        }
      `}</style>
    </div>
  )
}

// Visual for Step 2: Neural Network / Pattern Recognition - Wide network spanning full width
function AIRadarVisual() {
  // Color palette - on-brand blues, cyans, and white
  const nodeColors = [
    'rgba(255,255,255,0.95)',   // white
    'rgba(59,130,246,0.95)',    // blue #3B82F6
    'rgba(14,165,233,0.95)',    // sky blue #0EA5E9
    'rgba(6,182,212,0.95)',     // cyan #06B6D4
  ]

  // Wide network with many nodes spanning full width (x: 1-199 in viewBox 0-200)
  const nodes = [
    // Far left region (x: 1-25)
    { x: 2, y: 8, c: 0 }, { x: 5, y: 22, c: 2 }, { x: 3, y: 38, c: 1 },
    { x: 8, y: 5, c: 3 }, { x: 11, y: 18, c: 0 }, { x: 7, y: 32, c: 2 },
    { x: 13, y: 45, c: 1 }, { x: 6, y: 52, c: 3 },
    { x: 16, y: 10, c: 2 }, { x: 20, y: 26, c: 0 }, { x: 18, y: 40, c: 3 },
    { x: 24, y: 6, c: 1 }, { x: 22, y: 48, c: 2 },
    // Left region (x: 28-52)
    { x: 28, y: 12, c: 0 }, { x: 32, y: 28, c: 3 }, { x: 30, y: 44, c: 1 },
    { x: 36, y: 8, c: 2 }, { x: 39, y: 22, c: 0 }, { x: 34, y: 36, c: 3 },
    { x: 41, y: 50, c: 1 }, { x: 37, y: 56, c: 2 },
    { x: 44, y: 14, c: 3 }, { x: 48, y: 30, c: 0 }, { x: 46, y: 46, c: 2 },
    { x: 52, y: 10, c: 1 }, { x: 50, y: 54, c: 3 },
    // Left-center region (x: 56-80)
    { x: 56, y: 6, c: 2 }, { x: 60, y: 20, c: 0 }, { x: 58, y: 38, c: 1 },
    { x: 64, y: 12, c: 3 }, { x: 67, y: 26, c: 2 }, { x: 62, y: 42, c: 0 },
    { x: 69, y: 48, c: 1 }, { x: 65, y: 54, c: 3 },
    { x: 72, y: 8, c: 0 }, { x: 76, y: 24, c: 2 }, { x: 74, y: 40, c: 1 },
    { x: 80, y: 14, c: 3 }, { x: 78, y: 52, c: 0 },
    // Center region (x: 84-116)
    { x: 84, y: 10, c: 1 }, { x: 88, y: 28, c: 3 }, { x: 86, y: 44, c: 2 },
    { x: 92, y: 6, c: 0 }, { x: 95, y: 22, c: 1 }, { x: 90, y: 36, c: 3 },
    { x: 97, y: 50, c: 2 }, { x: 93, y: 56, c: 0 },
    { x: 100, y: 12, c: 3 }, { x: 104, y: 30, c: 1 }, { x: 102, y: 46, c: 0 },
    { x: 108, y: 8, c: 2 }, { x: 111, y: 24, c: 3 }, { x: 106, y: 40, c: 1 },
    { x: 113, y: 52, c: 0 }, { x: 109, y: 58, c: 2 },
    // Right-center region (x: 120-144)
    { x: 120, y: 10, c: 3 }, { x: 124, y: 26, c: 0 }, { x: 122, y: 42, c: 2 },
    { x: 128, y: 6, c: 1 }, { x: 131, y: 20, c: 3 }, { x: 126, y: 34, c: 0 },
    { x: 133, y: 48, c: 2 }, { x: 129, y: 54, c: 1 },
    { x: 136, y: 12, c: 0 }, { x: 140, y: 28, c: 3 }, { x: 138, y: 44, c: 1 },
    { x: 144, y: 8, c: 2 }, { x: 142, y: 52, c: 0 },
    // Right region (x: 148-172)
    { x: 148, y: 14, c: 1 }, { x: 152, y: 30, c: 3 }, { x: 150, y: 46, c: 0 },
    { x: 156, y: 10, c: 2 }, { x: 159, y: 24, c: 1 }, { x: 154, y: 38, c: 3 },
    { x: 161, y: 50, c: 0 }, { x: 157, y: 56, c: 2 },
    { x: 164, y: 8, c: 3 }, { x: 168, y: 22, c: 0 }, { x: 166, y: 40, c: 1 },
    { x: 172, y: 12, c: 2 }, { x: 170, y: 48, c: 3 },
    // Far right region (x: 176-199)
    { x: 176, y: 6, c: 0 }, { x: 180, y: 20, c: 1 }, { x: 178, y: 36, c: 3 },
    { x: 184, y: 12, c: 2 }, { x: 187, y: 28, c: 0 }, { x: 182, y: 44, c: 1 },
    { x: 189, y: 52, c: 3 }, { x: 185, y: 58, c: 2 },
    { x: 192, y: 8, c: 1 }, { x: 196, y: 24, c: 3 }, { x: 194, y: 42, c: 0 },
    { x: 199, y: 16, c: 2 }, { x: 197, y: 50, c: 1 },
  ]

  // Generate connections between nearby nodes
  const connections: Array<{ from: number; to: number; bright: boolean }> = []
  nodes.forEach((node, i) => {
    nodes.forEach((other, j) => {
      if (i >= j) return
      const dx = Math.abs(node.x - other.x)
      const dy = Math.abs(node.y - other.y)
      const dist = Math.sqrt(dx * dx + dy * dy)
      // Connect if within range
      if (dist < 24 && dx < 20 && dx > 2) {
        connections.push({ from: i, to: j, bright: (i + j) % 5 === 0 })
      }
    })
  })

  // Data labels for the bottom
  const dataLabels = ['Anbud', 'Bedrifter', 'Personer', 'Regnskap', 'Nyheter', 'Signaler']

  return (
    <div className="relative w-full h-full overflow-hidden flex flex-col">
      {/* Neural Network SVG - wide viewBox for full coverage */}
      <div className="flex-1 min-h-0">
        <svg className="w-full h-full" viewBox="0 0 200 65" preserveAspectRatio="xMidYMid slice">
          <defs>
            <filter id="nodeGlow3">
              <feGaussianBlur stdDeviation="0.4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          {/* Connections */}
          {connections.map((conn, i) => {
            const from = nodes[conn.from]
            const to = nodes[conn.to]
            return (
              <line
                key={`conn-${i}`}
                x1={from.x}
                y1={from.y}
                x2={to.x}
                y2={to.y}
                stroke={conn.bright ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.18)"}
                strokeWidth={conn.bright ? "0.5" : "0.25"}
              />
            )
          })}

          {/* Animated particles on some connections */}
          {connections.filter((_, i) => i % 8 === 0).map((conn, i) => {
            const from = nodes[conn.from]
            const to = nodes[conn.to]
            const color = nodeColors[(conn.from + conn.to) % nodeColors.length]
            return (
              <circle
                key={`particle-${i}`}
                r="1"
                fill={color}
                filter="url(#nodeGlow3)"
              >
                <animateMotion
                  dur={`${1.5 + (i % 3) * 0.3}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.3}s`}
                >
                  <mpath>
                    <path d={`M${from.x},${from.y} L${to.x},${to.y}`} />
                  </mpath>
                </animateMotion>
              </circle>
            )
          })}

          {/* Nodes */}
          {nodes.map((node, i) => {
            const color = nodeColors[node.c]
            const pulseDelay = (i * 0.08) % 2
            const moveAmountX = 1.5 + (i % 3) * 0.5
            const moveAmountY = 1 + (i % 4) * 0.4
            const moveDur = 3 + (i % 5) * 0.8
            return (
              <g key={`node-${i}`}>
                {/* Node glow - more pronounced pulse */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="4"
                  fill={color.replace(/[\d.]+\)$/, '0.2)')}
                >
                  <animate
                    attributeName="r"
                    values="3.5;5;3.5"
                    dur={`${1.5 + (i % 4) * 0.3}s`}
                    repeatCount="indefinite"
                    begin={`${pulseDelay}s`}
                  />
                  <animate
                    attributeName="fill-opacity"
                    values="0.15;0.3;0.15"
                    dur={`${1.5 + (i % 4) * 0.3}s`}
                    repeatCount="indefinite"
                    begin={`${pulseDelay}s`}
                  />
                </circle>
                {/* Node outer ring with movement */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="2.8"
                  fill="none"
                  stroke={color.replace(/[\d.]+\)$/, '0.5)')}
                  strokeWidth="0.35"
                >
                  <animate
                    attributeName="cx"
                    values={`${node.x};${node.x + moveAmountX};${node.x - moveAmountX * 0.5};${node.x}`}
                    dur={`${moveDur}s`}
                    repeatCount="indefinite"
                    begin={`${pulseDelay * 2}s`}
                  />
                  <animate
                    attributeName="cy"
                    values={`${node.y};${node.y - moveAmountY};${node.y + moveAmountY * 0.7};${node.y}`}
                    dur={`${moveDur * 1.1}s`}
                    repeatCount="indefinite"
                    begin={`${pulseDelay * 2}s`}
                  />
                  <animate
                    attributeName="r"
                    values="2.8;3.2;2.8"
                    dur={`${1.5 + (i % 4) * 0.3}s`}
                    repeatCount="indefinite"
                    begin={`${pulseDelay}s`}
                  />
                </circle>
                {/* Node inner with movement and pulse */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="1.9"
                  fill={color}
                  filter="url(#nodeGlow3)"
                >
                  <animate
                    attributeName="cx"
                    values={`${node.x};${node.x + moveAmountX};${node.x - moveAmountX * 0.5};${node.x}`}
                    dur={`${moveDur}s`}
                    repeatCount="indefinite"
                    begin={`${pulseDelay * 2}s`}
                  />
                  <animate
                    attributeName="cy"
                    values={`${node.y};${node.y - moveAmountY};${node.y + moveAmountY * 0.7};${node.y}`}
                    dur={`${moveDur * 1.1}s`}
                    repeatCount="indefinite"
                    begin={`${pulseDelay * 2}s`}
                  />
                  <animate
                    attributeName="r"
                    values="1.9;2.3;1.9"
                    dur={`${1.5 + (i % 4) * 0.3}s`}
                    repeatCount="indefinite"
                    begin={`${pulseDelay}s`}
                  />
                  <animate
                    attributeName="fill-opacity"
                    values="0.8;1;0.8"
                    dur={`${1.2 + (i % 3) * 0.2}s`}
                    repeatCount="indefinite"
                    begin={`${pulseDelay}s`}
                  />
                </circle>
              </g>
            )
          })}
        </svg>
      </div>

      {/* Data labels at the bottom - using HTML for crisp text */}
      <div className="flex justify-between px-6 pb-3 pt-2">
        {dataLabels.map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: nodeColors[i % nodeColors.length] }}
            />
            <span className="text-white/80 text-sm font-medium">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Visual for Step 3: Weather Map - Pipeline forecast style matching hero preview
function WeatherMapVisual() {
  return (
    <div className="relative w-full h-full p-2">
      {/* Card container matching hero preview style */}
      <div className="relative w-full h-full rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 overflow-hidden p-3">
        {/* Header row with total value */}
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-sm font-medium text-white">Pipeline-prognose</h3>
            <div className="text-2xl font-semibold text-white leading-tight">
              37,2 <span className="text-sm font-normal text-white/60">MNOK</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] text-white/50">Neste 18 mnd</div>
            <div className="text-[10px] text-cyan-300">Potensiell verdi</div>
          </div>
        </div>

        {/* Two column layout: Table left, Chart right */}
        <div className="flex gap-4 h-[calc(100%-52px)]">
          {/* Left side: Opportunities table - compact */}
          <div className="w-[200px] flex flex-col flex-shrink-0">
            {/* Table header */}
            <div className="flex items-center text-[8px] text-white/40 uppercase tracking-wider mb-1">
              <span className="flex-1">Muligheter</span>
              <span className="w-16 text-right">Verdi / Pipeline</span>
            </div>

            {/* Table rows - compact */}
            <div className="flex-1 flex flex-col justify-between">
              {[
                { label: 'IT-infrastruktur', value: '32M', pipeline: '11,2M', color: 'bg-cyan-400' },
                { label: 'Konsulentoppdrag', value: '19M', pipeline: '7,8M', color: 'bg-sky-400' },
                { label: 'Plattformbistand', value: '17M', pipeline: '5,9M', color: 'bg-blue-400' },
                { label: 'Drift & vedlikehold', value: '15M', pipeline: '4,5M', color: 'bg-cyan-300' },
                { label: 'Systemintegrasjon', value: '14M', pipeline: '4,1M', color: 'bg-sky-300' },
              ].map((item, i) => (
                <div key={i} className="flex items-center text-[10px] py-0.5">
                  <div className="flex items-center gap-1.5 flex-1 min-w-0">
                    <div className={`w-1.5 h-1.5 rounded-full ${item.color} flex-shrink-0`} />
                    <span className="text-white/80 truncate">{item.label}</span>
                  </div>
                  <span className="w-16 text-right">
                    <span className="text-white/50">{item.value}</span>
                    <span className="text-white/30 mx-0.5">/</span>
                    <span className="text-white font-medium">{item.pipeline}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right side: Chart - clean single chart, no frame */}
          <div className="flex-1 flex flex-col min-w-0">
            <div className="flex-1 relative overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid meet">
                {/* Gradient definition */}
                <defs>
                  <linearGradient id="weatherGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.05" />
                  </linearGradient>
                </defs>

                {/* Horizontal grid lines */}
                <line x1="22" y1="10" x2="198" y2="10" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" strokeDasharray="2,2" />
                <line x1="22" y1="30" x2="198" y2="30" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" strokeDasharray="2,2" />
                <line x1="22" y1="50" x2="198" y2="50" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" strokeDasharray="2,2" />
                <line x1="22" y1="70" x2="198" y2="70" stroke="rgba(255,255,255,0.12)" strokeWidth="0.5" strokeDasharray="2,2" />

                {/* Y-axis labels */}
                <text x="18" y="13" fill="rgba(255,255,255,0.7)" fontSize="8" textAnchor="end">40M</text>
                <text x="18" y="33" fill="rgba(255,255,255,0.7)" fontSize="8" textAnchor="end">30M</text>
                <text x="18" y="53" fill="rgba(255,255,255,0.7)" fontSize="8" textAnchor="end">20M</text>
                <text x="18" y="73" fill="rgba(255,255,255,0.7)" fontSize="8" textAnchor="end">10M</text>

                {/* Area fill */}
                <path
                  d="M 25 68 L 50 62 L 80 52 L 110 40 L 140 28 L 170 18 L 195 10 L 195 78 L 25 78 Z"
                  fill="url(#weatherGradient3)"
                />

                {/* Main line */}
                <path
                  d="M 25 68 L 50 62 L 80 52 L 110 40 L 140 28 L 170 18 L 195 10"
                  fill="none"
                  stroke="#06B6D4"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data points with value labels */}
                <circle cx="25" cy="68" r="4" fill="#06B6D4" stroke="white" strokeWidth="1.5" />
                <text x="25" y="80" fill="rgba(255,255,255,0.8)" fontSize="7" textAnchor="middle">8M</text>

                <circle cx="80" cy="52" r="4" fill="#06B6D4" stroke="white" strokeWidth="1.5" />
                <text x="80" y="46" fill="rgba(255,255,255,0.8)" fontSize="7" textAnchor="middle">15M</text>

                <circle cx="140" cy="28" r="4" fill="#06B6D4" stroke="white" strokeWidth="1.5" />
                <text x="140" y="22" fill="rgba(255,255,255,0.8)" fontSize="7" textAnchor="middle">26M</text>

                <circle cx="195" cy="10" r="5" fill="white" stroke="#06B6D4" strokeWidth="2" />
                <text x="182" y="6" fill="rgba(255,255,255,0.9)" fontSize="7" textAnchor="middle">37,2M</text>

                {/* X-axis labels */}
                <text x="25" y="92" fill="rgba(255,255,255,0.7)" fontSize="8" textAnchor="middle">Nå</text>
                <text x="80" y="92" fill="rgba(255,255,255,0.7)" fontSize="8" textAnchor="middle">6m</text>
                <text x="140" y="92" fill="rgba(255,255,255,0.7)" fontSize="8" textAnchor="middle">12m</text>
                <text x="195" y="92" fill="rgba(255,255,255,0.7)" fontSize="8" textAnchor="middle">18m</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Visual for Step 4: Transparency
function TransparencyVisual() {
  return (
    <div className="flex flex-col items-center gap-4 p-6">
      {/* Central insight card */}
      <div className="relative">
        <div className="w-48 h-28 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded bg-green-400/80 flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-white text-sm font-medium">Prediksjon</span>
          </div>
          <div className="space-y-1">
            <div className="h-2 w-full rounded bg-white/30" />
            <div className="h-2 w-3/4 rounded bg-white/20" />
            <div className="h-2 w-1/2 rounded bg-white/20" />
          </div>
        </div>
        {/* Source indicators */}
        <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-white/30 backdrop-blur-sm border border-white/40 flex items-center justify-center">
          <span className="text-white text-xs">D</span>
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white/30 backdrop-blur-sm border border-white/40 flex items-center justify-center">
          <span className="text-white text-xs">B</span>
        </div>
        <div className="absolute -bottom-2 -left-2 w-6 h-6 rounded-full bg-white/30 backdrop-blur-sm border border-white/40 flex items-center justify-center">
          <span className="text-white text-xs">N</span>
        </div>
      </div>
      <span className="text-white/60 text-xs">Alle kilder synlige og sporbare</span>
    </div>
  )
}

function OpenSourceIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  )
}

function NorwayModelIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  )
}

function TransparencyIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function RealtimeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  )
}
