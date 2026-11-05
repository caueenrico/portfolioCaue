import { useTranslation } from "@/i18n/useTranslation";
import type { Lang } from "@/i18n/detectLanguage";

const OPTIONS: Lang[] = ["pt", "en"];

export function LanguageToggle() {
  const { lang, setLang } = useTranslation();

  return (
    <div className="lang" role="group" aria-label="Idioma / Language">
      {OPTIONS.map((option) => (
        <button
          key={option}
          type="button"
          aria-pressed={lang === option}
          className={lang === option ? "is-active" : ""}
          onClick={() => setLang(option)}
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
