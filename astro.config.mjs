// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// NOTE: update `site` to the final production domain before launch.
// Used for canonical URLs, sitemap, and Open Graph absolute URLs.
export default defineConfig({
  site: 'https://thefreedomschool.co',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // allow remote optimization if we later reference remote imagery
    domains: [],
  },
});
