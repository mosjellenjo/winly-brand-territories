'use client'

export function ValuePropsCloud2V1() {
  const valueProps = [
    {
      stat: '800+',
      unit: 'mrd',
      label: 'Offentlige anbud',
      description: 'Offentlige anbud er verdt over 800 milliarder kroner årlig.',
    },
    {
      stat: '4,3',
      unit: 'snitt',
      label: 'Tilbydere per anbud',
      description: 'Det er i snitt kun 4,3 tilbydere per anbud. Hvorfor så få?',
    },
    {
      stat: '?',
      unit: '',
      label: 'Ingen vet',
      description: 'Fordi ingen vet hvor og når neste mulighet kommer.',
    },
  ]

  return (
    <section className="relative bg-white py-24 border-t border-slate-100">
      <div style={{ padding: '0 70px' }}>
        <div className="mx-auto" style={{ maxWidth: 'calc(100% - 140px)' }}>
          {/* Section header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-800 tracking-tight">
              Norsk næringsliv er fullt av skjulte muligheter –{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(90deg, rgb(59, 130, 246), rgb(14, 165, 233), rgb(6, 182, 212))',
                }}
              >
                men de kommer uten forvarsel
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className="relative group rounded-xl border border-slate-200 bg-slate-50/50 p-8 transition-all duration-300 hover:border-[#3B82F6]/30 hover:bg-white hover:shadow-lg"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#3B82F6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="flex items-baseline gap-1 mb-3">
                    <p
                      className="text-5xl font-light bg-clip-text text-transparent"
                      style={{
                        backgroundImage: 'linear-gradient(90deg, rgb(59, 130, 246), rgb(14, 165, 233), rgb(6, 182, 212))',
                      }}
                    >
                      {prop.stat}
                    </p>
                    {prop.unit && (
                      <span className="text-lg text-slate-400">{prop.unit}</span>
                    )}
                  </div>
                  <h3 className="text-xl font-medium text-slate-800 mb-2">{prop.label}</h3>
                  <p className="text-slate-500 leading-relaxed">{prop.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quote */}
          <blockquote className="mt-12 text-center">
            <div className="inline-block px-8 py-4 rounded-xl border-l-4 border-[#F97316] bg-slate-50">
              <p className="text-xl font-medium text-slate-700">
                Winly varsler det ingen andre gjør.
              </p>
            </div>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
