import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: resolve(__dirname, 'src'),
  publicDir: resolve(__dirname, 'public'),
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        login: resolve(__dirname, 'src/pages/login/index.html'),
        register: resolve(__dirname, 'src/pages/register/index.html'),
        chats: resolve(__dirname, 'src/pages/chats/index.html'),
        settings: resolve(__dirname, 'src/pages/settings/index.html'),
        settingsEdit: resolve(__dirname, 'src/pages/settings-edit/index.html'),
        settingsPassword: resolve(__dirname, 'src/pages/settings-password/index.html'),
        error404: resolve(__dirname, 'src/pages/404/index.html'),
        error500: resolve(__dirname, 'src/pages/500/index.html'),
      },
    },
  },
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});
