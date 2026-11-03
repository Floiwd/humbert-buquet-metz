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
      className="py-24 sm:py-32 bg-[#F4F3EF]/75 border-y border-[#1D1D1F]/[0.06]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Minimalist Section Header */}
        <Reveal className="max-w-2xl mb-14 sm:mb-20">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#4A3326] mb-3">
            Savoir-Faire
          </p>
          <h2
            id="savoir-faire-heading"
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] text-[#1D1D1F] leading-[1.12]"
          >
            Trois engagements, la même exigence depuis 1937.
          </h2>
        </Reveal>

        {/* Minimalist 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delayMs={index * 80} className="h-full">
                <article className="h-full rounded-3xl bg-white border border-[#1D1D1F]/[0.06] p-8 sm:p-10 shadow-[0_4px_24px_rgba(28,25,23,0.03)] hover:shadow-[0_14px_36px_rgba(44,30,22,0.06)] hover:-translate-y-0.5 transition-all duration-500 flex flex-col justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#F4F0EA] border border-[#4A3326]/[0.08] flex items-center justify-center text-[#3E2723] mb-8">
                    <Icon className="w-5 h-5" strokeWidth={1.6} aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#1D1D1F] mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-[15px] text-[#6E6E73] leading-relaxed tracking-[-0.01em] line-clamp-2">
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
