"use client";

import { useEffect } from "react";

import NavLinks from "./NavLinks";
import ViewProfileButton from "./ViewProfileButton";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function MobileDrawer({ open, onClose }: Props) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      {/* Backdrop */}

      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* Drawer */}

      <aside
        className={`fixed right-0 top-0 z-50 flex h-screen w-80 flex-col border-l border-white/10 bg-slate-950/95 backdrop-blur-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Spacer */}

        <div className="h-20" />

        {/* Navigation */}

        <div className="flex-1 px-8 fpl-20">
          <NavLinks mobile onNavigate={onClose} />
        </div>

        {/* Footer */}

        <div className="border-t border-white/10 p-8">
          <ViewProfileButton fullWidth onClick={onClose} />
        </div>
      </aside>
    </>
  );
}
