import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SavoirFaire from "@/components/SavoirFaire";
import UniversBoutique from "@/components/UniversBoutique";
import AtelierConseil from "@/components/AtelierConseil";
import HistoireMaison from "@/components/HistoireMaison";
import InfosPratiques from "@/components/InfosPratiques";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBF9] text-[#1D1D1F] overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SavoirFaire />
        <UniversBoutique />
        <AtelierConseil />
        <HistoireMaison />
        <InfosPratiques />
      </main>
      <Footer />
    </div>
  );
}
