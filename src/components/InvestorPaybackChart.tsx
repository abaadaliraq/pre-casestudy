"use client";

import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CircleDollarSign, TrendingUp } from "lucide-react";

type Lang = "ar" | "en";

type InvestorPaybackChartProps = {
  lang?: Lang;
};

const investmentAmount = 32000;

const rawData = [
  {
    yearAr: "السنة 1",
    yearEn: "Year 1",
    annualReturn: 2790,
    cumulativeReturn: 2790,
  },
  {
    yearAr: "السنة 2",
    yearEn: "Year 2",
    annualReturn: 13410,
    cumulativeReturn: 16200,
  },
  {
    yearAr: "السنة 3",
    yearEn: "Year 3",
    annualReturn: 26460,
    cumulativeReturn: 42660,
  },
];

const totalReturn = 42660;
const paybackYears = 2.6;
const paybackMonths = 31;
const recoveryPercent = Math.min((totalReturn / investmentAmount) * 100, 100);

function formatMoney(value: number) {
  return `$${value.toLocaleString("en-US")}`;
}

const content = {
  ar: {
    dir: "rtl" as const,
    align: "text-right",
    label: "Animated Payback Indicator",
    title: "مؤشر عائد المستثمر واسترداد رأس المال",
    description:
      "هذا المؤشر يوضح كيف يتراكم عائد المستثمر خلال أول 3 سنوات، ومتى يمكن أن يسترد مبلغ الاستثمار البالغ 32,000 دولار وفق السيناريو الحالي.",
    investment: "الاستثمار",
    threeYearReturn: "عائد 3 سنوات",
    payback: "الاسترداد",
    paybackShort: "31 شهر",
    recoveryLabel: "Capital Recovery",
    recoveryTitle: "نسبة استرداد رأس المال",
    recovered: "المسترد",
    estimatedPaybackTime: "Estimated Payback Time",
    paybackValue: `${paybackYears} سنة`,
    paybackText:
      "أي ما يقارب 31 شهراً لاسترداد مبلغ الاستثمار، حسب العوائد التقديرية لأول 3 سنوات.",
    chartLabel: "Annual + Cumulative Return",
    chartTitle: "نمو العائد خلال أول 3 سنوات",
    annualReturn: "العائد السنوي",
    cumulativeReturn: "العائد التراكمي",
    cumulativeShort: "تراكمي",
    note:
      "ملاحظة: هذا المؤشر مبني على حصة 9% من صافي الأرباح السنوية، وليس من إجمالي الإيرادات.",
  },

  en: {
    dir: "ltr" as const,
    align: "text-left",
    label: "Animated Payback Indicator",
    title: "Investor Return and Capital Recovery Indicator",
    description:
      "This indicator shows how the investor’s return can accumulate over the first 3 years, and when the initial $32,000 investment can be recovered under the current scenario.",
    investment: "Investment",
    threeYearReturn: "3-Year Return",
    payback: "Payback",
    paybackShort: "31 months",
    recoveryLabel: "Capital Recovery",
    recoveryTitle: "Capital Recovery Progress",
    recovered: "Recovered",
    estimatedPaybackTime: "Estimated Payback Time",
    paybackValue: `${paybackYears} years`,
    paybackText:
      "Approximately 31 months to recover the initial investment, based on the projected investor returns over the first 3 years.",
    chartLabel: "Annual + Cumulative Return",
    chartTitle: "Return Growth Over the First 3 Years",
    annualReturn: "Annual Return",
    cumulativeReturn: "Cumulative Return",
    cumulativeShort: "Cumulative",
    note:
      "Note: This indicator is based on a 9% share of annual net profit, not gross revenue.",
  },
};

export default function InvestorPaybackChart({
  lang = "ar",
}: InvestorPaybackChartProps) {
  const t = content[lang];

  const data = rawData.map((item) => ({
    year: lang === "ar" ? item.yearAr : item.yearEn,
    annualReturn: item.annualReturn,
    cumulativeReturn: item.cumulativeReturn,
  }));

  return (
    <div
      dir={t.dir}
      className={[
        "mt-16 rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 md:p-7",
        t.align,
      ].join(" ")}
    >
      <div className="mb-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
            {t.label}
          </p>

          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
            {t.title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/50">
            {t.description}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-[1.35rem] border border-white/10 bg-black/20 p-5">
            <p className="text-xs text-white/40">{t.investment}</p>
            <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
              $32,000
            </p>
          </div>

          <div className="rounded-[1.35rem] border border-white/10 bg-black/20 p-5">
            <p className="text-xs text-white/40">{t.threeYearReturn}</p>
            <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#f0c987]">
              $42,660
            </p>
          </div>

          <div className="rounded-[1.35rem] border border-white/10 bg-black/20 p-5">
            <p className="text-xs text-white/40">{t.payback}</p>
            <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
              {t.paybackShort}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[1.75rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-6">
          <div className="flex items-center justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d7a35f]">
                {t.recoveryLabel}
              </p>

              <h4 className="mt-3 text-2xl font-semibold text-white">
                {t.recoveryTitle}
              </h4>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
              <CircleDollarSign size={22} />
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="text-white/45">{t.recovered}</span>
              <span className="font-semibold text-white">
                {Math.round(recoveryPercent)}%
              </span>
            </div>

            <div className="h-4 overflow-hidden rounded-full bg-black/35">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${recoveryPercent}%` }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.3, ease: "easeOut" }}
                className="h-full rounded-full bg-[#d7a35f]"
              />
            </div>

            <div className="mt-6 rounded-[1.35rem] border border-white/10 bg-black/25 p-5">
              <p className="text-sm text-white/42">
                {t.estimatedPaybackTime}
              </p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                className="mt-2 text-5xl font-semibold tracking-[-0.06em] text-white"
              >
                {t.paybackValue}
              </motion.p>

              <p className="mt-2 text-sm leading-7 text-white/50">
                {t.paybackText}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-4 md:p-6">
          <div className="mb-6 flex items-center justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d7a35f]">
                {t.chartLabel}
              </p>

              <h4 className="mt-3 text-2xl font-semibold text-white">
                {t.chartTitle}
              </h4>
            </div>

            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987] sm:flex">
              <TrendingUp size={22} />
            </div>
          </div>

          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="returnGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#d7a35f" stopOpacity={0.55} />
                    <stop offset="95%" stopColor="#d7a35f" stopOpacity={0.02} />
                  </linearGradient>
                </defs>

                <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />

                <XAxis
                  dataKey="year"
                  tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  tickFormatter={(value) => `$${Number(value) / 1000}K`}
                  tick={{ fill: "rgba(255,255,255,0.45)", fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip
                  cursor={{ stroke: "rgba(215,163,95,0.35)", strokeWidth: 1 }}
                  contentStyle={{
                    background: "rgba(5,3,2,0.92)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "18px",
                    color: "#fff",
                  }}
                  formatter={(value, name) => {
                    const numericValue = Number(value);

                    const label =
                      name === "annualReturn"
                        ? t.annualReturn
                        : t.cumulativeReturn;

                    return [formatMoney(numericValue), label];
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="cumulativeReturn"
                  stroke="#d7a35f"
                  strokeWidth={3}
                  fill="url(#returnGradient)"
                  activeDot={{ r: 6 }}
                  isAnimationActive
                  animationDuration={1300}
                />

                <Area
                  type="monotone"
                  dataKey="annualReturn"
                  stroke="rgba(255,255,255,0.55)"
                  strokeWidth={2}
                  fill="transparent"
                  activeDot={{ r: 5 }}
                  isAnimationActive
                  animationDuration={1300}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            {data.map((item) => (
              <div
                key={item.year}
                className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4"
              >
                <p className="text-xs text-white/38">{item.year}</p>

                <p className="mt-2 text-lg font-semibold text-white">
                  {formatMoney(item.annualReturn)}
                </p>

                <p className="mt-1 text-xs text-white/40">
                  {t.cumulativeShort}: {formatMoney(item.cumulativeReturn)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-white/42">{t.note}</p>
    </div>
  );
}