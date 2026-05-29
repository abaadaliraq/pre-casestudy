import {
  CheckCircle2,
  DatabaseZap,
  FileText,
  Gem,
  Globe2,
  Layers3,
  LineChart,
  RefreshCw,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

type Lang = "ar" | "en";

type DevelopmentValueProps = {
  lang?: Lang;
};

const content = {
  ar: {
    dir: "rtl" as const,
    align: "text-right",
    sectionLabel: "PRODUCT DEVELOPMENT",
    title: "KISHIB لم تعد فكرة نظرية؛ إنها منتج قابل للبناء والنمو",
    intro:
      "القيمة الحقيقية في KISHIB ليست في واجهة جميلة فقط، بل في تحويل سوق التحف، المقتنيات، والأحجار الكريمة من سوق مبعثر يعتمد على التخمين والخبرة الفردية إلى تجربة رقمية منظمة قابلة للتوسع، القياس، وتحقيق الإيرادات.",
    stages: [
      {
        title: "منتج أولي قابل للاستخدام",
        text: "تم بناء تجربة فعلية تتيح للمستخدم رفع صورة القطعة والحصول على تقرير منظم حول الهوية، المادة، الحالة، والسعر المتوقع.",
        icon: Layers3,
      },
      {
        title: "نظام تقارير قابل للبيع",
        text: "كل نتيجة تتحول إلى تقرير واضح يمكن تطويره لاحقاً إلى خدمة مدفوعة للأفراد، التجار، المزادات، وشركات التأمين.",
        icon: FileText,
      },
      {
        title: "قسم مستقل للأحجار الكريمة",
        text: "إضافة مسار مخصص للأحجار الكريمة يفتح سوقاً أعلى قيمة، لأن هذا القطاع يعتمد بقوة على التفاصيل الدقيقة والثقة في القراءة.",
        icon: Gem,
      },
      {
        title: "بنية قابلة للتوسع عالمياً",
        text: "دعم اللغات المتعددة يجعل KISHIB مؤهلة للدخول إلى أسواق مختلفة، وليس محصورة بجمهور محلي أو استخدام محدود.",
        icon: Globe2,
      },
    ],
    investorTitle: "لماذا هذا التطوير مهم للمستثمر؟",
    values: [
      "المنتج يستهدف سوقاً عالي القيمة وغير منظم رقمياً بشكل كافٍ.",
      "كل استخدام جديد يمكن أن يضيف بيانات قابلة للتحليل والبناء عليها.",
      "المنصة قابلة للتحول من أداة تقييم إلى بنية سوقية للتوثيق، المقارنة، والاشتراكات.",
      "إضافة الأحجار الكريمة توسّع حجم السوق وتزيد متوسط قيمة المستخدم.",
      "دعم اللغات يفتح مساراً للتوسع خارج السوق المحلي منذ المراحل الأولى.",
      "التقارير المدفوعة، اشتراكات التجار، وخدمات المزادات يمكن أن تصبح مصادر دخل متعددة.",
    ],
    compoundingTitle: "التطوير هنا لا يعني مصاريف إضافية؛ بل بناء قيمة تراكمية",
    compoundingText:
      "كل مرحلة تطوير تضيف طبقة جديدة من القيمة: تجربة أفضل، تقارير أعمق، بيانات أكثر، أسواق أوسع، وخدمات قابلة للبيع. المنصة التي تبقى ثابتة تتحول إلى أداة محدودة، أما KISHIB فمصممة لتصبح أصلًا رقمياً يتراكم مع الوقت.",
    nextTitle: "المرحلة القادمة",
   nextText:
  "المرحلة القادمة ستركّز على تحويل KISHIB إلى تجربة تطبيق متكاملة، مع تقارير PDF احترافية، حسابات للتجار، أدوات للمزادات، أرشيف منظم للقطع، وخدمات تحقق مدفوعة للقطع عالية القيمة.",
    metricOne: "8 لغات مدعومة",
    metricTwo: "قسم أحجار كريمة",
    metricThree: "تقارير قابلة للبيع",
  },

  en: {
    dir: "ltr" as const,
    align: "text-left",
    sectionLabel: "PRODUCT DEVELOPMENT",
    title: "KISHIB is no longer a concept. It is a scalable product foundation.",
    intro:
      "The value of KISHIB is not a polished interface alone. The value is in transforming a fragmented antiques, collectibles, and gemstones market into a structured digital experience that can scale, generate data, and create multiple revenue layers.",
    stages: [
      {
        title: "Usable Product Foundation",
        text: "A working experience has already been built: users can upload an item image and receive a structured report covering identity, material, condition, and estimated value.",
        icon: Layers3,
      },
      {
        title: "Report-Based Monetization",
        text: "Each result can evolve into a professional paid report for collectors, dealers, auction houses, insurance use cases, and high-value transactions.",
        icon: FileText,
      },
      {
        title: "Dedicated Gemstone Vertical",
        text: "The gemstone section expands KISHIB into a higher-value category where detail, trust, and structured evaluation are commercially important.",
        icon: Gem,
      },
      {
        title: "Global Expansion Architecture",
        text: "Multi-language support positions KISHIB for international markets from the start, instead of limiting the product to a single local audience.",
        icon: Globe2,
      },
    ],
    investorTitle: "Why this development matters to investors",
    values: [
      "The product targets a high-value market that remains digitally under-structured.",
      "Every evaluation can contribute to a growing knowledge and market data layer.",
      "The platform can evolve from an evaluation tool into an infrastructure for documentation, comparison, and subscriptions.",
      "The gemstone vertical expands the addressable market and increases potential user value.",
      "Multi-language support creates an early path toward international adoption.",
      "Paid reports, dealer subscriptions, auction tools, and verification services create multiple revenue opportunities.",
    ],
    compoundingTitle:
      "Development is not just an operating cost. It is how the asset compounds.",
    compoundingText:
      "Each development cycle adds a new layer of enterprise value: better user experience, deeper reports, richer data, broader markets, and more monetizable services. A product that stops improving becomes a limited tool. KISHIB is designed to become a digital asset that compounds over time.",
    nextTitle: "Next Development Layer",
   nextText:
  "The next phase will focus on turning KISHIB into a complete app-based experience, supported by professional PDF reports, dealer accounts, auction tools, a structured item archive, and paid verification services for high-value objects.",
    metricOne: "8 supported languages",
    metricTwo: "Gemstone vertical",
    metricThree: "Monetizable reports",
  },
};

export default function DevelopmentValue({ lang = "ar" }: DevelopmentValueProps) {
  const t = content[lang];

  return (
    <section
      id="development"
      dir={t.dir}
      className={[
        "relative overflow-hidden bg-[#070403] px-5 py-24 text-white md:px-8 lg:px-10 xl:pl-52 xl:pr-16",
        t.align,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute left-[-120px] top-20 h-96 w-96 rounded-full bg-[#d7a35f]/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-180px] bottom-0 h-96 w-96 rounded-full bg-[#3a1c0b]/35 blur-[130px]" />

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

        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {t.stages.map((stage, index) => {
            const Icon = stage.icon;

            return (
              <div
                key={stage.title}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d7a35f]/35 hover:bg-white/[0.07]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-sm font-semibold text-white/30">
                    0{index + 1}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
                    <Icon size={22} />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {stage.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  {stage.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
            <div className="mb-7 flex items-center justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                  INVESTOR VALUE
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                  {t.investorTitle}
                </h3>
              </div>

              <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987] sm:flex">
                <LineChart size={24} />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {t.values.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-[1.25rem] border border-white/10 bg-black/20 p-4"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-[#d7a35f]"
                  />

                  <p className="text-sm leading-7 text-white/62">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-7">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
              <RefreshCw size={24} />
            </div>

            <h3 className="mt-8 text-3xl font-semibold tracking-[-0.03em] text-white">
              {t.compoundingTitle}
            </h3>

            <p className="mt-5 text-base leading-8 text-white/62">
              {t.compoundingText}
            </p>

            <div className="mt-8 grid gap-3">
              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/8 text-[#f0c987]">
                    <ShieldCheck size={20} />
                  </div>

                  <p className="text-sm font-semibold leading-7 text-white/68">
                    {t.metricOne}
                  </p>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/8 text-[#f0c987]">
                    <Gem size={20} />
                  </div>

                  <p className="text-sm font-semibold leading-7 text-white/68">
                    {t.metricTwo}
                  </p>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/8 text-[#f0c987]">
                    <DatabaseZap size={20} />
                  </div>

                  <p className="text-sm font-semibold leading-7 text-white/68">
                    {t.metricThree}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/8 text-[#f0c987]">
                  <Smartphone size={20} />
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white">
                    {t.nextTitle}
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-white/62">
                    {t.nextText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}