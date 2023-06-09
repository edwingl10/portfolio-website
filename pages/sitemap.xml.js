import Projects from '../src/projectData';

const URL = 'https://edwingl.dev';
export default function SiteMap() {}

function generateSiteMap() {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${['', '/about', '/projects']
  .map(
    (route) => `<url>
<loc>${URL}${route}</loc>

<xhtml:link 
rel="alternate" 
hreflang="en" 
href="${URL}${route}"/>

<xhtml:link 
rel="alternate" 
hreflang="es"
href="${URL}/es${route}"/>
</url>`
  )
  .join('')}

  ${Projects.map(
    ({ id }) => `<url>
    <loc>${URL}/projects/${id}</loc>

    <xhtml:link 
    rel="alternate"
    hreflang="en"
    href="${URL}/projects/${id}"/>

    <xhtml:link 
    rel="alternate"
    hreflang="es"
    href="${URL}/es/projects/${id}"/>
  </url>`
  ).join('')}
</urlset>`;
}

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'text/xml');

  const sitemap = generateSiteMap();
  res.write(sitemap);
  res.end();

  return { props: {} };
}
