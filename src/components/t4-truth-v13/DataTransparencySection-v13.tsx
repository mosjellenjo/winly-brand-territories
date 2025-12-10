'use client'

export function DataTransparencySectionV13() {
  const trustPoints = [
    {
      title: 'Dokumenterte kilder og metodikk',
      description: 'Alle datapunkter har tydelige kilder og beskrivelser av hvordan de er samlet inn.',
      icon: <DocumentIcon />,
    },
    {
      title: 'Oversikt over oppdateringsfrekvens',
      description: 'Se når data sist ble oppdatert og hvor ofte de refreshes.',
      icon: <RefreshIcon />,
    },
    {
      title: 'Tydelig informasjon der data mangler',
      description: 'Vi viser deg når data ikke er tilgjengelig eller begrenset.',
      icon: <InfoIcon />,
    },
    {
      title: 'Personvern og sikkerhet',
      description: 'Moderne sikkerhetsrutiner og GDPR-compliance ivaretatt.',
      icon: <ShieldIcon />,
    },
  ]

  return (
    <section className="relative bg-[#10131C] py-24">
      <div style={{ padding: '0 70px' }}>
        <div className="mx-auto" style={{ maxWidth: 'calc(100% - 140px)' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-normal text-[#F2F5FA] tracking-tight mb-6">
                Bygget for{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, rgb(68, 109, 205), rgb(75, 182, 211), rgb(110, 242, 204))',
                  }}
                >
                  ansvarlig
                </span>{' '}
                bruk av data
              </h2>

              <p className="text-lg text-[#BAD7F5]/60 leading-relaxed mb-10">
                Winly er bygget med tydelig fokus på kvalitet, transparens og ansvarlighet.
                Datapunkter har dokumenterte kilder, definisjoner og oppdateringslogikk.
              </p>

              <div className="space-y-6">
                {trustPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#446DCD]/20 via-[#4BB6D3]/20 to-[#6EF2CC]/20 border border-[#4BB6D3]/20">
                      <div className="text-[#4BB6D3]">{point.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-[#F2F5FA] mb-1">{point.title}</h3>
                      <p className="text-sm text-[#BAD7F5]/50">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-8 bg-gradient-to-r from-[#446DCD]/10 via-[#4BB6D3]/10 to-[#6EF2CC]/10 rounded-3xl blur-2xl opacity-50" />

              <div className="relative rounded-xl border border-white/10 bg-[#0F1219] overflow-hidden p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#BAD7F5]/50">Datakilde</span>
                    <span className="text-[#4BB6D3]">Brønnøysundregistrene</span>
                  </div>

                  <div className="h-px bg-white/10" />

                  <div className="space-y-3">
                    <DataRow label="Organisasjonsnummer" value="912 345 678" verified />
                    <DataRow label="Navn" value="Acme Tech AS" verified />
                    <DataRow label="Registreringsdato" value="15.03.2018" verified />
                    <DataRow label="Sist oppdatert" value="2 dager siden" />
                  </div>

                  <div className="h-px bg-white/10" />

                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#6EF2CC]" />
                    <span className="text-xs text-[#6EF2CC]">Verifisert kilde</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DataRow({ label, value, verified = false }: { label: string; value: string; verified?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-[#BAD7F5]/50">{label}</span>
      <div className="flex items-center gap-2">
        <span className="text-sm text-[#F2F5FA]">{value}</span>
        {verified && (
          <svg className="w-4 h-4 text-[#6EF2CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )}
      </div>
    </div>
  )
}

function DocumentIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  )
}

function RefreshIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  )
}

function InfoIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  )
}
