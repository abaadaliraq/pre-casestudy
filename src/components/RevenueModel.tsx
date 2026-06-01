import Link from "next/link";
import {
  ArrowUpLeft,
  BadgeDollarSign,
  Banknote,
  BarChart3,
  BookOpenCheck,
  BriefcaseBusiness,
  Crown,
  FileText,
  LineChart,
  Percent,
  PieChart,
  Repeat,
  SearchCheck,
  Sparkles,
  TrendingUp,
  Users,
  WalletCards,
} from "lucide-react";

type Lang = "ar" | "en";

type RevenueModelProps = {
  lang?: Lang;
};

const isArabic = (lang: Lang) => lang === "ar";

const subscriptionPlans = [
  {
    titleAr: "الخطة الشهرية",
    titleEn: "Monthly Plan",
    price: "$5",
    noteAr:
      "اشتراك شهري مخصص للمستخدمين الذين يحتاجون إلى تقييمات متكررة، حفظ النتائج، مراجعة القطع، وتجربة المنصة بدون التزام سنوي.",
    noteEn:
      "A monthly subscription for users who need recurring valuations, saved results, item reviews, and a flexible entry without annual commitment.",
    icon: Banknote,
  },
  {
    titleAr: "الخطة السنوية",
    titleEn: "Annual Plan",
    price: "$42",
    noteAr:
      "اشتراك سنوي بسعر أقل من الدفع الشهري، مناسب للجامعين، التجار، الهواة، وأصحاب المتاجر الصغيرة الذين يتعاملون مع التحف والمقتنيات باستمرار.",
    noteEn:
      "A discounted annual plan for collectors, dealers, enthusiasts, and small antique shops that need continuous access to valuation tools.",
    icon: Crown,
  },
  {
    titleAr: "التقارير المدفوعة",
    titleEn: "Paid Reports",
    price: "$9 - $19",
    noteAr:
      "تقارير مفصلة قابلة للحفظ والمشاركة، تشمل ملخص التقييم، تقدير السعر، أسباب الارتفاع والانخفاض، الصور المطلوبة، وملاحظات التحقق.",
    noteEn:
      "Detailed shareable reports including valuation summary, price estimate, value drivers, value reducers, required photos, and verification notes.",
    icon: FileText,
  },
];

const revenueScenarios = [
  {
    year: "Year 1",
    accounts: "100,000",
    conversion: "5%",
    paidUsers: "5,000",
    subscriptionRevenue: "$210,000",
    paidReports: "$120,000",
    b2bRevenue: "$30,000",
    totalRevenue: "$360,000",
    noteAr:
      "سنة إطلاق تجاري، تركيزها بناء الثقة، تحويل أول المستخدمين إلى اشتراكات، وبيع تقارير مدفوعة بشكل محدود.",
    noteEn:
      "Commercial launch year focused on trust building, converting early users into paid subscriptions, and limited paid-report adoption.",
  },
  {
    year: "Year 2",
    accounts: "180,000",
    conversion: "8%",
    paidUsers: "14,400",
    subscriptionRevenue: "$604,800",
    paidReports: "$160,000",
    b2bRevenue: "$75,000",
    totalRevenue: "$839,800",
    noteAr:
      "نمو أوضح بعد تحسين تجربة المستخدم، تقوية موسوعة كيشيب، وربط مصادر بيانات وواجهات API أكثر دقة.",
    noteEn:
      "Stronger growth after improving UX, expanding the KISHIB Encyclopedia, and integrating more accurate data/API sources.",
  },
  {
    year: "Year 3",
    accounts: "300,000",
    conversion: "10%",
    paidUsers: "30,000",
    subscriptionRevenue: "$1,260,000",
    paidReports: "$240,000",
    b2bRevenue: "$150,000",
    totalRevenue: "$1,650,000",
    noteAr:
      "مرحلة توسع إقليمي ودولي، مع باقات احترافية للتجار والمعارض والمزادات، وبداية تحويل المعرفة إلى أصل تجاري.",
    noteEn:
      "Regional and international scale stage with professional plans for dealers, galleries, and auctions, turning knowledge into a commercial asset.",
  },
];

const revenueStreams = [
  {
    titleAr: "اشتراكات الأفراد",
    titleEn: "Consumer Subscriptions",
    textAr:
      "دخل متكرر من المستخدمين الذين يحتاجون تقييمات شهرية أو سنوية للقطع، مع حفظ النتائج والرجوع إليها لاحقاً.",
    textEn:
      "Recurring revenue from users who need monthly or annual valuations, saved results, and ongoing access.",
    icon: Repeat,
  },
  {
    titleAr: "التقارير المدفوعة",
    titleEn: "Paid Valuation Reports",
    textAr:
      "تقارير أكثر تفصيلاً من النتيجة المجانية، مناسبة للمشاركة، البيع، التوثيق، أو طلب رأي إضافي من خبير.",
    textEn:
      "More detailed than free results, designed for sharing, selling, documenting, or requesting additional expert review.",
    icon: FileText,
  },
  {
    titleAr: "باقات التجار والمعارض",
    titleEn: "Dealer & Gallery Plans",
    textAr:
      "اشتراكات احترافية لأصحاب المتاجر والمعارض والمزادات تتضمن تقييمات أكثر، تقارير، إدارة أرشيف، وظهور تجاري مستقبلي.",
    textEn:
      "Professional plans for shops, galleries, and auctions, including higher limits, reports, archive tools, and future commercial visibility.",
    icon: BriefcaseBusiness,
  },
  {
    titleAr: "موسوعة كيشيب",
    titleEn: "KISHIB Encyclopedia",
    textAr:
      "الموسوعة ليست محتوى جانبي؛ هي أصل معرفي يدعم دقة التقييم، يجذب زيارات بحثية، ويفتح فرص رعاية وإعلانات متخصصة لاحقاً.",
    textEn:
      "The encyclopedia is not side content; it is a knowledge asset that supports valuation accuracy, SEO traffic, and future sponsorship opportunities.",
    icon: BookOpenCheck,
  },
  {
    titleAr: "API للشركات",
    titleEn: "B2B API Access",
    textAr:
      "إتاحة بيانات أو أدوات تقييم لمنصات تجارة، مزادات، أرشفة، أو شركات تحتاج طبقة معرفة متخصصة بالتحف والمقتنيات.",
    textEn:
      "Data and valuation access for marketplaces, auctions, archive platforms, or companies needing an antiques intelligence layer.",
    icon: LineChart,
  },
  {
    titleAr: "السوق الداخلي مستقبلاً",
    titleEn: "Future Marketplace",
    textAr:
      "عند توفر قاعدة مستخدمين وبيانات كافية، يمكن إضافة Featured Listings وعمولات بيع، لكن ليس كاعتماد أساسي في البداية.",
    textEn:
      "Once enough users and data exist, featured listings and sales commissions can be added, but they are not the core early dependency.",
    icon: BadgeDollarSign,
  },
];

const modelNotes = [
  {
    titleAr: "ميزانية 470 ألف دولار ليست كلفة تشغيل سنوية",
    titleEn: "$470K is not an annual operating cost",
    textAr:
      "هذا المبلغ يمثل بناء وإطلاق المنظومة كاملة: التطبيق، المنصة، موسوعة كيشيب، APIs، الفريق البحثي، تسجيل الشركة، الأجهزة، المكتب، والتسويق الأولي.",
    textEn:
      "This amount funds the full build and launch: app, platform, KISHIB Encyclopedia, APIs, research team, company setup, equipment, office, and initial marketing.",
  },
  {
    titleAr: "الإيراد لا يعتمد على مصدر واحد",
    titleEn: "Revenue is not single-source",
    textAr:
      "الاشتراكات هي الأساس، لكن التقارير المدفوعة، باقات التجار، API، والموسوعة تجعل نموذج الدخل أوسع وأقوى من تطبيق عادي.",
    textEn:
      "Subscriptions are the base, but paid reports, dealer plans, API access, and the encyclopedia create a broader model than a simple app.",
  },
  {
    titleAr: "نسبة التحويل أهم من عدد التحميلات",
    titleEn: "Conversion matters more than downloads",
    textAr:
      "المؤشر الحقيقي ليس عدد الزوار فقط، بل كم مستخدم يثق بالمنصة لدرجة الدفع مقابل تقييمات وتقارير واشتراكات.",
    textEn:
      "The real indicator is not traffic alone; it is how many users trust the platform enough to pay for valuations, reports, and subscriptions.",
  },
];

const economics = [
  {
    labelAr: "مثال اشتراكات شهرية",
    labelEn: "Monthly subscription example",
    value: "10,000 × $5",
    result: "$50,000 / Month",
  },
  {
    labelAr: "الإيراد السنوي من المثال",
    labelEn: "Annual revenue from example",
    value: "$50,000 × 12",
    result: "$600,000 / Year",
  },
  {
    labelAr: "حصة المستثمر من صافي الربح",
    labelEn: "Investor share from net profit",
    value: "10%",
    result: "Silent Partner",
  },
];

export default function RevenueModel({ lang = "ar" }: RevenueModelProps) {
  const ar = isArabic(lang);

  return (
    <section
      id="revenue"
      dir={ar ? "rtl" : "ltr"}
      className={["relative overflow-hidden bg-[#070403] px-5 py-24 md:px-8 lg:px-10 xl:px-16", ar ? "text-right xl:pl-52" : "text-left xl:pr-52"].join(" ")}
    >
      <div className="pointer-events-none absolute left-[-160px] top-10 h-96 w-96 rounded-full bg-[#d7a35f]/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-180px] bottom-0 h-96 w-96 rounded-full bg-[#3a1c0b]/35 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7a35f]">
              REVENUE MODEL
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
              {ar
                ? "نموذج إيرادات متعدد المصادر وليس مجرد اشتراك شهري"
                : "A multi-source revenue model, not just a monthly subscription"}
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-white/62">
              {ar
                ? "بعد اكتمال مرحلة البناء والإطلاق، تبدأ KISHIB بتوليد الإيرادات من الاشتراكات الشهرية والسنوية، التقارير المدفوعة، باقات التجار والمعارض، خدمات API، وموسوعة كيشيب كمصدر معرفي يجذب المستخدمين ويقوي دقة التقييم. لذلك يتم التعامل مع ميزانية 470 ألف دولار كاستثمار تأسيسي لبناء أصل رقمي قابل للتوسع، وليس كمصاريف سنوية متكررة."
                : "After the build and launch phase, KISHIB generates revenue through monthly and annual subscriptions, paid valuation reports, dealer and gallery plans, API services, and the KISHIB Encyclopedia as a knowledge engine that attracts users and strengthens valuation accuracy. The $470K budget is treated as a foundational investment in a scalable digital asset, not as recurring annual spending."}
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {subscriptionPlans.map((plan) => {
            const Icon = plan.icon;

            return (
              <div
                key={plan.titleEn}
                className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d7a35f]/35 hover:bg-white/[0.07]"
              >
                <div className="mb-8 flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
                    <Icon size={22} />
                  </div>

                  <span className="text-4xl font-semibold tracking-[-0.05em] text-white">
                    {plan.price}
                  </span>
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d7a35f]">
                  {plan.titleEn}
                </p>

                <h3 className="mt-3 text-xl font-semibold text-white">
                  {ar ? plan.titleAr : plan.titleEn}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  {ar ? plan.noteAr : plan.noteEn}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 md:p-7">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                3-YEAR REVENUE PROJECTION
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                {ar
                  ? "توقعات الإيرادات خلال أول 3 سنوات"
                  : "Projected revenue in the first 3 years"}
              </h3>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
              <BarChart3 size={24} />
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
            <div className="hidden grid-cols-8 border-b border-white/10 bg-black/30 px-5 py-4 text-xs font-semibold text-white/45 md:grid">
              <span>{ar ? "السنة" : "Year"}</span>
              <span>{ar ? "الحسابات" : "Accounts"}</span>
              <span>{ar ? "التحويل" : "Conversion"}</span>
              <span>{ar ? "مدفوعون" : "Paid users"}</span>
              <span>{ar ? "الاشتراكات" : "Subscriptions"}</span>
              <span>{ar ? "التقارير" : "Reports"}</span>
              <span>{ar ? "B2B/API" : "B2B/API"}</span>
              <span>{ar ? "الإجمالي" : "Total"}</span>
            </div>

            {revenueScenarios.map((item) => (
              <div
                key={item.year}
                className="grid gap-3 border-b border-white/10 bg-black/10 px-5 py-5 text-sm last:border-b-0 md:grid-cols-8 md:items-center"
              >
                <Cell label={ar ? "السنة" : "Year"} value={item.year} strong />
                <Cell label={ar ? "الحسابات" : "Accounts"} value={item.accounts} />
                <Cell label={ar ? "التحويل" : "Conversion"} value={item.conversion} gold />
                <Cell label={ar ? "المستخدمون المدفوعون" : "Paid users"} value={item.paidUsers} />
                <Cell label={ar ? "إيراد الاشتراكات" : "Subscription revenue"} value={item.subscriptionRevenue} />
                <Cell label={ar ? "التقارير المدفوعة" : "Paid reports"} value={item.paidReports} />
                <Cell label={ar ? "B2B/API" : "B2B/API"} value={item.b2bRevenue} />
                <Cell label={ar ? "الإيراد الكلي" : "Total revenue"} value={item.totalRevenue} strong />

                <div className="md:col-span-8">
                  <p className="mt-2 rounded-[1rem] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/45">
                    {ar ? item.noteAr : item.noteEn}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm leading-7 text-white/45">
            {ar
              ? "هذه الأرقام تقديرية وليست وعداً بعائد مضمون. الهدف منها توضيح قابلية النمو عند توفر منتج قوي، بيانات دقيقة، تسويق صحيح، وتجربة مستخدم تدفع المستخدم إلى الثقة والدفع."
              : "These figures are estimates, not guaranteed returns. Their purpose is to show scalability when the product, data quality, marketing, and user trust are strong enough to drive paid conversion."}
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {revenueStreams.map((stream) => {
            const Icon = stream.icon;

            return (
              <div
                key={stream.titleEn}
                className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:border-[#d7a35f]/35 hover:bg-white/[0.07]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
                  <Icon size={22} />
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d7a35f]">
                  {stream.titleEn}
                </p>

                <h3 className="mt-3 text-xl font-semibold text-white">
                  {ar ? stream.titleAr : stream.titleEn}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  {ar ? stream.textAr : stream.textEn}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-7">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
              <TrendingUp size={24} />
            </div>

            <h3 className="mt-8 text-3xl font-semibold tracking-[-0.03em] text-white">
              {ar
                ? "مثال بسيط يوضح قوة الإيراد المتكرر"
                : "A simple example showing the power of recurring revenue"}
            </h3>

            <p className="mt-5 text-base leading-8 text-white/62">
              {ar
                ? "إذا وصلت المنصة إلى 10,000 مشترك شهري فقط بسعر 5 دولارات، فهذا يعني 50,000 دولار شهرياً و600,000 دولار سنوياً قبل احتساب التقارير المدفوعة، باقات التجار، API، أو أي دخل من السوق الداخلي مستقبلاً."
                : "If the platform reaches only 10,000 monthly subscribers at $5, that means $50,000 per month and $600,000 per year before counting paid reports, dealer plans, API revenue, or any future marketplace income."}
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {economics.map((item) => (
                <div
                  key={item.result}
                  className="rounded-[1.5rem] border border-white/10 bg-black/25 p-5"
                >
                  <p className="text-xs leading-5 text-white/40">
                    {ar ? item.labelAr : item.labelEn}
                  </p>

                  <p className="mt-3 text-lg font-semibold text-white">
                    {item.value}
                  </p>

                  <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#f0c987]">
                    {item.result}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
            <div className="mb-7 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                  REVENUE LOGIC
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                  {ar
                    ? "لماذا نموذج الإيرادات قابل للتوسع؟"
                    : "Why the revenue model can scale"}
                </h3>
              </div>

              <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987] sm:flex">
                <PieChart size={24} />
              </div>
            </div>

            <div className="grid gap-3">
              {[
                ar
                  ? "كل تقييم مجاني يمكن أن يتحول إلى تقرير مدفوع أو اشتراك عند ارتفاع ثقة المستخدم بالنتيجة."
                  : "Each free valuation can convert into a paid report or subscription once user trust increases.",
                ar
                  ? "موسوعة كيشيب تخدم التسويق العضوي عبر محركات البحث وتدعم قوة التقييم داخل التطبيق."
                  : "The KISHIB Encyclopedia supports organic search growth and strengthens valuation intelligence inside the app.",
                ar
                  ? "التجار والمعارض والمزادات يحتاجون استخداماً متكرراً، وهذا يجعلهم أكثر قيمة من المستخدم الفردي العابر."
                  : "Dealers, galleries, and auctions need recurring use, making them more valuable than casual one-time users.",
                ar
                  ? "كلما زادت البيانات والصور والتقارير، زادت قيمة المنصة كمرجع تجاري ومعرفي في سوق التحف."
                  : "As data, images, and reports accumulate, the platform becomes a more valuable commercial and knowledge reference in the antiques market.",
              ].map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-[1.25rem] border border-white/10 bg-black/20 p-4"
                >
                  <Percent size={17} className="mt-1 shrink-0 text-[#d7a35f]" />
                  <p className="text-sm leading-7 text-white/62">{item}</p>
                </div>
              ))}
            </div>

            <Link
              href="#investor"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#d7a35f] px-6 py-4 text-sm font-bold text-black transition hover:bg-[#f0c987]"
            >
              {ar ? "ربط الإيرادات بعائد المستثمر" : "Connect revenue to investor return"}
              <ArrowUpLeft size={17} />
            </Link>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {modelNotes.map((item) => (
            <div
              key={item.titleEn}
              className="rounded-[2rem] border border-white/10 bg-black/20 p-6"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
                <WalletCards size={22} />
              </div>

              <h3 className="text-xl font-semibold text-white">
                {ar ? item.titleAr : item.titleEn}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/55">
                {ar ? item.textAr : item.textEn}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-black/20 p-7">
          <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
              <Users size={28} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                SUMMARY
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white">
                {ar ? "الخلاصة الإيرادية" : "Revenue summary"}
              </h3>

              <p className="mt-3 text-base leading-8 text-white/60">
                {ar
                  ? "KISHIB لا تعتمد على عملية بيع واحدة، بل على علاقة متكررة مع المستخدم: تقييمات، أرشيف، تقارير، اشتراكات، ومراجع معرفية. قوة النمو تأتي من الجمع بين الذكاء الاصطناعي، مصادر البيانات، موسوعة كيشيب، وفهم سوق التحف؛ وهذا يجعل كل مستخدم مدفوع قيمة مستمرة وليس عملية شراء عابرة."
                  : "KISHIB does not rely on a one-time sale. It builds a recurring relationship with the user through valuations, archives, reports, subscriptions, and knowledge references. Growth comes from combining AI, data sources, the KISHIB Encyclopedia, and antiques market intelligence, making every paid user an ongoing value source rather than a one-time purchase."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Cell({
  label,
  value,
  strong = false,
  gold = false,
}: {
  label: string;
  value: string;
  strong?: boolean;
  gold?: boolean;
}) {
  return (
    <div>
      <span className="mb-1 block text-xs text-white/35 md:hidden">{label}</span>
      <span
        className={[
          strong ? "text-lg font-semibold text-white" : "text-white/65",
          gold ? "font-semibold text-[#f0c987]" : "",
        ].join(" ")}
      >
        {value}
      </span>
    </div>
  );
}
