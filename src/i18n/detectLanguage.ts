export type Lang = 'pt' | 'en';

export const STORAGE_KEY = 'portfolio-lang';
export const QUERY_KEY = 'lang';

export function normalize(input: string | null | undefined): Lang | null {
  if (!input) return null;
  const lower = input.toLowerCase();
  if (lower === 'pt' || lower.startsWith('pt-') || lower.startsWith('pt_')) return 'pt';
  if (lower === 'en' || lower.startsWith('en-') || lower.startsWith('en_')) return 'en';
  return null;
}

export function detectLanguage(opts?: {
  search?: string;
  storage?: Storage | null;
  navigatorLang?: string | null;
}): Lang {
  const search = opts?.search ?? (typeof window !== 'undefined' ? window.location.search : '');
  const storage = opts?.storage ?? (typeof window !== 'undefined' ? window.localStorage : null);
  const navLang = opts?.navigatorLang ?? (typeof navigator !== 'undefined' ? navigator.language : null);

  const queryParam = new URLSearchParams(search).get(QUERY_KEY);
  const fromQuery = normalize(queryParam);
  if (fromQuery) return fromQuery;

  const stored = storage ? storage.getItem(STORAGE_KEY) : null;
  const fromStorage = normalize(stored);
  if (fromStorage) return fromStorage;

  const fromNav = normalize(navLang);
  if (fromNav) return fromNav;

  return 'en';
}
