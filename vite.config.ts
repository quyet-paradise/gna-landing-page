import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Sitemap from 'vite-plugin-sitemap'
import routes from './src/router/app-route'

const pathSrc = path.resolve(__dirname, 'src')

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Sitemap({
      hostname: `https://www.thicongdenled247.com`,
      dynamicRoutes: routes.map((route: { path: any }) => route.path)
    })
  ],
  resolve: {
    alias: {
      '@/': `${pathSrc}/`,
    },
  },
})
