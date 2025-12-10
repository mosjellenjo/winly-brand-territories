'use client'

import { useEffect, useRef } from 'react'

export function HeroTruthEngineV4() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = grid.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      grid.style.setProperty('--mouse-x', `${x}px`)
      grid.style.setProperty('--mouse-y', `${y}px`)
    }

    grid.addEventListener('mousemove', handleMouseMove)
    return () => grid.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen bg-[#0B1120] overflow-hidden">
      {/* Interactive grid background */}
      <div
        ref={gridRef}
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56, 189, 248, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56, 189, 248, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(circle 400px at var(--mouse-x, 50%) var(--mouse-y, 50%), black, transparent)',
          WebkitMaskImage: 'radial-gradient(circle 400px at var(--mouse-x, 50%) var(--mouse-y, 50%), black, transparent)',
        }}
      />

      {/* Diagonal lines overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 1px,
            rgba(56, 189, 248, 1) 1px,
            rgba(56, 189, 248, 1) 2px
          )`,
          backgroundSize: '8px 8px',
        }}
      />

      {/* Gradient orb behind hero */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />

      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0B1120]/80 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <span className="text-xl font-bold text-white">Winly</span>
              <div className="hidden md:flex items-center gap-6">
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Produkter</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Priser</a>
                <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Kunder</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Logg inn</a>
              <a
                href="#"
                className="inline-flex items-center justify-center bg-white px-4 py-2 text-sm font-medium text-[#0B1120] rounded-lg transition-all hover:bg-gray-100"
              >
                Kom i gang
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Text Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                Winly
              </span>
              <span className="text-white">, alt for norsk</span>
              <br />
              <span className="text-white">B2B-data</span>
            </h1>

            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-white px-6 py-3 text-sm font-medium text-[#0B1120] rounded-lg transition-all hover:bg-gray-100 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                Start 14 dagers gratis prøve
              </a>
            </div>

            <p className="mt-8 text-gray-400">
              <span className="text-white font-medium">Finn, forstå og vinn</span> norske B2B-kunder med det mest komplette datagrunnlaget.
            </p>

            {/* Workflow Steps */}
            <div className="mt-10 space-y-1">
              <WorkflowStep
                num={1}
                title="Søk"
                description="Finn selskaper, roller og anbud"
                active
              />
              <WorkflowStep
                num={2}
                title="Analyser"
                description="Se sammenhenger og eierskap"
              />
              <WorkflowStep
                num={3}
                title="Bygg"
                description="Lag målgrupper og segmenter"
              />
              <WorkflowStep
                num={4}
                title="Eksporter"
                description="Ta innsikten videre i dine verktøy"
              />
            </div>
          </div>

          {/* Right: Mock UI Panel */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-sky-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-50" />

            <div className="relative rounded-xl border border-white/10 bg-[#0F172A] overflow-hidden shadow-2xl">
              {/* Panel tabs */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#0B1120]">
                <TabButton icon="📊" label="Data" active />
                <TabButton icon="🔗" label="Relasjoner" />
              </div>

              {/* Panel header */}
              <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-white/60">#</span>
                  <span className="text-white text-sm font-medium">bedriftssøk</span>
                  <ChevronDown />
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    <div className="w-3 h-3 rounded-sm bg-green-400" />
                    <div className="w-3 h-3 rounded-sm bg-yellow-400" />
                  </div>
                  <span className="text-xs text-gray-500">248</span>
                </div>
              </div>

              {/* Chat-like content */}
              <div className="p-4 space-y-4 min-h-[300px]">
                <div className="flex items-center justify-center">
                  <span className="px-3 py-1 text-xs text-gray-500 bg-white/5 rounded-full">I dag</span>
                </div>

                <ChatMessage
                  avatar="M"
                  name="Magnus"
                  time="14:32"
                  message="Kan du finne alle IT-selskaper i Oslo med over 10 ansatte?"
                />

                <ChatMessage
                  avatar="W"
                  name="Winly"
                  time="14:32"
                  message="Fant 847 selskaper som matcher. Se oversikten"
                  isWinly
                  link="her"
                />

                {/* Input field */}
                <div className="mt-6 rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Søk etter selskaper, personer eller anbud...</span>
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 rounded hover:bg-white/10 transition-colors">
                        <PaperclipIcon />
                      </button>
                      <button className="p-1.5 rounded bg-cyan-500 hover:bg-cyan-400 transition-colors">
                        <SendIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom text */}
      <div className="relative z-10 text-center pb-12">
        <p className="text-gray-500 text-sm">
          Brukes av ledende norske B2B-team.{' '}
          <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
            Se hva de har oppnådd.
          </a>
        </p>
      </div>
    </section>
  )
}

function WorkflowStep({ num, title, description, active = false }: {
  num: number
  title: string
  description: string
  active?: boolean
}) {
  return (
    <div className={`flex items-start gap-4 p-3 rounded-lg transition-all ${
      active ? 'bg-white/[0.03] border border-cyan-500/30' : 'hover:bg-white/[0.02]'
    }`}>
      <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-semibold ${
        active
          ? 'bg-gradient-to-br from-cyan-400 to-blue-500 text-white'
          : 'bg-white/10 text-gray-400'
      }`}>
        {num}
      </div>
      <div>
        <p className={`text-sm font-medium ${active ? 'text-white' : 'text-gray-400'}`}>{title}</p>
        <p className="text-xs text-gray-500">{description}</p>
      </div>
    </div>
  )
}

function TabButton({ icon, label, active = false }: { icon: string; label: string; active?: boolean }) {
  return (
    <button className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm transition-all ${
      active
        ? 'bg-white/10 text-white'
        : 'text-gray-400 hover:bg-white/5 hover:text-white'
    }`}>
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  )
}

function ChatMessage({ avatar, name, time, message, isWinly = false, link }: {
  avatar: string
  name: string
  time: string
  message: string
  isWinly?: boolean
  link?: string
}) {
  return (
    <div className="flex items-start gap-3">
      <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-semibold ${
        isWinly
          ? 'bg-gradient-to-br from-cyan-400 to-blue-500 text-white'
          : 'bg-white/10 text-gray-400'
      }`}>
        {avatar}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className={`text-sm font-medium ${isWinly ? 'text-cyan-400' : 'text-white'}`}>{name}</span>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
        <p className="text-sm text-gray-300 mt-0.5">
          {isWinly && <span className="text-cyan-400">@Magnus </span>}
          {message}
          {link && (
            <a href="#" className="text-cyan-400 hover:underline ml-1">{link}</a>
          )}
        </p>
      </div>
    </div>
  )
}

function ChevronDown() {
  return (
    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function PaperclipIcon() {
  return (
    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
    </svg>
  )
}

function SendIcon() {
  return (
    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  )
}
