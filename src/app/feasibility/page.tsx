"use client";

import { useState } from "react";

import FeasibilitySidebar from "@/components/FeasibilitySidebar";
import FinalInvestmentAsk from "@/components/FinalInvestmentAsk";
import HeroLanguageToggle from "@/components/HeroLanguageToggle";
import InvestorPaybackChart from "@/components/InvestorPaybackChart";
import InvestorReturn from "@/components/InvestorReturn";
import OperatingCosts from "@/components/OperatingCosts";
import ProjectCosts from "@/components/ProjectCosts";
import RevenueModel from "@/components/RevenueModel";

type Lang = "ar" | "en";

export default function FeasibilityPage() {
  const [lang, setLang] = useState<Lang>("ar");

  return (
    <main
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="min-h-screen bg-[#050302] text-white"
    >
      <FeasibilitySidebar lang={lang} />

      <section
        id="feasibility-home"
        dir={lang === "ar" ? "rtl" : "ltr"}
        className={[
          "relative overflow-hidden bg-[#050302] px-5 pb-12 pt-8 md:px-8 lg:px-10 xl:px-16",
          lang === "ar" ? "text-right" : "text-left",
        ].join(" ")}
      >
        <div className="pointer-events-none absolute right-[-180px] top-[-120px] h-96 w-96 rounded-full bg-[#d7a35f]/15 blur-[130px]" />
        <div className="pointer-events-none absolute left-[-220px] bottom-[-160px] h-[30rem] w-[30rem] rounded-full bg-[#3a1c0b]/35 blur-[150px]" />

        <div className="relative mx-auto flex max-w-7xl flex-col gap-10">
          <div className="flex items-center justify-between gap-4">
            <a
              href="/"
              className="rounded-full border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              {lang === "ar" ? "العودة للعرض العام" : "Back to public presentation"}
            </a>

            <HeroLanguageToggle lang={lang} onChange={setLang} />
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7a35f]">
                PRIVATE FEASIBILITY STUDY
              </p>

              <h1 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
                {lang === "ar"
                  ? "دراسة الجدوى المالية الخاصة بمنصة KISHIB"
                  : "KISHIB Private Financial Feasibility Study"}
              </h1>
            </div>

            <p className="max-w-3xl text-base leading-8 text-white/62 md:text-lg md:leading-9">
              {lang === "ar"
                ? "هذه الصفحة مخصصة للأرقام المالية، تكاليف البناء والتشغيل، نموذج الإيرادات، عائد المستثمر، وفترة استرداد رأس المال. العرض العام يبقى خفيفاً وموجهاً للتعريف والإقناع."
                : "This private page contains the financial model, build and operating costs, revenue assumptions, investor return, and payback view. The public presentation stays focused on story, product value, and market opportunity."}
            </p>
          </div>
        </div>
      </section>

      <ProjectCosts lang={lang} />
      <OperatingCosts lang={lang} />
      <RevenueModel lang={lang} />
      <InvestorReturn lang={lang} />

      <section
        id="payback"
        className={[
          "relative overflow-hidden bg-[#070403] px-5 py-8 text-white md:px-8 lg:px-10 xl:px-16",
          lang === "ar" ? "text-right" : "text-left",
        ].join(" ")}
      >
        <div className="mx-auto max-w-7xl">
          <InvestorPaybackChart lang={lang} />
        </div>
      </section>

      <FinalInvestmentAsk lang={lang} />
    </main>
  );
}
