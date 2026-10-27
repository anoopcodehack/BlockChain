import React from "react";

// Hero Battlefield Graphic with low-poly soldier, tank, watchtower, parachute drop boxes
export function HeroBattlefieldScene({ className = "w-full h-full" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Dynamic Sky Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#6495ED] via-[#87CEEB] to-[#C4A482]" />

      {/* Distant mountains / dunes */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 600">
        <defs>
          <linearGradient id="skyGlow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4A75A0" />
            <stop offset="50%" stopColor="#87B0D4" />
            <stop offset="85%" stopColor="#D4A774" />
            <stop offset="100%" stopColor="#8E6A4B" />
          </linearGradient>
          <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#7E7266" />
            <stop offset="100%" stopColor="#3E3832" />
          </linearGradient>
        </defs>

        <rect width="1200" height="600" fill="url(#skyGlow)" />

        {/* Distant Desert Hills (Low-Poly) */}
        <polygon points="0,320 220,240 460,310 700,210 950,290 1200,220 1200,600 0,600" fill="#B38F6B" opacity="0.6" />
        <polygon points="0,360 300,290 600,380 880,280 1200,340 1200,600 0,600" fill="#8F6A48" opacity="0.75" />

        {/* Clouds & Parachutes in the sky */}
        {/* Parachute 1 */}
        <g transform="translate(540, 60)">
          <path d="M 0 50 Q 60 -10 120 50 Z" fill="#9C7A58" stroke="#3D2E1E" strokeWidth="2" />
          <path d="M 30 45 Q 60 5 90 45 Z" fill="#D3A775" />
          <line x1="10" y1="50" x2="60" y2="105" stroke="#222" strokeWidth="1.5" />
          <line x1="40" y1="46" x2="60" y2="105" stroke="#222" strokeWidth="1.5" />
          <line x1="80" y1="46" x2="60" y2="105" stroke="#222" strokeWidth="1.5" />
          <line x1="110" y1="50" x2="60" y2="105" stroke="#222" strokeWidth="1.5" />
          {/* Crate */}
          <rect x="46" y="105" width="28" height="26" fill="#6B533E" stroke="#2B1E12" strokeWidth="2" />
          <line x1="46" y1="105" x2="74" y2="131" stroke="#FACC15" strokeWidth="2" />
        </g>

        {/* Parachute 2 (Distant) */}
        <g transform="translate(860, 110) scale(0.6)">
          <path d="M 0 50 Q 50 0 100 50 Z" fill="#7A6044" />
          <line x1="5" y1="50" x2="50" y2="90" stroke="#333" strokeWidth="1" />
          <line x1="95" y1="50" x2="50" y2="90" stroke="#333" strokeWidth="1" />
          <rect x="40" y="90" width="20" height="18" fill="#523F2D" />
        </g>

        {/* Watchtower on Left */}
        <g transform="translate(180, 220)">
          {/* Wooden legs */}
          <line x1="40" y1="260" x2="60" y2="60" stroke="#8A6B48" strokeWidth="8" />
          <line x1="160" y1="260" x2="140" y2="60" stroke="#694F32" strokeWidth="8" />
          <line x1="45" y1="200" x2="155" y2="200" stroke="#7A5D3B" strokeWidth="6" />
          <line x1="50" y1="130" x2="150" y2="130" stroke="#7A5D3B" strokeWidth="6" />
          <line x1="45" y1="200" x2="150" y2="130" stroke="#5C452A" strokeWidth="4" />
          <line x1="155" y1="200" x2="50" y2="130" stroke="#5C452A" strokeWidth="4" />
          {/* Platform & roof */}
          <rect x="30" y="40" width="140" height="24" fill="#B08D63" stroke="#4A341E" strokeWidth="3" />
          <polygon points="10,40 100,-15 190,40" fill="#694F32" />
          {/* Spotlight pole */}
          <line x1="160" y1="40" x2="160" y2="-40" stroke="#333" strokeWidth="3" />
          <circle cx="160" cy="-40" r="10" fill="#FACC15" />
          <polygon points="160,-40 320,180 240,240" fill="#FEF08A" opacity="0.15" />
        </g>

        {/* Battle ground polygon */}
        <polygon points="0,420 400,430 800,410 1200,440 1200,600 0,600" fill="url(#groundGrad)" />

        {/* Military Tank on Right */}
        <g transform="translate(760, 340)">
          {/* Tank Treads */}
          <polygon points="20,130 180,130 195,110 5,110" fill="#2E2822" />
          <circle cx="35" cy="120" r="12" fill="#544B41" />
          <circle cx="65" cy="120" r="12" fill="#544B41" />
          <circle cx="95" cy="120" r="12" fill="#544B41" />
          <circle cx="125" cy="120" r="12" fill="#544B41" />
          <circle cx="155" cy="120" r="12" fill="#544B41" />
          {/* Tank Body (Low-poly faceted) */}
          <polygon points="25,110 175,110 160,70 40,70" fill="#8C7A58" />
          <polygon points="40,70 160,70 145,40 55,40" fill="#A8946E" />
          {/* Turret */}
          <polygon points="65,40 135,40 125,15 75,15" fill="#6D5E43" />
          {/* Cannon Barrel */}
          <line x1="65" y1="28" x2="-35" y2="10" stroke="#453B2B" strokeWidth="10" strokeLinecap="round" />
          {/* Orange muzzle flash / smoke spiral */}
          <circle cx="-45" cy="8" r="14" fill="#F97316" opacity="0.8" />
          <circle cx="-60" cy="2" r="22" fill="#FB923C" opacity="0.5" />
        </g>

        {/* Concrete Barrier with Yellow Stripes (Front Right) */}
        <g transform="translate(680, 460)">
          <polygon points="0,80 80,80 70,10 10,10" fill="#E2E8F0" stroke="#64748B" strokeWidth="2" />
          {/* Hazard stripes */}
          <polygon points="15,75 35,75 25,15 15,15" fill="#EAB308" />
          <polygon points="45,75 65,75 55,15 45,15" fill="#EAB308" />
        </g>

        {/* Low-Poly Tactical Soldier (Center Foreground) */}
        <g transform="translate(320, 380)">
          {/* Wooden barricade cover */}
          <polygon points="40,140 150,140 160,40 30,40" fill="#A16207" stroke="#451A03" strokeWidth="2" />
          <line x1="30" y1="75" x2="160" y2="75" stroke="#78350F" strokeWidth="3" />
          <line x1="30" y1="105" x2="160" y2="105" stroke="#78350F" strokeWidth="3" />
          {/* Red fuel barrel */}
          <rect x="165" y="60" width="35" height="50" rx="4" fill="#DC2626" stroke="#991B1B" strokeWidth="2" />
          <circle cx="182" cy="85" r="7" fill="white" />

          {/* Low Poly Soldier Body */}
          {/* Helmet */}
          <polygon points="10,0 35,-15 50,0 45,22 15,22" fill="#CBD5E1" />
          {/* Balaclava / Visor */}
          <rect x="18" y="10" width="25" height="8" fill="#1E293B" />
          {/* Tactical Vest */}
          <polygon points="0,22 60,22 55,75 5,75" fill="#3B82F6" opacity="0.85" />
          <rect x="10" y="32" width="40" height="35" fill="#94A3B8" />
          {/* Assault Rifle */}
          <polygon points="35,35 150,20 155,26 40,45" fill="#0F172A" />
          <rect x="80" y="24" width="25" height="4" fill="#475569" />
          <rect x="65" y="35" width="10" height="18" fill="#1E293B" />
        </g>
      </svg>
    </div>
  );
}

// Card 1: "Choose Your Stake" - Knight & Soldier
export function StakeCardGraphic({ className = "w-full h-44" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center bg-gradient-to-t from-slate-100 to-slate-50 overflow-hidden ${className}`}>
      <svg viewBox="0 0 320 200" className="w-full h-full">
        {/* Soft radial glow */}
        <circle cx="160" cy="110" r="90" fill="#E2E8F0" opacity="0.6" />

        {/* Character 1: Knight with Rocket Launcher (Left) */}
        <g transform="translate(80, 40)">
          {/* Knight Helmet */}
          <polygon points="30,10 50,0 70,10 65,40 35,40" fill="#94A3B8" stroke="#475569" strokeWidth="2" />
          <rect x="42" y="16" width="16" height="4" fill="#DC2626" />
          {/* Red Plume on helmet */}
          <path d="M 50 0 C 45 -15 20 -10 25 5 Z" fill="#EF4444" />
          {/* Armor body */}
          <polygon points="25,40 75,40 70,95 30,95" fill="#CBD5E1" stroke="#64748B" strokeWidth="2" />
          {/* Green Rocket Launcher tube */}
          <polygon points="-10,55 95,20 100,32 -5,67" fill="#15803D" stroke="#166534" strokeWidth="2" />
          <polygon points="95,15 115,22 105,38 85,30" fill="#EAB308" />
        </g>

        {/* Character 2: Soldier with Unicorn Headband & Ghillie (Right) */}
        <g transform="translate(150, 30)">
          {/* Pink unicorn horn */}
          <polygon points="48,5 53,-15 57,5" fill="#F472B6" />
          {/* Helmet with ears */}
          <polygon points="30,12 70,12 65,42 35,42" fill="#FBCFE8" stroke="#DB2777" strokeWidth="2" />
          <polygon points="28,2 35,12 25,12" fill="#F472B6" />
          <polygon points="72,2 75,12 65,12" fill="#F472B6" />
          {/* Tactical camo jacket */}
          <polygon points="20,42 80,42 75,100 25,100" fill="#65A30D" />
          <circle cx="40" cy="65" r="8" fill="#4D7C0F" />
          <circle cx="65" cy="80" r="10" fill="#365314" />
          {/* Rainbow camo assault rifle */}
          <polygon points="5,70 120,40 122,50 10,80" fill="#A855F7" stroke="#6B21A8" strokeWidth="2" />
          <rect x="45" y="52" width="20" height="6" fill="#FACC15" />
          <rect x="70" y="46" width="20" height="6" fill="#3B82F6" />
        </g>
      </svg>
    </div>
  );
}

// Card 2: "Earn by Skill" - Female Soldier with Target & Gold Coins
export function SkillCardGraphic({ className = "w-full h-44" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center bg-gradient-to-t from-slate-100 to-slate-50 overflow-hidden ${className}`}>
      <svg viewBox="0 0 320 200" className="w-full h-full">
        {/* Shooting Target in background */}
        <g transform="translate(180, 45)">
          <polygon points="20,10 60,10 55,80 25,80" fill="#334155" stroke="#1E293B" strokeWidth="2" />
          <circle cx="40" cy="35" r="14" fill="#DC2626" />
          <circle cx="40" cy="35" r="8" fill="white" />
          <circle cx="40" cy="35" r="3" fill="#DC2626" />
        </g>

        {/* Floating Golden Crypto Coins */}
        <g transform="translate(130, 30)">
          <ellipse cx="20" cy="20" rx="14" ry="10" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />
          <text x="17" y="24" fontSize="11" fontWeight="bold" fill="#713F12">$</text>
        </g>
        <g transform="translate(145, 65)">
          <ellipse cx="14" cy="14" rx="10" ry="7" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />
        </g>
        <g transform="translate(195, 20)">
          <ellipse cx="12" cy="12" rx="9" ry="6" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />
        </g>

        {/* Female Soldier with Ponytail & Camo */}
        <g transform="translate(80, 35)">
          {/* Ponytail hair */}
          <path d="M 55 20 Q 80 15 75 45 Z" fill="#92400E" />
          {/* Head */}
          <polygon points="35,15 58,15 54,42 32,42" fill="#FDE68A" />
          {/* Tactical headset */}
          <circle cx="56" cy="28" r="6" fill="#0F172A" />
          {/* Camo Uniform */}
          <polygon points="20,42 70,42 65,110 25,110" fill="#84CC16" stroke="#4D7C0F" strokeWidth="2" />
          <polygon points="30,60 45,50 50,70" fill="#4D7C0F" />
          <polygon points="45,80 60,70 65,95" fill="#365314" />
          {/* Aimed Rifle */}
          <polygon points="40,55 135,35 137,42 42,65" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
          {/* Medical Pack on back */}
          <rect x="5" y="55" width="22" height="30" rx="3" fill="#A16207" />
          <path d="M 16 64 v 12 M 10 70 h 12" stroke="white" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

// Card 3: "Claim Your Rewards" - Wooden Military Crate with Stacks of Cash and Weapon
export function RewardsCardGraphic({ className = "w-full h-44" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center bg-gradient-to-t from-slate-100 to-slate-50 overflow-hidden ${className}`}>
      <svg viewBox="0 0 320 200" className="w-full h-full">
        {/* Wooden Military Crate Base */}
        <g transform="translate(70, 75)">
          <polygon points="0,40 180,40 160,95 20,95" fill="#B45309" stroke="#78350F" strokeWidth="3" />
          <polygon points="20,95 160,95 150,110 30,110" fill="#78350F" />
          {/* Steel corner braces */}
          <polygon points="0,40 25,40 35,95 20,95" fill="#64748B" />
          <polygon points="180,40 155,40 145,95 160,95" fill="#64748B" />

          {/* Stacks of Stenciled Green Cash inside crate */}
          <g transform="translate(35, 10)">
            {/* Cash stack 1 */}
            <polygon points="0,20 45,10 65,22 20,32" fill="#22C55E" stroke="#15803D" strokeWidth="1.5" />
            <polygon points="0,25 45,15 65,27 20,37" fill="#16A34A" />
            {/* Currency paper band */}
            <polygon points="20,15 32,12 37,28 25,31" fill="#FACC15" />

            {/* Cash stack 2 */}
            <g transform="translate(45, -5)">
              <polygon points="0,20 45,10 65,22 20,32" fill="#22C55E" stroke="#15803D" strokeWidth="1.5" />
              <polygon points="0,25 45,15 65,27 20,37" fill="#16A34A" />
              <polygon points="20,15 32,12 37,28 25,31" fill="#FACC15" />
            </g>

            {/* Cash stack 3 */}
            <g transform="translate(18, -12)">
              <polygon points="0,20 45,10 65,22 20,32" fill="#4ADE80" stroke="#15803D" strokeWidth="1.5" />
              <polygon points="20,15 32,12 37,28 25,31" fill="#FEF08A" />
            </g>
          </g>

          {/* Golden Trophy / Medallions */}
          <circle cx="28" cy="25" r="10" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />
          <circle cx="152" cy="28" r="8" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />

          {/* Weapon Case resting across */}
          <polygon points="25,-2 155,-25 158,-5 28,18" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
          <line x1="30" y1="8" x2="155" y2="-15" stroke="#F97316" strokeWidth="3" />
        </g>
      </svg>
    </div>
  );
}

// "NFT Cosmetics" Yellow Badge Feature Graphic
export function NftCosmeticsGraphic({ className = "w-full h-56" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden ${className}`}>
      <svg viewBox="0 0 450 250" className="w-full h-full">
        {/* Dynamic Yellow Sci-Fi Angular Badge */}
        <polygon
          points="60,30 390,20 430,190 280,230 40,200"
          fill="#FACC15"
          stroke="#EAB308"
          strokeWidth="3"
        />

        {/* Stencil Grid Pattern in Yellow Badge */}
        <line x1="100" y1="30" x2="80" y2="200" stroke="#EAB308" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="200" y1="25" x2="180" y2="215" stroke="#EAB308" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="300" y1="22" x2="280" y2="225" stroke="#EAB308" strokeWidth="2" strokeDasharray="4 4" />

        {/* Character with Anime Wolf Mask (Left) */}
        <g transform="translate(110, 45)">
          {/* Teal wolf ears and fur */}
          <polygon points="25,0 45,-25 60,5" fill="#2DD4BF" />
          <polygon points="55,0 75,-25 90,5" fill="#2DD4BF" />
          {/* Face mask with teeth */}
          <polygon points="30,5 85,5 75,45 40,45" fill="#F43F5E" />
          <polygon points="40,30 48,42 56,30 64,42 72,30" fill="white" />
          {/* Anime Hair */}
          <polygon points="25,10 90,10 80,50 35,50" fill="#5EEAD4" />
          {/* Tactical camo jacket */}
          <polygon points="20,50 95,50 85,120 30,120" fill="#65A30D" />
          {/* Custom black/gold rifle */}
          <polygon points="10,80 150,45 155,55 15,92" fill="#18181B" stroke="#FACC15" strokeWidth="2" />
        </g>

        {/* Character with Tribal Spear & Explorer Hat (Right) */}
        <g transform="translate(240, 35)">
          {/* Long golden spear with feathers */}
          <line x1="20" y1="170" x2="110" y2="-15" stroke="#92400E" strokeWidth="6" strokeLinecap="round" />
          <polygon points="105,-15 125,-30 115,-5" fill="#FACC15" stroke="#CA8A04" strokeWidth="2" />
          <polygon points="90,10 80,30 95,25" fill="#EF4444" />
          <polygon points="85,25 75,45 90,40" fill="#3B82F6" />

          {/* Explorer Hat */}
          <ellipse cx="65" cy="30" rx="35" ry="12" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
          <polygon points="45,30 85,30 80,10 50,10" fill="#CBD5E1" />
          {/* White Beard Character */}
          <polygon points="48,32 82,32 65,70" fill="#F8FAFC" />
          {/* Tactical Body */}
          <polygon points="35,60 95,60 90,130 40,130" fill="#334155" />
          {/* Rainbow Assault Rifle */}
          <polygon points="20,95 130,65 132,75 22,107" fill="#6366F1" stroke="#A855F7" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}
