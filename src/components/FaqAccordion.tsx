import type { FaqItem } from "@/lib/types";

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-black/10 rounded-2xl border border-black/10">
      {items.map((item) => (
        <details key={item.q} className="group p-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-bold text-lord-black">
            <span>Q. {item.q}</span>
            <span className="shrink-0 text-lord-orange transition group-open:rotate-45">+</span>
          </summary>
          <p className="body-copy mt-3 text-base">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
