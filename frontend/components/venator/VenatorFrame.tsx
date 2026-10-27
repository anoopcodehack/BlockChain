import React from "react";
import { VenatorLogo } from "./VenatorIcons";

interface FrameProps {
  children: React.ReactNode;
}

export default function VenatorFrame({ children }: FrameProps) {
  return (
    <div className="relative min-h-screen bg-[#0C0D10] text-slate-100 overflow-x-hidden selection:bg-amber-400 selection:text-black">
      {/* Carbon Texture Subtle Background Pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(#FACC15 1px, transparent 1px), radial-gradient(#FACC15 1px, #0C0D10 1px)`,
          backgroundSize: "24px 24px",
          backgroundPosition: "0 0, 12px 12px",
        }}
      />

      {/* TACTICAL YELLOW LEADER LINES & ANNOTATIONS (Outer Canvas) */}
      {/* Top Left Yellow Circuit Trace */}
      <div className="hidden xl:block fixed top-8 left-8 z-20 pointer-events-none">
        <svg width="220" height="120" viewBox="0 0 220 120" fill="none">
          <polyline
            points="0,30 140,30 190,80 190,120"
            stroke="#EAB308"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />
          <circle cx="0" cy="30" r="3" fill="#EAB308" />
        </svg>
      </div>

      {/* Top Right Technical Annotation */}
      <div className="hidden xl:block fixed top-8 right-12 z-20 max-w-xs text-right pointer-events-none">
        <p className="font-mono text-[11px] leading-relaxed text-slate-400 uppercase tracking-wider font-semibold">
          An exciting blockchain-based shooter that offers players the unique opportunity to earn cryptocurrency
        </p>
      </div>

      {/* Bottom Left Badge: "IN THE ULTIMATE SCI-FI SHOWDOWN" */}
      <div className="hidden xl:flex fixed bottom-8 left-10 z-20 items-center space-x-3 pointer-events-none">
        <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/40 p-1 flex items-center justify-center shadow-lg shadow-amber-400/10">
          <VenatorLogo className="w-8 h-8" color="#FACC15" />
        </div>
        <div>
          <span className="block font-black text-sm tracking-widest uppercase text-white font-mono">
            In The Ultimate
          </span>
          <span className="block font-black text-xs tracking-wider uppercase text-amber-400 font-mono">
            Sci-Fi Showdown
          </span>
        </div>
      </div>

      {/* Bottom Right Yellow Circuit Trace */}
      <div className="hidden xl:block fixed bottom-8 right-8 z-20 pointer-events-none">
        <svg width="220" height="120" viewBox="0 0 220 120" fill="none">
          <polyline
            points="220,90 80,90 30,40 30,0"
            stroke="#EAB308"
            strokeWidth="1.5"
            strokeDasharray="4 2"
          />
          <circle cx="220" cy="90" r="3" fill="#EAB308" />
        </svg>
      </div>

      {/* MAIN VIEWPORT CONTAINER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="w-full bg-white rounded-[32px] shadow-[0_24px_80px_rgba(0,0,0,0.8)] border border-slate-700/40 overflow-hidden flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
}
