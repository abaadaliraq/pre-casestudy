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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050302] text-white">
      <TopBar />
      <Hero />
      <PresentationMap />
      <ProjectBrief />
      <DevelopmentValue />
      <MarketOpportunity />
      <RevenueModel />
      <InvestorReturn />
      <ProjectCosts />
      <MarketingStrategy />
      <ComparisonSection />
      <FinalInvestmentAsk />
      <Footer />
    </main>
  );
}