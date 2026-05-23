import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'
import { LanguageProvider } from '@/i18n/LanguageContext'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  )
}
