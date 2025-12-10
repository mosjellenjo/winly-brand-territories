'use client'

export function SocialProofTruthEngineV6() {
  const logos = [
    { name: 'DNB', width: 80 },
    { name: 'Telenor', width: 100 },
    { name: 'Gjensidige', width: 100 },
    { name: 'KPMG', width: 80 },
    { name: 'Deloitte', width: 90 },
    { name: 'PWC', width: 60 },
  ]

  return (
    <section className="relative bg-[#10131C] py-16 border-t border-white/[0.06]">
      <div style={{ padding: '0 70px' }}>
        <div className="mx-auto" style={{ maxWidth: 'calc(100% - 140px)' }}>
          {/* Logos ticker */}
          <div className="flex flex-col items-center">
            <p className="text-sm text-[#BAD7F5]/50 mb-8">
              Brukes av ledende norske B2B-selskaper
            </p>

            <div className="flex items-center justify-center gap-12 flex-wrap">
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center h-8 opacity-40 hover:opacity-70 transition-opacity"
                  style={{ width: logo.width }}
                >
                  <span className="text-[#F2F5FA] text-lg font-medium tracking-wider">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
