import {
  Activity,
  BadgeDollarSign,
  BarChart3,
  BookOpenCheck,
  BrainCircuit,
  CheckCircle2,
  Cloud,
  Database,
  Megaphone,
  ReceiptText,
  ShieldCheck,
  TrendingUp,
  Users,
  WalletCards,
} from "lucide-react";

type Lang = "ar" | "en";

type OperatingCostsProps = {
  lang?: Lang;
};

const isArabic = (lang: Lang) => lang === "ar";

const yearlyCosts = [
  {
    year: "Year 1",
    yearAr: "السنة الأولى",
    stageAr: "مرحلة الإطلاق التجاري",
    stageEn: "Commercial Launch Stage",
    revenue: "$360,000",
    operatingCost: "$320,000",
    netProfit: "$0 - $40,000",
    margin: "0% - 11%",
    costRatio: "88.9%",
    progress: "24%",
    noteAr:
      "تركّز السنة الأولى على إطلاق المنصة، بناء الثقة، تشغيل البنية التقنية، دعم المستخدمين، تحسين دقة التقييم، وتأسيس أول قاعدة مستخدمين مدفوعة.",
    noteEn:
      "Year one focuses on platform launch, trust building, technical operations, user support, valuation accuracy improvements, and the first paid user base.",
  },
  {
    year: "Year 2",
    yearAr: "السنة الثانية",
    stageAr: "مرحلة التوسع المنظم",
    stageEn: "Structured Growth Stage",
    revenue: "$839,800",
    operatingCost: "$719,800",
    netProfit: "$120,000",
    margin: "14.3%",
    costRatio: "85.7%",
    progress: "56%",
    noteAr:
      "تزيد المصاريف التشغيلية مع توسع المستخدمين، الحملات التسويقية، مصادر البيانات، ودعم الاشتراكات، لكن الإيرادات تنمو بوتيرة أسرع وتبدأ المنصة بتحقيق صافي ربح واضح.",
    noteEn:
      "Operating expenses increase with user growth, marketing, data sources, and subscription support, while revenue grows faster and the platform starts generating clear net profit.",
  },
  {
    year: "Year 3",
    yearAr: "السنة الثالثة",
    stageAr: "مرحلة التوسع الدولي",
    stageEn: "International Scale Stage",
    revenue: "$1,650,000",
    operatingCost: "$1,350,000",
    netProfit: "$300,000",
    margin: "18.2%",
    costRatio: "81.8%",
    progress: "100%",
    noteAr:
      "تمثل السنة الثالثة مرحلة توسع أكبر في الأسواق، الشراكات، خدمات التجار، التقارير المدفوعة، المحتوى المرجعي، وربط مصادر بيانات أوسع، مع تحسن ملحوظ في هامش الربح.",
    noteEn:
      "Year three represents broader scale across markets, partnerships, dealer services, paid reports, reference content, and wider data integrations, with a clear improvement in profit margin.",
  },
];

const costBreakdown = [
  {
    titleAr: "الفريق التشغيلي والتقني",
    titleEn: "Operating and Technical Team",
    y1: "$118,000",
    y2: "$260,000",
    y3: "$485,000",
    icon: Users,
    noteAr:
      "يشمل المطورين، الدعم الفني، إدارة المنتج، متابعة التشغيل اليومي، وفريق تحسين تجربة المستخدم.",
    noteEn:
      "Includes developers, technical support, product management, daily operations, and user experience improvement.",
  },
  {
    titleAr: "الذكاء الاصطناعي وواجهات API",
    titleEn: "AI and API Infrastructure",
    y1: "$54,000",
    y2: "$118,000",
    y3: "$220,000",
    icon: BrainCircuit,
    noteAr:
      "يشمل استهلاك نماذج الذكاء الاصطناعي، تحليل الصور، أسعار المعادن، بيانات الأسواق، المزادات، ومصادر المقارنة.",
    noteEn:
      "Includes AI model usage, image analysis, metal prices, market data, auctions, and comparison sources.",
  },
  {
    titleAr: "الخوادم والتخزين والحماية",
    titleEn: "Servers, Storage, and Security",
    y1: "$32,000",
    y2: "$74,000",
    y3: "$142,000",
    icon: Cloud,
    noteAr:
      "يشمل الاستضافة، قواعد البيانات، تخزين الصور، النسخ الاحتياطي، مراقبة الأداء، وحماية بيانات المستخدمين.",
    noteEn:
      "Includes hosting, databases, image storage, backups, performance monitoring, and user data protection.",
  },
  {
    titleAr: "التسويق واكتساب المستخدمين",
    titleEn: "Marketing and User Acquisition",
    y1: "$72,000",
    y2: "$170,000",
    y3: "$320,000",
    icon: Megaphone,
    noteAr:
      "يشمل الحملات الرقمية، المحتوى التسويقي، إطلاق الأسواق الجديدة، شراكات التجار، وتنمية قاعدة المستخدمين المدفوعين.",
    noteEn:
      "Includes digital campaigns, marketing content, new market launches, dealer partnerships, and paid user growth.",
  },
  {
    titleAr: "الموسوعة والمحتوى المرجعي",
    titleEn: "Encyclopedia and Reference Content",
    y1: "$24,000",
    y2: "$58,000",
    y3: "$94,000",
    icon: BookOpenCheck,
    noteAr:
      "يشمل تطوير موسوعة KISHIB، المقالات، الصور المرجعية، التصنيفات، نطاقات الأسعار، ومراجعة المعلومات.",
    noteEn:
      "Includes KISHIB Encyclopedia development, articles, reference images, categories, price ranges, and content review.",
  },
  {
    titleAr: "القانون والمحاسبة والإدارة",
    titleEn: "Legal, Accounting, and Administration",
    y1: "$20,000",
    y2: "$39,800",
    y3: "$89,000",
    icon: ReceiptText,
    noteAr:
      "يشمل المحاسبة، العقود، التقارير المالية، الاشتراكات الإدارية، أدوات التشغيل، والمصاريف القانونية والتنظيمية.",
    noteEn:
      "Includes accounting, contracts, financial reporting, admin subscriptions, operating tools, and legal/regulatory expenses.",
  },
];

const investorHighlights = [
  {
    titleAr: "فصل مالي واضح بين التأسيس والتشغيل",
    titleEn: "Clear Financial Separation Between Build and Operations",
    textAr:
      "ميزانية 470,000 دولار تمثل كلفة بناء وإطلاق المنصة. أما المصاريف التشغيلية السنوية فتبدأ بعد الإطلاق وترتبط بحجم الاستخدام، توسع المستخدمين، الحملات التسويقية، ومصادر البيانات.",
    textEn:
      "The $470,000 budget represents the platform build and launch cost. Annual operating expenses begin after launch and are linked to usage volume, user growth, marketing activity, and data sources.",
    icon: BadgeDollarSign,
  },
  {
    titleAr: "تحسن تدريجي في كفاءة التشغيل",
    titleEn: "Gradual Improvement in Operating Efficiency",
    textAr:
      "رغم ارتفاع المصاريف التشغيلية مع التوسع، تنخفض نسبتها من الإيرادات من 88.9% في السنة الأولى إلى 81.8% في السنة الثالثة، ما يعكس تحسن كفاءة النمو وقابلية المنصة للتوسع.",
    textEn:
      "Although operating expenses increase with scale, their share of revenue decreases from 88.9% in year one to 81.8% in year three, reflecting stronger efficiency and scalability.",
    icon: TrendingUp,
  },
  {
    titleAr: "نموذج عائد مبني على صافي الربح",
    titleEn: "Return Model Based on Net Profit",
    textAr:
      "حصة المستثمر البالغة 10% تُحتسب من صافي الربح بعد خصم المصاريف التشغيلية، وليس من الإيراد الإجمالي. هذا يجعل نموذج العائد واقعياً ومحافظاً وقابلاً للمراجعة المالية.",
    textEn:
      "The investor’s 10% share is calculated from net profit after operating expenses, not gross revenue. This keeps the return model realistic, conservative, and financially reviewable.",
    icon: WalletCards,
  },
];

function StatCard({
  label,
  value,
  helper,
}: {
  label: string;
  value: string;
  helper?: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/35">
        {label}
      </p>
      <p className="mt-3 text-2xl font-bold text-white md:text-3xl">{value}</p>
      {helper ? <p className="mt-2 text-sm leading-6 text-white/55">{helper}</p> : null}
    </div>
  );
}

export default function OperatingCosts({ lang = "ar" }: OperatingCostsProps) {
  const ar = isArabic(lang);

  return (
    <section
      id="operating-costs"
      dir={ar ? "rtl" : "ltr"}
      className={[
        "relative overflow-hidden bg-[#070403] px-5 py-24 text-white md:px-8 lg:px-10 xl:px-16",
        ar ? "text-right xl:pl-52" : "text-left xl:pr-52",
      ].join(" ")}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-red-900/20 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-200/70">
                  OPEX MOVEMENT
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {ar ? "مؤشر نمو المصاريف التشغيلية" : "Operating Expense Growth Indicator"}
                </h3>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
                <BarChart3 className="h-6 w-6 text-amber-200" />
              </div>
            </div>

            <div className="grid grid-cols-3 items-end gap-4 rounded-3xl border border-white/10 bg-black/25 p-4">
              {yearlyCosts.map((item) => (
                <div key={item.year} className="text-center">
                  <div className="flex h-44 items-end rounded-2xl border border-white/10 bg-white/[0.04] p-2">
                    <div
                      className="relative w-full overflow-hidden rounded-xl bg-gradient-to-t from-amber-700 via-amber-600 to-white/60 shadow-lg shadow-amber-950/30"
                      style={{ height: item.progress }}
                    >
                      <div className="absolute inset-x-0 top-0 h-1/3 bg-white/20" />
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-white">
                    {ar ? item.yearAr : item.year}
                  </p>
                  <p className="mt-1 text-xs text-amber-100/80">{item.operatingCost}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="relative h-3 overflow-hidden rounded-full bg-white/10">
                <div className="absolute inset-y-0 left-0 w-full rounded-full bg-gradient-to-r from-amber-600 via-orange-600 to-red-600" />
                <div className="absolute left-[24%] top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border-2 border-[#070403] bg-white shadow-lg shadow-black/50" />
                <div className="absolute left-[56%] top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border-2 border-[#070403] bg-white shadow-lg shadow-black/50" />
                <div className="absolute left-[calc(100%-12px)] top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border-2 border-[#070403] bg-white shadow-lg shadow-black/50" />
              </div>
              <p className="mt-4 text-xs leading-6 text-white/55">
                {ar
                  ? "المؤشر يوضح أن المصاريف ترتفع مع توسع المنصة، لكن صافي الربح يتحسن لأن الإيرادات تنمو بوتيرة أعلى."
                  : "The indicator shows that expenses rise with scale, while net profit improves because revenue grows at a stronger pace."}
              </p>
            </div>
          </div>

          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-amber-200/80">
              <Activity className="h-4 w-4" />
              OPERATING COSTS
            </div>

            <h2 className="max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">
              {ar
                ? "المصاريف التشغيلية المتوقعة لأول 3 سنوات"
                : "Projected Operating Expenses for the First 3 Years"}
            </h2>

            <p className="mt-5 max-w-4xl text-sm leading-8 text-white/65 md:text-base">
              {ar
                ? "يوضح هذا القسم المصاريف التشغيلية السنوية لمنصة KISHIB بعد الإطلاق التجاري، مع ربط مباشر بين حجم المصروف، الإيراد المتوقع، وصافي الربح. الهدف من هذا العرض هو تقديم نموذج مالي واضح يشرح كيف تتحرك الكلفة مع نمو المنصة، وكيف تتحسن الكفاءة التشغيلية تدريجياً."
                : "This section presents KISHIB’s annual post-launch operating expenses, directly connected to projected revenue and net profit. The objective is to show how costs move with platform growth and how operating efficiency improves over time."}
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              <StatCard
                label={ar ? "كلفة البناء والإطلاق" : "Build & Launch Budget"}
                value="$470,000"
                helper={ar ? "كلفة تأسيسية لمرة واحدة" : "One-time foundation cost"}
              />
              <StatCard
                label={ar ? "تشغيل السنة الأولى" : "Year 1 OPEX"}
                value="$320,000"
                helper={ar ? "بعد الإطلاق التجاري" : "Post-commercial launch"}
              />
              <StatCard
                label={ar ? "صافي ربح السنة الثالثة" : "Year 3 Net Profit"}
                value="$300,000"
                helper={ar ? "بعد المصاريف التشغيلية" : "After operating expenses"}
              />
            </div>
          </div>
        </div>

        <div className="mb-10 grid gap-4 md:grid-cols-3">
          {investorHighlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.titleEn}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/20 backdrop-blur-xl"
              >
                <div className="mb-6 flex justify-end">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
                    <Icon className="h-6 w-6 text-amber-200" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {ar ? item.titleAr : item.titleEn}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/60">
                  {ar ? item.textAr : item.textEn}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mb-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="border-b border-white/10 p-6">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-200/70">
                  3-YEAR OPERATING MODEL
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {ar ? "جدول المصاريف والإيرادات وصافي الربح" : "Operating Cost, Revenue, and Net Profit Table"}
                </h3>
              </div>
              <Database className="h-8 w-8 text-white/35" />
            </div>
          </div>

          <div className="hidden grid-cols-6 border-b border-white/10 bg-black/25 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/35 md:grid">
            <div>{ar ? "السنة" : "Year"}</div>
            <div>{ar ? "المرحلة" : "Stage"}</div>
            <div>{ar ? "الإيراد المتوقع" : "Revenue"}</div>
            <div>{ar ? "المصاريف التشغيلية" : "OPEX"}</div>
            <div>{ar ? "صافي الربح" : "Net Profit"}</div>
            <div>{ar ? "نسبة المصروف" : "Cost Ratio"}</div>
          </div>

          <div className="divide-y divide-white/10">
            {yearlyCosts.map((item) => (
              <div
                key={item.year}
                className="grid gap-5 px-6 py-6 md:grid-cols-6 md:items-center"
              >
                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/35 md:hidden">
                    {ar ? "السنة" : "Year"}
                  </p>
                  <p className="text-base font-semibold text-white">
                    {ar ? item.yearAr : item.year}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/35 md:hidden">
                    {ar ? "المرحلة" : "Stage"}
                  </p>
                  <p className="text-sm text-white/70">{ar ? item.stageAr : item.stageEn}</p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/35 md:hidden">
                    {ar ? "الإيراد المتوقع" : "Revenue"}
                  </p>
                  <p className="text-sm font-semibold text-white">{item.revenue}</p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/35 md:hidden">
                    {ar ? "المصاريف التشغيلية" : "OPEX"}
                  </p>
                  <p className="text-sm font-semibold text-amber-100">{item.operatingCost}</p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/35 md:hidden">
                    {ar ? "صافي الربح" : "Net Profit"}
                  </p>
                  <p className="text-sm font-semibold text-white">{item.netProfit}</p>
                </div>

                <div>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-white/35 md:hidden">
                    {ar ? "نسبة المصروف" : "Cost Ratio"}
                  </p>
                  <p className="text-sm font-semibold text-white">{item.costRatio}</p>
                  <p className="mt-1 text-xs text-white/45">
                    {ar ? "هامش الربح: " : "Profit margin: "}
                    {item.margin}
                  </p>
                </div>

                <div className="md:col-span-6">
                  <p className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/58">
                    {ar ? item.noteAr : item.noteEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
          <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-200/70">
                COST BREAKDOWN
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-white">
                {ar ? "تفصيل بنود المصاريف التشغيلية" : "Operating Expense Breakdown"}
              </h3>
            </div>
            <ShieldCheck className="h-8 w-8 text-white/35" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {costBreakdown.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.titleEn}
                  className="rounded-3xl border border-white/10 bg-black/20 p-5"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-base font-semibold text-white">
                        {ar ? item.titleAr : item.titleEn}
                      </h4>
                      <p className="mt-2 text-sm leading-7 text-white/55">
                        {ar ? item.noteAr : item.noteEn}
                      </p>
                    </div>
                    <div className="shrink-0 rounded-2xl border border-white/10 bg-white/10 p-3">
                      <Icon className="h-5 w-5 text-amber-200" />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                        {ar ? "سنة 1" : "Y1"}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-white">{item.y1}</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                        {ar ? "سنة 2" : "Y2"}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-white">{item.y2}</p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                        {ar ? "سنة 3" : "Y3"}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-white">{item.y3}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-3xl border border-amber-300/15 bg-amber-300/[0.06] p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h4 className="text-xl font-semibold text-white">
                  {ar ? "الخلاصة " : "Financial Summary for the Investor"}
                </h4>
                <p className="mt-3 max-w-5xl text-sm leading-8 text-white/65">
                  {ar
                    ? "نموذج التشغيل يوضح أن KISHIB لا يعتمد على زيادة المصاريف فقط، بل على تحويل المصاريف إلى نمو في المستخدمين، الاشتراكات، التقارير المدفوعة، خدمات التجار، وقيمة البيانات. مع نهاية السنة الثالثة، تصل الإيرادات المتوقعة إلى 1,650,000 دولار مقابل 1,350,000 دولار كمصاريف تشغيلية، بما يترك صافي ربح متوقع قدره 300,000 دولار."
                    : "The operating model shows that KISHIB does not rely on spending growth alone, but on converting operating expenses into user growth, subscriptions, paid reports, dealer services, and data value. By the end of year three, projected revenue reaches $1,650,000 against $1,350,000 in operating expenses, leaving an expected net profit of $300,000."}
                </p>
              </div>

              <div className="grid min-w-[220px] gap-3">
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 p-4">
                  <CheckCircle2 className="h-5 w-5 text-amber-200" />
                  <span className="text-sm text-white/70">
                    {ar ? "نموذج محافظ وقابل للمراجعة" : "Conservative and reviewable model"}
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 p-4">
                  <TrendingUp className="h-5 w-5 text-amber-200" />
                  <span className="text-sm text-white/70">
                    {ar ? "تحسن واضح في كفاءة التشغيل" : "Clear operating efficiency improvement"}
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 p-4">
                  <WalletCards className="h-5 w-5 text-amber-200" />
                  <span className="text-sm text-white/70">
                    {ar ? "العائد مرتبط بصافي الربح" : "Return linked to net profit"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}