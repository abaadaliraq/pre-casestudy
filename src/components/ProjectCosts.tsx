import Link from "next/link";
import {
  ArrowUpLeft,
  BadgeDollarSign,
  Building2,
  Cloud,
  Code2,
  Megaphone,
  Palette,
  ReceiptText,
  Rocket,
  Server,
  ShieldCheck,
} from "lucide-react";

const currentCosts = [
  {
    title: "التكلفة المستهلكة حتى الآن",
    value: "$105,000",
    text: "تم استثمار هذا المبلغ في بناء المنصة، التصميم، البرمجة، تطوير تجربة المستخدم، الاختبارات، وتجهيز النموذج التجاري الأولي.",
    icon: Code2,
  },
  {
    title: "التطوير مستمر",
    value: "Ongoing",
    text: "المنصة ليست مشروعاً ثابتاً؛ تحتاج تطوير مستمر لرفع دقة التقييم، تحسين النتائج، وتوسيع مصادر البيانات.",
    icon: ShieldCheck,
  },
  {
    title: "مرحلة الإطلاق التجاري",
    value: "Launch",
    text: "المرحلة القادمة تحتاج تمويل مخصص للإطلاق، التسويق، اكتساب المستخدمين، وتحويل المنصة من منتج إلى شركة قابلة للنمو.",
    icon: Rocket,
  },
];

const firstYearCosts = [
  {
    item: "تطوير مستمر وتحسينات تقنية",
    range: "$55,000",
    icon: Code2,
  },
  {
    item: "AI APIs، خوادم، استضافة، وأمان",
    range: "$35,000",
    icon: Server,
  },
  {
    item: "تصميم وتجربة مستخدم وتطوير الواجهة",
    range: "$25,000",
    icon: Palette,
  },
  {
    item: "حملات إطلاق وتسويق مدفوع",
    range: "$140,000",
    icon: Megaphone,
  },
  {
    item: "محتوى، فيديوهات قصيرة، وسوشيال ميديا",
    range: "$35,000",
    icon: Cloud,
  },
  {
    item: "تسجيل شركة LLC ومصاريف قانونية ومحاسبية",
    range: "$10,000",
    icon: ReceiptText,
  },
  {
    item: "إدارة، تشغيل، دعم، واختبار أسواق",
    range: "$50,000",
    icon: BadgeDollarSign,
  },
];

export default function ProjectCosts() {
  return (
   <section
  id="costs"
  dir="rtl"
  className="relative overflow-hidden bg-[#070403] px-5 py-24 text-right md:px-8 lg:px-10 xl:pl-52 xl:pr-16"
>
      <div className="pointer-events-none absolute left-[-180px] top-20 h-96 w-96 rounded-full bg-[#d7a35f]/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-160px] bottom-0 h-96 w-96 rounded-full bg-[#3a1c0b]/35 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7a35f]">
              PROJECT COSTS
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
              المنصة استهلكت 105 ألف دولار وتحتاج ميزانية إطلاق جادة
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-white/62">
              Antique Lens ليست فكرة أولية تبحث عن تجربة بسيطة، بل منصة تم
              الاستثمار بها فعلياً حتى وصلت إلى مرحلة قابلة للعرض والتطوير
              التجاري. المرحلة القادمة تحتاج ميزانية سنة أولى واضحة للإطلاق،
              التسويق، تحسين المنتج، ودخول الأسواق المستهدفة.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {currentCosts.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d7a35f]/35 hover:bg-white/[0.07]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
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
                First Year Launch Budget
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                التكاليف التقديرية للسنة الأولى للإطلاق والتسويق
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/50">
                هذه الميزانية ليست فقط تشغيل. الجزء الأكبر منها مخصص لاكتساب
                المستخدمين، اختبار الأسواق، بناء الوعي، وتحويل المنصة إلى منتج
                مدفوع قابل للنمو.
              </p>
            </div>

            <div className="grid gap-3">
              {firstYearCosts.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.item}
                    className="grid gap-4 rounded-[1.35rem] border border-white/10 bg-black/20 p-4 sm:grid-cols-[auto_1fr_auto] sm:items-center"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
                      <Icon size={19} />
                    </div>

                    <p className="text-sm font-medium text-white/72">
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
              ميزانية السنة الأولى تصل إلى
            </h3>

            <div className="mt-7 rounded-[1.5rem] border border-white/10 bg-black/25 p-6">
              <p className="text-sm text-white/45">Estimated First Year Budget</p>

              <p className="mt-3 text-5xl font-semibold tracking-[-0.06em] text-white md:text-6xl">
                $350,000
              </p>

              <p className="mt-4 text-sm leading-7 text-white/50">
                تشمل الإطلاق التجاري، الحملات الإعلانية، التطوير المستمر،
                الخوادم، الذكاء الاصطناعي، المحتوى، التشغيل، والجوانب القانونية.
              </p>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <p className="text-sm leading-7 text-white/62">
                بدون ميزانية تسويق قوية، تبقى المنصة منتجاً جيداً لا يعرفه أحد.
                لذلك تم وضع ميزانية إطلاق عالية نسبياً لأنها موجهة لبناء أول
                قاعدة مستخدمين وتحقيق أول إيرادات مدفوعة.
              </p>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <div className="flex items-start gap-4">
                <Building2
                  size={22}
                  className="mt-1 shrink-0 text-[#d7a35f]"
                />

                <p className="text-sm leading-7 text-white/62">
                  تسجيل الشركة في أمريكا كـ LLC يدخل ضمن تجهيز المشروع للاستثمار
                  والشراكات الدولية، لكنه ليس العنصر الأكبر في الميزانية. الكلفة
                  الأكبر ستكون في التسويق، التطوير، واكتساب المستخدمين.
                </p>
              </div>
            </div>

            <Link
              href="/costs"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#d7a35f] px-6 py-4 text-sm font-bold text-black transition hover:bg-[#f0c987]"
            >
              تفاصيل التكاليف
              <ArrowUpLeft size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}