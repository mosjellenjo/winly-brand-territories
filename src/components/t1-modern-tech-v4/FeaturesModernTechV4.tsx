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

export function FeaturesModernTechV4() {
  return (
    <section className="relative border-y border-slate-800/60 bg-[#070910] py-28 md:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#B875FF]/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#4DF3FF]/25 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold text-[#F5F7FA] md:text-4xl lg:text-[2.75rem]">
          Funksjonalitet som gir bedre beslutninger
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-[#050709] p-8 transition-all hover:border-slate-700 md:p-10"
            >
              <div
                className={`absolute right-8 top-8 h-3 w-3 rounded-full shadow-lg ${
                  index % 2 === 0
                    ? "bg-[#4DF3FF] shadow-[#4DF3FF]/60"
                    : "bg-[#B875FF] shadow-[#B875FF]/60"
                }`}
              />

              <div
                className={`absolute inset-y-0 left-0 w-[3px] opacity-0 transition-opacity group-hover:opacity-100 ${
                  index % 2 === 0
                    ? "bg-gradient-to-b from-[#4DF3FF]/70 via-[#4DF3FF]/40 to-transparent"
                    : "bg-gradient-to-b from-[#B875FF]/70 via-[#B875FF]/40 to-transparent"
                }`}
              />

              <div className="relative">
                <div className="mb-6 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/70 font-mono text-xs text-slate-500">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-xl font-semibold text-[#F5F7FA]">
                  {feature.title}
                </h3>

                <p className="mt-4 max-w-md text-base leading-relaxed text-slate-400">
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
