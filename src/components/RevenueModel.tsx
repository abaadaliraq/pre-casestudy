import Link from "next/link";
import {
  ArrowUpLeft,
  BadgeDollarSign,
  Banknote,
  BarChart3,
  Crown,
  FileText,
  Percent,
  TrendingUp,
  Users,
} from "lucide-react";

const subscriptionPlans = [
  {
    title: "Monthly Plan",
    price: "$5",
    note: "اشتراك شهري للمستخدمين الذين يحتاجون تقييمات مستمرة أو متكررة.",
    icon: Banknote,
  },
  {
    title: "Annual Plan",
    price: "$42",
    note: "اشتراك سنوي بسعر أقل، مناسب للمستخدمين الجادين والمهتمين بالتحف.",
    icon: Crown,
  },
  {
    title: "Paid Reports",
    price: "$9 - $19",
    note: "تقارير تقييم مفصلة قابلة للمشاركة أو الطباعة مستقبلاً.",
    icon: FileText,
  },
];

const scenarios = [
  {
    label: "محافظ",
    accounts: "100,000",
    conversion: "3%",
    subscribers: "3,000",
    annualPrice: "$42",
    revenue: "$126,000",
  },
  {
    label: "متوسط",
    accounts: "100,000",
    conversion: "7%",
    subscribers: "7,000",
    annualPrice: "$42",
    revenue: "$294,000",
  },
  {
    label: "قوي",
    accounts: "100,000",
    conversion: "12%",
    subscribers: "12,000",
    annualPrice: "$42",
    revenue: "$504,000",
  },
];

const extraRevenue = [
  "تقارير تقييم مدفوعة.",
  "باقات احترافية للتجار.",
  "اشتراكات للمعارض والمزادات.",
  "إعلانات أو Featured Listings مستقبلاً.",
  "عمولة على البيع عند إطلاق Marketplace.",
  "API للشركات أو منصات التجارة.",
];

export default function RevenueModel() {
  return (
   <section
  id="revenue"
  dir="rtl"
  className="relative overflow-hidden bg-[#070403] px-5 py-24 text-right md:px-8 lg:px-10 xl:pl-52 xl:pr-16"
>
      <div className="pointer-events-none absolute left-[-160px] top-10 h-96 w-96 rounded-full bg-[#d7a35f]/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-180px] bottom-0 h-96 w-96 rounded-full bg-[#3a1c0b]/35 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7a35f]">
              REVENUE MODEL
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
              الإيرادات لا تعتمد على مصدر واحد
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-white/62">
              Antique Lens تبدأ كنموذج اشتراك بسيط، لكن قيمتها الحقيقية تظهر عند
              إضافة التقارير المدفوعة، باقات التجار، الشراكات، والعمولة على البيع
              مستقبلاً. هذا يجعل المشروع قابلاً للنمو وليس مجرد تطبيق باشتراك
              شهري محدود.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {subscriptionPlans.map((plan) => {
            const Icon = plan.icon;

            return (
              <div
                key={plan.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d7a35f]/35 hover:bg-white/[0.07]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
                    <Icon size={22} />
                  </div>

                  <span className="text-4xl font-semibold tracking-[-0.05em] text-white">
                    {plan.price}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {plan.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  {plan.note}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 md:p-7">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                100K Accounts Scenario
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                إذا فتحت المنصة 100 ألف حساب
              </h3>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
              <Users size={24} />
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
            <div className="hidden grid-cols-6 border-b border-white/10 bg-black/30 px-5 py-4 text-xs font-semibold text-white/45 md:grid">
              <span>السيناريو</span>
              <span>الحسابات</span>
              <span>نسبة التحويل</span>
              <span>المشتركين</span>
              <span>الاشتراك السنوي</span>
              <span>الإيراد السنوي</span>
            </div>

            {scenarios.map((item) => (
              <div
                key={item.label}
                className="grid gap-3 border-b border-white/10 bg-black/10 px-5 py-5 text-sm last:border-b-0 md:grid-cols-6 md:items-center"
              >
                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    السيناريو
                  </span>
                  <span className="font-semibold text-white">{item.label}</span>
                </div>

                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    الحسابات
                  </span>
                  <span className="text-white/65">{item.accounts}</span>
                </div>

                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    نسبة التحويل
                  </span>
                  <span className="text-[#f0c987]">{item.conversion}</span>
                </div>

                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    المشتركين
                  </span>
                  <span className="text-white/65">{item.subscribers}</span>
                </div>

                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    الاشتراك السنوي
                  </span>
                  <span className="text-white/65">{item.annualPrice}</span>
                </div>

                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    الإيراد السنوي
                  </span>
                  <span className="text-lg font-semibold text-white">
                    {item.revenue}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm leading-7 text-white/45">
            هذه الأرقام مبنية على اشتراك سنوي بقيمة 42 دولار فقط. أي زيادة في
            التقارير المدفوعة أو الاشتراكات الشهرية أو باقات التجار ترفع الإيراد
            فوق هذه السيناريوهات.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-7">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
              <TrendingUp size={24} />
            </div>

            <h3 className="mt-8 text-3xl font-semibold tracking-[-0.03em] text-white">
              مثال سريع: 10,000 مشترك شهري
            </h3>

            <p className="mt-5 text-base leading-8 text-white/62">
              إذا وصل عدد المشتركين الشهريين إلى 10,000 مستخدم فقط، بسعر 5
              دولارات شهرياً، فهذا يعني:
            </p>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/25 p-6">
              <p className="text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                $50,000
              </p>
              <p className="mt-2 text-sm text-white/50">إيراد شهري</p>

              <div className="my-5 h-px bg-white/10" />

              <p className="text-4xl font-semibold tracking-[-0.05em] text-[#f0c987] md:text-5xl">
                $600,000
              </p>
              <p className="mt-2 text-sm text-white/50">إيراد سنوي تقريبي</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                  Extra Revenue
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                  مصادر دخل إضافية
                </h3>
              </div>

              <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987] sm:flex">
                <BadgeDollarSign size={24} />
              </div>
            </div>

            <div className="grid gap-3">
              {extraRevenue.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-[1.25rem] border border-white/10 bg-black/20 p-4"
                >
                  <Percent size={17} className="shrink-0 text-[#d7a35f]" />
                  <p className="text-sm leading-7 text-white/62">{item}</p>
                </div>
              ))}
            </div>

            <Link
              href="/revenue"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#d7a35f] px-6 py-4 text-sm font-bold text-black transition hover:bg-[#f0c987]"
            >
              تفاصيل نموذج الإيرادات
              <ArrowUpLeft size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}