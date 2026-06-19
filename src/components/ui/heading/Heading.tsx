import { ReactNode } from "react";
import clsx from "clsx";

type HeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function Heading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: HeadingProps) {
  return (
    <div
      className={clsx(
        "space-y-4",
        align === "center" && "text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {title}
      </h2>

      {subtitle && (
        <p className="max-w-2xl text-lg leading-[1.1] text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
