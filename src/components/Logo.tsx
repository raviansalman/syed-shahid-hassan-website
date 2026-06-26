import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <svg
        width="42"
        height="46"
        viewBox="0 0 44 48"
        fill="none"
        className="flex-shrink-0 drop-shadow-[0_4px_10px_rgba(11,31,69,0.35)] group-hover:drop-shadow-[0_4px_14px_rgba(37,99,235,0.5)] transition-all"
      >
        <defs>
          <linearGradient id="shieldFill" x1="0" y1="0" x2="44" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#2563EB" />
            <stop offset="1" stopColor="#0B1F45" />
          </linearGradient>
          <linearGradient id="shieldRing" x1="0" y1="0" x2="44" y2="48" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#67E8F9" />
            <stop offset="1" stopColor="#2563EB" />
          </linearGradient>
        </defs>

        {/* Shield / badge silhouette */}
        <path
          d="M22 1.5L41.5 8V23.5C41.5 34.5 33 43 22 46.5C11 43 2.5 34.5 2.5 23.5V8L22 1.5Z"
          fill="url(#shieldFill)"
          stroke="url(#shieldRing)"
          strokeWidth="1.4"
        />

        {/* Top star accent (law-enforcement motif) */}
        <path
          d="M22 9.2L23.4 12.3L26.7 12.6L24.2 14.8L25 18L22 16.2L19 18L19.8 14.8L17.3 12.6L20.6 12.3L22 9.2Z"
          fill="#67E8F9"
        />

        {/* Monogram */}
        <text
          x="22"
          y="31"
          textAnchor="middle"
          fontFamily="var(--font-playfair), Georgia, serif"
          fontSize="11.5"
          fontWeight="700"
          fill="#FFFFFF"
          letterSpacing="0.5"
        >
          SSH
        </text>

        {/* Circuit trace accent (cybercrime motif) */}
        <path
          d="M9 36.5H16L18.5 39H25.5L28 36.5H35"
          stroke="#67E8F9"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />
        <circle cx="9" cy="36.5" r="1.3" fill="#67E8F9" />
        <circle cx="35" cy="36.5" r="1.3" fill="#67E8F9" />
      </svg>

      <span className="flex flex-col leading-none">
        <span
          className={`font-serif text-lg tracking-tight ${light ? "text-cream" : "text-navy"}`}
        >
          Syed Shahid Hassan
        </span>
        <span className="text-[10px] uppercase tracking-[0.18em] text-gold/80 font-medium">
          FIA &middot; Mentor &middot; Advisor
        </span>
      </span>
    </Link>
  );
}
