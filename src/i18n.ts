type Translations = Record<string, string>;

const translations: Record<string, Translations> = {
  en: await import("./i18n/en.json").then((mod) => mod.default),
  fr: await import("./i18n/fr.json").then((mod) => mod.default),
  th: await import("./i18n/th.json").then((mod) => mod.default),
  la: await import("./i18n/la.json").then((mod) => mod.default),
};

// Get translations for a specific locale
export const getTranslations = (locale: string): Translations => {
  return translations[locale] || translations["en"]; // Fallback to English
};

// Translate a specific key
export const t = (locale: string, key: string): string => {
  const localeTranslations = getTranslations(locale);
  return localeTranslations[key] || key; // Fallback to the key itself
};
