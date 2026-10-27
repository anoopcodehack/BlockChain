"use client";

import React, { useState } from "react";
import { SkillCardGraphic } from "./VenatorArtwork";
import { EyeIcon, ArrowRightIcon } from "./VenatorIcons";

export default function VenatorAuthWaitlist() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCreateAccount = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !username) {
      setStatusMessage("Please fill in email and username");
      return;
    }
    setStatusMessage(`Hunter profile created for @${username}! Check your inbox.`);
    setTimeout(() => setStatusMessage(null), 4000);
  };

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistEmail) return;
    setStatusMessage(`@${waitlistEmail} added to priority beta access queue!`);
    setWaitlistEmail("");
    setTimeout(() => setStatusMessage(null), 4000);
  };

  return (
    <section id="signup" className="relative w-full py-16 sm:py-24 px-4 sm:px-8 bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* ROW 1: "Create Your Account" Card with Graphic */}
        <div className="bg-white rounded-[32px] border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Form Left */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight uppercase">
                Create Your Account
              </h2>
              <p className="text-xs sm:text-sm font-medium text-slate-500 mt-2 mb-8">
                Create your account and start earning by playing Venator or issuing academic credentials.
              </p>

              <form onSubmit={handleCreateAccount} className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Venator.game@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="User name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-black cursor-pointer"
                  >
                    <EyeIcon className="w-4 h-4" />
                  </button>
                </div>

                <div>
                  <input
                    type="password"
                    placeholder="Password Again"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between pt-4 gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-black hover:bg-slate-800 text-white font-bold text-sm tracking-wide flex items-center justify-center space-x-2 transition active:scale-95 shadow-md cursor-pointer"
                  >
                    <span>→ Create</span>
                  </button>

                  <p className="text-xs font-semibold text-slate-500">
                    Have an account?{" "}
                    <a href="#login" className="text-black font-bold hover:underline">
                      Log in
                    </a>
                  </p>
                </div>
              </form>

              {statusMessage && (
                <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold font-mono">
                  {statusMessage}
                </div>
              )}
            </div>

            {/* Right Graphic Preview Container */}
            <div className="relative w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-200/80 p-6 flex items-center justify-center">
              <SkillCardGraphic className="w-full h-72" />
            </div>
          </div>
        </div>

        {/* ROW 2: Waitlist Card + Stats Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Waitlist Card */}
          <div className="lg:col-span-2 bg-white rounded-[28px] border border-slate-200 p-8 shadow-md">
            <h3 className="text-2xl font-black text-black uppercase tracking-tight mb-2">
              Get a head start by joining our waitlist
            </h3>
            <p className="text-xs text-slate-500 font-medium mb-6">
              Simply drop your email below and expect a response from us within 1-5 days.
            </p>

            <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Venator.game@gmail.com"
                value={waitlistEmail}
                onChange={(e) => setWaitlistEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-black hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-1.5 transition active:scale-95 cursor-pointer shadow-sm"
              >
                <span>→ Send</span>
              </button>
            </form>
          </div>

          {/* Game Activity Stats Card */}
          <div className="bg-white rounded-[28px] border border-slate-200 p-8 shadow-md flex flex-col justify-between">
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400 mb-1">
                Live Network Activity
              </p>
              <h4 className="text-lg font-black text-black uppercase tracking-tight">
                Player Telemetry
              </h4>
            </div>

            <div className="grid grid-cols-2 gap-4 my-6">
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">Games</span>
                <span className="text-3xl font-black text-black font-mono">27</span>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/60">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">Wins</span>
                <span className="text-3xl font-black text-black font-mono">14</span>
              </div>
            </div>

            <div className="text-[11px] font-mono text-emerald-600 font-bold flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Smart Contract Verified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
