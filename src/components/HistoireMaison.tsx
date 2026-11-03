import Reveal from "./Reveal";

const MILESTONES = [
  {
    year: "1937",
    place: "Verdun · Fondation",
    title: "Naissance de la Droguerie Humbert",
    description:
      "Création de la première droguerie familiale à Verdun. Dès l’origine, la maison se distingue par la qualité de ses matières premières, de ses cires et de sa brosserie.",
  },
  {
    year: "1987",
    place: "Transmission familiale",
    title: "L’alliance Humbert-Buquet",
    description:
      "Noëlle Humbert et Alain Buquet reprennent le flambeau familial. L’enseigne devient la Droguerie Humbert-Buquet et enrichit son catalogue de soins techniques pour le bois et le cuir.",
  },
  {
    year: "1998",
    place: "Metz · 33 En Fournirue",
    title: "L’ancrage au cœur historique de Metz",
    description:
      "Ouverture de la boutique messine au 33 rue En Fournirue, axe commerçant historique reliant la Cathédrale Saint-Étienne à la Place Saint-Jacques depuis l’époque gallo-romaine.",
  },
  {
    year: "Aujourd’hui",
    place: "3e génération · Metz",
    title: "Romain & Gaëlle Buquet",
    description:
      "La troisième génération perpétue l’art du conseil au comptoir avec plus de 5 600 références : 72 teintes de cirage, coutellerie d’art, produits écologiques et Maison Berger.",
  },
] as const;

export default function HistoireMaison() {
  return (
    <section
      id="histoire"
      aria-labelledby="histoire-heading"
      className="py-20 sm:py-28 lg:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#1D1D1F]/[0.06]"
    >
      <Reveal className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#4A3326] mb-3">
          Patrimoine & Transmission
        </p>
        <h2
          id="histoire-heading"
          className="text-2xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] text-[#1D1D1F] leading-[1.12] mb-4"
        >
          Près de 90 ans d’histoire familiale, de 1937 au cœur de Metz.
        </h2>
        <p className="text-[15px] sm:text-lg text-[#6E6E73] leading-relaxed">
          Alors que les drogueries traditionnelles disparaissaient des centres-villes, la famille Humbert-Buquet a su préserver et moderniser un métier précieux : celui de prescrire le bon produit pour sauver, rénover et embellir vos objets du quotidien.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {MILESTONES.map((m, idx) => (
          <Reveal key={m.year} delayMs={idx * 70} className="h-full">
            <div className="h-full rounded-3xl bg-white border border-[#1D1D1F]/[0.07] p-6 sm:p-7 shadow-[0_4px_24px_rgba(28,25,23,0.03)] flex flex-col justify-between">
              <div>
                <div className="flex flex-col items-start gap-2 mb-4">
                  <span className="text-[11px] font-medium text-[#7C5836] bg-[#F4F0EA] px-2.5 py-1 rounded-full">
                    {m.place}
                  </span>
                  <span className="text-2xl sm:text-[1.75rem] font-semibold tracking-[-0.03em] text-[#2C1E16]">
                    {m.year}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-[#1D1D1F] tracking-[-0.015em] mb-2">
                  {m.title}
                </h3>
                <p className="text-sm text-[#6E6E73] leading-relaxed">
                  {m.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1D1D1F]/[0.05] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4A3326]" aria-hidden="true" />
                <span className="text-[11px] font-medium text-[#6E6E73]">
                  Étape {idx + 1} sur 4
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
