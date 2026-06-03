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

const investmentAmount = 100000;

const data = [
  {
    year: "Year 1",
    annualReturn: 45150,
    cumulativeReturn: 45150,
  },
  {
    year: "Year 2",
    annualReturn: 117600,
    cumulativeReturn: 162750,
  },
  {
    year: "Year 3",
    annualReturn: 212100,
    cumulativeReturn: 374850,
  },
];

const totalReturn = 374850;
const profitAboveInvestment = totalReturn - investmentAmount;
const paybackMonths = "18 - 22";
const recoveryPercent = Math.min((totalReturn / investmentAmount) * 100, 100);
const roiPercent = Math.round((totalReturn / investmentAmount) * 100);

function formatMoney(value: number) {
  return `$${value.toLocaleString("en-US")}`;
}

export default function InvestorPaybackChart() {
  return (
    <div
      dir="rtl"
      className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 text-right md:p-7"
    >
      <div className="mb-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
            Animated Payback Indicator
          </p>

          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
            مؤشر عائد المستثمر واسترداد رأس المال
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/50">
            الرسم يوضح العائد السنوي المتوقع للمستثمر خلال أول 3 سنوات، بناءً
            على استثمار 100,000 دولار مقابل 21% من صافي الأرباح السنوية.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-[1.35rem] border border-white/10 bg-black/20 p-5">
            <p className="text-xs text-white/40">Investment</p>
            <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
              $100,000
            </p>
          </div>

          <div className="rounded-[1.35rem] border border-white/10 bg-black/20 p-5">
            <p className="text-xs text-white/40">3-Year Return</p>
            <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#f0c987]">
              $374,850
            </p>
          </div>

          <div className="rounded-[1.35rem] border border-white/10 bg-black/20 p-5">
            <p className="text-xs text-white/40">Payback</p>
            <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-white">
              {paybackMonths} شهر
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[1.75rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d7a35f]">
                Capital Recovery
              </p>

              <h4 className="mt-3 text-2xl font-semibold text-white">
                استرداد رأس المال
              </h4>
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
              <CircleDollarSign size={22} />
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between text-sm">
              <span className="text-white/45">Capital recovered</span>
              <span className="font-semibold text-white">100%</span>
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
              <p className="text-sm text-white/42">Estimated Payback Time</p>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                className="mt-2 text-5xl font-semibold tracking-[-0.06em] text-white"
              >
                {paybackMonths} شهر
              </motion.p>

              <p className="mt-2 text-sm leading-7 text-white/50">
                رأس المال يُسترد تقريباً خلال السنة الثانية، إذا تحققت
                سيناريوهات الإيرادات والتحويل الموضحة في الدراسة.
              </p>
            </div>

            <div className="mt-4 rounded-[1.35rem] border border-white/10 bg-black/20 p-5">
              <p className="text-sm text-white/42">3-Year Return Multiple</p>

              <p className="mt-2 text-4xl font-semibold tracking-[-0.05em] text-[#f0c987]">
                {roiPercent}%
              </p>

              <p className="mt-2 text-sm leading-7 text-white/50">
                العائد التراكمي خلال 3 سنوات يعادل حوالي {roiPercent}% من مبلغ
                الاستثمار، أي ربح إضافي تقديري قدره{" "}
                {formatMoney(profitAboveInvestment)} فوق رأس المال.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-black/20 p-4 md:p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d7a35f]">
                Annual + Cumulative Return
              </p>

              <h4 className="mt-3 text-2xl font-semibold text-white">
                نمو العائد خلال أول 3 سنوات
              </h4>
            </div>

            <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987] sm:flex">
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

                <CartesianGrid
                  stroke="rgba(255,255,255,0.08)"
                  vertical={false}
                />

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
                  cursor={{
                    stroke: "rgba(215,163,95,0.35)",
                    strokeWidth: 1,
                  }}
                  contentStyle={{
                    background: "rgba(5,3,2,0.92)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "18px",
                    color: "#fff",
                  }}
                  formatter={(value: unknown, name: unknown) => {
                    const numericValue = Number(value);

                    const label =
                      name === "annualReturn"
                        ? "العائد السنوي"
                        : "العائد التراكمي";

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
                  تراكمي: {formatMoney(item.cumulativeReturn)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-5 text-sm leading-7 text-white/42">
        ملاحظة: هذا المؤشر مبني على حصة 21% من صافي الأرباح السنوية، وليس من
        إجمالي الإيرادات. إجمالي 470 ألف دولار يمثل ميزانية البناء والإطلاق،
        وليس مصاريف تشغيل سنوية متكررة.
      </p>
    </div>
  );
}