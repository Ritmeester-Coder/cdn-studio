import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-4 transition-all duration-300"
    >
      {/* Logo */}
      <div className="relative flex h-11 w-11 items-center justify-center">
        <svg
          width="42"
          height="42"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-500 ease-out group-hover:scale-105"
        >
          {/* C */}
          <path
            d="M65 18 C55 10 40 10 28 18 C12 30 12 70 28 82 C40 90 55 90 65 82"
            stroke="white"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />

          {/* D */}
          <path
            d="M46 28 V72 H58 C72 72 76 62 76 50 C76 38 72 28 58 28 Z"
            stroke="white"
            strokeWidth="6"
            fill="none"
          />

          {/* N */}
          <path
            d="M64 70 V30 L88 70 V30"
            stroke="#3B82F6"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-all duration-500 group-hover:translate-x-0.5"
          />
        </svg>
      </div>

      {/* Brand */}
      <div className="hidden sm:flex flex-col">
        <span className="text-sm font-semibold tracking-tight text-white">
          CDN Studio
        </span>

        <span className="text-xs text-slate-500">Engineering Studio</span>
      </div>
    </Link>
  );
}
