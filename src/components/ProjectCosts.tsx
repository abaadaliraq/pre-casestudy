import {
  BadgeCheck,
  BarChart3,
  Globe2,
  Megaphone,
  Network,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  Video,
} from "lucide-react";

type Lang = "ar" | "en";

type MarketingStrategyProps = {
  lang?: Lang;
};

const content = {
  ar: {
    dir: "rtl" as const,
    align: "text-right",
    sectionLabel: "MARKETING STRATEGY",
    title: "استراتيجية تسويق KISHIB مبنية على أسواق تملك الطلب والقيمة",
    intro:
      "تسويق KISHIB لا يجب أن يبدأ عشوائياً. المنصة تخاطب جمهوراً محدداً: مالكي التحف، جامعي القطع، التجار، المزادات، المهتمين بالأحجار الكريمة، والمستخدمين الذين يحتاجون فهماً أوثق لقيمة ممتلكاتهم. لذلك الاستراتيجية تعتمد على دخول أسواق مختارة، اختبار التحويل، ثم توسيع الإنفاق على القنوات التي تثبت جدواها.",
    marketsTitle: "الأسواق المستهدفة بالتسويق",
    marketsText:
      "تم اختيار هذه الأسواق لأنها تجمع بين وجود مقتنيات تراثية، حركة بيع وشراء، جاليات متعددة، اهتمام بالفن والتحف، أو قوة شرائية مناسبة لخدمات التقييم والتوثيق.",
    targetMarkets: [
      "العراق",
      "تركيا",
      "إيران",
      "مصر",
      "روسيا",
      "الولايات المتحدة",
      "الإمارات",
      "الهند",
      "لندن / المملكة المتحدة",
      "إيطاليا",
    ],
    pillarsLabel: "GO-TO-MARKET PILLARS",
    pillarsTitle: "محاور التسويق الأساسية",
    pillars: [
      {
        icon: Search,
        title: "اكتساب المستخدمين عبر البحث",
        text: "استهداف الكلمات المرتبطة بتقييم التحف، معرفة سعر القطع القديمة، تقييم الأحجار الكريمة، وتوثيق المقتنيات.",
      },
      {
        icon: Video,
        title: "محتوى قصير عالي الانتشار",
        text: "فيديوهات تعرض حالات تقييم واقعية، قبل وبعد التقرير، أخطاء بيع القطع بثمن منخفض، وقصص قطع غامضة.",
      },
      {
        icon: Users,
        title: "استهداف المجتمعات المهتمة",
        text: "الوصول إلى جامعي التحف، تجار القطع القديمة، صفحات المزادات، مجتمعات الأحجار الكريمة، والجاليات التي تملك مقتنيات موروثة.",
      },
      {
        icon: ShieldCheck,
        title: "بناء الثقة قبل البيع",
        text: "التركيز على أن KISHIB تساعد المستخدم على تقليل المخاطرة وفهم القطعة قبل قرار البيع أو الشراء أو الاستشارة.",
      },
    ],
    channelsLabel: "CHANNEL STRATEGY",
    channelsTitle: "قنوات التسويق المقترحة",
    channels: [
      "إعلانات بحث موجهة حسب الدولة واللغة.",
      "حملات تيك توك وإنستغرام Reels لقصص القطع النادرة.",
      "محتوى YouTube Shorts يشرح قيمة القطع والأسواق.",
      "شراكات مع تجار تحف ومعارض ومزادات.",
      "مجموعات فيسبوك ومجتمعات جامعي التحف والأحجار الكريمة.",
      "LinkedIn للتواصل مع مستثمرين، مزادات، ومعارض.",
      "حملات موجهة للجاليات التي تمتلك مقتنيات عائلية أو تراثية.",
      "إعلانات إعادة استهداف للمستخدمين الذين بدأوا التقييم ولم يدفعوا.",
    ],
    rolloutLabel: "ROLL-OUT PLAN",
    rolloutTitle: "خطة دخول الأسواق على مراحل",
    phases: [
      {
        title: "المرحلة الأولى",
        text: "اختبار العراق، الإمارات، تركيا، ومصر لأنها أسواق قريبة ثقافياً وفيها قابلية عالية لفهم فكرة التحف والمقتنيات.",
      },
      {
        title: "المرحلة الثانية",
        text: "التوسع إلى الولايات المتحدة، لندن، إيطاليا، وروسيا لاستهداف أسواق أعلى قيمة وجمهور أوسع من جامعي القطع والتجار.",
      },
      {
        title: "المرحلة الثالثة",
        text: "اختبار الهند وإيران بشكل موجه بسبب حجم الأسواق، تنوع المقتنيات، ووجود اهتمام بالأحجار الكريمة والقطع التراثية.",
      },
    ],
    conversionTitle: "الهدف ليس الوصول فقط… الهدف هو التحويل",
    conversionText:
      "أي حملة لا تقاس بعدد المشاهدات فقط، بل بعدد المستخدمين الذين رفعوا صورة، استلموا نتيجة، اشتروا تقريراً، اشتركوا، أو طلبوا استشارة. هذه هي الأرقام التي تهم المستثمر.",
    metricsTitle: "مؤشرات الأداء التي يجب مراقبتها",
    metrics: [
      "تكلفة اكتساب المستخدم",
      "نسبة التحويل إلى تقييم",
      "نسبة شراء التقرير المدفوع",
      "نسبة الاشتراك الشهري أو السنوي",
      "الأسواق الأعلى دفعاً",
      "متوسط قيمة المستخدم",
      "نسبة طلب الاستشارة مع خبير",
      "الاحتفاظ بالمستخدمين والعودة للتقييم",
    ],
    investorTitle: "النقطة المهمة للمستثمر",
    investorText:
      "KISHIB لا تحتاج انتشاراً عاماً فقط. تحتاج تسويقاً دقيقاً يذهب إلى الناس الذين يملكون قطعاً، يخافون من بيعها بسعر خاطئ، أو يحتاجون رأياً منظماً قبل اتخاذ القرار. هذا النوع من المستخدمين أقرب للدفع من جمهور الفضول العام.",
  },

  en: {
    dir: "ltr" as const,
    align: "text-left",
    sectionLabel: "MARKETING STRATEGY",
    title: "KISHIB’s marketing strategy targets markets with demand, value, and cross-border potential",
    intro:
      "KISHIB should not be marketed randomly. The platform speaks to a specific audience: antique owners, collectors, dealers, auction participants, gemstone users, and people who need a clearer understanding of the value of their possessions. The strategy is to enter selected markets, test conversion, then scale spend on the channels that prove commercial performance.",
    marketsTitle: "Target Marketing Markets",
    marketsText:
      "These markets were selected because they combine heritage ownership, buying and selling activity, international communities, interest in art and antiques, or purchasing power for evaluation and documentation services.",
    targetMarkets: [
      "Iraq",
      "Turkey",
      "Iran",
      "Egypt",
      "Russia",
      "United States",
      "United Arab Emirates",
      "India",
      "London / United Kingdom",
      "Italy",
    ],
    pillarsLabel: "GO-TO-MARKET PILLARS",
    pillarsTitle: "Core marketing pillars",
    pillars: [
      {
        icon: Search,
        title: "Search-driven user acquisition",
        text: "Target keywords around antique valuation, old item pricing, gemstone evaluation, collectible documentation, and inherited objects.",
      },
      {
        icon: Video,
        title: "High-retention short-form content",
        text: "Short videos showing real evaluation cases, before-and-after reports, mistakes in selling items too cheaply, and stories behind unusual objects.",
      },
      {
        icon: Users,
        title: "Community-based targeting",
        text: "Reach collectors, antique dealers, auction pages, gemstone communities, and diaspora audiences who may own inherited objects.",
      },
      {
        icon: ShieldCheck,
        title: "Trust before monetization",
        text: "Position KISHIB as a way to reduce risk and understand an item before selling, buying, documenting, or requesting expert consultation.",
      },
    ],
    channelsLabel: "CHANNEL STRATEGY",
    channelsTitle: "Recommended marketing channels",
    channels: [
      "Search ads segmented by country and language.",
      "TikTok and Instagram Reels built around rare item stories.",
      "YouTube Shorts explaining item value, markets, and evaluation logic.",
      "Partnerships with antique dealers, galleries, and auction operators.",
      "Facebook groups and communities for antiques, collectibles, and gemstones.",
      "LinkedIn outreach to investors, auction houses, galleries, and partners.",
      "Campaigns targeting diaspora communities with inherited or family-owned items.",
      "Retargeting users who started an evaluation but did not purchase or subscribe.",
    ],
    rolloutLabel: "ROLL-OUT PLAN",
    rolloutTitle: "Phased market entry plan",
    phases: [
      {
        title: "Phase One",
        text: "Test Iraq, UAE, Turkey, and Egypt first because they are culturally close markets with strong potential for antiques, collectibles, and inherited items.",
      },
      {
        title: "Phase Two",
        text: "Expand into the United States, London, Italy, and Russia to target higher-value markets and broader communities of collectors and dealers.",
      },
      {
        title: "Phase Three",
        text: "Run focused tests in India and Iran due to market size, heritage diversity, and interest in gemstones and cultural objects.",
      },
    ],
    conversionTitle: "The goal is not reach. The goal is conversion.",
    conversionText:
      "Campaigns should not be judged by views alone. They should be judged by how many users upload an image, receive a result, buy a report, subscribe, or request expert consultation. These are the numbers investors care about.",
    metricsTitle: "Key performance indicators to track",
    metrics: [
      "User acquisition cost",
      "Evaluation conversion rate",
      "Paid report purchase rate",
      "Monthly or annual subscription conversion",
      "Highest-paying markets",
      "Average user value",
      "Expert consultation request rate",
      "User retention and repeat evaluations",
    ],
    investorTitle: "The key investor point",
    investorText:
      "KISHIB does not need broad attention alone. It needs precise marketing toward people who own items, fear selling below value, or need structured guidance before making a decision. This user is much closer to payment than a general curiosity audience.",
  },
};

export default function MarketingStrategy({
  lang = "ar",
}: MarketingStrategyProps) {
  const t = content[lang];

  return (
    <section
      id="marketing"
      dir={t.dir}
      className={[
        "relative overflow-hidden bg-[#050302] px-5 py-24 text-white md:px-8 lg:px-10 xl:pl-52 xl:pr-16",
        t.align,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute right-[-180px] top-20 h-96 w-96 rounded-full bg-[#d7a35f]/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-[-160px] bottom-0 h-96 w-96 rounded-full bg-[#3a1c0b]/30 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7a35f]">
              {t.sectionLabel}
            </p>

            <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
              {t.title}
            </h2>
          </div>

          <div>
            <p className="text-lg leading-9 text-white/62">{t.intro}</p>
          </div>
        </div>

        <div className="mt-14 rounded-[2rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-7">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
                <Globe2 size={24} />
              </div>

              <h3 className="text-3xl font-semibold tracking-[-0.03em] text-white">
                {t.marketsTitle}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/58">
                {t.marketsText}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {t.targetMarkets.map((market) => (
                <div
                  key={market}
                  className="rounded-[1.25rem] border border-white/10 bg-black/25 px-4 py-4 text-sm font-semibold text-white/75"
                >
                  {market}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
          <div className="mb-8 flex items-center justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                {t.pillarsLabel}
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                {t.pillarsTitle}
              </h3>
            </div>

            <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987] sm:flex">
              <Target size={24} />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {t.pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.title}
                  className="rounded-[1.75rem] border border-white/10 bg-black/20 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#d7a35f]/35 hover:bg-white/[0.06]"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
                    <Icon size={22} />
                  </div>

                  <h4 className="text-lg font-semibold text-white">
                    {pillar.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-white/55">
                    {pillar.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                  {t.channelsLabel}
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                  {t.channelsTitle}
                </h3>
              </div>

              <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987] sm:flex">
                <Megaphone size={24} />
              </div>
            </div>

            <div className="grid gap-3">
              {t.channels.map((channel) => (
                <div
                  key={channel}
                  className="flex items-start gap-3 rounded-[1.25rem] border border-white/10 bg-black/20 p-4"
                >
                  <BadgeCheck
                    size={17}
                    className="mt-1 shrink-0 text-[#d7a35f]"
                  />

                  <p className="text-sm leading-7 text-white/62">{channel}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-7">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7a35f]">
                  {t.rolloutLabel}
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                  {t.rolloutTitle}
                </h3>
              </div>

              <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987] sm:flex">
                <Network size={24} />
              </div>
            </div>

            <div className="space-y-3">
              {t.phases.map((phase, index) => (
                <div
                  key={phase.title}
                  className="rounded-[1.35rem] border border-white/10 bg-black/25 p-5"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d7a35f] text-xs font-bold text-black">
                      {index + 1}
                    </span>

                    <h4 className="text-lg font-semibold text-white">
                      {phase.title}
                    </h4>
                  </div>

                  <p className="text-sm leading-7 text-white/60">
                    {phase.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.35rem] border border-white/10 bg-black/25 p-5">
              <div className="flex items-start gap-4">
                <BarChart3
                  size={22}
                  className="mt-1 shrink-0 text-[#d7a35f]"
                />

                <div>
                  <h4 className="text-base font-semibold text-white">
                    {t.conversionTitle}
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-white/60">
                    {t.conversionText}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.045] p-7">
            <div className="mb-7 flex items-center justify-between">
              <h3 className="text-3xl font-semibold tracking-[-0.03em] text-white">
                {t.metricsTitle}
              </h3>

              <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987] sm:flex">
                <BarChart3 size={24} />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {t.metrics.map((metric) => (
                <div
                  key={metric}
                  className="rounded-[1.25rem] border border-white/10 bg-black/20 p-4 text-sm font-semibold leading-7 text-white/62"
                >
                  {metric}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d7a35f]/20 bg-[#d7a35f]/[0.07] p-7">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#d7a35f]/15 text-[#f0c987]">
              <Sparkles size={24} />
            </div>

            <h3 className="mt-8 text-3xl font-semibold tracking-[-0.03em] text-white">
              {t.investorTitle}
            </h3>

            <p className="mt-5 text-base leading-8 text-white/62">
              {t.investorText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}