import { getCssText } from "@/styles";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta name="description" content="Cauê Enrico — Arquiteto de Software e Desenvolvedor Full Stack. .NET 8, Node.js, Python, React, Angular, Azure DevOps, AWS. Guarujá, SP." />
        <meta name="keywords" content="Arquiteto de Software, Software Architect, Full Stack, .NET, Node.js, React, Angular, Azure, AWS, DevOps, Guarujá, São Paulo" />
        <meta name="author" content="Cauê Enrico" />
        <meta property="og:title" content="Cauê Enrico — Arquiteto de Software" />
        <meta property="og:description" content="Arquiteto de Software com foco em sistemas escaláveis, integrações corporativas e entrega em produção." />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#08090E" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />

        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
