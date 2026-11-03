"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, HelpCircle } from "lucide-react";
import Reveal from "./Reveal";

const DIAGNOSTICS = [
  {
    id: "cuir",
    category: "Cuir & Maroquinerie",
    question: "« Mon fauteuil Club, mon sac ou mes souliers en cuir sont griffés et décolorés. »",
    diagnosis:
      "Apportez votre pièce en boutique : nous comparons votre cuir directement avec notre nuancier de 72 teintes (Avel / Saphir / Tarrago) pour retrouver la pigmentation d’origine sans effet plastique.",
    steps: [
      "Nettoyage en profondeur des pores du cuir au savon glycériné ou lait nettoyant doux",
      "Re-pigmentation ciblée des griffures avec la crème surfine à la cire d’abeille de la teinte exacte",
      "Lustrage au gant ou à la brosse en pur crin de cheval pour fixer la patine et imperméabiliser",
    ],
    products: "Crème Surfine Saphir / Avel (72 coloris) · Lait nettoyant · Brosse crin de cheval",
  },
  {
    id: "bois",
    category: "Bois Massif & Antiquités",
    question: "« Ma table en chêne ou ma commode ancienne est ternie et marquée par des auréoles d’eau. »",
    diagnosis:
      "Surtout pas de spray silicone ! Selon la finition de votre meuble (ciré, huilé ou verni au tampon), nous vous prescrivons le soin d’ébénisterie qui désoxyde sans décaper la patine du temps.",
    steps: [
      "Élimination douce des anciennes couches encrassées et des taches blanches à la popote d’antiquaire",
      "Application à la mèche de coton ou laine d’acier 0000 dans le fil du bois",
      "Nourrissage à la véritable cire d’abeille et essence de térébenthine pure gemme",
    ],
    products: "Popote d’ébénisterie · Laine d’acier 0000 · Cire d’abeille traditionnelle",
  },
  {
    id: "taches",
    category: "Taches Rebelles & Pierre",
    question: "« Une tache d’huile ou de cire sur un parquet brut, une pierre de Jaumont ou un textile délicat. »",
    diagnosis:
      "Chaque support minéral ou textile réagit différemment aux acides. Nous sélectionnons l’absorbant naturel qui extrait le corps gras par capillarité sans laisser d’auréole.",
    steps: [
      "Saupoudrage généreux de véritable Terre de Sommières pure sur la tache fraîche ou ancienne",
      "Temps de pose à sec pour laisser l’argile absorber le corps gras au cœur de la fibre ou de la pierre",
      "Brossage délicat avec une brosse en soie ou fibre végétale souple",
    ],
    products: "Terre de Sommières pure · Savon de Marseille 72 % · Brosse en soie naturelle",
  },
  {
    id: "coutellerie",
    category: "Coutellerie & Affûtage",
    question: "« Je cherche un vrai couteau de chef pour cuisiner ou un couteau pliant français à offrir. »",
    diagnosis:
      "Un bon couteau se choisit en le prenant en main. Au comptoir, nous vous faisons tester l’équilibre, le tranchant et l’essence du manche selon votre usage quotidien.",
    steps: [
      "Prise en main comparative des lames japonaises (Kai) et européennes (Victorinox)",
      "Découverte des pliants patrimoniaux français (Laguiole, Nontron, Opinel) et pièces d’art (Benjamin Laraud)",
      "Conseils d’entretien de l’acier carbone ou inox et choix du fusil ou de la pierre à eau adaptée",
    ],
    products: "Couteaux Kai & Victorinox · Laguiole & Nontron · Pierres à aiguiser",
  },
] as const;

export default function AtelierConseil() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = DIAGNOSTICS[activeIndex];

  return (
    <section
      id="diagnostic"
      aria-labelledby="diagnostic-heading"
      className="py-24 sm:py-32 bg-[#2C1E16] text-[#FBFBF9]"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <Reveal className="max-w-3xl mb-12 sm:mb-16">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#D6C5B3] mb-3">
            <Sparkles className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
            <span>Un problème, une solution · Le vrai métier de droguiste</span>
          </p>
          <h2
            id="diagnostic-heading"
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] text-[#FBFBF9] leading-[1.12] mb-4"
          >
            Pourquoi venir demander conseil au 33 En Fournirue ?
          </h2>
          <p className="text-base sm:text-lg text-[#D6C5B3]/85 leading-relaxed">
            Contrairement aux rayons standardisés, vous êtes accueillis par de véritables spécialistes. Sélectionnez un cas concret ci-dessous pour découvrir comment Gaëlle et Romain Buquet vous accompagnent au comptoir :
          </p>
        </Reveal>

        {/* Interactive Case Selector */}
        <Reveal delayMs={80}>
          <div className="flex flex-wrap gap-2.5 mb-8" role="tablist" aria-label="Cas concrets de diagnostic">
            {DIAGNOSTICS.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-4 py-2.5 rounded-full text-xs sm:text-[13px] font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#FBFBF9] text-[#2C1E16] shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
                      : "bg-white/[0.07] hover:bg-white/[0.12] text-[#D6C5B3] border border-white/[0.1]"
                  }`}
                >
                  {item.category}
                </button>
              );
            })}
          </div>

          {/* Active Diagnostic Card */}
          <div className="rounded-3xl bg-[#38271E] border border-white/[0.1] p-7 sm:p-10 lg:p-12 shadow-[0_24px_60px_rgba(0,0,0,0.25)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left: Client Question & Expert Diagnosis */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.08] px-3.5 py-1 text-xs font-medium text-[#D6C5B3]">
                  <HelpCircle className="w-3.5 h-3.5" strokeWidth={1.75} aria-hidden="true" />
                  <span>La question posée au comptoir</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold tracking-[-0.02em] text-white leading-snug">
                  {current.question}
                </h3>

                <div className="rounded-2xl bg-[#2C1E16]/80 border border-white/[0.08] p-5 sm:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.06em] text-[#D6C5B3] mb-2">
                    Le diagnostic Humbert-Buquet
                  </p>
                  <p className="text-sm sm:text-[15px] text-[#FBFBF9]/90 leading-relaxed">
                    {current.diagnosis}
                  </p>
                </div>

                <div className="pt-2">
                  <p className="text-xs uppercase tracking-[0.06em] text-[#D6C5B3]/70 mb-1.5">
                    Sélection recommandée en boutique
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-[#FBFBF9]">
                    {current.products}
                  </p>
                </div>
              </div>

              {/* Right: 3-Step Protocol */}
              <div className="lg:col-span-6 rounded-2xl bg-[#FBFBF9] text-[#1D1D1F] p-6 sm:p-8 shadow-lg">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#4A3326] mb-5">
                  L’ordonnance d’entretien en 3 gestes
                </p>

                <ol className="space-y-4">
                  {current.steps.map((step, i) => (
                    <li
                      key={step}
                      className="flex items-start gap-3.5 pb-4 border-b border-[#1D1D1F]/[0.07] last:border-none last:pb-0"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#2C1E16] text-[#FBFBF9] text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-sm text-[#1D1D1F]/90 leading-relaxed">
                        {step}
                      </span>
                    </li>
                  ))}
                </ol>

                <div className="mt-6 pt-5 border-t border-[#1D1D1F]/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6E6E73]">
                    <CheckCircle2 className="w-4 h-4 text-[#4A3326]" strokeWidth={1.75} aria-hidden="true" />
                    <span>Vous pouvez venir avec votre objet en boutique</span>
                  </span>

                  <a
                    href="#infos-pratiques"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#2C1E16] hover:text-[#7C5836] transition-colors"
                  >
                    <span>Venir au 33 En Fournirue</span>
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
