import {
  BadgeDollarSign,
  Building2,
  Cloud,
  Code2,
  Database,
  Megaphone,
  Palette,
  ReceiptText,
  Rocket,
  Server,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";

type Lang = "ar" | "en";

type ProjectCostsProps = {
  lang?: Lang;
};

const content = {
  ar: {
    dir: "rtl" as const,
    align: "text-right",
    sectionLabel: "PROJECT COSTS",
    title:
      "التكلفة النهائية المتوقعة لمنصة KISHIB بعد التطوير والإطلاق التجاري",
    intro:
      "KISHIB ليست صفحة تعريفية أو نموذجاً بسيطاً. المنصة تحتاج إلى بناء منتج فعلي، تجربة تطبيق قوية، خدمات API، بنية تقنية، تسويق، تسجيل شركة LLC، تشغيل، ودعم إطلاق تجاري. لذلك يجب النظر إلى التكلفة كاستثمار لبناء أصل رقمي قابل للنمو، وليس كمصاريف برمجة فقط.",

    currentCosts: [
      {
        title: "قيمة التطوير المنجزة",
        value: "$105,000",
        text: "تمثل القيمة التقديرية لما تم بناؤه حتى الآن: تصميم، برمجة، تجربة مستخدم، هوية بصرية، عرض استثماري، وتجهيز النموذج التجاري الأولي.",
        icon: Code2,
      },
      {
        title: "منصة قابلة للتحول إلى تطبيق",
        value: "App Ready",
        text: "KISHIB مبنية كمنتج قابل للتوسع نحو تجربة تطبيق، تقارير مدفوعة، حسابات مستخدمين، لغات متعددة، وقسم مخصص للأحجار الكريمة.",
        icon: ShieldCheck,
      },
      {
        title: "مرحلة الإطلاق التجاري",
        value: "Launch",
        text: "المرحلة القادمة لا تركز على البناء فقط، بل على تحويل المنصة إلى منتج قادر على جذب المستخدمين وتحقيق دخل متكرر.",
        icon: Rocket,
      },
    ],

    budgetLabel: "FINAL PLATFORM COST",
    budgetTitle:
      "تفصيل التكلفة النهائية المتوقعة بعد احتساب التطوير، التسويق، API، و LLC",
    budgetIntro:
      "هذه التكلفة تشمل بناء المنصة، تطوير تجربة التطبيق، خدمات API، البنية التقنية، التسويق، إنتاج المحتوى، تسجيل LLC، الجوانب القانونية، التشغيل، ودعم الإطلاق التجاري. الرقم لا يمثل البرمجة فقط، بل تكلفة تحويل KISHIB إلى منصة جاهزة للسوق.",

    finalCosts: [
      {
        item: "التطوير البرمجي وبناء خصائص المنصة الأساسية",
        range: "$75,000",
        icon: Code2,
      },
      {
        item: "تطوير تجربة التطبيق وتحسين الواجهة والاستخدام",
        range: "$35,000",
        icon: Palette,
      },
      {
        item: "خدمات API، الربط الخارجي، البحث، الصور، وتحسين نتائج التقييم",
        range: "$45,000",
        icon: Database,
      },
      {
        item: "خوادم، استضافة، حماية، قواعد بيانات، وبنية تشغيل",
        range: "$35,000",
        icon: Server,
      },
      {
        item: "حملات تسويق وإعلانات مدفوعة لاكتساب المستخدمين",
        range: "$95,000",
        icon: Megaphone,
      },
      {
        item: "إنتاج محتوى، فيديوهات، شرح المنتج، وسوشيال ميديا",
        range: "$25,000",
        icon: Cloud,
      },
      {
        item: "تسجيل LLC، الجوانب القانونية، المحاسبة، وتجهيز العقود",
        range: "$15,000",
        icon: ReceiptText,
      },
      {
        item: "تشغيل، دعم، اختبار أسواق، وشراكات أولية",
        range: "$25,000",
        icon: BadgeDollarSign,
      },
    ],

    totalTitle: "التكلفة النهائية المتوقعة للمنصة",
    totalLabel: "Final Estimated Platform Cost",
    totalValue: "$350,000",
    totalText:
      "هذا الرقم يمثل التكلفة النهائية المتوقعة للوصول إلى منصة جاهزة تجارياً، بعد احتساب التطوير، التسويق، خدمات API، البنية التقنية، تجهيز التطبيق، تسجيل LLC، التشغيل، ودعم الإطلاق.",

    trancheTitle: "الاستثمار المطلوب حالياً هو دفعة أولى وليس كامل التكلفة",
    trancheValue: "$32,000",
    trancheText:
      "الـ 32,000 دولار ليست تكلفة بناء KISHIB بالكامل. هي دفعة تسريع أولى مقابل 9% من صافي الأرباح، هدفها تحريك الإطلاق التجاري، تحسين المنتج، وتجهيز أول موجة نمو. أما التكلفة النهائية المتوقعة للمنصة فهي 350,000 دولار.",

    investorLogicTitle: "لماذا هذا التفصيل مهم للمستثمر؟",
    investorLogic:
      "المستثمر يجب أن يرى الفرق بين تكلفة بناء المنصة بالكامل وبين الدفعة الاستثمارية الحالية. 350,000 دولار تمثل الرؤية الكاملة لبناء منصة قوية وقابلة للنمو، بينما 32,000 دولار تمثل دخولاً مبكراً في المشروع وتسريعاً للمرحلة التجارية الأولى.",

    noteTitle: "نقطة مهمة",
    note:
      "إذا تم عرض 32,000 دولار بدون توضيح التكلفة النهائية، سيبدو المشروع صغيراً أو غير محسوب. وإذا تم عرض 350,000 دولار بدون توضيح الدفعة الأولى، سيبدو الطلب كبيراً. لذلك يجب الفصل بين الاثنين بوضوح.",

    bottomCards: [
      {
        title: "التطوير وحده لا يكفي",
        text: "المنصة تحتاج إلى تسويق، API، تشغيل، وبناء ثقة حتى تتحول من منتج إلى شركة.",
        icon: Code2,
      },
      {
        title: "التسويق جزء من قيمة المنصة",
        text: "بدون اكتساب مستخدمين، حتى أفضل منتج يبقى بلا قيمة تجارية حقيقية.",
        icon: Megaphone,
      },
      {
        title: "التنفيذ يمكن أن يكون مرحلياً",
        text: "ليس شرطاً إنفاق 350,000 دولار دفعة واحدة. يمكن تنفيذ الخطة على مراحل حسب النتائج.",
        icon: TrendingUp,
      },
    ],
  },

  en: {
    dir: "ltr" as const,
    align: "text-left",
    sectionLabel: "PROJECT COSTS",
    title:
      "Final estimated cost of KISHIB after development and commercial launch preparation",
    intro:
      "KISHIB is not a landing page or a simple prototype. The platform requires a real product build, strong app experience, API services, technical infrastructure, marketing, LLC registration, operations, and commercial launch support. The cost should be viewed as investment into a scalable digital asset, not software development expense alone.",

    currentCosts: [
      {
        title: "Development Value Built",
        value: "$105,000",
        text: "This represents the estimated value already built: design, development, user experience, visual identity, investor presentation, and the first commercial model.",
        icon: Code2,
      },
      {
        title: "App-Ready Product Base",
        value: "App Ready",
        text: "KISHIB is built as an expandable product that can move into an app experience, paid reports, user accounts, multiple languages, and a dedicated gemstone section.",
        icon: ShieldCheck,
      },
      {
        title: "Commercial Launch Stage",
        value: "Launch",
        text: "The next stage is not only about building. It is about turning the platform into a product capable of acquiring users and generating recurring revenue.",
        icon: Rocket,
      },
    ],

    budgetLabel: "FINAL PLATFORM COST",
    budgetTitle:
      "Final estimated cost after development, marketing, API services, and LLC setup",
    budgetIntro:
      "This cost includes platform development, app experience, API services, technical infrastructure, marketing, content production, LLC registration, legal setup, operations, and commercial launch support. It is not a software-only number; it represents the cost of turning KISHIB into a market-ready platform.",

    finalCosts: [
      {
        item: "Core software development and platform features",
        range: "$75,000",
        icon: Code2,
      },
      {
        item: "App experience, interface refinement, and usability improvements",
        range: "$35,000",
        icon: Palette,
      },
      {
        item: "API services, external integrations, search, image layers, and evaluation enhancement",
        range: "$45,000",
        icon: Database,
      },
      {
        item: "Servers, hosting, security, databases, and operating infrastructure",
        range: "$35,000",
        icon: Server,
      },
      {
        item: "Paid marketing campaigns and user acquisition",
        range: "$95,000",
        icon: Megaphone,
      },
      {
        item: "Content production, short videos, product education, and social media",
        range: "$25,000",
        icon: Cloud,
      },
      {
        item: "LLC registration, legal setup, accounting, and agreements",
        range: "$15,000",
        icon: ReceiptText,
      },
      {
        item: "Operations, support, market testing, and early partnerships",
        range: "$25,000",
        icon: BadgeDollarSign,
      },
    ],

    totalTitle: "Final estimated platform cost",
    totalLabel: "Final Estimated Platform Cost",
    totalValue: "$350,000",
    totalText:
      "This number represents the estimated final cost required to reach a commercially ready platform, including development, marketing, API services, technical infrastructure, app readiness, LLC registration, operations, and launch support.",

    trancheTitle:
      "The current investment request is an initial tranche, not the full platform cost",
    trancheValue: "$32,000",
    trancheText:
      "The $32,000 request is not the full cost of building KISHIB. It is an initial acceleration tranche in exchange for 9% of net profit, designed to move the commercial launch forward, improve the product, and prepare the first growth wave. The estimated final platform cost is $350,000.",

    investorLogicTitle: "Why this distinction matters to investors",
    investorLogic:
      "Investors need to see the difference between the full cost of building the platform and the current investment request. $350,000 represents the full plan to build a strong scalable platform, while $32,000 represents early entry and acceleration of the first commercial phase.",

    noteTitle: "Important point",
    note:
      "If $32,000 is presented without explaining the final platform cost, the project may look too small or under-planned. If $350,000 is presented without explaining the initial tranche, the ask may look too large. The two numbers must be separated clearly.",

    bottomCards: [
      {
        title: "Development alone is not enough",
        text: "The platform needs marketing, API services, operations, and trust-building to move from product to company.",
        icon: Code2,
      },
      {
        title: "Marketing is part of platform value",
        text: "Without user acquisition, even a strong product has limited commercial value.",
        icon: Megaphone,
      },
      {
        title: "Execution can be phased",
        text: "The $350,000 plan does not need to be spent all at once. It can be executed in phases based on results.",
        icon: TrendingUp,
      },
    ],
  },
};

export default function ProjectCosts({ lang = "ar" }: ProjectCostsProps) {
  const t = content[lang];

  return (
    <section
      id="costs"
      dir={t.dir}
      className={[
        "relative overflow-hidden bg-[#070403] px-5 py-24 text-white md:px-8 lg:px-10 xl:pl-52 xl:pr-16",
        t.align,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute left-[-180px] top-20 h-96 w-96 rounded-full bg-[#d7a35f]/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-160px] bottom-0 h-96 w-96 rounded-full bg-[#3a1c0b]/35 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
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
          {t.currentCosts.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d7a35f]/35 hover:bg-white/[0.07]"
              >
                <div className="mb-8 flex items-center justify-between gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
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

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 md:p-7">
            <div className="mb-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                {t.budgetLabel}
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                {t.budgetTitle}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/50">
                {t.budgetIntro}
              </p>
            </div>

            <div className="grid gap-3">
              {t.finalCosts.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.item}
                    className="grid gap-4 rounded-[1.35rem] border border-white/10 bg-black/20 p-4 sm:grid-cols-[auto_1fr_auto] sm:items-center"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
                      <Icon size={19} />
                    </div>

                    <p className="text-sm font-medium leading-7 text-white/72">
                      {item.item}
                    </p>

                    <p className="text-sm font-semibold text-[#f0c987]">
                      {item.range}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-7">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
              <BadgeDollarSign size={24} />
            </div>

            <h3 className="mt-8 text-3xl font-semibold tracking-[-0.03em] text-white">
              {t.totalTitle}
            </h3>

            <div className="mt-7 rounded-[1.5rem] border border-white/10 bg-black/25 p-6">
              <p className="text-sm text-white/45">{t.totalLabel}</p>

              <p className="mt-3 text-5xl font-semibold tracking-[-0.06em] text-white md:text-6xl">
                {t.totalValue}
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                {t.totalText}
              </p>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <div className="flex items-start gap-4">
                <Target size={22} className="mt-1 shrink-0 text-[#d7a35f]" />

                <div>
                  <h4 className="text-base font-semibold text-white">
                    {t.trancheTitle}
                  </h4>

                  <p className="mt-2 text-4xl font-semibold tracking-[-0.05em] text-[#f0c987]">
                    {t.trancheValue}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-white/62">
                    {t.trancheText}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <div className="flex items-start gap-4">
                <TrendingUp
                  size={22}
                  className="mt-1 shrink-0 text-[#d7a35f]"
                />

                <div>
                  <h4 className="text-base font-semibold text-white">
                    {t.investorLogicTitle}
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-white/62">
                    {t.investorLogic}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <div className="flex items-start gap-4">
                <Building2
                  size={22}
                  className="mt-1 shrink-0 text-[#d7a35f]"
                />

                <div>
                  <h4 className="text-base font-semibold text-white">
                    {t.noteTitle}
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-white/62">
                    {t.note}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
          <div className="grid gap-5 md:grid-cols-3">
            {t.bottomCards.map((card) => {
              const Icon = card.icon;

              return (
                <div
                  key={card.title}
                  className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
                    <Icon size={20} />
                  </div>

                  <h4 className="text-lg font-semibold text-white">
                    {card.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {card.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}