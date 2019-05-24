import { setupI18n } from "@lingui/core";
import enMessages from "./locales/en/messages.js";
import csMessages from "./locales/cs/messages.js";

export const i18n = setupI18n({
  language: "en",
  catalogs: {
    en: enMessages,
    cs: csMessages
  }
});

export const changeActiveLanguage = newActiveLanguage => {
  const catalog =
    newActiveLanguage === "en" ? { en: enMessages } : { cs: csMessages };
  i18n.load(catalog);
  i18n.activate(newActiveLanguage);
  return i18n;
};
