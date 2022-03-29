/* eslint-disable @typescript-eslint/no-empty-function */
import {ServerResponse} from 'http';
import {type NextPageContext} from 'next';

const toUrl = (host: string, route: string): string =>
  `<url><loc>http://www.${host}${route}</loc></url>`;

const createSitemap = (host: string, routes: string[]): string =>
  `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${routes.map(route => toUrl(host, route)).join('')}
    </urlset>`;

const Sitemap = (): void => {};

Sitemap.getInitialProps = ({res, req}: NextPageContext): ServerResponse | undefined => {
  const routes = ['/'];
  const sitemap = createSitemap(req?.headers.host || '', routes);

  if (res) {
    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();
  }
  return res;
};

export default Sitemap;
