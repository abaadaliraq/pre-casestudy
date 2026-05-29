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
    title: "الطلب الاستثماري: 32,000 دولار مقابل 9% من صافي أرباح KISHIB",
    intro:
      "KISHIB ليست مجرد منصة تقييم. هي محاولة لبناء بنية رقمية متخصصة لسوق التحف، المقتنيات، الأعمال الفنية، والأحجار الكريمة؛ سوق عالي القيمة، لكنه لا يزال يعاني من التشتت، ضعف الثقة، وصعوبة الوصول إلى تقييم منظم.",
    askCards: [
      {
        icon: Banknote,
        title: "قيمة الاستثمار المطلوبة",
        value: "$32,000",
        text: "دفعة تسريع أولى لتطوير المنتج، تجهيز الإطلاق، تحسين التجربة، ودعم التسويق الأولي.",
      },
      {
        icon: BadgePercent,
        title: "حصة المستثمر",
        value: "9%",
        text: "حصة من صافي الأرباح السنوية للمنصة وفق اتفاق واضح، وليس من إجمالي الإيرادات.",
      },
      {
        icon: TrendingUp,
        title: "استرداد تقديري",
        value: "30 - 36 شهر",
        text: "حسب سيناريو النمو الحالي وتفعيل الاشتراكات، التقارير المدفوعة، والخدمات عالية القيمة.",
      },
    ],
    whyTitle: "لماذا الاستثمار الآن؟",
    whyText:
      "لأن المرحلة الحالية هي الفاصل بين منتج موجود ومنصة قابلة للنمو التجاري. الدخول الآن يعني المشاركة في بناء الأصل من مرحلة مبكرة، قبل توسع اللغات، التقارير، الاستشارات، وخدمات التجار والمزادات.",
    reasons: [
      "منتج فعلي قابل للتطوير وليس فكرة نظرية.",
      "سوق عالي القيمة وغير منظم رقمياً بشكل كافٍ.",
      "مصادر دخل متعددة: اشتراكات، تقارير، خبراء، مزادات، وتجار.",
      "قسم الأحجار الكريمة يفتح شريحة أعلى قيمة.",
      "دعم لغات متعددة يجهز المنصة للتوسع خارج السوق المحلي.",
      "كل تقييم يمكن أن يتحول إلى بيانات، تقرير، أو خدمة مدفوعة.",
    ],
    useTitle: "أين سيتم توجيه الاستثمار؟",
    useItems: [
      {
        icon: Layers3,
        title: "تطوير المنتج",
        text: "تحسين تجربة التطبيق، تقوية التقارير، وتطوير مسارات التقييم المتخصصة.",
      },
      {
        icon: Globe2,
        title: "التوسع اللغوي والسوقي",
        text: "تحسين تجربة اللغات الحالية وتجهيز المنصة للتسويق في أسواق متعددة.",
      },
      {
        icon: FileText,
        title: "التقارير المدفوعة",
        text: "تحويل نتائج التقييم إلى منتجات قابلة للبيع والحفظ والمشاركة.",
      },
      {
        icon: Handshake,
        title: "طبقة الخبراء",
        text: "تهيئة ربط المستخدمين باستشاريين وخبراء حقيقيين للحالات عالية القيمة.",
      },
    ],
    investorFitTitle: "نوع المستثمر المناسب",
    investorFitText:
      "هذا الاستثمار مناسب لشخص يفهم أن القيمة في المنصات لا تُبنى من أول عملية بيع فقط، بل من تراكم المستخدمين، البيانات، الثقة، والعلاقات التجارية داخل سوق متخصص.",
    closingTitle: "الخلاصة",
    closingText:
      "KISHIB تمتلك فرصة واضحة: تحويل تقييم التحف والمقتنيات من سؤال عابر إلى خدمة رقمية منظمة، قابلة للدفع، التوسع، وبناء الثقة. الاستثمار المطلوب ليس لتمويل فكرة، بل لتسريع منتج بدأ يتحول إلى أصل تجاري.",
    primaryButton: "فتح منصة KISHIB",
    secondaryButton: "العودة إلى نموذج الإيرادات",
    disclaimer:
      "الأرقام المعروضة تقديرية وليست ضماناً للعائد. العائد الفعلي يعتمد على التنفيذ، التسويق، نمو المستخدمين، التحويل إلى الدفع، وتفعيل مصادر الدخل الإضافية.",
  },

  en: {
    dir: "ltr" as const,
    align: "text-left",
    sectionLabel: "FINAL INVESTMENT ASK",
    title: "$32,000 investment for 9% of KISHIB annual net profit",
    intro:
      "KISHIB is not just an evaluation platform. It is an attempt to build specialized digital infrastructure for antiques, collectibles, artworks, and gemstones — a high-value market that remains fragmented, trust-sensitive, and digitally under-structured.",
    askCards: [
      {
        icon: Banknote,
        title: "Required Investment",
        value: "$32,000",
        text: "An initial acceleration tranche for product development, launch preparation, experience refinement, and early marketing execution.",
      },
      {
        icon: BadgePercent,
        title: "Investor Share",
        value: "9%",
        text: "A share of the platform’s annual net profit under a clear agreement, not a share of gross revenue.",
      },
      {
        icon: TrendingUp,
        title: "Estimated Payback",
        value: "30 - 36 months",
        text: "Based on the current growth scenario and activation of subscriptions, paid reports, and high-value service layers.",
      },
    ],
    whyTitle: "Why invest now?",
    whyText:
      "Because this is the transition point between a working product and a commercially scalable platform. Investing now means entering early, before the expansion of languages, reports, expert services, dealer tools, and auction-related revenue layers.",
    reasons: [
      "A real product foundation, not a theoretical idea.",
      "A high-value market that is still digitally under-structured.",
      "Multiple revenue streams: subscriptions, reports, experts, auctions, and dealers.",
      "The gemstone vertical opens access to a higher-value user segment.",
      "Multi-language support prepares the platform for international expansion.",
      "Every evaluation can become data, a report, or a paid service opportunity.",
    ],
    useTitle: "How the investment will be used",
    useItems: [
      {
        icon: Layers3,
        title: "Product Development",
        text: "Improve the app experience, strengthen reports, and build more specialized evaluation flows.",
      },
      {
        icon: Globe2,
        title: "Language and Market Expansion",
        text: "Refine the current multilingual experience and prepare the platform for targeted market entry.",
      },
      {
        icon: FileText,
        title: "Paid Reports",
        text: "Turn evaluation results into monetizable products that can be saved, shared, and exported.",
      },
      {
        icon: Handshake,
        title: "Expert Layer",
        text: "Prepare the connection between users and real consultants for high-value or sensitive cases.",
      },
    ],
    investorFitTitle: "The right investor profile",
    investorFitText:
      "This opportunity fits an investor who understands that platform value is not built from the first transaction alone, but from accumulating users, data, trust, and commercial relationships inside a specialized market.",
    closingTitle: "Bottom line",
    closingText:
      "KISHIB has a clear opportunity: turn antique and collectible evaluation from a casual question into a structured digital service that can be paid for, scaled, and trusted. The requested investment is not to fund an idea. It is to accelerate a product that has started becoming a commercial asset.",
    primaryButton: "Open KISHIB Platform",
    secondaryButton: "Back to Revenue Model",
    disclaimer:
      "All figures shown are projections and do not guarantee return. Actual performance depends on execution, marketing, user growth, paid conversion, and activation of additional revenue streams.",
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

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {t.askCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-[2rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#d7a35f]/[0.1]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
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
                <CircleDollarSign size={24} />
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
              <ShieldCheck size={24} />
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
              <Gem size={24} />
            </div>

            <h3 className="mt-8 text-3xl font-semibold tracking-[-0.03em] text-white">
              {t.closingTitle}
            </h3>

            <p className="mt-5 text-base leading-8 text-white/62">
              {t.closingText}
            </p>
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