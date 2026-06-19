import { ReactNode } from "react";
import clsx from "clsx";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        "rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300",
        "hover:border-blue-500/30 hover:bg-white/8 hover:shadow-xl hover:shadow-blue-500/5",
        className,
      )}
    >
      {children}
    </div>
  );
}
