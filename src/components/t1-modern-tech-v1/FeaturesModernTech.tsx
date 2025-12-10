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

export function FeaturesModernTech() {
  return (
    <section className="border-y border-slate-800/50 bg-[#0B0F14] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="text-center text-3xl font-bold text-[#F5F7FA] md:text-4xl">
          Moderne funksjonalitet. Én struktur.
        </h2>

        {/* Features grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-xl border border-slate-800 bg-[#05070A] p-8 transition-all hover:border-slate-700"
            >
              {/* Corner accent */}
              <div
                className={`absolute right-6 top-6 h-2 w-2 rounded-full ${
                  index % 2 === 0 ? "bg-[#4DF3FF]" : "bg-[#B875FF]"
                } shadow-lg ${
                  index % 2 === 0
                    ? "shadow-[#4DF3FF]/50"
                    : "shadow-[#B875FF]/50"
                }`}
              />

              {/* Module number */}
              <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-slate-900/50 text-sm font-mono text-[#94A3B8]">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-[#F5F7FA]">
                {feature.title}
              </h3>
              <p className="mt-3 leading-relaxed text-[#94A3B8]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
