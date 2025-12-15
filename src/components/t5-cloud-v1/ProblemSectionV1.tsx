'use client'

export function ProblemSectionV1() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--cloud-text)] leading-tight">
              Norsk næringsliv er fullt av skjulte muligheter –{' '}
              <span className="text-[var(--cloud-blue)]">men de kommer uten forvarsel</span>
            </h2>

            <div className="mt-8 space-y-6">
              <StatItem
                value="800+"
                unit="mrd"
                description="Offentlige anbud er verdt over 800 milliarder kroner årlig"
              />
              <StatItem
                value="4,3"
                unit="snitt"
                description="Det er i snitt kun 4,3 tilbydere per anbud. Hvorfor så få?"
              />
              <StatItem
                value="?"
                unit=""
                description="Fordi ingen vet hvor og når neste mulighet kommer"
              />
            </div>

            <blockquote className="mt-10 pl-6 border-l-4 border-[var(--cloud-orange)]">
              <p className="text-xl font-medium text-[var(--cloud-text)]">
                Winly varsler det ingen andre gjør.
              </p>
            </blockquote>
          </div>

          {/* Right: Visual placeholder */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              {/* Cloudy to clear visualization */}
              <div className="grid grid-cols-2 gap-4">
                {/* Cloudy side */}
                <div className="aspect-square bg-gradient-to-br from-slate-300 via-slate-200 to-slate-300 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-60">
                    <CloudyOverlay />
                  </div>
                  <div className="relative z-10 text-center p-4">
                    <CloudIcon className="w-16 h-16 text-slate-500 mx-auto" />
                    <p className="mt-3 text-sm font-medium text-slate-600">Uten innsikt</p>
                    <p className="text-xs text-slate-500 mt-1">Uforutsigbart</p>
                  </div>
                </div>

                {/* Clear side */}
                <div className="aspect-square bg-gradient-to-br from-blue-50 via-amber-50 to-orange-50 rounded-xl flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <SunIcon className="w-10 h-10 text-[var(--cloud-orange)]" />
                  </div>
                  <div className="relative z-10 text-center p-4">
                    <InsightIcon className="w-16 h-16 text-[var(--cloud-blue)] mx-auto" />
                    <p className="mt-3 text-sm font-medium text-[var(--cloud-text)]">Med Winly</p>
                    <p className="text-xs text-[var(--cloud-text-muted)] mt-1">Forutsigbart</p>
                  </div>
                </div>
              </div>

              {/* Arrow indicating transformation */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <ArrowRightIcon className="w-6 h-6 text-[var(--cloud-blue)]" />
                </div>
              </div>
            </div>

            <p className="mt-4 text-center text-sm text-[var(--cloud-text-muted)]">
              En helt overskyet himmel vs. en sky som åpner seg og gir innsikt
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatItem({ value, unit, description }: { value: string; unit: string; description: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-20 text-right">
        <span className="text-3xl font-bold text-[var(--cloud-blue)]">{value}</span>
        {unit && <span className="text-lg text-[var(--cloud-text-muted)] ml-1">{unit}</span>}
      </div>
      <p className="text-[var(--cloud-text-muted)] pt-1">{description}</p>
    </div>
  )
}

function CloudyOverlay() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
      <defs>
        <filter id="cloud-blur">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>
      <circle cx="20" cy="30" r="20" fill="rgba(148,163,184,0.4)" filter="url(#cloud-blur)" />
      <circle cx="50" cy="25" r="25" fill="rgba(148,163,184,0.5)" filter="url(#cloud-blur)" />
      <circle cx="80" cy="35" r="18" fill="rgba(148,163,184,0.4)" filter="url(#cloud-blur)" />
      <circle cx="35" cy="60" r="22" fill="rgba(148,163,184,0.35)" filter="url(#cloud-blur)" />
      <circle cx="70" cy="70" r="20" fill="rgba(148,163,184,0.4)" filter="url(#cloud-blur)" />
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

function SunIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-10.96c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36c.39-.39.39-1.03 0-1.41-.39-.39-1.03-.39-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z" />
    </svg>
  )
}

function InsightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
    </svg>
  )
}
