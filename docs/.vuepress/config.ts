import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import vueJsx from '@vitejs/plugin-vue-jsx'
import type { ViteBundlerOptions } from '@vuepress/bundler-vite'
import { path } from '@vuepress/utils'

export default defineUserConfig<DefaultThemeOptions, ViteBundlerOptions>({
  lang: 'en-US',
  title: 'Hello VuePress',
  description: 'Just playing around',

  theme: path.resolve(__dirname, '../../theme'),
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },

  bundler: '@vuepress/bundler-vite',
  bundlerConfig: {
    viteOptions: {
      plugins: [
        vueJsx({})
      ]
    }
  },
})
