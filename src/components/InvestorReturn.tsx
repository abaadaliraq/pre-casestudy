import InvestorPaybackChart from "@/components/InvestorPaybackChart";
import {
  BadgePercent,
  Banknote,
  CircleDollarSign,
  Handshake,
  Info,
  Landmark,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";

type Lang = "ar" | "en";

type InvestorReturnProps = {
  lang?: Lang;
};

const content = {
  ar: {
    dir: "rtl" as const,
    align: "text-right",
    sectionLabel: "INVESTOR RETURN",
    title: "استثمار بقيمة 32 ألف دولار مقابل 9% من صافي أرباح KISHIB",
    intro:
      "الفرصة الاستثمارية في KISHIB ليست تمويلاً لتجربة مؤقتة، بل دخول مبكر في منصة قابلة للتوسع داخل سوق عالي القيمة: التحف، المقتنيات، الأعمال الفنية، والأحجار الكريمة. الاستثمار المطلوب يهدف إلى تسريع التطوير التجاري، تحسين تجربة المنتج، بناء قنوات اكتساب المستخدمين، وتجهيز المنصة لتوليد إيرادات متكررة ومتعددة المصادر.",
    ownership: {
      title: "ملكية المشروع",
      value: "Abaad Al Iraq",
      text: "تبقى المنصة مملوكة ومدارة تحت أبعاد العراق، مع دخول المستثمر كشريك في صافي الأرباح وفق نسبة واضحة.",
    },
    investment: {
      title: "قيمة الاستثمار المطلوبة",
      value: "$32,000",
      text: "مبلغ مخصص لتسريع التطوير، تجهيز الإطلاق التجاري، التسويق، بناء الثقة، وتوسيع قابلية المنصة للدفع والاشتراك.",
    },
    share: {
      title: "نسبة المستثمر",
      value: "9%",
      text: "يحصل المستثمر على 9% من صافي الأرباح السنوية للمنصة، وليس من الإيراد الخام، وفق اتفاق واضح.",
    },
    tableLabel: "9% Annual Net Profit Share",
    tableTitle: "العائد المتوقع للمستثمر خلال أول 3 سنوات",
    tableHeaders: [
      "السنة",
      "الإيراد المتوقع",
      "المصاريف",
      "صافي الربح",
      "حصة المستثمر",
      "المرحلة",
    ],
    scenarios: [
      {
        year: "السنة 1",
        revenue: "$126,000",
        expenses: "$95,000",
        netProfit: "$31,000",
        investorShare: "$2,790",
        note: "إطلاق واختبار السوق",
      },
      {
        year: "السنة 2",
        revenue: "$294,000",
        expenses: "$145,000",
        netProfit: "$149,000",
        investorShare: "$13,410",
        note: "نمو وتحسين التحويل",
      },
      {
        year: "السنة 3",
        revenue: "$504,000",
        expenses: "$210,000",
        netProfit: "$294,000",
        investorShare: "$26,460",
        note: "توسع ونضج الإيرادات",
      },
    ],
    totalReturnText:
      "وفق هذا النموذج، يمكن أن يصل مجموع عائد المستثمر خلال أول 3 سنوات إلى 42,660 دولار تقريباً، مع استمرار الملكية في حصة الأرباح بعد السنة الثالثة طالما استمر الاتفاق.",
    paybackTitle: "متى يسترد المستثمر رأس المال؟",
    paybackText:
      "استرداد رأس المال في المشاريع الرقمية عالية النمو لا يُقاس من الشهر الأول، بل من لحظة تحول المنتج إلى قناة إيراد متكررة. في هذا السيناريو، يبدأ العائد المؤثر من السنة الثانية، ويمكن أن يقترب المستثمر من استرداد رأس المال خلال السنة الثالثة عند تحقق النمو المخطط وتحسين التحويل إلى اشتراكات وتقارير مدفوعة.",
    paybackLabel: "Estimated Payback",
    paybackValue: "30 - 36 شهر",
    paybackNote:
      "التقدير يعتمد على عدد الاشتراكات المدفوعة، تكلفة اكتساب المستخدم، نمو التقارير المدفوعة، وتفعيل طبقة الاستشارات والخدمات عالية القيمة.",
    whyLabel: "INVESTMENT LOGIC",
    whyTitle: "لماذا هذا العرض مهم للمستثمر؟",
    reasons: [
      "دخول مبكر في منصة متخصصة داخل سوق عالي القيمة وغير منظم رقمياً بشكل كافٍ.",
      "نموذج دخل لا يعتمد على مصدر واحد: اشتراكات، تقارير، تجار، مزادات، واستشارات خبراء.",
      "إضافة الأحجار الكريمة تفتح شريحة أعلى قيمة من المستخدمين والمعاملات.",
      "دعم اللغات يعطي قابلية دخول أسواق متعددة من البداية، وليس بعد سنوات.",
      "كل تقييم يمكن أن يبني طبقة بيانات وسوق تساعد في رفع قيمة المنصة مع الوقت.",
      "الاستثمار المطلوب صغير مقارنة بإمكانية بناء أصل رقمي قابل للتوسع عالمياً.",
    ],
    notesLabel: "Important Notes",
    notesTitle: "ملاحظات مهمة للمستثمر",
    notes: [
      "الأرقام تقديرية وليست ضماناً للعائد.",
      "حصة المستثمر محسوبة على أساس 9% من صافي الأرباح السنوية، وليس من إجمالي الإيرادات.",
      "العائد يعتمد على نجاح التسويق، عدد الحسابات، نسبة التحويل، وحجم التقارير والخدمات المدفوعة.",
      "استثمار 32,000 دولار هدفه تسريع الوصول للسوق وبناء قيمة تجارية، وليس فقط تغطية مصاريف تشغيل.",
    ],
    closingTitle: "القيمة الحقيقية ليست في أول سنة فقط",
    closingText:
      "القيمة الأكبر في KISHIB تظهر عندما تتراكم قاعدة المستخدمين، التقارير، البيانات السوقية، علاقات الخبراء، وحالات الاستخدام المدفوعة. هذا هو الفرق بين تطبيق محدود ومنصة قابلة للتحول إلى أصل استثماري.",
  },

  en: {
    dir: "ltr" as const,
    align: "text-left",
    sectionLabel: "INVESTOR RETURN",
    title: "$32,000 investment for 9% of KISHIB annual net profit",
    intro:
      "The investment opportunity in KISHIB is not funding a temporary experiment. It is an early entry into a scalable platform operating in a high-value market: antiques, collectibles, artworks, and gemstones. The requested investment is designed to accelerate commercial development, strengthen the product experience, build user acquisition channels, and prepare the platform for recurring, multi-layer revenue.",
    ownership: {
      title: "Project Ownership",
      value: "Abaad Al Iraq",
      text: "The platform remains owned and operated under Abaad Al Iraq, while the investor enters as a partner in annual net profit under a clear percentage structure.",
    },
    investment: {
      title: "Required Investment",
      value: "$32,000",
      text: "Capital allocated to accelerate development, prepare commercial launch, build trust, support marketing, and expand the platform’s paid conversion potential.",
    },
    share: {
      title: "Investor Share",
      value: "9%",
      text: "The investor receives 9% of the platform’s annual net profit, not gross revenue, under a clear investment agreement.",
    },
    tableLabel: "9% Annual Net Profit Share",
    tableTitle: "Expected investor return over the first 3 years",
    tableHeaders: [
      "Year",
      "Projected Revenue",
      "Expenses",
      "Net Profit",
      "Investor Share",
      "Stage",
    ],
    scenarios: [
      {
        year: "Year 1",
        revenue: "$126,000",
        expenses: "$95,000",
        netProfit: "$31,000",
        investorShare: "$2,790",
        note: "Launch and market validation",
      },
      {
        year: "Year 2",
        revenue: "$294,000",
        expenses: "$145,000",
        netProfit: "$149,000",
        investorShare: "$13,410",
        note: "Growth and conversion improvement",
      },
      {
        year: "Year 3",
        revenue: "$504,000",
        expenses: "$210,000",
        netProfit: "$294,000",
        investorShare: "$26,460",
        note: "Expansion and revenue maturity",
      },
    ],
    totalReturnText:
      "Based on this model, the investor’s total return over the first 3 years can reach approximately $42,660, while the profit-share position can continue beyond year three as long as the agreement remains active.",
    paybackTitle: "When does the investor recover capital?",
    paybackText:
      "Capital recovery in a high-growth digital product is not measured from month one. It is measured from the point where the product becomes a repeatable revenue engine. In this scenario, meaningful return starts in year two, with potential capital recovery approaching year three if planned growth, paid conversion, and report monetization are achieved.",
    paybackLabel: "Estimated Payback",
    paybackValue: "30 - 36 months",
    paybackNote:
      "This estimate depends on paid subscriptions, user acquisition cost, paid report growth, and activation of expert consultation and high-value service layers.",
    whyLabel: "INVESTMENT LOGIC",
    whyTitle: "Why this offer matters to an investor",
    reasons: [
      "Early entry into a specialized platform in a high-value market that is still digitally under-structured.",
      "Revenue model is not dependent on one stream: subscriptions, reports, dealers, auctions, and expert consultations.",
      "The gemstone vertical opens access to higher-value users and transactions.",
      "Multi-language support creates international expansion potential from the beginning.",
      "Every evaluation can contribute to a growing data and market intelligence layer.",
      "The required investment is relatively small compared with the potential of building a scalable global digital asset.",
    ],
    notesLabel: "Important Notes",
    notesTitle: "Important investor notes",
    notes: [
      "Figures are projections and do not guarantee return.",
      "The investor share is calculated as 9% of annual net profit, not gross revenue.",
      "Return depends on marketing performance, account growth, conversion rate, paid reports, and paid service adoption.",
      "$32,000 is intended to accelerate market entry and commercial value creation, not merely cover operating costs.",
    ],
    closingTitle: "The real value is not limited to year one",
    closingText:
      "KISHIB’s larger value emerges as users, reports, market data, expert relationships, and paid use cases accumulate. That is the difference between a limited app and a platform that can become an investable digital asset.",
  },
};

export default function InvestorReturn({ lang = "ar" }: InvestorReturnProps) {
  const t = content[lang];

  const investmentTerms = [
    {
      icon: Landmark,
      ...t.ownership,
    },
    {
      icon: Banknote,
      ...t.investment,
    },
    {
      icon: BadgePercent,
      ...t.share,
    },
  ];

  return (
    <section
      id="investor"
      dir={t.dir}
      className={[
        "relative overflow-hidden bg-[#050302] px-5 py-24 text-white md:px-8 lg:px-10 xl:pl-52 xl:pr-16",
        t.align,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute right-[-180px] top-24 h-96 w-96 rounded-full bg-[#d7a35f]/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-[-160px] bottom-0 h-96 w-96 rounded-full bg-[#3a1c0b]/30 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7a35f]">
              {t.sectionLabel}
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
              {t.title}
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-white/62">{t.intro}</p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {investmentTerms.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d7a35f]/35 hover:bg-white/[0.07]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
                    <Icon size={22} />
                  </div>

                  <p className="text-3xl font-semibold tracking-[-0.04em] text-white">
                    {item.value}
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 md:p-7">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                {t.tableLabel}
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                {t.tableTitle}
              </h3>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
              <CircleDollarSign size={24} />
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
            <div className="hidden grid-cols-6 border-b border-white/10 bg-black/30 px-5 py-4 text-xs font-semibold text-white/45 md:grid">
              {t.tableHeaders.map((header) => (
                <span key={header}>{header}</span>
              ))}
            </div>

            {t.scenarios.map((item) => (
              <div
                key={item.year}
                className="grid gap-3 border-b border-white/10 bg-black/10 px-5 py-5 text-sm last:border-b-0 md:grid-cols-6 md:items-center"
              >
                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    {t.tableHeaders[0]}
                  </span>
                  <span className="font-semibold text-white">{item.year}</span>
                </div>

                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    {t.tableHeaders[1]}
                  </span>
                  <span className="text-white/65">{item.revenue}</span>
                </div>

                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    {t.tableHeaders[2]}
                  </span>
                  <span className="text-white/65">{item.expenses}</span>
                </div>

                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    {t.tableHeaders[3]}
                  </span>
                  <span className="text-[#f0c987]">{item.netProfit}</span>
                </div>

                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    {t.tableHeaders[4]}
                  </span>
                  <span className="text-lg font-semibold text-white">
                    {item.investorShare}
                  </span>
                </div>

                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    {t.tableHeaders[5]}
                  </span>
                  <span className="text-white/45">{item.note}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm leading-7 text-white/45">
            {t.totalReturnText}
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-7">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
              <TrendingUp size={24} />
            </div>

            <h3 className="mt-8 text-3xl font-semibold tracking-[-0.03em] text-white">
              {t.paybackTitle}
            </h3>

            <p className="mt-5 text-base leading-8 text-white/62">
              {t.paybackText}
            </p>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/25 p-6">
              <p className="text-sm text-white/45">{t.paybackLabel}</p>

              <p className="mt-2 text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                {t.paybackValue}
              </p>

              <p className="mt-3 text-sm leading-7 text-white/50">
                {t.paybackNote}
              </p>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/8 text-[#f0c987]">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white">
                    {t.closingTitle}
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-white/62">
                    {t.closingText}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                  {t.whyLabel}
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                  {t.whyTitle}
                </h3>
              </div>

              <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987] sm:flex">
                <Target size={24} />
              </div>
            </div>

            <div className="grid gap-3">
              {t.reasons.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[1.25rem] border border-white/10 bg-black/20 p-4"
                >
                  <Handshake
                    size={17}
                    className="mt-1 shrink-0 text-[#d7a35f]"
                  />

                  <p className="text-sm leading-7 text-white/62">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
          <div className="mb-7 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                {t.notesLabel}
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                {t.notesTitle}
              </h3>
            </div>

            <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987] sm:flex">
              <Info size={24} />
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-2">
            {t.notes.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-[1.25rem] border border-white/10 bg-black/20 p-4"
              >
                <ShieldCheck
                  size={17}
                  className="mt-1 shrink-0 text-[#d7a35f]"
                />

                <p className="text-sm leading-7 text-white/62">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <InvestorPaybackChart lang={lang} />
    </section>
  );
}