import Link from "next/link";
import { ExternalLink } from "lucide-react";

const sectionLinks = [
  { label: "فكرة المشروع", href: "#project-brief" },
  { label: "التطوير", href: "#development" },
  { label: "السوق", href: "#market" },
  { label: "الإيرادات", href: "#revenue" },
  { label: "المستثمر", href: "#investor" },
  { label: "التكاليف", href: "#costs" },
  { label: "التسويق", href: "#marketing" },
  { label: "المقارنة", href: "#comparison" },
  { label: "الخلاصة", href: "#summary" },
];

const socialLinks = [
  {
    label: "Instagram",
    short: "IG",
    href: "https://www.instagram.com/abaad.aliraq/",
  },
  {
    label: "Facebook",
    short: "FB",
    href: "https://www.facebook.com/aliraqdiementions",
  },
  {
    label: "YouTube",
    short: "YT",
    href: "https://www.youtube.com/@abaad.aliraq",
  },
  {
    label: "Antique Lens",
    short: "WEB",
    href: "https://antiques-lens.vercel.app/",
  },
];

export default function Footer() {
  return (
    <footer
      dir="rtl"
      className="relative overflow-hidden border-t border-white/10 bg-[#030201] px-5 py-14 text-right md:px-8 lg:px-10 xl:pl-52 xl:pr-16"
    >
      <div className="pointer-events-none absolute left-10 top-0 text-[16vw] font-semibold leading-none tracking-[-0.08em] text-white/[0.025]">
        ANTIQUE
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.95fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d7a35f]">
              Abaad Al Iraq
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
              Antique Lens
            </h2>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/50">
              عرض استثماري ودراسة جدوى لمنصة تقييم التحف والمقتنيات بالذكاء
              الاصطناعي. جميع الأرقام تقديرية وتخضع للمراجعة المالية والقانونية
              قبل توقيع أي اتفاق استثماري.
            </p>

            <Link
              href="https://antiques-lens.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#d7a35f] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#f0c987]"
            >
              زيارة منصة Antique Lens
              <ExternalLink size={16} />
            </Link>
          </div>

          <div className="space-y-8">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/35">
                أقسام العرض
              </p>

              <div className="flex flex-wrap gap-2 lg:justify-end">
                {sectionLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/60 transition hover:border-[#d7a35f]/35 hover:bg-white/[0.07] hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-white/35">
                روابط أبعاد العراق
              </p>

              <div className="flex flex-wrap gap-2 lg:justify-end">
                {socialLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold text-white/62 transition hover:border-[#d7a35f]/35 hover:bg-white/[0.08] hover:text-white"
                  >
                    <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#d7a35f]/12 px-2 text-[10px] font-bold text-[#f0c987]">
                      {item.short}
                    </span>

                    <span>{item.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/35 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Abaad Al Iraq. All rights reserved.</p>

          <p>Investor Case Study · Antique Lens · AI Valuation Platform</p>
        </div>
      </div>
    </footer>
  );
}