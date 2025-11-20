import Link from "next/link";
import { ReactNode } from "react";

type AccentButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
};

const styles: Record<NonNullable<AccentButtonProps["variant"]>, string> = {
  solid:
    "bg-accent text-slate-950 shadow-[0_16px_40px_-12px_rgba(255,169,40,0.35)] hover:shadow-[0_20px_60px_-18px_rgba(255,169,40,0.45)]",
  ghost:
    "bg-white/5 backdrop-blur-sm text-white border border-white/10 hover:border-white/30 hover:bg-white/8"
};

export function AccentButton({
  href,
  children,
  variant = "solid"
}: AccentButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
