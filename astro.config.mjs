// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: process.env.SITE || 'https://www.nurarif.com',
  base: process.env.BASE_PATH || '/blog',
  trailingSlash: 'always',
  // JANGAN tambahkan build.format: 'file' — hapus jika ada
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});