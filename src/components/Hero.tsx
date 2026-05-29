"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const heroImage = "/hero.jpg";

type Lang = "ar" | "en";

type HeroProps = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};
const content = {
  ar: {
    badge: "KISHIB Investor Case Study Presentation",
    title: "KISHIB",
    description:
      "منصة متخصصة في تقييم التحف، الأعمال الفنية، القطع النادرة، المقتنيات التراثية، والأحجار الكريمة، عبر تجربة واضحة تساعد المستخدم على فهم أصل القطعة، حالتها، وقيمتها المتوقعة.",
    primaryButton: "ابدأ العرض",
    secondaryButton: "عرض الإيرادات المتوقعة",
  },
  en: {
    badge: "KISHIB Investor Case Study Presentation",
    title: "KISHIB",
    description:
      "A specialized platform for evaluating antiques, artworks, rare objects, heritage collectibles, and gemstones through a clear experience that helps users understand an item’s origin, condition, and estimated value.",
    primaryButton: "Start Presentation",
    secondaryButton: "View Revenue Potential",
  },
};

function HeroLanguageToggle({
  lang,
  onChange,
}: {
  lang: Lang;
  onChange: (lang: Lang) => void;
}) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/15 bg-black/30 p-1 backdrop-blur-xl">
      <button
        type="button"
        onClick={() => onChange("ar")}
        className={[
          "rounded-full px-4 py-2 text-xs font-bold transition",
          lang === "ar"
            ? "bg-[#d7a35f] text-black shadow-lg shadow-[#d7a35f]/20"
            : "text-white/55 hover:text-white",
        ].join(" ")}
      >
        عربي
      </button>

      <button
        type="button"
        onClick={() => onChange("en")}
        className={[
          "rounded-full px-4 py-2 text-xs font-bold transition",
          lang === "en"
            ? "bg-[#d7a35f] text-black shadow-lg shadow-[#d7a35f]/20"
            : "text-white/55 hover:text-white",
        ].join(" ")}
      >
        English
      </button>
    </div>
  );
}

export default function Hero({ lang, setLang }: HeroProps) {
  const t = content[lang];
  return (
    <section
      id="home"
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="relative min-h-screen overflow-hidden bg-[#050302] text-white"
    >
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="KISHIB valuation platform"
          className="h-full w-full object-cover opacity-90"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-[#050302]/70" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/55 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050302] to-transparent" />
      </div>

      <div className="pointer-events-none absolute right-[-120px] top-24 h-96 w-96 rounded-full bg-[#d7a35f]/18 blur-[120px]" />
      <div className="pointer-events-none absolute left-[-160px] bottom-10 h-96 w-96 rounded-full bg-[#4a250f]/30 blur-[130px]" />

      <div className="relative z-10 min-h-screen">
        <div className="absolute right-6 top-6 z-20 md:right-12 lg:right-20 xl:right-28">
          <HeroLanguageToggle lang={lang} onChange={setLang} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className={[
            "absolute top-1/2 w-[min(760px,calc(100vw-48px))] -translate-y-1/2",
            lang === "ar"
              ? "right-6 text-right md:right-12 lg:right-20 xl:right-28"
              : "left-6 text-left md:left-12 lg:left-20 xl:left-28",
          ].join(" ")}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d7a35f]/30 bg-black/20 px-4 py-2 text-xs font-medium text-[#f2d2a1] backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[#d7a35f]" />
            {t.badge}
          </div>

          <h1 className="text-6xl font-semibold tracking-[-0.06em] text-white md:text-8xl lg:text-9xl">
            {t.title}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-9 text-white/78 md:text-xl">
            {t.description}
          </p>

          <div
            className={[
              "mt-9 flex flex-col gap-3 sm:flex-row",
              lang === "ar" ? "sm:justify-end" : "sm:justify-start",
            ].join(" ")}
          >
            <Link
              href="#presentation-map"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#d7a35f] px-6 py-4 text-sm font-bold text-black shadow-2xl shadow-[#d7a35f]/20 transition hover:bg-[#f0c987]"
            >
              {t.primaryButton}
              <ArrowUpRight
                size={17}
                className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="#revenue"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/25 px-6 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"
            >
              {t.secondaryButton}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}