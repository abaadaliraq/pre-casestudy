import {
  BadgeCheck,
  Gem,
  Globe2,
  Handshake,
  Landmark,
  SearchCheck,
  ShieldCheck,
  ShoppingBag,
  Users,
  WalletCards,
} from "lucide-react";

type Lang = "ar" | "en";

type MarketOpportunityProps = {
  lang?: Lang;
};

const content = {
  ar: {
    dir: "rtl" as const,
    align: "text-right",
    sectionLabel: "MARKET OPPORTUNITY",
    title: "سوق عالي القيمة… لكنه لا يزال غير منظم رقمياً",
    intro:
      "سوق التحف، المقتنيات النادرة، الأعمال الفنية، والأحجار الكريمة لا يعاني من نقص الطلب؛ بل يعاني من نقص الثقة، صعوبة التقييم، تشتت الأسعار، وصعوبة الوصول إلى رأي موثوق. هنا تأتي KISHIB كمنصة تبني جسراً بين المالك، المشتري، التاجر، والمستشار المتخصص.",
    globalTitle: "الفرصة ليست محلية فقط",
    globalText:
      "التحف والمقتنيات سوق عابر للحدود. القطعة قد تكون في بغداد، المشتري في دبي، الخبير في لندن، والمقارنة السعرية في سوق أمريكي أو تركي. لذلك KISHIB مصممة منذ البداية كمنصة قابلة للتوسع عبر اللغات والأسواق.",
    markets: [
      "الولايات المتحدة",
      "المملكة المتحدة",
      "الإمارات",
      "السعودية",
      "تركيا",
      "العراق والمنطقة العربية",
    ],
    audiences: [
      {
        icon: Users,
        title: "الأفراد والمالكون",
        text: "أشخاص يمتلكون قطعاً قديمة ولا يعرفون قيمتها، أصلها، أو ما إذا كانت تستحق البيع أو التوثيق أو الاحتفاظ.",
      },
      {
        icon: ShoppingBag,
        title: "تجار التحف والمقتنيات",
        text: "يحتاجون إلى قراءة أولية سريعة، أرشفة منظمة، ومقارنة أوضح قبل الشراء، التسعير، أو العرض للبيع.",
      },
      {
        icon: Landmark,
        title: "المعارض والمزادات",
        text: "تستفيد من تقارير منظمة تساعد في فرز القطع، تجهيز ملفات العرض، وتقديم معلومات أكثر ثقة للمشترين.",
      },
      {
        icon: Gem,
        title: "سوق الأحجار الكريمة",
        text: "قطاع عالي القيمة يحتاج إلى تفاصيل دقيقة، قراءة منظمة، ومسار واضح قبل الوصول إلى فحص أو استشارة متقدمة.",
      },
    ],
    payLabel: "WHY USERS PAY",
    payTitle: "المستخدم لا يدفع مقابل جواب… بل مقابل تقليل المخاطرة",
    payText:
      "عندما يمتلك المستخدم قطعة قد تكون قيمتها 50 دولاراً أو 5,000 دولار أو أكثر، فهو لا يبحث عن فضول بصري. هو يريد تقليل الجهل، تجنب البيع بسعر خاطئ، فهم العوامل المؤثرة على القيمة، والحصول على مسار واضح للقرار التالي.",
    gapLabel: "MARKET GAP",
    gapTitle: "الفجوة التي تستغلها KISHIB",
    gaps: [
      "صعوبة معرفة القيمة التقريبية للقطع القديمة.",
      "تفاوت الأسعار بشكل كبير بين الأسواق والمنصات.",
      "قلة الأدوات الرقمية المخصصة للتحف والمقتنيات.",
      "صعوبة الوصول إلى خبير موثوق بسرعة.",
      "حاجة التجار والمزادات إلى تقارير أولية منظمة.",
      "وجود سوق أحجار كريمة يحتاج إلى مسار تقييم مستقل.",
    ],
    consultantLabel: "FUTURE EXPERT LAYER",
    consultantTitle: "طبقة استشارية مدفوعة يمكن أن ترفع قيمة المنصة",
    consultantText:
      "في المرحلة المتقدمة، يمكن أن تتيح KISHIB للمستخدم الانتقال من التقييم الأولي إلى حجز استشارة مباشرة مع خبير أو مستشار حقيقي، خصوصاً للقطع عالية القيمة أو الحالات التي تحتاج رأياً بشرياً متخصصاً. هذا يحوّل المنصة من أداة تقييم فقط إلى سوق خدمات موثوقة حول التحف والمقتنيات.",
    consultantPoints: [
      "استشارات مدفوعة للقطع عالية القيمة.",
      "ربط المستخدم بخبير حسب نوع القطعة أو السوق.",
      "مصدر دخل إضافي عبر العمولة أو الحجز المباشر.",
      "رفع الثقة في المنصة عند التعامل مع قطع حساسة أو ثمينة.",
    ],
  },

  en: {
    dir: "ltr" as const,
    align: "text-left",
    sectionLabel: "MARKET OPPORTUNITY",
    title: "A high-value market that is still digitally under-structured",
    intro:
      "The market for antiques, rare collectibles, artworks, and gemstones does not suffer from lack of demand. It suffers from lack of trust, inconsistent valuation, fragmented pricing, and limited access to reliable expertise. KISHIB is positioned to become the bridge between owners, buyers, dealers, and qualified specialists.",
    globalTitle: "The opportunity is not local",
    globalText:
      "Antiques and collectibles are cross-border by nature. An item may be in Baghdad, the buyer in Dubai, the expert in London, and the price comparison in the U.S. or Turkey. KISHIB is built from the start to expand across languages, markets, and user segments.",
    markets: [
      "United States",
      "United Kingdom",
      "UAE",
      "Saudi Arabia",
      "Turkey",
      "Iraq and the Arab Region",
    ],
    audiences: [
      {
        icon: Users,
        title: "Private Owners",
        text: "People who own old or inherited objects but do not know their value, origin, or whether the item should be sold, documented, or preserved.",
      },
      {
        icon: ShoppingBag,
        title: "Antique Dealers",
        text: "Dealers need faster preliminary reading, structured archives, and clearer comparison before buying, pricing, or listing items.",
      },
      {
        icon: Landmark,
        title: "Galleries and Auctions",
        text: "Auction houses and galleries can benefit from structured reports that help filter items, prepare listings, and give buyers more confidence.",
      },
      {
        icon: Gem,
        title: "Gemstone Market",
        text: "A high-value vertical that requires detail, structured reading, and a clear path before advanced inspection or expert consultation.",
      },
    ],
    payLabel: "WHY USERS PAY",
    payTitle: "Users are not paying for an answer. They are paying to reduce risk.",
    payText:
      "When a user owns an item that could be worth $50, $5,000, or significantly more, the need is not curiosity. The need is to reduce uncertainty, avoid selling below value, understand what affects the price, and know the next best action.",
    gapLabel: "MARKET GAP",
    gapTitle: "The gap KISHIB is built to capture",
    gaps: [
      "Owners struggle to understand the approximate value of old objects.",
      "Prices vary dramatically across markets and platforms.",
      "Few digital tools are designed specifically for antiques and collectibles.",
      "Reliable experts are difficult to access quickly.",
      "Dealers and auction houses need structured preliminary reports.",
      "The gemstone market requires its own dedicated evaluation path.",
    ],
    consultantLabel: "FUTURE EXPERT LAYER",
    consultantTitle: "A paid expert layer can significantly increase platform value",
    consultantText:
      "In an advanced phase, KISHIB can allow users to move from preliminary evaluation to a direct consultation with a real specialist, especially for high-value items or cases that require human expertise. This transforms the platform from an evaluation product into a trusted service marketplace around antiques, collectibles, and gemstones.",
    consultantPoints: [
      "Paid consultations for high-value items.",
      "Expert matching by item type, category, or market.",
      "Additional revenue through booking fees or commission.",
      "Higher trust when users deal with sensitive or valuable objects.",
    ],
  },
};

export default function MarketOpportunity({
  lang = "ar",
}: MarketOpportunityProps) {
  const t = content[lang];

  return (
    <section
      id="market"
      dir={t.dir}
      className={[
        "relative overflow-hidden bg-[#050302] px-5 py-24 text-white md:px-8 lg:px-10 xl:pl-52 xl:pr-16",
        t.align,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute right-[-180px] top-28 h-96 w-96 rounded-full bg-[#d7a35f]/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-[-160px] bottom-0 h-96 w-96 rounded-full bg-[#3a1c0b]/30 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7a35f]">
              {t.sectionLabel}
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
              {t.title}
            </h2>

            <p className="mt-6 text-lg leading-9 text-white/62">{t.intro}</p>
          </div>

          <div className="rounded-[2rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-7">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
              <Globe2 size={24} />
            </div>

            <h3 className="mt-8 text-3xl font-semibold tracking-[-0.03em] text-white">
              {t.globalTitle}
            </h3>

            <p className="mt-5 text-base leading-8 text-white/62">
              {t.globalText}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {t.markets.map((market) => (
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
          {t.audiences.map((item) => {
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
              {t.payLabel}
            </p>

            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white">
              {t.payTitle}
            </h3>

            <p className="mt-5 text-base leading-8 text-white/62">
              {t.payText}
            </p>

            <div className="mt-8 rounded-[1.5rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
                  <ShieldCheck size={20} />
                </div>

                <p className="text-sm leading-7 text-white/62">
                  {lang === "ar"
                    ? "الثقة هنا ليست تفصيلاً تجميلياً؛ هي سبب الدفع، سبب الرجوع، وسبب قابلية المنصة للتحول إلى خدمة ذات قيمة عالية."
                    : "Trust is not a cosmetic feature here. It is the reason users pay, return, and eventually move into higher-value services."}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                  {t.gapLabel}
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                  {t.gapTitle}
                </h3>
              </div>

              <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987] sm:flex">
                <WalletCards size={24} />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {t.gaps.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-[1.25rem] border border-white/10 bg-black/20 p-4 text-sm leading-7 text-white/62"
                >
                  <BadgeCheck
                    size={17}
                    className="mt-1 shrink-0 text-[#d7a35f]"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[2rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.065] p-7">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
                <Handshake size={24} />
              </div>

              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                {t.consultantLabel}
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white">
                {t.consultantTitle}
              </h3>

              <p className="mt-5 text-base leading-8 text-white/62">
                {t.consultantText}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {t.consultantPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[1.35rem] border border-white/10 bg-black/25 p-5 text-sm font-semibold leading-7 text-white/68"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}