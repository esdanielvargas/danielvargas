import { useTranslation } from "react-i18next";
import { useLang } from "../context/LangContext";

export default function LanguageDropdown() {
  const { lang, toggleLang } = useLang();
  const { i18n } = useTranslation();

  const lngs = {
    es: { nativeName: "Español", show: true, available: true },
    en: { nativeName: "English", show: true, available: true },
    ca: { nativeName: "Català", show: true, available: true },
    fr: { nativeName: "Français", show: true, available: true },
    it: { nativeName: "Italiano", show: false, available: false },
    pt: { nativeName: "Português", show: false, available: false },
    de: { nativeName: "Deutsch", show: false, available: false },
    ptx: { nativeName: "Português", show: false, available: false },
  };

  return (
    <div
      className={`w-40 max-h-100 p-1 mt-2 absolute top-full right-0 flex flex-col gap-0.5 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-900 bg-neutral-50/95 dark:bg-neutral-950/95 backdrop-blur-xl transition-all duration-300 ease-out ${lang
        ? "opacity-100 visible translate-y-0"
        : "opacity-0 invisible -translate-y-10"
        }`}
    >
      {Object.keys(lngs).map(
        (lng) =>
          lngs[lng].show && (
            <button
              key={lng}
              onClick={() => {
                toggleLang();
                i18n.changeLanguage(lng);
              }}
              title={`Change to ${lngs[lng].nativeName}`}
              aria-label={`Change to ${lngs[lng].nativeName}`}
              className={`w-full h-10 px-3 text-left text-sm md:text-md font-text cursor-pointer rounded-md border border-neutral-200/50 dark:border-neutral-800/50 hover:bg-neutral-200/35 dark:hover:bg-neutral-900/35 transition-all duration-300 ease-out ${i18n.resolvedLanguage === lng
                ? "font-bold text-neutral-950 dark:text-neutral-50 bg-neutral-200/75 dark:bg-neutral-900/75 backdrop-blur-xl"
                : "text-neutral-800 dark:text-neutral-200"
                } ${lngs[lng].available ? "" : "!text-neutral-400 !cursor-not-allowed opacity-60 hover:bg-transparent"
                }`}
              disabled={!lngs[lng].available}
            >
              {lngs[lng].nativeName}
            </button>
          )
      )}
    </div>
  );
}
