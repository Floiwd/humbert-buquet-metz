export default function Footer() {
  return (
    <footer
      className="border-t transition-colors duration-400"
      style={{
        backgroundColor: "var(--bg-canvas)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs">
        <div className="space-y-1">
          <p className="font-semibold tracking-[-0.01em]" style={{ color: "var(--text-primary)" }}>
            La Droguerie Humbert-Buquet · La Droguerie de Metz
          </p>
          <p style={{ color: "var(--text-muted)" }}>
            Maison familiale fondée en 1937 · 33, En Fournirue, 57000 Metz · Tél. 03 87 36 69 75
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2" style={{ color: "var(--text-secondary)" }}>
          <a href="#univers" className="hover:opacity-100 transition-opacity">
            Les 6 Univers
          </a>
          <a href="#diagnostic" className="hover:opacity-100 transition-opacity">
            Diagnostic
          </a>
          <a href="#histoire" className="hover:opacity-100 transition-opacity">
            Histoire (1937)
          </a>
          <a href="#avis" className="hover:opacity-100 transition-opacity">
            Avis Clients
          </a>
          <a href="#infos-pratiques" className="hover:opacity-100 transition-opacity">
            Horaires & Accès
          </a>
          <span className="hidden sm:inline opacity-30" aria-hidden="true">
            |
          </span>
          <span className="w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-none border-stone-200/40 opacity-70">
            © 1937–2026 Humbert-Buquet
          </span>
        </div>
      </div>
    </footer>
  );
}
