import Link from "next/link";
import type { Breadcrumb } from "@/lib/types";

export default function Breadcrumbs({ items }: { items: Breadcrumb[] }) {
  return (
    <nav aria-label="breadcrumb" className="text-xs text-white/50">
      {items.map((item, index) => (
        <span key={item.href}>
          {index > 0 && <span className="mx-1.5">/</span>}
          {index === items.length - 1 ? (
            <span className="text-white/80">{item.name}</span>
          ) : (
            <Link href={item.href} className="hover:text-lord-orange">
              {item.name}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
