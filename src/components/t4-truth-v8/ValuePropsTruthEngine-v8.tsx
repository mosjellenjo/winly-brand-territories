'use client'

export function ValuePropsTruthEngineV8() {
  const valueProps = [
    {
      stat: '2M+',
      label: 'Norske selskaper',
      description: 'Komplett oversikt over det norske næringslivet med oppdatert informasjon.',
    },
    {
      stat: '500K+',
      label: 'Rolleinnehavere',
      description: 'Finn beslutningstakere, styremedlemmer og nøkkelroller.',
    },
    {
      stat: '100%',
      label: 'Offentlige kilder',
      description: 'Data hentet fra dokumenterte, transparente kilder.',
    },
  ]

  return (
    <section className="relative bg-[#10131C] py-24 border-t border-white/[0.06]">
      <div style={{ padding: '0 70px' }}>
        <div className="mx-auto" style={{ maxWidth: 'calc(100% - 140px)' }}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className="relative group rounded-xl border border-white/[0.06] bg-[#0F1219]/50 p-8 transition-all duration-300 hover:border-[#4BB6D3]/30 hover:bg-[#0F1219]"
              >
                <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-[#4BB6D3]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <p
                    className="text-5xl font-light bg-clip-text text-transparent mb-3"
                    style={{
                      backgroundImage: 'linear-gradient(90deg, rgb(68, 109, 205), rgb(75, 182, 211), rgb(110, 242, 204))',
                    }}
                  >
                    {prop.stat}
                  </p>
                  <h3 className="text-xl font-medium text-[#F2F5FA] mb-2">{prop.label}</h3>
                  <p className="text-[#BAD7F5]/60 leading-relaxed">{prop.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
