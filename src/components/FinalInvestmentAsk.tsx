import Link from "next/link";
import {
  ArrowUpLeft,
  BadgePercent,
  Banknote,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  Gem,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const askCards = [
  {
    title: "Investment Required",
    value: "$32,000",
    text: "مبلغ الاستثمار المطلوب للدخول في المرحلة القادمة من التطوير والإطلاق.",
    icon: Banknote,
  },
  {
    title: "Investor Share",
    value: "9%",
    text: "حصة من صافي الأرباح السنوية للمنصة وفق اتفاق استثماري واضح.",
    icon: BadgePercent,
  },
  {
    title: "Current Platform Investment",
    value: "$105,000",
    text: "القيمة التي استهلكتها المنصة حتى الآن في البناء والتطوير والتجهيز.",
    icon: CircleDollarSign,
  },
  {
    title: "First Year Launch Budget",
    value: "$350,000",
    text: "ميزانية تقديرية للسنة الأولى تشمل الإطلاق، التسويق، والتوسع.",
    icon: Rocket,
  },
];

const finalPoints = [
  "المشروع ليس فكرة خام؛ هناك منصة تم بناؤها وتطويرها فعلياً.",
  "السوق قابل للتوسع دولياً وليس محصوراً بالعراق.",
  "نموذج الإيرادات يعتمد على الاشتراكات والتقارير المدفوعة والتوسع التجاري.",
  "المستثمر يدخل بنسبة واضحة من صافي الأرباح السنوية.",
  "Abaad Al Iraq تبقى الجهة المالكة والمديرة للمشروع.",
];

export default function FinalInvestmentAsk() {
  return (
   <section
  id="summary"
  dir="rtl"
  className="relative overflow-hidden bg-[#050302] px-5 py-24 text-right md:px-8 lg:px-10 xl:pl-52 xl:pr-16"
>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(215,163,95,0.12),transparent_38%),radial-gradient(circle_at_20%_80%,rgba(74,37,15,0.35),transparent_36%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7a35f]">
            FINAL INVESTMENT ASK
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.05em] text-white md:text-7xl">
            Antique Lens لا يطلب تمويل فكرة، بل تسريع منصة جاهزة للنمو
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-white/62">
            المطلوب الآن هو شريك استثماري يساعد المنصة على الانتقال من مرحلة
            المنتج المطور إلى مرحلة الإطلاق التجاري، التسويق الدولي، وبناء أول
            قاعدة مستخدمين مدفوعة.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {askCards.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[#d7a35f]/35 hover:bg-white/[0.07]"
              >
                <div className="mx-auto mb-7 flex h-13 w-13 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
                  <Icon size={23} />
                </div>

                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/38">
                  {item.title}
                </p>

                <p className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-white">
                  {item.value}
                </p>

                <p className="mt-4 text-sm leading-7 text-white/52">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-7">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
              <Gem size={24} />
            </div>

            <h3 className="mt-8 text-3xl font-semibold tracking-[-0.03em] text-white">
              الخلاصة الاستثمارية
            </h3>

            <p className="mt-5 text-base leading-8 text-white/62">
              Antique Lens تجمع بين سوق فضولي بصري، منتج قابل للاشتراك، وفرصة
              توسع دولي. القيمة ليست في التقييم الواحد فقط، بل في بناء منصة
              تعرف المستخدم، تحفظ قطعه، وتحوّل بيانات التقييم إلى أصل رقمي.
            </p>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
              <div className="flex items-start gap-4">
                <Building2
                  size={22}
                  className="mt-1 shrink-0 text-[#d7a35f]"
                />

                <p className="text-sm leading-7 text-white/62">
                  المشروع يبقى تحت اسم Abaad Al Iraq، مع إمكانية تنظيم العلاقة
                  الاستثمارية بعقد واضح يحدد نسبة المستثمر وآلية توزيع الأرباح.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                  Why Invest Now
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                  لماذا الآن؟
                </h3>
              </div>

              <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987] sm:flex">
                <ShieldCheck size={24} />
              </div>
            </div>

            <div className="grid gap-3">
              {finalPoints.map((item) => (
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

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/investor"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7a35f] px-6 py-4 text-sm font-bold text-black transition hover:bg-[#f0c987]"
              >
                تفاصيل المستثمر
                <ArrowUpLeft size={17} />
              </Link>

              <Link
                href="/revenue"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
              >
                مراجعة الإيرادات
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-[2.5rem] border border-white/10 bg-black/25 p-8 text-center md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d7a35f]">
            Closing Statement
          </p>

          <h3 className="mx-auto mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-5xl">
            The next stage is not building the idea. The next stage is scaling
            the platform.
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/58">
            المرحلة القادمة هي تحويل Antique Lens من منصة مطورة إلى شركة رقمية
            قادرة على اكتساب مستخدمين، توليد إيرادات، وبناء قيمة طويلة الأمد.
          </p>
        </div>
      </div>
    </section>
  );
}