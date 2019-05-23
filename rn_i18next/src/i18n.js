import i18n from "i18next";
import LanguageDetector from "i18next-react-native-language-detector";
import en from './locales/en'
import de from './locales/de'

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en,
    de
  },

  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;
