'use client'

export function HowItWorksSectionV1() {
  const steps = [
    {
      num: 1,
      title: 'Datainnsamling',
      description: 'Vi samler all offentlig, finansiell og kommersiell data i ett økosystem.',
      icon: <DatabaseIcon className="w-8 h-8" />,
    },
    {
      num: 2,
      title: 'Mønstergjenkjenning',
      description:
        'Vi trener modeller til å gjenkjenne mønstre – hva skjer før et stort kjøp? Hvordan ser det ut før et anbud lyses ut?',
      icon: <BrainIcon className="w-8 h-8" />,
    },
    {
      num: 3,
      title: 'Værkart-visualisering',
      description: 'Vi visualiserer det hele som et værkart. Du ser hvor muligheter bygger seg opp, når de mest sannsynlig utlyses, og historisk konkurransebilde.',
      icon: <MapIcon className="w-8 h-8" />,
    },
  ]

  const insights = [
    {
      icon: <LocationIcon className="w-5 h-5" />,
      text: 'Hvor muligheter er i ferd med å bygge seg opp',
    },
    {
      icon: <ClockIcon className="w-5 h-5" />,
      text: 'Når de mest sannsynlig utlyses eller utløses',
    },
    {
      icon: <ChartIcon className="w-5 h-5" />,
      text: 'Hvordan konkurransebildet historisk har vært',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-[var(--cloud-bg)]">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--cloud-text)]">
            Hvordan det fungerer
          </h2>
          <p className="mt-4 text-lg text-[var(--cloud-text-muted)] max-w-2xl mx-auto">
            <span className="text-[var(--cloud-blue)] font-medium">Prediksjon + visualisering</span> = innsikt du kan handle på
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative bg-white rounded-2xl p-8 border border-[var(--cloud-border)] hover:border-[var(--cloud-blue)] hover:shadow-lg transition-all group"
            >
              {/* Step number */}
              <div className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-[var(--cloud-blue)] text-white flex items-center justify-center text-sm font-bold">
                {step.num}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-[var(--cloud-blue-soft)] text-[var(--cloud-blue)] flex items-center justify-center mb-6 group-hover:bg-[var(--cloud-blue)] group-hover:text-white transition-colors">
                {step.icon}
              </div>

              <h3 className="text-xl font-semibold text-[var(--cloud-text)] mb-3">{step.title}</h3>
              <p className="text-[var(--cloud-text-muted)]">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Weather Map Visualization Placeholder */}
        <div className="relative rounded-2xl overflow-hidden border border-[var(--cloud-border)] bg-white">
          <div className="aspect-[16/9] md:aspect-[21/9] bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 relative">
            {/* Norway map outline placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <WeatherMapVisualization />
            </div>

            {/* Insights panel overlay */}
            <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-80">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl p-5 shadow-lg border border-[var(--cloud-border)]">
                <p className="text-sm font-medium text-[var(--cloud-text-muted)] mb-4">Du ser alltid:</p>
                <div className="space-y-3">
                  {insights.map((insight, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--cloud-blue-soft)] text-[var(--cloud-blue)] flex items-center justify-center">
                        {insight.icon}
                      </div>
                      <p className="text-sm text-[var(--cloud-text)] pt-1">{insight.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <p className="text-center py-4 text-sm text-[var(--cloud-text-muted)] bg-white">
            Interaktivt værkart over Norge med datapunkter og «nedbørsintensitet» knyttet til bransjeaktivitet
          </p>
        </div>
      </div>
    </section>
  )
}

function WeatherMapVisualization() {
  return (
    <div className="relative w-full max-w-2xl h-full flex items-center justify-center p-8">
      {/* Simplified Norway silhouette */}
      <svg viewBox="0 0 300 400" className="w-full h-full max-h-[400px] opacity-20" fill="currentColor">
        <path
          d="M150,20 L180,40 L200,80 L210,130 L220,180 L215,230 L225,280 L210,330 L180,370 L150,390 L120,370 L90,330 L80,280 L90,230 L85,180 L95,130 L110,80 L130,40 Z"
          className="text-[var(--cloud-blue)]"
        />
      </svg>

      {/* Data intensity regions */}
      <div className="absolute top-1/4 left-1/3 w-24 h-24 rounded-full bg-[var(--cloud-orange)]/20 animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-16 h-16 rounded-full bg-[var(--cloud-blue)]/30 animate-pulse" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-20 h-20 rounded-full bg-[var(--cloud-orange)]/25 animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Data point markers */}
      <div className="absolute top-1/4 left-1/3 translate-x-8 translate-y-8">
        <div className="w-4 h-4 rounded-full bg-[var(--cloud-orange)] shadow-lg animate-bounce" />
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded text-xs text-[var(--cloud-text)] shadow whitespace-nowrap">
          Oslo: 45 muligheter
        </div>
      </div>
      <div className="absolute top-1/3 right-1/3 translate-x-4">
        <div className="w-3 h-3 rounded-full bg-[var(--cloud-blue)] shadow-lg animate-bounce" style={{ animationDelay: '0.3s' }} />
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded text-xs text-[var(--cloud-text)] shadow whitespace-nowrap">
          Bergen: 28 muligheter
        </div>
      </div>
      <div className="absolute bottom-1/3 left-1/4 translate-y-4">
        <div className="w-3 h-3 rounded-full bg-[var(--cloud-orange)] shadow-lg animate-bounce" style={{ animationDelay: '0.6s' }} />
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded text-xs text-[var(--cloud-text)] shadow whitespace-nowrap">
          Stavanger: 19 muligheter
        </div>
      </div>

      {/* Rain/data drops animation indicator */}
      <div className="absolute top-8 right-8 flex items-center gap-2 bg-white/90 px-3 py-2 rounded-lg shadow">
        <RainIcon className="w-5 h-5 text-[var(--cloud-blue)]" />
        <span className="text-xs text-[var(--cloud-text)]">Høy aktivitet</span>
      </div>
    </div>
  )
}

function DatabaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  )
}

function BrainIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  )
}

function MapIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
    </svg>
  )
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  )
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function ChartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
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
