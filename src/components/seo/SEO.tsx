import Head from 'next/head';
import { useTranslation } from '@/i18n/useTranslation';

const SITE_URL = 'https://caueenrico.vercel.app';
const OG_IMAGE = `${SITE_URL}/og-image.png`;

const PERSON_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Cauê Enrico',
  jobTitle: 'Solutions Architect',
  worksFor: { '@type': 'Organization', name: 'Ultracargo' },
  address: { '@type': 'PostalAddress', addressCountry: 'BR' },
  url: SITE_URL,
  sameAs: [
    'https://www.linkedin.com/in/caue-enrico/',
    'https://github.com/caueenrico',
  ],
  alumniOf: [
    { '@type': 'EducationalOrganization', name: 'Anhembi Morumbi University' },
    { '@type': 'EducationalOrganization', name: 'Ka Solution' },
    { '@type': 'EducationalOrganization', name: 'Rocketseat' },
  ],
};

export function SEO() {
  const { t, lang } = useTranslation();
  const title = t('meta.title');
  const description = t('meta.description');
  const ogLocale = t('meta.ogLocale');
  const canonicalUrl = lang === 'pt' ? `${SITE_URL}/?lang=pt` : `${SITE_URL}/?lang=en`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Cauê Enrico" />

      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="pt-BR" href={`${SITE_URL}/?lang=pt`} />
      <link rel="alternate" hrefLang="en" href={`${SITE_URL}/?lang=en`} />
      <link rel="alternate" hrefLang="x-default" href={SITE_URL} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={ogLocale} />
      <meta property="og:image" content={OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_JSON_LD) }}
      />
    </Head>
  );
}
