"use client";

import { useState } from "react";

import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import PresentationMap from "@/components/PresentationMap";
import ProjectBrief from "@/components/ProjectBrief";
import DevelopmentValue from "@/components/DevelopmentValue";
import MarketOpportunity from "@/components/MarketOpportunity";
import RevenueModel from "@/components/RevenueModel";
import InvestorReturn from "@/components/InvestorReturn";
import ProjectCosts from "@/components/ProjectCosts";
import MarketingStrategy from "@/components/MarketingStrategy";
import ComparisonSection from "@/components/ComparisonSection";
import FinalInvestmentAsk from "@/components/FinalInvestmentAsk";
import Footer from "@/components/Footer";

type Lang = "ar" | "en";

export default function Home() {
  const [lang, setLang] = useState<Lang>("ar");

return (
  <main
    dir={lang === "ar" ? "rtl" : "ltr"}
    className={[
      "min-h-screen bg-[#050302] text-white",
      lang === "en"
        ? "xl:[&>section]:pl-16 xl:[&>section]:pr-56 xl:[&>footer]:pl-16 xl:[&>footer]:pr-56"
        : "xl:[&>section]:pl-56 xl:[&>section]:pr-16 xl:[&>footer]:pl-56 xl:[&>footer]:pr-16",
    ].join(" ")}
  >
    <TopBar lang={lang} />

    <Hero lang={lang} setLang={setLang} />

    <PresentationMap lang={lang} />

    <ProjectBrief lang={lang} />

    <DevelopmentValue lang={lang} />

    <MarketOpportunity lang={lang} />

    <RevenueModel lang={lang} />

    <InvestorReturn lang={lang} />

    <ProjectCosts lang={lang} />

    <MarketingStrategy lang={lang} />

    <ComparisonSection lang={lang} />

    <FinalInvestmentAsk lang={lang} />

    <Footer lang={lang} />
  </main>
);

}