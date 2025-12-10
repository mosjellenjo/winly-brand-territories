'use client'

import { useState, useEffect, useCallback } from 'react'

interface UseCase {
  id: string
  title: string
  subtitle: string
  items: string[]
  preview: React.ReactNode
}

const CYCLE_DURATION = 10000 // 10 seconds

export function UseCasesTruthEngineV8() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

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
          setActiveIndex((prevIndex) => (prevIndex + 1) % useCases.length)
          return 0
        }
        return prev + (100 / (CYCLE_DURATION / 50)) // Update every 50ms
      })
    }, 50)

    return () => clearInterval(interval)
  }, [isPaused, useCases.length])

  const handleCardHover = useCallback((index: number) => {
    setIsPaused(true)
    setActiveIndex(index)
    setProgress(0)
  }, [])

  const handleCardLeave = useCallback(() => {
    setIsPaused(false)
  }, [])

  const handleProgressClick = useCallback((index: number) => {
    setActiveIndex(index)
    setProgress(0)
  }, [])

  return (
    <section className="relative bg-[#F5F7FA] py-24">
      <div style={{ padding: '0 70px' }}>
        <div className="mx-auto" style={{ maxWidth: 'calc(100% - 140px)' }}>
          {/* Section header */}
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-normal text-[#121111] tracking-tight">
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

          {/* Use cases cards - colors matched to Devin's darker blue/green */}
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
                  {/* Card with Devin-matched darker teal/blue gradient */}
                  <div
                    className="h-full rounded-xl p-8 transition-all duration-500 overflow-hidden"
                    style={{
                      // Darker, more blue-green like Devin's use case cards
                      background: isActive
                        ? 'linear-gradient(145deg, #1A4B5C 0%, #256B7A 40%, #2E8B8B 100%)'
                        : 'linear-gradient(145deg, #143D4A 0%, #1A4B5C 100%)',
                    }}
                  >
                    {/* Collapsed view - narrow strip */}
                    {!isActive && (
                      <div className="h-full flex items-center justify-center">
                        <div className="w-2 h-24 rounded-full bg-white/20" />
                      </div>
                    )}

                    {/* Expanded view */}
                    {isActive && (
                      <div className="h-full flex gap-6">
                        {/* Left side - Content (narrower to give more space to preview) */}
                        <div className="w-[35%] flex flex-col justify-center">
                          <h3 className="text-3xl font-medium text-white mb-3">
                            {useCase.title}
                          </h3>
                          <p className="text-white/70 text-base mb-8">
                            {useCase.subtitle}
                          </p>

                          <ul className="space-y-4">
                            {useCase.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3">
                                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0" />
                                <span className="text-base text-white/80 leading-relaxed">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Right side - Preview (with white/light background for contrast) */}
                        <div className="w-[65%] flex items-center justify-center">
                          <div
                            className="w-full h-full rounded-lg overflow-hidden shadow-lg"
                            style={{
                              // White/light background for contrast
                              background: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
                              border: '1px solid rgba(0,0,0,0.08)',
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

          {/* Progress bar indicators */}
          <div className="mt-8 flex justify-center gap-3">
            {useCases.map((useCase, index) => (
              <button
                key={useCase.id}
                onClick={() => handleProgressClick(index)}
                className="relative h-1 rounded-full overflow-hidden transition-all bg-[#446DCD]/20"
                style={{ width: activeIndex === index ? '48px' : '24px' }}
              >
                {/* Progress fill */}
                <div
                  className="absolute inset-y-0 left-0 rounded-full transition-all"
                  style={{
                    width: activeIndex === index ? `${progress}%` : index < activeIndex ? '100%' : '0%',
                    backgroundColor: '#446DCD',
                  }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Preview components with DARK text on light backgrounds
function SalesPreview() {
  return (
    <div className="h-full p-5 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#10131C] text-white text-xs font-medium">
          <SearchIcon className="w-3.5 h-3.5" />
          Søk
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-gray-100 text-gray-500 text-xs">
          <FilterIcon className="w-3.5 h-3.5" />
          Filter
        </div>
      </div>

      {/* Search bar */}
      <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 mb-4">
        <div className="flex items-center gap-2">
          <SearchIcon className="w-4 h-4 text-[#4BB6D3]" />
          <span className="text-gray-700 text-sm">IT-selskaper i Oslo med &gt;10 ansatte</span>
        </div>
      </div>

      {/* Results */}
      <div className="flex-1 space-y-2">
        <div className="text-xs text-gray-400 mb-2">847 resultater funnet</div>
        {[
          { name: 'Acme Tech AS', industry: 'IT-tjenester', employees: '45', location: 'Oslo' },
          { name: 'Nordic Digital AS', industry: 'Programvare', employees: '128', location: 'Oslo' },
          { name: 'CloudWorks Norway', industry: 'Cloud Services', employees: '67', location: 'Oslo' },
        ].map((company, i) => (
          <div key={i} className="flex items-center justify-between p-2.5 rounded-lg border border-gray-100 bg-white hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#446DCD] to-[#4BB6D3] flex items-center justify-center text-white text-xs font-medium">
                {company.name.charAt(0)}
              </div>
              <div>
                <p className="text-sm text-gray-800 font-medium">{company.name}</p>
                <p className="text-xs text-gray-400">{company.industry}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-[#4BB6D3] font-medium">{company.employees} ansatte</p>
              <p className="text-xs text-gray-400">{company.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MarketingPreview() {
  return (
    <div className="h-full p-5 flex flex-col">
      <div className="text-gray-800 text-sm font-medium mb-4">Markedssegmentering</div>

      {/* Bar chart */}
      <div className="flex-1 flex items-end gap-2 pb-4">
        {[65, 45, 80, 55, 70, 40, 85].map((height, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full rounded-t transition-all"
              style={{
                height: `${height}%`,
                background: i === 2 || i === 6
                  ? 'linear-gradient(180deg, #4BB6D3 0%, #6EF2CC 100%)'
                  : '#E5E7EB',
              }}
            />
            <span className="text-[10px] text-gray-400">{['IT', 'Fin', 'Tech', 'Helse', 'Log', 'Bygg', 'SaaS'][i]}</span>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="flex gap-6 pt-4 border-t border-gray-100">
        <div>
          <div className="text-2xl font-medium text-gray-800">2,847</div>
          <div className="text-xs text-gray-400">Selskaper i segment</div>
        </div>
        <div>
          <div className="text-2xl font-medium text-[#10B981]">+18%</div>
          <div className="text-xs text-gray-400">vs forrige måned</div>
        </div>
      </div>
    </div>
  )
}

function AnalystPreview() {
  return (
    <div className="h-full p-5 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-gray-800 text-sm font-medium">Konsernstruktur</div>
        <div className="text-xs text-gray-400">3 nivåer</div>
      </div>

      {/* Org tree visualization */}
      <div className="flex-1 flex flex-col items-center justify-center gap-3">
        {/* Top level */}
        <div className="px-4 py-2 rounded-lg bg-gray-100 border border-gray-200 text-gray-800 text-sm font-medium">
          Holding Group AS
        </div>

        {/* Connector */}
        <div className="w-px h-4 bg-gray-300" />

        {/* Middle level */}
        <div className="flex gap-6">
          {['Tech AS', 'Services AS', 'Data AS'].map((name, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-px h-3 bg-gray-300" />
              <div className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
                i === 0 ? 'bg-[#4BB6D3]/20 border border-[#4BB6D3] text-[#1A4B5C]' : 'bg-gray-50 border border-gray-200 text-gray-600'
              }`}>
                {name}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom level under Tech AS */}
        <div className="flex gap-3 -mt-1 ml-[-80px]">
          <div className="flex flex-col items-center">
            <div className="w-px h-3 bg-gray-200" />
            <div className="px-2 py-1 rounded bg-gray-50 text-gray-500 text-[10px]">
              Dev Team
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-px h-3 bg-gray-200" />
            <div className="px-2 py-1 rounded bg-gray-50 text-gray-500 text-[10px]">
              Sales Team
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
        <div className="w-2 h-2 rounded-full bg-[#10B981]" />
        <span className="text-xs text-gray-500">Data fra Brønnøysund</span>
      </div>
    </div>
  )
}

// Icons
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
