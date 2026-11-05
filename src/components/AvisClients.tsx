import { Star, Quote, CheckCircle2, Award } from "lucide-react";
import Reveal from "./Reveal";

const REVIEWS = [
  {
    author: "Christophe M.",
    role: "Client fidèle · Metz Centre",
    date: "Avis vérifié Google",
    rating: 5,
    title: "Le vrai métier de droguiste n’a pas disparu",
    comment:
      "Une véritable caverne d’Ali Baba en Fournirue ! Venu pour des taches d'eau anciennes sur une commode en merisier héritée de mes grands-parents, j'ai reçu un diagnostic précis et les bons produits (popote et cire d'abeille pure). Résultat bluffant, le meuble a retrouvé sa patine d'origine sans aucun décapage.",
    highlight: "Conseil ébénisterie",
  },
  {
    author: "Marie-Laure D.",
    role: "Avis Google · Note 5/5",
    date: "Il y a 2 mois",
    rating: 5,
    title: "Un nuancier de cirages introuvable ailleurs",
    comment:
      "Impossible de trouver la teinte exacte de mes bottines bordeaux en grande surface. Ici, ils ont plus de 70 nuances de cirage en stock ! Romain a pris le soulier au comptoir, a comparé avec le nuancier Saphir et m’a trouvé la teinte parfaite au demi-ton près. Accueil et gentillesse incomparables.",
    highlight: "Bar à cirages (72 teintes)",
  },
  {
    author: "Julien V.",
    role: "Guide Petit Futé & Client local",
    date: "Avis vérifié",
    rating: 5,
    title: "Des conseils en or et des produits nobles",
    comment:
      "Quel bonheur d'avoir encore une boutique comme Humbert-Buquet à Metz ! Savons de Marseille au chaudron, couteaux d'art remarquables, brosses en poils naturels faites pour durer 20 ans... L'équipe prend le temps d'expliquer le dosage et la façon de faire. Commerce précieux pour notre ville.",
    highlight: "Produits nobles & Durabilité",
  },
  {
    author: "Nathalie B.",
    role: "Avis Google · Note 5/5",
    date: "Il y a 3 semaines",
    rating: 5,
    title: "Maison Berger et parfums d’intérieur",
    comment:
      "Le point de référence à Metz pour les lampes Berger et leurs recharges. On y trouve toujours le conseil avisé, des idées de cadeaux artisanaux et des produits d'entretien écologiques bruts (terre de Sommières, cristaux de soude) introuvables avec une telle qualité.",
    highlight: "Maison Berger & Droguerie verte",
  },
] as const;

export default function AvisClients() {
  return (
    <section
      id="avis"
      aria-labelledby="avis-heading"
      className="py-20 sm:py-28 lg:py-32 transition-colors duration-400"
      style={{
        backgroundColor: "var(--bg-subtle)",
        borderTop: "1px solid var(--border-color)",
        borderBottom: "1px solid var(--border-color)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google Rating Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <Reveal className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] mb-3"
              style={{
                backgroundColor: "var(--accent-badge-bg)",
                color: "var(--accent-badge)",
              }}
            >
              <Award className="w-3.5 h-3.5 shrink-0" strokeWidth={1.8} aria-hidden="true" />
              <span>Avis Vérifiés · Note Google 4,6 / 5</span>
            </div>
            <h2
              id="avis-heading"
              className="text-2xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.12]"
              style={{ color: "var(--text-primary)" }}
            >
              La confiance des Messins, transmise de génération en génération.
            </h2>
          </Reveal>

          {/* Social Proof Floating Badge */}
          <Reveal delayMs={100} className="shrink-0">
            <div
              className="theme-card inline-flex items-center gap-3.5 rounded-2xl px-5 py-3 shadow-md border"
              style={{
                backgroundColor: "var(--bg-surface)",
                borderColor: "var(--border-color)",
              }}
            >
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>
              <div className="border-l pl-3.5" style={{ borderColor: "var(--border-color)" }}>
                <span className="block text-sm font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
                  4,6 / 5 sur Google
                </span>
                <span className="block text-[11px]" style={{ color: "var(--text-muted)" }}>
                  Recommandé par le Petit Futé
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* 4 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-7">
          {REVIEWS.map((rev, index) => (
            <Reveal key={rev.author} delayMs={index * 60} className="h-full">
              <article
                className="theme-card h-full rounded-3xl p-6 sm:p-7 lg:p-8 flex flex-col justify-between border transition-all duration-300"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border-color)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <span
                      className="text-[11px] font-medium px-2.5 py-0.5 rounded-full"
                      style={{
                        backgroundColor: "var(--accent-badge-bg)",
                        color: "var(--accent-badge)",
                      }}
                    >
                      {rev.highlight}
                    </span>
                  </div>

                  <h3
                    className="text-base sm:text-lg font-semibold tracking-[-0.015em] mb-2.5"
                    style={{ color: "var(--text-primary)" }}
                  >
                    « {rev.title} »
                  </h3>

                  <p
                    className="text-sm leading-relaxed mb-6"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {rev.comment}
                  </p>
                </div>

                <div
                  className="pt-4 border-t flex items-center justify-between gap-3 text-xs"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  <div className="flex items-center gap-2">
                    <Quote className="w-3.5 h-3.5 shrink-0 opacity-40" />
                    <div>
                      <p className="font-semibold" style={{ color: "var(--text-primary)" }}>
                        {rev.author}
                      </p>
                      <p className="text-[11px]" style={{ color: "var(--text-muted)" }}>
                        {rev.role}
                      </p>
                    </div>
                  </div>
                  <span
                    className="inline-flex items-center gap-1 text-[11px] font-medium"
                    style={{ color: "var(--accent-badge)" }}
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    <span>{rev.date}</span>
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
