export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#FBFBF9]/80 backdrop-blur-xl border-b border-[#1D1D1F]/[0.06] transition-colors">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        <a
          href="#top"
          aria-label="La Droguerie Humbert-Buquet — Retour en haut"
          className="group flex items-center gap-3 min-w-0 focus:outline-none"
        >
          <span className="w-8 h-8 rounded-lg bg-[#2C1E16] text-[#FBFBF9] flex items-center justify-center text-xs font-semibold tracking-tight shrink-0 shadow-[0_2px_8px_rgba(44,30,22,0.18)] transition-transform duration-300 group-hover:scale-[1.03]">
            HB
          </span>
          <div className="truncate">
            <span className="block text-sm sm:text-[15px] font-semibold tracking-[-0.02em] text-[#1D1D1F] truncate">
              Humbert-Buquet
            </span>
            <span className="block text-[11px] text-[#6E6E73] tracking-[-0.01em] truncate">
              Droguerie · Metz, 1937
            </span>
          </div>
        </a>

        <nav aria-label="Navigation principale" className="flex items-center gap-5 sm:gap-8 shrink-0">
          <a
            href="#savoir-faire"
            className="text-xs sm:text-[13px] font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
          >
            Savoir-Faire
          </a>
          <a
            href="#infos-pratiques"
            className="hidden sm:inline-block text-[13px] font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors"
          >
            Infos Pratiques
          </a>
          <a
            href="#infos-pratiques"
            className="inline-flex items-center justify-center rounded-full bg-[#2C1E16]/[0.06] hover:bg-[#2C1E16] text-[#2C1E16] hover:text-[#FBFBF9] px-3.5 py-1.5 text-xs font-medium tracking-[-0.01em] transition-all duration-300"
          >
            En Fournirue
          </a>
        </nav>
      </div>
    </header>
  );
}
