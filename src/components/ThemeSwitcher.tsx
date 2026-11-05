"use client";

import { useState } from "react";
import { THEMES, useTheme } from "./ThemeContext";
import { Palette, Check, Sparkles, X } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, setTheme, config } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Changer le style et le thème du site"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full text-xs font-semibold shadow-2xl transition-all duration-300 active:scale-95 cursor-pointer border"
          style={{
            backgroundColor: "var(--accent-primary)",
            color: "var(--accent-contrast)",
            borderColor: "rgba(255, 255, 255, 0.2)",
            boxShadow: "0 10px 35px -5px rgba(0, 0, 0, 0.35)",
          }}
        >
          <Palette className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
          <span className="hidden sm:inline">Changer de Style :</span>
          <span className="font-bold underline decoration-white/30 underline-offset-2">
            {config.name}
          </span>
          <span
            className="w-2.5 h-2.5 rounded-full border border-white/40 ml-0.5"
            style={{ backgroundColor: config.accentColor }}
          />
        </button>
      </div>

      {/* Theme Drawer / Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-md transition-opacity">
          <div
            className="w-full sm:max-w-xl max-h-[90vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl p-6 sm:p-7 shadow-2xl border"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--border-color)",
              color: "var(--text-primary)",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b" style={{ borderColor: "var(--border-color)" }}>
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{
                    backgroundColor: "var(--accent-badge-bg)",
                    color: "var(--accent-badge)",
                  }}
                >
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold tracking-tight">
                    Choisissez une Ambiance de Présentation
                  </h3>
                  <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                    Cliquez pour transformer instantanément les polices, blocs, couleurs et textures.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:opacity-75 transition-opacity cursor-pointer"
                style={{ backgroundColor: "var(--bg-subtle)" }}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* List of 5 Distinct Themes */}
            <div className="space-y-3">
              {THEMES.map((t) => {
                const isSelected = t.id === theme;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => {
                      setTheme(t.id);
                      setIsOpen(false);
                    }}
                    className="w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-4 group"
                    style={{
                      backgroundColor: isSelected ? "var(--bg-subtle)" : "transparent",
                      borderColor: isSelected ? t.accentColor : "var(--border-color)",
                      boxShadow: isSelected ? "0 4px 18px rgba(0, 0, 0, 0.08)" : "none",
                    }}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      {/* Color Preview Swatch */}
                      <div
                        className="w-10 h-10 rounded-xl shrink-0 flex items-center justify-center shadow-inner border"
                        style={{
                          backgroundColor: t.previewBg,
                          borderColor: "rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <span
                          className="w-4 h-4 rounded-full border border-white/50"
                          style={{ backgroundColor: t.accentColor }}
                        />
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm tracking-tight">
                            {t.name}
                          </span>
                          <span
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: "var(--accent-badge-bg)",
                              color: "var(--accent-badge)",
                            }}
                          >
                            {t.badge}
                          </span>
                        </div>
                        <p className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
                          {t.subtitle}
                        </p>
                        <p className="text-[11px] truncate mt-0.5" style={{ color: "var(--text-muted)" }}>
                          {t.description}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 pl-2">
                      {isSelected ? (
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center text-white"
                          style={{ backgroundColor: t.accentColor }}
                        >
                          <Check className="w-3.5 h-3.5" strokeWidth={3} />
                        </div>
                      ) : (
                        <span
                          className="w-5 h-5 rounded-full border group-hover:scale-110 transition-transform block"
                          style={{ borderColor: "var(--border-color)" }}
                        />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Note on Mockup Switcher */}
            <p className="text-[11px] text-center mt-5" style={{ color: "var(--text-muted)" }}>
              💡 Permet de montrer au client les différentes identités de marque possibles pour sa droguerie.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
