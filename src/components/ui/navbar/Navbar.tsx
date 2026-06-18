"use client";

import Logo from "./Logo";
import { navigation } from "@/data/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-white/5 bg-slate-950/80 backdrop-blur-2xl supports-[backdrop-filter]:bg-slate-950/70">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-8">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-12 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group relative text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-white"
            >
              {item.label}

              <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Download CV */}
        <button
          className="
            group
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-slate-700
            bg-transparent
            px-5
            py-2.5
            text-sm
            font-medium
            text-slate-300
            transition-all
            duration-300
            hover:border-blue-500
            hover:bg-blue-500
            hover:text-white
            hover:shadow-lg
            hover:shadow-blue-500/20
          "
        >
          Download CV
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>
    </header>
  );
}
