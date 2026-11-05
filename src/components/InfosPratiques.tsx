import { MapPin, Clock, Navigation, Phone, Car } from "lucide-react";
import Reveal from "./Reveal";

const HOURS = [
  { day: "Mar, Mer, Ven, Sam", morning: "10h00 – 12h00", afternoon: "14h00 – 18h45" },
  { day: "Jeudi", morning: "10h00 – 12h15", afternoon: "14h00 – 18h45" },
  { day: "Dimanche & Lundi", morning: "Fermé", afternoon: "" },
] as const;

export default function InfosPratiques() {
  return (
    <section
      id="infos-pratiques"
      aria-labelledby="infos-heading"
      className="py-20 sm:py-28 lg:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 transition-colors duration-400"
    >
      {/* Section Header */}
      <Reveal className="max-w-2xl mb-12 sm:mb-16 lg:mb-20">
        <p
          className="text-xs font-semibold uppercase tracking-[0.08em] mb-3"
          style={{ color: "var(--accent-badge)" }}
        >
          Infos Pratiques & Accès
        </p>
        <h2
          id="infos-heading"
          className="text-2xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] leading-[1.12] mb-3"
          style={{ color: "var(--text-primary)" }}
        >
          Venir à la droguerie au 33 En Fournirue.
        </h2>
        <p
          className="text-[15px] sm:text-base leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          En plein cœur piéton et historique de Metz, entre la Cathédrale Saint-Étienne, la Place Saint-Jacques et la Place Saint-Louis.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Left Card: Address, Hours & Parking */}
        <Reveal className="lg:col-span-5 h-full">
          <div
            className="theme-card h-full rounded-3xl p-6 sm:p-8 lg:p-9 border shadow-xs flex flex-col justify-between gap-7 transition-all duration-300"
            style={{
              backgroundColor: "var(--bg-surface)",
              borderColor: "var(--border-color)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div className="space-y-6">
              {/* Address Block */}
              <div>
                <div
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.06em] mb-2"
                  style={{ color: "var(--accent-badge)" }}
                >
                  <MapPin className="w-3.5 h-3.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                  <span>Adresse</span>
                </div>
                <p
                  className="text-lg sm:text-xl font-semibold tracking-[-0.02em]"
                  style={{ color: "var(--text-primary)" }}
                >
                  La Droguerie Humbert-Buquet
                </p>
                <p
                  className="text-xs font-medium mt-0.5"
                  style={{ color: "var(--accent-badge)" }}
                >
                  La Droguerie de Metz · Gaëlle & Romain Buquet
                </p>
                <p
                  className="text-sm sm:text-[15px] font-medium mt-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  33, En Fournirue — 57000 Metz
                </p>
                <p
                  className="text-xs sm:text-sm mt-1 leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  Quartier historique · À 2 minutes à pied de la Cathédrale Saint-Étienne et de la Place Saint-Jacques.
                </p>
              </div>

              <hr style={{ borderColor: "var(--border-color)" }} />

              {/* Hours Block */}
              <div>
                <div
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.06em] mb-3"
                  style={{ color: "var(--accent-badge)" }}
                >
                  <Clock className="w-3.5 h-3.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                  <span>Horaires d’ouverture</span>
                </div>

                <dl className="space-y-2.5 text-xs sm:text-[13px]">
                  {HOURS.map((row) => (
                    <div
                      key={row.day}
                      className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 py-2 border-b last:border-none"
                      style={{ borderColor: "var(--border-color)" }}
                    >
                      <dt className="font-medium" style={{ color: "var(--text-primary)" }}>
                        {row.day}
                      </dt>
                      <dd className="text-right font-normal tabular-nums" style={{ color: "var(--text-secondary)" }}>
                        {row.afternoon ? (
                          <span>
                            {row.morning} <span className="opacity-40 mx-0.5">·</span> {row.afternoon}
                          </span>
                        ) : (
                          <span style={{ color: "var(--text-muted)" }}>{row.morning}</span>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <hr style={{ borderColor: "var(--border-color)" }} />

              {/* Parking & Access */}
              <div>
                <div
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.06em] mb-2"
                  style={{ color: "var(--accent-badge)" }}
                >
                  <Car className="w-3.5 h-3.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                  <span>Stationnement & Accès</span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  Parkings couverts à moins de 3 minutes :{" "}
                  <strong className="font-medium" style={{ color: "var(--text-primary)" }}>Parking Saint-Jacques</strong>,{" "}
                  <strong className="font-medium" style={{ color: "var(--text-primary)" }}>Parking Cathédrale</strong> et{" "}
                  <strong className="font-medium" style={{ color: "var(--text-primary)" }}>Parking Coislin</strong>.
                </p>
              </div>
            </div>

            {/* Direct Contact / Directions Footer */}
            <div
              className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t"
              style={{ borderColor: "var(--border-color)" }}
            >
              <a
                href="tel:+33387366975"
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs sm:text-[13px] font-semibold transition-all border"
                style={{
                  backgroundColor: "var(--accent-badge-bg)",
                  color: "var(--accent-badge)",
                  borderColor: "var(--border-color)",
                }}
              >
                <Phone className="w-3.5 h-3.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                <span>03 87 36 69 75</span>
              </a>

              <a
                href="https://maps.apple.com/?q=33+En+Fournirue+57000+Metz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold transition-colors"
                style={{ color: "var(--accent-primary)" }}
              >
                <span>Itinéraire direct</span>
                <Navigation className="w-3.5 h-3.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Right Card: Minimalist Apple Maps Design */}
        <Reveal delayMs={100} className="lg:col-span-7 h-full">
          <div
            className="theme-card relative h-full min-h-[380px] sm:min-h-[450px] rounded-3xl overflow-hidden border shadow-sm flex flex-col justify-between p-4 sm:p-6 transition-all duration-300"
            style={{
              backgroundColor: "var(--bg-subtle)",
              borderColor: "var(--border-color)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            {/* Vector Apple Maps Background */}
            <svg
              viewBox="0 0 720 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none opacity-85"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Base Canvas */}
              <rect width="720" height="480" fill="currentColor" className="text-stone-100 dark:text-stone-900" />

              {/* Moselle River */}
              <path
                d="M-20 110 C 80 95, 160 55, 250 -20 L 140 -20 C 70 30, 10 60, -20 70 Z"
                fill="#C8E3F8"
              />
              <path
                d="M-20 110 C 80 95, 160 55, 250 -20"
                stroke="#B2D4F0"
                strokeWidth="2"
              />

              {/* Subtle Green Zones */}
              <rect x="115" y="135" width="76" height="54" rx="10" fill="#DFECE0" opacity="0.7" />
              <rect x="520" y="310" width="110" height="72" rx="14" fill="#DFECE0" opacity="0.7" />

              {/* Urban Blocks */}
              <rect x="215" y="78" width="135" height="90" rx="8" fill="rgba(0,0,0,0.06)" />
              <rect x="378" y="72" width="150" height="96" rx="8" fill="rgba(0,0,0,0.06)" />
              <rect x="554" y="84" width="130" height="86" rx="8" fill="rgba(0,0,0,0.06)" />

              <rect x="86" y="218" width="118" height="106" rx="8" fill="rgba(0,0,0,0.06)" />
              <rect x="232" y="206" width="156" height="112" rx="8" fill="rgba(0,0,0,0.07)" />
              <rect x="414" y="206" width="146" height="92" rx="8" fill="rgba(0,0,0,0.06)" />
              <rect x="584" y="202" width="112" height="92" rx="8" fill="rgba(0,0,0,0.06)" />

              <rect x="104" y="352" width="142" height="104" rx="8" fill="rgba(0,0,0,0.06)" />
              <rect x="274" y="346" width="168" height="110" rx="8" fill="rgba(0,0,0,0.06)" />

              {/* Cathédrale footprint */}
              <path
                d="M235 104 H318 V124 H332 V142 H318 V158 H235 Z"
                fill="rgba(0,0,0,0.12)"
                stroke="rgba(0,0,0,0.2)"
                strokeWidth="1.5"
              />

              {/* Streets */}
              <g stroke="rgba(0,0,0,0.08)" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
                <path d="M204 -10 L 222 490" />
                <path d="M398 -10 L 406 490" />
                <path d="M568 -10 L 548 490" />
                <path d="M-10 336 L 730 326" />
                <path d="M180 188 L 730 182" />
              </g>

              {/* EN FOURNIRUE Corridor */}
              <path
                d="M-10 202 Q 210 190, 360 192 T 730 180"
                stroke="rgba(255,255,255,0.95)"
                strokeWidth="18"
                strokeLinecap="round"
              />

              {/* Walking line */}
              <path
                d="M286 158 L 286 191 L 368 192"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="4 5"
                strokeLinecap="round"
                className="text-amber-800"
              />
              <circle cx="286" cy="158" r="4" fill="currentColor" className="text-amber-800" />
            </svg>

            {/* Top Overlay */}
            <div className="relative z-10 flex items-center justify-between gap-2">
              <div
                className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 shadow-xs backdrop-blur-md"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border-color)",
                  color: "var(--text-primary)",
                }}
              >
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "var(--accent-badge)" }} />
                <span className="text-[11px] sm:text-xs font-semibold tracking-[-0.01em] truncate">
                  33 En Fournirue · Metz Centre
                </span>
              </div>

              <span
                className="rounded-full border px-2.5 py-1 text-[11px] font-medium backdrop-blur-md"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border-color)",
                  color: "var(--text-muted)",
                }}
              >
                Apple Plans
              </span>
            </div>

            {/* Center Overlay: Popover & Pin */}
            <div className="relative z-10 my-auto py-6 sm:py-8 flex flex-col items-center justify-center">
              <div
                className="self-start ml-1 sm:ml-10 mb-2.5 sm:mb-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] sm:text-[11px] font-medium shadow-xs backdrop-blur-md"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border-color)",
                  color: "var(--text-secondary)",
                }}
              >
                <span>Cathédrale Saint-Étienne · 2 min</span>
              </div>

              {/* Pin Callout */}
              <div className="relative flex flex-col items-center w-full px-2">
                <div
                  className="w-full max-w-[260px] sm:max-w-xs rounded-2xl border p-4 shadow-xl text-center backdrop-blur-xl"
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    borderColor: "var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                >
                  <p
                    className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.06em]"
                    style={{ color: "var(--accent-badge)" }}
                  >
                    Maison fondée en 1937
                  </p>
                  <p className="text-sm sm:text-[15px] font-bold tracking-[-0.01em] mt-0.5">
                    La Droguerie Humbert-Buquet
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "var(--text-muted)" }}>
                    33, En Fournirue · 57000 Metz
                  </p>
                </div>

                <div
                  className="w-3 h-3 rotate-45 -mt-1.5 z-10 border-r border-b"
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    borderColor: "var(--border-color)",
                  }}
                  aria-hidden="true"
                />

                <div className="relative mt-1 flex items-center justify-center">
                  <span
                    className="absolute w-10 h-10 rounded-full animate-ping opacity-25"
                    style={{ backgroundColor: "var(--accent-primary)", animationDuration: "3s" }}
                    aria-hidden="true"
                  />
                  <span
                    className="relative w-8 h-8 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white"
                    style={{ backgroundColor: "var(--accent-primary)" }}
                  >
                    <MapPin className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                  </span>
                </div>
              </div>

              <div
                className="self-end mr-1 sm:mr-10 mt-3 sm:mt-4 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] sm:text-[11px] font-medium shadow-xs backdrop-blur-md"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border-color)",
                  color: "var(--text-secondary)",
                }}
              >
                <span>Place Saint-Jacques · 2 min</span>
              </div>
            </div>

            {/* Bottom Overlay: Action buttons */}
            <div className="relative z-10 flex items-center justify-between gap-2">
              <span
                className="hidden sm:inline-block text-[11px] font-semibold tracking-[0.06em] uppercase px-3 py-1.5 rounded-full border backdrop-blur-md"
                style={{
                  backgroundColor: "var(--bg-surface)",
                  borderColor: "var(--border-color)",
                  color: "var(--accent-badge)",
                }}
              >
                33 En Fournirue · 57000 Metz
              </span>

              <div className="flex items-center justify-end gap-2 w-full sm:w-auto">
                <a
                  href="https://maps.apple.com/?q=33+En+Fournirue+57000+Metz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold shadow-md transition-all whitespace-nowrap"
                  style={{
                    backgroundColor: "var(--accent-primary)",
                    color: "var(--accent-contrast)",
                  }}
                >
                  <span>Ouvrir dans Plans</span>
                  <Navigation className="w-3 h-3 shrink-0" strokeWidth={2} aria-hidden="true" />
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Droguerie+Humbert-Buquet+33+En+Fournirue+57000+Metz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center rounded-full border px-3.5 py-2 text-xs font-medium transition-all whitespace-nowrap"
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    borderColor: "var(--border-color)",
                    color: "var(--text-primary)",
                  }}
                >
                  Google Maps
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
