"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type ThemeId =
  | "apple"       // Épure Contemporaine / Apple Minimal
  | "officine"    // Comptoir d'Antan 1937 / Ébénisterie & Papier Kraft
  | "apothicaire" // Apothicaire & Botanique / Vert Sauge & Verre Ambré
  | "nocturne"    // Atelier Nocturne / Métal Forgé, Or & Noyer Sombre
  | "mineral";    // Pierre de Jaumont & Faïence / Calcaire Messin Ligne Claire

export interface ThemeConfig {
  id: ThemeId;
  name: string;
  subtitle: string;
  description: string;
  badge: string;
  accentColor: string;
  previewBg: string;
}

export const THEMES: ThemeConfig[] = [
  {
    id: "apple",
    name: "Épure Studio",
    subtitle: "Standards Apple / Less is more",
    description: "Design immaculé, grands espaces blancs, typographie géométrique et finitions feutrées.",
    badge: "Minimaliste",
    accentColor: "#2C1E16",
    previewBg: "#FAF8F5",
  },
  {
    id: "officine",
    name: "Comptoir 1937",
    subtitle: "Maison Familiale & Ébénisterie",
    description: "Bois de noyer patiné, teintes parchemin kraft, typographie Serif d'époque et cachet artisanal.",
    badge: "Héritage",
    accentColor: "#5A341E",
    previewBg: "#F6EDE0",
  },
  {
    id: "apothicaire",
    name: "Herboristerie & Sauge",
    subtitle: "Droguerie Verte & Produits Bruts",
    description: "Teintes sauge naturelle, verre ambré, lin écru et accentuation des matières écologiques.",
    badge: "Végétal & Naturel",
    accentColor: "#2F5036",
    previewBg: "#EDF3EC",
  },
  {
    id: "nocturne",
    name: "Atelier d'Art",
    subtitle: "Lames Forgées & Noyer Sombre",
    description: "Fond sombre profond, laiton brossé or, mise en majesté des pièces de coutellerie d'art et cuirs.",
    badge: "Haute Facture",
    accentColor: "#DDA74F",
    previewBg: "#12100E",
  },
  {
    id: "mineral",
    name: "Pierre de Jaumont",
    subtitle: "Architecture Messine & Faïence",
    description: "Inspiré de la pierre dorée de Metz et des faïenceries lorraines : bleu cobalt, ocre solaire et élégance.",
    badge: "Couleurs de Metz",
    accentColor: "#1B4D68",
    previewBg: "#F9F6EE",
  },
];

interface ThemeContextType {
  theme: ThemeId;
  setTheme: (theme: ThemeId) => void;
  config: ThemeConfig;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("droguerie_theme") as ThemeId | null;
      if (saved && THEMES.some((t) => t.id === saved)) {
        return saved;
      }
    }
    return "apple";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const setTheme = (newTheme: ThemeId) => {
    setThemeState(newTheme);
    localStorage.setItem("droguerie_theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const config = THEMES.find((t) => t.id === theme) || THEMES[0];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, config }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
