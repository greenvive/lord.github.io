import type { SummaryRow } from "@/lib/types";

export default function SectionTable({ rows }: { rows: SummaryRow[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-black/10">
      <table className="w-full text-left text-sm">
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.label} className={index % 2 === 0 ? "bg-lord-cream/60" : "bg-white"}>
              <th scope="row" className="w-1/3 px-5 py-3 font-bold text-lord-black">
                {row.label}
              </th>
              <td className="px-5 py-3 text-[#4a4a4a]">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
