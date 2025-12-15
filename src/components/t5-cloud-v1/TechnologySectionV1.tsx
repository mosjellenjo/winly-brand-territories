'use client'

export function TechnologySectionV1() {
  const features = [
    {
      icon: <OpenSourceIcon className="w-6 h-6" />,
      title: 'Åpne kilder',
      description: 'Alle datakilder er åpne og dokumenterte. Du vet alltid hvor informasjonen kommer fra.',
    },
    {
      icon: <NorwayModelIcon className="w-6 h-6" />,
      title: 'Norsk spesialtrening',
      description: 'Prediksjonsmodellen er spesialtrent på norsk anbuds- og bedriftsdata.',
    },
    {
      icon: <TransparencyIcon className="w-6 h-6" />,
      title: 'Ingen sort boks',
      description: 'Du kan se hvorfor en prediksjon ble gjort – full transparens i vurderingene.',
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--cloud-text)]">
            Vår teknologi og data
          </h2>
          <p className="mt-4 text-lg text-[var(--cloud-text-muted)]">
            Basert på sanntid, spesialtrening og full transparens
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[var(--cloud-bg)] rounded-2xl p-8 border border-[var(--cloud-border)] hover:border-[var(--cloud-blue)] hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 rounded-xl bg-[var(--cloud-blue-soft)] text-[var(--cloud-blue)] flex items-center justify-center mb-6 group-hover:bg-[var(--cloud-blue)] group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[var(--cloud-text)] mb-3">{feature.title}</h3>
              <p className="text-[var(--cloud-text-muted)]">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Data pipeline visualization */}
        <div className="bg-[var(--cloud-bg)] rounded-2xl p-8 md:p-12 border border-[var(--cloud-border)]">
          <h3 className="text-xl font-semibold text-[var(--cloud-text)] text-center mb-8">
            Slik fungerer datapipeline
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
            {/* Step 1: Data sources */}
            <PipelineStep
              icon={<DatabaseIcon className="w-8 h-8" />}
              title="Datakilder"
              description="Brreg, Doffin, årsregnskaper, nyheter"
              color="blue"
            />

            <PipelineArrow />

            {/* Step 2: Processing */}
            <PipelineStep
              icon={<ProcessingIcon className="w-8 h-8" />}
              title="Prediksjon"
              description="AI-modell trent på norske data"
              color="orange"
            />

            <PipelineArrow />

            {/* Step 3: Visualization */}
            <PipelineStep
              icon={<MapIcon className="w-8 h-8" />}
              title="Visualisering"
              description="Værkart med muligheter"
              color="blue"
            />
          </div>

          <p className="mt-8 text-center text-sm text-[var(--cloud-text-muted)]">
            Datapipeline → Prediksjon → Visualisering
          </p>
        </div>
      </div>
    </section>
  )
}

interface PipelineStepProps {
  icon: React.ReactNode
  title: string
  description: string
  color: 'blue' | 'orange'
}

function PipelineStep({ icon, title, description, color }: PipelineStepProps) {
  const bgColor = color === 'orange' ? 'bg-[var(--cloud-orange-soft)]' : 'bg-[var(--cloud-blue-soft)]'
  const textColor = color === 'orange' ? 'text-[var(--cloud-orange)]' : 'text-[var(--cloud-blue)]'

  return (
    <div className="flex flex-col items-center text-center max-w-[200px]">
      <div className={`w-20 h-20 rounded-2xl ${bgColor} ${textColor} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h4 className="font-semibold text-[var(--cloud-text)] mb-1">{title}</h4>
      <p className="text-sm text-[var(--cloud-text-muted)]">{description}</p>
    </div>
  )
}

function PipelineArrow() {
  return (
    <div className="hidden md:flex items-center justify-center w-16">
      <svg className="w-8 h-8 text-[var(--cloud-border-strong)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </div>
  )
}

function OpenSourceIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  )
}

function NorwayModelIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  )
}

function TransparencyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function DatabaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  )
}

function ProcessingIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
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
