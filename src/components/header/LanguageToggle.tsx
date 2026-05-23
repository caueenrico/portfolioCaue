import { useTranslation } from '@/i18n/useTranslation';
import type { CSSProperties } from 'react';

interface LanguageToggleProps {
  variant?: 'header' | 'drawer';
}

const baseStyle: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  fontFamily: "'DM Mono', monospace",
  fontSize: '0.78rem',
  letterSpacing: '0.08em',
  userSelect: 'none',
};

const buttonStyleBase: CSSProperties = {
  background: 'none',
  border: 'none',
  padding: '2px 4px',
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  letterSpacing: 'inherit',
  transition: 'color 160ms ease',
};

export function LanguageToggle({ variant = 'header' }: LanguageToggleProps) {
  const { lang, setLang } = useTranslation();

  const activeColor = '#E8A838';
  const inactiveColor = variant === 'drawer' ? 'rgba(240,240,245,0.55)' : 'rgba(240,240,245,0.45)';

  const ptStyle = { ...buttonStyleBase, color: lang === 'pt' ? activeColor : inactiveColor };
  const enStyle = { ...buttonStyleBase, color: lang === 'en' ? activeColor : inactiveColor };

  return (
    <div style={baseStyle} role="group" aria-label="Language toggle">
      <button
        type="button"
        style={ptStyle}
        aria-pressed={lang === 'pt'}
        onClick={() => setLang('pt')}
      >
        PT
      </button>
      <span style={{ color: 'rgba(240,240,245,0.25)' }}>|</span>
      <button
        type="button"
        style={enStyle}
        aria-pressed={lang === 'en'}
        onClick={() => setLang('en')}
      >
        EN
      </button>
    </div>
  );
}
