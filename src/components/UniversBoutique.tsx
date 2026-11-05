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
      className="py-20 sm:py-28 lg:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-colors duration-400"
    >
      {/* Section Header */}
      <Reveal className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
        <p
          className="text-xs font-semibold uppercase tracking-[0.08em] mb-3"
          style={{ color: "var(--accent-badge)" }}
        >
          Au 33 En Fournirue · Plus de 5 600 références
        </p>
        <h2
          id="univers-heading"
          className="text-2xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.12] mb-4"
          style={{ color: "var(--text-primary)" }}
        >
          Six univers d’exception réunis sous un même toit.
        </h2>
        <p
          className="text-[15px] sm:text-lg leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          Surnommée par les Messins la « caverne d’Ali Baba » du centre-ville, la Droguerie Humbert-Buquet rassemble les produits introuvables en grande distribution, privilégiant la durabilité et le fabriqué en France.
        </p>
      </Reveal>

      {/* 6-Card Apple Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
        {UNIVERS.map((u, index) => {
          const Icon = u.icon;
          return (
            <Reveal key={u.title} delayMs={index * 60} className="h-full">
              <article
                className="theme-card h-full rounded-3xl p-6 sm:p-7 lg:p-8 border shadow-xs hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border-color)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5 sm:mb-6">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 border"
                      style={{
                        backgroundColor: "var(--accent-badge-bg)",
                        color: "var(--accent-badge)",
                        borderColor: "var(--border-color)",
                      }}
                    >
                      <Icon className="w-5 h-5" strokeWidth={1.6} aria-hidden="true" />
                    </div>
                    <span
                      className="text-[11px] font-medium px-3 py-1 rounded-full border whitespace-nowrap"
                      style={{
                        backgroundColor: "var(--accent-badge-bg)",
                        color: "var(--accent-badge)",
                        borderColor: "var(--border-color)",
                      }}
                    >
                      {u.tag}
                    </span>
                  </div>

                  <h3
                    className="text-lg sm:text-xl font-semibold tracking-[-0.02em] mb-1"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {u.title}
                  </h3>
                  <p
                    className="text-xs font-medium mb-3"
                    style={{ color: "var(--accent-badge)" }}
                  >
                    {u.subtitle}
                  </p>
                  <p
                    className="text-sm leading-relaxed mb-5 sm:mb-6"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {u.description}
                  </p>

                  <ul
                    className="space-y-2.5 border-t pt-4 sm:pt-5 mb-6"
                    style={{ borderColor: "var(--border-color)" }}
                  >
                    {u.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-xs sm:text-[13px] leading-snug"
                        style={{ color: "var(--text-primary)" }}
                      >
                        <Check
                          className="w-3.5 h-3.5 shrink-0 mt-0.5"
                          style={{ color: "var(--accent-badge)" }}
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="pt-4 border-t flex flex-col gap-1"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <span
                    className="text-[10px] uppercase tracking-[0.06em] font-medium"
                    style={{ color: "var(--text-muted)" }}
                  >
                    Marques & Références phares
                  </span>
                  <span
                    className="text-xs font-semibold leading-snug"
                    style={{ color: "var(--accent-primary)" }}
                  >
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
