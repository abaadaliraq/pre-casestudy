import {
  ArrowUpRight,
  BadgePercent,
  Banknote,
  CheckCircle2,
  CircleDollarSign,
  FileText,
  Gem,
  Globe2,
  Handshake,
  Layers3,
  LockKeyhole,
  Rocket,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";

type Lang = "ar" | "en";

type FinalInvestmentAskProps = {
  lang?: Lang;
};

const platformUrl = "https://antiques-lens.vercel.app/";

const content = {
  ar: {
    dir: "rtl" as const,
    align: "text-right",
    sectionLabel: "FINAL INVESTMENT ASK",
    title:
      "الطلب الاستثماري النهائي: 150,000 دولار كممول صامت مقابل 10% من صافي الأرباح السنوية",
    intro:
      "KISHIB ليست مجرد تطبيق تقييم تحف. المشروع عبارة عن بنية تقنية ومعرفية كاملة تشمل منصة تقييم، تقارير مدفوعة، اشتراكات، ربط APIs، موسوعة كيشيب، فريق بحث، ونظام تجاري قابل للتوسع. لذلك فإن كلفة البناء والإطلاق الكاملة تبلغ 470,000 دولار، والمطلوب من المستثمر هو تغطية 150,000 دولار كـ Silent Partner مقابل 10% من صافي الأرباح السنوية.",
    askCards: [
      {
        icon: Banknote,
        title: "قيمة الاستثمار المطلوبة",
        value: "$150,000",
        text: "مساهمة مباشرة من المستثمر لتغطية جزء مهم من مرحلة البناء والإطلاق، وليست كامل تكلفة المشروع.",
      },
      {
        icon: BadgePercent,
        title: "حصة المستثمر",
        value: "10%",
        text: "حصة من صافي الأرباح السنوية بعد خصم المصاريف التشغيلية والضرائب والتكاليف القانونية.",
      },
      {
        icon: LockKeyhole,
        title: "دور المستثمر",
        value: "Silent Partner",
        text: "المستثمر ممول صامت، لا يتدخل بالإدارة اليومية، ويحصل على تقارير أداء مالية وتشغيلية واضحة.",
      },
      {
        icon: Rocket,
        title: "كلفة البناء والإطلاق",
        value: "$470,000",
        text: "ميزانية تأسيس كاملة تشمل البرمجة، الشركة، الفريق، الـ APIs، التسويق، الأجهزة، وموسوعة كيشيب.",
      },
    ],
    capitalTitle: "هيكل التمويل المقترح",
    capitalText:
      "مبلغ 470,000 دولار يمثل تكلفة تأسيس وإطلاق، وليس مصروفاً سنوياً دائماً. مساهمة المستثمر البالغة 150,000 دولار تغطي 31.9% من الميزانية الكلية، بينما يتم تغطية المتبقي من المؤسسين، الشركاء، أو مراحل تمويل لاحقة.",
    capitalRows: [
      {
        label: "مساهمة المستثمر",
        value: "$150,000",
        percent: "31.9%",
        note: "مقابل 10% من صافي الأرباح السنوية كممول صامت.",
      },
      {
        label: "تمويل المؤسسين والمصادر الأخرى",
        value: "$320,000",
        percent: "68.1%",
        note: "لتغطية باقي كلفة البناء والإطلاق والتوسع الأولي.",
      },
      {
        label: "إجمالي ميزانية البناء والإطلاق",
        value: "$470,000",
        percent: "100%",
        note: "تشمل المنتج، الموسوعة، الفريق، الشركة، البنية التقنية، والتسويق.",
      },
    ],
    whyTitle: "لماذا هذا العرض منطقي للمستثمر؟",
    whyText:
      "العرض لا يبيع للمستثمر واجهة أو فكرة صغيرة، بل يفتح له دخولاً مبكراً في أصل رقمي قابل للتوسع. قوة KISHIB ستكون في تراكم البيانات، الثقة، المرجعية المعرفية، وقابلية تحويل كل تقييم إلى تقرير مدفوع أو اشتراك أو خدمة تجارية.",
    reasons: [
      "المستثمر يدخل بمبلغ 150,000 دولار فقط من أصل ميزانية إطلاق تبلغ 470,000 دولار.",
      "العائد مرتبط بصافي الأرباح، لذلك لا يتم استنزاف الشركة قبل أن تصبح رابحة فعلاً.",
      "الدور Silent Partner، أي لا توجد مسؤولية تشغيلية يومية على المستثمر.",
      "السنة الأولى قد تكون بدون توزيع أرباح لأن الأولوية ستكون للبناء، التسويق، واكتساب المستخدمين.",
      "مصادر الدخل متعددة: اشتراكات شهرية، اشتراكات سنوية، تقارير مدفوعة، باقات تجار، API، وماركت بليس مستقبلاً.",
      "موسوعة كيشيب تجعل المنصة أقوى من تطبيق تقييم عادي لأنها تضيف مرجعاً معرفياً خاصاً يمكن للتقييم أن يعتمد عليه.",
      "سوق التحف والمقتنيات عالي القيمة لكنه مشتت، والثقة فيه ضعيفة، وهذا يفتح فرصة لمنصة منظمة وموثوقة.",
      "كل صورة أو تقييم أو تقرير يمكن أن يتحول لاحقاً إلى بيانات، معرفة سوقية، أو خدمة مدفوعة.",
    ],
    useTitle: "كيف ستُستخدم مساهمة المستثمر؟",
    useItems: [
      {
        icon: Layers3,
        title: "تطوير المنصة والتطبيق",
        text: "بناء تجربة تقييم احترافية، لوحة تحكم، نظام تقارير، أرشيف، اشتراكات، واجهات متعددة اللغات، وتحسين تجربة الهاتف.",
      },
      {
        icon: CircleDollarSign,
        title: "AI وواجهات API",
        text: "شراء وربط APIs للأسواق، الصور، المعادن، الأسعار، المزادات، وتحسين دقة التقييم بالاعتماد على مصادر خارجية وداخلية.",
      },
      {
        icon: FileText,
        title: "موسوعة كيشيب",
        text: "بناء موقع موسوعي كامل للتحف والمقتنيات يعمل كمرجع معرفي للمنصة ويضم مقالات، تصنيفات، مصادر، وصور توضيحية.",
      },
      {
        icon: Globe2,
        title: "فريق البحث والمحتوى",
        text: "توظيف باحثين ومحررين لجمع معلومات موثوقة عن السجاد، الخشب، النحاس، الكريستال، الفخار، العملات، الأعمال الفنية، والأحجار.",
      },
      {
        icon: ShieldCheck,
        title: "التسجيل القانوني والحماية",
        text: "تسجيل LLC في أمريكا، تجهيز العقود، المحاسبة، المتطلبات القانونية، الخصوصية، الشروط، وإطار حماية المنصة.",
      },
      {
        icon: TrendingUp,
        title: "التسويق والإطلاق",
        text: "حملات إعلانية، فيديوهات تعريفية، محتوى سوشيال ميديا، جذب المستخدمين الأوائل، وبناء ثقة السوق حول KISHIB.",
      },
    ],
    investorFitTitle: "نوع المستثمر المناسب",
    investorFitText:
      "هذا العرض مناسب لمستثمر يريد الدخول في مشروع تقني ومعرفي طويل النفس، ويفهم أن قيمة المنصات لا تُبنى من أول شهر، بل من المنتج، البيانات، الثقة، التوسع، وتكرار الاستخدام. المستثمر هنا لا يشتري وعداً سريعاً، بل يدخل في أصل قابل للنمو إذا تم تنفيذه بشكل صحيح.",
    governanceTitle: "ملاحظات حوكمة مهمة",
    governanceItems: [
      "حصة المستثمر تكون من صافي الأرباح السنوية، وليس من إجمالي الإيرادات.",
      "لا يوجد توزيع أرباح مضمون، لأن العائد مرتبط بالأداء الحقيقي للمنصة.",
      "السنة الأولى قد تذهب بالكامل للبناء والنمو، لذلك قد لا يتم توزيع أرباح فيها.",
      "يتم تزويد المستثمر بتقارير دورية عن الإيرادات، المصروفات، النمو، وحالة المنتج.",
      "أي تغيير جوهري في نموذج العائد أو الحصة يجب أن يكون باتفاق مكتوب بين الطرفين.",
    ],
    closingTitle: "الخلاصة الاستثمارية",
    closingText:
      "KISHIB يحتاج إلى تمويل جاد لأن المشروع لا يبني صفحة ويب فقط، بل يبني منصة تقييم، موسوعة، بنية بيانات، فريق بحث، وطبقة تجارية حول سوق التحف والمقتنيات. المطلوب هو 150,000 دولار من مستثمر صامت مقابل 10% من صافي الأرباح السنوية، ضمن ميزانية تأسيس وإطلاق كاملة تبلغ 470,000 دولار. هذه ليست دعوة لربح سريع، بل دخول مبكر في مشروع يمكن أن يتحول إلى أصل رقمي متخصص إذا نُفّذ بجدية.",
    primaryButton: "فتح منصة KISHIB",
    secondaryButton: "العودة إلى نموذج الإيرادات",
    disclaimer:
      "الأرقام المعروضة تقديرية وليست ضماناً للعائد. الأداء الفعلي يعتمد على جودة التنفيذ، التسويق، نمو المستخدمين، التحويل إلى الدفع، كلفة التشغيل، وقابلية المنصة للتوسع.",
  },

  en: {
    dir: "ltr" as const,
    align: "text-left",
    sectionLabel: "FINAL INVESTMENT ASK",
    title:
      "Final investment ask: $150,000 as a silent partner for 10% of annual net profit",
    intro:
      "KISHIB is not simply an antique evaluation app. It is a full technical and knowledge infrastructure combining an evaluation platform, paid reports, subscriptions, API integrations, the KISHIB Encyclopedia, a research team, and a scalable commercial layer. The full build and launch budget is $470,000, and the investor ask is $150,000 as a Silent Partner in exchange for 10% of annual net profit.",
    askCards: [
      {
        icon: Banknote,
        title: "Required Investment",
        value: "$150,000",
        text: "A direct investor contribution covering a significant part of the build and launch phase, not the entire project cost.",
      },
      {
        icon: BadgePercent,
        title: "Investor Share",
        value: "10%",
        text: "A share of annual net profit after operating expenses, taxes, legal costs, and required business expenses.",
      },
      {
        icon: LockKeyhole,
        title: "Investor Role",
        value: "Silent Partner",
        text: "The investor does not manage daily operations, but receives clear financial and operational performance reports.",
      },
      {
        icon: Rocket,
        title: "Build & Launch Budget",
        value: "$470,000",
        text: "A full foundation budget covering engineering, company setup, team, APIs, marketing, equipment, and the KISHIB Encyclopedia.",
      },
    ],
    capitalTitle: "Proposed capital structure",
    capitalText:
      "$470,000 represents the build and launch cost, not a recurring annual expense. The investor contribution of $150,000 covers 31.9% of the total budget, while the remaining amount is covered by founders, partners, or later funding stages.",
    capitalRows: [
      {
        label: "Investor Contribution",
        value: "$150,000",
        percent: "31.9%",
        note: "In exchange for 10% of annual net profit as a silent partner.",
      },
      {
        label: "Founder and Other Funding",
        value: "$320,000",
        percent: "68.1%",
        note: "To cover the remaining build, launch, and early scaling cost.",
      },
      {
        label: "Total Build & Launch Budget",
        value: "$470,000",
        percent: "100%",
        note: "Includes product, encyclopedia, team, company setup, technical infrastructure, and launch marketing.",
      },
    ],
    whyTitle: "Why this offer makes sense for the investor",
    whyText:
      "This offer does not sell the investor a simple interface or a small idea. It gives early entry into a scalable digital asset. KISHIB’s long-term strength will come from accumulated data, trust, knowledge authority, and the ability to convert each evaluation into a paid report, subscription, or commercial service.",
    reasons: [
      "The investor enters with $150,000 while the full launch budget is $470,000.",
      "The return is tied to net profit, so the company is not drained before it becomes profitable.",
      "The investor acts as a Silent Partner, with no daily operational responsibility.",
      "Year one may have no distributed profit because priority will be product build, marketing, and user acquisition.",
      "Revenue streams are diversified: monthly subscriptions, annual subscriptions, paid reports, dealer plans, API access, and a future marketplace.",
      "The KISHIB Encyclopedia makes the platform stronger than a normal evaluation app by creating a proprietary knowledge reference.",
      "The antique and collectibles market is high-value but fragmented and trust-sensitive, which creates room for a structured and trusted platform.",
      "Every image, evaluation, and report can later become data, market knowledge, or a paid service opportunity.",
    ],
    useTitle: "How the investor contribution will be used",
    useItems: [
      {
        icon: Layers3,
        title: "Platform and App Development",
        text: "Build a professional evaluation experience, dashboard, reporting system, archive, subscriptions, multilingual interfaces, and improved mobile UX.",
      },
      {
        icon: CircleDollarSign,
        title: "AI and API Infrastructure",
        text: "Purchase and connect APIs for markets, images, metals, prices, auctions, and improve evaluation accuracy using both external and internal sources.",
      },
      {
        icon: FileText,
        title: "KISHIB Encyclopedia",
        text: "Build a full knowledge website for antiques and collectibles that supports the platform with articles, categories, sources, and reference images.",
      },
      {
        icon: Globe2,
        title: "Research and Content Team",
        text: "Hire researchers and editors to gather reliable information about rugs, wood, copper, crystal, ceramics, coins, artworks, and gemstones.",
      },
      {
        icon: ShieldCheck,
        title: "Legal Setup and Protection",
        text: "Register a US LLC, prepare agreements, accounting, legal requirements, privacy, terms, and the platform protection framework.",
      },
      {
        icon: TrendingUp,
        title: "Marketing and Launch",
        text: "Run ad campaigns, explainer videos, social content, early user acquisition, and build market trust around KISHIB.",
      },
    ],
    investorFitTitle: "The right investor profile",
    investorFitText:
      "This offer fits an investor who wants to enter a long-term technology and knowledge project, and understands that platform value is not built in the first month. It is built through product quality, data, trust, expansion, and repeated usage. The investor is not buying a quick-return promise, but entering an asset that can grow if executed seriously.",
    governanceTitle: "Important governance notes",
    governanceItems: [
      "The investor share is calculated from annual net profit, not gross revenue.",
      "There is no guaranteed dividend because return depends on actual platform performance.",
      "Year one may be fully dedicated to build and growth, so it may have no distributed profit.",
      "The investor receives periodic reports covering revenue, expenses, growth, and product status.",
      "Any material change to the return model or investor share should be agreed in writing by both parties.",
    ],
    closingTitle: "Investment summary",
    closingText:
      "KISHIB needs serious funding because the project is not building a web page only. It is building an evaluation platform, encyclopedia, data infrastructure, research team, and commercial layer around the antiques and collectibles market. The ask is $150,000 from a silent partner in exchange for 10% of annual net profit, within a full build and launch budget of $470,000. This is not a quick-profit pitch. It is early entry into a specialized digital asset if executed properly.",
    primaryButton: "Open KISHIB Platform",
    secondaryButton: "Back to Revenue Model",
    disclaimer:
      "All figures shown are projections and do not guarantee return. Actual performance depends on execution quality, marketing, user growth, paid conversion, operating costs, and the platform’s ability to scale.",
  },
};

export default function FinalInvestmentAsk({
  lang = "ar",
}: FinalInvestmentAskProps) {
  const t = content[lang];

  return (
    <section
      id="summary"
      dir={t.dir}
      className={[
        "relative overflow-hidden bg-[#050302] px-5 py-24 text-white md:px-8 lg:px-10 xl:pl-52 xl:pr-16",
        t.align,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute right-[-180px] top-20 h-96 w-96 rounded-full bg-[#d7a35f]/12 blur-[120px]" />
      <div className="pointer-events-none absolute left-[-160px] bottom-0 h-96 w-96 rounded-full bg-[#3a1c0b]/35 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7a35f]">
            {t.sectionLabel}
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
            {t.title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-white/62">
            {t.intro}
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {t.askCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-[2rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#d7a35f]/[0.1]"
              >
                <div className="mb-8 flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
                    <Icon size={22} />
                  </div>

                  <p className="text-3xl font-semibold tracking-[-0.05em] text-white">
                    {card.value}
                  </p>
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {card.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/58">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                CAPITAL STRUCTURE
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                {t.capitalTitle}
              </h3>
            </div>

            <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987] sm:flex">
              <CircleDollarSign size={24} />
            </div>
          </div>

          <p className="max-w-4xl text-base leading-8 text-white/62">
            {t.capitalText}
          </p>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {t.capitalRows.map((row) => (
              <div
                key={row.label}
                className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <h4 className="text-lg font-semibold text-white">
                    {row.label}
                  </h4>

                  <span className="rounded-full border border-[#d7a35f]/25 bg-[#d7a35f]/10 px-3 py-1 text-xs font-semibold text-[#f0c987]">
                    {row.percent}
                  </span>
                </div>

                <p className="text-3xl font-semibold tracking-[-0.05em] text-white">
                  {row.value}
                </p>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  {row.note}
                </p>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-[#d7a35f]"
                    style={{ width: row.percent }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
            <div className="mb-7 flex items-center justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                  INVESTMENT LOGIC
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                  {t.whyTitle}
                </h3>
              </div>

              <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987] sm:flex">
                <Target size={24} />
              </div>
            </div>

            <p className="text-base leading-8 text-white/62">{t.whyText}</p>

            <div className="mt-7 grid gap-3">
              {t.reasons.map((reason) => (
                <div
                  key={reason}
                  className="flex items-start gap-3 rounded-[1.25rem] border border-white/10 bg-black/20 p-4"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-1 shrink-0 text-[#d7a35f]"
                  />

                  <p className="text-sm leading-7 text-white/62">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
            <div className="mb-7 flex items-center justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                  CAPITAL USE
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                  {t.useTitle}
                </h3>
              </div>

              <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987] sm:flex">
                <Layers3 size={24} />
              </div>
            </div>

            <div className="grid gap-3">
              {t.useItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[1.35rem] border border-white/10 bg-black/20 p-5"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
                        <Icon size={18} />
                      </div>

                      <h4 className="text-base font-semibold text-white">
                        {item.title}
                      </h4>
                    </div>

                    <p className="text-sm leading-7 text-white/58">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-7">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
              <Handshake size={24} />
            </div>

            <h3 className="mt-8 text-3xl font-semibold tracking-[-0.03em] text-white">
              {t.investorFitTitle}
            </h3>

            <p className="mt-5 text-base leading-8 text-white/62">
              {t.investorFitText}
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
              <ShieldCheck size={24} />
            </div>

            <h3 className="mt-8 text-3xl font-semibold tracking-[-0.03em] text-white">
              {t.governanceTitle}
            </h3>

            <div className="mt-6 grid gap-3">
              {t.governanceItems.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[1.25rem] border border-white/10 bg-black/20 p-4"
                >
                  <CheckCircle2
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
          <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-start">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
              <Gem size={24} />
            </div>

            <div>
              <h3 className="text-3xl font-semibold tracking-[-0.03em] text-white">
                {t.closingTitle}
              </h3>

              <p className="mt-5 text-base leading-8 text-white/62">
                {t.closingText}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={platformUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#d7a35f] px-7 py-4 text-sm font-bold text-black shadow-2xl shadow-[#d7a35f]/20 transition hover:bg-[#f0c987]"
          >
            {t.primaryButton}
            <ArrowUpRight
              size={17}
              className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <a
            href="#revenue"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"
          >
            {t.secondaryButton}
          </a>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-white/35">
          {t.disclaimer}
        </p>
      </div>
    </section>
  );
}
