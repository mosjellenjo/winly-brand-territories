export function SocialProofModernTech() {
  return (
    <section className="border-y border-slate-800/50 bg-[#0B0F14] px-6 py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="text-center text-xl font-semibold text-[#F5F7FA] md:text-2xl">
          Brukt av moderne norske B2B-organisasjoner
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mt-4 max-w-2xl text-center text-[#94A3B8]">
          Fra voksende SaaS-selskaper til etablerte konsulentmiljøer – Winly gir
          team ett felles faktagrunnlag som holder.
        </p>

        {/* Logo placeholder row */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex h-10 w-24 items-center justify-center rounded border border-slate-800 bg-slate-900/40 text-xs text-slate-600 md:h-12 md:w-32"
            >
              Logo {i}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
