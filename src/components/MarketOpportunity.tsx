import Link from "next/link";
import {
  ArrowUpLeft,
  Globe2,
  Landmark,
  SearchCheck,
  ShoppingBag,
  Users,
  WalletCards,
} from "lucide-react";

const audiences = [
  {
    icon: Users,
    title: "الأفراد والمالكون",
    text: "أشخاص يمتلكون قطعاً قديمة ولا يعرفون قيمتها أو أصلها أو إمكانية بيعها.",
  },
  {
    icon: ShoppingBag,
    title: "تجار التحف",
    text: "يحتاجون أداة سريعة لتقييم أولي، أرشفة القطع، ومقارنة الأسعار قبل البيع.",
  },
  {
    icon: Landmark,
    title: "المعارض والمزادات",
    text: "يمكن أن تستفيد من تقارير منظمة ومعلومات أولية عن القطع قبل عرضها.",
  },
  {
    icon: SearchCheck,
    title: "الجامعون والمهتمون",
    text: "مستخدمون يبحثون عن معرفة أدق حول الندرة، المادة، العمر، والقيمة السوقية.",
  },
];

const markets = [
  "الولايات المتحدة",
  "المملكة المتحدة",
  "الإمارات",
  "السعودية",
  "تركيا",
  "العراق والمنطقة العربية",
];

export default function MarketOpportunity() {
  return (
    <section
  id="market"
  dir="rtl"
  className="relative overflow-hidden bg-[#050302] px-5 py-24 text-right md:px-8 lg:px-10 xl:pl-52 xl:pr-16"
>
      <div className="pointer-events-none absolute right-[-180px] top-28 h-96 w-96 rounded-full bg-[#d7a35f]/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-[-160px] bottom-0 h-96 w-96 rounded-full bg-[#3a1c0b]/30 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7a35f]">
              MARKET OPPORTUNITY
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
              سوق التحف يحتاج ثقة، معرفة، وتقييم أسرع
            </h2>

            <p className="mt-6 text-lg leading-9 text-white/62">
              المشكلة الحقيقية في سوق التحف ليست فقط البيع والشراء، بل غياب
              المعرفة. كثير من المستخدمين يمتلكون قطعاً قد تكون ذات قيمة، لكنهم
              لا يعرفون العمر التقريبي، المادة، الندرة، أو السعر المتوقع. هنا
              تدخل Antique Lens كمنصة تبسط هذه المعرفة وتحولها إلى تجربة رقمية.
            </p>
          </div>

          <div className="rounded-[2rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-7">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
              <Globe2 size={24} />
            </div>

            <h3 className="mt-8 text-3xl font-semibold tracking-[-0.03em] text-white">
              الفرصة ليست محلية فقط
            </h3>

            <p className="mt-5 text-base leading-8 text-white/62">
              المنتج قابل للتسويق في أسواق تمتلك ثقافة شراء وبيع التحف، مثل
              أمريكا، أوروبا، الخليج، وتركيا. هذا يجعل المشروع قابلاً للنمو
              خارج العراق وليس محصوراً بجمهور محلي.
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {markets.map((market) => (
                <span
                  key={market}
                  className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs font-medium text-white/70"
                >
                  {market}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {audiences.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#d7a35f]/35 hover:bg-white/[0.07]"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
                  <Icon size={22} />
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

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
              Why Users Pay
            </p>

            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white">
              لماذا يدفع المستخدم اشتراكاً؟
            </h3>

            <p className="mt-5 text-base leading-8 text-white/62">
              المستخدم لا يدفع فقط مقابل جواب. هو يدفع مقابل تقليل الجهل بقيمة
              ما يملك، وتوفير وقت البحث، والحصول على تقرير منظم يساعده في البيع،
              الشراء، التوثيق، أو حتى اتخاذ قرار الاحتفاظ بالقطعة.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                  Market Gap
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                  الفجوة التي تستغلها المنصة
                </h3>
              </div>

              <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987] sm:flex">
                <WalletCards size={24} />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "قلة المعرفة بقيمة القطع القديمة.",
                "صعوبة الوصول إلى خبير موثوق.",
                "تفاوت الأسعار بين الأسواق.",
                "غياب أدوات تقييم سهلة للمستخدم العادي.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.25rem] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/62"
                >
                  {item}
                </div>
              ))}
            </div>

            <Link
              href="/market"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#d7a35f] px-6 py-4 text-sm font-bold text-black transition hover:bg-[#f0c987]"
            >
              تفاصيل السوق والفرصة
              <ArrowUpLeft size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}