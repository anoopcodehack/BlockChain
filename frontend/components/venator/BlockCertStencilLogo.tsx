import React from "react";

export function BlockCertStencilLogo({ className = "w-full max-w-4xl h-auto" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 1050 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-[0_12px_28px_rgba(0,0,0,0.85)]"
      >
        {/* LETTER B */}
        <g id="letter-B" transform="translate(15, 0)">
          <path
            d="M 20 20 L 75 20 C 95 20 105 32 105 48 C 105 60 98 70 85 75 C 100 80 110 92 110 112 C 110 135 95 160 70 160 L 20 160 Z M 55 52 L 70 52 C 78 52 82 56 82 62 C 82 68 78 72 70 72 L 55 72 Z M 55 105 L 72 105 C 80 105 85 110 85 118 C 85 126 80 130 72 130 L 55 130 Z"
            fill="white"
          />
          <rect x="15" y="80" width="105" height="14" fill="#111317" />
        </g>

        {/* LETTER L */}
        <g id="letter-L" transform="translate(135, 0)">
          <path
            d="M 25 20 L 65 20 L 65 125 L 115 125 L 115 160 L 25 160 Z"
            fill="white"
          />
          <rect x="20" y="80" width="50" height="14" fill="#111317" />
        </g>

        {/* LETTER O */}
        <g id="letter-O" transform="translate(250, 0)">
          <path
            d="M 25 45 L 50 20 L 105 20 L 130 45 L 130 135 L 105 160 L 50 160 L 25 135 Z M 65 58 L 90 58 L 90 122 L 65 122 Z"
            fill="white"
          />
          <rect x="20" y="80" width="115" height="14" fill="#111317" />
        </g>

        {/* LETTER C */}
        <g id="letter-C" transform="translate(385, 0)">
          <path
            d="M 120 48 L 95 20 L 45 20 L 20 48 L 20 132 L 45 160 L 95 160 L 120 132 L 85 132 L 65 125 L 58 115 L 58 65 L 65 55 L 85 48 Z"
            fill="white"
          />
          <rect x="15" y="80" width="50" height="14" fill="#111317" />
        </g>

        {/* LETTER K */}
        <g id="letter-K" transform="translate(510, 0)">
          <path
            d="M 20 20 L 60 20 L 60 75 L 95 20 L 140 20 L 85 85 L 145 160 L 95 160 L 60 105 L 60 160 L 20 160 Z"
            fill="white"
          />
          <rect x="15" y="80" width="50" height="14" fill="#111317" />
        </g>

        {/* LETTER C (Second) */}
        <g id="letter-C2" transform="translate(650, 0)">
          <path
            d="M 120 48 L 95 20 L 45 20 L 20 48 L 20 132 L 45 160 L 95 160 L 120 132 L 85 132 L 65 125 L 58 115 L 58 65 L 65 55 L 85 48 Z"
            fill="white"
          />
          <rect x="15" y="80" width="50" height="14" fill="#111317" />
        </g>

        {/* LETTER E */}
        <g id="letter-E" transform="translate(775, 0)">
          <path
            d="M 25 20 L 115 20 L 115 52 L 65 52 L 65 74 L 105 74 L 105 104 L 65 104 L 65 128 L 115 128 L 115 160 L 25 160 Z"
            fill="white"
          />
          <rect x="20" y="80" width="50" height="14" fill="#111317" />
        </g>

        {/* LETTER R */}
        <g id="letter-R" transform="translate(895, 0)">
          <path
            d="M 25 20 L 85 20 C 105 20 115 32 115 54 C 115 70 105 80 90 85 L 115 160 L 75 160 L 58 100 L 58 160 L 25 160 Z M 58 50 L 78 50 C 84 50 88 53 88 60 C 88 67 84 70 78 70 L 58 70 Z"
            fill="white"
          />
          <rect x="20" y="80" width="100" height="14" fill="#111317" />
        </g>

        {/* LETTER T */}
        <g id="letter-T" transform="translate(1015, 0)">
          <path
            d="M 15 20 L 105 20 L 105 52 L 78 52 L 78 160 L 42 160 L 42 52 L 15 52 Z"
            fill="white"
          />
          <rect x="10" y="80" width="98" height="14" fill="#111317" />
        </g>
      </svg>
    </div>
  );
}
