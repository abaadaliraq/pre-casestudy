import {
  Camera,
  Database,
  FileText,
  Gem,
  Globe2,
  Languages,
  Search,
  Sparkles,
} from "lucide-react";

type Lang = "ar" | "en";

type ProjectBriefProps = {
  lang?: Lang;
};

const content = {
  ar: {
    dir: "rtl" as const,
    align: "text-right",
    sectionLabel: "PROJECT OVERVIEW",
    title: "KISHIB منصة متخصصة لتقييم التحف والقطع التراثية",
    paragraphOne:
      "KISHIB هي منصة مصممة خصيصاً لتقييم التحف، الأعمال الفنية، القطع النادرة، المقتنيات التراثية، والأحجار الكريمة. الفكرة ليست تجربة عامة أو جواباً عابراً، بل مسار واضح يبدأ من صورة القطعة وينتهي بتقرير يساعد المستخدم على فهم الهوية، الأصل، الحالة، والقيمة المتوقعة.",
    paragraphTwo:
      "تعتمد المنصة على واجهة متعددة اللغات تشمل العربية، الإنكليزية، الكردية، الفرنسية، الهندية، الفارسية، التركية، والروسية، مع قابلية التوسع لاحقاً إلى لغات وأسواق إضافية.",
    languagesTitle: "اللغات المدعومة حالياً",
    languagesNote:
      "قابلية التوسع اللغوي مهمة لأن سوق التحف والمقتنيات ليس محلياً فقط، بل يتصل بالمشترين، التجار، والهواة في أسواق متعددة.",
    platformLabel: "PLATFORM LOGIC",
    journeyTitle: "رحلة المستخدم داخل المنصة",
    archiveText:
      "كل تقييم يمكن أن يتحول مستقبلاً إلى سجل معرفي وسوقي يساعد المنصة على بناء أرشيف منظم للقطع، الأسعار، الأنواع، والمواد.",
    globalTitle: "منصة قابلة للتوسع عالمياً",
    globalText:
      "دعم اللغات المتعددة يفتح المجال أمام مستخدمين من أسواق مختلفة، خصوصاً أن سوق التحف والأحجار الكريمة يعتمد على المقارنة، الثقة، والوصول إلى جمهور أوسع.",
    languages: [
      "العربية",
      "English",
      "Kurdish",
      "Français",
      "हिन्दी",
      "فارسی",
      "Türkçe",
      "Русский",
    ],
    features: [
      {
        icon: Camera,
        title: "تقييم القطع من الصورة",
        text: "المستخدم يرفع صورة القطعة، والمنصة تبدأ بقراءة الشكل، المادة، التفاصيل، العلامات، والأسلوب العام.",
      },
      {
        icon: Search,
        title: "قراءة سوقية منظمة",
        text: "النتيجة لا تعتمد على تخمين سريع، بل تُقدّم قراءة منظمة تساعد المستخدم على فهم قيمة القطعة والعوامل المؤثرة عليها.",
      },
      {
        icon: Gem,
        title: "قسم خاص بالأحجار الكريمة",
        text: "تمت إضافة تجربة منفصلة لتقييم الأحجار الكريمة، مع حقول مخصصة للنوع، اللون، الوزن، النقاوة، والخصائص المهمة.",
      },
      {
        icon: FileText,
        title: "تقرير واضح قابل للتطوير",
        text: "النتيجة تظهر كتقرير يحتوي على العمر التقريبي، المادة، الأصل، الحالة، السعر المتوقع، وعوامل رفع أو خفض القيمة.",
      },
    ],
  },

  en: {
    dir: "ltr" as const,
    align: "text-left",
    sectionLabel: "PROJECT OVERVIEW",
    title: "KISHIB: A Specialized Platform for Antiques and Heritage Evaluation",
    paragraphOne:
      "KISHIB is a specialized platform designed for evaluating antiques, artworks, rare objects, heritage collectibles, and gemstones. It is not a generic experience or a quick answer. It offers a clear flow that starts with an item image and ends with a structured report explaining identity, origin, condition, and estimated value.",
    paragraphTwo:
      "The platform supports multiple languages, including Arabic, English, Kurdish, French, Hindi, Persian, Turkish, and Russian, with the ability to expand into more languages and markets over time.",
    languagesTitle: "Currently Supported Languages",
    languagesNote:
      "Language scalability is important because the antiques and collectibles market is not limited to one local audience. It connects buyers, dealers, collectors, and enthusiasts across multiple markets.",
    platformLabel: "PLATFORM LOGIC",
    journeyTitle: "User Journey Inside the Platform",
    archiveText:
      "Each evaluation can later become part of a structured knowledge and market archive that helps the platform organize items, prices, categories, and materials.",
    globalTitle: "A Platform Built for Global Expansion",
    globalText:
      "Multi-language support opens access to users across different markets, especially because the antiques and gemstones market depends on comparison, trust, and wider reach.",
    languages: [
      "Arabic",
      "English",
      "Kurdish",
      "French",
      "Hindi",
      "Persian",
      "Turkish",
      "Russian",
    ],
    features: [
      {
        icon: Camera,
        title: "Image-Based Item Evaluation",
        text: "The user uploads an item image, and the platform reads its form, material, details, marks, and overall visual style.",
      },
      {
        icon: Search,
        title: "Structured Market Reading",
        text: "The result is not a quick guess. It presents an organized reading that helps users understand the item’s value and the factors that influence it.",
      },
      {
        icon: Gem,
        title: "Dedicated Gemstone Section",
        text: "A separate gemstone evaluation experience has been added, with dedicated fields for type, color, weight, clarity, and important characteristics.",
      },
      {
        icon: FileText,
        title: "Clear Expandable Report",
        text: "The result appears as a report covering estimated age, material, origin, condition, expected price, and value drivers or reducers.",
      },
    ],
  },
};

export default function ProjectBrief({ lang = "ar" }: ProjectBriefProps) {
  const t = content[lang];

  return (
    <section
      id="project-brief"
      dir={t.dir}
      className={[
        "relative overflow-hidden bg-[#050302] px-5 py-24 text-white md:px-8 lg:px-10 xl:pl-52 xl:pr-16",
        t.align,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute right-[-180px] top-20 h-96 w-96 rounded-full bg-[#d7a35f]/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-[-160px] bottom-10 h-96 w-96 rounded-full bg-[#4a250f]/20 blur-[130px]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7a35f]">
            {t.sectionLabel}
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
            {t.title}
          </h2>

          <p className="mt-6 text-lg leading-9 text-white/62">
            {t.paragraphOne}
          </p>

          <p className="mt-5 text-lg leading-9 text-white/62">
            {t.paragraphTwo}
          </p>

          <div className="mt-7 rounded-[1.6rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.06] p-5">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
                <Languages size={19} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  {t.languagesTitle}
                </h3>
              </div>
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              {t.languages.map((language) => (
                <div
                  key={language}
                  className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-center text-sm font-semibold text-white/70"
                >
                  {language}
                </div>
              ))}
            </div>

            <p className="mt-4 text-sm leading-7 text-white/50">
              {t.languagesNote}
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-black/30">
          <div className="rounded-[1.5rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.06] p-6">
            <div className="mb-7 flex items-center justify-between gap-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                  {t.platformLabel}
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-white">
                  {t.journeyTitle}
                </h3>
              </div>

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
                <Sparkles size={22} />
              </div>
            </div>

            <div className="space-y-3">
              {t.features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-[1.35rem] border border-white/10 bg-black/20 p-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
                      <Icon size={19} />
                    </div>

                    <div>
                      <h4 className="text-base font-semibold text-white">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm leading-7 text-white/55">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 rounded-[1.35rem] border border-white/10 bg-black/25 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/8 text-[#f0c987]">
                  <Database size={18} />
                </div>

                <p className="text-sm leading-7 text-white/60">
                  {t.archiveText}
                </p>
              </div>
            </div>

            <div className="mt-4 rounded-[1.35rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-5">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
                  <Globe2 size={18} />
                </div>

                <div>
                  <h4 className="text-base font-semibold text-white">
                    {t.globalTitle}
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-white/55">
                    {t.globalText}
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