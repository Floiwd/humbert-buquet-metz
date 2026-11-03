import {
  Palette,
  UtensilsCrossed,
  Sparkles,
  Brush,
  FlaskConical,
  Flame,
  Check,
} from "lucide-react";
import Reveal from "./Reveal";

const UNIVERS = [
  {
    tag: "72 coloris en stock",
    title: "Le Bar à Cirages & Soin du Cuir",
    subtitle: "L’un des plus vastes nuanciers du Grand Est",
    description:
      "Pour redonner éclat et souplesse à vos souliers, blousons, sacs de maroquinerie ou fauteuils Club. Nous identifions au comptoir la nuance exacte parmi plus de 70 teintes.",
    brands: "Avel · Saphir · Tarrago",
    icon: Palette,
    items: [
      "Crèmes surfines & pâtes de luxe en 72 teintes",
      "Laits nettoyants, rénovateurs & teintures cuir",
      "Embauchoirs en cèdre & brosses pur crin de cheval",
    ],
  },
  {
    tag: "Lames & Artisanat",
    title: "Coutellerie Fine & Couteaux d’Art",
    subtitle: "Du couteau de chef japonais au pliant français",
    description:
      "Un rayon coutellerie rigoureusement sélectionné pour les passionnés de gastronomie comme pour les collectionneurs de belles lames forgées.",
    brands: "Kai · Victorinox · Laguiole · Nontron · Benjamin Laraud",
    icon: UtensilsCrossed,
    items: [
      "Couteaux de cuisine japonais Kai & offices Victorinox",
      "Couteaux de poche français (Laguiole, Nontron, Opinel)",
      "Pièces uniques de couteliers d’art & pierres d’affûtage",
    ],
  },
  {
    tag: "Soin du patrimoine",
    title: "Ébénisterie, Bois, Marbres & Métaux",
    subtitle: "Les formules des antiquaires et artisans d’art",
    description:
      "Tout le nécessaire pour nourrir un meuble en chêne massif, estomper une auréole sur un vernis au tampon, cristalliser un marbre ou raviver l’argenterie de famille.",
    brands: "Cires d’abeille · Popotes d’antiquaire · Laine d’acier 0000",
    icon: Sparkles,
    items: [
      "Cires d’abeille en pâte, huile de lin & térébenthine pure gemme",
      "Popotes d’ébénisterie, décireurs & teintes à bois",
      "Soins spécifiques argenterie, cuivre, laiton, étain & pierre",
    ],
  },
  {
    tag: "Savoir-faire brossier",
    title: "Brosserie en Fibres Naturelles",
    subtitle: "Montures en bois de hêtre et fibres d’origine",
    description:
      "Des outils ménagers conçus pour durer des décennies, qui respectent vos surfaces délicates sans les rayer grâce à la souplesse des fibres naturelles.",
    brands: "Crin de cheval · Soie · Tampico · Chiendent · Autruche",
    icon: Brush,
    items: [
      "Balais d’intérieur en pur crin et soie naturelle",
      "Brosses à récurer en fibre de tampico et chiendent",
      "Plumeaux en véritables plumes d’autruche & brosses à habits",
    ],
  },
  {
    tag: "Matières premières",
    title: "Droguerie d’Antan & Écologie",
    subtitle: "Les ingrédients bruts d’une maison saine",
    description:
      "Retrouvez les produits authentiques et économiques que nos grands-mères utilisaient, sans chimie superflue, vendus avec leurs dosages et recettes d’application.",
    brands: "Savon de Marseille 72 % · Terre de Sommières · Blanc de Meudon",
    icon: FlaskConical,
    items: [
      "Cubes de Savon de Marseille au chaudron & savon noir à l’olive",
      "Terre de Sommières (détachant à sec) & Blanc de Meudon",
      "Bicarbonate, percarbonate, cristaux de soude & terre de diatomée",
    ],
  },
  {
    tag: "Revendeur historique",
    title: "Parfums d’Intérieur & Maison Berger",
    subtitle: "L’art de purifier et parfumer votre intérieur",
    description:
      "Point de vente historique des célèbres Lampes Berger à Metz, accompagné d’une sélection de senteurs raffinées, savons de toilette et cadeaux messins.",
    brands: "Maison Berger Paris · Savonnerie fine · Souvenirs de Metz",
    icon: Flame,
    items: [
      "Lampes à catalyse Maison Berger Paris, mèches & recharges",
      "Bouquets parfumés, bougies d’ambiance & parfums d’armoire",
      "Savons surgras pour la peau & créations aux couleurs de Metz",
    ],
  },
] as const;

export default function UniversBoutique() {
  return (
    <section
      id="univers"
      aria-labelledby="univers-heading"
      className="py-20 sm:py-28 lg:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Section Header */}
      <Reveal className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#4A3326] mb-3">
          Au 33 En Fournirue · Plus de 5 600 références
        </p>
        <h2
          id="univers-heading"
          className="text-2xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] text-[#1D1D1F] leading-[1.12] mb-4"
        >
          Six univers d’exception réunis sous un même toit.
        </h2>
        <p className="text-[15px] sm:text-lg text-[#6E6E73] leading-relaxed">
          Surnommée par les Messins la « caverne d’Ali Baba » du centre-ville, la Droguerie Humbert-Buquet rassemble les produits introuvables en grande distribution, privilégiant la durabilité et le fabriqué en France.
        </p>
      </Reveal>

      {/* 6-Card Apple Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
        {UNIVERS.map((u, index) => {
          const Icon = u.icon;
          return (
            <Reveal key={u.title} delayMs={index * 60} className="h-full">
              <article className="h-full rounded-3xl bg-white border border-[#1D1D1F]/[0.07] p-6 sm:p-7 lg:p-8 shadow-[0_4px_24px_rgba(28,25,23,0.03)] hover:shadow-[0_16px_40px_rgba(44,30,22,0.07)] hover:-translate-y-0.5 transition-all duration-500 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5 sm:mb-6">
                    <div className="w-11 h-11 rounded-2xl bg-[#F4F0EA] border border-[#4A3326]/[0.1] flex items-center justify-center text-[#3E2723] shrink-0">
                      <Icon className="w-5 h-5" strokeWidth={1.6} aria-hidden="true" />
                    </div>
                    <span className="text-[11px] font-medium text-[#4A3326] bg-[#F4F0EA]/80 px-3 py-1 rounded-full border border-[#4A3326]/[0.08] whitespace-nowrap">
                      {u.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold tracking-[-0.02em] text-[#1D1D1F] mb-1">
                    {u.title}
                  </h3>
                  <p className="text-xs font-medium text-[#7C5836] mb-3">
                    {u.subtitle}
                  </p>
                  <p className="text-sm text-[#6E6E73] leading-relaxed mb-5 sm:mb-6">
                    {u.description}
                  </p>

                  <ul className="space-y-2.5 border-t border-[#1D1D1F]/[0.06] pt-4 sm:pt-5 mb-6">
                    {u.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#1D1D1F]/90 leading-snug">
                        <Check className="w-3.5 h-3.5 text-[#4A3326] shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#1D1D1F]/[0.05] flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-[0.06em] text-[#6E6E73] font-medium">
                    Marques & Références phares
                  </span>
                  <span className="text-xs font-semibold text-[#2C1E16] leading-snug">
                    {u.brands}
                  </span>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
