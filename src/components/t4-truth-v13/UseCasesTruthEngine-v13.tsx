'use client'

import { useState, useEffect, useCallback } from 'react'

interface UseCase {
  id: string
  title: string
  subtitle: string
  items: string[]
  preview: React.ReactNode
}

const CYCLE_DURATION = 5000 // 5 seconds

export function UseCasesTruthEngineV13() {
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
          setTimeout(() => setIsAnimating(false), 600) // Slower animation
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

  const handleProgressClick = useCallback((index: number) => {
    if (index !== activeIndex) {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 600)
    }
    setActiveIndex(index)
    setProgress(0)
  }, [activeIndex])

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

          {/* Use cases cards - slightly darker clear sky blue on left */}
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
                  {/* Card with slightly darker but bright clear sky blue on left */}
                  <div
                    className="h-full rounded-xl p-8 transition-all duration-500 overflow-hidden relative"
                    style={{
                      // Slightly darker clear sky blue on left, transitioning to brighter teal
                      background: isActive
                        ? 'linear-gradient(135deg, #3498C8 0%, #4AAFD8 20%, #5CC2DC 40%, #6ED4D4 60%, #80E8C8 80%, #90F0BC 100%)'
                        : 'linear-gradient(135deg, #4AB0D8 0%, #6CD8D0 100%)',
                    }}
                  >
                    {/* Subtle darker overlay on left for better text readability */}
                    {isActive && (
                      <div
                        className="absolute top-0 left-0 w-[40%] h-full pointer-events-none"
                        style={{
                          background: 'linear-gradient(90deg, rgba(40, 100, 150, 0.15) 0%, transparent 100%)',
                        }}
                      />
                    )}

                    {/* 3-line progress bar inside card at bottom - like Devin */}
                    {isActive && (
                      <div className="absolute bottom-4 left-8 right-8 flex gap-2">
                        {useCases.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation()
                              handleProgressClick(idx)
                            }}
                            className="relative h-1 rounded-full overflow-hidden transition-all"
                            style={{
                              width: activeIndex === idx ? '48px' : '24px',
                              backgroundColor: 'rgba(255, 255, 255, 0.3)',
                            }}
                          >
                            {/* Progress fill - white like Devin */}
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

                    {/* Collapsed view - narrow strip */}
                    {!isActive && (
                      <div className="h-full flex items-center justify-center">
                        <div className="w-2 h-24 rounded-full bg-white/30" />
                      </div>
                    )}

                    {/* Expanded view with slower fade-in and shorter slide */}
                    {isActive && (
                      <div className="h-full flex gap-6 pb-8">
                        {/* Left side - Content */}
                        <div className="w-[35%] flex flex-col justify-center relative z-10">
                          {/* Content fades in and slides up - SLOWER, SHORTER distance */}
                          <div
                            className={`transition-all duration-700 ease-out ${
                              isAnimating
                                ? 'opacity-0 translate-y-3'
                                : 'opacity-100 translate-y-0'
                            }`}
                          >
                            {/* Dark text for better contrast on baby-blue */}
                            <h3 className="text-3xl font-normal text-gray-800 mb-3">
                              {useCase.title}
                            </h3>
                            <p className="text-gray-600 text-base mb-8">
                              {useCase.subtitle}
                            </p>

                            <ul className="space-y-4">
                              {useCase.items.map((item, itemIndex) => (
                                <li
                                  key={itemIndex}
                                  className={`flex items-start gap-3 transition-all duration-700 ease-out ${
                                    isAnimating
                                      ? 'opacity-0 translate-y-2'
                                      : 'opacity-100 translate-y-0'
                                  }`}
                                  style={{
                                    transitionDelay: isAnimating ? '0ms' : `${itemIndex * 120}ms`,
                                  }}
                                >
                                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-500 flex-shrink-0" />
                                  <span className="text-base text-gray-700 leading-relaxed">
                                    {item}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Right side - Fancy Preview */}
                        <div className="w-[65%] flex items-center justify-center">
                          <div
                            className={`w-full h-full rounded-lg overflow-hidden shadow-xl transition-all duration-700 ease-out ${
                              isAnimating
                                ? 'opacity-0 scale-98'
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

// FANCY Preview components - same as v11
function SalesPreview() {
  return (
    <div className="h-full flex flex-col">
      {/* App header bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5EC4E8] to-[#7EECC0] flex items-center justify-center">
            <span className="text-white text-xs font-bold">W</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-800">Prospekter</span>
            <ChevronIcon className="w-4 h-4 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="px-3 py-1.5 rounded-lg bg-gray-100 text-xs text-gray-600">Filtrer</div>
          <div className="px-3 py-1.5 rounded-lg bg-[#5EC4E8] text-xs text-white">+ Ny liste</div>
        </div>
      </div>

      {/* Search and filters */}
      <div className="px-4 py-3 border-b border-gray-50 bg-gray-50/50">
        <div className="flex items-center gap-3">
          <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200">
            <SearchIcon className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-500">Søk i 2.4M selskaper...</span>
          </div>
          <div className="flex items-center gap-2">
            <FilterTag label="IT-tjenester" active />
            <FilterTag label="Oslo" active />
            <FilterTag label="10-100 ansatte" active />
            <FilterTag label="+3" />
          </div>
        </div>
      </div>

      {/* Results table */}
      <div className="flex-1 overflow-hidden">
        {/* Table header */}
        <div className="grid grid-cols-12 gap-2 px-4 py-2 bg-gray-50 text-xs text-gray-500 font-medium border-b border-gray-100">
          <div className="col-span-4">Selskap</div>
          <div className="col-span-2">Bransje</div>
          <div className="col-span-2">Ansatte</div>
          <div className="col-span-2">Omsetning</div>
          <div className="col-span-2">Score</div>
        </div>

        {/* Table rows */}
        <div className="divide-y divide-gray-50">
          {[
            { name: 'Cognite AS', initial: 'C', industry: 'Software', employees: '487', revenue: '892M', score: 94, growth: '+23%', color: 'from-blue-500 to-cyan-500' },
            { name: 'Kahoot! ASA', initial: 'K', industry: 'EdTech', employees: '512', revenue: '1.2B', score: 91, growth: '+18%', color: 'from-purple-500 to-pink-500' },
            { name: 'Oda', initial: 'O', industry: 'E-commerce', employees: '1,234', revenue: '2.1B', score: 88, growth: '+45%', color: 'from-green-500 to-emerald-500' },
            { name: 'Gelato', initial: 'G', industry: 'Print Tech', employees: '324', revenue: '567M', score: 85, growth: '+31%', color: 'from-orange-500 to-amber-500' },
            { name: 'Pexip', initial: 'P', industry: 'Video Tech', employees: '289', revenue: '445M', score: 82, growth: '+12%', color: 'from-indigo-500 to-violet-500' },
          ].map((company, i) => (
            <div key={i} className={`grid grid-cols-12 gap-2 px-4 py-3 items-center hover:bg-blue-50/50 transition-colors ${i === 0 ? 'bg-blue-50/30' : ''}`}>
              <div className="col-span-4 flex items-center gap-3">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${company.color} flex items-center justify-center text-white text-xs font-bold shadow-sm`}>
                  {company.initial}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800">{company.name}</p>
                  <p className="text-xs text-gray-400">Oslo, Norge</p>
                </div>
              </div>
              <div className="col-span-2 text-sm text-gray-600">{company.industry}</div>
              <div className="col-span-2 text-sm text-gray-600">{company.employees}</div>
              <div className="col-span-2">
                <span className="text-sm text-gray-800">{company.revenue}</span>
                <span className="text-xs text-emerald-500 ml-1">{company.growth}</span>
              </div>
              <div className="col-span-2">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#5EC4E8] to-[#7EECC0] rounded-full" style={{ width: `${company.score}%` }} />
                  </div>
                  <span className="text-xs font-medium text-gray-700">{company.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-2 border-t border-gray-100 bg-white flex items-center justify-between">
        <span className="text-xs text-gray-500">Viser 5 av 847 resultater</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-400">Side 1 av 170</span>
          <div className="flex gap-1">
            <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center text-gray-400 text-xs">←</div>
            <div className="w-6 h-6 rounded bg-[#5EC4E8] flex items-center justify-center text-white text-xs">→</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MarketingPreview() {
  return (
    <div className="h-full flex flex-col">
      {/* Dashboard header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-800">Markedsinnsikt</span>
          <div className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-600 text-xs">Live</div>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span>Sist oppdatert: 2 min siden</span>
          <RefreshIcon className="w-4 h-4" />
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-4 gap-3 p-4 bg-gray-50/50">
        {[
          { label: 'Total addresserbart marked', value: '24,847', change: '+12%', icon: '📊' },
          { label: 'Identifiserte prospekter', value: '3,291', change: '+8%', icon: '🎯' },
          { label: 'Markedspenetrasjon', value: '13.2%', change: '+2.1%', icon: '📈' },
          { label: 'Estimert potensial', value: '847M', change: '+23%', icon: '💰' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-xl p-3 border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-lg">{stat.icon}</span>
              <span className="text-xs text-emerald-500 font-medium">{stat.change}</span>
            </div>
            <p className="text-xl font-semibold text-gray-800">{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Chart area */}
      <div className="flex-1 p-4 flex gap-4">
        {/* Bar chart */}
        <div className="flex-1 bg-white rounded-xl border border-gray-100 p-4">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-800">Segment fordeling</span>
            <div className="flex gap-1">
              {['1M', '3M', '1Y'].map((t, i) => (
                <span key={t} className={`px-2 py-0.5 rounded text-xs ${i === 1 ? 'bg-[#5EC4E8] text-white' : 'text-gray-500'}`}>{t}</span>
              ))}
            </div>
          </div>
          <div className="flex items-end justify-between gap-2 h-32">
            {[
              { label: 'SaaS', value: 85, count: '4.2K' },
              { label: 'FinTech', value: 72, count: '3.1K' },
              { label: 'HealthTech', value: 68, count: '2.8K' },
              { label: 'CleanTech', value: 54, count: '2.1K' },
              { label: 'EdTech', value: 45, count: '1.7K' },
              { label: 'PropTech', value: 38, count: '1.2K' },
            ].map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <span className="text-[10px] text-gray-500">{bar.count}</span>
                <div className="w-full rounded-t-lg bg-gradient-to-t from-[#5EC4E8] to-[#7EECC0]" style={{ height: `${bar.value}%` }} />
                <span className="text-[10px] text-gray-500 mt-1">{bar.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pie chart / distribution */}
        <div className="w-40 bg-white rounded-xl border border-gray-100 p-4">
          <span className="text-sm font-medium text-gray-800 block mb-3">Region</span>
          <div className="relative w-24 h-24 mx-auto mb-3">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#e5e7eb" strokeWidth="20" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#5EC4E8" strokeWidth="20" strokeDasharray="125.6 251.2" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#7EECC0" strokeWidth="20" strokeDasharray="62.8 251.2" strokeDashoffset="-125.6" />
              <circle cx="50" cy="50" r="40" fill="none" stroke="#A78BFA" strokeWidth="20" strokeDasharray="37.7 251.2" strokeDashoffset="-188.4" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-semibold text-gray-800">100%</span>
            </div>
          </div>
          <div className="space-y-1.5">
            {[
              { label: 'Oslo', pct: '50%', color: 'bg-[#5EC4E8]' },
              { label: 'Bergen', pct: '25%', color: 'bg-[#7EECC0]' },
              { label: 'Andre', pct: '25%', color: 'bg-purple-400' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-xs">
                <div className={`w-2 h-2 rounded-full ${item.color}`} />
                <span className="text-gray-600">{item.label}</span>
                <span className="ml-auto font-medium text-gray-800">{item.pct}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function AnalystPreview() {
  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 bg-white">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-800">Konsernanalyse</span>
          <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-600 text-xs">Premium</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="px-3 py-1.5 rounded-lg bg-gray-100 text-xs text-gray-600 flex items-center gap-1">
            <DownloadIcon className="w-3 h-3" />
            Eksporter
          </div>
        </div>
      </div>

      {/* Company header */}
      <div className="px-4 py-4 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xl font-bold shadow-lg">
            S
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold text-gray-800">Schibsted ASA</h3>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-600 text-xs">Verifisert</span>
            </div>
            <p className="text-sm text-gray-500">Org.nr: 933 149 187 • Børs: SCHA.OL</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-semibold text-gray-800">12.4B</p>
            <p className="text-xs text-emerald-500">+8.2% YoY</p>
          </div>
        </div>
      </div>

      {/* Org tree visualization */}
      <div className="flex-1 p-4 overflow-hidden">
        <div className="flex flex-col items-center h-full">
          {/* Parent */}
          <div className="relative">
            <div className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg">
              <p className="text-sm font-medium">Schibsted ASA</p>
              <p className="text-xs opacity-80">Holding • 12.4B</p>
            </div>
          </div>

          {/* Connector */}
          <div className="w-px h-4 bg-gray-300" />
          <div className="w-64 h-px bg-gray-300" />

          {/* Children row 1 */}
          <div className="flex gap-8 mt-4">
            {[
              { name: 'VG', type: 'Media', value: '2.1B', color: 'from-red-400 to-red-500' },
              { name: 'Aftenposten', type: 'Media', value: '1.8B', color: 'from-blue-400 to-blue-500' },
              { name: 'FINN.no', type: 'Marketplace', value: '4.2B', color: 'from-cyan-400 to-cyan-500' },
            ].map((child, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-px h-3 bg-gray-300" />
                <div className={`px-3 py-2 rounded-lg bg-gradient-to-r ${child.color} text-white shadow-md`}>
                  <p className="text-xs font-medium">{child.name}</p>
                  <p className="text-[10px] opacity-80">{child.type} • {child.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Sub-children under FINN */}
          <div className="flex gap-4 mt-3 ml-32">
            <div className="w-px h-3 bg-gray-200" />
            <div className="flex gap-3">
              {['Bil', 'Eiendom', 'Torget'].map((sub, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-px h-2 bg-gray-200" />
                  <div className="px-2 py-1 rounded bg-gray-100 border border-gray-200">
                    <p className="text-[10px] text-gray-600">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer with data source */}
      <div className="px-4 py-2 border-t border-gray-100 bg-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-400" />
          <span className="text-xs text-gray-500">Kilde: Brønnøysundregistrene, Oslo Børs</span>
        </div>
        <span className="text-xs text-gray-400">Oppdatert: 09.12.2025</span>
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

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function RefreshIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  )
}

function DownloadIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  )
}

function FilterTag({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div className={`px-2 py-1 rounded-lg text-xs flex items-center gap-1 ${active ? 'bg-[#5EC4E8]/10 text-[#5EC4E8] border border-[#5EC4E8]/30' : 'bg-gray-100 text-gray-500'}`}>
      {label}
      {active && <span className="text-[10px]">×</span>}
    </div>
  )
}
