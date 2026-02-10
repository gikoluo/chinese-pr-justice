import { defineConfig } from 'astro/config';

export default defineConfig({
  // Output static HTML files
  output: 'static',
  // Build output goes to dist/ (Astro default)
  outDir: './dist',
  // Static assets are in static/ folder
  publicDir: './static',
});
