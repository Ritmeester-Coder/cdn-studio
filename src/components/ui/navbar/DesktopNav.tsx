"use client";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import ViewProfileButton from "./ViewProfileButton";

export default function DesktopNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[72px] border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-full w-full items-center px-8 lg:px-12">
        {/* Left */}
        <div className="flex flex-1 items-center">
          <Logo />
        </div>

        {/* Center */}
        <div className="flex flex-1 justify-center">
          <NavLinks />
        </div>

        {/* Right */}
        <div className="flex flex-1 justify-end">
          <ViewProfileButton />
        </div>
      </div>
    </header>
  );
}
