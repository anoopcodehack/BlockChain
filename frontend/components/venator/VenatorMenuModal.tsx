"use client";

import React from "react";
import Link from "next/link";
import { CloseIcon, VenatorLogo } from "./VenatorIcons";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VenatorMenuModal({ isOpen, onClose }: MenuModalProps) {
  if (!isOpen) return null;

  const menuItems = [
    { label: "OVERVIEW", href: "/" },
    { label: "ISSUE CERTIFICATE", href: "/upload" },
    { label: "VERIFY CREDENTIAL", href: "/verify" },
    { label: "HOW IT WORKS", href: "#registry-section" },
    { label: "WORKSTATION", href: "#workstation" },
    { label: "SMART CONTRACT", href: "#contract-info" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md transition-all duration-300">
      <div className="relative w-full max-w-xl mx-4 bg-white text-black rounded-[32px] p-8 sm:p-12 shadow-2xl overflow-hidden border border-slate-200">
        {/* Header Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-slate-200">
          <div className="flex items-center space-x-2">
            <VenatorLogo className="w-6 h-6" color="#000" />
            <span className="font-mono font-bold text-sm tracking-wider uppercase">
              • BlockCert Protocol
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 flex items-center justify-center transition cursor-pointer text-slate-800"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Big Bold Menu Links */}
        <nav className="py-8 space-y-4">
          {menuItems.map((item) => (
            <div key={item.label}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block text-2xl sm:text-3xl font-black tracking-tight text-slate-900 hover:text-amber-500 hover:translate-x-2 transition-all duration-200 uppercase"
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        {/* Footer info */}
        <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500">
          <span>DECENTRALIZED ACADEMIC ATTESTATION</span>
          <span className="text-amber-500 font-bold">ETH LOCALHOST (31337)</span>
        </div>
      </div>
    </div>
  );
}
