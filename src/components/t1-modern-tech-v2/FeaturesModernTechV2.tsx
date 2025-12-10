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

export function FeaturesModernTechV2() {
  return (
    <section className="border-y border-slate-800/40 bg-[#0A0D11] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        {/* Title */}
        <h2 className="text-center text-3xl font-semibold text-[#F5F7FA]">
          Moderne funksjonalitet. Én struktur.
        </h2>

        {/* Features grid */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative rounded-lg border border-slate-800/80 bg-[#05070A] p-6 transition-colors hover:border-slate-700"
            >
              {/* Corner dot */}
              <div
                className={`absolute right-5 top-5 h-1.5 w-1.5 rounded-full ${
                  index % 2 === 0 ? "bg-[#4DF3FF]/60" : "bg-[#B875FF]/60"
                }`}
              />

              {/* Module number */}
              <div className="mb-4 inline-flex h-6 w-6 items-center justify-center rounded border border-slate-800 bg-slate-900/50 font-mono text-[10px] text-slate-600">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-[#F5F7FA]">
                {feature.title}
              </h3>
              <p className="mt-3 max-w-md leading-relaxed text-slate-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
