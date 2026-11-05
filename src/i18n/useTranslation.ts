import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function lookup(obj: any, path: string): unknown {
  return path.split('.').reduce<any>((acc, segment) => {
    if (acc == null) return acc;
    return acc[segment];
  }, obj);
}

export function useTranslation() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useTranslation must be used within <LanguageProvider>');
  }
  const { lang, setLang, locale, ready } = ctx;

  function t(path: string): string {
    const value = lookup(locale, path);
    if (typeof value === 'string') return value;
    if (process.env.NODE_ENV !== 'production') {
      console.warn(`[i18n] missing translation for "${path}" in lang="${lang}"`);
    }
    return path;
  }

  function tArray<T = unknown>(path: string): T[] {
    const value = lookup(locale, path);
    return Array.isArray(value) ? (value as T[]) : [];
  }

  function tObject<T = unknown>(path: string): T {
    const value = lookup(locale, path);
    return (value ?? {}) as T;
  }

  return { t, tArray, tObject, lang, setLang, ready };
}
