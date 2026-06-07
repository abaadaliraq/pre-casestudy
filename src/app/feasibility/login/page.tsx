"use client";

import { FormEvent, Suspense, useState } from "react";
import { ArrowRight, LockKeyhole } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

function FeasibilityLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") || "/feasibility";

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/feasibility-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        setError("Invalid password.");
        setLoading(false);
        return;
      }

      router.replace(from);
      router.refresh();
    } catch {
      setError("Unable to verify the password. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 shadow-2xl backdrop-blur-xl">
      <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
        <LockKeyhole size={28} />
      </div>

      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7a35f]">
        Private Access
      </p>

      <h1 className="text-3xl font-semibold tracking-[-0.04em] text-white">
        KISHIB Feasibility Study
      </h1>

      <p className="mt-4 text-sm leading-7 text-white/55">
        This section is private and available only for selected investors.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Password"
          className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-4 text-white outline-none transition placeholder:text-white/25 focus:border-[#d7a35f]/60"
        />

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
          {loading ? "Checking..." : "Continue"}
          <ArrowRight size={18} />
        </button>
      </form>
    </div>
  );
}

function LoginFallback() {
  return (
    <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-white/[0.045] p-7 text-center text-white/55 shadow-2xl backdrop-blur-xl">
      Loading...
    </div>
  );
}

export default function FeasibilityLoginPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070403] px-5 py-10 text-white">
      <div className="pointer-events-none fixed right-[-180px] top-[-120px] h-96 w-96 rounded-full bg-[#d7a35f]/20 blur-[130px]" />
      <div className="pointer-events-none fixed left-[-220px] bottom-[-160px] h-[30rem] w-[30rem] rounded-full bg-[#3a1c0b]/40 blur-[150px]" />

      <section className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-5xl items-center justify-center">
        <Suspense fallback={<LoginFallback />}>
          <FeasibilityLoginForm />
        </Suspense>
      </section>
    </main>
  );
}
