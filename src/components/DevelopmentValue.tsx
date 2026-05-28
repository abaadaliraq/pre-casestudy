import Link from "next/link";
import {
  ArrowUpLeft,
  CheckCircle2,
  Code2,
  DatabaseZap,
  Layers3,
  LineChart,
  RefreshCw,
  Smartphone,
  WandSparkles,
} from "lucide-react";

const stages = [
  {
    title: "Prototype & Interface",
    text: "بناء الواجهة الأولى وتجربة رفع الصور وقراءة النتائج بشكل واضح للمستخدم.",
    icon: Layers3,
  },
  {
    title: "AI Evaluation Flow",
    text: "تطوير مسار تقييم يعتمد على الصورة، الوصف، المادة، الحالة، والعمر التقريبي.",
    icon: WandSparkles,
  },
  {
    title: "Result Reports",
    text: "تحويل التقييم من جواب عادي إلى تقرير منظم قابل للقراءة والمشاركة.",
    icon: Code2,
  },
  {
    title: "Market Comparison",
    text: "العمل على ربط النتائج بصور وقطع مشابهة حتى يصبح التقييم أقرب للسوق.",
    icon: DatabaseZap,
  },
];

const values = [
  "تحويل تقييم التحف من عملية غامضة إلى تجربة رقمية سهلة.",
  "بناء قاعدة بيانات مستقبلية حول القطع النادرة والمقتنيات.",
  "فتح نموذج اشتراك شهري وسنوي قابل للتوسع.",
  "إمكانية تطوير المنصة لاحقاً إلى تطبيق هاتف.",
  "قابلية الدخول في شراكات مع تجار ومزادات ومنصات بيع.",
  "إنتاج تقارير تقييم مدفوعة للمستخدمين المتقدمين.",
];

export default function DevelopmentValue() {
  return (
    <section
      dir="rtl"
      className="relative overflow-hidden bg-[#070403] px-5 py-24 text-right md:px-8 lg:px-10 xl:pl-52 xl:pr-16"
    >
      <div className="pointer-events-none absolute left-[-120px] top-20 h-96 w-96 rounded-full bg-[#d7a35f]/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-180px] bottom-0 h-96 w-96 rounded-full bg-[#3a1c0b]/35 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7a35f]">
              PRODUCT DEVELOPMENT
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
              المشروع دخل مرحلة تطوير حقيقية وليس مجرد فكرة
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-white/62">
              تم استثمار وقت وتكلفة فعلية في بناء المنصة، والهدف ليس إطلاق نسخة
              بسيطة فقط، بل تطوير منتج قابل للنمو: تقييمات أكثر دقة، تقارير أفضل،
              اشتراكات، قاعدة بيانات، وربط سوقي يجعل المنصة أقوى كلما زاد عدد
              المستخدمين.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-4">
          {stages.map((stage, index) => {
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
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                  Investor Value
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                  لماذا التطوير المستمر مهم للمستثمر؟
                </h3>
              </div>

              <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987] sm:flex">
                <LineChart size={24} />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {values.map((item) => (
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
              التطوير السنوي ليس تكلفة فقط، بل وسيلة لرفع قيمة الشركة
            </h3>

            <p className="mt-5 text-base leading-8 text-white/62">
              كل سنة تطوير تضيف دقة أعلى، تجربة أفضل، مصادر بيانات أكثر، ونموذج
              إيرادات أقوى. المنصة التي تتوقف عن التطوير تتحول إلى أداة عادية؛
              أما المنصة التي تتحسن باستمرار فتتحول إلى أصل رقمي قابل للتوسع.
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/8 text-[#f0c987]">
                  <Smartphone size={20} />
                </div>

                <p className="text-sm leading-7 text-white/62">
                  المرحلة القادمة يمكن أن تشمل تطبيق هاتف، اشتراكات داخلية،
                  تقارير PDF، وأدوات خاصة للتجار والمزادات.
                </p>
              </div>
            </div>

            <Link
              href="/development"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#d7a35f] px-6 py-4 text-sm font-bold text-black transition hover:bg-[#f0c987]"
            >
              تفاصيل خطة التطوير
              <ArrowUpLeft size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}