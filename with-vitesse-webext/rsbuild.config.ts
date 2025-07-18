import { defineConfig } from '@rsbuild/core'
import { pluginVue } from '@rsbuild/plugin-vue'
import Components from 'unplugin-vue-components/rspack'
import AutoImport from 'unplugin-auto-import/rspack'
import Icons from 'unplugin-icons/rspack'
import IconsResolver from 'unplugin-icons/resolver'
import { isDev, port, r } from './scripts/utils'
import packageJson from './package.json'

export default defineConfig({
  plugins: [pluginVue()],
  output: {
    // https://github.com/web-infra-dev/rsbuild/issues/3217
    sourceMap: {
      js: false,
    },
  },
  html: {
    mountId: 'app',
  },
  resolve: {
    alias: {
      '~/': './src/',
    },
  },
  source: {
    define: {
      __DEV__: isDev,
      __NAME__: JSON.stringify(packageJson.name),
    },
  },
  server: {
    port,
  },
  tools: {
    rspack: {
      plugins: [
        AutoImport({
          imports: [
            'vue',
            {
              'webextension-polyfill': [['=', 'browser']],
            },
          ],
          dts: r('src/auto-imports.d.ts'),
        }),

        Components({
          dirs: [r('src/components')],
          // generate `components.d.ts` for ts support with Volar
          dts: r('src/components.d.ts'),
          resolvers: [
            // auto import icons
            IconsResolver({
              prefix: '',
            }),
          ],
        }),

        Icons({}),
      ],
    },
  },
})
