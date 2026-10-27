import React from "react";

export function VenatorStencilLogo({ className = "w-full max-w-2xl h-auto" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 920 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]"
      >
        {/* LETTER V */}
        <g id="letter-V">
          <path
            d="M 20 20 L 75 20 L 110 115 L 145 20 L 200 20 L 138 160 L 82 160 Z"
            fill="white"
          />
          {/* Stencil horizontal cut */}
          <rect x="15" y="80" width="190" height="14" fill="#14171E" />
        </g>

        {/* LETTER E */}
        <g id="letter-E" transform="translate(195, 0)">
          <path
            d="M 30 20 L 135 20 L 135 55 L 75 55 L 75 75 L 125 75 L 125 105 L 75 105 L 75 125 L 135 125 L 135 160 L 30 160 Z"
            fill="white"
          />
          {/* Stencil cuts */}
          <rect x="25" y="80" width="60" height="14" fill="#14171E" />
          <polygon points="120,20 135,20 135,35" fill="#14171E" />
          <polygon points="120,160 135,160 135,145" fill="#14171E" />
        </g>

        {/* LETTER N */}
        <g id="letter-N" transform="translate(340, 0)">
          <path
            d="M 25 20 L 68 20 L 118 105 L 118 20 L 158 20 L 158 160 L 115 160 L 65 75 L 65 160 L 25 160 Z"
            fill="white"
          />
          {/* Stencil cuts */}
          <rect x="20" y="80" width="145" height="14" fill="#14171E" />
        </g>

        {/* LETTER A */}
        <g id="letter-A" transform="translate(505, 0)">
          <path
            d="M 50 160 L 95 20 L 140 160 L 102 160 L 95 130 L 70 130 L 62 160 Z M 77 100 L 95 50 L 103 100 Z"
            fill="white"
          />
          {/* Stencil horizontal cut */}
          <rect x="45" y="80" width="105" height="14" fill="#14171E" />
        </g>

        {/* LETTER T */}
        <g id="letter-T" transform="translate(635, 0)">
          <path
            d="M 25 20 L 135 20 L 135 55 L 102 55 L 102 160 L 58 160 L 58 55 L 25 55 Z"
            fill="white"
          />
          {/* Stencil cuts */}
          <rect x="20" y="80" width="120" height="14" fill="#14171E" />
        </g>

        {/* LETTER O */}
        <g id="letter-O" transform="translate(760, 0)">
          <path
            d="M 30 45 L 55 20 L 115 20 L 140 45 L 140 135 L 115 160 L 55 160 L 30 135 Z M 72 58 L 98 58 L 98 122 L 72 122 Z"
            fill="white"
          />
          {/* Stencil cuts */}
          <rect x="25" y="80" width="120" height="14" fill="#14171E" />
        </g>

        {/* LETTER R */}
        <g id="letter-R" transform="translate(895, 0)">
          <path
            d="M 30 20 L 110 20 C 135 20 145 35 145 60 C 145 78 135 90 115 95 L 145 160 L 100 160 L 75 105 L 70 105 L 70 160 L 30 160 Z M 70 52 L 100 52 C 108 52 112 56 112 62 C 112 68 108 72 100 72 L 70 72 Z"
            fill="white"
          />
          {/* Stencil cuts */}
          <rect x="25" y="80" width="125" height="14" fill="#14171E" />
        </g>
      </svg>
    </div>
  );
}
