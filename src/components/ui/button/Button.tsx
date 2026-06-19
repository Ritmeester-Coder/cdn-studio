import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "group inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-blue-500/40",

        {
          "h-10 px-4 text-sm": size === "sm",
          "h-12 px-6 text-sm": size === "md",
          "h-14 px-8 text-base": size === "lg",

          "bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/20":
            variant === "primary",

          "bg-slate-800 text-white hover:bg-slate-700": variant === "secondary",

          "border border-slate-700 bg-transparent text-slate-300 hover:border-blue-500 hover:bg-blue-500 hover:text-white":
            variant === "outline",

          "bg-transparent text-slate-300 hover:bg-white/5 hover:text-white":
            variant === "ghost",

          "w-full": fullWidth,
        },

        className,
      )}
      {...props}
    >
      {leftIcon}

      <span>{children}</span>

      {rightIcon}
    </button>
  );
}
