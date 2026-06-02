"use client";

import { FormEvent, useState } from "react";
import { LockKeyhole, ArrowLeft } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const from = searchParams.get("from") || "/";

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/presentation-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        setError("الباسوورد غير صحيح");
        setLoading(false);
        return;
      }

      router.replace(from);
      router.refresh();
    } catch {
      setError("صار خطأ بالاتصال. جربي مرة ثانية.");
      setLoading(false);
    }
  }

  return (
    <main
      dir="rtl"
      className="min-h-screen overflow-hidden bg-[#070403] px-5 py-10 text-white"
    >
      <div className="pointer-events-none fixed right-[-180px] top-[-120px] h-96 w-96 rounded-full bg-[#d7a35f]/20 blur-[130px]" />
      <div className="pointer-events-none fixed left-[-220px] bottom-[-160px] h-[30rem] w-[30rem] rounded-full bg-[#3a1c0b]/40 blur-[150px]" />

      <section className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl items-center justify-center">
        <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl backdrop-blur-xl">
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
            <LockKeyhole size={28} />
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7a35f]">
            KISHIB PRESENTATION
          </p>

          <h1 className="text-3xl font-semibold tracking-[-0.04em] text-white">
            هذا العرض محمي بكلمة مرور
          </h1>

          <p className="mt-4 text-sm leading-7 text-white/55">
            أدخلي كلمة المرور لفتح دراسة الجدوى والعرض الاستثماري لمنصة كيشيب.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-white/60">
                كلمة المرور
              </label>

              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="اكتبي الباسوورد"
                className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-4 text-right text-white outline-none transition placeholder:text-white/25 focus:border-[#d7a35f]/60"
              />
            </div>

            {error ? (
              <p className="rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={loading || !password.trim()}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#d7a35f] px-5 py-4 text-sm font-bold text-black transition hover:bg-[#f0c987] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "جاري التحقق..." : "دخول العرض"}
              <ArrowLeft size={18} />
            </button>
          </form>

          <p className="mt-6 text-xs leading-6 text-white/35">
            ملاحظة: هذا الدخول مخصص لحماية رابط العرض من الوصول العام، وليس
            نظام صلاحيات كامل للمستخدمين.
          </p>
        </div>
      </section>
    </main>
  );
}