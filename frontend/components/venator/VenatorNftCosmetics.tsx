"use client";

import React, { useState } from "react";
import { ArrowRightIcon } from "./VenatorIcons";
import { VerificationCardGraphic } from "./BlockCertArtwork";

export default function VenatorNftCosmetics() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Zero-Knowledge Student Privacy",
      subtitle:
        "Original diplomas and transcripts are hashed locally into a 64-character SHA-256 string. Your grade records remain 100% private and FERPA compliant.",
      id: "01",
    },
    {
      title: "Immutable Consensus Anchor",
      subtitle:
        "BlockCert writes the cryptographic fingerprint and student ID directly into the Ethereum contract with unalterable block timestamp verification.",
      id: "02",
    },
    {
      title: "Instant Global Verification",
      subtitle:
        "Employers, universities, and visa authorities verify diplomas in under 2 seconds by checking mathematical correspondence with zero intermediary fees.",
      id: "03",
    },
  ];

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const current = slides[activeSlide];

  return (
    <section id="features" className="relative w-full py-16 sm:py-24 px-4 sm:px-8 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-slate-500 mb-3">
            Tamper-Proof Architecture
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black tracking-tight uppercase">
            All About Cryptographic Proof
          </h2>
        </div>

        {/* Feature Showcase Card */}
        <div className="relative bg-white rounded-[32px] border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-12">
          {/* Top Graphic Banner with Yellow Accent */}
          <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 p-6 sm:p-10 flex items-center justify-center">
            <VerificationCardGraphic className="w-full max-w-2xl h-56 sm:h-72" />
          </div>

          {/* Content & Slider Navigation */}
          <div className="mt-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest">
                .{current.id} Architecture Pillar
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-black uppercase mt-1 tracking-tight">
                {current.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600 font-medium leading-relaxed">
                {current.subtitle}
              </p>
              <a href="#workstation" className="mt-4 inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-black hover:text-amber-500 transition">
                <span>Try Workstation</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center space-x-4 self-end md:self-auto bg-slate-100 p-2 rounded-2xl border border-slate-200">
              <span className="font-mono text-xs font-bold text-slate-700 px-3">
                {current.id} / 0{slides.length}
              </span>
              <div className="flex items-center space-x-1.5">
                <button
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-xl bg-white hover:bg-slate-200 text-slate-800 flex items-center justify-center transition shadow-sm active:scale-95 cursor-pointer"
                  aria-label="Previous slide"
                >
                  ◄
                </button>
                <button
                  onClick={handleNext}
                  className="w-9 h-9 rounded-xl bg-black hover:bg-slate-800 text-white flex items-center justify-center transition shadow-sm active:scale-95 cursor-pointer"
                  aria-label="Next slide"
                >
                  ►
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
