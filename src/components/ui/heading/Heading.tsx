import { ReactNode } from "react";
import clsx from "clsx";

type HeadingProps = {
  eyebrow?: string;
  title: ReactNode;
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
        "space-y-6",
        align === "center" && "text-center",
        className,
      )}
    >
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
          {eyebrow}
        </p>
      )}

      <h2
        className="
          text-4xl
          font-bold
          leading-[1.05]
          tracking-tight
          text-white
          sm:text-5xl
          lg:text-6xl
        "
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={clsx(
            "mx-auto max-w-2xl text-lg leading-8 text-slate-400",
            align === "left" && "mx-0",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
