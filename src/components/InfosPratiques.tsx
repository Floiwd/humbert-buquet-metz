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
      className="py-20 sm:py-28 lg:py-32 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Section Header */}
      <Reveal className="max-w-2xl mb-12 sm:mb-16 lg:mb-20">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-[#4A3326] mb-3">
          Infos Pratiques & Accès
        </p>
        <h2
          id="infos-heading"
          className="text-2xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-[-0.03em] text-[#1D1D1F] leading-[1.12] mb-3"
        >
          Venir à la droguerie au 33 En Fournirue.
        </h2>
        <p className="text-[15px] sm:text-base text-[#6E6E73] leading-relaxed">
          En plein cœur piéton et historique de Metz, entre la Cathédrale Saint-Étienne, la Place Saint-Jacques et la Place Saint-Louis.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Left Card: Address, Hours & Parking */}
        <Reveal className="lg:col-span-5 h-full">
          <div className="h-full rounded-3xl bg-white border border-[#1D1D1F]/[0.07] p-6 sm:p-8 lg:p-9 shadow-[0_4px_24px_rgba(28,25,23,0.03)] flex flex-col justify-between gap-7">
            <div className="space-y-6">
              {/* Address Block */}
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.06em] text-[#4A3326] mb-2">
                  <MapPin className="w-3.5 h-3.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                  <span>Adresse</span>
                </div>
                <p className="text-lg sm:text-xl font-semibold tracking-[-0.02em] text-[#1D1D1F]">
                  La Droguerie Humbert-Buquet
                </p>
                <p className="text-xs font-medium text-[#7C5836] mt-0.5">
                  La Droguerie de Metz · Gaëlle & Romain Buquet
                </p>
                <p className="text-sm sm:text-[15px] font-medium text-[#1D1D1F] mt-2">
                  33, En Fournirue — 57000 Metz
                </p>
                <p className="text-xs sm:text-sm text-[#6E6E73] mt-1 leading-relaxed">
                  Quartier historique · À 2 minutes à pied de la Cathédrale Saint-Étienne et de la Place Saint-Jacques.
                </p>
              </div>

              <hr className="border-[#1D1D1F]/[0.06]" />

              {/* Hours Block */}
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.06em] text-[#4A3326] mb-3">
                  <Clock className="w-3.5 h-3.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                  <span>Horaires d’ouverture</span>
                </div>

                <dl className="space-y-2.5 text-xs sm:text-[13px]">
                  {HOURS.map((row) => (
                    <div
                      key={row.day}
                      className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 py-2 border-b border-[#1D1D1F]/[0.05] last:border-none"
                    >
                      <dt className="font-medium text-[#1D1D1F]">{row.day}</dt>
                      <dd className="text-[#6E6E73] text-right font-normal tabular-nums">
                        {row.afternoon ? (
                          <span>
                            {row.morning} <span className="text-[#1D1D1F]/30 mx-0.5">·</span> {row.afternoon}
                          </span>
                        ) : (
                          <span className="text-[#6E6E73]/80">{row.morning}</span>
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <hr className="border-[#1D1D1F]/[0.06]" />

              {/* Parking & Access */}
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.06em] text-[#4A3326] mb-2">
                  <Car className="w-3.5 h-3.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                  <span>Stationnement & Accès</span>
                </div>
                <p className="text-xs sm:text-sm text-[#6E6E73] leading-relaxed">
                  Parkings couverts à moins de 3 minutes :{" "}
                  <strong className="font-medium text-[#1D1D1F]">Parking Saint-Jacques</strong>,{" "}
                  <strong className="font-medium text-[#1D1D1F]">Parking Cathédrale</strong> et{" "}
                  <strong className="font-medium text-[#1D1D1F]">Parking Coislin</strong>.
                </p>
              </div>
            </div>

            {/* Direct Contact / Directions Footer */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#1D1D1F]/[0.06]">
              <a
                href="tel:+33387366975"
                className="inline-flex items-center gap-2 rounded-full bg-[#F4F0EA] hover:bg-[#EAE3D8] px-4 py-2 text-xs sm:text-[13px] font-semibold text-[#2C1E16] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#4A3326] shrink-0" strokeWidth={1.75} aria-hidden="true" />
                <span>03 87 36 69 75</span>
              </a>

              <a
                href="https://maps.apple.com/?q=33+En+Fournirue+57000+Metz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-medium text-[#4A3326] hover:text-[#2C1E16] transition-colors"
              >
                <span>Itinéraire direct</span>
                <Navigation className="w-3.5 h-3.5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Right Card: Minimalist Apple Maps Design */}
        <Reveal delayMs={100} className="lg:col-span-7 h-full">
          <div className="relative h-full min-h-[380px] sm:min-h-[450px] rounded-3xl overflow-hidden border border-[#1D1D1F]/[0.08] bg-[#F2EFE9] shadow-[0_8px_32px_rgba(28,25,23,0.04)] flex flex-col justify-between p-4 sm:p-6">
            {/* Vector Apple Maps Background */}
            <svg
              viewBox="0 0 720 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Base Canvas */}
              <rect width="720" height="480" fill="#F2EFE9" />

              {/* Moselle River (North-West corner of Metz historic center) */}
              <path
                d="M-20 110 C 80 95, 160 55, 250 -20 L 140 -20 C 70 30, 10 60, -20 70 Z"
                fill="#C8E3F8"
              />
              <path
                d="M-20 110 C 80 95, 160 55, 250 -20"
                stroke="#B2D4F0"
                strokeWidth="2"
              />

              {/* Subtle Green Zones (Jardins / Squares) */}
              <rect x="115" y="135" width="76" height="54" rx="10" fill="#DFECE0" />
              <rect x="520" y="310" width="110" height="72" rx="14" fill="#DFECE0" />

              {/* Historic Urban Blocks of Metz Centre */}
              <rect x="215" y="78" width="135" height="90" rx="8" fill="#E6E1D8" />
              <rect x="378" y="72" width="150" height="96" rx="8" fill="#E6E1D8" />
              <rect x="554" y="84" width="130" height="86" rx="8" fill="#E6E1D8" />

              <rect x="86" y="218" width="118" height="106" rx="8" fill="#E6E1D8" />
              <rect x="232" y="206" width="156" height="112" rx="8" fill="#E4DED4" />
              <rect x="414" y="206" width="146" height="92" rx="8" fill="#E6E1D8" />
              <rect x="584" y="202" width="112" height="92" rx="8" fill="#E6E1D8" />

              <rect x="104" y="352" width="142" height="104" rx="8" fill="#E6E1D8" />
              <rect x="274" y="346" width="168" height="110" rx="8" fill="#E6E1D8" />

              {/* Cathédrale Saint-Étienne Architectural Footprint */}
              <path
                d="M235 104 H318 V124 H332 V142 H318 V158 H235 Z"
                fill="#D8D1C5"
                stroke="#C9C0B1"
                strokeWidth="1.5"
              />

              {/* Secondary Street Network Casing */}
              <g stroke="#DFD9CE" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round">
                <path d="M204 -10 L 222 490" />
                <path d="M398 -10 L 406 490" />
                <path d="M568 -10 L 548 490" />
                <path d="M-10 336 L 730 326" />
                <path d="M180 188 L 730 182" />
              </g>

              {/* Secondary Street Network Fill */}
              <g stroke="#FAF8F5" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
                <path d="M204 -10 L 222 490" />
                <path d="M398 -10 L 406 490" />
                <path d="M568 -10 L 548 490" />
                <path d="M-10 336 L 730 326" />
                <path d="M180 188 L 730 182" />
              </g>

              {/* Primary Historic Axis: EN FOURNIRUE (Highlighted Apple Maps Corridor) */}
              <path
                d="M-10 202 Q 210 190, 360 192 T 730 180"
                stroke="#D5CBBF"
                strokeWidth="22"
                strokeLinecap="round"
              />
              <path
                d="M-10 202 Q 210 190, 360 192 T 730 180"
                stroke="#FFFFFF"
                strokeWidth="17"
                strokeLinecap="round"
              />

              {/* Subtle Walking Route Dashed Line from Place d'Armes to 33 En Fournirue */}
              <path
                d="M286 158 L 286 191 L 368 192"
                stroke="#4A3326"
                strokeWidth="2.5"
                strokeDasharray="4 5"
                strokeLinecap="round"
              />
              <circle cx="286" cy="158" r="4" fill="#4A3326" />
            </svg>

            {/* Top Overlay: Apple Maps Header Pill */}
            <div className="relative z-10 flex items-center justify-between gap-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/85 backdrop-blur-md border border-[#1D1D1F]/[0.08] px-3 py-1.5 shadow-[0_2px_10px_rgba(0,0,0,0.04)] min-w-0">
                <span className="w-2 h-2 rounded-full bg-[#2C1E16] shrink-0" aria-hidden="true" />
                <span className="text-[11px] sm:text-xs font-medium text-[#1D1D1F] tracking-[-0.01em] truncate">
                  33 En Fournirue · Metz Centre
                </span>
              </div>

              <span className="rounded-full bg-white/80 backdrop-blur-md border border-[#1D1D1F]/[0.07] px-2.5 py-1 text-[11px] font-medium text-[#6E6E73] shrink-0">
                Apple Plans
              </span>
            </div>

            {/* Center Overlay: Neighboring Landmarks & Main Pin */}
            <div className="relative z-10 my-auto py-6 sm:py-8 flex flex-col items-center justify-center">
              {/* Nearby Landmark Label (Cathédrale) */}
              <div className="self-start ml-1 sm:ml-10 mb-2.5 sm:mb-3 inline-flex items-center gap-1.5 rounded-full bg-[#FAF8F5]/92 border border-[#1D1D1F]/[0.07] px-2.5 py-1 text-[10px] sm:text-[11px] font-medium text-[#6E6E73] shadow-xs">
                <span>Cathédrale Saint-Étienne · 2 min</span>
              </div>

              {/* Apple Maps Popover Callout Card */}
              <div className="relative flex flex-col items-center w-full px-2">
                <div className="w-full max-w-[260px] sm:max-w-xs rounded-2xl bg-white/95 backdrop-blur-xl border border-[#1D1D1F]/[0.08] px-4 py-3 sm:px-5 sm:py-3.5 shadow-[0_16px_36px_-8px_rgba(28,25,23,0.14)] text-center">
                  <p className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.06em] text-[#7C5836]">
                    Maison fondée en 1937
                  </p>
                  <p className="text-sm sm:text-[15px] font-semibold text-[#1D1D1F] tracking-[-0.01em] mt-0.5">
                    La Droguerie Humbert-Buquet
                  </p>
                  <p className="text-xs text-[#6E6E73] mt-0.5">
                    33, En Fournirue · 57000 Metz
                  </p>
                </div>

                {/* Callout Pointer Triangle */}
                <div
                  className="w-3 h-3 bg-white border-r border-b border-[#1D1D1F]/[0.08] rotate-45 -mt-1.5 z-10"
                  aria-hidden="true"
                />

                {/* Apple Maps Pin Marker */}
                <div className="relative mt-1 flex items-center justify-center">
                  <span
                    className="absolute w-10 h-10 rounded-full bg-[#2C1E16]/15 animate-ping"
                    style={{ animationDuration: "3s" }}
                    aria-hidden="true"
                  />
                  <span className="relative w-8 h-8 rounded-full bg-[#2C1E16] border-2 border-white shadow-[0_4px_12px_rgba(44,30,22,0.35)] flex items-center justify-center text-[#FBFBF9]">
                    <MapPin className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                  </span>
                </div>
              </div>

              {/* Nearby Landmark Label (Place Saint-Jacques & Saint-Louis) */}
              <div className="self-end mr-1 sm:mr-10 mt-3 sm:mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#FAF8F5]/92 border border-[#1D1D1F]/[0.07] px-2.5 py-1 text-[10px] sm:text-[11px] font-medium text-[#6E6E73] shadow-xs">
                <span>Place Saint-Jacques · 2 min</span>
              </div>
            </div>

            {/* Bottom Overlay: Street Tag & Open in Maps CTA */}
            <div className="relative z-10 flex items-center justify-between gap-2">
              <span className="hidden sm:inline-block text-[11px] font-semibold tracking-[0.06em] uppercase text-[#4A3326] bg-white/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#1D1D1F]/[0.06]">
                Axe piéton · En Fournirue
              </span>

              <div className="flex items-center justify-end gap-2 w-full sm:w-auto">
                <a
                  href="https://maps.apple.com/?q=33+En+Fournirue+57000+Metz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-full bg-[#2C1E16] hover:bg-[#3E2B20] text-[#FBFBF9] px-4 py-2 text-xs font-medium shadow-[0_4px_14px_rgba(44,30,22,0.22)] transition-all whitespace-nowrap"
                >
                  <span>Ouvrir dans Plans</span>
                  <Navigation className="w-3 h-3 shrink-0" strokeWidth={2} aria-hidden="true" />
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Droguerie+Humbert-Buquet+33+En+Fournirue+57000+Metz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center rounded-full bg-white/90 hover:bg-white text-[#1D1D1F] border border-[#1D1D1F]/[0.08] px-3.5 py-2 text-xs font-medium transition-all whitespace-nowrap"
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
