import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className, ...props }: Props) {
  return (
    <button
      {...props}
      className={clsx(
        "rounded-xl bg-blue-500 px-6 py-3 font-medium transition-all duration-300",
        "hover:bg-blue-600 hover:scale-[1.03]",
        className,
      )}
    />
  );
}
