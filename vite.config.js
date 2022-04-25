import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
  define: {
    'process.env': process.env
  },
  resolve: {
    extensions: ['.vue', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.node', '.scss'],
    alias: {
      '@': resolve('./src'),
      '@views': resolve('./src/views')
    }
  },
  base: '/', // 设置打包路径
  server: {
    host: '0.0.0.0', // 设置后同一个服务器下的设备可以通过访问Network中的ip来访问项目
    port: 8080, // 自定义端口
    open: true // 设置服务启动时是否自动打开浏览器
  },
  plugins: [
    vue(),
    eslintPlugin({
      include: ['src/**/*.js', 'src/**/*.vue', 'src/**/*.ts'],
      exclude: ['./node_modules/**'],
      throwOnWarning: true
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ]
})
