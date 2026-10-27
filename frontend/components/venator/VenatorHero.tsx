"use client";

import React from "react";
import { BlockCertHeroScene } from "./BlockCertArtwork";
import { BlockCertStencilLogo } from "./BlockCertStencilLogo";
import { ChevronDownIcon } from "./VenatorIcons";

export default function VenatorHero() {
  const scrollToContent = () => {
    const el = document.getElementById("registry-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-slate-950 shadow-2xl">
      {/* Hero Container with Tactical Chamfered Bottom Edge */}
      <div
        className="relative w-full h-[480px] sm:h-[580px] lg:h-[680px] flex flex-col items-center justify-between py-10 px-4"
        style={{
          clipPath: "polygon(0% 0%, 100% 0%, 100% calc(100% - 32px), 92% 100%, 8% 100%, 0% calc(100% - 32px))",
        }}
      >
        {/* Futuristic Blockchain & Academic Credential Scene */}
        <BlockCertHeroScene className="absolute inset-0 w-full h-full object-cover pointer-events-none" />

        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none" />

        {/* Top Spacer */}
        <div className="w-full h-8 z-10" />

        {/* CENTER: Massive Stencil BLOCKCERT Logo */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 text-center my-auto">
          <BlockCertStencilLogo className="w-full max-w-4xl" />
          <p className="mt-4 font-mono text-xs sm:text-sm font-bold tracking-[0.3em] uppercase text-amber-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            Decentralized Academic Credential Verification System
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 font-medium max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            Permanent on-chain attestation powered by SHA-256 cryptographic hashing and Ethereum smart contracts.
          </p>
        </div>

        {/* BOTTOM: Scroll Down Prompt */}
        <div className="relative z-10 flex flex-col items-center justify-center pb-6">
          <button
            onClick={scrollToContent}
            className="flex flex-col items-center group cursor-pointer focus:outline-none"
          >
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-widest text-white uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:text-amber-400 transition">
              Scroll Down
            </span>
            <div className="w-6 h-6 text-white group-hover:text-amber-400 animate-bounce transition mt-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              <ChevronDownIcon className="w-6 h-6" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
