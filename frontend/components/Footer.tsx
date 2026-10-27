import Link from "next/link";
import { ShieldCheckIcon, DatabaseIcon, LockIcon } from "./Icons";
import { CONTRACT_ADDRESS } from "../constants/contract";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* COL 1: Brand & Overview */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-lg bg-indigo-600 flex items-center justify-center">
                <ShieldCheckIcon className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-bold text-white text-sm tracking-wider">
                BLOCKCERT PROTOCOL
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Enterprise decentralized credential infrastructure. Academic records are anchored
              on Ethereum smart contracts via cryptographic SHA-256 digests, eliminating diploma fraud
              and enabling instant employer verification.
            </p>
            <div className="flex items-center space-x-4 pt-1 font-mono text-[11px] text-slate-500">
              <span className="flex items-center space-x-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Node: Hardhat EVM (31337)</span>
              </span>
              <span>•</span>
              <span>Ethers v6</span>
              <span>•</span>
              <span>Next.js 15</span>
            </div>
          </div>

          {/* COL 2: Applications */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
              dApp Interfaces
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-indigo-400 transition">
                  Protocol Overview
                </Link>
              </li>
              <li>
                <Link href="/upload" className="hover:text-indigo-400 transition">
                  Issue Certificate (Institutions)
                </Link>
              </li>
              <li>
                <Link href="/verify" className="hover:text-indigo-400 transition">
                  Verify Credential (Employers)
                </Link>
              </li>
            </ul>
          </div>

          {/* COL 3: Smart Contract Info */}
          <div>
            <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-3">
              On-Chain Contract
            </h4>
            <div className="space-y-2 text-[11px]">
              <div>
                <span className="text-slate-500 block">Registry Address:</span>
                <span className="font-mono text-indigo-400 break-all select-all">
                  {CONTRACT_ADDRESS}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400 pt-1">
                <LockIcon className="w-3.5 h-3.5 text-indigo-400" />
                <span>Byte-level SHA-256 Attestation</span>
              </div>
              <div className="flex items-center space-x-2 text-slate-400">
                <DatabaseIcon className="w-3.5 h-3.5 text-indigo-400" />
                <span>Tamper-Resistant Storage</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row items-center justify-between text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} BlockCert Protocol • Academic Credential Verification System</p>
          <p className="mt-2 sm:mt-0 font-mono">Zero-Knowledge Verification • FIPS 180-4 Compliant</p>
        </div>
      </div>
    </footer>
  );
}
