import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  server: { port: 3333, host: true },
  site: 'https://marketday-charity-gcm.github.io/',
  integrations: [tailwind(),sitemap()]
});