import {
  BadgeDollarSign,
  Banknote,
  BarChart3,
  Crown,
  FileText,
  Gem,
  Handshake,
  Percent,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

type Lang = "ar" | "en";

type RevenueModelProps = {
  lang?: Lang;
};

const content = {
  ar: {
    dir: "rtl" as const,
    align: "text-right",
    sectionLabel: "REVENUE MODEL",
    title: "KISHIB مبنية على أكثر من مصدر دخل",
    intro:
      "نموذج الإيرادات في KISHIB لا يعتمد على اشتراك بسيط فقط. المنصة يمكن أن تجمع بين الاشتراكات، التقارير المدفوعة، خدمات التجار، أدوات المزادات، استشارات الخبراء، وخدمات التحقق للقطع عالية القيمة. هذا يحوّل المشروع من تطبيق محدود إلى منصة ذات طبقات دخل متعددة.",
    plans: [
      {
        title: "اشتراك شهري",
        price: "$5",
        note: "مناسب للمستخدمين الذين يحتاجون تقييمات متكررة للقطع، المقتنيات، أو الأحجار الكريمة.",
        icon: Banknote,
      },
      {
        title: "اشتراك سنوي",
        price: "$42",
        note: "خيار أقل تكلفة للمستخدم الجاد، الجامع، أو التاجر الذي يستخدم المنصة بشكل مستمر.",
        icon: Crown,
      },
      {
        title: "تقارير مدفوعة",
        price: "$9 - $19",
        note: "تقارير احترافية قابلة للحفظ والمشاركة والطباعة، ويمكن تطويرها لاحقاً للصفقات عالية القيمة.",
        icon: FileText,
      },
    ],
    scenarioLabel: "100K Accounts Scenario",
    scenarioTitle: "سيناريو 100 ألف حساب",
    tableHeaders: [
      "السيناريو",
      "الحسابات",
      "نسبة التحويل",
      "المشتركين",
      "الاشتراك السنوي",
      "الإيراد السنوي",
    ],
    scenarios: [
      {
        label: "محافظ",
        accounts: "100,000",
        conversion: "3%",
        subscribers: "3,000",
        annualPrice: "$42",
        revenue: "$126,000",
      },
      {
        label: "متوسط",
        accounts: "100,000",
        conversion: "7%",
        subscribers: "7,000",
        annualPrice: "$42",
        revenue: "$294,000",
      },
      {
        label: "قوي",
        accounts: "100,000",
        conversion: "12%",
        subscribers: "12,000",
        annualPrice: "$42",
        revenue: "$504,000",
      },
    ],
    scenarioNote:
      "هذه الأرقام مبنية فقط على الاشتراك السنوي بقيمة 42 دولار. لا تشمل التقارير المدفوعة، استشارات الخبراء، باقات التجار، أدوات المزادات، أو أي عمولات مستقبلية.",
    monthlyTitle: "مثال مباشر: 10,000 مشترك شهري",
    monthlyText:
      "إذا وصل عدد المشتركين الشهريين إلى 10,000 مستخدم فقط، بسعر 5 دولارات شهرياً، فهذا يعني:",
    monthlyRevenueLabel: "إيراد شهري",
    annualRevenueLabel: "إيراد سنوي تقريبي",
    extraLabel: "Extra Revenue",
    extraTitle: "مصادر دخل إضافية",
    extraRevenue: [
      "تقارير تقييم مدفوعة وقابلة للتصدير.",
      "باقات احترافية للتجار وجامعي القطع.",
      "اشتراكات خاصة للمعارض والمزادات.",
      "حجز استشارات مباشرة مع خبراء حقيقيين.",
      "خدمات تحقق مدفوعة للقطع عالية القيمة.",
      "عمولة مستقبلية عند إطلاق سوق بيع وشراء داخل المنصة.",
      "إعلانات مختارة أو Featured Listings للقطع والتجار.",
      "خدمات بيانات وسوق للشركات أو منصات التجارة.",
    ],
    expertTitle: "طبقة الخبراء تفتح دخلاً أعلى من الاشتراكات",
    expertText:
      "الاشتراكات تعطي دخلاً متكرراً، لكن الربح الأعلى غالباً يأتي من الحالات الحساسة: قطعة ثمينة، حجر كريم، مزاد، أو صفقة بيع. هنا يمكن للمنصة أخذ رسوم حجز أو عمولة على ربط المستخدم بخبير موثوق.",
    investorTitle: "النقطة المهمة للمستثمر",
    investorText:
      "KISHIB لا تُبنى كمنتج يدفع له المستخدم مرة واحدة ثم يختفي. هي منصة يمكن أن تربح من المستخدم العادي، التاجر، الخبير، المزاد، والتقرير المدفوع. كل طبقة تضيف إيراداً جديداً فوق الطبقة السابقة.",
  },

  en: {
    dir: "ltr" as const,
    align: "text-left",
    sectionLabel: "REVENUE MODEL",
    title: "KISHIB is built around multiple revenue layers",
    intro:
      "KISHIB is not dependent on a basic subscription model alone. The platform can combine subscriptions, paid reports, dealer tools, auction services, expert consultations, and verification services for high-value items. This turns the product from a limited app into a multi-layer revenue platform.",
    plans: [
      {
        title: "Monthly Plan",
        price: "$5",
        note: "Designed for users who need repeated evaluations for antiques, collectibles, artworks, or gemstones.",
        icon: Banknote,
      },
      {
        title: "Annual Plan",
        price: "$42",
        note: "A lower-cost option for serious users, collectors, and dealers who use the platform consistently.",
        icon: Crown,
      },
      {
        title: "Paid Reports",
        price: "$9 - $19",
        note: "Professional reports that can be saved, shared, or printed, with room to expand into higher-value transaction reports.",
        icon: FileText,
      },
    ],
    scenarioLabel: "100K Accounts Scenario",
    scenarioTitle: "100,000 Account Scenario",
    tableHeaders: [
      "Scenario",
      "Accounts",
      "Conversion",
      "Subscribers",
      "Annual Plan",
      "Annual Revenue",
    ],
    scenarios: [
      {
        label: "Conservative",
        accounts: "100,000",
        conversion: "3%",
        subscribers: "3,000",
        annualPrice: "$42",
        revenue: "$126,000",
      },
      {
        label: "Base Case",
        accounts: "100,000",
        conversion: "7%",
        subscribers: "7,000",
        annualPrice: "$42",
        revenue: "$294,000",
      },
      {
        label: "Strong Case",
        accounts: "100,000",
        conversion: "12%",
        subscribers: "12,000",
        annualPrice: "$42",
        revenue: "$504,000",
      },
    ],
    scenarioNote:
      "These numbers are based only on the $42 annual subscription. They do not include paid reports, expert consultations, dealer packages, auction tools, or future transaction commissions.",
    monthlyTitle: "Simple example: 10,000 monthly subscribers",
    monthlyText:
      "If KISHIB reaches only 10,000 monthly subscribers at $5 per month, that creates:",
    monthlyRevenueLabel: "Monthly revenue",
    annualRevenueLabel: "Approximate annual revenue",
    extraLabel: "Extra Revenue",
    extraTitle: "Additional revenue streams",
    extraRevenue: [
      "Paid exportable evaluation reports.",
      "Professional packages for dealers and collectors.",
      "Special subscriptions for galleries and auction houses.",
      "Direct booking of consultations with real experts.",
      "Paid verification services for high-value items.",
      "Future commission when an internal marketplace is launched.",
      "Featured listings for selected items and dealers.",
      "Market data services for companies or commerce platforms.",
    ],
    expertTitle: "The expert layer can generate higher-value revenue",
    expertText:
      "Subscriptions create recurring revenue, but higher-margin revenue often comes from sensitive cases: a valuable object, a gemstone, an auction, or a sale transaction. KISHIB can monetize this through booking fees or commission when connecting users with trusted specialists.",
    investorTitle: "The key investor point",
    investorText:
      "KISHIB is not being built as a one-time-use product. It is a platform that can monetize casual users, dealers, experts, auctions, and paid reports. Each layer adds revenue on top of the previous one.",
  },
};

export default function RevenueModel({ lang = "ar" }: RevenueModelProps) {
  const t = content[lang];

  return (
    <section
      id="revenue"
      dir={t.dir}
      className={[
        "relative overflow-hidden bg-[#070403] px-5 py-24 text-white md:px-8 lg:px-10 xl:pl-52 xl:pr-16",
        t.align,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute left-[-160px] top-10 h-96 w-96 rounded-full bg-[#d7a35f]/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-180px] bottom-0 h-96 w-96 rounded-full bg-[#3a1c0b]/35 blur-[130px]" />

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
          {t.plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <div
                key={plan.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d7a35f]/35 hover:bg-white/[0.07]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
                    <Icon size={22} />
                  </div>

                  <span className="text-4xl font-semibold tracking-[-0.05em] text-white">
                    {plan.price}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {plan.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  {plan.note}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 md:p-7">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                {t.scenarioLabel}
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                {t.scenarioTitle}
              </h3>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
              <Users size={24} />
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
                key={item.label}
                className="grid gap-3 border-b border-white/10 bg-black/10 px-5 py-5 text-sm last:border-b-0 md:grid-cols-6 md:items-center"
              >
                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    {t.tableHeaders[0]}
                  </span>
                  <span className="font-semibold text-white">{item.label}</span>
                </div>

                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    {t.tableHeaders[1]}
                  </span>
                  <span className="text-white/65">{item.accounts}</span>
                </div>

                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    {t.tableHeaders[2]}
                  </span>
                  <span className="text-[#f0c987]">{item.conversion}</span>
                </div>

                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    {t.tableHeaders[3]}
                  </span>
                  <span className="text-white/65">{item.subscribers}</span>
                </div>

                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    {t.tableHeaders[4]}
                  </span>
                  <span className="text-white/65">{item.annualPrice}</span>
                </div>

                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    {t.tableHeaders[5]}
                  </span>
                  <span className="text-lg font-semibold text-white">
                    {item.revenue}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm leading-7 text-white/45">
            {t.scenarioNote}
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-7">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
              <TrendingUp size={24} />
            </div>

            <h3 className="mt-8 text-3xl font-semibold tracking-[-0.03em] text-white">
              {t.monthlyTitle}
            </h3>

            <p className="mt-5 text-base leading-8 text-white/62">
              {t.monthlyText}
            </p>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/25 p-6">
              <p className="text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                $50,000
              </p>
              <p className="mt-2 text-sm text-white/50">
                {t.monthlyRevenueLabel}
              </p>

              <div className="my-5 h-px bg-white/10" />

              <p className="text-4xl font-semibold tracking-[-0.05em] text-[#f0c987] md:text-5xl">
                $600,000
              </p>
              <p className="mt-2 text-sm text-white/50">
                {t.annualRevenueLabel}
              </p>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/8 text-[#f0c987]">
                  <ShieldCheck size={20} />
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white">
                    {t.investorTitle}
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-white/62">
                    {t.investorText}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                  {t.extraLabel}
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                  {t.extraTitle}
                </h3>
              </div>

              <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987] sm:flex">
                <BadgeDollarSign size={24} />
              </div>
            </div>

            <div className="grid gap-3">
              {t.extraRevenue.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-[1.25rem] border border-white/10 bg-black/20 p-4"
                >
                  <Percent size={17} className="shrink-0 text-[#d7a35f]" />
                  <p className="text-sm leading-7 text-white/62">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
                  <Handshake size={20} />
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white">
                    {t.expertTitle}
                  </h4>
                  <p className="mt-2 text-sm leading-7 text-white/62">
                    {t.expertText}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/8 text-[#f0c987]">
                  <Gem size={20} />
                </div>

                <p className="text-sm leading-7 text-white/62">
                  {lang === "ar"
                    ? "قسم الأحجار الكريمة يضيف فرصة دخل أعلى من التقييمات العادية، لأن المستخدم في هذا القطاع غالباً يتعامل مع قطع أعلى قيمة ويحتاج ثقة أكبر قبل البيع أو الشراء."
                    : "The gemstone vertical adds a higher-value revenue opportunity because users in this segment often deal with more expensive items and need stronger confidence before buying or selling."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}