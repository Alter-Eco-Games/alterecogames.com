import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        'vue/macros',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: true,
      dirs: ['src/composables', 'src/store'],
      vueTemplate: true,
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      dts: true,
    }),
    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),
    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    vueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, '~/locales/**')],
    }),
  ],
})
