import React from "react";

const ACCENTS = ["#3B82F6", "#A855F7", "#EC4899"];

export default function BookingList({ bookings }) {
  return (
    <div
      className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-xl max-w-md
        shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
    >
      <div className="px-6 pt-5 pb-4">
        <p className="text-[11px] uppercase tracking-[0.2em] text-pink-300/80 mb-1">
          Confirmed
        </p>
        <h2
          className="text-2xl italic bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Bookings
        </h2>
      </div>

      {bookings.length === 0 && (
        <p className="px-6 pb-6 text-sm text-white/40">
          No bookings yet — reserve a room above.
        </p>
      )}

      <div className="divide-y divide-white/[0.08]">
        {bookings.map((b, i) => {
          const accent = ACCENTS[i % ACCENTS.length];
          return (
            <div key={b.id} className="flex items-center justify-between px-6 py-3">
              <div>
                <p className="text-white font-medium">{b.name}</p>
                <p className="text-[11px] uppercase tracking-[0.1em] text-white/40">
                  Guest
                </p>
              </div>
              <div className="text-right">
                <p
                  className="font-medium"
                  style={{ color: accent, fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  {b.time}
                </p>
                <p className="text-[11px] uppercase tracking-[0.1em] text-white/40">
                  Time
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}