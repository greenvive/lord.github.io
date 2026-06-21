import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  ready?: boolean;
}

export default function ServiceCard({ title, description, href, ready = true }: ServiceCardProps) {
  return (
    <Link href={ready ? href : "#"} className="service-card block">
      <p className="text-xl font-extrabold">{title}</p>
      <p className="mt-3 text-sm leading-relaxed text-white/70">{description}</p>
      <span className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-lord-orange">
        {ready ? "자세히 보기" : "콘텐츠 준비중"} →
      </span>
    </Link>
  );
}
