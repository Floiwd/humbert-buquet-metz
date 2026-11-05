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
    category: "Bois & Antiquités",
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
    category: "Taches & Pierre",
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
    category: "Coutellerie & Lames",
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
      className="py-20 sm:py-28 lg:py-32 transition-colors duration-400"
      style={{
        backgroundColor: "var(--accent-primary)",
        color: "var(--accent-contrast)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mb-10 sm:mb-14">
          <p
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] mb-3 opacity-90"
            style={{ color: "var(--accent-contrast)" }}
          >
            <Sparkles className="w-3.5 h-3.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
            <span>Un problème, une solution · Le métier de droguiste</span>
          </p>
          <h2
            id="diagnostic-heading"
            className="text-2xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.12] mb-4"
          >
            Pourquoi venir demander conseil au 33 En Fournirue ?
          </h2>
          <p className="text-[15px] sm:text-lg leading-relaxed opacity-85">
            Contrairement aux rayons standardisés, vous êtes accueillis par de véritables spécialistes. Sélectionnez un cas concret ci-dessous pour découvrir comment Gaëlle et Romain Buquet vous accompagnent au comptoir :
          </p>
        </Reveal>

        {/* Interactive Case Selector */}
        <Reveal delayMs={80}>
          <div
            className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-2.5 mb-6 sm:mb-8"
            role="tablist"
            aria-label="Cas concrets de diagnostic"
          >
            {DIAGNOSTICS.map((item, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-3.5 py-2.5 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-full text-xs sm:text-[13px] font-medium text-center transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "shadow-lg scale-[1.02]"
                      : "opacity-75 hover:opacity-100"
                  }`}
                  style={{
                    backgroundColor: isActive ? "var(--bg-surface)" : "rgba(255, 255, 255, 0.1)",
                    color: isActive ? "var(--text-primary)" : "var(--accent-contrast)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                  }}
                >
                  {item.category}
                </button>
              );
            })}
          </div>

          {/* Active Diagnostic Card */}
          <div
            className="theme-card rounded-3xl p-5 sm:p-8 lg:p-10 shadow-2xl border"
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.15)",
              borderColor: "rgba(255, 255, 255, 0.15)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch">
              {/* Left: Client Question & Expert Diagnosis */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-5 sm:space-y-6">
                <div className="space-y-4 sm:space-y-5">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium">
                    <HelpCircle className="w-3.5 h-3.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                    <span>La question posée au comptoir</span>
                  </div>

                  <h3 className="text-lg sm:text-2xl font-semibold tracking-[-0.02em] leading-snug">
                    {current.question}
                  </h3>

                  <div
                    className="rounded-2xl p-4 sm:p-6 border"
                    style={{
                      backgroundColor: "rgba(0, 0, 0, 0.25)",
                      borderColor: "rgba(255, 255, 255, 0.1)",
                    }}
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.06em] mb-2 opacity-80">
                      Le diagnostic Humbert-Buquet
                    </p>
                    <p className="text-sm sm:text-[15px] leading-relaxed opacity-95">
                      {current.diagnosis}
                    </p>
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10">
                  <p className="text-[11px] uppercase tracking-[0.06em] mb-1 opacity-75">
                    Sélection recommandée en boutique
                  </p>
                  <p className="text-xs sm:text-sm font-semibold leading-snug">
                    {current.products}
                  </p>
                </div>
              </div>

              {/* Right: 3-Step Protocol */}
              <div
                className="lg:col-span-6 rounded-2xl p-5 sm:p-7 lg:p-8 shadow-lg flex flex-col justify-between"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  color: "var(--text-primary)",
                }}
              >
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.08em] mb-4 sm:mb-5"
                    style={{ color: "var(--accent-badge)" }}
                  >
                    L’ordonnance d’entretien en 3 gestes
                  </p>

                  <ol className="space-y-3.5 sm:space-y-4">
                    {current.steps.map((step, i) => (
                      <li
                        key={step}
                        className="flex items-start gap-3 pb-3.5 sm:pb-4 border-b last:border-none last:pb-0"
                        style={{ borderColor: "var(--border-color)" }}
                      >
                        <span
                          className="w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center shrink-0 mt-0.5"
                          style={{
                            backgroundColor: "var(--accent-primary)",
                            color: "var(--accent-contrast)",
                          }}
                        >
                          {i + 1}
                        </span>
                        <span className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div
                  className="mt-6 pt-4 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium" style={{ color: "var(--text-muted)" }}>
                    <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: "var(--accent-badge)" }} strokeWidth={1.75} aria-hidden="true" />
                    <span>Apportez votre objet en boutique</span>
                  </span>

                  <a
                    href="#infos-pratiques"
                    className="inline-flex items-center gap-1.5 text-xs font-bold hover:underline transition-all"
                    style={{ color: "var(--accent-primary)" }}
                  >
                    <span>Venir au 33 En Fournirue</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" strokeWidth={2} aria-hidden="true" />
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
