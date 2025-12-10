'use client'

import { useState, useEffect, useCallback } from 'react'

interface UseCase {
  id: string
  title: string
  subtitle: string
  items: string[]
  preview: React.ReactNode
}

const CYCLE_DURATION = 5000 // 5 seconds (halved from 10)

export function UseCasesTruthEngineV9() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const useCases: UseCase[] = [
    {
      id: 'sales',
      title: 'Salg',
      subtitle: 'Finn og prioriter de riktige selskapene',
      items: [
        'Filtrer på bransje, størrelse og vekst',
        'Se beslutningstagere før kontakt',
        'Eksporter direkte til CRM',
      ],
      preview: <SalesPreview />,
    },
    {
      id: 'marketing',
      title: 'Marked',
      subtitle: 'Bygg presise målgrupper',
      items: [
        'Segmenter basert på reelle data',
        'Del innsikt med salgsteamet',
        'Mål markedspenetrasjon',
      ],
      preview: <MarketingPreview />,
    },
    {
      id: 'analysts',
      title: 'Analytikere',
      subtitle: 'Strukturert data for analyser',
      items: [
        'Forstå eierstrukturer',
        'Eksporter til rapporter',
        'Dokumenterte kilder',
      ],
      preview: <AnalystPreview />,
    },
  ]

  // Auto-cycle through cards with progress
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsAnimating(true)
          setTimeout(() => setIsAnimating(false), 600)
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
      setTimeout(() => setIsAnimating(false), 600)
    }
    setActiveIndex(index)
    setProgress(0)
  }, [activeIndex])

  const handleCardLeave = useCallback(() => {
    setIsPaused(false)
  }, [])

  return (
    <section className="relative bg-[#F5F7FA] py-24">
      <div style={{ padding: '0 70px' }}>
        <div className="mx-auto" style={{ maxWidth: 'calc(100% - 140px)' }}>
          {/* Section header */}
          <div className="mb-12">
            <h2
              className="text-3xl sm:text-4xl tracking-tight text-[#121111]"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 300 }}
            >
              Bygget for team som trenger{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(90deg, rgb(68, 109, 205), rgb(75, 182, 211), rgb(110, 242, 204))',
                }}
              >
                presise fakta
              </span>
            </h2>
          </div>

          {/* Use cases cards - brighter baby blue to mint gradient like Devin */}
          <div className="relative flex gap-3 h-[520px]">
            {useCases.map((useCase, index) => {
              const isActive = activeIndex === index

              return (
                <div
                  key={useCase.id}
                  className="relative transition-all duration-500 ease-out cursor-pointer overflow-hidden rounded-2xl"
                  style={{
                    width: isActive ? 'calc(100% - 160px)' : '80px',
                    flexShrink: 0,
                  }}
                  onMouseEnter={() => handleCardHover(index)}
                  onMouseLeave={handleCardLeave}
                >
                  {/* Card with bright baby blue to mint gradient like Devin image 3 */}
                  <div
                    className="h-full rounded-2xl p-8 transition-all duration-500 overflow-hidden relative"
                    style={{
                      background: isActive
                        ? 'linear-gradient(135deg, #5BB8E8 0%, #6DCFCF 40%, #7EE8B8 100%)'
                        : 'linear-gradient(135deg, #4AABDB 0%, #5BBFBF 100%)',
                    }}
                  >
                    {/* Progress bar inside card at bottom - like Devin */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/10">
                        <div
                          className="h-full bg-white/60 transition-all duration-75"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    )}

                    {/* Collapsed view - narrow strip */}
                    {!isActive && (
                      <div className="h-full flex items-center justify-center">
                        <div className="w-1.5 h-20 rounded-full bg-white/30" />
                      </div>
                    )}

                    {/* Expanded view with smooth fade-in animation */}
                    {isActive && (
                      <div className="h-full flex gap-6">
                        {/* Left side - Content */}
                        <div className="w-[35%] flex flex-col justify-center">
                          {/* Content fades in from bottom */}
                          <div
                            className={`transition-all duration-500 ease-out ${
                              isAnimating
                                ? 'opacity-0 translate-y-4'
                                : 'opacity-100 translate-y-0'
                            }`}
                          >
                            <h3
                              className="text-3xl text-white mb-3"
                              style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 400 }}
                            >
                              {useCase.title}
                            </h3>
                            <p
                              className="text-white/80 text-base mb-8"
                              style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 300 }}
                            >
                              {useCase.subtitle}
                            </p>

                            <ul className="space-y-4">
                              {useCase.items.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className="flex items-start gap-3"
                                  style={{
                                    transitionDelay: `${itemIndex * 80}ms`,
                                  }}
                                >
                                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0" />
                                  <span
                                    className="text-base text-white/90 leading-relaxed"
                                    style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 300 }}
                                  >
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Right side - Preview with white background */}
                        <div className="w-[65%] flex items-center justify-center">
                          <div
                            className={`w-full h-full rounded-xl overflow-hidden shadow-lg transition-all duration-500 ease-out ${
                              isAnimating
                                ? 'opacity-0 scale-95'
                                : 'opacity-100 scale-100'
                            }`}
                            style={{
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

// Preview components with dark text on light backgrounds
function SalesPreview() {
  return (
    <div className="h-full p-5 flex flex-col" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#10131C] text-white text-xs" style={{ fontWeight: 400 }}>
          <SearchIcon className="w-3.5 h-3.5" />
          Søk
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gray-100 text-gray-500 text-xs" style={{ fontWeight: 300 }}>
          <FilterIcon className="w-3.5 h-3.5" />
          Filter
        </div>
      </div>

      <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 mb-4">
        <div className="flex items-center gap-2">
          <SearchIcon className="w-4 h-4 text-[#4BB6D3]" />
          <span className="text-gray-700 text-sm" style={{ fontWeight: 300 }}>IT-selskaper i Oslo med &gt;10 ansatte</span>
        </div>
      </div>

      <div className="flex-1 space-y-2">
        <div className="text-xs text-gray-400 mb-2" style={{ fontWeight: 300 }}>847 resultater funnet</div>
        {[
          { name: 'Acme Tech AS', industry: 'IT-tjenester', employees: '45', location: 'Oslo' },
          { name: 'Nordic Digital AS', industry: 'Programvare', employees: '128', location: 'Oslo' },
          { name: 'CloudWorks Norway', industry: 'Cloud Services', employees: '67', location: 'Oslo' },
        ].map((company, i) => (
          <div key={i} className="flex items-center justify-between p-2.5 rounded-lg border border-gray-100 bg-white hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5BB8E8] to-[#7EE8B8] flex items-center justify-center text-white text-xs" style={{ fontWeight: 500 }}>
                {company.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm text-gray-800" style={{ fontWeight: 400 }}>{company.name}</p>
                <p className="text-xs text-gray-400" style={{ fontWeight: 300 }}>{company.industry}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-[#4BB6D3]" style={{ fontWeight: 400 }}>{company.employees} ansatte</p>
              <p className="text-xs text-gray-400" style={{ fontWeight: 300 }}>{company.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MarketingPreview() {
  return (
    <div className="h-full p-5 flex flex-col" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div className="text-gray-800 text-sm mb-4" style={{ fontWeight: 400 }}>Markedssegmentering</div>

      <div className="flex-1 flex items-end gap-2 pb-4">
        {[65, 45, 80, 55, 70, 40, 85].map((height, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t transition-all"
              style={{
                height: `${height}%`,
                background: i === 2 || i === 6
                  ? 'linear-gradient(180deg, #5BB8E8 0%, #7EE8B8 100%)'
                  : '#E5E7EB',
              }}
            />
            <span className="text-[10px] text-gray-400" style={{ fontWeight: 300 }}>{['IT', 'Fin', 'Tech', 'Helse', 'Log', 'Bygg', 'SaaS'][i]}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-6 pt-4 border-t border-gray-100">
        <div>
          <div className="text-2xl text-gray-800" style={{ fontWeight: 300 }}>2,847</div>
          <div className="text-xs text-gray-400" style={{ fontWeight: 300 }}>Selskaper i segment</div>
        </div>
        <div>
          <div className="text-2xl text-[#10B981]" style={{ fontWeight: 400 }}>+18%</div>
          <div className="text-xs text-gray-400" style={{ fontWeight: 300 }}>vs forrige måned</div>
        </div>
      </div>
    </div>
  )
}

function AnalystPreview() {
  return (
    <div className="h-full p-5 flex flex-col" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div className="flex items-center justify-between mb-4">
        <div className="text-gray-800 text-sm" style={{ fontWeight: 400 }}>Konsernstruktur</div>
        <div className="text-xs text-gray-400" style={{ fontWeight: 300 }}>3 nivåer</div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center gap-3">
        <div className="px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 text-gray-800 text-sm" style={{ fontWeight: 400 }}>
          Holding Group AS
        </div>

        <div className="w-px h-4 bg-gray-300" />

        <div className="flex gap-6">
          {['Tech AS', 'Services AS', 'Data AS'].map((name, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-px h-3 bg-gray-300" />
              <div className={`px-3 py-1.5 rounded-lg text-xs ${
                i === 0 ? 'bg-[#5BB8E8]/20 border border-[#5BB8E8] text-[#1A4B5C]' : 'bg-gray-50 border border-gray-200 text-gray-600'
              }`} style={{ fontWeight: 400 }}>
                {name}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3 -mt-1 ml-[-80px]">
          <div className="flex flex-col items-center">
            <div className="w-px h-3 bg-gray-200" />
            <div className="px-2 py-1 rounded bg-gray-50 text-gray-500 text-[10px]" style={{ fontWeight: 300 }}>
              Dev Team
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-px h-3 bg-gray-200" />
            <div className="px-2 py-1 rounded bg-gray-50 text-gray-500 text-[10px]" style={{ fontWeight: 300 }}>
              Sales Team
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
        <div className="w-2 h-2 rounded-full bg-[#10B981]" />
        <span className="text-xs text-gray-500" style={{ fontWeight: 300 }}>Data fra Brønnøysund</span>
      </div>
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
