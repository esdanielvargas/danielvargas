import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { es, en, ca, fr } from "./i18n/index.js";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      es: {
        translation: es,
      },
      en: {
        translation: en,
      },
      ca: {
        translation: ca,
      },
      fr: {
        translation: fr,
      },
    },
  });

export default i18n;
