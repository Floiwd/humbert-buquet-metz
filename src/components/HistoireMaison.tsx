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
      className="py-20 sm:py-28 lg:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-b transition-colors duration-400"
      style={{ borderColor: "var(--border-color)" }}
    >
      <Reveal className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
        <p
          className="text-xs font-semibold uppercase tracking-[0.08em] mb-3"
          style={{ color: "var(--accent-badge)" }}
        >
          Patrimoine & Transmission
        </p>
        <h2
          id="histoire-heading"
          className="text-2xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.12] mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Près de 90 ans d’histoire familiale, de 1937 au cœur de Metz.
        </h2>
        <p
          className="text-[15px] sm:text-lg leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Alors que les drogueries traditionnelles disparaissaient des centres-villes, la famille Humbert-Buquet a su préserver et moderniser un métier précieux : celui de prescrire le bon produit pour sauver, rénover et embellir vos objets du quotidien.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {MILESTONES.map((m, idx) => (
          <Reveal key={m.year} delayMs={idx * 70} className="h-full">
            <div
              className="theme-card h-full rounded-3xl p-6 sm:p-7 border shadow-xs flex flex-col justify-between transition-all duration-300"
              style={{
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--border-color)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div>
                <div className="flex flex-col items-start gap-2 mb-4">
                  <span
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full border"
                    style={{
                      backgroundColor: "var(--accent-badge-bg)",
                      color: "var(--accent-badge)",
                      borderColor: "var(--border-color)",
                    }}
                  >
                    {m.place}
                  </span>
                  <span
                    className="text-2xl sm:text-[1.75rem] font-bold tracking-[-0.03em]"
                    style={{ color: "var(--accent-primary)" }}
                  >
                    {m.year}
                  </span>
                </div>

                <h3
                  className="text-base sm:text-lg font-semibold tracking-[-0.015em] mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {m.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {m.description}
                </p>
              </div>

              <div
                className="mt-6 pt-4 border-t flex items-center gap-2"
                style={{ borderColor: "var(--border-color)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "var(--accent-badge)" }}
                  aria-hidden="true"
                />
                <span className="text-[11px] font-medium" style={{ color: "var(--text-muted)" }}>
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
