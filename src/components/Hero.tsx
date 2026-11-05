import Image from "next/image";
import { ArrowDownRight, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

const KEY_FIGURES = [
  {
    value: "1937",
    label: "Année de fondation",
    detail: "Trois générations de maîtres-droguistes, de Verdun au cœur historique de Metz.",
  },
  {
    value: "5 600+",
    label: "Références en stock",
    detail: "Une véritable « caverne d’Ali Baba » dédiée à l’entretien, la rénovation et la maison.",
  },
  {
    value: "72 teintes",
    label: "Nuancier de cirages",
    detail: "L’un des plus grands choix de l’Est (Avel, Saphir, Tarrago) pour vos cuirs et souliers.",
  },
  {
    value: "100 %",
    label: "Conseil au comptoir",
    detail: "Romain et Gaëlle Buquet diagnostiquent vos matériaux et prescrivent le geste juste.",
  },
] as const;

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto transition-colors duration-400"
    >
      {/* Editorial Copy */}
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <div
            className="hero-editorial-badge inline-flex items-center justify-center gap-2 rounded-full border px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold tracking-[0.04em] uppercase mb-5 sm:mb-6 max-w-full transition-all"
            style={{
              backgroundColor: "var(--accent-badge-bg)",
              color: "var(--accent-badge)",
              borderColor: "var(--border-color)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span className="truncate">
              Maison fondée en 1937 · 33 En Fournirue, Metz
            </span>
          </div>
        </Reveal>

        <Reveal delayMs={60}>
          <h1
            id="hero-heading"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.15rem] font-semibold tracking-[-0.035em] leading-[1.08] mb-5 sm:mb-6 transition-all"
            style={{ color: "var(--text-primary)" }}
          >
            L’excellence depuis 1937.
            <span
              className="block font-medium mt-1.5 opacity-90"
              style={{ color: "var(--accent-badge)" }}
            >
              L’art d’entretenir et de faire durer.
            </span>
          </h1>
        </Reveal>

        <Reveal delayMs={120}>
          <p
            className="max-w-2xl mx-auto text-[15px] sm:text-lg leading-relaxed font-normal tracking-[-0.01em] mb-8 sm:mb-10 px-1"
            style={{ color: "var(--text-secondary)" }}
          >
            Au 33 En Fournirue à Metz, poussez la porte d’une institution familiale unique : plus de 5 600 références d’entretien spécialisé, 72 nuances de cirage, coutellerie d’art, brosserie traditionnelle et les conseils d’experts de Gaëlle et Romain Buquet.
          </p>
        </Reveal>

        {/* Single CTA button */}
        <Reveal delayMs={180}>
          <div>
            <a
              href="#univers"
              className="inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 sm:px-7 sm:py-3.5 text-sm sm:text-[15px] font-medium tracking-[-0.01em] shadow-lg transition-all duration-300 active:scale-[0.98]"
              style={{
                backgroundColor: "var(--accent-primary)",
                color: "var(--accent-contrast)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <span>Découvrir la boutique</span>
              <ArrowDownRight className="w-4 h-4 shrink-0 opacity-80" strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Noble Product & Interior Showcase */}
      <Reveal delayMs={240} className="mt-12 sm:mt-16">
        <div
          className="hero-card-container relative rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] p-2 sm:p-3 border shadow-xl transition-all duration-400"
          style={{
            backgroundColor: "var(--bg-surface)",
            borderColor: "var(--border-color)",
            boxShadow: "var(--shadow-elevated)",
          }}
        >
          <div
            className="relative overflow-hidden rounded-[18px] sm:rounded-[24px] lg:rounded-[28px] aspect-[4/3] sm:aspect-[16/10]"
            style={{ backgroundColor: "var(--bg-subtle)" }}
          >
            <Image
              src="/hero-droguerie.jpg"
              alt="Comptoir en bois massif, tiroirs d'apothicaire, brosses en fibres naturelles, cire d'abeille et savons de Marseille de La Droguerie Humbert-Buquet au 33 En Fournirue à Metz"
              width={1600}
              height={1000}
              preload={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 92vw, 1120px"
              className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-[1.015]"
            />

            {/* Subtle glassmorphic caption */}
            <div
              className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-[calc(100%-2.5rem)] inline-flex items-center gap-2.5 rounded-xl sm:rounded-2xl backdrop-blur-md border px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-md"
              style={{
                backgroundColor: "var(--navbar-bg)",
                borderColor: "var(--border-color)",
                color: "var(--text-primary)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: "var(--accent-badge)" }}
                aria-hidden="true"
              />
              <p className="text-xs sm:text-[13px] font-medium tracking-[-0.01em] truncate">
                <span className="sm:hidden">33 En Fournirue, Metz · Institution familiale</span>
                <span className="hidden sm:inline">
                  33 En Fournirue, Metz · La « caverne d’Ali Baba » des matières nobles & du soin de la maison
                </span>
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Key Figures Strip */}
      <div className="mt-6 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
        {KEY_FIGURES.map((stat, idx) => (
          <Reveal key={stat.label} delayMs={280 + idx * 60} className="h-full">
            <div
              className="theme-card h-full rounded-2xl sm:rounded-3xl p-4 sm:p-6 border shadow-xs flex flex-col justify-between transition-all duration-300"
              style={{
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--border-color)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div>
                <p
                  className="text-xl sm:text-3xl font-bold tracking-[-0.03em]"
                  style={{ color: "var(--accent-primary)" }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs sm:text-sm font-semibold mt-1"
                  style={{ color: "var(--text-primary)" }}
                >
                  {stat.label}
                </p>
              </div>
              <p
                className="text-[11px] sm:text-xs leading-relaxed mt-2.5 sm:mt-3"
                style={{ color: "var(--text-muted)" }}
              >
                {stat.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
