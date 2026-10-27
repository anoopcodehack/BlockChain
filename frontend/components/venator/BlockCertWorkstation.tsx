"use client";

import React, { useState } from "react";
import { ethers } from "ethers";
import CryptoJS from "crypto-js";
import contractABI from "../../abi/BlockCert.json";
import { HashingCardGraphic } from "./BlockCertArtwork";
import { CONTRACT_ADDRESS, LOCAL_CHAIN_ID } from "../../constants/contract";
import { useWallet } from "../../context/WalletContext";

export default function BlockCertWorkstation() {
  // Issuance State
  const [issueFile, setIssueFile] = useState<File | null>(null);
  const [issueStudentId, setIssueStudentId] = useState("");
  const [issueStatus, setIssueStatus] = useState("");
  const [issueTxHash, setIssueTxHash] = useState("");
  const [issueHash, setIssueHash] = useState("");
  const [issueLoading, setIssueLoading] = useState(false);

  // Verification State
  const [verifyFile, setVerifyFile] = useState<File | null>(null);
  const [verifyStudentId, setVerifyStudentId] = useState("");
  const [verifyStatus, setVerifyStatus] = useState("");
  const [verifyResult, setVerifyResult] = useState<boolean | null>(null);
  const [verifyLoading, setVerifyLoading] = useState(false);

  const { account, isConnected, connectWallet, requestFaucet } = useWallet();
  const [faucetMsg, setFaucetMsg] = useState<string | null>(null);

  // Live File Hashing for Issue
  const handleIssueFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setIssueFile(file);
    if (file) {
      const buffer = await file.arrayBuffer();
      const wordArray = CryptoJS.lib.WordArray.create(buffer);
      const hash = CryptoJS.SHA256(wordArray).toString();
      setIssueHash(hash);
    } else {
      setIssueHash("");
    }
  };

  // Live File Hashing for Verify
  const handleVerifyFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setVerifyFile(file);
  };

  // Handle On-Chain Issuance
  const handleIssueSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!issueFile || !issueStudentId) {
      setIssueStatus("⚠️ Please select certificate file and enter Student ID.");
      return;
    }

    try {
      setIssueLoading(true);
      setIssueStatus("⚙️ Computing cryptographic SHA-256 digest...");

      const arrayBuffer = await issueFile.arrayBuffer();
      const wordArray = CryptoJS.lib.WordArray.create(arrayBuffer);
      const hash = CryptoJS.SHA256(wordArray).toString();
      setIssueHash(hash);

      if (typeof window === "undefined" || !(window as any).ethereum) {
        setIssueStatus("❌ MetaMask not detected. Please install extension.");
        setIssueLoading(false);
        return;
      }

      await (window as any).ethereum.request({ method: "eth_requestAccounts" });
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const network = await provider.getNetwork();

      if (network.chainId !== LOCAL_CHAIN_ID) {
        setIssueStatus("⚠️ Please switch MetaMask to Hardhat Local (Chain ID 31337).");
        setIssueLoading(false);
        return;
      }

      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, (contractABI as any).abi, signer);

      setIssueStatus("⏳ Submitting to Ethereum consensus...");
      const tx = await contract.issueCertificate(issueStudentId, hash);
      setIssueTxHash(tx.hash);
      setIssueStatus("⛏️ Mining transaction in block...");

      await tx.wait();
      setIssueStatus("✅ Certificate successfully anchored on blockchain!");
    } catch (err: any) {
      console.error(err);
      setIssueStatus(`❌ Issuance failed: ${err?.message || "Check terminal node"}`);
    } finally {
      setIssueLoading(false);
    }
  };

  // Handle On-Chain Verification
  const handleVerifySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!verifyFile || !verifyStudentId) {
      setVerifyStatus("⚠️ Please select certificate file and enter Student ID.");
      return;
    }

    try {
      setVerifyLoading(true);
      setVerifyResult(null);
      setVerifyStatus("⚙️ Computing SHA-256 digest of document...");

      const arrayBuffer = await verifyFile.arrayBuffer();
      const wordArray = CryptoJS.lib.WordArray.create(arrayBuffer);
      const hash = CryptoJS.SHA256(wordArray).toString();

      if (typeof window === "undefined" || !(window as any).ethereum) {
        setVerifyStatus("❌ MetaMask not detected.");
        setVerifyLoading(false);
        return;
      }

      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const network = await provider.getNetwork();

      if (network.chainId !== LOCAL_CHAIN_ID) {
        setVerifyStatus("⚠️ Please switch MetaMask to Hardhat Local (Chain ID 31337).");
        setVerifyLoading(false);
        return;
      }

      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, (contractABI as any).abi, signer);

      setVerifyStatus("🔍 Querying blockchain consensus record...");
      const isValid: boolean = await contract.verifyCertificate(verifyStudentId, hash);
      setVerifyResult(isValid);

      if (isValid) {
        setVerifyStatus("✅ Cryptographic match confirmed! Document is authentic.");
      } else {
        setVerifyStatus("❌ No matching record found or document has been tampered with.");
      }
    } catch (err: any) {
      console.error(err);
      setVerifyStatus(`❌ Verification error: ${err?.message || "Check console"}`);
      setVerifyResult(false);
    } finally {
      setVerifyLoading(false);
    }
  };

  const handleFaucet = async () => {
    const res = await requestFaucet();
    setFaucetMsg(res.message);
    setTimeout(() => setFaucetMsg(null), 4000);
  };

  return (
    <section id="workstation" className="relative w-full py-16 sm:py-24 px-4 sm:px-8 bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* ROW 1: "Issue Certificate" Card (Matching Image 4 Layout) */}
        <div className="bg-white rounded-[32px] border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Form Left */}
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-slate-500">
                  Authorized Issuance Workstation
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight uppercase">
                Issue Academic Certificate
              </h2>

              <p className="text-xs sm:text-sm font-medium text-slate-500 mt-2 mb-8 leading-relaxed">
                Hash graduation diplomas with SHA-256 and store them permanently into the Ethereum smart contract.
              </p>

              <form onSubmit={handleIssueSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                    Student ID / Credential Code
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. STU-2026-9041"
                    value={issueStudentId}
                    onChange={(e) => setIssueStudentId(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-1">
                    Certificate Document (PDF / Image)
                  </label>
                  <div className="relative border-2 border-dashed border-slate-300 rounded-xl p-4 text-center hover:border-black transition bg-slate-50">
                    <input
                      type="file"
                      onChange={handleIssueFileChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <p className="text-xs font-bold text-slate-800">
                      {issueFile ? issueFile.name : "Click or drag document here"}
                    </p>
                    <p className="text-[10px] text-slate-400 font-mono mt-0.5">
                      {issueFile ? `${(issueFile.size / 1024).toFixed(1)} KB` : "Calculates SHA-256 client-side"}
                    </p>
                  </div>
                </div>

                {issueHash && (
                  <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono">
                    <span className="text-[10px] font-bold text-slate-500 block uppercase">SHA-256 Digest:</span>
                    <span className="break-all font-semibold text-black select-all">{issueHash}</span>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={issueLoading}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-black hover:bg-slate-800 text-white font-bold text-sm tracking-wide transition active:scale-95 shadow-md cursor-pointer disabled:opacity-50"
                  >
                    <span>{issueLoading ? "Anchoring..." : "→ Record on Blockchain"}</span>
                  </button>
                </div>
              </form>

              {issueStatus && (
                <div className="mt-4 p-3 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold font-mono text-slate-800">
                  {issueStatus}
                </div>
              )}

              {issueTxHash && (
                <div className="mt-3 p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 break-all">
                  <span className="font-bold block uppercase">Tx Hash:</span>
                  <span>{issueTxHash}</span>
                </div>
              )}
            </div>

            {/* Right Graphic Preview Container */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 p-6 flex items-center justify-center">
              <HashingCardGraphic className="w-full h-72" />
            </div>
          </div>
        </div>

        {/* ROW 2: Verification Card + Network Telemetry (Matching Waitlist & Stats Cards from Image 4!) */}
        <div id="contract-info" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Verification Card */}
          <div className="lg:col-span-2 bg-white rounded-[28px] border border-slate-200 p-8 shadow-md">
            <h3 className="text-2xl font-black text-black uppercase tracking-tight mb-2">
              Instant Credential Verification
            </h3>
            <p className="text-xs text-slate-500 font-medium mb-6">
              Drop any student ID and certificate file to mathematically verify on-chain authenticity in seconds.
            </p>

            <form onSubmit={handleVerifySubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  placeholder="Student ID (e.g. STU-2026-9041)"
                  value={verifyStudentId}
                  onChange={(e) => setVerifyStudentId(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black"
                />

                <div className="relative border border-slate-200 rounded-xl px-4 py-3 bg-slate-50 flex items-center justify-between">
                  <input
                    type="file"
                    onChange={handleVerifyFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <span className="text-xs text-slate-600 truncate font-mono">
                    {verifyFile ? verifyFile.name : "Select document to verify"}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-400">Browse</span>
                </div>
              </div>

              <button
                type="submit"
                disabled={verifyLoading}
                className="px-8 py-3.5 rounded-xl bg-black hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition active:scale-95 cursor-pointer shadow-sm disabled:opacity-50"
              >
                <span>{verifyLoading ? "Querying..." : "→ Verify on Blockchain"}</span>
              </button>
            </form>

            {verifyStatus && (
              <div className="mt-4 p-3 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-slate-800">
                {verifyStatus}
              </div>
            )}

            {verifyResult !== null && (
              <div
                className={`mt-4 p-5 rounded-2xl text-center font-black text-base border-2 ${
                  verifyResult
                    ? "bg-emerald-50 text-emerald-800 border-emerald-500"
                    : "bg-rose-50 text-rose-800 border-rose-500"
                }`}
              >
                {verifyResult ? "VALID CERTIFICATE ✔" : "INVALID OR TAMPERED CERTIFICATE ✖"}
              </div>
            )}
          </div>

          {/* Network Activity & Contract Stats Card */}
          <div className="bg-white rounded-[28px] border border-slate-200 p-8 shadow-md flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-1">
                Blockchain Telemetry
              </p>
              <h4 className="text-lg font-black text-black uppercase tracking-tight">
                Consensus Ledger
              </h4>
            </div>

            <div className="space-y-3 my-4">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/60 font-mono">
                <span className="text-[10px] text-slate-500 uppercase block">Network</span>
                <span className="text-sm font-bold text-black">Hardhat Local (31337)</span>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/60 font-mono">
                <span className="text-[10px] text-slate-500 uppercase block">Smart Contract</span>
                <span className="text-xs font-bold text-indigo-600 break-all">{CONTRACT_ADDRESS}</span>
              </div>
            </div>

            <div>
              <button
                onClick={handleFaucet}
                className="w-full py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-black text-xs font-mono uppercase tracking-wider transition cursor-pointer shadow-sm"
              >
                + Claim 256 Test ETH
              </button>
              {faucetMsg && (
                <p className="text-[10px] font-mono text-center text-slate-600 mt-2 font-bold">{faucetMsg}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
