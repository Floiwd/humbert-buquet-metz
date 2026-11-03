import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative pt-16 pb-24 sm:pt-24 sm:pb-32 lg:pt-28 lg:pb-36 px-5 sm:px-8 max-w-6xl mx-auto"
    >
      {/* Editorial Copy */}
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <p className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-medium tracking-[0.06em] uppercase text-[#4A3326] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7C5836]" aria-hidden="true" />
            <span>La Droguerie Humbert-Buquet · Rue en Fournirue, Metz</span>
          </p>
        </Reveal>

        <Reveal delayMs={60}>
          <h1
            id="hero-heading"
            className="text-4xl sm:text-6xl lg:text-[4.25rem] font-semibold tracking-[-0.035em] text-[#1D1D1F] leading-[1.06] mb-6"
          >
            L’excellence depuis 1937.
            <span className="block text-[#4A3326] font-medium mt-1.5">
              L’essentiel pour ce qui dure.
            </span>
          </h1>
        </Reveal>

        <Reveal delayMs={120}>
          <p className="max-w-xl mx-auto text-base sm:text-lg text-[#6E6E73] leading-relaxed font-normal tracking-[-0.01em] mb-10">
            Au cœur historique de Metz, une maison familiale dédiée aux produits nobles, à la droguerie traditionnelle et au conseil sur-mesure.
          </p>
        </Reveal>

        {/* Strictly ONE button: "Découvrir la boutique" */}
        <Reveal delayMs={180}>
          <div>
            <a
              href="#savoir-faire"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#2C1E16] hover:bg-[#3E2B20] active:scale-[0.98] text-[#FBFBF9] px-7 py-3.5 text-sm sm:text-[15px] font-medium tracking-[-0.01em] shadow-[0_10px_28px_-8px_rgba(44,30,22,0.32)] transition-all duration-300"
            >
              <span>Découvrir la boutique</span>
              <ArrowDownRight className="w-4 h-4 text-[#D6C5B3]" strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>

      {/* Noble Product & Interior Showcase */}
      <Reveal delayMs={240} className="mt-14 sm:mt-20">
        <div className="relative rounded-[28px] sm:rounded-[36px] p-2 sm:p-3 bg-white border border-[#1D1D1F]/[0.07] shadow-[0_24px_60px_-15px_rgba(28,25,23,0.07)]">
          <div className="relative overflow-hidden rounded-[22px] sm:rounded-[28px] aspect-[16/10] bg-[#EFECE6]">
            <Image
              src="/hero-droguerie.jpg"
              alt="Comptoir en bois massif, tiroirs d'apothicaire, brosses en fibres naturelles, cire d'abeille et savons de Marseille de La Droguerie Humbert-Buquet à Metz"
              width={1600}
              height={1000}
              preload={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 92vw, 1120px"
              className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out hover:scale-[1.015]"
            />

            {/* Subtle Apple-style glassmorphic caption */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-auto inline-flex items-center gap-3 rounded-2xl bg-[#FBFBF9]/85 backdrop-blur-md border border-[#1D1D1F]/[0.08] px-4 py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
              <span className="w-2 h-2 rounded-full bg-[#4A3326] shrink-0" aria-hidden="true" />
              <p className="text-xs sm:text-[13px] font-medium text-[#1D1D1F] tracking-[-0.01em] truncate">
                Institution familiale messine · Boiseries d’époque & matières brutes
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
