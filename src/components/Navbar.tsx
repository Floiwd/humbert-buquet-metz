"use client";

import { useState } from "react";
import { Phone, Menu, X, MapPin } from "lucide-react";

const NAV_LINKS = [
  { href: "#savoir-faire", label: "Savoir-Faire" },
  { href: "#univers", label: "Les 6 Univers" },
  { href: "#diagnostic", label: "Diagnostic" },
  { href: "#histoire", label: "Histoire (1937)" },
  { href: "#infos-pratiques", label: "Infos & Accès" },
] as const;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FBFBF9]/85 backdrop-blur-xl border-b border-[#1D1D1F]/[0.06] transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Brand Identity */}
        <a
          href="#top"
          aria-label="La Droguerie Humbert-Buquet — Retour en haut"
          className="group flex items-center gap-2.5 sm:gap-3 min-w-0 focus:outline-none"
        >
          <span className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#2C1E16] text-[#FBFBF9] flex items-center justify-center text-xs font-semibold tracking-tight shrink-0 shadow-[0_2px_8px_rgba(44,30,22,0.18)] transition-transform duration-300 group-hover:scale-[1.03]">
            HB
          </span>
          <div className="min-w-0">
            <span className="block text-sm sm:text-[15px] font-semibold tracking-[-0.02em] text-[#1D1D1F] truncate">
              La Droguerie Humbert-Buquet
            </span>
            <span className="block text-[11px] text-[#6E6E73] tracking-[-0.01em] truncate">
              33 En Fournirue · Metz (1937)
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-6 shrink-0">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-[#6E6E73] hover:text-[#1D1D1F] transition-colors whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions (CTA + Mobile Toggle) */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#infos-pratiques"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#2C1E16] hover:bg-[#3E2B20] text-[#FBFBF9] px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-medium tracking-[-0.01em] transition-all duration-300 shadow-xs whitespace-nowrap"
          >
            <Phone className="w-3 h-3 text-[#D6C5B3] shrink-0" strokeWidth={2} aria-hidden="true" />
            <span className="hidden sm:inline">Nous trouver</span>
            <span className="sm:hidden">Accès</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="lg:hidden inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#1D1D1F]/[0.05] hover:bg-[#1D1D1F]/[0.1] text-[#1D1D1F] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
            ) : (
              <Menu className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Dropdown Menu */}
      {mobileMenuOpen ? (
        <div className="lg:hidden border-t border-[#1D1D1F]/[0.06] bg-[#FBFBF9]/95 backdrop-blur-xl px-4 sm:px-6 py-4 shadow-[0_12px_32px_rgba(28,25,23,0.06)]">
          <nav aria-label="Menu mobile" className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-sm font-medium text-[#1D1D1F] hover:bg-[#F4F0EA] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-[#1D1D1F]/[0.06] flex flex-wrap items-center justify-between gap-2 px-3 text-xs text-[#6E6E73]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#4A3326]" strokeWidth={1.75} aria-hidden="true" />
                33, En Fournirue — 57000 Metz
              </span>
              <a
                href="tel:+33387366975"
                className="font-semibold text-[#2C1E16]"
              >
                03 87 36 69 75
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
