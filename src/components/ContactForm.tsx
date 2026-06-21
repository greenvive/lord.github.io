"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

const services = ["무대", "포토존", "음향", "조명", "LED", "트러스", "기타"];

const inputClass = "w-full rounded-xl border border-black/15 px-4 py-3 text-sm focus:border-lord-orange focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const rows: [string, string][] = [
      ["이름", String(formData.get("name") ?? "")],
      ["회사명", String(formData.get("company") ?? "")],
      ["연락처", String(formData.get("phone") ?? "")],
      ["이메일", String(formData.get("email") ?? "")],
      ["행사명", String(formData.get("eventName") ?? "")],
      ["행사일", String(formData.get("eventDate") ?? "")],
      ["설치 장소", String(formData.get("location") ?? "")],
      ["실내/야외", String(formData.get("indoorOutdoor") ?? "")],
      ["예상 참석 인원", String(formData.get("attendees") ?? "")],
      ["필요한 서비스", formData.getAll("services").join(", ")],
      ["예산 범위", String(formData.get("budget") ?? "")],
      ["문의 내용", String(formData.get("message") ?? "")],
    ];

    const body = rows.map(([label, value]) => `${label}: ${value || "(미입력)"}`).join("\n");
    const subject = `[상담 문의] ${formData.get("eventName") || formData.get("name") || "LORD 상담 신청"}`;
    const mailtoUrl = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-lord-orange bg-lord-cream p-8 text-center">
        <p className="text-lg font-extrabold text-lord-black">메일 작성 화면으로 이동합니다.</p>
        <p className="mt-2 text-sm text-[#4a4a4a]">
          이메일 클라이언트에서 작성된 문의 내용을 확인하고 전송해주세요. 메일이 열리지 않는다면 전화 또는
          카카오톡으로 문의해주세요.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="이름" name="name" required />
        <Field label="회사명" name="company" />
        <Field label="연락처" name="phone" type="tel" required />
        <Field label="이메일" name="email" type="email" />
        <Field label="행사명" name="eventName" />
        <Field label="행사일" name="eventDate" type="date" />
        <Field label="설치 장소" name="location" />
        <div>
          <Label>실내/야외</Label>
          <select name="indoorOutdoor" className={`${inputClass} mt-2`}>
            <option value="indoor">실내</option>
            <option value="outdoor">야외</option>
            <option value="both">미정</option>
          </select>
        </div>
        <Field label="예상 참석 인원" name="attendees" type="number" />
        <Field label="예산 범위" name="budget" />
      </div>

      <div>
        <Label>필요한 서비스</Label>
        <div className="mt-2 flex flex-wrap gap-3">
          {services.map((service) => (
            <label key={service} className="flex items-center gap-2 rounded-full border border-black/15 px-4 py-2 text-sm">
              <input type="checkbox" name="services" value={service} />
              {service}
            </label>
          ))}
        </div>
      </div>

      <div>
        <Label>문의 내용</Label>
        <textarea name="message" rows={5} className={`${inputClass} mt-2`} placeholder="행사 목적, 참고 이미지 링크, 기타 요청 사항을 자유롭게 남겨주세요." />
      </div>

      <button type="submit" className="btn-primary w-full">
        상담 신청하기 (메일 작성)
      </button>
    </form>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-sm font-bold text-lord-black">{children}</label>;
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label>
        {label}
        {required && <span className="text-lord-orange"> *</span>}
      </Label>
      <input name={name} type={type} required={required} className={`${inputClass} mt-2`} />
    </div>
  );
}
