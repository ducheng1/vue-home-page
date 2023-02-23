import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoPrefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import '@/assets/normalize.scss';`
      }
    },
    postcss: {
      plugins: [
        AutoPrefixer({
          overrideBrowserslist: [
            'Android 4.1',
            'iOS 7.1',
            'Chrome > 31',
            'ff > 31',
            'ie >= 8',
            'last 10 versions' // 所有主流浏览器最近10个版本
          ],
          grid: true
        })
      ]
    }
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  }
})
