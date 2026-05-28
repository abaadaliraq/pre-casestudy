import Link from "next/link";
import InvestorPaybackChart from "@/components/InvestorPaybackChart";
import {
  ArrowUpLeft,
  BadgePercent,
  Banknote,
  CircleDollarSign,
  Handshake,
  Info,
  Landmark,
  TrendingUp,
} from "lucide-react";

const investmentTerms = [
  {
    icon: Landmark,
    title: "ملكية المشروع",
    value: "Abaad Al Iraq",
    text: "المنصة تبقى مملوكة ومدارة تحت اسم أبعاد العراق، مع دخول المستثمر كشريك بنسبة أرباح سنوية واضحة.",
  },
  {
    icon: Banknote,
    title: "قيمة الاستثمار المطلوبة",
    value: "$32,000",
    text: "مبلغ استثماري مخصص لتسريع التطوير، التسويق، تحسين دقة المنتج، وتجهيز المنصة للإطلاق التجاري.",
  },
  {
    icon: BadgePercent,
    title: "نسبة المستثمر",
    value: "9%",
    text: "يحصل المستثمر على 9% من صافي الأرباح السنوية للمنصة، وفق اتفاق استثماري واضح.",
  },
];

const returnScenarios = [
  {
    year: "Year 1",
    revenue: "$126,000",
    expenses: "$95,000",
    netProfit: "$31,000",
    investorShare: "$2,790",
    note: "مرحلة إطلاق واختبار السوق",
  },
  {
    year: "Year 2",
    revenue: "$294,000",
    expenses: "$145,000",
    netProfit: "$149,000",
    investorShare: "$13,410",
    note: "مرحلة نمو وتحسين التحويل",
  },
  {
    year: "Year 3",
    revenue: "$504,000",
    expenses: "$210,000",
    netProfit: "$294,000",
    investorShare: "$26,460",
    note: "مرحلة توسع ونضج الإيرادات",
  },
];

const notes = [
  "الأرقام تقديرية وليست ضماناً للعائد.",
  "حصة المستثمر محسوبة على أساس 9% من صافي الأرباح السنوية، وليس من إجمالي الإيرادات.",
  "العائد يعتمد على نجاح التسويق، عدد الحسابات، ونسبة التحويل إلى اشتراكات مدفوعة.",
  "استثمار 32,000 دولار يهدف إلى تسريع الوصول للسوق، وليس فقط تغطية تكاليف تشغيل بسيطة.",
];

export default function InvestorReturn() {
  return (
   <section
  id="investor"
  dir="rtl"
  className="relative overflow-hidden bg-[#050302] px-5 py-24 text-right md:px-8 lg:px-10 xl:pl-52 xl:pr-16"
>
      <div className="pointer-events-none absolute right-[-180px] top-24 h-96 w-96 rounded-full bg-[#d7a35f]/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-[-160px] bottom-0 h-96 w-96 rounded-full bg-[#3a1c0b]/30 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7a35f]">
              INVESTOR RETURN
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
              فرصة استثمارية بقيمة 32 ألف دولار مقابل 9% من الأرباح
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-white/62">
              تحتاج منصة Antique Lens إلى مستثمر يدخل بمبلغ 32,000 دولار
              لتسريع مرحلة التطوير والتسويق والإطلاق التجاري. مقابل ذلك يحصل
              المستثمر على 9% من صافي الأرباح السنوية للمنصة، مع بقاء المشروع
              تحت اسم وإدارة Abaad Al Iraq.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {investmentTerms.map((item) => {
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

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 md:p-7">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                9% Annual Profit Share
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                عائد المستثمر المتوقع خلال 3 سنوات
              </h3>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
              <CircleDollarSign size={24} />
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
            <div className="hidden grid-cols-6 border-b border-white/10 bg-black/30 px-5 py-4 text-xs font-semibold text-white/45 md:grid">
              <span>السنة</span>
              <span>الإيراد المتوقع</span>
              <span>المصاريف</span>
              <span>صافي الربح</span>
              <span>حصة المستثمر 9%</span>
              <span>ملاحظة</span>
            </div>

            {returnScenarios.map((item) => (
              <div
                key={item.year}
                className="grid gap-3 border-b border-white/10 bg-black/10 px-5 py-5 text-sm last:border-b-0 md:grid-cols-6 md:items-center"
              >
                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    السنة
                  </span>
                  <span className="font-semibold text-white">{item.year}</span>
                </div>

                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    الإيراد المتوقع
                  </span>
                  <span className="text-white/65">{item.revenue}</span>
                </div>

                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    المصاريف
                  </span>
                  <span className="text-white/65">{item.expenses}</span>
                </div>

                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    صافي الربح
                  </span>
                  <span className="text-[#f0c987]">{item.netProfit}</span>
                </div>

                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    حصة المستثمر
                  </span>
                  <span className="text-lg font-semibold text-white">
                    {item.investorShare}
                  </span>
                </div>

                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    ملاحظة
                  </span>
                  <span className="text-white/45">{item.note}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm leading-7 text-white/45">
            حسب هذا النموذج، مجموع عائد المستثمر خلال أول 3 سنوات يصل إلى
            42,660 دولار تقريباً، إذا تحققت سيناريوهات النمو الموضحة.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-7">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
              <TrendingUp size={24} />
            </div>

            <h3 className="mt-8 text-3xl font-semibold tracking-[-0.03em] text-white">
              متى يسترد المستثمر رأس المال؟
            </h3>

            <p className="mt-5 text-base leading-8 text-white/62">
              استثمار 32,000 دولار لا يسترد فوراً في السنة الأولى، وهذا طبيعي.
              حسب السيناريوهات الموضحة، يبدأ العائد الحقيقي بالظهور من السنة
              الثانية، ويمكن استرداد رأس المال تقريباً خلال السنة الثالثة إذا
              تحقق النمو المتوسط والقوي.
            </p>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/25 p-6">
              <p className="text-sm text-white/45">Estimated Payback</p>
              <p className="mt-2 text-4xl font-semibold tracking-[-0.05em] text-white md:text-5xl">
                30 - 36 شهر
              </p>
              <p className="mt-3 text-sm leading-7 text-white/50">
                تقدير مرن يعتمد على الوصول إلى الاشتراكات المدفوعة، تقليل كلفة
                اكتساب المستخدم، وزيادة التقارير المدفوعة.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                  Important Notes
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                  ملاحظات مهمة للمستثمر
                </h3>
              </div>

              <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987] sm:flex">
                <Info size={24} />
              </div>
            </div>

            <div className="grid gap-3">
              {notes.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-[1.25rem] border border-white/10 bg-black/20 p-4"
                >
                  <Handshake
                    size={17}
                    className="mt-1 shrink-0 text-[#d7a35f]"
                  />
                  <p className="text-sm leading-7 text-white/62">{item}</p>
                </div>
              ))}
            </div>

            <Link
              href="/investor"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#d7a35f] px-6 py-4 text-sm font-bold text-black transition hover:bg-[#f0c987]"
            >
              تفاصيل نموذج المستثمر
              <ArrowUpLeft size={17} />
            </Link>
          </div>
        </div>
      </div>
      <InvestorPaybackChart />
    </section>
    
  );
}