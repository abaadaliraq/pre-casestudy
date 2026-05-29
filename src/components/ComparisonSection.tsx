import {
  Bot,
  CheckCircle2,
  ClipboardList,
  Database,
  Gem,
  Layers3,
  MessageSquareText,
  SearchCheck,
  ShieldCheck,
  Smartphone,
  Stethoscope,
  Wrench,
  XCircle,
} from "lucide-react";

type Lang = "ar" | "en";

type ComparisonSectionProps = {
  lang?: Lang;
};

const content = {
  ar: {
    dir: "rtl" as const,
    align: "text-right",
    sectionLabel: "COMPETITIVE POSITION",
    title: "لماذا يدفع المستخدم لمنصة KISHIB بدل الاعتماد على أدوات عامة؟",
    intro:
      "هذا السؤال مهم ويجب أن تكون إجابته واضحة للمستثمر. الأدوات العامة قد تعطي جواباً سريعاً، لكنها لا تبني تجربة متخصصة، ولا تحفظ القطع، ولا تقدم مساراً تجارياً واضحاً. KISHIB ليست مجرد إجابة؛ هي منتج مخصص لسوق التحف، المقتنيات، الأعمال الفنية، والأحجار الكريمة.",
    advantages: [
      {
        icon: Gem,
        title: "تخصص واضح",
        text: "المنصة مبنية حول سوق محدد: التحف، الأعمال الفنية، القطع النادرة، المقتنيات التراثية، والأحجار الكريمة.",
      },
      {
        icon: ClipboardList,
        title: "تقرير قابل للبيع",
        text: "القيمة ليست في جواب عابر، بل في تقرير منظم يمكن حفظه، مشاركته، تطويره، وربطه بخدمات مدفوعة.",
      },
      {
        icon: Database,
        title: "بيانات تتراكم",
        text: "كل تقييم يمكن أن يضيف لاحقاً إلى أرشيف معرفي وسوقي يساعد المنصة على فهم الأسعار والأنواع والطلب.",
      },
    ],
    tableLabel: "General Tools vs KISHIB",
    tableTitle: "الفرق بين أداة عامة ومنصة متخصصة",
    headers: ["نقطة المقارنة", "الأدوات العامة", "KISHIB"],
    rows: [
      {
        point: "التخصص",
        general: "تخدم كل المواضيع ولا تركز على سوق التحف تحديداً.",
        kishib: "مصممة حول سوق التحف، المقتنيات، الأعمال الفنية، والأحجار الكريمة.",
      },
      {
        point: "تجربة المستخدم",
        general: "المستخدم يحتاج أن يعرف ماذا يسأل وكيف يصف القطعة.",
        kishib: "يرفع صورة ويستلم تجربة منظمة تقوده خطوة بخطوة.",
      },
      {
        point: "شكل النتيجة",
        general: "إجابة نصية عامة قد تختلف حسب طريقة السؤال.",
        kishib: "تقرير واضح يحتوي على العمر، المادة، الأصل، الحالة، القيمة، والعوامل المؤثرة.",
      },
      {
        point: "الأرشفة",
        general: "لا تبني ملفاً واضحاً لكل قطعة ولا سجل مقتنيات للمستخدم.",
        kishib: "قابلة لبناء أرشيف للقطع والتقارير وتاريخ التقييمات.",
      },
      {
        point: "الإيرادات",
        general: "ليست موجهة كنموذج تجاري متخصص لهذا السوق.",
        kishib: "اشتراكات، تقارير مدفوعة، تجار، مزادات، استشارات، وخدمات تحقق.",
      },
      {
        point: "الثقة",
        general: "تعطي معلومة، لكنها لا تقدم مسار خدمة متكامل.",
        kishib: "تربط التقييم بالتقرير، التوثيق، الاستشارة، والخدمات المدفوعة لاحقاً.",
      },
    ],
    summary:
      "الخلاصة: الفرق ليس في من يعطي جواباً أسرع. الفرق في من يملك تجربة متخصصة يمكن أن تتحول إلى علاقة مستمرة مع المستخدم ومصدر دخل متكرر.",
    lifeLabel: "REAL-LIFE EXAMPLES",
    lifeTitle: "أمثلة حياتية توضّح الفرق",
    lifeExamples: [
      {
        icon: Stethoscope,
        title: "مثل الفرق بين البحث عن أعراضك ومراجعة طبيب",
        text: "البحث العام قد يعطيك احتمالات كثيرة، لكن الطبيب يعطيك تشخيصاً منظماً ومسار علاج. KISHIB تفعل الشيء نفسه مع القطع: لا تترك المستخدم وسط التخمين.",
      },
      {
        icon: Wrench,
        title: "مثل الفرق بين سؤال منتدى وتصليح سيارة عند مختص",
        text: "قد يخبرك المنتدى بأسباب كثيرة للعطل، لكن الورشة تفحص، تسجل، وتقدم خدمة واضحة. KISHIB تنقل تقييم القطعة من كلام عام إلى تجربة خدمة.",
      },
      {
        icon: ShieldCheck,
        title: "مثل تقييم عقار قبل البيع",
        text: "مالك البيت لا يكتفي برأي عابر قبل البيع، لأنه قد يخسر آلاف الدولارات. كذلك مالك التحفة يحتاج قراءة منظمة قبل أن يبيع أو يحتفظ أو يطلب استشارة.",
      },
    ],
    competitorLabel: "Market Validation",
    competitorTitle: "ماذا يعني وجود تطبيقات منافسة؟",
    competitorNotes: [
      "وجود تطبيقات متخصصة في تقييم المقتنيات يثبت أن هناك طلباً حقيقياً على هذا النوع من المنتجات.",
      "المنافسة لا تعني أن الفرصة ضعيفة؛ بل تعني أن السوق بدأ يتشكل والمستخدم مستعد لتجربة حلول متخصصة.",
      "فرصة KISHIB هي بناء تجربة أعمق، أوضح، متعددة اللغات، ومتصلة بالتقارير والاستشارات والخدمات المدفوعة.",
    ],
    edgeTitle: "نقطة التفوق المقترحة",
    edgeText:
      "التفوق لا يأتي من الادعاء أن المنصة تعرف كل شيء. التفوق يأتي من بناء تجربة متخصصة حول سوق واحد: تقييم، أرشفة، تقارير، مقارنة، اشتراكات، ثم شراكات مع تجار ومزادات وخبراء.",
    investorText:
      "المستثمر لا يدخل في مشروع يعطي جواباً عابراً. هو يدخل في منصة قادرة على امتلاك علاقة مستمرة مع مستخدمين يدفعون لمعرفة قيمة مقتنياتهم وتقليل مخاطر قرارات البيع أو الشراء.",
  },

  en: {
    dir: "ltr" as const,
    align: "text-left",
    sectionLabel: "COMPETITIVE POSITION",
    title: "Why would users pay for KISHIB instead of relying on general tools?",
    intro:
      "This question matters, and investors need a clear answer. General tools can produce quick responses, but they do not create a specialized product experience, preserve item history, or build a clear commercial path. KISHIB is not just an answer. It is a dedicated product for antiques, collectibles, artworks, and gemstones.",
    advantages: [
      {
        icon: Gem,
        title: "Clear Specialization",
        text: "The platform is built around a defined market: antiques, artworks, rare objects, heritage collectibles, and gemstones.",
      },
      {
        icon: ClipboardList,
        title: "Monetizable Reports",
        text: "The value is not a casual answer. It is a structured report that can be saved, shared, upgraded, and connected to paid services.",
      },
      {
        icon: Database,
        title: "Compounding Data",
        text: "Each evaluation can later contribute to a structured knowledge and market archive covering prices, categories, materials, and demand.",
      },
    ],
    tableLabel: "General Tools vs KISHIB",
    tableTitle: "The difference between a general tool and a specialized platform",
    headers: ["Comparison Point", "General Tools", "KISHIB"],
    rows: [
      {
        point: "Specialization",
        general: "Serves every topic and is not focused on the antiques market.",
        kishib: "Designed around antiques, collectibles, artworks, and gemstones.",
      },
      {
        point: "User Experience",
        general: "The user must know what to ask and how to describe the item.",
        kishib: "The user uploads an image and follows a structured evaluation flow.",
      },
      {
        point: "Output Format",
        general: "A general text response that can vary depending on the prompt.",
        kishib: "A clear report covering age, material, origin, condition, value, and value factors.",
      },
      {
        point: "Archiving",
        general: "Does not create a dedicated item file or collectible history for the user.",
        kishib: "Can build item archives, reports, and evaluation history over time.",
      },
      {
        point: "Revenue Model",
        general: "Not commercially designed for this specific market.",
        kishib: "Subscriptions, paid reports, dealers, auctions, consultations, and verification services.",
      },
      {
        point: "Trust Path",
        general: "Provides information, but not a complete service journey.",
        kishib: "Connects evaluation with reports, documentation, consultation, and future paid services.",
      },
    ],
    summary:
      "Bottom line: the difference is not who gives a faster answer. The difference is who owns a specialized experience that can become an ongoing user relationship and a recurring revenue engine.",
    lifeLabel: "REAL-LIFE EXAMPLES",
    lifeTitle: "Real-life examples that make the difference clearer",
    lifeExamples: [
      {
        icon: Stethoscope,
        title: "Like searching symptoms versus seeing a doctor",
        text: "A general search can give many possibilities, but a doctor gives a structured diagnosis and a treatment path. KISHIB does the same for items: it reduces uncertainty instead of leaving the user in guesswork.",
      },
      {
        icon: Wrench,
        title: "Like asking a forum versus taking your car to a specialist",
        text: "A forum may suggest many possible issues, but a workshop inspects, records, and delivers a clear service. KISHIB moves item evaluation from general advice into a productized service.",
      },
      {
        icon: ShieldCheck,
        title: "Like getting a property valuation before selling",
        text: "A homeowner does not rely on a casual opinion before selling because the mistake can cost thousands. Antique owners also need structured guidance before selling, keeping, or requesting expert consultation.",
      },
    ],
    competitorLabel: "Market Validation",
    competitorTitle: "What does competition actually prove?",
    competitorNotes: [
      "Specialized collectible evaluation apps prove there is real demand for this category.",
      "Competition does not weaken the opportunity. It shows the market is forming and users are willing to try specialized solutions.",
      "KISHIB’s opportunity is to build a deeper, clearer, multilingual experience connected to reports, consultations, and paid services.",
    ],
    edgeTitle: "Proposed Competitive Edge",
    edgeText:
      "The advantage does not come from claiming the platform knows everything. It comes from building a specialized experience around one market: evaluation, archiving, reports, comparison, subscriptions, and later partnerships with dealers, auctions, and experts.",
    investorText:
      "An investor is not entering a project that produces a one-time answer. The investor is entering a platform that can own an ongoing relationship with users who pay to understand the value of their items and reduce the risk of buying or selling decisions.",
  },
};

export default function ComparisonSection({
  lang = "ar",
}: ComparisonSectionProps) {
  const t = content[lang];

  return (
    <section
      id="comparison"
      dir={t.dir}
      className={[
        "relative overflow-hidden bg-[#070403] px-5 py-24 text-white md:px-8 lg:px-10 xl:pl-52 xl:pr-16",
        t.align,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute right-[-180px] top-24 h-96 w-96 rounded-full bg-[#d7a35f]/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-[-160px] bottom-0 h-96 w-96 rounded-full bg-[#3a1c0b]/35 blur-[130px]" />

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
          {t.advantages.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d7a35f]/35 hover:bg-white/[0.07]"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
                  <Icon size={22} />
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

            <div className="flex gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/8 text-white/65">
                <Bot size={24} />
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
                <SearchCheck size={24} />
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
            <div className="hidden grid-cols-3 border-b border-white/10 bg-black/30 px-5 py-4 text-xs font-semibold text-white/45 md:grid">
              {t.headers.map((header) => (
                <span key={header}>{header}</span>
              ))}
            </div>

            {t.rows.map((row) => (
              <div
                key={row.point}
                className="grid gap-4 border-b border-white/10 bg-black/10 px-5 py-5 text-sm last:border-b-0 md:grid-cols-3 md:items-start"
              >
                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    {t.headers[0]}
                  </span>

                  <span className="font-semibold text-white">{row.point}</span>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle
                    size={17}
                    className="mt-1 shrink-0 text-white/28"
                  />

                  <span className="leading-7 text-white/55">
                    {row.general}
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={17}
                    className="mt-1 shrink-0 text-[#d7a35f]"
                  />

                  <span className="leading-7 text-white/72">
                    {row.kishib}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-5">
            <p className="text-base leading-8 text-white/68">{t.summary}</p>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-7">
          <div className="mb-8 flex items-center justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                {t.lifeLabel}
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                {t.lifeTitle}
              </h3>
            </div>

            <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987] sm:flex">
              <ShieldCheck size={24} />
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            {t.lifeExamples.map((example) => {
              const Icon = example.icon;

              return (
                <div
                  key={example.title}
                  className="rounded-[1.75rem] border border-white/10 bg-black/25 p-6"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
                    <Icon size={22} />
                  </div>

                  <h4 className="text-lg font-semibold text-white">
                    {example.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-white/60">
                    {example.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                  {t.competitorLabel}
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                  {t.competitorTitle}
                </h3>
              </div>

              <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987] sm:flex">
                <Smartphone size={24} />
              </div>
            </div>

            <div className="grid gap-3">
              {t.competitorNotes.map((item) => (
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

          <div className="rounded-[2rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-7">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
              <Layers3 size={24} />
            </div>

            <h3 className="mt-8 text-3xl font-semibold tracking-[-0.03em] text-white">
              {t.edgeTitle}
            </h3>

            <p className="mt-5 text-base leading-8 text-white/62">
              {t.edgeText}
            </p>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
              <div className="flex items-start gap-4">
                <MessageSquareText
                  size={22}
                  className="mt-1 shrink-0 text-[#d7a35f]"
                />

                <p className="text-sm leading-7 text-white/62">
                  {t.investorText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}