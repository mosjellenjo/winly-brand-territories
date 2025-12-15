'use client'

export function DataTransparencyCloud2V1() {
  const notItems = [
    {
      icon: <CatalogIcon className="w-8 h-8" />,
      title: 'Ikke en katalog',
      description: 'Vi serverer ikke «generisk innsikt» fra globale AI-modeller',
    },
    {
      icon: <ChatbotIcon className="w-8 h-8" />,
      title: 'Ikke en AI-chatbot',
      description: 'Vi viser ikke utdaterte rapporter eller statiske PDF-er',
    },
    {
      icon: <DiceIcon className="w-8 h-8" />,
      title: 'Ikke gjetning',
      description: 'Vi gjetter ikke – vi bygger på konkret, verifiserbar data',
    },
  ]

  return (
    <section className="relative bg-slate-50 py-24">
      <div style={{ padding: '0 70px' }}>
        <div className="mx-auto" style={{ maxWidth: 'calc(100% - 140px)' }}>
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-normal text-slate-800 tracking-tight">
              Hva vi <span className="text-slate-400 line-through">ikke</span> er
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Ikke en katalog. Ikke en AI-chatbot. Ikke gjetning.
            </p>
          </div>

          {/* Not items grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {notItems.map((item, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 border border-slate-200 text-center group hover:border-red-200 transition-colors"
              >
                {/* X mark in corner */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-red-50 text-red-400 flex items-center justify-center">
                  <XIcon className="w-4 h-4" />
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-6 group-hover:bg-red-50 group-hover:text-red-400 transition-colors">
                  {item.icon}
                </div>

                <h3 className="text-xl font-semibold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-500">{item.description}</p>
              </div>
            ))}
          </div>

          {/* What we ARE - trust statement */}
          <div className="relative bg-gradient-to-br from-[#3B82F6]/5 to-white rounded-2xl p-8 md:p-12 border border-[#3B82F6]/20">
            {/* Checkmark badge */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#3B82F6] text-white flex items-center justify-center shadow-lg">
              <CheckIcon className="w-6 h-6" />
            </div>

            <div className="text-center mt-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-4">
                Du får varsler du kan stole på
              </h3>
              <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                Ikke buzzwords. Bare konkrete prediksjoner basert på ekte data fra norske kilder.
              </p>

              {/* Trust indicators */}
              <div className="mt-8 flex flex-wrap justify-center gap-6">
                <TrustBadge icon={<ShieldIcon className="w-5 h-5" />} text="Verifiserbare data" />
                <TrustBadge icon={<NorwayIcon className="w-5 h-5" />} text="Norske kilder" />
                <TrustBadge icon={<TransparencyIcon className="w-5 h-5" />} text="Full transparens" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrustBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm">
      <span className="text-[#3B82F6]">{icon}</span>
      <span className="text-sm font-medium text-slate-700">{text}</span>
    </div>
  )
}

function CatalogIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  )
}

function ChatbotIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  )
}

function DiceIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
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

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  )
}

function NorwayIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
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
