import {
  ArrowUpRight,
  Globe2,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

type Lang = "ar" | "en";

type FooterProps = {
  lang?: Lang;
};

const platformUrl = "https://antiques-lens.vercel.app/";
const abaadWebsite = "https://abaadaliraq.com";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/abaad.aliraq",
    short: "IG",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/aliraqdiementions",
    short: "FB",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@abaad.aliraq",
    short: "YT",
  },
  {
    label: "Website",
    href: abaadWebsite,
    short: "WEB",
  },
];

const content = {
  ar: {
    dir: "rtl" as const,
    align: "text-right",
    brandLine: "KISHIB Investor Case Study",
    title: "KISHIB",
    description:
      "منصة متخصصة لتقييم التحف، المقتنيات التراثية، الأعمال الفنية، والاحجار الكريمة، مصممة لتكون منتجاً رقمياً قابلاً للتوسع التجاري محلياً وعالمياً.",
    sectionsTitle: "أقسام العرض",
    contactTitle: "تواصل معنا",
    platformButton: "فتح منصة KISHIB",
    rights: "جميع الحقوق محفوظة",
    builtBy: "تم تطوير العرض بواسطة Abaad Al Iraq",
    nav: [
      { label: "الرئيسية", href: "#home" },
      { label: "هوية KISHIB", href: "#presentation-map" },
      { label: "فكرة المشروع", href: "#project-brief" },
      { label: "تطوير المنتج", href: "#development" },
      { label: "فرصة السوق", href: "#market" },
      { label: "نموذج الإيرادات", href: "#revenue" },
      { label: "عائد المستثمر", href: "#investor" },
      { label: "تكاليف المشروع", href: "#costs" },
      { label: "استراتيجية التسويق", href: "#marketing" },
      { label: "الموقع التنافسي", href: "#comparison" },
      { label: "الطلب الاستثماري", href: "#summary" },
    ],
    contact: {
      phone: "07770350030",
      email: "abaadaliraq07@gmail.com",
      location: "بغداد، شارع أبو نؤاس",
    },
  },

  en: {
    dir: "ltr" as const,
    align: "text-left",
    brandLine: "KISHIB Investor Case Study",
    title: "KISHIB",
    description:
      "A specialized platform for evaluating antiques, heritage collectibles, artworks, and gemstones, designed as a commercially scalable digital product for local and international markets.",
    sectionsTitle: "Presentation Sections",
    contactTitle: "Contact",
    platformButton: "Open KISHIB Platform",
    rights: "All rights reserved",
    builtBy: "Presentation developed by Abaad Al Iraq",
    nav: [
      { label: "Home", href: "#home" },
      { label: "KISHIB Identity", href: "#presentation-map" },
      { label: "Project Overview", href: "#project-brief" },
      { label: "Product Development", href: "#development" },
      { label: "Market Opportunity", href: "#market" },
      { label: "Revenue Model", href: "#revenue" },
      { label: "Investor Return", href: "#investor" },
      { label: "Project Costs", href: "#costs" },
      { label: "Marketing Strategy", href: "#marketing" },
      { label: "Competitive Position", href: "#comparison" },
      { label: "Final Investment Ask", href: "#summary" },
    ],
    contact: {
      phone: "07770350030",
      email: "abaadaliraq07@gmail.com",
      location: "Baghdad, Abu Nuwas Street",
    },
  },
};

export default function Footer({ lang = "ar" }: FooterProps) {
  const t = content[lang];

  return (
    <footer
      dir={t.dir}
      className={[
        "relative overflow-hidden border-t border-white/10 bg-[#050302] px-5 py-16 text-white md:px-8 lg:px-10 xl:pl-52 xl:pr-16",
        t.align,
      ].join(" ")}
    >
      <div className="pointer-events-none absolute right-[-160px] top-0 h-80 w-80 rounded-full bg-[#d7a35f]/10 blur-[120px]" />
      <div className="pointer-events-none absolute left-[-160px] bottom-0 h-80 w-80 rounded-full bg-[#3a1c0b]/35 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr_0.8fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#d7a35f]">
              {t.brandLine}
            </p>

            <h2 className="text-5xl font-semibold tracking-[-0.06em] text-white md:text-6xl">
              {t.title}
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/55">
              {t.description}
            </p>

            <a
              href={platformUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[#d7a35f] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#f0c987]"
            >
              {t.platformButton}
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              {t.sectionsTitle}
            </h3>

            <div className="mt-5 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {t.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-white/50 transition hover:text-[#f0c987]"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">
              {t.contactTitle}
            </h3>

            <div className="mt-5 space-y-4">
              <a
                href={`tel:${t.contact.phone}`}
                className="flex items-center gap-3 text-sm text-white/55 transition hover:text-[#f0c987]"
              >
                <Phone size={16} className="text-[#d7a35f]" />
                {t.contact.phone}
              </a>

              <a
                href={`mailto:${t.contact.email}`}
                className="flex items-center gap-3 text-sm text-white/55 transition hover:text-[#f0c987]"
              >
                <Mail size={16} className="text-[#d7a35f]" />
                {t.contact.email}
              </a>

              <div className="flex items-center gap-3 text-sm text-white/55">
                <MapPin size={16} className="text-[#d7a35f]" />
                {t.contact.location}
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
  <a
    key={link.label}
    href={link.href}
    target="_blank"
    rel="noreferrer"
    aria-label={link.label}
    className="flex h-11 min-w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-3 text-[11px] font-bold text-white/65 transition hover:border-[#d7a35f]/40 hover:bg-[#d7a35f]/10 hover:text-[#f0c987]"
  >
    {link.short}
  </a>
))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} KISHIB. {t.rights}.
          </p>

          <p>{t.builtBy}</p>
        </div>
      </div>
    </footer>
  );
}