import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-4 transition-all duration-300"
    >
      {/* CDN Monogram */}
      <svg
        width="46"
        height="46"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-all duration-500 group-hover:scale-105"
      >
        {/* C */}
        <path
          d="M65 18
             C55 10 40 10 28 18
             C12 30 12 70 28 82
             C40 90 55 90 65 82"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />

        {/* D */}
        <path
          d="M46 28
             V72
             H58
             C72 72 76 62 76 50
             C76 38 72 28 58 28
             Z"
          stroke="white"
          strokeWidth="6"
          fill="none"
        />

        {/* N */}
        <path
          d="M64 70
             V30
             L88 70
             V30"
          stroke="#3B82F6"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-all duration-500 group-hover:translate-x-1"
        />
      </svg>

      {/* Name */}
      <div className="hidden sm:flex flex-col leading-tight">
        <span className="text-sm font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-blue-400">
          Chris de Nysschen
        </span>

        <span className="text-xs text-slate-500">Senior Software Engineer</span>
      </div>
    </Link>
  );
}
