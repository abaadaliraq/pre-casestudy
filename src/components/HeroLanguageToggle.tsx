"use client";

type Lang = "ar" | "en";

type HeroLanguageToggleProps = {
  lang: Lang;
  onChange: (lang: Lang) => void;
};

export default function HeroLanguageToggle({
  lang,
  onChange,
}: HeroLanguageToggleProps) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/15 bg-black/25 p-1 backdrop-blur-xl">
      <button
        type="button"
        onClick={() => onChange("ar")}
        className={[
          "rounded-full px-4 py-2 text-xs font-bold transition",
          lang === "ar"
            ? "bg-[#d7a35f] text-black shadow-lg shadow-[#d7a35f]/20"
            : "text-white/55 hover:text-white",
        ].join(" ")}
      >
        عربي
      </button>

      <button
        type="button"
        onClick={() => onChange("en")}
        className={[
          "rounded-full px-4 py-2 text-xs font-bold transition",
          lang === "en"
            ? "bg-[#d7a35f] text-black shadow-lg shadow-[#d7a35f]/20"
            : "text-white/55 hover:text-white",
        ].join(" ")}
      >
        English
      </button>
    </div>
  );
}