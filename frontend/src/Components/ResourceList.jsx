import React from "react";

//Different colors for selection of rooms
const ACCENTS = [
  { solid: "#3B82F6", glow: "rgba(59,130,246,0.45)" },
  { solid: "#A855F7", glow: "rgba(168,85,247,0.45)" },
  { solid: "#EC4899", glow: "rgba(236,72,153,0.45)" },
];

export default function ResourceList({ resources, selected, onSelect }) {
  return (
    <div className="mb-6">
      <div className="flex items-baseline gap-3 mb-4">
        <h2
          className="text-2xl italic bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Choose your room
        </h2>
        <span className="text-xs uppercase tracking-[0.2em] text-white/40">
          {resources.length} available
        </span>
      </div>

      <div className="flex gap-4 flex-wrap">
        {resources.map((item, i) => {
          const isSelected = selected && selected.id === item.id;
          const accent = ACCENTS[i % ACCENTS.length];

          return (
            <button
              key={item.id}
              onClick={() => onSelect(item)}
              style={
                isSelected
                  ? {
                      boxShadow: `0 0 0 1px ${accent.solid}66, 0 8px 30px ${accent.glow}`,
                    }
                  : undefined
              }
              className={`relative w-44 text-left rounded-xl overflow-hidden backdrop-blur-xl
                border transition-all duration-200
                ${
                  isSelected
                    ? "bg-white/[0.08] border-white/20 -translate-y-0.5"
                    : "bg-white/[0.04] border-white/10 hover:bg-white/[0.06] hover:-translate-y-0.5"
                }`}
            >
              <div
                className="h-1 w-full"
                style={{
                  background: isSelected ? accent.solid : "rgba(255,255,255,0.12)",
                }}
              />
              <div className="p-4">
                <p
                  className="text-lg italic mb-1 text-white"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {item.name}
                </p>
                <p
                  className="text-[11px] uppercase tracking-[0.15em]"
                  style={{ color: isSelected ? accent.solid : "rgba(255,255,255,0.4)" }}
                >
                  {item.type}
                </p>
              </div>

              {isSelected && (
                <span
                  className="absolute top-3 right-3 text-xs"
                  style={{ color: accent.solid }}
                >
                  ●
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}