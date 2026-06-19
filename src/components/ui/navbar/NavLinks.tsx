"use client";

import Link from "next/link";
import { navigation } from "@/data/navigation";

type NavLinksProps = {
  mobile?: boolean;
  onNavigate?: () => void;
};

export default function NavLinks({
  mobile = false,
  onNavigate,
}: NavLinksProps) {
  if (mobile) {
    return (
      <nav>
        <ul className="space-y-8">
          {navigation.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                onClick={onNavigate}
                className="block text-xl font-medium tracking-wide text-slate-300 transition hover:text-blue-400"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  return (
    <nav>
      <ul className="flex items-center gap-10">
        {navigation.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="group relative text-sm font-medium tracking-wide text-slate-400 transition-colors duration-300 hover:text-white"
            >
              {item.label}

              <span className="absolute -bottom-1.5 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
