import { createContext, useCallback, useEffect, useMemo, useState, ReactNode } from 'react';
import { useRouter } from 'next/router';
import pt from './locales/pt.json';
import en from './locales/en.json';
import { detectLanguage, Lang, STORAGE_KEY, QUERY_KEY } from './detectLanguage';

type Locale = typeof pt;

interface LanguageContextValue {
  lang: Lang;
  setLang: (next: Lang) => void;
  locale: Locale;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

const LOCALES: Record<Lang, Locale> = { pt, en: en as Locale };

function readInitialLang(): Lang {
  if (typeof document !== 'undefined') {
    const fromDataset = document.documentElement.dataset.lang;
    if (fromDataset === 'pt' || fromDataset === 'en') return fromDataset;
  }
  return detectLanguage();
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    setLangState(readInitialLang());
  }, []);

  useEffect(() => {
    const q = router.query[QUERY_KEY];
    if (q === 'pt' || q === 'en') {
      setLangState(q);
    }
  }, [router.query]);

  const setLang = useCallback(
    (next: Lang) => {
      setLangState(next);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(STORAGE_KEY, next);
        document.documentElement.lang = LOCALES[next].meta.htmlLang;
        document.documentElement.dataset.lang = next;
      }
      router.replace(
        { pathname: router.pathname, query: { ...router.query, [QUERY_KEY]: next } },
        undefined,
        { shallow: true, scroll: false }
      );
    },
    [router]
  );

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, locale: LOCALES[lang] }),
    [lang, setLang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
