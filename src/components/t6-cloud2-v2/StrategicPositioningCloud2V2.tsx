'use client'

export function StrategicPositioningCloud2V2() {
  const strategicPoints = [
    {
      title: 'Forsinket innsikt blir strategisk risiko',
      description: 'Når markedssignaler oppdages for sent, er mulighetene ofte allerede tatt.',
    },
    {
      title: 'Fragmenterte kilder gir fragmenterte beslutninger',
      description: 'Når data ligger spredt i silo-verktøy, blir prioriteringer basert på antagelser fremfor helhet.',
    },
    {
      title: 'Konkurransefortrinn flyttes fra fart til forutsigbarhet',
      description: 'Det er ikke lenger nok å jobbe raskt – man må jobbe riktig, tidlig.',
    },
  ]

  return (
    <section className="relative bg-white pt-16 pb-20 border-t border-slate-100">
      {/* Subtle vertical accent line on left */}
      <div
        className="absolute left-0 top-16 bottom-16 w-[3px]"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, #3B82F6 20%, #0EA5E9 50%, #3B82F6 80%, transparent 100%)',
        }}
      />

      <div style={{ padding: '0 70px' }}>
        <div className="mx-auto" style={{ maxWidth: 'calc(100% - 140px)' }}>
          {/* Two-column layout for asymmetric visual weight */}
          <div className="grid grid-cols-12 gap-16">
            {/* Left column - Title and introduction */}
            <div className="col-span-5">
              <h2 className="text-[32px] sm:text-[38px] font-semibold text-slate-900 tracking-tight leading-[1.15] mb-6">
                Helhetlig innsikt er nå et konkurransekrav
              </h2>

              {/* Gradient horizontal rule as a visual break */}
              <div
                className="w-28 h-[2px] mb-6"
                style={{
                  background: 'linear-gradient(90deg, #3B82F6 0%, #0EA5E9 100%)',
                }}
              />

              <div className="space-y-4">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Norske B2B-selskaper går inn i en periode med økende konkurranse, teknologisk press og mindre rom for feilprioriteringer.
                </p>
                <p className="text-base text-slate-500 leading-relaxed">
                  I et slikt marked holder det ikke lenger å reagere på det som allerede har skjedd. De som vinner, er de som ser endringer tidlig – og handler før konsekvensene blir åpenbare.
                </p>
              </div>
            </div>

            {/* Right column - Strategic points */}
            <div className="col-span-7 pt-1">
              {/* Points with numbered indicators */}
              <div className="space-y-0">
                {strategicPoints.map((point, index) => (
                  <div
                    key={index}
                    className="relative py-5 border-b border-slate-100 last:border-b-0"
                    style={{
                      paddingLeft: index === 1 ? '8px' : index === 2 ? '4px' : '0',
                    }}
                  >
                    {/* Number indicator - smaller, integrated */}
                    <div className="flex items-start gap-4">
                      <span
                        className="text-[15px] font-medium tabular-nums mt-[3px] bg-clip-text text-transparent flex-shrink-0"
                        style={{
                          backgroundImage: 'linear-gradient(135deg, #3B82F6 0%, #0EA5E9 100%)',
                          opacity: 0.8,
                        }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <div>
                        <h3 className="text-[17px] font-semibold text-slate-800 mb-1 tracking-tight leading-snug">
                          {point.title}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Closing statement - strategic conclusion */}
          <div className="mt-14 pt-10 border-t border-slate-200">
            <p className="text-[22px] text-slate-900 font-semibold leading-snug max-w-3xl">
              Winly er bygget for denne overgangen:{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #3B82F6 0%, #0EA5E9 100%)',
                }}
              >
                fra etterpåklokskap til forutsigbarhet
              </span>
              {' '}i norske markeder.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
