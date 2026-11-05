import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FAF8F5",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://humbert-buquet-metz.vercel.app"),
  title: "La Droguerie Humbert-Buquet | Maison Fondée en 1937 · Metz",
  description:
    "Institution familiale au 33 En Fournirue à Metz. Plus de 5 600 références, 72 coloris de cirages, coutellerie fine, ébénisterie, brosserie et conseils d'experts.",
  keywords: [
    "Droguerie Humbert-Buquet",
    "La Droguerie de Metz",
    "droguerie En Fournirue Metz",
    "cirage Metz Avel Saphir",
    "coutellerie Metz Laguiole Kai",
    "produits d'antan Metz",
    "Romain Buquet droguerie",
  ],
  authors: [{ name: "La Droguerie Humbert-Buquet" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "La Droguerie Humbert-Buquet | L'excellence depuis 1937 à Metz",
    description:
      "Maison familiale fondée en 1937 au 33 En Fournirue à Metz. Produits d'antan, entretien spécialisé des matières nobles et conseil expert.",
    siteName: "La Droguerie Humbert-Buquet",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" data-theme="apple">
      <body
        className={`${inter.variable} ${playfair.variable} min-h-screen antialiased overflow-x-hidden`}
        style={{
          backgroundColor: "var(--bg-canvas)",
          color: "var(--text-primary)",
        }}
      >
        {children}
      </body>
    </html>
  );
}
