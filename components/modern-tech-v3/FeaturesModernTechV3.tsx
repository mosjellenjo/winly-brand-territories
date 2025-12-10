interface Feature {
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    title: "Søk & segmentering",
    description:
      "Filtrer på bransje, geografi, størrelse, ansatte, økonomi, eierskap, historikk og mer.",
  },
  {
    title: "Organisasjonsprofiler",
    description:
      "Se roller, eierskap, historikk, nøkkeltall og anbudsaktivitet i én strukturert visning.",
  },
  {
    title: "Rolle- og kontaktinformasjon",
    description:
      "Der data finnes: identifiser beslutningstakere og nøkkelroller.",
  },
  {
    title: "Lister & eksport",
    description:
      "Bygg og del lister internt – og eksporter dem til CSV ved behov.",
  },
];

export function FeaturesModernTechV3() {
  return (
    <section className="relative border-y border-slate-800/50 bg-[#080A0E] py-24 md:py-28">
      {/* Subtle gradient dividers */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B875FF]/15 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#4DF3FF]/15 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold text-[#F5F7FA] md:text-4xl">
          Moderne funksjonalitet. Én struktur.
        </h2>

        {/* Features grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-xl border border-slate-800 bg-[#05070A] p-8 transition-all hover:border-slate-700"
            >
              {/* Corner neon dot – larger with glow */}
              <div
                className={`absolute right-6 top-6 h-2.5 w-2.5 rounded-full shadow-lg ${
                  index % 2 === 0
                    ? "bg-[#4DF3FF] shadow-[#4DF3FF]/50"
                    : "bg-[#B875FF] shadow-[#B875FF]/50"
                }`}
              />

              {/* Left border accent on hover */}
              <div
                className={`absolute inset-y-0 left-0 w-[2px] opacity-0 transition-opacity group-hover:opacity-100 ${
                  index % 2 === 0
                    ? "bg-gradient-to-b from-[#4DF3FF]/60 via-[#4DF3FF]/30 to-transparent"
                    : "bg-gradient-to-b from-[#B875FF]/60 via-[#B875FF]/30 to-transparent"
                }`}
              />

              {/* Content */}
              <div className="relative">
                {/* Module number */}
                <div className="mb-5 inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-slate-900/60 font-mono text-xs text-slate-500">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#F5F7FA]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-4 max-w-md leading-relaxed text-slate-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
