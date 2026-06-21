"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";

export default function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const name = form.get("name") as string;
    const email = form.get("email") as string;
    const password = form.get("password") as string;
    const confirm = form.get("confirm") as string;

    if (password !== confirm) {
      toast.error("비밀번호가 일치하지 않습니다.");
      setLoading(false);
      return;
    }
    if (password.length < 8) {
      toast.error("비밀번호는 8자 이상이어야 합니다.");
      setLoading(false);
      return;
    }

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { display_name: name } },
    });

    if (error) {
      toast.error(error.message);
    } else {
      setDone(true);
    }
    setLoading(false);
  }

  if (done) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center space-y-3">
          <div className="text-4xl">📬</div>
          <h2 className="text-xl font-semibold text-gray-900">이메일을 확인해주세요</h2>
          <p className="text-sm text-gray-500">인증 링크를 이메일로 발송했습니다.</p>
          <Link href="/login" className="text-green-600 text-sm hover:underline">로그인으로 이동</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl font-bold text-gray-900">Planary</Link>
          <p className="mt-2 text-sm text-gray-500">무료로 시작하세요</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="name">이름</Label>
              <Input id="name" name="name" placeholder="홍길동" required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email">이메일</Label>
              <Input id="email" name="email" type="email" placeholder="you@example.com" required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="password">비밀번호</Label>
              <Input id="password" name="password" type="password" placeholder="8자 이상" required />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="confirm">비밀번호 확인</Label>
              <Input id="confirm" name="confirm" type="password" placeholder="비밀번호 재입력" required />
            </div>
            <p className="text-xs text-gray-400">
              가입하면{" "}
              <a href="#" className="underline">이용약관</a>
              {" "}및{" "}
              <a href="#" className="underline">개인정보처리방침</a>에 동의하는 것으로 간주합니다.
            </p>
            <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={loading}>
              {loading ? "가입 중..." : "회원가입"}
            </Button>
          </form>
        </div>

        <p className="text-center text-sm text-gray-500 mt-4">
          이미 계정이 있으신가요?{" "}
          <Link href="/login" className="text-green-600 font-medium hover:underline">로그인</Link>
        </p>
      </div>
    </div>
  );
}
