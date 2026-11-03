import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
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
      className="relative pt-10 pb-16 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      {/* Editorial Copy */}
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <div className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F4F0EA] border border-[#4A3326]/[0.12] px-3.5 py-1.5 text-[11px] sm:text-xs font-medium tracking-[0.03em] uppercase text-[#4A3326] mb-5 sm:mb-6 max-w-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C5836] shrink-0" aria-hidden="true" />
            <span className="truncate">
              Maison fondée en 1937 · 33 En Fournirue, Metz
            </span>
          </div>
        </Reveal>

        <Reveal delayMs={60}>
          <h1
            id="hero-heading"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.15rem] font-semibold tracking-[-0.035em] text-[#1D1D1F] leading-[1.08] mb-5 sm:mb-6"
          >
            L’excellence depuis 1937.
            <span className="block text-[#4A3326] font-medium mt-1.5">
              L’art d’entretenir et de faire durer.
            </span>
          </h1>
        </Reveal>

        <Reveal delayMs={120}>
          <p className="max-w-2xl mx-auto text-[15px] sm:text-lg text-[#6E6E73] leading-relaxed font-normal tracking-[-0.01em] mb-8 sm:mb-10 px-1">
            Au 33 En Fournirue à Metz, poussez la porte d’une institution familiale unique : plus de 5 600 références d’entretien spécialisé, 72 nuances de cirage, coutellerie d’art, brosserie traditionnelle et les conseils d’experts de Gaëlle et Romain Buquet.
          </p>
        </Reveal>

        {/* Single CTA button */}
        <Reveal delayMs={180}>
          <div>
            <a
              href="#univers"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#2C1E16] hover:bg-[#3E2B20] active:scale-[0.98] text-[#FBFBF9] px-6 py-3.5 sm:px-7 sm:py-3.5 text-sm sm:text-[15px] font-medium tracking-[-0.01em] shadow-[0_10px_28px_-8px_rgba(44,30,22,0.32)] transition-all duration-300"
            >
              <span>Découvrir la boutique</span>
              <ArrowDownRight className="w-4 h-4 text-[#D6C5B3] shrink-0" strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Noble Product & Interior Showcase */}
      <Reveal delayMs={240} className="mt-12 sm:mt-16">
        <div className="relative rounded-[24px] sm:rounded-[32px] lg:rounded-[36px] p-2 sm:p-3 bg-white border border-[#1D1D1F]/[0.07] shadow-[0_24px_60px_-15px_rgba(28,25,23,0.07)]">
          <div className="relative overflow-hidden rounded-[18px] sm:rounded-[24px] lg:rounded-[28px] aspect-[4/3] sm:aspect-[16/10] bg-[#EFECE6]">
            <Image
              src="/hero-droguerie.jpg"
              alt="Comptoir en bois massif, tiroirs d'apothicaire, brosses en fibres naturelles, cire d'abeille et savons de Marseille de La Droguerie Humbert-Buquet au 33 En Fournirue à Metz"
              width={1600}
              height={1000}
              preload={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 92vw, 1120px"
              className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-[1.015]"
            />

            {/* Subtle Apple-style glassmorphic caption constrained within bounds */}
            <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-[calc(100%-2.5rem)] inline-flex items-center gap-2.5 rounded-xl sm:rounded-2xl bg-[#FBFBF9]/92 backdrop-blur-md border border-[#1D1D1F]/[0.08] px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
              <span className="w-2 h-2 rounded-full bg-[#4A3326] shrink-0" aria-hidden="true" />
              <p className="text-xs sm:text-[13px] font-medium text-[#1D1D1F] tracking-[-0.01em] truncate">
                <span className="sm:hidden">33 En Fournirue, Metz · Institution familiale</span>
                <span className="hidden sm:inline">
                  33 En Fournirue, Metz · La « caverne d’Ali Baba » des matières nobles & du soin de la maison
                </span>
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Key Figures Strip (2x2 on mobile/tablet, 4 cols on desktop) */}
      <div className="mt-6 sm:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
        {KEY_FIGURES.map((stat, idx) => (
          <Reveal key={stat.label} delayMs={280 + idx * 60} className="h-full">
            <div className="h-full rounded-2xl sm:rounded-3xl bg-white border border-[#1D1D1F]/[0.06] p-4 sm:p-6 shadow-[0_2px_16px_rgba(28,25,23,0.025)] flex flex-col justify-between">
              <div>
                <p className="text-xl sm:text-3xl font-semibold tracking-[-0.03em] text-[#2C1E16]">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-[#1D1D1F] mt-1">
                  {stat.label}
                </p>
              </div>
              <p className="text-[11px] sm:text-xs text-[#6E6E73] leading-relaxed mt-2.5 sm:mt-3">
                {stat.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
