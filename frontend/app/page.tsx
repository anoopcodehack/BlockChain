"use client";

import React from "react";
import VenatorNavbar from "../components/venator/VenatorNavbar";
import VenatorHero from "../components/venator/VenatorHero";
import VenatorJoinHunt from "../components/venator/VenatorJoinHunt";
import BlockCertWorkstation from "../components/venator/BlockCertWorkstation";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      {/* Centered Website Container Matching the Screen in Photo */}
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-8 flex-1 flex flex-col">
        <div className="w-full bg-white rounded-[32px] shadow-2xl overflow-hidden border border-slate-700/40 flex flex-col">
          {/* Top Navbar with Trapezoid Center Drop Notch */}
          <VenatorNavbar />

          {/* Hero Section with Notched Bottom Edge & Stencil Logo */}
          <VenatorHero />

          {/* 3-Card Section Matching Image 2 with Exact Headline & Typography */}
          <VenatorJoinHunt />

          {/* Working Issue & Verify Workstation */}
          <BlockCertWorkstation />

          {/* Clean Footer */}
          <footer className="w-full bg-slate-950 text-slate-400 py-8 px-6 text-center text-xs font-mono border-t border-slate-800">
            <p>© 2026 BLOCKCERT PROTOCOL • DECENTRALIZED ACADEMIC ATTESTATION &amp; VERIFICATION SYSTEM</p>
          </footer>
        </div>
      </div>
    </div>
  );
}
