import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FBFBF9",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://humbert-buquet-metz.vercel.app"),
  title: "La Droguerie Humbert-Buquet | L'excellence depuis 1937 à Metz",
  description:
    "Institution familiale fondée en 1937 rue en Fournirue à Metz. Produits d'antan, entretien spécialisé des matières nobles et conseil expert.",
  keywords: [
    "Droguerie Humbert-Buquet",
    "droguerie Metz",
    "En Fournirue Metz",
    "produits d'antan Metz",
    "entretien bois cuir marbre Metz",
    "commerce historique Metz 1937",
  ],
  authors: [{ name: "La Droguerie Humbert-Buquet" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    title: "La Droguerie Humbert-Buquet | L'excellence depuis 1937 à Metz",
    description:
      "Maison familiale fondée en 1937 rue en Fournirue à Metz. Produits d'antan, entretien spécialisé et conseil expert.",
    siteName: "La Droguerie Humbert-Buquet",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} min-h-screen bg-[#FBFBF9] text-[#1D1D1F] antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
