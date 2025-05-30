import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.aurabora.org',
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
