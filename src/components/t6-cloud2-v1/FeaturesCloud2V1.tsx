'use client'

export function FeaturesCloud2V1() {
  const features = [
    {
      title: 'Åpne kilder',
      description: 'Alle datakilder er åpne og dokumenterte. Du vet alltid hvor informasjonen kommer fra.',
      icon: <OpenSourceIcon />,
    },
    {
      title: 'Norsk spesialtrening',
      description: 'Prediksjonsmodellen er spesialtrent på norsk anbuds- og bedriftsdata.',
      icon: <NorwayModelIcon />,
    },
    {
      title: 'Ingen sort boks',
      description: 'Du kan se hvorfor en prediksjon ble gjort – full transparens i vurderingene.',
      icon: <TransparencyIcon />,
    },
    {
      title: 'Sanntidsdata',
      description: 'Kontinuerlig oppdatering fra alle kilder sikrer at du alltid har ferske data.',
      icon: <RealtimeIcon />,
    },
  ]

  return (
    <section className="relative bg-white py-24 border-t border-slate-100">
      <div style={{ padding: '0 70px' }}>
        <div className="mx-auto" style={{ maxWidth: 'calc(100% - 140px)' }}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-800 tracking-tight">
              Vår teknologi og{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(90deg, rgb(59, 130, 246), rgb(14, 165, 233), rgb(6, 182, 212))',
                }}
              >
                data
              </span>
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Basert på sanntid, spesialtrening og full transparens
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative rounded-xl border border-slate-200 bg-slate-50/50 p-6 transition-all duration-300 hover:border-[#3B82F6]/30 hover:bg-white hover:shadow-lg"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#3B82F6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#3B82F6]/10 via-[#0EA5E9]/10 to-[#06B6D4]/10 border border-[#3B82F6]/20">
                    <div className="text-[#3B82F6]">{feature.icon}</div>
                  </div>

                  <h3 className="text-lg font-medium text-slate-800 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Data pipeline visualization */}
          <div className="mt-16 bg-slate-50 rounded-2xl p-8 md:p-12 border border-slate-200">
            <h3 className="text-xl font-semibold text-slate-800 text-center mb-8">
              Slik fungerer datapipeline
            </h3>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
              <PipelineStep
                icon={<DatabaseIcon className="w-8 h-8" />}
                title="Datakilder"
                description="Brreg, Doffin, årsregnskaper, nyheter"
                color="blue"
              />

              <PipelineArrow />

              <PipelineStep
                icon={<ProcessingIcon className="w-8 h-8" />}
                title="Prediksjon"
                description="AI-modell trent på norske data"
                color="orange"
              />

              <PipelineArrow />

              <PipelineStep
                icon={<MapIcon className="w-8 h-8" />}
                title="Visualisering"
                description="Værkart med muligheter"
                color="blue"
              />
            </div>

            <p className="mt-8 text-center text-sm text-slate-400">
              Datapipeline → Prediksjon → Visualisering
            </p>
          </div>
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
  const bgColor = color === 'orange' ? 'bg-[#F97316]/10' : 'bg-[#3B82F6]/10'
  const textColor = color === 'orange' ? 'text-[#F97316]' : 'text-[#3B82F6]'

  return (
    <div className="flex flex-col items-center text-center max-w-[200px]">
      <div className={`w-20 h-20 rounded-2xl ${bgColor} ${textColor} flex items-center justify-center mb-4`}>
        {icon}
      </div>
      <h4 className="font-semibold text-slate-800 mb-1">{title}</h4>
      <p className="text-sm text-slate-500">{description}</p>
    </div>
  )
}

function PipelineArrow() {
  return (
    <div className="hidden md:flex items-center justify-center w-16">
      <svg className="w-8 h-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </div>
  )
}

function OpenSourceIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
  )
}

function NorwayModelIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
    </svg>
  )
}

function TransparencyIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function RealtimeIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
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
