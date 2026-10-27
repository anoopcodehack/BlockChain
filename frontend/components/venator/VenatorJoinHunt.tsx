"use client";

import React from "react";
import Link from "next/link";
import {
  HashingCardGraphic,
  BlockchainAnchorGraphic,
  VerificationCardGraphic,
} from "./BlockCertArtwork";
import { ArrowRightIcon } from "./VenatorIcons";

export default function VenatorJoinHunt() {
  const cards = [
    {
      graphic: <HashingCardGraphic className="w-full h-48" />,
      title: "Cryptographic Hashing",
      description:
        "Every certificate is hashed client-side using FIPS 180-4 SHA-256. The original document never leaves your machine, ensuring strict student privacy.",
      linkText: "Issue Certificate",
      linkHref: "/upload",
    },
    {
      graphic: <BlockchainAnchorGraphic className="w-full h-48" />,
      title: "Immutable On-Chain Anchor",
      description:
        "Records are permanently minted into the Ethereum smart contract with tamper-resistant block timestamps, eliminating diploma mills.",
      linkText: "Verify Contract",
      linkHref: "#contract-info",
    },
    {
      graphic: <VerificationCardGraphic className="w-full h-48" />,
      title: "Zero-Knowledge Proof",
      description:
        "Employers and background checkers authenticate academic credentials in seconds by comparing mathematical byte correspondence.",
      linkText: "Verify Credential",
      linkHref: "/verify",
    },
  ];

  return (
    <section id="registry-section" className="relative w-full py-16 sm:py-24 px-4 sm:px-8 bg-white text-black">
      {/* SECTION HEADER - EXACT TYPOGRAPHY FROM SCREENSHOT */}
      <div className="max-w-4xl mx-auto text-center mb-16 sm:mb-20">
        <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-slate-500 mb-4">
          Decentralized Academic Trust
        </p>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] uppercase">
          <span className="block text-black">The Immutable-</span>
          <span className="block text-slate-300 font-extrabold">Anchored, Zero Fraud</span>
          <span className="block text-slate-300 font-extrabold">Credential System!</span>
        </h2>
      </div>

      {/* 3 FEATURE CARDS GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col justify-between bg-white rounded-[28px] border border-slate-200/90 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            {/* Top 3D Vector Graphic Container */}
            <div className="w-full overflow-hidden border-b border-slate-100 bg-slate-50/50">
              {card.graphic}
            </div>

            {/* Content Body */}
            <div className="p-7 sm:p-8 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-2xl font-black text-black tracking-tight mb-3 uppercase">
                  {card.title}
                </h3>
                <p className="text-sm font-medium text-slate-600 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={card.linkHref}
                  className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-black group-hover:text-amber-500 transition"
                >
                  <span>{card.linkText}</span>
                  <ArrowRightIcon className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition" />
                </Link>

                <span className="text-[10px] font-mono font-bold text-slate-400">
                  0{idx + 1}
                </span>
              </div>
            </div>

            {/* Tactical Bottom Cutout Accent */}
            <div className="h-2 w-full bg-slate-100 group-hover:bg-amber-400 transition" />
          </div>
        ))}
      </div>
    </section>
  );
}
