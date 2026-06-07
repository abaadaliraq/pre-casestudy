"use client";

import { ArrowLeft, Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

type Lang = "ar" | "en";

type FeasibilitySidebarProps = {
  lang?: Lang;
};

const content = {
  ar: {
    dir: "rtl" as const,
    back: "العودة للعرض التقديمي",
    toggle: "فتح أو إغلاق قائمة دراسة الجدوى",
    items: [
      { label: "التكاليف", href: "#costs" },
      { label: "التشغيل", href: "#operating-costs" },
      { label: "الإيرادات", href: "#revenue" },
      { label: "المستثمر", href: "#investor" },
      { label: "الاسترداد", href: "#payback" },
      { label: "الخلاصة", href: "#summary" },
    ],
  },
  en: {
    dir: "ltr" as const,
    back: "Back to Presentation",
    toggle: "Toggle feasibility menu",
    items: [
      { label: "Costs", href: "#costs" },
      { label: "Operations", href: "#operating-costs" },
      { label: "Revenue", href: "#revenue" },
      { label: "Investor", href: "#investor" },
      { label: "Payback", href: "#payback" },
      { label: "Summary", href: "#summary" },
    ],
  },
};

export default function FeasibilitySidebar({
  lang = "ar",
}: FeasibilitySidebarProps) {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#costs");
  const t = content[lang];
  const navItems = useMemo(() => t.items, [t.items]);

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));

    function updateActiveSection() {
      const current = sectionIds
        .map((id) => {
          const element = document.getElementById(id);
          if (!element) return null;

          const rect = element.getBoundingClientRect();
          return {
            id,
            distance: Math.abs(rect.top - window.innerHeight * 0.32),
            visible: rect.bottom > 120 && rect.top < window.innerHeight * 0.68,
          };
        })
        .filter(Boolean)
        .filter((item) => item?.visible)
        .sort((a, b) => (a?.distance ?? 0) - (b?.distance ?? 0))[0];

      if (current?.id) {
        setActiveHash(`#${current.id}`);
      }
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [navItems]);

  return (
    <>
      <aside
        dir={t.dir}
        className={[
          "fixed top-1/2 z-50 hidden -translate-y-1/2 lg:block",
          lang === "en" ? "right-6" : "left-6",
        ].join(" ")}
      >
        <nav className="flex flex-col items-start gap-2 rounded-[2rem] border border-white/10 bg-black/20 px-3 py-4 backdrop-blur-xl">
          <Link
            href="/"
            className="group mb-2 flex min-w-[150px] items-center justify-between gap-3 rounded-full border border-[#d7a35f]/25 bg-[#d7a35f]/10 px-4 py-2.5 text-[12px] font-bold text-[#f0c987] transition hover:bg-[#d7a35f] hover:text-black"
          >
            {t.back}
            <ArrowLeft size={13} />
          </Link>

          <div className="h-px w-full bg-white/10" />

          {navItems.map((item) => {
            const active = activeHash === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                className={[
                  "group relative flex min-w-[150px] items-center rounded-full px-4 py-2.5 text-[12px] font-medium transition duration-300",
                  active
                    ? "bg-white text-black shadow-lg shadow-white/10"
                    : "text-white/70 hover:bg-white/10 hover:text-white",
                ].join(" ")}
              >
                <span
                  className={[
                    lang === "ar" ? "ml-2" : "mr-2",
                    "h-1.5 w-1.5 rounded-full transition",
                    active ? "bg-black" : "bg-white/35 group-hover:bg-white",
                  ].join(" ")}
                />
                {item.label}
              </a>
            );
          })}
        </nav>
      </aside>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="fixed left-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-xl lg:hidden"
        aria-label={t.toggle}
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {open && (
        <div
          dir={t.dir}
          className="fixed inset-x-4 top-16 z-50 rounded-[1.5rem] border border-white/10 bg-black/75 p-3 backdrop-blur-2xl lg:hidden"
        >
          <nav className="grid grid-cols-2 gap-2">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="col-span-2 flex items-center justify-center gap-2 rounded-2xl bg-[#d7a35f] px-4 py-3 text-sm font-bold text-black"
            >
              {t.back}
              <ArrowLeft size={15} />
            </Link>

            {navItems.map((item) => {
              const active = activeHash === item.href;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={[
                    "rounded-2xl px-4 py-3 text-sm font-medium transition",
                    active
                      ? "bg-white text-black"
                      : "bg-white/[0.06] text-white/75 hover:bg-white/[0.12] hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
