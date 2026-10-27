"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { useWallet } from "../context/WalletContext";
import {
  ShieldCheckIcon,
  WalletIcon,
  CopyIcon,
  CheckIcon,
  SparklesIcon,
  RefreshCwIcon,
} from "./Icons";

export default function Navbar() {
  const pathname = usePathname();
  const {
    account,
    balance,
    isConnected,
    isCorrectNetwork,
    isConnecting,
    connectWallet,
    switchNetwork,
    requestFaucet,
  } = useWallet();

  const [copied, setCopied] = useState(false);
  const [faucetLoading, setFaucetLoading] = useState(false);
  const [faucetMsg, setFaucetMsg] = useState<string | null>(null);

  const handleCopy = () => {
    if (!account) return;
    navigator.clipboard.writeText(account);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFaucetClick = async () => {
    try {
      setFaucetLoading(true);
      const res = await requestFaucet();
      setFaucetMsg(res.success ? "256 ETH Sent!" : "Faucet failed");
      setTimeout(() => setFaucetMsg(null), 3000);
    } catch {
      setFaucetMsg("Error");
      setTimeout(() => setFaucetMsg(null), 2500);
    } finally {
      setFaucetLoading(false);
    }
  };

  const navLinks = [
    { name: "Overview", href: "/" },
    { name: "Issue Certificate", href: "/upload" },
    { name: "Verify Credential", href: "/verify" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/80 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-purple-500 p-0.5 shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <ShieldCheckIcon className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-lg tracking-wider text-white">
                  BLOCK<span className="text-indigo-400">CERT</span>
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded">
                  PROTOCOL
                </span>
              </div>
              <p className="text-[10px] font-mono text-slate-400 tracking-tight hidden sm:block">
                Decentralized Credential Registry
              </p>
            </div>
          </Link>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center space-x-1 bg-slate-900/60 p-1.5 rounded-xl border border-slate-800/60">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-lg text-sm font-medium transition ${
                    isActive
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/70"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT CONTROLS: WALLET & FAUCET */}
          <div className="flex items-center space-x-2.5">
            {/* Quick Faucet Button */}
            <button
              onClick={handleFaucetClick}
              disabled={faucetLoading}
              title="Mint 256 test ETH to your connected account for gas"
              className="hidden lg:flex items-center space-x-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 transition cursor-pointer disabled:opacity-50"
            >
              {faucetLoading ? (
                <RefreshCwIcon className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <SparklesIcon className="w-3.5 h-3.5 text-emerald-400" />
              )}
              <span>{faucetMsg || "+256 Test ETH"}</span>
            </button>

            {/* Network Badge */}
            {isConnected && (
              <div>
                {isCorrectNetwork ? (
                  <div className="hidden sm:flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-[11px]">Hardhat (31337)</span>
                  </div>
                ) : (
                  <button
                    onClick={switchNetwork}
                    className="flex items-center space-x-1.5 px-2.5 py-1 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-medium transition animate-bounce"
                  >
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    <span>Switch to Localhost</span>
                  </button>
                )}
              </div>
            )}

            {/* Connect / Account Button */}
            {isConnected && account ? (
              <div className="flex items-center space-x-2 bg-slate-900 border border-slate-800 rounded-xl p-1 pr-2">
                {balance && (
                  <div className="hidden sm:block px-2 py-0.5 font-mono text-xs text-indigo-300 font-semibold bg-indigo-500/10 rounded-md">
                    {balance}
                  </div>
                )}
                <button
                  onClick={handleCopy}
                  className="flex items-center space-x-1.5 font-mono text-xs text-slate-200 hover:text-white px-2 py-1 rounded-lg hover:bg-slate-800 transition"
                  title="Click to copy full address"
                >
                  <span>
                    {account.slice(0, 6)}...{account.slice(-4)}
                  </span>
                  {copied ? (
                    <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <CopyIcon className="w-3.5 h-3.5 text-slate-400" />
                  )}
                </button>
              </div>
            ) : (
              <button
                onClick={connectWallet}
                disabled={isConnecting}
                className="flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:scale-95 shadow-md shadow-indigo-600/30 transition disabled:opacity-50 cursor-pointer"
              >
                <WalletIcon className="w-4 h-4" />
                <span>{isConnecting ? "Connecting..." : "Connect Wallet"}</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation Row */}
        <div className="flex md:hidden items-center justify-around py-2 border-t border-slate-800/60">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-medium px-3 py-1 rounded-md ${
                  isActive
                    ? "text-indigo-400 font-semibold bg-indigo-500/10"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
