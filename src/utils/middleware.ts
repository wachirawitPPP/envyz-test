export function validateLocale(locale: any): string {
    const allowedLocales = ['en', 'th'];
    return allowedLocales.includes(locale) ? locale : 'en'; // Default fallback
  }
  