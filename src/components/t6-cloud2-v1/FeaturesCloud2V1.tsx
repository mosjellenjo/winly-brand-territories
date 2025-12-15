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

// Visual for Step 1: Data Collection
function DataCollectionVisual() {
  return (
    <div className="flex flex-col items-center gap-4 p-6">
      {/* Data sources */}
      <div className="flex gap-6">
        {['Doffin', 'Brønnøysund', 'Nyheter', 'Budsjett'].map((source, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm border border-white/20">
              <span className="text-white text-lg font-medium">{source[0]}</span>
            </div>
            <span className="text-white/60 text-xs">{source}</span>
          </div>
        ))}
      </div>
      {/* Flow lines */}
      <div className="flex items-center justify-center gap-1">
        <div className="w-1 h-1 rounded-full bg-white/40" />
        <div className="w-1 h-1 rounded-full bg-white/40" />
        <div className="w-1 h-1 rounded-full bg-white/40" />
        <svg className="w-5 h-5 text-white/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
        <div className="w-1 h-1 rounded-full bg-white/40" />
        <div className="w-1 h-1 rounded-full bg-white/40" />
        <div className="w-1 h-1 rounded-full bg-white/40" />
      </div>
      {/* Funnel output */}
      <div className="w-16 h-10 rounded-lg bg-white/25 flex items-center justify-center backdrop-blur-sm border border-white/30">
        <span className="text-white text-xs font-medium">DATA</span>
      </div>
    </div>
  )
}

// Visual for Step 2: AI Radar
function AIRadarVisual() {
  return (
    <div className="relative w-48 h-48">
      {/* Radar circles */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-40 h-40 rounded-full border border-white/15" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-28 h-28 rounded-full border border-white/20" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border border-white/25" />
      </div>
      {/* Center dot */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-white/80" />
      </div>
      {/* Sweep */}
      <div
        className="absolute top-1/2 left-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 origin-center"
        style={{
          background: 'conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.3) 45deg, transparent 90deg)',
          borderRadius: '50%',
          animation: 'spin 4s linear infinite',
        }}
      />
      {/* Detected signals */}
      <div className="absolute top-6 right-10 w-3 h-3 rounded-full bg-orange-400 animate-pulse" />
      <div className="absolute bottom-10 left-8 w-2.5 h-2.5 rounded-full bg-orange-400/70 animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-6 right-6 w-2 h-2 rounded-full bg-orange-400/50 animate-pulse" style={{ animationDelay: '1s' }} />
      <style jsx>{`
        @keyframes spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

// Visual for Step 3: Weather Map
function WeatherMapVisual() {
  return (
    <div className="relative w-full h-full p-4">
      {/* Simplified map */}
      <div className="relative w-full h-full rounded-lg bg-white/10 border border-white/20 overflow-hidden">
        {/* Rain cloud area 1 */}
        <div className="absolute top-4 left-8">
          <div className="flex flex-col items-center">
            <svg className="w-10 h-10 text-white/80" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
            </svg>
            <div className="flex gap-1 mt-1">
              <div className="w-0.5 h-3 bg-white/60 rounded animate-pulse" />
              <div className="w-0.5 h-3 bg-white/60 rounded animate-pulse" style={{ animationDelay: '0.2s' }} />
              <div className="w-0.5 h-3 bg-white/60 rounded animate-pulse" style={{ animationDelay: '0.4s' }} />
            </div>
            <span className="text-white/70 text-xs mt-1">Oslo</span>
          </div>
        </div>
        {/* Rain cloud area 2 */}
        <div className="absolute bottom-8 right-10">
          <div className="flex flex-col items-center">
            <svg className="w-8 h-8 text-white/60" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
            </svg>
            <div className="flex gap-1 mt-1">
              <div className="w-0.5 h-2 bg-white/40 rounded animate-pulse" />
              <div className="w-0.5 h-2 bg-white/40 rounded animate-pulse" style={{ animationDelay: '0.3s' }} />
            </div>
            <span className="text-white/50 text-xs mt-1">Bergen</span>
          </div>
        </div>
        {/* Opportunity markers */}
        <div className="absolute top-12 right-16">
          <div className="w-4 h-4 rounded-full bg-orange-400 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white" />
          </div>
        </div>
        {/* Legend */}
        <div className="absolute bottom-2 left-2 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-white/60" />
            <span className="text-white/50 text-[10px]">Regn = mulighet</span>
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
