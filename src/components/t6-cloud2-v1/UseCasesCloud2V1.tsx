'use client'

import { useState, useEffect, useCallback } from 'react'

interface UseCase {
  id: string
  title: string
  subtitle: string
  items: string[]
  preview: React.ReactNode
}

const CYCLE_DURATION = 5000

export function UseCasesCloud2V1() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const useCases: UseCase[] = [
    {
      id: 'supplier',
      title: 'Leverandører til det offentlige',
      subtitle: 'Få innsikten du trenger for å effektivt finne, vurdere og vinne de riktige anbudene kvartaler før de utlyses.',
      items: [
        'Prediker relevante utlysninger for din virksomhet',
        'Tidlig varsel om behov og historiske mønstre',
        'Raskere go/no-go vurdering med dyp konkurranseinnsikt',
        'Bygg pipeline flere kvartaler frem i tid',
        'Øk vinnersjansene med bedre innsikt og tid',
      ],
      preview: <SupplierPreview />,
    },
    {
      id: 'cfo',
      title: 'Lederteam og vekstfunksjoner',
      subtitle: 'Gjør strategiske valg med selvtillit - med oversikt over alle muligheter, kunder og konkurrenter.',
      items: [
        'Datadrevne beslutninger om markedsfokus',
        'Planlegg ressursallokering basert på prediksjoner',
        'Identifisér konkurrenters bevegelser og offentlige signaler',
        'Underbygg strategivalg med presis, hard data',
      ],
      preview: <CFOPreview />,
    },
    {
      id: 'sales',
      title: 'Salg- og markedsteam',
      subtitle: 'Finn, forstå og vinn norske B2B-kunder med det mest komplette og sammenkoblede universet av bedrifts-, person- og anbudsdata i Norge.',
      items: [
        'Bygg leadslister på sekunder med lead-data fra over 1 million norske selskaper',
        'Leadscoring basert på faktiske endringer og signaler',
        'Fyll pipeline med faktabaserte muligheter, ikke gjetting',
      ],
      preview: <SalesPreview />,
    },
  ]

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsAnimating(true)
          setTimeout(() => setIsAnimating(false), 500)
          setActiveIndex((prevIndex) => (prevIndex + 1) % useCases.length)
          return 0
        }
        return prev + (100 / (CYCLE_DURATION / 50))
      })
    }, 50)

    return () => clearInterval(interval)
  }, [isPaused, useCases.length])

  const handleCardHover = useCallback((index: number) => {
    setIsPaused(true)
    if (index !== activeIndex) {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 500)
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
      setTimeout(() => setIsAnimating(false), 500)
    }
    setActiveIndex(index)
    setProgress(0)
  }, [activeIndex])

  return (
    <section className="relative bg-slate-50 py-24">
      <div style={{ padding: '0 70px' }}>
        <div className="mx-auto" style={{ maxWidth: 'calc(100% - 140px)' }}>
          {/* Section header */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-800 tracking-tight pb-1">
              Gi teamet{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(90deg, rgb(59, 130, 246), rgb(14, 165, 233), rgb(6, 182, 212))',
                }}
              >
                superkrefter
              </span>{' '}
              med{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(90deg, rgb(59, 130, 246), rgb(14, 165, 233), rgb(6, 182, 212))',
                }}
              >
                Winly
              </span>
            </h2>
            <p className="mt-3 text-lg text-slate-500">
              Ditt værkart for forutsigbar vekst - prognostiser, identifiser og lukk salg, forny, utvid og bygg pipeline.
            </p>
          </div>

          {/* Use cases cards */}
          <div className="relative flex gap-3 h-[520px]">
            {useCases.map((useCase, index) => {
              const isActive = activeIndex === index

              return (
                <div
                  key={useCase.id}
                  className="relative transition-all duration-500 ease-out cursor-pointer overflow-hidden rounded-xl"
                  style={{
                    width: isActive ? 'calc(100% - 160px)' : '80px',
                    flexShrink: 0,
                  }}
                  onMouseEnter={() => handleCardHover(index)}
                  onMouseLeave={handleCardLeave}
                >
                  {/* Card with light gradient */}
                  <div
                    className="h-full rounded-xl p-8 transition-all duration-500 overflow-hidden relative"
                    style={{
                      background: isActive
                        ? 'linear-gradient(135deg, #3B82F6 0%, #0EA5E9 30%, #06B6D4 60%, #14B8A6 100%)'
                        : 'linear-gradient(135deg, #3B82F6 0%, #0EA5E9 100%)',
                    }}
                  >
                    {/* Extra blue overlay under text area */}
                    {isActive && (
                      <div
                        className="absolute top-0 left-0 w-[40%] h-full pointer-events-none"
                        style={{
                          background: 'linear-gradient(90deg, rgba(30, 64, 175, 0.25) 0%, rgba(30, 64, 175, 0.1) 70%, transparent 100%)',
                        }}
                      />
                    )}

                    {/* Progress bar */}
                    {isActive && (
                      <div className="absolute bottom-6 left-8 flex gap-2">
                        {useCases.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation()
                              handleProgressClick(idx)
                            }}
                            className="relative h-1 rounded-full overflow-hidden transition-all"
                            style={{
                              width: activeIndex === idx ? '46px' : '22px',
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

                    {/* Collapsed view */}
                    {!isActive && (
                      <div className="h-full flex items-center justify-center">
                        <div className="w-2 h-24 rounded-full bg-white/20" />
                      </div>
                    )}

                    {/* Expanded view */}
                    {isActive && (
                      <div className="h-full flex gap-6 pb-8">
                        {/* Left side - Content */}
                        <div className="w-[35%] flex flex-col justify-center relative z-10">
                          <div
                            className="transition-all ease-out"
                            style={{
                              opacity: isAnimating ? 0 : 1,
                              transform: isAnimating ? 'translateY(16px)' : 'translateY(0)',
                              transitionDuration: isAnimating ? '150ms' : '400ms',
                              transitionTimingFunction: isAnimating ? 'ease-in' : 'cubic-bezier(0.16, 1, 0.3, 1)',
                            }}
                          >
                            <h3 className="text-3xl font-normal text-white mb-3">
                              {useCase.title}
                            </h3>
                            <p className="text-white/90 text-base mb-8">
                              {useCase.subtitle}
                            </p>

                            <ul className="space-y-4">
                              {useCase.items.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="flex items-start gap-3"
                                  style={{
                                    opacity: isAnimating ? 0 : 1,
                                    transform: isAnimating ? 'translateY(12px)' : 'translateY(0)',
                                    transitionProperty: 'opacity, transform',
                                    transitionDuration: isAnimating ? '100ms' : '450ms',
                                    transitionTimingFunction: isAnimating ? 'ease-in' : 'cubic-bezier(0.16, 1, 0.3, 1)',
                                    transitionDelay: isAnimating ? '0ms' : `${itemIndex * 80}ms`,
                                  }}
                                >
                                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0" />
                                  <span className="text-base text-white/90 leading-relaxed">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Right side - Preview */}
                        <div className="w-[65%] flex items-center justify-center">
                          <div
                            className="w-full h-full rounded-lg overflow-hidden shadow-xl"
                            style={{
                              opacity: isAnimating ? 0 : 1,
                              transform: isAnimating ? 'scale(0.97)' : 'scale(1)',
                              transitionProperty: 'opacity, transform',
                              transitionDuration: isAnimating ? '150ms' : '500ms',
                              transitionTimingFunction: isAnimating ? 'ease-in' : 'cubic-bezier(0.16, 1, 0.3, 1)',
                              background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
                              border: '1px solid rgba(0,0,0,0.06)',
                            }}
                          >
                            {useCase.preview}
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
    </section>
  )
}

function SupplierPreview() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#0EA5E9] flex items-center justify-center">
            <span className="text-white text-xs font-bold">W</span>
          </div>
          <span className="text-sm font-medium text-gray-800">Anbudsoversikt</span>
        </div>
        <div className="px-3 py-1.5 rounded-lg bg-[#3B82F6] text-xs text-white">+ Nytt varsel</div>
      </div>

      <div className="flex-1 p-4 overflow-hidden">
        <div className="space-y-3">
          {[
            { org: 'Oslo kommune', type: 'IT-drift', value: '45M', deadline: '3 uker', hot: true },
            { org: 'Helse Sør-Øst', type: 'Medisinsk utstyr', value: '120M', deadline: '6 uker', hot: true },
            { org: 'Statens vegvesen', type: 'Konsulenter', value: '28M', deadline: '8 uker', hot: false },
            { org: 'Bergen kommune', type: 'Programvare', value: '15M', deadline: '10 uker', hot: false },
          ].map((item, i) => (
            <div key={i} className={`p-3 rounded-lg border ${item.hot ? 'border-[#F97316]/30 bg-[#F97316]/5' : 'border-gray-100 bg-white'}`}>
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-gray-800 text-sm">{item.org}</span>
                {item.hot && <span className="text-xs text-[#F97316]">Haster</span>}
              </div>
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{item.type}</span>
                <span className="text-[#3B82F6] font-medium">{item.value}</span>
              </div>
              <div className="mt-2 text-xs text-gray-400">Frist: {item.deadline}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function CFOPreview() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white">
        <span className="text-sm font-medium text-gray-800">Vekstanalyse</span>
        <div className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-600 text-xs">Live</div>
      </div>

      <div className="grid grid-cols-3 gap-3 p-4 bg-gray-50/50">
        {[
          { label: 'Markedspotensial', value: '847M', change: '+23%' },
          { label: 'Vekstrate', value: '13.2%', change: '+2.1%' },
          { label: 'Muligheter', value: '156', change: '+18' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
            <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
            <p className="text-xl font-semibold text-gray-800">{stat.value}</p>
            <p className="text-xs text-emerald-500">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="flex-1 p-4">
        <div className="bg-white rounded-xl border border-gray-100 p-4 h-full">
          <span className="text-sm font-medium text-gray-800 mb-4 block">Sektorfordeling</span>
          <div className="flex items-end justify-between gap-2 h-24">
            {[
              { label: 'Helse', value: 85 },
              { label: 'IT', value: 72 },
              { label: 'Bygg', value: 68 },
              { label: 'Transport', value: 54 },
              { label: 'Energi', value: 45 },
            ].map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full rounded-t-lg bg-gradient-to-t from-[#3B82F6] to-[#06B6D4]" style={{ height: `${bar.value}%` }} />
                <span className="text-[10px] text-gray-500">{bar.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function SalesPreview() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white">
        <span className="text-sm font-medium text-gray-800">Lead scoring</span>
        <div className="flex items-center gap-2">
          <div className="px-3 py-1.5 rounded-lg bg-gray-100 text-xs text-gray-600">Filtrer</div>
          <div className="px-3 py-1.5 rounded-lg bg-[#3B82F6] text-xs text-white">+ Ny liste</div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        <div className="grid grid-cols-12 gap-2 px-4 py-2 bg-gray-50 text-xs text-gray-500 font-medium border-b border-gray-100">
          <div className="col-span-5">Lead</div>
          <div className="col-span-3">Signal</div>
          <div className="col-span-2">Timing</div>
          <div className="col-span-2">Score</div>
        </div>

        <div className="divide-y divide-gray-50">
          {[
            { name: 'Equinor ASA', signal: 'Budsjettøkning', timing: 'Nå', score: 94 },
            { name: 'DNB Bank', signal: 'Ny prosjektleder', timing: '2 uker', score: 88 },
            { name: 'Telenor Norge', signal: 'Kontraktsutløp', timing: '1 mnd', score: 82 },
            { name: 'Posten Norge', signal: 'Strategiendring', timing: '3 uker', score: 78 },
          ].map((lead, i) => (
            <div key={i} className={`grid grid-cols-12 gap-2 px-4 py-3 items-center hover:bg-blue-50/50 transition-colors ${i === 0 ? 'bg-blue-50/30' : ''}`}>
              <div className="col-span-5 flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#0EA5E9] flex items-center justify-center text-white text-xs font-bold">
                  {lead.name.charAt(0)}
                </div>
                <span className="text-sm font-medium text-gray-800">{lead.name}</span>
              </div>
              <div className="col-span-3 text-sm text-gray-600">{lead.signal}</div>
              <div className="col-span-2 text-sm text-[#3B82F6]">{lead.timing}</div>
              <div className="col-span-2">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#3B82F6] to-[#06B6D4] rounded-full" style={{ width: `${lead.score}%` }} />
                  </div>
                  <span className="text-xs font-medium text-gray-700">{lead.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
