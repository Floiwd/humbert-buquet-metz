import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SavoirFaire from "@/components/SavoirFaire";
import UniversBoutique from "@/components/UniversBoutique";
import AtelierConseil from "@/components/AtelierConseil";
import HistoireMaison from "@/components/HistoireMaison";
import AvisClients from "@/components/AvisClients";
import InfosPratiques from "@/components/InfosPratiques";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeContext";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default function HomePage() {
  return (
    <ThemeProvider>
      <div
        className="min-h-screen flex flex-col overflow-x-hidden transition-colors duration-400"
        style={{
          backgroundColor: "var(--bg-canvas)",
          color: "var(--text-primary)",
        }}
      >
        <Navbar />
        <main className="flex-1">
          <Hero />
          <SavoirFaire />
          <UniversBoutique />
          <AtelierConseil />
          <HistoireMaison />
          <AvisClients />
          <InfosPratiques />
        </main>
        <Footer />
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}
