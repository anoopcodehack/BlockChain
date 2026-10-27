"use client";

import React, { useState } from "react";

export default function VenatorFeatures() {
  const [activeTab, setActiveTab] = useState<"crypto" | "contract" | "verify">("crypto");

  const tabData = {
    crypto: {
      tagline: "Cryptographic Integrity! FIPS 180-4 SHA-256 byte-level hash computation.",
      items: [
        { name: "SHA-256 Digest (FIPS 180-4)", desc: "256-bit fixed output digest representing the exact binary contents of the certificate.", level: "High Security" },
        { name: "Keccak-256 EVM Storage", desc: "Native Ethereum hash storage mapping student IDs to verifiable record structs on-chain.", level: "Standard EVM" },
        { name: "Zero Data Leakage", desc: "Client-side mathematical hashing guarantees private academic records never leave your browser.", level: "Zero-Knowledge" },
      ],
    },
    contract: {
      tagline: "Immutable Smart Contract! Audited Solidity ledger running on Hardhat EVM.",
      items: [
        { name: "BlockCert.sol Registry", desc: "Gas-optimized smart contract deployed with issueCertificate and verifyCertificate functions.", level: "Solidity 0.8.21" },
        { name: "Block Timestamp Consensus", desc: "Mined block time permanently seals the exact moment academic credentials were validated.", level: "Immutable" },
        { name: "Local Hardhat (31337)", desc: "Zero gas costs during local testing with 10,000 pre-funded test ETH accounts.", level: "Localhost 8545" },
      ],
    },
    verify: {
      tagline: "Instant Fraud Detection! Detect counterfeits and altered grades in milliseconds.",
      items: [
        { name: "1-Byte Tamper Detection", desc: "Altering even a single period or character in the PDF changes the SHA-256 hash completely.", level: "Strict Match" },
        { name: "Direct Employer Validation", desc: "Corporate recruiters and university admissions verify authenticity without phone or email queues.", level: "< 1.5s Speed" },
        { name: "Zero Registrar Fees", desc: "Eliminates third-party verification middlemen and credential clearinghouse charges.", level: "100% Free" },
      ],
    },
  };

  const current = tabData[activeTab];

  return (
    <section id="features" className="relative w-full py-16 sm:py-24 px-4 sm:px-8 bg-white text-black border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-slate-500 mb-3">
            Core Protocol Features
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase">
            Endless Security, Infinite Trust!
          </h2>
        </div>

        {/* Tactical Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
            {(["crypto", "contract", "verify"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 sm:px-8 py-2.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider transition ${
                  activeTab === tab
                    ? "bg-black text-white shadow-md"
                    : "text-slate-600 hover:text-black hover:bg-slate-200/60"
                }`}
              >
                {tab === "crypto" ? "Cryptography" : tab === "contract" ? "Smart Contract" : "Verification"}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Tagline */}
        <p className="text-center text-sm sm:text-base font-semibold text-slate-700 max-w-2xl mx-auto mb-10">
          {current.tagline}
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {current.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:border-black transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-amber-400 text-black">
                  {item.level}
                </span>
                <span className="font-mono text-xs font-bold text-slate-400">
                  SPEC-0{idx + 1}
                </span>
              </div>
              <h3 className="text-xl font-black text-black tracking-tight mb-2 uppercase">
                {item.name}
              </h3>
              <p className="text-xs font-medium text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
