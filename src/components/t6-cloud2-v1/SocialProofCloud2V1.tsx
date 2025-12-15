'use client'

import { useEffect, useRef } from 'react'

export function SocialProofCloud2V1() {
  const scrollRef = useRef<HTMLDivElement>(null)

  // Infinite scroll animation
  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPos = 0
    const scrollSpeed = 1.0

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
    <section className="relative bg-white py-12 border-t border-slate-100 overflow-hidden">
      <div className="relative">
        {/* Gradient fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

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
                className="flex items-center justify-center h-12 px-4 opacity-30 hover:opacity-60 transition-opacity"
                style={{ minWidth: logo.width }}
              >
                <span className="text-slate-500 text-lg font-medium tracking-wide">
                  {logo.name}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, i) => (
              <div
                key={`logo-2-${i}`}
                className="flex items-center justify-center h-12 px-4 opacity-30 hover:opacity-60 transition-opacity"
                style={{ minWidth: logo.width }}
              >
                <span className="text-slate-500 text-lg font-medium tracking-wide">
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
