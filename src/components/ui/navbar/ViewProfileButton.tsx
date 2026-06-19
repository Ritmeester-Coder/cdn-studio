"use client";

import { ArrowRight } from "lucide-react";

type ViewProfileButtonProps = {
  fullWidth?: boolean;
  onClick?: () => void;
};

export default function ViewProfileButton({
  fullWidth = false,
  onClick,
}: ViewProfileButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        vp-button
        group
        flex
        h-11
        items-center
        justify-center
        gap-1.5
        rounded-2xl
        border
        border-white/10
        bg-blue-500
        px-6
        text-sm
        font-semibold
        text-white
        transition-all
        duration-300
        hover:bg-blue-600
        hover:shadow-lg
        hover:shadow-blue-500/20
        ${fullWidth ? "w-full" : ""}
      `}
    >
      <span>View My Work</span>

      <ArrowRight
        size={16}
        className="-ml-0.5 transition-transform duration-300 group-hover:translate-x-1"
      />
    </button>
  );
}
