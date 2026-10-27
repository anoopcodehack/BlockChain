import React from "react";

// Hero Scene: Futuristic Blockchain & Academic Credential Network
export function BlockCertHeroScene({ className = "w-full h-full" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-[#1E1B4B] to-[#090D16]" />

      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 650">
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#818CF8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="blockGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#312E81" />
            <stop offset="100%" stopColor="#1E1B4B" />
          </linearGradient>
          <linearGradient id="goldSeal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FACC15" />
            <stop offset="100%" stopColor="#CA8A04" />
          </linearGradient>
        </defs>

        {/* Big Central Glow */}
        <circle cx="600" cy="320" r="380" fill="url(#nodeGlow)" />

        {/* Isometric Grid Lines */}
        <g stroke="#334155" strokeWidth="1" opacity="0.3">
          <line x1="0" y1="600" x2="600" y2="280" />
          <line x1="1200" y1="600" x2="600" y2="280" />
          <line x1="200" y1="650" x2="800" y2="280" />
          <line x1="1000" y1="650" x2="400" y2="280" />
          <line x1="0" y1="480" x2="1200" y2="480" />
          <line x1="0" y1="540" x2="1200" y2="540" />
        </g>

        {/* Linked Blockchain Blocks on Left */}
        <g transform="translate(180, 280)">
          {/* Block 1 */}
          <polygon points="40,20 90,0 140,20 90,40" fill="#4338CA" stroke="#6366F1" strokeWidth="2" />
          <polygon points="40,20 90,40 90,90 40,70" fill="#312E81" stroke="#6366F1" strokeWidth="2" />
          <polygon points="90,40 140,20 140,70 90,90" fill="#1E1B4B" stroke="#6366F1" strokeWidth="2" />
          <text x="70" y="65" fill="#A5B4FC" fontSize="10" fontFamily="monospace">#1024</text>

          {/* Golden Chain Link */}
          <line x1="140" y1="45" x2="200" y2="75" stroke="#FACC15" strokeWidth="4" strokeDasharray="6 3" />
          <circle cx="170" cy="60" r="5" fill="#FACC15" />

          {/* Block 2 */}
          <g transform="translate(160, 40)">
            <polygon points="40,20 90,0 140,20 90,40" fill="#4F46E5" stroke="#818CF8" strokeWidth="2" />
            <polygon points="40,20 90,40 90,90 40,70" fill="#3730A3" stroke="#818CF8" strokeWidth="2" />
            <polygon points="90,40 140,20 140,70 90,90" fill="#1E1B4B" stroke="#818CF8" strokeWidth="2" />
            <text x="70" y="65" fill="#C7D2FE" fontSize="10" fontFamily="monospace">#1025</text>
          </g>
        </g>

        {/* Linked Blockchain Blocks on Right */}
        <g transform="translate(820, 280)">
          <polygon points="40,20 90,0 140,20 90,40" fill="#4338CA" stroke="#6366F1" strokeWidth="2" />
          <polygon points="40,20 90,40 90,90 40,70" fill="#312E81" stroke="#6366F1" strokeWidth="2" />
          <polygon points="90,40 140,20 140,70 90,90" fill="#1E1B4B" stroke="#6366F1" strokeWidth="2" />
          <text x="70" y="65" fill="#A5B4FC" fontSize="10" fontFamily="monospace">#1026</text>

          {/* Golden Chain Link */}
          <line x1="40" y1="45" x2="-20" y2="75" stroke="#FACC15" strokeWidth="4" strokeDasharray="6 3" />
        </g>

        {/* Floating Academic Certificate in Center (Low-Poly 3D Isometric) */}
        <g transform="translate(510, 180)">
          {/* Certificate Diploma Sheet */}
          <polygon points="0,40 180,0 180,210 0,250" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="4" />
          {/* Top Header Banner on Diploma */}
          <polygon points="15,48 165,15 165,45 15,78" fill="#1E293B" />
          <text x="35" y="65" fill="white" fontSize="11" fontWeight="bold" fontFamily="sans-serif">BLOCKCERT DEGREE</text>

          {/* Certificate text lines */}
          <line x1="25" y1="95" x2="155" y2="65" stroke="#94A3B8" strokeWidth="3" />
          <line x1="25" y1="120" x2="140" y2="95" stroke="#94A3B8" strokeWidth="3" />
          <line x1="25" y1="145" x2="150" y2="120" stroke="#94A3B8" strokeWidth="3" />
          <line x1="25" y1="170" x2="110" y2="150" stroke="#94A3B8" strokeWidth="3" />

          {/* Golden Holographic Stamp Seal */}
          <circle cx="130" cy="175" r="22" fill="url(#goldSeal)" stroke="#713F12" strokeWidth="2" />
          <polygon points="130,162 135,172 145,173 137,180 140,190 130,184 120,190 123,180 115,173 125,172" fill="#FEF08A" />

          {/* Graduate Cap (Floating above) */}
          <g transform="translate(45, -45)">
            <polygon points="45,0 90,15 45,30 0,15" fill="#0F172A" />
            <polygon points="20,22 70,22 65,40 25,40" fill="#1E293B" />
            {/* Tassel */}
            <line x1="45" y1="15" x2="15" y2="28" stroke="#FACC15" strokeWidth="2" />
            <circle cx="15" cy="30" r="3" fill="#FACC15" />
          </g>
        </g>
      </svg>
    </div>
  );
}

// Feature Card 1: Client-Side SHA-256 Hashing
export function HashingCardGraphic({ className = "w-full h-44" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center bg-gradient-to-t from-slate-100 to-slate-50 overflow-hidden ${className}`}>
      <svg viewBox="0 0 320 200" className="w-full h-full">
        {/* Document with SHA256 code stream */}
        <g transform="translate(110, 30)">
          {/* Document Sheet */}
          <rect x="0" y="0" width="100" height="130" rx="8" fill="white" stroke="#CBD5E1" strokeWidth="2" />
          <rect x="15" y="15" width="70" height="8" rx="2" fill="#E2E8F0" />
          <rect x="15" y="30" width="50" height="6" rx="2" fill="#E2E8F0" />
          <rect x="15" y="42" width="60" height="6" rx="2" fill="#E2E8F0" />

          {/* SHA-256 Hash Box */}
          <rect x="10" y="65" width="80" height="32" rx="6" fill="#0F172A" />
          <text x="18" y="80" fill="#38BDF8" fontSize="9" fontFamily="monospace" fontWeight="bold">SHA-256</text>
          <text x="18" y="92" fill="#94A3B8" fontSize="7" fontFamily="monospace">e3b0c44298fc...</text>

          {/* Floating Gold Padlock */}
          <g transform="translate(68, 85)">
            <rect x="0" y="8" width="24" height="20" rx="4" fill="#FACC15" stroke="#CA8A04" strokeWidth="1.5" />
            <path d="M 5 8 L 5 4 C 5 -2 19 -2 19 4 L 19 8" fill="none" stroke="#CA8A04" strokeWidth="2.5" />
            <circle cx="12" cy="17" r="2.5" fill="#713F12" />
          </g>
        </g>
      </svg>
    </div>
  );
}

// Feature Card 2: Immutable Blockchain Anchor
export function BlockchainAnchorGraphic({ className = "w-full h-44" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center bg-gradient-to-t from-slate-100 to-slate-50 overflow-hidden ${className}`}>
      <svg viewBox="0 0 320 200" className="w-full h-full">
        {/* Linked Isometric Blocks */}
        <g transform="translate(50, 45)">
          {/* Block A */}
          <polygon points="40,20 80,0 120,20 80,40" fill="#6366F1" stroke="#4338CA" strokeWidth="2" />
          <polygon points="40,20 80,40 80,80 40,60" fill="#4F46E5" stroke="#4338CA" strokeWidth="2" />
          <polygon points="80,40 120,20 120,60 80,80" fill="#3730A3" stroke="#4338CA" strokeWidth="2" />
          <text x="55" y="55" fill="white" fontSize="9" fontFamily="monospace" fontWeight="bold">BLOCK</text>

          {/* Chain */}
          <line x1="120" y1="40" x2="160" y2="60" stroke="#FACC15" strokeWidth="5" strokeLinecap="round" />
          <circle cx="140" cy="50" r="4" fill="#CA8A04" />

          {/* Block B */}
          <g transform="translate(110, 30)">
            <polygon points="40,20 80,0 120,20 80,40" fill="#10B981" stroke="#059669" strokeWidth="2" />
            <polygon points="40,20 80,40 80,80 40,60" fill="#059669" stroke="#047857" strokeWidth="2" />
            <polygon points="80,40 120,20 120,60 80,80" fill="#047857" stroke="#065F46" strokeWidth="2" />
            <text x="55" y="55" fill="white" fontSize="9" fontFamily="monospace" fontWeight="bold">SMART</text>
          </g>
        </g>
      </svg>
    </div>
  );
}

// Feature Card 3: Instant Zero-Knowledge Verification
export function VerificationCardGraphic({ className = "w-full h-44" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center bg-gradient-to-t from-slate-100 to-slate-50 overflow-hidden ${className}`}>
      <svg viewBox="0 0 320 200" className="w-full h-full">
        {/* Verified Shield with Glowing Green Check */}
        <g transform="translate(110, 25)">
          {/* Certificate background */}
          <rect x="-15" y="10" width="130" height="110" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="2" />
          <line x1="-5" y1="30" x2="60" y2="30" stroke="#CBD5E1" strokeWidth="3" />
          <line x1="-5" y1="45" x2="45" y2="45" stroke="#CBD5E1" strokeWidth="3" />

          {/* Shield Badge */}
          <path
            d="M 50 15 L 85 28 L 78 75 L 50 95 L 22 75 L 15 28 Z"
            fill="#10B981"
            stroke="#059669"
            strokeWidth="3"
          />
          {/* Inner dark shield */}
          <path
            d="M 50 24 L 77 34 L 71 70 L 50 86 L 29 70 L 23 34 Z"
            fill="#064E3B"
          />
          {/* White Checkmark */}
          <path
            d="M 37 54 L 46 63 L 64 42"
            fill="none"
            stroke="white"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* VALID CERTIFICATE Pill Banner */}
          <rect x="-5" y="90" width="110" height="22" rx="4" fill="#ECFDF5" stroke="#10B981" strokeWidth="1.5" />
          <text x="8" y="105" fill="#047857" fontSize="9" fontWeight="bold" fontFamily="sans-serif">
            100% VERIFIED ✔
          </text>
        </g>
      </svg>
    </div>
  );
}
