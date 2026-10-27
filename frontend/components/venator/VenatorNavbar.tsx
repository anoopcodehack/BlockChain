"use client";

import React, { useState } from "react";
import Link from "next/link";
import { VenatorLogo, MenuIcon, DownloadIcon } from "./VenatorIcons";
import VenatorMenuModal from "./VenatorMenuModal";
import { useWallet } from "../../context/WalletContext";

export default function VenatorNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { account, isConnected, connectWallet, requestFaucet } = useWallet();
  const [faucetStatus, setFaucetStatus] = useState<string | null>(null);

  const handleFaucet = async () => {
    const res = await requestFaucet();
    setFaucetStatus(res.success ? "256 ETH Sent!" : "Error");
    setTimeout(() => setFaucetStatus(null), 3000);
  };

  return (
    <>
      <header className="relative w-full z-40">
        {/* Top Header Bar */}
        <div className="relative flex items-center justify-between px-4 sm:px-8 py-4 bg-white/95 backdrop-blur-md rounded-t-[28px] border-b border-slate-200 shadow-sm">
          {/* LEFT: Menu button (Rounded square with ≡) */}
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Toggle navigation menu"
            className="w-11 h-11 rounded-2xl bg-slate-100 hover:bg-slate-200 border border-slate-300/60 flex items-center justify-center text-slate-800 transition active:scale-95 cursor-pointer shadow-sm"
          >
            <MenuIcon className="w-5 h-5" />
          </button>

          {/* CENTER: Downward Trapezoid Drop Notch with Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-1 pointer-events-auto">
            <div
              className="relative px-6 pt-2 pb-2.5 bg-white border-b-2 border-x-2 border-slate-200/90 shadow-md flex items-center justify-center"
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 82% 100%, 18% 100%)",
                width: "110px",
                height: "52px",
              }}
            >
              <Link href="/" className="group" title="BlockCert Home">
                <VenatorLogo className="w-7 h-7 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>

          {/* RIGHT: Issue, Verify, Faucet, Connect Wallet */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            <Link
              href="/upload"
              className="text-xs sm:text-sm font-bold text-slate-700 hover:text-black transition hidden md:block uppercase tracking-wider"
            >
              Issue
            </Link>

            <Link
              href="/verify"
              className="text-xs sm:text-sm font-bold text-slate-700 hover:text-black transition hidden md:block uppercase tracking-wider"
            >
              Verify
            </Link>

            {/* Quick Testnet Faucet trigger */}
            <button
              onClick={handleFaucet}
              className="hidden lg:flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold bg-amber-400/10 text-amber-700 hover:bg-amber-400/20 border border-amber-400/30 transition cursor-pointer"
            >
              <span>{faucetStatus || "+256 ETH Faucet"}</span>
            </button>

            {/* Wallet Connect / Account button */}
            <button
              onClick={isConnected ? undefined : connectWallet}
              className="flex items-center space-x-2 px-4 sm:px-5 py-2.5 rounded-xl bg-black hover:bg-slate-800 text-white text-xs sm:text-sm font-bold shadow-md transition active:scale-95 cursor-pointer"
            >
              <DownloadIcon className="w-4 h-4 text-white" />
              <span>
                {isConnected && account
                  ? `${account.slice(0, 6)}...${account.slice(-4)}`
                  : "Connect Wallet"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay Menu */}
      <VenatorMenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
