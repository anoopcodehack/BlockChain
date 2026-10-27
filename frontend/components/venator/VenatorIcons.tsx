import React from "react";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

// Venator Shield Logo with "V" and crosshair dots
export function VenatorLogo({ className = "w-6 h-6", color = "#FACC15" }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Outer shield polygon */}
      <path
        d="M50 12 L82 24 L76 70 L50 88 L24 70 L18 24 Z"
        fill={color}
        stroke="#111"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Inner dark shield */}
      <path
        d="M50 20 L74 30 L69 66 L50 80 L31 66 L26 30 Z"
        fill="#0D0E12"
      />
      {/* Bold Cutout "V" */}
      <path
        d="M38 36 L45 36 L50 56 L55 36 L62 36 L54 68 L46 68 Z"
        fill={color}
      />
      {/* 4 Technical crosshair dots */}
      <circle cx="50" cy="8" r="3.5" fill={color} />
      <circle cx="50" cy="92" r="3.5" fill={color} />
      <circle cx="12" cy="50" r="3.5" fill={color} />
      <circle cx="88" cy="50" r="3.5" fill={color} />
    </svg>
  );
}

// Download Icon
export function DownloadIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 4v12m0 0l-4-4m4 4l4-4" />
    </svg>
  );
}

// Hamburger menu icon (3 horizontal lines)
export function MenuIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

// Close icon
export function CloseIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

// Eye show/hide icon for passwords
export function EyeIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  );
}

// Arrow right
export function ArrowRightIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  );
}

// Chevron Down
export function ChevronDownIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
