import { Html, Head, Main, NextScript } from "next/document";

const ANTI_FOUC_SCRIPT = `
(function () {
  try {
    var STORAGE_KEY = 'portfolio-lang';
    var QUERY_KEY = 'lang';
    function normalize(input) {
      if (!input) return null;
      var lower = String(input).toLowerCase();
      if (lower === 'pt' || lower.indexOf('pt-') === 0 || lower.indexOf('pt_') === 0) return 'pt';
      if (lower === 'en' || lower.indexOf('en-') === 0 || lower.indexOf('en_') === 0) return 'en';
      return null;
    }
    var search = window.location.search;
    var queryParam = new URLSearchParams(search).get(QUERY_KEY);
    var stored = null;
    try { stored = window.localStorage.getItem(STORAGE_KEY); } catch (e) {}
    var lang = normalize(queryParam) || normalize(stored) || normalize(navigator.language) || 'en';
    var root = document.documentElement;
    root.lang = lang === 'pt' ? 'pt-BR' : 'en';
    root.dataset.lang = lang;
    root.classList.add('js');
  } catch (e) {
    document.documentElement.lang = 'en';
    document.documentElement.dataset.lang = 'en';
  }
})();
`.trim();

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,300..900&family=IBM+Plex+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#EEEAE2" />
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: ANTI_FOUC_SCRIPT }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
