"use client";

import { useState } from "react";
import {
  BadgeCheck,
  Fingerprint,
  Landmark,
  Palette,
  ScrollText,
  ShieldCheck,
  X,
} from "lucide-react";

type Lang = "ar" | "en";

type PresentationMapProps = {
  lang?: Lang;
};

const content = {
  ar: {
    dir: "rtl" as const,
    align: "text-right",
    badge: "BRAND IDENTITY",
    title: "معنى اسم KISHIB وهوية المنصة",
    intro:
      "الاسم مأخوذ من فكرة الختم الرافديني؛ رمز التوثيق، الهوية، والأصالة. لذلك بُنيت هوية KISHIB على معنى حفظ القيمة وربط القطعة بقصتها ومصدرها.",
    identityBadge: "KISHIB = الختم، الهوية، التوثيق",
    mainTitle: "من ختمٍ سومري إلى هوية تحفظ قيمة القطع",
    mainText:
      "في حضارة بلاد الرافدين، كان الختم وسيلة رسمية لتأكيد الملكية والأصالة. ومن هذا المعنى جاءت هوية KISHIB: منصة تتعامل مع القطع التراثية باعتبارها ذاكرة لها أصل، قصة، وسوق.",
    uses: ["توثيق الملكية", "إثبات الهوية", "تأكيد الأصالة", "حفظ القيمة"],
    visualLabel: "VISUAL REFERENCES",
    visualTitle: "صور الهوية والإلهام البصري",
    clickText: "اضغط لعرض الصورة بحجم أكبر",
    closeLabel: "إغلاق الصورة",
    identityPoints: [
      {
        title: "أصل الاسم",
        text: "KISHIB مستوحى من الختم الأسطواني في حضارة بلاد الرافدين، وهو أداة كانت تُستخدم لتوثيق الملكية، تثبيت الهوية، وختم الوثائق.",
        icon: ScrollText,
      },
      {
        title: "فكرة الختم",
        text: "اختيار الاسم يربط المنصة بفكرة التوثيق والثقة؛ فكل قطعة تراثية تحتاج إلى قراءة واضحة لهويتها، أصلها، وقيمتها.",
        icon: ShieldCheck,
      },
      {
        title: "الرمز البصري",
        text: "الشعار يعتمد على لوح طيني متضرر يرمز إلى الذاكرة القديمة، مع نخلة تمثل الجذر الحضاري والهوية العراقية.",
        icon: Landmark,
      },
      {
        title: "الهوية اللونية",
        text: "الألوان الترابية والذهبية مستوحاة من الطين، الأختام، القطع الأثرية، والمتاحف، حتى تعطي إحساساً بالثقة والفخامة.",
        icon: Palette,
      },
    ],
    galleryImages: [
      {
        src: "/kishib.png",
        alt: "شعار KISHIB الرئيسي",
        title: "الشعار الرئيسي",
      },
      {
        src: "/kishib-meaning.png",
        alt: "معلومات عن معنى شعار KISHIB والكيشيب",
        title: "معلومات عن الشعار والكيشيب",
      },
      {
        src: "/kishib-app-icon.png",
        alt: "أيقونة تطبيق KISHIB",
        title: "أيقونة تطبيق KISHIB",
      },
    ],
  },

  en: {
    dir: "ltr" as const,
    align: "text-left",
    badge: "BRAND IDENTITY",
    title: "The Meaning Behind KISHIB and Its Visual Identity",
    intro:
      "The name is inspired by the Mesopotamian cylinder seal: a symbol of documentation, identity, and authenticity. KISHIB builds its identity around preserving value and connecting each item to its story and origin.",
    identityBadge: "KISHIB = Seal, Identity, Documentation",
    mainTitle: "From a Sumerian seal to a platform identity",
    mainText:
      "In ancient Mesopotamia, the seal was an official tool used to confirm ownership and authenticity. This meaning shaped KISHIB’s identity: a platform that treats heritage items as objects with origin, story, and market value.",
    uses: [
      "Property Documentation",
      "Identity Verification",
      "Authenticity Confirmation",
      "Value Preservation",
    ],
    visualLabel: "VISUAL REFERENCES",
    visualTitle: "Visual Identity and Brand References",
    clickText: "Click to view larger image",
    closeLabel: "Close image",
    identityPoints: [
      {
        title: "Name Origin",
        text: "KISHIB is inspired by the cylinder seal in Mesopotamian civilization, a tool used to document ownership, establish identity, and seal records.",
        icon: ScrollText,
      },
      {
        title: "Seal Concept",
        text: "The name connects the platform to documentation and trust. Every heritage item needs a clear reading of its identity, origin, and value.",
        icon: ShieldCheck,
      },
      {
        title: "Visual Symbol",
        text: "The logo is based on a damaged clay tablet, representing ancient memory, with a palm tree symbolizing Iraqi roots and cultural identity.",
        icon: Landmark,
      },
      {
        title: "Color Identity",
        text: "The earthy and golden palette is inspired by clay, seals, artifacts, and museums, giving the brand a sense of trust and refinement.",
        icon: Palette,
      },
    ],
    galleryImages: [
      {
        src: "/kishib.png",
        alt: "KISHIB main logo",
        title: "Main Logo",
      },
      {
        src: "/kishib-meaning.png",
        alt: "KISHIB logo meaning and brand information",
        title: "Logo and KISHIB Meaning",
      },
      {
        src: "/kishib-app-icon.png",
        alt: "KISHIB application icon",
        title: "KISHIB App Icon",
      },
    ],
  },
};

export default function PresentationMap({ lang = "ar" }: PresentationMapProps) {
  const t = content[lang];

  const [openedImage, setOpenedImage] = useState<
    (typeof t.galleryImages)[0] | null
  >(null);

  return (
    <section
      id="presentation-map"
      dir={t.dir}
      className={[
        "relative overflow-hidden bg-[#050302] px-5 py-24 text-white md:px-8 lg:px-10 xl:pl-52 xl:pr-16",
        t.align,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute right-[-140px] top-20 h-96 w-96 rounded-full bg-[#d7a35f]/15 blur-[130px]" />
      <div className="pointer-events-none absolute left-[-160px] bottom-10 h-96 w-96 rounded-full bg-[#7b3f1e]/20 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7a35f]">
            {t.badge}
          </p>

          <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-white md:text-6xl">
            {t.title}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-9 text-white/60">
            {t.intro}
          </p>
        </div>

        <div className="mb-10 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2.2rem] border border-white/10 bg-white/[0.045] p-7 md:p-8">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#d7a35f]/25 bg-[#d7a35f]/10 px-4 py-2 text-xs font-semibold text-[#f0c987]">
              <Fingerprint size={15} />
              {t.identityBadge}
            </div>

            <h3 className="text-3xl font-semibold tracking-[-0.04em] text-white md:text-4xl">
              {t.mainTitle}
            </h3>

            <p className="mt-5 text-base leading-8 text-white/60">
              {t.mainText}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.uses.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm font-semibold text-white/75"
                >
                  <BadgeCheck size={17} className="text-[#d7a35f]" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.2rem] border border-[#d7a35f]/18 bg-[#f3e8d2] p-5 shadow-2xl shadow-black/30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff_0%,transparent_45%)] opacity-50" />

            <div className="relative flex min-h-[360px] items-center justify-center">
              <img
                src="/kishib.png"
                alt="KISHIB logo"
                className="h-auto w-full max-w-[430px] object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mb-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {t.identityPoints.map((point) => {
            const Icon = point.icon;

            return (
              <div
                key={point.title}
                className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#d7a35f]/35 hover:bg-white/[0.065]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#d7a35f]/12 text-[#f0c987]">
                  <Icon size={22} />
                </div>

                <h4 className="text-xl font-semibold tracking-[-0.03em] text-white">
                  {point.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-white/55">
                  {point.text}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="mb-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d7a35f]">
              {t.visualLabel}
            </p>

            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white">
              {t.visualTitle}
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {t.galleryImages.map((image) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setOpenedImage(image)}
                className={[
                  "group overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.04] p-3 transition duration-300 hover:-translate-y-1 hover:border-[#d7a35f]/35 hover:bg-white/[0.07]",
                  t.align,
                ].join(" ")}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-[#f3e8d2]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="px-2 pb-2 pt-4">
                  <p className="text-sm font-semibold text-white">
                    {image.title}
                  </p>

                  <p className="mt-1 text-xs text-white/45">{t.clickText}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {openedImage && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 px-4 backdrop-blur-md"
          onClick={() => setOpenedImage(null)}
        >
          <button
            type="button"
            onClick={() => setOpenedImage(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20"
            aria-label={t.closeLabel}
          >
            <X size={20} />
          </button>

          <div
            className="relative h-[82vh] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/15 bg-[#0b0704]"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={openedImage.src}
              alt={openedImage.alt}
              className="h-full w-full object-contain"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-6">
              <p className={[t.align, "text-lg font-semibold text-white"].join(" ")}>
                {openedImage.title}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}