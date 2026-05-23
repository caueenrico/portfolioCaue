/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://caueenrico.vercel.app',
  generateRobotsTxt: false,
  outDir: './public',
  additionalPaths: async () => [
    { loc: '/', changefreq: 'monthly', priority: 1.0 },
    { loc: '/?lang=pt', changefreq: 'monthly', priority: 1.0 },
    { loc: '/?lang=en', changefreq: 'monthly', priority: 1.0 },
  ],
};
