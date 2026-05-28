import Link from "next/link";
import {
  ArrowUpLeft,
  BadgeCheck,
  BarChart3,
  Globe2,
  Megaphone,
  PlayCircle,
  Search,
  Share2,
  Target,
  UsersRound,
} from "lucide-react";

const countries = [
  "USA",
  "UK",
  "UAE",
  "Saudi Arabia",
  "Turkey",
  "Iraq",
];

const channels = [
  {
    icon: PlayCircle,
    title: "Short Videos",
    text: "محتوى TikTok و Instagram Reels و YouTube Shorts بفكرة: هل تعرف قيمة هذه القطعة؟",
  },
  {
    icon: Search,
    title: "Google Search Ads",
    text: "استهداف كلمات بحث مثل antique appraisal, old item value, art valuation.",
  },
  {
    icon: Share2,
    title: "Pinterest & Visual Traffic",
    text: "استغلال البحث البصري والاهتمام العالي بالتحف والديكور والقطع النادرة.",
  },
  {
    icon: UsersRound,
    title: "Communities",
    text: "استهداف مجتمعات التحف، المزادات، الجامعين، وصفحات Facebook المتخصصة.",
  },
];

const phases = [
  {
    phase: "اختبار السوق",
    duration: "3 أشهر",
    budget: "$10,000 - $20,000",
    goal: "اختبار الرسائل الإعلانية ومعرفة أفضل الدول والجمهور.",
  },
  {
    phase: "نمو أولي",
    duration: "6 أشهر",
    budget: "$30,000 - $60,000",
    goal: "رفع التسجيلات وبناء أول قاعدة مستخدمين مدفوعة.",
  },
  {
    phase: "توسع دولي",
    duration: "12 شهر",
    budget: "$80,000 - $150,000",
    goal: "تحويل المنصة إلى منتج معروف في أكثر من سوق.",
  },
];

const campaignIdeas = [
  "Upload your antique photo and discover its estimated value.",
  "Do you own something rare? Let AI give you a first valuation.",
  "From old objects to real market insight.",
  "Know before you sell.",
];

export default function MarketingStrategy() {
  return (
    <section
  id="marketing"
  dir="rtl"
  className="relative overflow-hidden bg-[#050302] px-5 py-24 text-right md:px-8 lg:px-10 xl:pl-52 xl:pr-16"
>
      <div className="pointer-events-none absolute right-[-180px] top-20 h-96 w-96 rounded-full bg-[#d7a35f]/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-[-160px] bottom-0 h-96 w-96 rounded-full bg-[#3a1c0b]/30 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7a35f]">
              MARKETING STRATEGY
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
              التسويق هو الطريق الحقيقي لأول 100 ألف حساب
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-white/62">
              الخطة لا تبدأ بإطلاق عالمي عشوائي. نبدأ بدول محددة، نختبر الرسائل
              الإعلانية، نعرف أي جمهور يتحول لاشتراك مدفوع، ثم نوسع الميزانية
              على القنوات التي تعطي أقل كلفة اكتساب مستخدم.
            </p>
          </div>
        </div>

        <div className="mt-14 rounded-[2rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-7">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
                <Globe2 size={24} />
              </div>

              <h3 className="mt-8 text-3xl font-semibold tracking-[-0.03em] text-white">
                دول الإطلاق الأولى
              </h3>

              <p className="mt-5 text-base leading-8 text-white/62">
                نختار أسواقاً فيها اهتمام واضح بالتحف، المزادات، المقتنيات
                النادرة، والشراء عبر الإنترنت. بعدها يتم التوسع حسب الأداء.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {countries.map((country) => (
                <div
                  key={country}
                  className="rounded-[1.35rem] border border-white/10 bg-black/25 p-5"
                >
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-white">
                    {country}
                  </p>
                  <p className="mt-2 text-xs text-white/42">Launch Market</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {channels.map((item) => {
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

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 md:p-7">
            <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                  Campaign Budget
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                  مراحل الصرف التسويقي
                </h3>
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
                <BarChart3 size={24} />
              </div>
            </div>

            <div className="grid gap-3">
              {phases.map((item) => (
                <div
                  key={item.phase}
                  className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5"
                >
                  <div className="grid gap-3 md:grid-cols-[1fr_auto_auto] md:items-center">
                    <h4 className="text-lg font-semibold text-white">
                      {item.phase}
                    </h4>

                    <span className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-xs text-white/55">
                      {item.duration}
                    </span>

                    <span className="rounded-full bg-[#d7a35f]/15 px-4 py-2 text-xs font-semibold text-[#f0c987]">
                      {item.budget}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-white/55">
                    {item.goal}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                  Message Strategy
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                  الرسالة الإعلانية
                </h3>
              </div>

              <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987] sm:flex">
                <Target size={24} />
              </div>
            </div>

            <p className="text-base leading-8 text-white/62">
              أقوى رسالة تسويقية للمنصة هي الفضول: المستخدم يريد أن يعرف هل
              القطعة التي يملكها عادية أم قيّمة. هذا الفضول يتحول إلى تسجيل،
              والتسجيل يتحول إلى اشتراك إذا كانت النتيجة واضحة ومقنعة.
            </p>

            <div className="mt-7 grid gap-3">
              {campaignIdeas.map((idea) => (
                <div
                  key={idea}
                  dir="ltr"
                  className="flex items-center gap-3 rounded-[1.25rem] border border-white/10 bg-black/20 p-4 text-left"
                >
                  <BadgeCheck size={17} className="shrink-0 text-[#d7a35f]" />
                  <p className="text-sm leading-7 text-white/62">{idea}</p>
                </div>
              ))}
            </div>

            <Link
              href="/marketing"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#d7a35f] px-6 py-4 text-sm font-bold text-black transition hover:bg-[#f0c987]"
            >
              تفاصيل خطة التسويق
              <ArrowUpLeft size={17} />
            </Link>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-black/20 p-7">
          <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
              <Megaphone size={28} />
            </div>

            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-white">
                الخلاصة التسويقية
              </h3>

              <p className="mt-3 text-base leading-8 text-white/60">
                لا نبيع تطبيقاً تقنياً فقط. نبيع لحظة اكتشاف: المستخدم يرفع صورة
                قطعة قديمة، وينتظر أن يعرف هل يملك شيئاً عادياً أم شيئاً يستحق
                الانتباه. هذه الفكرة قابلة جداً للمحتوى القصير والانتشار.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}