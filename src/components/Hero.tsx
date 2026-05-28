"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const heroImage = "/hero.jpg";

export default function Hero() {
  return (
<section id="home" className="relative min-h-screen overflow-hidden bg-[#050302] text-white">
        <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Antique valuation platform"
          className="h-full w-full object-cover opacity-90"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/5 to-[#050302]/70" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/55 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050302] to-transparent" />
      </div>

      <div className="pointer-events-none absolute right-[-120px] top-24 h-96 w-96 rounded-full bg-[#d7a35f]/18 blur-[120px]" />
      <div className="pointer-events-none absolute left-[-160px] bottom-10 h-96 w-96 rounded-full bg-[#4a250f]/30 blur-[130px]" />

      {/* Content fixed to the RIGHT */}
      <div className="relative z-10 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="absolute right-6 top-1/2 w-[min(760px,calc(100vw-48px))] -translate-y-1/2 text-right md:right-12 lg:right-20 xl:right-28"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d7a35f]/30 bg-black/20 px-4 py-2 text-xs font-medium text-[#f2d2a1] backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-[#d7a35f]" />
            Investor Case Study Presentation
          </div>

          <h1 className="text-right text-6xl font-semibold tracking-[-0.06em] text-white md:text-8xl lg:text-9xl">
            Antique Lens
          </h1>

          <p
            dir="rtl"
            className="mr-0 mt-7 max-w-2xl text-right text-lg leading-9 text-white/78 md:text-xl"
          >
            منصة ذكية متخصصة في تقييم التحف، الأعمال الفنية، القطع النادرة،
            والمقتنيات التراثية عبر تحليل الصور والبيانات السوقية، لتقديم تجربة
            أسرع وأوضح للمستخدم والمستثمر.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Link
              href="/project"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#d7a35f] px-6 py-4 text-sm font-bold text-black shadow-2xl shadow-[#d7a35f]/20 transition hover:bg-[#f0c987]"
            >
              ابدأ العرض
              <ArrowUpRight
                size={17}
                className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <Link
              href="/revenue"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-black/25 px-6 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"
            >
              عرض الإيرادات المتوقعة
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}