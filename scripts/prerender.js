// scripts/prerender.js
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

// Read data.json
const dataPath = path.resolve(rootDir, 'src', 'data.json');
const rawData = fs.readFileSync(dataPath, 'utf-8');
const data = JSON.parse(rawData);

const domain = 'https://nur-doc.com';

const routes = [
  {
    path: '/',
    title: data.pages.home.metaTitle,
    description: data.pages.home.metaDescription,
    h1: data.pages.home.hero.h1,
  },
  {
    path: '/why-nourdoc',
    title: data.pages.whyNourDoc.metaTitle,
    description: data.pages.whyNourDoc.metaDescription,
    h1: data.pages.whyNourDoc.hero.h1,
  },
  {
    path: '/product',
    title: data.pages.product.metaTitle,
    description: data.pages.product.metaDescription,
    h1: data.pages.product.hero.h1,
  },
  {
    path: '/benefits',
    title: data.pages.benefits.metaTitle,
    description: data.pages.benefits.metaDescription,
    h1: data.pages.benefits.hero.h1,
  },
  {
    path: '/security-compliance',
    title: data.pages.security.metaTitle,
    description: data.pages.security.metaDescription,
    h1: data.pages.security.hero.h1,
  },
  {
    path: '/subscription',
    title: data.pages.subscription.metaTitle,
    description: data.pages.subscription.metaDescription,
    h1: data.pages.subscription.hero.h1,
  },
  {
    path: '/medical-coding-billing',
    title: data.pages.medicalCoding.metaTitle,
    description: data.pages.medicalCoding.metaDescription,
    h1: data.pages.medicalCoding.hero.h1,
  },
  {
    path: '/integrations-deployment',
    title: data.pages.integrations.metaTitle,
    description: data.pages.integrations.metaDescription,
    h1: data.pages.integrations.hero.h1,
  },
  {
    path: '/partners-collaborators',
    title: data.pages.partners.metaTitle,
    description: data.pages.partners.metaDescription,
    h1: data.pages.partners.hero.h1,
  },
  {
    path: '/about-contact',
    title: data.pages.aboutContact.metaTitle,
    description: data.pages.aboutContact.metaDescription,
    h1: data.pages.aboutContact.hero.h1,
  },
];

async function prerender() {
  if (!fs.existsSync(distDir)) {
    console.error('dist directory does not exist. Run vite build first.');
    process.exit(1);
  }

  const baseHtmlPath = path.resolve(distDir, 'index.html');
  const baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8');

  console.log(`Starting SEO static prerender for ${routes.length} routes...`);

  for (const route of routes) {
    const canonicalUrl = `${domain}${route.path === '/' ? '' : route.path}`;

    let html = baseHtml;

    // 1. Replace Title
    html = html.replace(
      /<title>.*?<\/title>/,
      `<title>${route.title}</title>`
    );

    // 2. Replace or Insert Meta Description
    html = html.replace(
      /<meta name="description" content=".*?" \/>/,
      `<meta name="description" content="${route.description.replace(/"/g, '&quot;')}" />`
    );

    // 3. Inject Open Graph, Twitter & Canonical Tags before </head>
    const seoTags = `
    <link rel="canonical" href="${canonicalUrl}" />
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${route.title.replace(/"/g, '&quot;')}" />
    <meta property="og:description" content="${route.description.replace(/"/g, '&quot;')}" />
    <meta property="og:site_name" content="NourDoc" />
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${canonicalUrl}" />
    <meta name="twitter:title" content="${route.title.replace(/"/g, '&quot;')}" />
    <meta name="twitter:description" content="${route.description.replace(/"/g, '&quot;')}" />
  </head>`;

    html = html.replace('</head>', seoTags);

    // 4. Inject Crawlable Semantic Noscript Content into root for non-JS bots / SEO indexing
    const crawlableMarkup = `<div id="root"><noscript><div style="padding:2rem;max-width:800px;margin:0 auto;font-family:sans-serif;"><h1>${route.title}</h1><p>${route.description}</p><p>NourDoc is an Ambient Clinical Intelligence platform developed by M3 Hive. For full interactive capabilities, enable JavaScript.</p></div></noscript></div>`;
    html = html.replace('<div id="root"></div>', crawlableMarkup);

    // 5. Determine destination path
    if (route.path === '/') {
      fs.writeFileSync(baseHtmlPath, html, 'utf-8');
      console.log(`✓ Prerendered: / (dist/index.html)`);
    } else {
      const targetDir = path.resolve(distDir, route.path.slice(1));
      fs.mkdirSync(targetDir, { recursive: true });
      fs.writeFileSync(path.resolve(targetDir, 'index.html'), html, 'utf-8');
      console.log(`✓ Prerendered: ${route.path} (dist/${route.path.slice(1)}/index.html)`);
    }
  }

  // Update public/sitemap.xml and dist/sitemap.xml with canonical domain & clean routes
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${domain}${r.path === '/' ? '' : r.path}</loc>
    <changefreq>${r.path === '/' || r.path === '/about-contact' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${r.path === '/' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

  fs.writeFileSync(path.resolve(rootDir, 'public', 'sitemap.xml'), sitemapContent, 'utf-8');
  fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), sitemapContent, 'utf-8');

  // Update robots.txt
  const robotsContent = `User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml
`;
  fs.writeFileSync(path.resolve(rootDir, 'public', 'robots.txt'), robotsContent, 'utf-8');
  fs.writeFileSync(path.resolve(distDir, 'robots.txt'), robotsContent, 'utf-8');

  console.log('✓ Prerender and SEO build completed successfully.');
}

prerender();
