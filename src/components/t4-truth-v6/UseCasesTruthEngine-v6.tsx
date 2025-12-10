'use client'

import { useState } from 'react'

interface UseCase {
  id: string
  title: string
  icon: React.ReactNode
  items: string[]
}

const useCases: UseCase[] = [
  {
    id: 'sales',
    title: 'Salg',
    icon: <SalesIcon />,
    items: [
      'Finn riktige selskaper basert på bransje, størrelse og eierskap',
      'Se hvem som sitter i nøkkelroller før du tar kontakt',
      'Prioriter basert på faktiske forhold, ikke magefølelse',
      'Eksporter lister direkte til CRM',
      'Hold styr på prospektlister med automatiske oppdateringer',
    ],
  },
  {
    id: 'marketing',
    title: 'Marked',
    icon: <MarketingIcon />,
    items: [
      'Bygg segmenter og målgrupper på strukturerte data',
      'Forstå markedsstørrelse og potensial i ulike bransjer',
      'Del innsikt med salg i samme plattform',
      'Lag ABM-kampanjer basert på reelle selskapsdata',
      'Mål kampanjeeffekt mot faktisk markedspenetrasjon',
    ],
  },
  {
    id: 'analysts',
    title: 'Analytikere',
    icon: <AnalyticsIcon />,
    items: [
      'Bruk en strukturert datamodell som grunnlag for analyser',
      'Forstå eierstrukturer og konsernkoblinger',
      'Eksporter data til egne rapporter og presentasjoner',
      'Få oversikt over markedstrender og utviklingstrekk',
      'Dokumenter kilder og metodikk for analyser',
    ],
  },
]

export function UseCasesTruthEngineV6() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // When nothing is hovered, show the first card expanded
  const activeIndex = hoveredIndex !== null ? hoveredIndex : 0

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
          <div className="relative flex gap-4 h-[480px]">
            {useCases.map((useCase, index) => {
              const isActive = activeIndex === index
              const isLeftOfActive = index < activeIndex
              const isRightOfActive = index > activeIndex

              return (
                <div
                  key={useCase.id}
                  className="relative transition-all duration-500 ease-out cursor-pointer overflow-hidden"
                  style={{
                    width: isActive ? '60%' : '20%',
                    transform: isActive
                      ? 'scale(1)'
                      : isLeftOfActive
                      ? 'perspective(1000px) rotateY(5deg)'
                      : 'perspective(1000px) rotateY(-5deg)',
                    transformOrigin: isLeftOfActive ? 'right center' : 'left center',
                    zIndex: isActive ? 10 : 5 - Math.abs(index - activeIndex),
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Card with light background like Devin */}
                  <div
                    className="h-full rounded-2xl p-10 lg:p-14 transition-all duration-500"
                    style={{
                      backgroundColor: isActive ? '#E4ECF4' : '#D8E4F0',
                      borderRadius: '8px',
                    }}
                  >
                    {/* Collapsed view (when not active) */}
                    {!isActive && (
                      <div className="h-full flex flex-col items-center justify-center">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#446DCD] via-[#4BB6D3] to-[#6EF2CC] flex items-center justify-center text-white mb-4">
                          {useCase.icon}
                        </div>
                        <h3
                          className="text-lg font-medium text-[#121111] text-center"
                          style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
                        >
                          {useCase.title}
                        </h3>
                      </div>
                    )}

                    {/* Expanded view (when active) */}
                    {isActive && (
                      <div className="h-full flex flex-col">
                        {/* Card header */}
                        <div className="flex items-center gap-4 mb-8">
                          <h3 className="text-2xl font-medium text-[#121111]">
                            {useCase.title}
                          </h3>
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#446DCD] via-[#4BB6D3] to-[#6EF2CC] flex items-center justify-center text-white">
                            {useCase.icon}
                          </div>
                        </div>

                        {/* Items list */}
                        <ul className="space-y-4 flex-1">
                          {useCase.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3">
                              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#4BB6D3] flex-shrink-0" />
                              <span className="text-base text-[#121111]/80 leading-relaxed">
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* Card CTA */}
                        <div className="mt-8">
                          <a
                            href="#"
                            className="inline-flex items-center gap-2 text-[#446DCD] hover:text-[#4BB6D3] transition-colors font-medium"
                          >
                            Les mer om {useCase.title.toLowerCase()}
                            <ArrowRightIcon className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Pagination dots */}
          <div className="mt-8 flex justify-center gap-2">
            {useCases.map((useCase, index) => (
              <button
                key={useCase.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`h-1 rounded-full transition-all ${
                  activeIndex === index
                    ? 'w-6 bg-[#446DCD]'
                    : 'w-1 bg-[#446DCD]/30 hover:bg-[#446DCD]/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Icons
function SalesIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  )
}

function MarketingIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
    </svg>
  )
}

function AnalyticsIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  )
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  )
}
