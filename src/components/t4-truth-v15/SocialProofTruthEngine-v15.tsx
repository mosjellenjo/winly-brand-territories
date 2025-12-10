'use client'

import { useEffect, useRef } from 'react'

export function SocialProofTruthEngineV15() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Infinite scroll animation - 2x faster
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPos = 0
    const scrollSpeed = 1.0 // Doubled from 0.5 to 1.0

    const animate = () => {
      scrollPos += scrollSpeed
      const halfWidth = scrollContainer.scrollWidth / 2

      if (scrollPos >= halfWidth) {
        scrollPos = 0
      }

      scrollContainer.style.transform = `translateX(-${scrollPos}px)`
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  // Sample customer logos - duplicated for infinite scroll
  const logos = [
    { name: 'DNB', width: 80 },
    { name: 'Telenor', width: 100 },
    { name: 'Equinor', width: 90 },
    { name: 'Vipps', width: 70 },
    { name: 'Schibsted', width: 95 },
    { name: 'Posten', width: 80 },
    { name: 'NRK', width: 60 },
    { name: 'Avinor', width: 85 },
    { name: 'Gjensidige', width: 100 },
    { name: 'SpareBank 1', width: 95 },
  ]

  return (
    <section className="relative bg-[#10131C] py-12 border-t border-white/[0.06] overflow-hidden">
      {/* Just the logos - no header (already stated above), no stats (stated below) */}
      <div className="relative">
        {/* Gradient fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[#10131C] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[#10131C] to-transparent pointer-events-none" />

        {/* Logo container */}
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex items-center gap-16 whitespace-nowrap"
            style={{ width: 'fit-content' }}
          >
            {/* First set of logos */}
            {logos.map((logo, i) => (
              <div
                key={`logo-1-${i}`}
                className="flex items-center justify-center h-12 px-4 opacity-40 hover:opacity-70 transition-opacity"
                style={{ minWidth: logo.width }}
              >
                <span className="text-[#BAD7F5] text-lg font-medium tracking-wide">
                  {logo.name}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, i) => (
              <div
                key={`logo-2-${i}`}
                className="flex items-center justify-center h-12 px-4 opacity-40 hover:opacity-70 transition-opacity"
                style={{ minWidth: logo.width }}
              >
                <span className="text-[#BAD7F5] text-lg font-medium tracking-wide">
                  {logo.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
