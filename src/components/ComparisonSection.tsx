import Link from "next/link";
import {
  ArrowUpLeft,
  Bot,
  CheckCircle2,
  ClipboardList,
  Database,
  Gem,
  Layers3,
  MessageSquareText,
  SearchCheck,
  Smartphone,
  XCircle,
} from "lucide-react";

const comparisonRows = [
  {
    point: "التخصص",
    chatgpt: "أداة عامة لكل المواضيع",
    antiqueLens: "منصة متخصصة بسوق التحف والمقتنيات",
  },
  {
    point: "تجربة المستخدم",
    chatgpt: "المستخدم يحتاج يعرف شنو يسأل",
    antiqueLens: "يرفع صورة ويحصل على تقرير منظم",
  },
  {
    point: "حفظ القطع",
    chatgpt: "لا يبني أرشيف مقتنيات خاص بالمستخدم",
    antiqueLens: "قابل لبناء سجل وملف لكل قطعة",
  },
  {
    point: "شكل النتيجة",
    chatgpt: "إجابة نصية عامة",
    antiqueLens: "تقرير تقييم واضح وقابل للمشاركة",
  },
  {
    point: "نموذج الإيرادات",
    chatgpt: "ليس موجهاً لهذا السوق تحديداً",
    antiqueLens: "اشتراكات، تقارير مدفوعة، وتوسع تجاري",
  },
];

const productAdvantages = [
  {
    icon: Gem,
    title: "منتج متخصص",
    text: "المنصة مبنية حول التحف، الأعمال الفنية، القطع النادرة، والمقتنيات التراثية.",
  },
  {
    icon: ClipboardList,
    title: "تقرير قابل للبيع",
    text: "القيمة ليست في الجواب فقط، بل في إخراج تقرير واضح يمكن حفظه ومشاركته.",
  },
  {
    icon: Database,
    title: "بيانات تتراكم",
    text: "كل تقييم مستقبلاً يمكن أن يضيف قيمة لقاعدة بيانات المنصة وسلوك السوق.",
  },
];

const competitorNotes = [
  "وجود تطبيقات متخصصة مثل Curio يثبت أن هناك طلباً حقيقياً على تقييم المقتنيات.",
  "المنافسة لا تعني أن الفكرة ضعيفة؛ بل تعني أن السوق موجود والمستخدمين مستعدين للتجربة.",
  "الفرصة في Antique Lens هي بناء تجربة أعمق، أوضح، وأكثر قابلية للتوسع التجاري.",
];

export default function ComparisonSection() {
  return (
   <section
  id="comparison"
  dir="rtl"
  className="relative overflow-hidden bg-[#070403] px-5 py-24 text-right md:px-8 lg:px-10 xl:pl-52 xl:pr-16"
>
      <div className="pointer-events-none absolute right-[-180px] top-24 h-96 w-96 rounded-full bg-[#d7a35f]/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-[-160px] bottom-0 h-96 w-96 rounded-full bg-[#3a1c0b]/35 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7a35f]">
              COMPETITIVE POSITION
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
              لماذا يدفع المستخدم لمنصة Antique Lens بدل أن يسأل ChatGPT؟
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-white/62">
              هذا السؤال مهم، ولازم نجاوب عليه بوضوح. ChatGPT أداة عامة وقوية،
              لكنه ليس منتجاً متخصصاً بتقييم التحف. Antique Lens تحول الذكاء
              الاصطناعي إلى تجربة منتج كاملة: رفع صورة، تقرير، أرشيف، مقارنة،
              ونموذج اشتراك.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {productAdvantages.map((item) => {
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

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.045] p-5 md:p-7">
          <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                ChatGPT vs Antique Lens
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                الفرق بين أداة عامة ومنصة متخصصة
              </h3>
            </div>

            <div className="flex gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/8 text-white/65">
                <Bot size={24} />
              </div>

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
                <SearchCheck size={24} />
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
            <div className="hidden grid-cols-3 border-b border-white/10 bg-black/30 px-5 py-4 text-xs font-semibold text-white/45 md:grid">
              <span>نقطة المقارنة</span>
              <span>ChatGPT</span>
              <span>Antique Lens</span>
            </div>

            {comparisonRows.map((row) => (
              <div
                key={row.point}
                className="grid gap-4 border-b border-white/10 bg-black/10 px-5 py-5 text-sm last:border-b-0 md:grid-cols-3 md:items-start"
              >
                <div>
                  <span className="mb-1 block text-xs text-white/35 md:hidden">
                    نقطة المقارنة
                  </span>
                  <span className="font-semibold text-white">{row.point}</span>
                </div>

                <div className="flex items-start gap-3">
                  <XCircle
                    size={17}
                    className="mt-1 shrink-0 text-white/28"
                  />
                  <span className="leading-7 text-white/55">
                    {row.chatgpt}
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={17}
                    className="mt-1 shrink-0 text-[#d7a35f]"
                  />
                  <span className="leading-7 text-white/72">
                    {row.antiqueLens}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-5">
            <p className="text-base leading-8 text-white/68">
              الخلاصة: ChatGPT يشبه محركاً عاماً للمعرفة. Antique Lens يجب أن
              يكون مثل منصة متخصصة داخل سوق التحف، وهذا هو سبب إمكانية تحويله
              إلى اشتراك مدفوع.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                  Curio & Similar Apps
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                  ماذا يعني وجود تطبيقات منافسة؟
                </h3>
              </div>

              <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987] sm:flex">
                <Smartphone size={24} />
              </div>
            </div>

            <div className="grid gap-3">
              {competitorNotes.map((item) => (
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
          </div>

          <div className="rounded-[2rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-7">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
              <Layers3 size={24} />
            </div>

            <h3 className="mt-8 text-3xl font-semibold tracking-[-0.03em] text-white">
              نقطة التفوق المقترحة
            </h3>

            <p className="mt-5 text-base leading-8 text-white/62">
              التفوق لا يأتي من الادعاء أن المنصة تعرف كل شيء، بل من بناء تجربة
              منظمة حول سوق واحد: تقييم، أرشفة، تقارير، مقارنة، اشتراكات، ثم
              شراكات مع تجار ومزادات.
            </p>

            <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-black/25 p-5">
              <div className="flex items-start gap-4">
                <MessageSquareText
                  size={22}
                  className="mt-1 shrink-0 text-[#d7a35f]"
                />

                <p className="text-sm leading-7 text-white/62">
                  المستثمر لا يستثمر في جواب ذكاء اصطناعي. هو يستثمر في منصة
                  قادرة على امتلاك علاقة مستمرة مع مستخدمين يدفعون لمعرفة قيمة
                  مقتنياتهم.
                </p>
              </div>
            </div>

            <Link
              href="/comparison"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#d7a35f] px-6 py-4 text-sm font-bold text-black transition hover:bg-[#f0c987]"
            >
              تفاصيل المقارنة
              <ArrowUpLeft size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}