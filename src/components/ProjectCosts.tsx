import {
  BadgeDollarSign,
  BookOpenText,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Cloud,
  Code2,
  Cpu,
  Database,
  FileCheck2,
  Laptop,
  Megaphone,
  Palette,
  ReceiptText,
  Rocket,
  Server,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
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
    title: "تكلفة بناء وإطلاق KISHIB ليست برمجة فقط، بل تأسيس شركة تقنية معرفية كاملة",
    intro:
      "الرقم النهائي المطلوب لفهم حجم المشروع هو 470,000 دولار من بداية برمجة المنصة إلى الإطلاق التجاري. هذه الميزانية لا تمثل كوداً أو واجهة فقط؛ بل تشمل بناء منصة تقييم، تطبيق قابل للتوسع، موسوعة KISHIB كموقع معرفي مستقل، فريق بحث، APIs مدفوعة، تسجيل LLC في أمريكا، مكتب، أجهزة، حماية، بنية تشغيل، وتسويق إطلاق. المستثمر يجب أن يرى أن KISHIB مشروع شركة وليس تجربة صغيرة.",

    headlineCards: [
      {
        title: "إجمالي كلفة البناء والإطلاق",
        value: "$470,000",
        text: "ميزانية تأسيس كاملة من التطوير الأولي إلى الإطلاق التجاري وتجهيز البنية التشغيلية.",
        icon: Rocket,
      },
      {
        title: "مساهمة المستثمر المطلوبة",
        value: "$",
        text: "دفعة استثمارية لتسريع التنفيذ مقابل % من صافي الأرباح السنوية كممول صامت.",
        icon: BadgeDollarSign,
      },
      {
        title: "نسبة تغطية مساهمة المستثمر",
        value: "31.9%",
        text: "المبلغ لا يغطي المشروع بالكامل، لكنه يغطي جزءاً حاسماً من مرحلة البناء والإطلاق.",
        icon: TrendingUp,
      },
    ],

    budgetLabel: "FINAL BUILD & LAUNCH BUDGET",
    budgetTitle: "تفصيل ميزانية 470,000 دولار",
    budgetIntro:
      "هذا التفصيل مقصود حتى لا يظهر المشروع كأنه مجرد تطبيق يتم بناؤه بتكلفة بسيطة. KISHIB يحتاج إلى منظومة كاملة: تطوير تقني، ذكاء اصطناعي، بيانات وأسواق، موسوعة مرجعية، فريق بحث، شركة قانونية، مكتب، أجهزة، وتسويق. كل بند أدناه يضيف قيمة مباشرة إلى دقة التقييم، ثقة المستخدم، وقابلية المشروع للنمو.",

    finalCosts: [
      {
        item: "تطوير المنصة الأساسية والتطبيق ولوحة التحكم",
        value: "$88,000",
        percent: "18.7%",
        width: "18.7%",
        text: "برمجة تجربة المستخدم، نظام رفع الصور، الحسابات، نتائج التقييم، سجل المستخدم، الاشتراكات، لوحة الإدارة، وتجهيز المنصة للتوسع.",
        icon: Code2,
      },
      {
        item: "محرك التقييم الذكي وتحسين منطق الذكاء الاصطناعي",
        value: "$52,000",
        percent: "11.1%",
        width: "11.1%",
        text: "تطوير طبقات تحليل القطعة، التصنيف، الثقة، أسباب السعر، المقارنة، الأسئلة اللاحقة، وتخفيف النتائج العشوائية.",
        icon: Cpu,
      },
      {
        item: "شراء وربط APIs للأسواق والبيانات والصور والمعادن",
        value: "$48,000",
        percent: "10.2%",
        width: "10.2%",
        text: "ربط مصادر خارجية مثل الأسواق، المزادات، بيانات المعادن، البحث، الصور المشابهة، وأسعار المقارنة لتحسين واقعية التقييم.",
        icon: Database,
      },
      {
        item: "موسوعة KISHIB للتحف والمقتنيات",
        value: "$58,000",
        percent: "12.3%",
        width: "12.3%",
        text: "بناء موقع إلكتروني كامل يعمل كموسوعة ودليل للتحف: سجاد، خشب، نحاس، كريستال، فخار، عملات، أحجار، لوحات، ومقتنيات.",
        icon: BookOpenText,
      },
      {
        item: "فريق البحث والتحقق والمحتوى المرجعي",
        value: "$46,000",
        percent: "9.8%",
        width: "9.8%",
        text: "باحثون ومحررون لجمع معلومات موثوقة، كتابة مقالات، مراجعة مصادر، تنظيم التصنيفات، وبناء قاعدة معرفة يعتمد عليها التطبيق.",
        icon: Users,
      },
      {
        item: "تصميم الواجهة والهوية وتجربة اللغات",
        value: "$24,000",
        percent: "5.1%",
        width: "5.1%",
        text: "تحسين الهوية البصرية، تجربة الهاتف، واجهات العرض التقديمي، دعم العربي والإنكليزي واللغات اللاحقة، وصقل تجربة المستخدم.",
        icon: Palette,
      },
      {
        item: "الخوادم والاستضافة والحماية وقواعد البيانات",
        value: "$35,000",
        percent: "7.4%",
        width: "7.4%",
        text: "بنية تشغيل، تخزين صور، قواعد بيانات، حماية، مراقبة، نسخ احتياطي، تحسين سرعة، وتجهيز المنصة لتحمل الاستخدام الحقيقي.",
        icon: Server,
      },
      {
        item: "تسجيل LLC في أمريكا والإطار القانوني والمحاسبي",
        value: "$22,000",
        percent: "4.7%",
        width: "4.7%",
        text: "تسجيل الشركة، عقود المستثمرين، شروط الاستخدام، سياسة الخصوصية، محاسبة، حسابات بنكية، واستشارات قانونية أولية.",
        icon: ReceiptText,
      },
      {
        item: "إيجار الشركة والتشغيل الإداري الأولي",
        value: "$28,000",
        percent: "6.0%",
        width: "6%",
        text: "مكتب، إنترنت، خدمات تشغيلية، إدارة يومية، اجتماعات، مصاريف تأسيس، وتجهيز بيئة عمل للفريق خلال مرحلة الإطلاق.",
        icon: Building2,
      },
      {
        item: "حواسيب المبرمجين والبرامج والأدوات",
        value: "$18,000",
        percent: "3.8%",
        width: "3.8%",
        text: "أجهزة تطوير واختبار، تراخيص أدوات تصميم وبرمجة، خدمات إدارة مشاريع، أدوات تحليل، وبرامج إنتاج المحتوى.",
        icon: Laptop,
      },
      {
        item: "الترويج والإطلاق واكتساب المستخدمين",
        value: "$45,000",
        percent: "9.6%",
        width: "9.6%",
        text: "إعلانات رقمية، فيديوهات تعريفية، حملات إطلاق، محتوى سوشيال ميديا، علاقات تجار، وبناء أول قاعدة مستخدمين.",
        icon: Megaphone,
      },
      {
        item: "احتياطي مخاطر وتعديلات بعد الإطلاق",
        value: "$6,000",
        percent: "1.3%",
        width: "1.3%",
        text: "هامش أمان للتعديلات المفاجئة، أخطاء تقنية، اختبارات إضافية، أو احتياجات صغيرة لا تظهر إلا بعد الإطلاق.",
        icon: ShieldCheck,
      },
    ],

    totalTitle: "الإجمالي النهائي لكلفة بناء وإطلاق KISHIB",
    totalLabel: "Total Build & Launch Cost",
    totalValue: "$470,000",
    totalText:
      "هذا الرقم هو كلفة تأسيس وإطلاق، وليس مصروفاً سنوياً ثابتاً. بعد الإطلاق، تتحول بعض البنود إلى مصاريف تشغيلية شهرية أقل، بينما تبقى قيمة التطوير والموسوعة والبيانات كأصول داخل المشروع.",

    investorTitle: "كيف يدخل المستثمر ضمن هذه الميزانية؟",
    investorValue: "$",
    investorText:
      "المستثمر المطلوب هو Silent Partner يضخ $ دولار مقابل % من صافي الأرباح السنوية. مساهمته لا تغطي كامل 470,000 دولار، لكنها تغطي 31.9% من ميزانية البناء والإطلاق وتدفع المشروع من مرحلة النموذج إلى مرحلة شركة قابلة للتسويق. يمكن أن تكون السنة الأولى بدون أرباح موزعة إذا قررت الإدارة إعادة ضخ الدخل في النمو، التسويق، وتحسين المنتج.",

    structureTitle: "هيكل تغطية الميزانية",
    structureRows: [
      {
        label: "مساهمة المستثمر الصامت",
        value: "$",
        percent: "31.9%",
        width: "31.9%",
        text: "مبلغ دخول المستثمر مقابل % من صافي الأرباح السنوية.",
      },
      {
        label: "تمويل المؤسسين والشركاء والمراحل اللاحقة",
        value: "$320,000",
        percent: "68.1%",
        width: "68.1%",
        text: "يغطي باقي كلفة البناء والإطلاق من مصادر تأسيسية أو جولات لاحقة حسب تقدم المشروع.",
      },
      {
        label: "إجمالي ميزانية البناء والإطلاق",
        value: "$470,000",
        percent: "100%",
        width: "100%",
        text: "الرقم الكامل المطلوب للوصول إلى منتج جاهز للسوق وليس مجرد نسخة تجريبية.",
      },
    ],

    phaseTitle: "الخطة المرحلية للإنفاق",
    phases: [
      {
        phase: "Phase 1",
        title: "تثبيت المنتج والبنية القانونية",
        amount: "$",
        text: "تطوير أساسي، APIs أولية، تجهيز LLC، تحسين تجربة التقييم، وتهيئة أول نسخة جاهزة للاختبار التجاري.",
        icon: Target,
      },
      {
        phase: "Phase 2",
        title: "بناء الموسوعة وفريق البحث",
        amount: "$145,000",
        text: "إطلاق موسوعة KISHIB، بناء المحتوى المرجعي، تقوية قاعدة البيانات، وتوسيع دقة التقييم حسب الفئات.",
        icon: BookOpenText,
      },
      {
        phase: "Phase 3",
        title: "الإطلاق والتوسع التجاري",
        amount: "$175,000",
        text: "تسويق، تشغيل، أجهزة، مكتب، تحسينات بعد الإطلاق، شراكات، ورفع القدرة التشغيلية للمنصة.",
        icon: Megaphone,
      },
    ],

    investorLogicTitle: "لماذا عرض التكاليف بهذه الطريقة مهم؟",
    investorLogic:
      "المستثمر الذكي لا يقتنع برقم صغير بلا تفاصيل. إذا قلنا إن KISHIB تحتاج $ دولار فقط، سيبدو المشروع أصغر من حقيقته. وإذا عرضنا 470,000 دولار بدون شرح، سيبدو الرقم كبيراً. لذلك يجب توضيح أن 470,000 دولار هي الميزانية الكاملة، بينما $ دولار هي مساهمة المستثمر الصامت ضمن هذه الميزانية مقابل حصة من صافي الأرباح.",

    noteTitle: "نقطة حاسمة",
    note:
      "لا تعرضي التكاليف كأنها مصاريف مبالغ بها. اعرضيها كأصول تبني قوة المنصة: الكود، قاعدة البيانات، الموسوعة، فريق البحث، وربط الـ APIs. هذه هي الأشياء التي تجعل KISHIB أقوى من تطبيق تقييم عادي.",

    bottomCards: [
      {
        title: "KISHIB أكبر من تطبيق",
        text: "المشروع يجمع بين منصة تقييم، موسوعة معرفية، بيانات سوقية، وتوسع تجاري مستقبلي.",
        icon: BriefcaseBusiness,
      },
      {
        title: "الموسوعة ترفع قيمة المنصة",
        text: "كل مقال وتصنيف ومصدر داخل الموسوعة يصبح مرجعاً يقوي التقييم ويزيد ثقة المستخدم.",
        icon: FileCheck2,
      },
      {
        title: "التسويق ليس رفاهية",
        text: "بدون اكتساب مستخدمين وتجار، تبقى التقنية قوية لكن غير مربحة. لذلك التسويق جزء من البناء.",
        icon: Cloud,
      },
    ],
  },

  en: {
    dir: "ltr" as const,
    align: "text-left",
    sectionLabel: "PROJECT COSTS",
    title: "KISHIB’s build and launch cost is not software only; it is the formation of a full technology and knowledge company",
    intro:
      "The final budget required to understand the scale of the project is $470,000 from initial platform development to commercial launch. This is not just code or UI. It includes an evaluation platform, a scalable app base, the KISHIB Encyclopedia as an independent knowledge website, a research team, paid APIs, LLC registration in the United States, office setup, equipment, security, operating infrastructure, and launch marketing. Investors must see KISHIB as a company-building project, not a small experiment.",

    headlineCards: [
      {
        title: "Total Build & Launch Cost",
        value: "$470,000",
        text: "A full foundation budget from early development to commercial launch and operating readiness.",
        icon: Rocket,
      },
      {
        title: "Required Investor Contribution",
        value: "$",
        text: "A funding contribution to accelerate execution in return for % of annual net profit as a silent partner.",
        icon: BadgeDollarSign,
      },
      {
        title: "Investor Coverage Ratio",
        value: "31.9%",
        text: "The contribution does not cover the whole project, but it covers a critical part of build and launch.",
        icon: TrendingUp,
      },
    ],

    budgetLabel: "FINAL BUILD & LAUNCH BUDGET",
    budgetTitle: "Detailed breakdown of the $470,000 budget",
    budgetIntro:
      "This breakdown is intentional. KISHIB should not appear as a simple app that can be built cheaply. It requires a complete system: technical development, AI logic, data and market sources, a reference encyclopedia, research team, legal company setup, office, equipment, and marketing. Every item below directly supports valuation accuracy, user trust, and the project’s ability to scale.",

    finalCosts: [
      {
        item: "Core platform, app base, and admin dashboard development",
        value: "$88,000",
        percent: "18.7%",
        width: "18.7%",
        text: "User experience, image upload, accounts, valuation results, history, subscriptions, admin dashboard, and scalability preparation.",
        icon: Code2,
      },
      {
        item: "AI evaluation engine and valuation logic improvement",
        value: "$52,000",
        percent: "11.1%",
        width: "11.1%",
        text: "Item analysis layers, classification, confidence scoring, price reasoning, comparisons, follow-up questions, and reduction of random results.",
        icon: Cpu,
      },
      {
        item: "Paid APIs for markets, data, images, and metals",
        value: "$48,000",
        percent: "10.2%",
        width: "10.2%",
        text: "External sources for marketplaces, auctions, metal prices, search, similar images, and comparison data to improve valuation realism.",
        icon: Database,
      },
      {
        item: "KISHIB Encyclopedia for antiques and collectibles",
        value: "$58,000",
        percent: "12.3%",
        width: "12.3%",
        text: "A full website and knowledge guide covering rugs, wood, copper, crystal, pottery, coins, gemstones, paintings, and collectibles.",
        icon: BookOpenText,
      },
      {
        item: "Research, verification, and reference content team",
        value: "$46,000",
        percent: "9.8%",
        width: "9.8%",
        text: "Researchers and editors to gather reliable information, write articles, review sources, organize categories, and build the knowledge base.",
        icon: Users,
      },
      {
        item: "UI/UX design, brand system, and multilingual experience",
        value: "$24,000",
        percent: "5.1%",
        width: "5.1%",
        text: "Visual identity refinement, mobile experience, presentation interface, Arabic and English support, future languages, and smoother user flow.",
        icon: Palette,
      },
      {
        item: "Servers, hosting, security, and databases",
        value: "$35,000",
        percent: "7.4%",
        width: "7.4%",
        text: "Operating infrastructure, image storage, databases, protection, monitoring, backups, speed optimization, and real usage readiness.",
        icon: Server,
      },
      {
        item: "U.S. LLC registration, legal setup, and accounting",
        value: "$22,000",
        percent: "4.7%",
        width: "4.7%",
        text: "Company registration, investor agreements, terms of use, privacy policy, accounting, bank accounts, and initial legal consulting.",
        icon: ReceiptText,
      },
      {
        item: "Office rent and early operating setup",
        value: "$28,000",
        percent: "6.0%",
        width: "6%",
        text: "Office, internet, operating services, daily administration, meetings, setup expenses, and a working environment for the team.",
        icon: Building2,
      },
      {
        item: "Developer computers, software, and tools",
        value: "$18,000",
        percent: "3.8%",
        width: "3.8%",
        text: "Development and testing devices, design and coding licenses, project management tools, analytics tools, and content production software.",
        icon: Laptop,
      },
      {
        item: "Promotion, launch campaigns, and user acquisition",
        value: "$45,000",
        percent: "9.6%",
        width: "9.6%",
        text: "Digital ads, explainer videos, launch campaigns, social content, merchant outreach, and building the first user base.",
        icon: Megaphone,
      },
      {
        item: "Risk reserve and post-launch fixes",
        value: "$6,000",
        percent: "1.3%",
        width: "1.3%",
        text: "Safety margin for unexpected changes, technical errors, extra testing, or small needs that only appear after launch.",
        icon: ShieldCheck,
      },
    ],

    totalTitle: "Final total cost to build and launch KISHIB",
    totalLabel: "Total Build & Launch Cost",
    totalValue: "$470,000",
    totalText:
      "This number represents foundation and launch cost, not a fixed annual expense. After launch, some items turn into lower monthly operating costs, while development, encyclopedia, and data assets remain long-term project value.",

    investorTitle: "How the investor fits into this budget",
    investorValue: "$",
    investorText:
      "The required investor is a silent partner contributing $in return for % of annual net profit. This contribution does not cover the full $470,000, but it covers 31.9% of the build and launch budget and moves the project from prototype stage to a marketable company. Year one may have no distributed profit if management reinvests income into growth, marketing, and product improvement.",

    structureTitle: "Budget coverage structure",
    structureRows: [
      {
        label: "Silent investor contribution",
        value: "$",
        percent: "31.9%",
        width: "31.9%",
        text: "Investor entry amount in return for % of annual net profit.",
      },
      {
        label: "Founders, partners, and later-stage funding",
        value: "$320,000",
        percent: "68.1%",
        width: "68.1%",
        text: "Covers the remaining build and launch cost through founder funding or later rounds based on progress.",
      },
      {
        label: "Total build and launch budget",
        value: "$470,000",
        percent: "100%",
        width: "100%",
        text: "The full amount required to reach a market-ready product, not just a prototype.",
      },
    ],

    phaseTitle: "Phased spending plan",
    phases: [
      {
        phase: "Phase 1",
        title: "Product stabilization and legal foundation",
        amount: "$",
        text: "Core development, initial APIs, LLC setup, valuation experience improvement, and the first commercially testable version.",
        icon: Target,
      },
      {
        phase: "Phase 2",
        title: "Encyclopedia and research team buildout",
        amount: "$145,000",
        text: "Launch the KISHIB Encyclopedia, build reference content, strengthen data layers, and improve category-specific valuation accuracy.",
        icon: BookOpenText,
      },
      {
        phase: "Phase 3",
        title: "Commercial launch and scaling",
        amount: "$175,000",
        text: "Marketing, operations, equipment, office, post-launch improvements, partnerships, and increased operating capacity.",
        icon: Megaphone,
      },
    ],

    investorLogicTitle: "Why this cost structure matters",
    investorLogic:
      "A serious investor will not be convinced by a small number with no details. If KISHIB is presented as needing only $, the project looks smaller than it really is. If $470,000 is presented without explanation, it looks too large. The right framing is that $470,000 is the full budget, while $ is the silent investor’s contribution within that budget in return for a share of net profit.",

    noteTitle: "Critical point",
    note:
      "Do not present the costs as inflated expenses. Present them as assets that build the platform’s strength: code, database, encyclopedia, research team, and API integrations. These are what make KISHIB stronger than a normal valuation app.",

    bottomCards: [
      {
        title: "KISHIB is bigger than an app",
        text: "The project combines valuation technology, a knowledge encyclopedia, market data, and future commercial expansion.",
        icon: BriefcaseBusiness,
      },
      {
        title: "The encyclopedia increases value",
        text: "Every article, category, and source becomes a reference layer that strengthens valuation and user trust.",
        icon: FileCheck2,
      },
      {
        title: "Marketing is not optional",
        text: "Without user and merchant acquisition, even strong technology does not become profitable. Marketing is part of the build.",
        icon: Cloud,
      },
    ],
  },
};

export default function ProjectCosts({ lang = "ar" }: ProjectCostsProps) {
  const t = content[lang] ?? content.ar;

  return (
    <section
      id="costs"
      dir={t.dir}
      className={`relative overflow-hidden bg-[#070403] px-5 py-24 ${t.align} md:px-8 lg:px-10 xl:pl-52 xl:pr-16`}
    >
      <div className="pointer-events-none absolute right-[-180px] top-24 h-96 w-96 rounded-full bg-[#d7a35f]/10 blur-[130px]" />
      <div className="pointer-events-none absolute left-[-220px] bottom-0 h-[30rem] w-[30rem] rounded-full bg-[#4a220d]/35 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7a35f]">
              {t.sectionLabel}
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
              {t.title}
            </h2>
          </div>

          <p className="text-base leading-8 text-white/62 md:text-lg md:leading-9">
            {t.intro}
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {t.headlineCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d7a35f]/40 hover:bg-white/[0.07]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987] transition duration-300 group-hover:scale-110">
                    <Icon size={22} />
                  </div>

                  <div className="h-2 w-2 animate-pulse rounded-full bg-[#d7a35f]" />
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {card.title}
                </h3>

                <p className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-[#f0c987]">
                  {card.value}
                </p>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <div className="mb-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d7a35f]">
                {t.budgetLabel}
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                {t.budgetTitle}
              </h3>
            </div>

            <p className="text-sm leading-7 text-white/52 md:text-base md:leading-8">
              {t.budgetIntro}
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {t.finalCosts.map((row) => {
              const Icon = row.icon;

              return (
                <div
                  key={row.item}
                  className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:border-[#d7a35f]/35 hover:bg-white/[0.07]"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
                      <Icon size={22} />
                    </div>

                    <div className={lang === "ar" ? "text-left" : "text-right"}>
                      <p className="text-3xl font-semibold tracking-[-0.05em] text-white">
                        {row.value}
                      </p>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#f0c987]">
                        {row.percent}
                      </p>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold leading-7 text-white">
                    {row.item}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {row.text}
                  </p>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-[#d7a35f]"
                      style={{ width: row.width }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[#d7a35f]/25 bg-[#d7a35f]/[0.075] p-7">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
              <Rocket size={28} />
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
              {t.totalLabel}
            </p>

            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
              {t.totalTitle}
            </h3>

            <p className="mt-5 text-6xl font-semibold tracking-[-0.06em] text-[#f0c987] md:text-7xl">
              {t.totalValue}
            </p>

            <p className="mt-6 text-base leading-8 text-white/62">
              {t.totalText}
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <div className="flex items-start gap-4">
                <BadgeDollarSign
                  size={23}
                  className="mt-1 shrink-0 text-[#d7a35f]"
                />

                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {t.investorTitle}
                  </h4>

                  <p className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-[#f0c987]">
                    {t.investorValue}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-white/62">
                    {t.investorText}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
            <div className="mb-7 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d7a35f]">
                  CAPITAL STRUCTURE
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                  {t.structureTitle}
                </h3>
              </div>

              <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987] sm:flex">
                <TrendingUp size={24} />
              </div>
            </div>

            <div className="grid gap-4">
              {t.structureRows.map((row) => (
                <div
                  key={row.label}
                  className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
                >
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {row.label}
                      </h4>

                      <p className="mt-2 text-sm leading-7 text-white/52">
                        {row.text}
                      </p>
                    </div>

                    <div className={lang === "ar" ? "text-left" : "text-right"}>
                      <p className="text-2xl font-semibold text-white">
                        {row.value}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-[#f0c987]">
                        {row.percent}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-[#d7a35f]"
                      style={{ width: row.width }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <div className="flex items-start gap-4">
                <CheckCircle2
                  size={22}
                  className="mt-1 shrink-0 text-[#d7a35f]"
                />

                <div>
                  <h4 className="text-base font-semibold text-white">
                    {t.investorLogicTitle}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-white/62">
                    {t.investorLogic}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <div className="flex items-start gap-4">
                <Building2
                  size={22}
                  className="mt-1 shrink-0 text-[#d7a35f]"
                />

                <div>
                  <h4 className="text-base font-semibold text-white">
                    {t.noteTitle}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-white/62">
                    {t.note}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
          <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d7a35f]">
                PHASED SPENDING
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                {t.phaseTitle}
              </h3>
            </div>

            <p className="text-sm leading-7 text-white/45 md:max-w-md">
              {lang === "ar"
                ? "تقسيم الإنفاق على مراحل يجعل الرقم الكبير قابلاً للإدارة والقياس."
                : "Phasing the spending makes the large budget manageable and measurable."}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {t.phases.map((phase) => {
              const Icon = phase.icon;

              return (
                <div
                  key={phase.phase}
                  className="rounded-[1.75rem] border border-white/10 bg-black/20 p-6"
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
                      <Icon size={22} />
                    </div>

                    <span className="rounded-full border border-[#d7a35f]/25 bg-[#d7a35f]/10 px-3 py-1 text-xs font-semibold text-[#f0c987]">
                      {phase.phase}
                    </span>
                  </div>

                  <h4 className="text-xl font-semibold text-white">
                    {phase.title}
                  </h4>

                  <p className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-[#f0c987]">
                    {phase.amount}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    {phase.text}
                  </p>
                </div>
              );
            })}
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
