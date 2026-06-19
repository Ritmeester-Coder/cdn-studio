"use client";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <DesktopNav />
      </div>

      {/* Mobile Navigation */}
      <div className="block md:hidden">
        <MobileNav />
      </div>
    </>
  );
}
