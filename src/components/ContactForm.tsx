"use client";

import { useState, type FormEvent } from "react";

const services = ["무대", "포토존", "음향", "조명", "LED", "트러스", "기타"];

const inputClass = "w-full rounded-xl border border-black/15 px-4 py-3 text-sm focus:border-lord-orange focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      eventName: formData.get("eventName"),
      eventDate: formData.get("eventDate"),
      location: formData.get("location"),
      indoorOutdoor: formData.get("indoorOutdoor"),
      attendees: formData.get("attendees"),
      services: formData.getAll("services"),
      budget: formData.get("budget"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-lord-orange bg-lord-cream p-8 text-center">
        <p className="text-lg font-extrabold text-lord-black">문의가 접수되었습니다.</p>
        <p className="mt-2 text-sm text-[#4a4a4a]">남겨주신 연락처로 빠르게 견적 방향을 안내드리겠습니다.</p>
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

      <button type="submit" disabled={status === "loading"} className="btn-primary w-full">
        {status === "loading" ? "전송 중..." : "상담 신청하기"}
      </button>

      {status === "error" && (
        <p className="text-sm font-bold text-red-600">전송 중 오류가 발생했습니다. 전화로 문의해주세요.</p>
      )}
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
