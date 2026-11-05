import "@/styles/site.css";
import type { AppProps } from "next/app";
import { LanguageProvider } from "@/i18n/LanguageContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}
