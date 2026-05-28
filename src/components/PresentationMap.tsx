import Link from "next/link";
import {
  ArrowUpLeft,
  Banknote,
  Boxes,
  LineChart,
  Megaphone,
  Rocket,
  Scale,
} from "lucide-react";

const sections = [
  {
    title: "فكرة المشروع",
    href: "/project",
    text: "شرح منصة Antique Lens، آلية التقييم، ومن هم المستخدمون المستهدفون.",
    icon: Boxes,
  },
  {
    title: "تطوير المشروع",
    href: "/development",
    text: "مراحل التطوير، الميزات الحالية، وخطة تحسين المنتج.",
    icon: Rocket,
  },
  {
    title: "السوق والفرصة",
    href: "/market",
    text: "تحليل الحاجة السوقية، المستخدمين، والدول المستهدفة.",
    icon: LineChart,
  },
  {
    title: "الإيرادات",
    href: "/revenue",
    text: "نموذج الاشتراكات، سيناريو 100 ألف حساب، والإيرادات السنوية.",
    icon: Banknote,
  },
  {
    title: "المستثمر",
    href: "/investor",
    text: "نسبة المستثمر، العائد المتوقع، ومدة استرداد رأس المال.",
    icon: Scale,
  },
  {
    title: "التسويق",
    href: "/marketing",
    text: "خطة الترويج، الدول الأولى، والميزانية المقترحة للنمو.",
    icon: Megaphone,
  },
];

export default function PresentationMap() {
  return (
    <section
  id="presentation-map"
  dir="rtl"
  className="relative bg-[#050302] px-5 py-24 text-right md:px-8 lg:px-10 xl:pl-52 xl:pr-16"
>
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto mb-14 max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7a35f]">
            PRESENTATION MAP
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
            دراسة استثمارية مقسّمة حتى المستثمر يفهم بسرعة
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-white/60">
            الصفحة الرئيسية مجرد مدخل. التفاصيل المهمة موزعة على صفحات مستقلة:
            فكرة المشروع، السوق، الإيرادات، المستثمر، التكاليف، وخطة النمو.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <Link
                key={section.href}
                href={section.href}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 text-right transition duration-300 hover:-translate-y-1 hover:border-[#d7a35f]/35 hover:bg-white/[0.07]"
              >
                <div className="mb-8 flex items-center justify-between">
                  <ArrowUpLeft
                    size={20}
                    className="text-white/35 transition group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:text-[#d7a35f]"
                  />

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
                    <Icon size={22} />
                  </div>
                </div>

                <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                  {section.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/55">
                  {section.text}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}