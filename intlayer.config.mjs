import { Locales } from "intlayer";

/** @type {import('intlayer').IntlayerConfig} */
const config = {
  internationalization: {
    locales: [
      Locales.SPANISH, 
      Locales.ENGLISH, 
      Locales.FRENCH
    ],
    defaultLocale: Locales.SPANISH,
  },
};

export default config;
