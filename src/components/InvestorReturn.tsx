import {
  ArrowUpLeft,
  BadgeDollarSign,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Crown,
  FileCheck2,
  HandCoins,
  Layers3,
  LineChart,
  LockKeyhole,
  PieChart,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

type Lang = "ar" | "en";

type InvestorReturnProps = {
  lang?: Lang;
};

const investorTerms = [
  {
    label: "Investor Ticket",
    value: "$150,000",
    subtitleAr: "مبلغ دخول المستثمر",
    subtitleEn: "Silent partner investment ticket",
    icon: HandCoins,
  },
  {
    label: "Total Launch Budget",
    value: "$470,000",
    subtitleAr: "كلفة البناء والإطلاق الكاملة",
    subtitleEn: "Full build and launch budget",
    icon: Rocket,
  },
  {
    label: "Profit Share",
    value: "10%",
    subtitleAr: "من صافي الأرباح السنوية",
    subtitleEn: "Of annual net profit",
    icon: PieChart,
  },
  {
    label: "Investor Role",
    value: "Silent Partner",
    subtitleAr: "بدون إدارة يومية أو تدخل تشغيلي",
    subtitleEn: "No daily management responsibility",
    icon: LockKeyhole,
  },
];

const capitalStructure = [
  {
    itemAr: "مساهمة المستثمر",
    itemEn: "Investor Contribution",
    amount: "$150,000",
    ratio: "31.9%",
    noteAr: "تمويل مباشر مقابل 10% من صافي الأرباح السنوية، وليس مقابل إدارة أو تحكم تشغيلي.",
    noteEn: "Direct funding in exchange for 10% of annual net profit, without operational control.",
  },
  {
    itemAr: "تمويل المؤسسين والمصادر الأخرى",
    itemEn: "Founder & Other Funding",
    amount: "$320,000",
    ratio: "68.1%",
    noteAr: "يتم تغطيته من المؤسسين، الشركاء، المنح، أو جولات تمويل لاحقة حسب مرحلة الإطلاق.",
    noteEn: "Covered by founders, partners, grants, or later funding rounds depending on launch stage.",
  },
  {
    itemAr: "إجمالي ميزانية البناء والإطلاق",
    itemEn: "Total Build & Launch Budget",
    amount: "$470,000",
    ratio: "100%",
    noteAr: "ميزانية تأسيس كاملة وليست مصروفاً سنوياً متكرراً، وتشمل بناء المنتج، البيانات، الموسوعة، التشغيل، والقانون.",
    noteEn: "A full setup budget, not a recurring annual cost, covering product, data, encyclopedia, operations, and legal setup.",
  },
];

const fundingUse = [
  {
    title: "Platform Engineering",
    ar: "برمجة التطبيق والمنصة الأساسية",
    amount: "$120,000",
    textAr:
      "تطوير تطبيق KISHIB، واجهة الويب، لوحة التحكم، نظام التقييم، الحسابات، الاشتراكات، التقارير المدفوعة، سجل التقييمات، أرشفة الصور، وتجهيز البنية التقنية القابلة للتوسع.",
    textEn:
      "Building the KISHIB app, web interface, dashboard, valuation engine, accounts, subscriptions, paid reports, valuation history, image archiving, and scalable technical infrastructure.",
    icon: Layers3,
  },
  {
    title: "AI & API Infrastructure",
    ar: "الذكاء الاصطناعي وواجهات API",
    amount: "$70,000",
    textAr:
      "شراء وربط APIs للأسواق العالمية، أسعار المعادن، الصور المشابهة، المزادات، بيانات القطع، المقارنات السعرية، وتحسين دقة التحليل بدل الاعتماد على جواب ذكاء اصطناعي عام وضعيف.",
    textEn:
      "Purchasing and integrating APIs for global markets, metal prices, similar images, auctions, object data, price comparisons, and stronger valuation accuracy.",
    icon: LineChart,
  },
  {
    title: "KISHIB Encyclopedia",
    ar: "موسوعة كيشيب للتحف",
    amount: "$85,000",
    textAr:
      "بناء موقع إلكتروني مستقل يكون موسوعة ودليل كامل للتحف، يتضمن تصنيفات، مقالات، صور، مصادر، تاريخ المواد، المدارس الفنية، القطع المشابهة، ونطاقات الأسعار ليصبح مرجعاً داخلياً للمنصة.",
    textEn:
      "Building a separate encyclopedia and guide for antiques, including categories, articles, images, sources, material history, artistic schools, similar objects, and price ranges.",
    icon: FileCheck2,
  },
  {
    title: "Research Team",
    ar: "فريق البحث والتحقق",
    amount: "$55,000",
    textAr:
      "توظيف باحثين ومحررين ومتخصصين لجمع معلومات موثوقة عن السجاد، الخشب، النحاس، الكريستال، الفخار، العملات، المخطوطات، اللوحات، والمقتنيات التراثية حتى لا تبقى المنصة سطحية.",
    textEn:
      "Hiring researchers, editors, and specialists to collect reliable knowledge about rugs, wood, copper, crystal, pottery, coins, manuscripts, paintings, and heritage objects.",
    icon: Users,
  },
  {
    title: "Company Setup",
    ar: "تسجيل الشركة والإطار القانوني",
    amount: "$30,000",
    textAr:
      "تسجيل LLC في أمريكا، الاستشارات القانونية، العقود، المحاسبة، الحسابات البنكية، سياسة الخصوصية، شروط الاستخدام، وحماية حقوق المنصة والبيانات.",
    textEn:
      "Registering a US LLC, legal consultation, contracts, accounting, bank accounts, privacy policy, terms of use, and protecting platform and data rights.",
    icon: Building2,
  },
  {
    title: "Office & Equipment",
    ar: "المكتب والأجهزة",
    amount: "$45,000",
    textAr:
      "إيجار مقر الشركة، حواسيب المبرمجين، أجهزة اختبار، شاشات، أدوات تصميم، اشتراكات برمجية، تخزين سحابي، خدمات تشغيل، ومتطلبات العمل اليومية للفريق.",
    textEn:
      "Office rent, developer computers, testing devices, monitors, design tools, software subscriptions, cloud storage, operations services, and daily team requirements.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Marketing & Launch",
    ar: "الترويج والإطلاق",
    amount: "$50,000",
    textAr:
      "حملات إطلاق، إعلانات رقمية، محتوى فيديو، تصميم الهوية، صفحات هبوط، علاقات مع تجار التحف، بناء مجتمع المستخدمين، وتجربة السوق الأولى محلياً ودولياً.",
    textEn:
      "Launch campaigns, digital ads, video content, identity design, landing pages, antique dealer relationships, community building, and initial market testing locally and globally.",
    icon: TrendingUp,
  },
  {
    title: "Contingency Reserve",
    ar: "احتياطي مخاطر وتطوير",
    amount: "$15,000",
    textAr:
      "احتياطي للتكاليف غير المتوقعة، تحسينات بعد الإطلاق، إصلاحات تقنية، توسعة السيرفرات، وتجارب إضافية قبل الوصول إلى نسخة مستقرة للمستثمرين والمستخدمين.",
    textEn:
      "Reserve for unexpected costs, post-launch improvements, technical fixes, server scaling, and additional testing before reaching a stable investor-ready product.",
    icon: ShieldCheck,
  },
];

const payoutProjection = [
  {
    year: "Year 1",
    netProfit: "$0 - $40,000",
    investorShare: "$0 - $4,000",
    status: "Growth Priority",
    noteAr:
      "قد تكون السنة الأولى بدون أرباح موزعة لأن الأولوية تكون لاكتساب المستخدمين، بناء الثقة، تحسين التقييم، وتقوية الموسوعة والبيانات.",
    noteEn:
      "The first year may have no distributed profit because priority is user acquisition, trust building, valuation improvement, and strengthening the encyclopedia and data.",
  },
  {
    year: "Year 2",
    netProfit: "$120,000",
    investorShare: "$12,000",
    status: "Early Return",
    noteAr:
      "بداية ظهور عائد واضح عند نجاح الاشتراكات، التقارير المدفوعة، واستخدام المنصة من قبل التجار والجامعين.",
    noteEn:
      "Early return stage if subscriptions, paid reports, and adoption by dealers and collectors begin to scale.",
  },
  {
    year: "Year 3",
    netProfit: "$300,000",
    investorShare: "$30,000",
    status: "Scale Stage",
    noteAr:
      "مرحلة توسع أقوى بعد بناء الثقة، رفع دقة التقييم، وزيادة الاعتماد على الموسوعة والـ APIs.",
    noteEn:
      "A stronger scaling stage after trust, valuation accuracy, encyclopedia depth, and API integrations improve.",
  },
  {
    year: "Year 4+",
    netProfit: "$600,000+",
    investorShare: "$60,000+",
    status: "Long-Term Upside",
    noteAr:
      "العائد يزيد مع توسع المنصة ودخول خدمات التجار، المزادات، باقات الـ API، والـ Marketplace مستقبلاً.",
    noteEn:
      "Upside grows with dealer services, auctions, API packages, and a future marketplace.",
  },
];

const investorAdvantages = [
  {
    ar: "دخول مبكر في منصة متخصصة بسوق عالمي كبير وغير مخدوم عربياً بالشكل الكافي.",
    en: "Early entry into a specialized platform targeting a large global market that is underserved in Arabic and regional markets.",
  },
  {
    ar: "المستثمر Silent Partner؛ لا يتحمل الإدارة اليومية ولا يحتاج إلى متابعة تشغيلية مباشرة.",
    en: "The investor is a silent partner, with no daily management burden or operational involvement.",
  },
  {
    ar: "العائد مربوط بصافي الأرباح، لذلك لا يتم استنزاف الشركة قبل أن تصبح رابحة ومستقرة.",
    en: "Returns are tied to net profit, so the company is not drained before it becomes profitable and stable.",
  },
  {
    ar: "وجود موسوعة كيشيب يجعل المشروع أقوى من مجرد تطبيق تقييم، لأنه يبني أصل معرفي وبيانات قابلة للتراكم.",
    en: "The KISHIB Encyclopedia makes the project stronger than a simple valuation app by creating a compounding knowledge and data asset.",
  },
  {
    ar: "مصادر الدخل متعددة: اشتراكات، تقارير مدفوعة، API، باقات تجار، مزادات، وماركت بليس مستقبلاً.",
    en: "Revenue streams are diversified: subscriptions, paid reports, APIs, dealer packages, auctions, and a future marketplace.",
  },
  {
    ar: "مساهمة المستثمر لا تغطي المشروع بالكامل، لكنها تسرّع الإطلاق وتقلل مخاطر التنفيذ وتثبت جدية المشروع أمام الشركاء.",
    en: "The investor contribution does not cover the full project, but accelerates launch, reduces execution risk, and signals seriousness to partners.",
  },
];

const governance = [
  {
    title: "Annual Net Profit Share",
    ar: "يستلم المستثمر 10% من صافي الأرباح السنوية بعد خصم التكاليف التشغيلية، الضرائب، المصاريف القانونية، ومصاريف التطوير الضرورية.",
    en: "The investor receives 10% of annual net profit after operating costs, taxes, legal expenses, and necessary development expenses.",
  },
  {
    title: "Silent Partner Structure",
    ar: "المستثمر لا يتدخل في الإدارة اليومية، التوظيف، قرارات المنتج، أو التشغيل، لكنه يحصل على تقارير أداء مالية وتشغيلية دورية.",
    en: "The investor does not interfere in daily management, hiring, product decisions, or operations, but receives periodic financial and operational reports.",
  },
  {
    title: "Transparent Reporting",
    ar: "يتم إعداد تقرير سنوي يوضح الإيرادات، المصروفات، صافي الربح، حصة المستثمر، ونقاط النمو والمخاطر.",
    en: "An annual report will show revenue, expenses, net profit, investor share, growth points, and risks.",
  },
  {
    title: "No Guaranteed Dividend",
    ar: "لا يتم وعد المستثمر بتوزيع مضمون، لأن العائد مرتبط بالأداء الحقيقي للمنصة وقد تكون السنة الأولى سنة بناء بدون أرباح موزعة.",
    en: "There is no guaranteed dividend because return depends on real platform performance, and the first year may be a build year with no distributed profit.",
  },
];

const riskControls = [
  {
    ar: "تقليل الاعتماد على مصدر واحد من خلال الجمع بين الذكاء الاصطناعي، APIs، موسوعة داخلية، وفريق بحث.",
    en: "Reducing dependence on one source by combining AI, APIs, an internal encyclopedia, and a research team.",
  },
  {
    ar: "بناء المنتج على مراحل: نسخة إطلاق، تحسين الدقة، توسعة السوق، ثم خدمات التجار والماركت بليس.",
    en: "Building in stages: launch version, accuracy improvement, market expansion, then dealer services and marketplace.",
  },
  {
    ar: "توجيه السنة الأولى للنمو وليس للسحب، لأن سحب الأرباح مبكراً يضعف منصة تحتاج إلى بيانات وثقة.",
    en: "Prioritizing growth over withdrawals in year one because early profit extraction weakens a platform that needs data and trust.",
  },
];

export default function InvestorReturn({ lang = "ar" }: InvestorReturnProps) {
  const isAr = lang === "ar";
  const dir = isAr ? "rtl" : "ltr";
  const align = isAr ? "text-right" : "text-left";

  return (
    <section
      id="investor"
      dir={dir}
      className={`relative overflow-hidden bg-[#070403] px-5 py-24 ${align} text-white md:px-8 lg:px-10 xl:pl-52 xl:pr-16`}
    >
      <div className="pointer-events-none absolute right-[-180px] top-20 h-96 w-96 rounded-full bg-[#d7a35f]/10 blur-[130px]" />
      <div className="pointer-events-none absolute left-[-220px] bottom-10 h-[28rem] w-[28rem] rounded-full bg-[#3a1c0b]/40 blur-[150px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7a35f]">
              INVESTOR PROPOSAL
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
              {isAr
                ? "عرض استثماري لممول صامت يدعم إطلاق KISHIB"
                : "A Silent Partner Investment Proposal for KISHIB Launch"}
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-white/62">
              {isAr
                ? "KISHIB ليست تطبيق تقييم بسيط، بل منصة معرفية وتجارية مبنية على الذكاء الاصطناعي، البيانات، واجهات API، وموسوعة متخصصة للتحف والمقتنيات. المطلوب هو دخول مستثمر صامت بمبلغ 150 ألف دولار مقابل 10% من صافي الأرباح السنوية، مع فهم واضح أن السنة الأولى قد تكون سنة بناء ونمو وليست سنة توزيع أرباح."
                : "KISHIB is not a simple valuation app. It is a knowledge and commerce platform built on AI, data, APIs, and a specialized encyclopedia for antiques and collectibles. The ask is a $150,000 silent partner investment in exchange for 10% of annual net profit, with a clear understanding that the first year may focus on building and growth rather than profit distribution."}
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {investorTerms.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d7a35f]/40 hover:bg-white/[0.07]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987] transition duration-300 group-hover:scale-110">
                    <Icon size={22} />
                  </div>

                  <div className="h-2 w-2 animate-pulse rounded-full bg-[#d7a35f]" />
                </div>

                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35">
                  {item.label}
                </p>

                <h3 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-white">
                  {item.value}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  {isAr ? item.subtitleAr : item.subtitleEn}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-[2rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-7">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
                <Crown size={28} />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d7a35f]">
                THE ASK
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                {isAr
                  ? "المطلوب: 150 ألف دولار مقابل 10% من صافي الأرباح السنوية"
                  : "The Ask: $150,000 for 10% of Annual Net Profit"}
              </h3>

              <p className="mt-5 text-base leading-8 text-white/62">
                {isAr
                  ? "هذا العرض مناسب لمستثمر يريد الدخول في مشروع تقني قابل للتوسع بدون تحمل مسؤولية الإدارة اليومية. المبلغ لا يشتري مجرد فكرة، بل يسرّع بناء منتج كامل: تطبيق، منصة، موسوعة، بيانات، فريق بحث، بنية قانونية، وتجهيزات إطلاق وتسويق."
                  : "This offer is designed for an investor who wants exposure to a scalable technology project without carrying daily management responsibility. The investment does not fund a vague idea; it accelerates a complete product: app, platform, encyclopedia, data, research team, legal structure, launch setup, and marketing."}
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-black/25 p-6">
              <div className="grid gap-4">
                {capitalStructure.map((row) => (
                  <div
                    key={row.amount}
                    className="rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-5"
                  >
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="text-sm font-semibold text-white">
                          {isAr ? row.itemAr : row.itemEn}
                        </p>
                        <p className="mt-2 text-sm leading-7 text-white/45">
                          {isAr ? row.noteAr : row.noteEn}
                        </p>
                      </div>

                      <div className={isAr ? "text-left" : "text-right"}>
                        <p className="text-2xl font-semibold text-white">
                          {row.amount}
                        </p>
                        <p className="mt-1 text-sm text-[#f0c987]">
                          {row.ratio}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-[#d7a35f]"
                        style={{ width: row.ratio }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d7a35f]">
                USE OF FUNDS
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                {isAr
                  ? "أين ستذهب ميزانية 470 ألف دولار؟"
                  : "Where the $470,000 Launch Budget Goes"}
              </h3>
            </div>

            <p className="max-w-xl text-sm leading-7 text-white/50">
              {isAr
                ? "هذه الميزانية ضخمة لأنها لا تغطي البرمجة فقط، بل تبني منظومة كاملة حول المنصة: بيانات، موسوعة، فريق، قانون، تسويق، أجهزة، APIs، وتجهيزات تشغيلية."
                : "This budget is significant because it does not cover coding only. It builds a full ecosystem around the platform: data, encyclopedia, team, legal setup, marketing, equipment, APIs, and operations."}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {fundingUse.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:border-[#d7a35f]/35 hover:bg-white/[0.07]"
                >
                  <div className="mb-6 flex items-start justify-between gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
                      <Icon size={22} />
                    </div>

                    <div className={isAr ? "text-left" : "text-right"}>
                      <p className="text-3xl font-semibold tracking-[-0.05em] text-white">
                        {item.amount}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/35">
                        Estimated
                      </p>
                    </div>
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d7a35f]">
                    {item.title}
                  </p>

                  <h4 className="mt-3 text-xl font-semibold text-white">
                    {isAr ? item.ar : item.title}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    {isAr ? item.textAr : item.textEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 md:p-7">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d7a35f]">
                INVESTOR RETURN MODEL
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                {isAr ? "نموذج عائد المستثمر" : "Investor Return Model"}
              </h3>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
              <BarChart3 size={24} />
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
            <div className="hidden grid-cols-5 border-b border-white/10 bg-black/30 px-5 py-4 text-xs font-semibold text-white/45 md:grid">
              <span>{isAr ? "السنة" : "Year"}</span>
              <span>{isAr ? "صافي الربح المتوقع" : "Expected Net Profit"}</span>
              <span>{isAr ? "حصة المستثمر 10%" : "Investor Share 10%"}</span>
              <span>{isAr ? "المرحلة" : "Stage"}</span>
              <span>{isAr ? "ملاحظة" : "Note"}</span>
            </div>

            {payoutProjection.map((row) => (
              <div
                key={row.year}
                className="grid gap-3 border-b border-white/10 bg-black/10 px-5 py-5 text-sm last:border-b-0 md:grid-cols-5 md:items-center"
              >
                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    {isAr ? "السنة" : "Year"}
                  </span>
                  <span className="font-semibold text-white">{row.year}</span>
                </div>

                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    {isAr ? "صافي الربح المتوقع" : "Expected Net Profit"}
                  </span>
                  <span className="text-white/65">{row.netProfit}</span>
                </div>

                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    {isAr ? "حصة المستثمر" : "Investor Share"}
                  </span>
                  <span className="text-lg font-semibold text-[#f0c987]">
                    {row.investorShare}
                  </span>
                </div>

                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    {isAr ? "المرحلة" : "Stage"}
                  </span>
                  <span className="rounded-full border border-[#d7a35f]/25 bg-[#d7a35f]/10 px-3 py-1 text-xs font-semibold text-[#f0c987]">
                    {row.status}
                  </span>
                </div>

                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    {isAr ? "ملاحظة" : "Note"}
                  </span>
                  <span className="text-white/45">
                    {isAr ? row.noteAr : row.noteEn}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm leading-7 text-white/45">
            {isAr
              ? "الأرقام أعلاه تقديرية وليست وعداً بعائد مضمون. الهدف منها توضيح طريقة احتساب حصة المستثمر عند تحقق صافي أرباح سنوية."
              : "The numbers above are estimates, not a guaranteed return. They explain how the investor share is calculated when annual net profit is achieved."}
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-7">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
              <BadgeDollarSign size={24} />
            </div>

            <h3 className="mt-8 text-3xl font-semibold tracking-[-0.03em] text-white">
              {isAr
                ? "لماذا هذا العرض مقنع للمستثمر؟"
                : "Why This Offer Is Attractive to the Investor"}
            </h3>

            <p className="mt-5 text-base leading-8 text-white/62">
              {isAr
                ? "لأن المستثمر لا يدخل في مشروع صغير أو متجر عادي، بل يدخل في أصل رقمي قابل للتوسع عالمياً. قيمة KISHIB لا تأتي من الاشتراك فقط، بل من تراكم البيانات، قوة الموسوعة، دقة التقييم، وارتباط المنصة بسوق التحف والمقتنيات."
                : "The investor is not entering a small store or a simple app. They are entering a scalable digital asset. KISHIB’s value comes not only from subscriptions, but from accumulated data, encyclopedia depth, valuation accuracy, and connection to the antiques and collectibles market."}
            </p>

            <div className="mt-7 grid gap-3">
              {investorAdvantages.map((item) => (
                <div
                  key={item.en}
                  className="flex gap-3 rounded-[1.25rem] border border-white/10 bg-black/20 p-4"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-[#f0c987]"
                  />
                  <p className="text-sm leading-7 text-white/62">
                    {isAr ? item.ar : item.en}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d7a35f]">
                  GOVERNANCE
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                  {isAr
                    ? "شروط واضحة تحمي الطرفين"
                    : "Clear Terms That Protect Both Sides"}
                </h3>
              </div>

              <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987] sm:flex">
                <ShieldCheck size={24} />
              </div>
            </div>

            <div className="grid gap-4">
              {governance.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
                >
                  <h4 className="text-lg font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {isAr ? item.ar : item.en}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#costs"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#d7a35f] px-6 py-4 text-sm font-bold text-black transition hover:bg-[#f0c987]"
            >
              {isAr ? "الانتقال إلى تفاصيل التكاليف" : "Go to Cost Details"}
              <ArrowUpLeft size={17} />
            </a>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
          <div className="mb-7 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
              <ShieldCheck size={24} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d7a35f]">
                RISK CONTROL
              </p>
              <h3 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-white">
                {isAr ? "تقليل المخاطر من البداية" : "Risk Reduction from Day One"}
              </h3>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {riskControls.map((item) => (
              <div
                key={item.en}
                className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
              >
                <p className="text-sm leading-7 text-white/58">
                  {isAr ? item.ar : item.en}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-black/25 p-7">
          <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
              <Rocket size={28} />
            </div>

            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                {isAr
                  ? "الخلاصة الاستثمارية / Investment Summary"
                  : "Investment Summary / الخلاصة الاستثمارية"}
              </h3>

              <p className="mt-3 text-base leading-8 text-white/60">
                {isAr
                  ? "KISHIB يحتاج إلى تمويل جاد لأنه لا يبني واجهة فقط، بل يبني بنية تقنية ومعرفية وسوقية كاملة. مساهمة المستثمر البالغة 150,000 دولار تمنحه 10% من صافي الأرباح السنوية كممول صامت، بينما يتحمل فريق المشروع مسؤولية التنفيذ، الإدارة، التوسع، وبناء القيمة طويلة الأمد."
                  : "KISHIB requires serious funding because it is not only building an interface; it is building a technical, knowledge, and market infrastructure. The $150,000 investor contribution gives the silent partner 10% of annual net profit, while the project team carries execution, management, expansion, and long-term value creation."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
