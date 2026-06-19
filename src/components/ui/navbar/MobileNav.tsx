"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "./Logo";
import MobileDrawer from "./MobileDrawer";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
        <div className="flex h-full items-center justify-between px-6">
          <Logo />

          <button
            onClick={() => setOpen(!open)}
            className="fpr-12 rounded-xl p-2 text-slate-300 transition hover:bg-white/5 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
