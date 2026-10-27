"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ethers } from "ethers";
import CryptoJS from "crypto-js";
import contractABI from "../../abi/BlockCert.json";
import { CONTRACT_ADDRESS } from "../../constants/contract";
import { ShieldCheckIcon, SearchIcon, CheckCircleIcon, XCircleIcon } from "../../components/Icons";

export default function Verify() {
  const [file, setFile] = useState<File | null>(null);
  const [studentId, setStudentId] = useState("");
  const [status, setStatus] = useState("");
  const [computedHash, setComputedHash] = useState("");
  const [verified, setVerified] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files ? e.target.files[0] : null;
    setFile(selected);
    if (selected) {
      const buffer = await selected.arrayBuffer();
      const wordArray = CryptoJS.lib.WordArray.create(buffer);
      const hash = CryptoJS.SHA256(wordArray).toString();
      setComputedHash(hash);
    } else {
      setComputedHash("");
    }
  };

  const handleVerify = async () => {
    if (!file || !studentId) {
      setStatus("⚠️ Please select certificate file and enter Student ID.");
      return;
    }

    try {
      setLoading(true);
      setVerified(null);
      setStatus("⚙️ Generating SHA-256 cryptographic digest...");

      const arrayBuffer = await file.arrayBuffer();
      const wordArray = CryptoJS.lib.WordArray.create(arrayBuffer);
      const hash = CryptoJS.SHA256(wordArray).toString();
      setComputedHash(hash);

      if (typeof window === "undefined" || !(window as any).ethereum) {
        setStatus("❌ MetaMask extension not detected.");
        setLoading(false);
        return;
      }

      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const network = await provider.getNetwork();

      if (network.chainId !== 31337n) {
        setStatus("⚠️ Please switch to Hardhat Local (Chain ID 31337).");
        setLoading(false);
        return;
      }

      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, (contractABI as any).abi, signer);

      setStatus("🔍 Querying blockchain consensus record...");

      const isValid: boolean = await contract.verifyCertificate(studentId, hash);
      setVerified(isValid);

      if (isValid) {
        setStatus("✅ Cryptographic match confirmed on Ethereum ledger!");
      } else {
        setStatus("❌ No matching blockchain record found or hash mismatch.");
      }
    } catch (err: any) {
      console.error(err);
      setStatus(`❌ Verification error: ${err?.message || "Check console"}`);
      setVerified(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-md">
              <ShieldCheckIcon className="w-6 h-6 text-amber-400" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              BLOCK<span className="text-indigo-600">CERT</span>
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-slate-900">
              ← Back to Home
            </Link>
            <Link href="/upload" className="text-sm font-semibold text-indigo-600 hover:underline">
              Go to Issue →
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12 flex-1 w-full flex items-center justify-center">
        <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-12">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 rounded-md bg-emerald-50 border border-emerald-100 text-xs font-mono font-bold text-emerald-700 uppercase mb-3">
              Section 02 • Verification Portal
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase mb-2">
              Verify Academic Credential
            </h1>
            <p className="text-sm text-slate-600 font-medium">
              Validate any student diploma or transcript against the immutable blockchain registry in seconds.
            </p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); handleVerify(); }} className="space-y-6">
            <div>
              <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-2">
                Student ID to Verify
              </label>
              <input
                type="text"
                placeholder="e.g. STU-2026-9041"
                value={studentId}
                onChange={(e) => setStudentId(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-2">
                Certificate Document to Verify
              </label>
              <div className="relative border-2 border-dashed border-slate-300 hover:border-emerald-500 rounded-xl p-6 text-center transition bg-slate-50">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <SearchIcon className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                <p className="text-xs font-bold text-slate-800">
                  {file ? file.name : "Click or drag certificate document here"}
                </p>
                <p className="text-[10px] text-slate-400 font-mono mt-1">
                  {file ? `${(file.size / 1024).toFixed(1)} KB` : "Supports PDF, PNG, JPG, DOCX"}
                </p>
              </div>
            </div>

            {computedHash && (
              <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 font-mono text-xs">
                <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">
                  Computed SHA-256 Digest:
                </span>
                <span className="break-all font-semibold text-slate-900 select-all">{computedHash}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm uppercase tracking-wider transition active:scale-95 shadow-md cursor-pointer disabled:opacity-50"
            >
              {loading ? "Validating on Chain..." : "Verify on Blockchain"}
            </button>
          </form>

          {status && (
            <div className="mt-6 p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800 text-center">
              {status}
            </div>
          )}

          {verified !== null && (
            <div
              className={`mt-6 p-6 rounded-2xl text-center font-black text-xl border-2 flex items-center justify-center space-x-3 ${
                verified
                  ? "bg-emerald-50 text-emerald-800 border-emerald-500 shadow-lg shadow-emerald-500/10"
                  : "bg-rose-50 text-rose-800 border-rose-500 shadow-lg shadow-rose-500/10"
              }`}
            >
              {verified ? (
                <>
                  <CheckCircleIcon className="w-8 h-8 text-emerald-600" />
                  <span>VALID CERTIFICATE ✔</span>
                </>
              ) : (
                <>
                  <XCircleIcon className="w-8 h-8 text-rose-600" />
                  <span>INVALID OR TAMPERED CERTIFICATE ✖</span>
                </>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
