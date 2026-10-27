import React from "react";
import { VenatorLogo } from "./VenatorIcons";
import { CONTRACT_ADDRESS } from "../../constants/contract";

export default function VenatorCommunity() {
  const channels = [
    {
      title: "University Consortium",
      subtitle:
        "Connecting accredited colleges, universities, and polytechnics to standardize cryptographic diploma issuance on Ethereum.",
      link: "Consortium Portal →",
      badge: "Institutional",
    },
    {
      title: "Open Smart Contract",
      subtitle:
        `Audited BlockCert Solidity contract permanently deployed at ${CONTRACT_ADDRESS.slice(0, 10)}...${CONTRACT_ADDRESS.slice(-6)} on Hardhat EVM.`,
      link: "View Explorer →",
      badge: "Verified Code",
    },
    {
      title: "Employer Verification Hub",
      subtitle:
        "HR and background verification systems validating applicant degrees in under 2 seconds without centralized registrar fees.",
      link: "Enterprise API →",
      badge: "Zero-Latency",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 px-4 sm:px-8 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-amber-400 mb-3">
            BlockCert Ecosystem
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase text-white">
            Decentralized Credential Network
          </h2>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {channels.map((chan, idx) => (
            <div
              key={idx}
              className="bg-slate-950/80 rounded-[28px] border border-slate-800 p-8 flex flex-col justify-between hover:border-amber-400/80 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center">
                    <VenatorLogo className="w-6 h-6" color="#FACC15" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full bg-slate-800 text-slate-300">
                    {chan.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-black text-white tracking-tight uppercase mb-3">
                  {chan.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-medium leading-relaxed">
                  {chan.subtitle}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 group-hover:translate-x-1 transition-transform inline-flex items-center space-x-1.5">
                  <span>{chan.link}</span>
                </span>
                <span className="font-mono text-xs text-slate-600">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
