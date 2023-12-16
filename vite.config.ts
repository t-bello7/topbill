import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa';

const manifestForPlugin: Partial<VitePWAOptions> = {
  // mode: 'development',
  // registerType: "autoUpdate",
  registerType: 'prompt',
  base: '/',
  manifest: {
    name: 'Check',
    theme_color: '#317EFB',
    short_name: 'Check',
    start_url: '/',
    display: 'standalone',
    description: 'A description for your application',
    lang: ' The default language of your application',
    dir: 'ltr',
    background_color: '#000000',
    orientation: 'any',
    icons: [
      {
        src: 'https://www.pwabuilder.com/assets/icons/icon_512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: 'https://www.pwabuilder.com/assets/icons/icon_192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    screenshots: [
      {
        src: 'https://www.pwabuilder.com/assets/screenshots/screen1.png',
        sizes: '2880x1800',
        type: 'image/png',
      },
    ],
    related_applications: [
      {
        platform: 'windows',
        url: ' The URL to your app in that app store',
      },
    ],
    prefer_related_applications: false,
    shortcuts: [
      {
        name: 'Invoices',
        url: '/invoices',
        description: 'A description of the functionality of this shortcut',
      },
    ],
  },
  devOptions: {
    enabled: true,
    /* when using generateSW the PWA plugin will switch to classic */
    type: 'module',
    navigateFallback: 'index.html',
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
});
