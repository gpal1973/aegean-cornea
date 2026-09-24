import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aegeancornea.com',
  output: 'static',
  devToolbar: { enabled: false },
  build: { inlineStylesheets: 'always' },
});
