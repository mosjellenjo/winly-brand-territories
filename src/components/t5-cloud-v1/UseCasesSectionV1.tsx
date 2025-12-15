'use client'

import { useState } from 'react'

export function UseCasesSectionV1() {
  const [activePersona, setActivePersona] = useState(0)

  const personas = [
    {
      id: 'supplier',
      title: 'Leverandører til det offentlige',
      icon: <BuildingIcon className="w-6 h-6" />,
      weatherIcon: <RainIcon className="w-8 h-8" />,
      description: 'Se hvilke kommuner, sektorer eller direktorat som planlegger neste utlysning',
      benefits: [
        'Varsles før konkurrenter om nye anbud',
        'Forstå budsjettmønstre på tvers av kommuner',
        'Se historiske vinnere og markedsandeler',
      ],
      color: 'blue',
    },
    {
      id: 'cfo',
      title: 'CFO og lederteam',
      icon: <ChartBarIcon className="w-6 h-6" />,
      weatherIcon: <SunIcon className="w-8 h-8" />,
      description: 'Forstå hvilke områder som gir mest vekst fremover',
      benefits: [
        'Datadrevne beslutninger om markedsfokus',
        'Identifiser sektorer med høyest vekstpotensial',
        'Planlegg ressursallokering basert på prediksjoner',
      ],
      color: 'orange',
    },
    {
      id: 'sales',
      title: 'Markedsteam og salg',
      icon: <TargetIcon className="w-6 h-6" />,
      weatherIcon: <CloudSunIcon className="w-8 h-8" />,
      description: 'Identifiser når og hvor innsats gir høyest ROI',
      benefits: [
        'Prioriter leads basert på kjøpssignaler',
        'Timing av outreach for maksimal effekt',
        'Fokuser kampanjer der det faktisk skal regne',
      ],
      color: 'blue',
    },
  ]

  const activePersonaData = personas[activePersona]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--cloud-text)]">
            Hva du kan bruke det til
          </h2>
          <p className="mt-4 text-lg text-[var(--cloud-text-muted)] max-w-2xl mx-auto">
            For hvem som helst som selger til bedrifter eller deltar i konkurranser
          </p>
        </div>

        {/* Persona tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {personas.map((persona, index) => (
            <button
              key={persona.id}
              onClick={() => setActivePersona(index)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl border transition-all ${
                activePersona === index
                  ? 'bg-[var(--cloud-blue)] text-white border-[var(--cloud-blue)] shadow-lg'
                  : 'bg-white text-[var(--cloud-text)] border-[var(--cloud-border)] hover:border-[var(--cloud-blue)]'
              }`}
            >
              {persona.icon}
              <span className="font-medium">{persona.title}</span>
            </button>
          ))}
        </div>

        {/* Active persona content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Persona card with weather icon */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[var(--cloud-bg)] to-white rounded-2xl p-8 border border-[var(--cloud-border)]">
              {/* Weather icon */}
              <div
                className={`absolute -top-6 -right-6 w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg ${
                  activePersonaData.color === 'orange'
                    ? 'bg-[var(--cloud-orange-soft)] text-[var(--cloud-orange)]'
                    : 'bg-[var(--cloud-blue-soft)] text-[var(--cloud-blue)]'
                }`}
              >
                {activePersonaData.weatherIcon}
              </div>

              {/* Persona info */}
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg mb-6 ${
                  activePersonaData.color === 'orange'
                    ? 'bg-[var(--cloud-orange-soft)] text-[var(--cloud-orange-deep)]'
                    : 'bg-[var(--cloud-blue-soft)] text-[var(--cloud-blue)]'
                }`}
              >
                {activePersonaData.icon}
                <span className="font-medium">{activePersonaData.title}</span>
              </div>

              <p className="text-xl text-[var(--cloud-text)] mb-8">{activePersonaData.description}</p>

              <div className="space-y-4">
                {activePersonaData.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                        activePersonaData.color === 'orange'
                          ? 'bg-[var(--cloud-orange)] text-white'
                          : 'bg-[var(--cloud-blue)] text-white'
                      }`}
                    >
                      <CheckIcon className="w-4 h-4" />
                    </div>
                    <p className="text-[var(--cloud-text-muted)]">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Placeholder illustration */}
          <div className="relative">
            <PersonaIllustration persona={activePersonaData} />
          </div>
        </div>

        {/* Bottom quote */}
        <blockquote className="mt-16 text-center">
          <p className="text-xl md:text-2xl font-medium text-[var(--cloud-text)] max-w-3xl mx-auto">
            Ikke kast bort tid på tilfeldige kampanjer.{' '}
            <span className="text-[var(--cloud-orange)]">Sikt deg inn der det faktisk skal regne.</span>
          </p>
        </blockquote>
      </div>
    </section>
  )
}

interface PersonaData {
  id: string
  title: string
  color: string
}

function PersonaIllustration({ persona }: { persona: PersonaData }) {
  return (
    <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 flex items-center justify-center">
      <div className="text-center">
        {/* Stylized person icon with weather elements */}
        <div className="relative inline-block">
          <div className="w-24 h-24 rounded-full bg-[var(--cloud-blue-soft)] flex items-center justify-center">
            <UserIcon className="w-12 h-12 text-[var(--cloud-blue)]" />
          </div>

          {/* Weather indicators around the person */}
          <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center">
            {persona.color === 'orange' ? (
              <SunIcon className="w-6 h-6 text-[var(--cloud-orange)]" />
            ) : (
              <CloudIcon className="w-6 h-6 text-[var(--cloud-blue)]" />
            )}
          </div>
          <div className="absolute -bottom-2 -left-4 w-8 h-8 rounded-full bg-white shadow flex items-center justify-center">
            <DropIcon className="w-4 h-4 text-[var(--cloud-orange)]" />
          </div>
        </div>

        <p className="mt-6 text-sm text-[var(--cloud-text-muted)]">
          {persona.id === 'supplier' && 'Leverandør som planlegger neste bud'}
          {persona.id === 'cfo' && 'Leder som analyserer vekstmuligheter'}
          {persona.id === 'sales' && 'Selger som timer outreach perfekt'}
        </p>
      </div>
    </div>
  )
}

function BuildingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  )
}

function ChartBarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>
  )
}

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 12v3m9-9h-3M6 12H3" />
    </svg>
  )
}

function RainIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
    </svg>
  )
}

function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
    </svg>
  )
}

function CloudSunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 0V3m4.5 1.5l-.707.707M19 8h1M4 8h1m.793-2.793L5.5 4.5m12.707 2.707L18.5 4.5" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  )
}

function CloudIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
    </svg>
  )
}

function DropIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  )
}
