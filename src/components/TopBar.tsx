"use client";

import Link from "next/link";
import { ExternalLink, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "الرئيسية", href: "#home" },
  { label: "الخريطة", href: "#presentation-map" },
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

const platformUrl = "https://antiques-lens.vercel.app/";

export default function TopBar() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#home");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveHash(`#${visible.target.id}`);
        }
      },
      {
        root: null,
        threshold: [0.22, 0.35, 0.5],
        rootMargin: "-20% 0px -55% 0px",
      }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 lg:block">
        <nav className="flex flex-col items-start gap-2 rounded-[2rem] border border-white/10 bg-black/15 px-3 py-4 backdrop-blur-xl">
          {navItems.map((item) => {
            const active = activeHash === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                className={[
                  "group relative flex min-w-[128px] items-center rounded-full px-4 py-2.5 text-[12px] font-medium transition duration-300",
                  active
                    ? "bg-white text-black shadow-lg shadow-white/10"
                    : "text-white/70 hover:bg-white/10 hover:text-white",
                ].join(" ")}
              >
                <span
                  className={[
                    "mr-2 h-1.5 w-1.5 rounded-full transition",
                    active ? "bg-black" : "bg-white/35 group-hover:bg-white",
                  ].join(" ")}
                />
                {item.label}
              </a>
            );
          })}

          <div className="my-2 h-px w-full bg-white/10" />

          <Link
            href={platformUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex min-w-[128px] items-center justify-between rounded-full border border-[#d7a35f]/25 bg-[#d7a35f]/10 px-4 py-2.5 text-[12px] font-bold text-[#f0c987] transition hover:bg-[#d7a35f] hover:text-black"
          >
            فتح المنصة
            <ExternalLink size={13} />
          </Link>
        </nav>
      </aside>

      {/* Mobile Floating Button */}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="fixed left-4 top-4 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white backdrop-blur-xl lg:hidden"
        aria-label="Toggle menu"
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-x-4 top-16 z-50 rounded-[1.5rem] border border-white/10 bg-black/75 p-3 backdrop-blur-2xl lg:hidden">
          <nav className="grid grid-cols-2 gap-2">
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

            <Link
              href={platformUrl}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="col-span-2 flex items-center justify-center gap-2 rounded-2xl bg-[#d7a35f] px-4 py-3 text-sm font-bold text-black"
            >
              فتح منصة Antique Lens
              <ExternalLink size={15} />
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}