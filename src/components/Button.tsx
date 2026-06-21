import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
}

export default function Button({ href, variant = "primary", children, className = "" }: ButtonProps) {
  const base = variant === "primary" ? "btn-primary" : "btn-secondary";
  return (
    <Link href={href} className={`${base} ${className}`}>
      {children}
    </Link>
  );
}
