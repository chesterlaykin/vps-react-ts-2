import react from '@vitejs/plugin-react'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'
import {resolve} from 'path';

const config: UserConfig = {
  plugins: [react(), ssr()],
  resolve: {
    alias: {
      "@": resolve(__dirname, './src'),
      "@@": resolve(__dirname, './src/components'),
      "~": resolve(__dirname, '.'),
      // "~/*": resolve(__dirname, './*'),
      "#root": resolve(__dirname),
    },
  },
  css: {
    preprocessorOptions: {
    scss: {
      // additionalData: `@import "@/assets/scss/start-files/index.scss";`
    }
  }
}
}

export default config
