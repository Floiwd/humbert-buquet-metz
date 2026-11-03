export default function Footer() {
  return (
    <footer className="border-t border-[#1D1D1F]/[0.06] bg-[#FBFBF9]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs text-[#6E6E73]">
        <div className="space-y-1">
          <p className="font-semibold text-[#1D1D1F] tracking-[-0.01em]">
            La Droguerie Humbert-Buquet
          </p>
          <p>
            Maison familiale fondée en 1937 · En Fournirue, 57000 Metz
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          <a
            href="#savoir-faire"
            className="hover:text-[#1D1D1F] transition-colors"
          >
            Savoir-Faire
          </a>
          <a
            href="#infos-pratiques"
            className="hover:text-[#1D1D1F] transition-colors"
          >
            Horaires & Accès
          </a>
          <span className="text-[#1D1D1F]/20" aria-hidden="true">
            |
          </span>
          <span>© 1937–2026 Humbert-Buquet</span>
        </div>
      </div>
    </footer>
  );
}
