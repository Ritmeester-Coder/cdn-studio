"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Logo from "./Logo";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
      <div className="flex h-full w-full items-center">
        {/* LEFT */}
        <div className="flex flex-1 justify-start pl-10">
          <Logo />
        </div>

        {/* CENTER */}
        <nav className="hidden flex-1 justify-center md:flex">
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

        {/* RIGHT */}
        <div className="flex flex-1 justify-end pr-10">
          <button className="group flex h-10 items-center gap-2 rounded-xl border border-slate-700/80 bg-white/[0.03] px-5 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/20">
            Download CV
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
