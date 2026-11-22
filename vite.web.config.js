// Builds INAV Configurator as a static website (yarn build:web -> dist-web/).
import { defineConfig } from 'vite';
import inject from '@rollup/plugin-inject';
import pkg from './package.json';

export default defineConfig({
  base: './',
  assetsInclude: ['**/*.gltf', '**/*.glb'],
  define: {
    __APP_VERSION__: JSON.stringify(pkg.version),
  },
  build: {
    outDir: 'dist-web',
    emptyOutDir: true,
    assetsInlineLimit: Number.MAX_SAFE_INTEGER,
    chunkSizeWarningLimit: 10240,
  },
  plugins: [
    inject({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    {
      // Load the browser bridge before the app itself.
      name: 'inav-web-bridge',
      transformIndexHtml: {
        order: 'pre',
        handler: html => html.replace('<head>', '<head>\n<script type="module" src="/web/electronAPI.js"></script>'),
      },
    },
  ],
});
