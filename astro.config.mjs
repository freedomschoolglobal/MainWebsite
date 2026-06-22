// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

// NOTE: update `site` to the final production domain before launch.
// Used for canonical URLs, sitemap, and Open Graph absolute URLs.
//
// Pages stay static (prerendered). The booking API routes in src/pages/api
// opt out with `export const prerender = false` and run as Netlify functions,
// keeping the Cal.com API key server-side. Requires a Git-connected Netlify
// deploy (functions don't deploy via drag-and-drop) + a CAL_API_KEY env var.
export default defineConfig({
  site: 'https://thefreedomschool.co',
  output: 'static',
  adapter: netlify(),
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    domains: [],
  },
});
