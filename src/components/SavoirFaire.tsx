import { Sparkles, ShieldCheck, Compass } from "lucide-react";
import Reveal from "./Reveal";

const PILLARS = [
  {
    title: "Produits d’antan",
    description:
      "Cires d’abeille, savons de Marseille au chaudron et brosserie en fibres naturelles sélectionnés pour leur pureté.",
    icon: Sparkles,
  },
  {
    title: "Entretien spécialisé",
    description:
      "Soins haute précision pour nourrir, détacher et protéger vos bois anciens, cuirs, marbres, pierres et métaux.",
    icon: ShieldCheck,
  },
  {
    title: "Conseil expert",
    description:
      "Près d’un siècle de savoir-faire familial transmis à Metz pour vous prescrire le geste juste et durable.",
    icon: Compass,
  },
] as const;

export default function SavoirFaire() {
  return (
    <section
      id="savoir-faire"
      aria-labelledby="savoir-faire-heading"
      className="py-20 sm:py-28 lg:py-32 border-y transition-colors duration-400"
      style={{
        backgroundColor: "var(--bg-subtle)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="max-w-2xl mb-12 sm:mb-16 lg:mb-20">
          <p
            className="text-xs font-semibold uppercase tracking-[0.08em] mb-3"
            style={{ color: "var(--accent-badge)" }}
          >
            Savoir-Faire
          </p>
          <h2
            id="savoir-faire-heading"
            className="text-2xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.12]"
            style={{ color: "var(--text-primary)" }}
          >
            Trois engagements, la même exigence depuis 1937.
          </h2>
        </Reveal>

        {/* Minimalist 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delayMs={index * 80} className="h-full">
                <article
                  className="theme-card h-full rounded-3xl p-6 sm:p-7 lg:p-9 border shadow-xs hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    borderColor: "var(--border-color)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center mb-6 sm:mb-8 shrink-0 border"
                    style={{
                      backgroundColor: "var(--accent-badge-bg)",
                      color: "var(--accent-badge)",
                      borderColor: "var(--border-color)",
                    }}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.6} aria-hidden="true" />
                  </div>

                  <div>
                    <h3
                      className="text-lg sm:text-xl font-semibold tracking-[-0.02em] mb-2.5"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      className="text-sm sm:text-[15px] leading-relaxed tracking-[-0.01em]"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {pillar.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
