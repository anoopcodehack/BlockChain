"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ethers } from "ethers";
import CryptoJS from "crypto-js";
import contractABI from "../../abi/BlockCert.json";
import { useWallet } from "../../context/WalletContext";
import { CONTRACT_ADDRESS } from "../../constants/contract";
import { ShieldCheckIcon, UploadCloudIcon, ArrowRightIcon } from "../../components/Icons";

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [studentId, setStudentId] = useState("");
  const [status, setStatus] = useState("");
  const [txHash, setTxHash] = useState("");
  const [computedHash, setComputedHash] = useState("");
  const [loading, setLoading] = useState(false);

  const { account, isConnected, connectWallet, switchNetwork, isCorrectNetwork, requestFaucet } = useWallet();

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

  const handleUpload = async () => {
    if (!file || !studentId) {
      setStatus("⚠️ Please select a file and enter a Student / Hunter ID.");
      return;
    }

    try {
      setLoading(true);
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

      await (window as any).ethereum.request({
        method: "eth_requestAccounts",
      });

      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const network = await provider.getNetwork();

      if (network.chainId !== 31337n) {
        setStatus("⚠️ Please switch your wallet to Hardhat Local network (Chain ID 31337).");
        setLoading(false);
        return;
      }

      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, (contractABI as any).abi, signer);

      setStatus("⏳ Submitting transaction to Ethereum consensus...");

      const tx = await contract.issueCertificate(studentId, hash);
      setTxHash(tx.hash);
      setStatus("⛏️ Mining transaction in block...");

      await tx.wait();
      setStatus("✅ Certificate / Asset permanently anchored on blockchain!");
    } catch (err: any) {
      console.error(err);
      setStatus(`❌ Transaction failed: ${err?.message || "Check terminal / console"}`);
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
            <Link href="/verify" className="text-sm font-semibold text-indigo-600 hover:underline">
              Go to Verify →
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-12 flex-1 w-full flex items-center justify-center">
        <div className="w-full bg-white rounded-3xl border border-slate-200 shadow-xl p-8 sm:p-12">
          <div className="mb-8">
            <span className="inline-block px-3 py-1 rounded-md bg-indigo-50 border border-indigo-100 text-xs font-mono font-bold text-indigo-700 uppercase mb-3">
              Section 01 • Institutional Registry
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase mb-2">
              Issue Academic Certificate
            </h1>
            <p className="text-sm text-slate-600 font-medium">
              Anchor a graduation degree or transcript onto the Ethereum blockchain with a SHA-256 cryptographic digest.
            </p>
          </div>

          <form onSubmit={handleUpload} className="space-y-6">
            <div>
              <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-2">
                Student ID / Identifier
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
                Certificate Document (PDF / Image)
              </label>
              <div className="relative border-2 border-dashed border-slate-300 hover:border-indigo-500 rounded-xl p-6 text-center transition bg-slate-50">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <UploadCloudIcon className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
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
              className="w-full py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm uppercase tracking-wider transition active:scale-95 shadow-md cursor-pointer disabled:opacity-50"
            >
              {loading ? "Recording on Ethereum..." : "Record on Blockchain"}
            </button>
          </form>

          {status && (
            <div className="mt-6 p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800 text-center">
              {status}
            </div>
          )}

          {txHash && (
            <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 break-all">
              <span className="font-bold block uppercase mb-1">Transaction Hash:</span>
              <span>{txHash}</span>
            </div>
          )}

          <div className="mt-8 pt-6 border-t border-slate-200 text-center">
            <button
              onClick={async () => {
                const res = await requestFaucet();
                setStatus(res.message);
              }}
              className="text-xs font-mono font-bold text-slate-500 hover:text-slate-900 underline cursor-pointer"
            >
              Need test gas? Click here to get 256 ETH (Localhost only)
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
