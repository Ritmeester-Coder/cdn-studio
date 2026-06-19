import { ReactNode } from "react";
import clsx from "clsx";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "pad-10 inline-flex items-center rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400",
        className,
      )}
    >
      {children}
    </span>
  );
}
