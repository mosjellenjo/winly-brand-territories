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

export function UseCasesTruthEngineV7() {
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

          {/* Use cases cards with book-fold effect */}
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
                  {/* Card with dark blue/green gradient like Devin */}
                  <div
                    className="h-full rounded-xl p-8 transition-all duration-500 overflow-hidden"
                    style={{
                      background: isActive
                        ? 'linear-gradient(135deg, #2B7A8C 0%, #3BA3A3 50%, #4BB6B6 100%)'
                        : 'linear-gradient(135deg, #1E5A6B 0%, #2B7A8C 100%)',
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
                      <div className="h-full flex gap-8">
                        {/* Left side - Content */}
                        <div className="w-1/3 flex flex-col">
                          <h3 className="text-2xl font-medium text-white mb-2">
                            {useCase.title}
                          </h3>
                          <p className="text-white/70 text-sm mb-6">
                            {useCase.subtitle}
                          </p>

                          <ul className="space-y-3 flex-1">
                            {useCase.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3">
                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0" />
                                <span className="text-sm text-white/80 leading-relaxed">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Right side - Preview */}
                        <div className="w-2/3 flex items-center justify-center">
                          <div className="w-full h-full rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
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

// Preview components for each use case
function SalesPreview() {
  return (
    <div className="h-full p-4 flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/20 text-white text-xs">
          <SlackIcon className="w-3 h-3" />
          slack
        </div>
        <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-white/10 text-white/70 text-xs">
          <LinearIcon className="w-3 h-3" />
          Linear
        </div>
      </div>

      {/* List */}
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2 text-white/60 text-xs mb-2">
          <span>Alle oppgaver</span>
          <ChevronDownIcon className="w-3 h-3" />
        </div>

        <div className="flex items-center gap-2 text-white/80 text-xs">
          <div className="w-3 h-3 rounded-full border border-orange-400 flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-400" />
          </div>
          <span>In Progress</span>
          <span className="text-white/40">10</span>
        </div>

        {[
          'Implementer dashboard layout',
          'Fix image rendering bug',
          'Add modal animation',
          'Style tag filters',
          'Migrate user sessions',
        ].map((task, i) => (
          <div key={i} className="flex items-center gap-2 py-1.5 px-2 rounded bg-white/5 text-white/70 text-xs">
            <div className="w-3 h-3 rounded-full border border-white/30" />
            <span className="flex-1 truncate">{task}</span>
            <DevinIcon className="w-3 h-3 text-[#4BB6D3]" />
          </div>
        ))}
      </div>
    </div>
  )
}

function MarketingPreview() {
  return (
    <div className="h-full p-4 flex flex-col">
      {/* Chart visualization */}
      <div className="flex-1 flex flex-col">
        <div className="text-white text-sm font-medium mb-4">Markedssegmentering</div>

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
                    : 'rgba(255,255,255,0.2)',
                }}
              />
              <span className="text-[10px] text-white/40">{['IT', 'Fin', 'Tech', 'Helse', 'Log', 'Bygg', 'SaaS'][i]}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex gap-4 pt-4 border-t border-white/10">
          <div>
            <div className="text-2xl font-medium text-white">2,847</div>
            <div className="text-xs text-white/50">Selskaper i segment</div>
          </div>
          <div>
            <div className="text-2xl font-medium text-[#6EF2CC]">+18%</div>
            <div className="text-xs text-white/50">vs forrige måned</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function AnalystPreview() {
  return (
    <div className="h-full p-4 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-white text-sm font-medium">Konsernstruktur</div>
        <div className="text-xs text-white/50">3 nivåer</div>
      </div>

      {/* Org tree visualization */}
      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        {/* Top level */}
        <div className="px-4 py-2 rounded-lg bg-white/20 border border-white/30 text-white text-sm">
          Holding Group AS
        </div>

        {/* Connector */}
        <div className="w-px h-6 bg-white/30" />

        {/* Middle level */}
        <div className="flex gap-8">
          {['Tech AS', 'Services AS', 'Data AS'].map((name, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="w-px h-4 bg-white/30" />
              <div className={`px-3 py-1.5 rounded-lg text-white text-xs ${
                i === 0 ? 'bg-[#4BB6D3]/40 border border-[#4BB6D3]' : 'bg-white/10 border border-white/20'
              }`}>
                {name}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom level under Tech AS */}
        <div className="flex gap-4 -mt-2 ml-[-100px]">
          <div className="flex flex-col items-center">
            <div className="w-px h-4 bg-white/20" />
            <div className="px-2 py-1 rounded bg-white/5 text-white/60 text-[10px]">
              Dev Team
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-px h-4 bg-white/20" />
            <div className="px-2 py-1 rounded bg-white/5 text-white/60 text-[10px]">
              Sales Team
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 pt-4 border-t border-white/10">
        <div className="w-2 h-2 rounded-full bg-[#6EF2CC]" />
        <span className="text-xs text-white/60">Data fra Brønnøysund</span>
      </div>
    </div>
  )
}

// Icons
function SlackIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor">
      <path d="M3.5 9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4 0a1.5 1.5 0 1 1 0-3H9v1.5A1.5 1.5 0 0 1 7.5 9zM5 10.5A1.5 1.5 0 0 1 6.5 9H8v1.5a1.5 1.5 0 1 1-3 0zm5-1.5a1.5 1.5 0 1 1 0 3h-1.5V9H10zM12.5 7a1.5 1.5 0 1 1 0 3H11V8.5A1.5 1.5 0 0 1 12.5 7zM11 5.5A1.5 1.5 0 0 1 9.5 7H8V5.5a1.5 1.5 0 1 1 3 0zM6.5 7A1.5 1.5 0 1 1 5 5.5V7h1.5zm0-4A1.5 1.5 0 0 1 8 4.5V6H6.5a1.5 1.5 0 0 1 0-3z" />
    </svg>
  )
}

function LinearIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
    </svg>
  )
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function DevinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 0l2 2-2 2-2-2 2-2zm0 12l2 2-2 2-2-2 2-2zm4-4l2-2 2 2-2 2-2-2zm-12 0l2-2 2 2-2 2-2-2z" />
    </svg>
  )
}
