import Link from "next/link";
import {
  ArrowUpLeft,
  Brain,
  Camera,
  Database,
  FileText,
  Search,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "تحليل الصورة",
    text: "المستخدم يرفع صورة القطعة، والمنصة تبدأ بقراءة الشكل، المادة، التفاصيل، والأسلوب العام.",
  },
  {
    icon: Brain,
    title: "تقييم ذكي",
    text: "المنصة تستخدم الذكاء الاصطناعي لتوليد تقييم أولي يساعد المستخدم على فهم قيمة القطعة.",
  },
  {
    icon: Search,
    title: "مقارنة سوقية",
    text: "تُبنى التجربة حول المقارنة مع قطع مشابهة، وليس مجرد جواب عام أو تخمين سريع.",
  },
  {
    icon: FileText,
    title: "تقرير منظم",
    text: "النتيجة تظهر كتقرير واضح يحتوي على العمر التقريبي، المادة، الحالة، السعر، وعوامل القيمة.",
  },
];

export default function ProjectBrief() {
  return (
    <section
  id="project-brief"
  dir="rtl"
  className="relative overflow-hidden bg-[#050302] px-5 py-24 text-right md:px-8 lg:px-10 xl:pl-52 xl:pr-16"
>
      <div className="pointer-events-none absolute right-[-180px] top-20 h-96 w-96 rounded-full bg-[#d7a35f]/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-[-160px] bottom-10 h-96 w-96 rounded-full bg-[#4a250f]/20 blur-[130px]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7a35f]">
            PROJECT OVERVIEW
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
            منصة تقييم تحف ليست مجرد أداة ذكاء اصطناعي
          </h2>

          <p className="mt-6 text-lg leading-9 text-white/62">
            Antique Lens هي منصة متخصصة في تقييم التحف، الأعمال الفنية، القطع
            النادرة، والمقتنيات التراثية. الفكرة ليست أن يسأل المستخدم سؤالاً
            عاماً مثل ChatGPT، بل أن يدخل إلى تجربة مصممة بالكامل لهذا السوق:
            يرفع صورة، يحصل على قراءة منظمة، يرى تقديراً للقيمة، ويفهم العوامل
            التي ترفع أو تخفض سعر القطعة.
          </p>

          <p className="mt-5 text-lg leading-9 text-white/62">
            قوة المشروع أن المنتج قابل للتحول إلى منصة اشتراكات، أرشيف شخصي
            للقطع، تقارير مدفوعة، وربط مستقبلي مع مزادات وتجار وأسواق عالمية.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/project"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#d7a35f] px-6 py-4 text-sm font-bold text-black transition hover:bg-[#f0c987]"
            >
              قراءة تفاصيل المشروع
              <ArrowUpLeft
                size={17}
                className="transition group-hover:-translate-y-0.5 group-hover:-translate-x-0.5"
              />
            </Link>

            <Link
              href="/comparison"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
            >
              الفرق عن ChatGPT
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-black/30">
          <div className="rounded-[1.5rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.06] p-6">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                  Platform Logic
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  رحلة المستخدم داخل المنصة
                </h3>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
                <Sparkles size={22} />
              </div>
            </div>

            <div className="space-y-3">
              {features.map((item) => {
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
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-[#f0c987]">
                  <Database size={18} />
                </div>

                <p className="text-sm leading-7 text-white/60">
                  كل تقييم مستقبلاً يمكن أن يتحول إلى بيانات سوقية، وهذا هو
                  أصل القوة في المشروع: كل مستخدم يضيف قيمة للمنصة.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}