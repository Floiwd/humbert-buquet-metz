export default function Footer() {
  return (
    <footer className="border-t border-[#1D1D1F]/[0.06] bg-[#FBFBF9]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 text-xs text-[#6E6E73]">
        <div className="space-y-1">
          <p className="font-semibold text-[#1D1D1F] tracking-[-0.01em]">
            La Droguerie Humbert-Buquet · La Droguerie de Metz
          </p>
          <p>
            Maison familiale fondée en 1937 · 33, En Fournirue, 57000 Metz · Tél. 03 87 36 69 75
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          <a
            href="#univers"
            className="hover:text-[#1D1D1F] transition-colors"
          >
            Les 6 Univers
          </a>
          <a
            href="#diagnostic"
            className="hover:text-[#1D1D1F] transition-colors"
          >
            Diagnostic
          </a>
          <a
            href="#histoire"
            className="hover:text-[#1D1D1F] transition-colors"
          >
            Histoire (1937)
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
