import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  eventName?: string;
  eventDate?: string;
  location?: string;
  indoorOutdoor?: string;
  attendees?: string;
  services?: string[];
  budget?: string;
  message?: string;
}

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;

  if (!payload.name || !payload.phone) {
    return NextResponse.json({ ok: false, error: "name and phone are required" }, { status: 400 });
  }

  // TODO: 이메일/카카오톡 알림 연동 (개발계획서 6장 참고)
  console.log("[contact] new inquiry", payload);

  return NextResponse.json({ ok: true });
}
